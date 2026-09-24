/**
 * ==============================================================================
 * 🎧 BRAIN.FM SYNTH ENGINE — Olin.os Design System (02 · Molécule)
 * ==============================================================================
 * Ambiance de concentration générée en direct par la Web Audio API :
 * - nappe d'accords chaude et filtrée, qui respire lentement ;
 * - notes de piano électrique éparses (pentatonique), écho et stéréo ;
 * - souffle de bruit brun qui ondule comme une houle ;
 * - réverbération d'espace (réponse impulsionnelle générée) ;
 * - modulation d'amplitude à 40 Hz sur la musique (principe du « neural
 *   phase locking » de Brain.fm), assez douce pour rester musicale.
 *
 * Aucune dépendance externe : pas de flux YouTube susceptible d'être retiré ou
 * interdit d'intégration (erreur 150), pas de fichier audio à héberger.
 * Pilote le même DOM que le moteur YouTube (.olin-brainfm-player).
 * ==============================================================================
 */

// Progression Am9 → Fmaj7 → Cmaj7 → G6 (Hz), un accord toutes les 9 s
const CHORDS = [
  [110.0, 164.81, 196.0, 246.94, 261.63],
  [87.31, 130.81, 164.81, 220.0, 261.63],
  [130.81, 196.0, 246.94, 329.63, 392.0],
  [98.0, 146.83, 196.0, 246.94, 329.63]
];
// La mineur pentatonique : notes du piano, toujours consonantes avec la nappe
const MELODY = [440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
const CHORD_DURATION = 9;
const MASTER_VOLUME = 1.5;
const FADE = 1.5;

function createBrownNoise(ctx) {
  const length = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel += 1) {
    const data = buffer.getChannelData(channel);
    let last = 0;
    for (let i = 0; i < length; i += 1) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      data[i] = last * 3.5;
    }
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

// Réverbe : bruit stéréo à décroissance exponentielle de 3,5 s
function createReverb(ctx) {
  const seconds = 3.5;
  const length = Math.floor(ctx.sampleRate * seconds);
  const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel += 1) {
    const data = impulse.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.8);
    }
  }
  const convolver = ctx.createConvolver();
  convolver.buffer = impulse;
  return convolver;
}

export class BrainFmSynthController {
  constructor({ element }) {
    this.element = element;
    this.ctx = null;
    this.isPlaying = false;
    this.btnPlay = element.querySelector('.olin-brainfm-player__btn-play');
    if (this.btnPlay) this.btnPlay.addEventListener('click', () => this.toggle());
  }

  // Le graphe audio est construit au premier clic : l'AudioContext naît dans
  // le geste de l'utilisateur, il n'est donc jamais bloqué par l'autoplay.
  _build() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    this.ctx = ctx;

    // Sortie : compresseur doux pour lisser les pics, puis volume général
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const glue = ctx.createDynamicsCompressor();
    glue.threshold.value = -18;
    glue.ratio.value = 3;
    this.master.connect(glue).connect(ctx.destination);

    // Bus musique modulé à 40 Hz (profondeur ±15 %)
    this.music = ctx.createGain();
    this.music.gain.value = 0.85;
    const lfo40 = ctx.createOscillator();
    lfo40.frequency.value = 40;
    const lfo40Depth = ctx.createGain();
    lfo40Depth.gain.value = 0.15;
    lfo40.connect(lfo40Depth).connect(this.music.gain);
    this.music.connect(this.master);

    // Réverbe partagée (envoi)
    this.reverb = createReverb(ctx);
    const reverbReturn = ctx.createGain();
    reverbReturn.gain.value = 0.55;
    this.reverb.connect(reverbReturn).connect(this.music);

    // Nappe : scie + triangle désaccordées, filtre chaud qui respire
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 650;
    padFilter.Q.value = 0.7;
    const breath = ctx.createOscillator();
    breath.frequency.value = 0.045;
    const breathDepth = ctx.createGain();
    breathDepth.gain.value = 260;
    breath.connect(breathDepth).connect(padFilter.frequency);
    const padOut = ctx.createGain();
    padOut.gain.value = 0.5;
    padFilter.connect(padOut);
    padOut.connect(this.music);
    padOut.connect(this.reverb);

    this.voices = CHORDS[0].map((freq) => {
      const gain = ctx.createGain();
      gain.gain.value = 0.06;
      gain.connect(padFilter);
      return [
        ['sawtooth', -7],
        ['sawtooth', 7],
        ['triangle', 0]
      ].map(([type, detune]) => {
        const osc = ctx.createOscillator();
        osc.type = type;
        osc.frequency.value = freq;
        osc.detune.value = detune;
        osc.connect(gain);
        osc.start();
        return osc;
      });
    });

    // Écho du piano (croche pointée ~ 0,45 s)
    this.delay = ctx.createDelay(2);
    this.delay.delayTime.value = 0.45;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.38;
    const delayTone = ctx.createBiquadFilter();
    delayTone.type = 'lowpass';
    delayTone.frequency.value = 2200;
    this.delay.connect(delayTone).connect(feedback).connect(this.delay);
    delayTone.connect(this.music);
    delayTone.connect(this.reverb);

    // Houle : bruit brun filtré dont le volume ondule (hors modulation 40 Hz)
    const noise = createBrownNoise(ctx);
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 420;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.13;
    const swell = ctx.createOscillator();
    swell.frequency.value = 0.08;
    const swellDepth = ctx.createGain();
    swellDepth.gain.value = 0.06;
    swell.connect(swellDepth).connect(noiseGain.gain);
    noise.connect(noiseFilter).connect(noiseGain).connect(this.master);

    [lfo40, breath, noise, swell].forEach((node) => node.start());

    this.chordIndex = 0;
  }

  _nextChord() {
    if (!this.ctx || !this.isPlaying) return;
    this.chordIndex = (this.chordIndex + 1) % CHORDS.length;
    const now = this.ctx.currentTime;
    CHORDS[this.chordIndex].forEach((freq, i) => {
      this.voices[i].forEach((osc) => osc.frequency.setTargetAtTime(freq, now, 1.8));
    });
  }

  // Note de piano électrique : sinus + harmonique douce, attaque rapide,
  // longue décroissance, placée au hasard dans la stéréo
  _pluck() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const freq = MELODY[Math.floor(Math.random() * MELODY.length)];
    const velocity = 0.05 + Math.random() * 0.05;

    const env = ctx.createGain();
    env.gain.setValueAtTime(0, now);
    env.gain.linearRampToValueAtTime(velocity, now + 0.012);
    env.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (pan) pan.pan.value = Math.random() * 1.2 - 0.6;
    const out = pan || env;
    if (pan) env.connect(pan);
    out.connect(this.music);
    out.connect(this.delay);
    out.connect(this.reverb);

    [[1, 'sine', 1], [2, 'sine', 0.18], [3, 'triangle', 0.05]].forEach(([ratio, type, level]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq * ratio;
      gain.gain.value = level;
      osc.connect(gain).connect(env);
      osc.start(now);
      osc.stop(now + 3.4);
    });
  }

  // Notes espacées de 1,2 à 4 s, parfois une seconde note en réponse
  _scheduleMelody() {
    clearTimeout(this.melodyTimer);
    if (!this.isPlaying) return;
    this._pluck();
    if (Math.random() < 0.25) setTimeout(() => this.isPlaying && this._pluck(), 300);
    this.melodyTimer = setTimeout(() => this._scheduleMelody(), 1200 + Math.random() * 2800);
  }

  async play() {
    if (!this.ctx) this._build();
    await this.ctx.resume();
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(MASTER_VOLUME, now, FADE / 3);
    this._setPlaying(true);
    clearInterval(this.chordTimer);
    this.chordTimer = setInterval(() => this._nextChord(), CHORD_DURATION * 1000);
    this.melodyTimer = setTimeout(() => this._scheduleMelody(), 1800);
  }

  pause() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(0, now, FADE / 4);
    this._setPlaying(false);
    clearInterval(this.chordTimer);
    clearTimeout(this.melodyTimer);
    // Coupe le moteur une fois le fondu terminé (économie de CPU/batterie)
    clearTimeout(this._suspendTimer);
    this._suspendTimer = setTimeout(() => {
      if (!this.isPlaying) this.ctx.suspend();
    }, FADE * 1000);
  }

  toggle() {
    if (this.isPlaying) this.pause();
    else this.play();
  }

  _setPlaying(playing) {
    this.isPlaying = playing;
    this.element.classList.toggle('is-playing', playing);
    if (this.btnPlay) this.btnPlay.setAttribute('aria-pressed', String(playing));
  }
}

export function initBrainFmSynthPlayers(root = document) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  root.querySelectorAll('[data-brainfm-player]').forEach((element) => {
    if (!AudioCtx) {
      element.classList.add('is-error');
      return;
    }
    new BrainFmSynthController({ element });
  });
}
