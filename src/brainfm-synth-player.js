/**
 * ==============================================================================
 * 🎧 BRAIN.FM SYNTH ENGINE — Olin.os Design System (02 · Molécule)
 * ==============================================================================
 * Ambiance « pluie cosmique » générée en direct par la Web Audio API :
 * - pluie : rideau de pluie filtré, gouttes éparses placées dans la stéréo,
 *   grondement lointain et rafales lentes ;
 * - cosmos : nappe grave et large qui évolue lentement, scintillement aigu,
 *   tintements d'étoiles rares noyés dans une réverbe de 7 s ;
 * - modulation d'amplitude à 40 Hz sur la nappe (principe du « neural phase
 *   locking » de Brain.fm), assez douce pour rester enveloppante.
 *
 * Aucune dépendance externe : pas de flux YouTube susceptible d'être retiré ou
 * interdit d'intégration (erreur 150), pas de fichier audio à héberger.
 * Pilote le même DOM que le moteur YouTube (.olin-brainfm-player).
 * ==============================================================================
 */

// Nappe cosmique : Dm9 → B♭maj7 → Fmaj9 → Cadd9 (Hz), un accord toutes les 14 s
const CHORDS = [
  [73.42, 110.0, 174.61, 261.63, 329.63],
  [58.27, 116.54, 174.61, 220.0, 293.66],
  [87.31, 130.81, 196.0, 261.63, 392.0],
  [65.41, 98.0, 146.83, 196.0, 293.66]
];
// Tintements d'étoiles (ré mineur pentatonique, registre aigu)
const STARS = [587.33, 698.46, 880.0, 1046.5, 1174.66, 1396.91, 1760.0];
const CHORD_DURATION = 14;
const MASTER_VOLUME = 1.4;
const FADE = 2.5;

function createNoiseBuffer(ctx, seconds, color) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel += 1) {
    const data = buffer.getChannelData(channel);
    let last = 0;
    for (let i = 0; i < length; i += 1) {
      const white = Math.random() * 2 - 1;
      if (color === 'brown') {
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
      } else {
        data[i] = white;
      }
    }
  }
  return buffer;
}

function loopSource(ctx, buffer) {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

// Réverbe : bruit stéréo décorrélé à décroissance exponentielle
function createReverb(ctx, seconds) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel += 1) {
    const data = impulse.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 3);
    }
  }
  const convolver = ctx.createConvolver();
  convolver.buffer = impulse;
  return convolver;
}

function lfo(ctx, frequency, depth, target) {
  const osc = ctx.createOscillator();
  osc.frequency.value = frequency;
  const gain = ctx.createGain();
  gain.gain.value = depth;
  osc.connect(gain).connect(target);
  osc.start();
  return osc;
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
    this.pan = (node, value) => {
      if (!ctx.createStereoPanner) return node;
      const panner = ctx.createStereoPanner();
      panner.pan.value = value;
      node.connect(panner);
      return panner;
    };

    // Sortie : compresseur doux, puis volume général
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const glue = ctx.createDynamicsCompressor();
    glue.threshold.value = -20;
    glue.ratio.value = 2.5;
    this.master.connect(glue).connect(ctx.destination);

    // Grande réverbe d'espace, partagée par la nappe, les étoiles et un peu de pluie
    this.space = createReverb(ctx, 7);
    const spaceReturn = ctx.createGain();
    spaceReturn.gain.value = 0.7;
    this.space.connect(spaceReturn).connect(this.master);

    this._buildRain();
    this._buildCosmos();

    this.chordIndex = 0;
  }

  _buildRain() {
    const ctx = this.ctx;
    const white = createNoiseBuffer(ctx, 5, 'white');

    // Rideau de pluie : bruit blanc stéréo filtré en bande « crépitement »
    const curtain = loopSource(ctx, white);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 900;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 6500;
    const curtainGain = ctx.createGain();
    curtainGain.gain.value = 0.045;
    lfo(ctx, 0.05, 0.015, curtainGain.gain); // rafales lentes
    curtain.connect(hp).connect(lp).connect(curtainGain).connect(this.master);

    // Grondement lointain (pluie sur les toits, au loin)
    const rumble = loopSource(ctx, createNoiseBuffer(ctx, 5, 'brown'));
    const rumbleFilter = ctx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.value = 280;
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.value = 0.16;
    lfo(ctx, 0.03, 0.05, rumbleGain.gain);
    rumble.connect(rumbleFilter).connect(rumbleGain).connect(this.master);

    // Bus des gouttes : un peu d'espace autour
    this.drops = ctx.createGain();
    this.drops.gain.value = 1;
    this.drops.connect(this.master);
    const dropsSend = ctx.createGain();
    dropsSend.gain.value = 0.25;
    this.drops.connect(dropsSend).connect(this.space);

    this.dropBuffer = white;
    [curtain, rumble].forEach((node) => node.start());
  }

  _buildCosmos() {
    const ctx = this.ctx;

    // Nappe modulée à 40 Hz (profondeur ±12 %)
    const pad = ctx.createGain();
    pad.gain.value = 0.88;
    lfo(ctx, 40, 0.12, pad.gain);
    pad.connect(this.master);
    const padSend = ctx.createGain();
    padSend.gain.value = 0.9;
    pad.connect(padSend).connect(this.space);

    // Filtre sombre qui s'ouvre et se referme sur ~30 s
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 520;
    padFilter.Q.value = 1.2;
    lfo(ctx, 0.033, 240, padFilter.frequency);
    padFilter.connect(pad);

    // Chaque note : 2 voix désaccordées, écartées gauche / droite
    this.voices = CHORDS[0].map((freq, noteIndex) => {
      const gain = ctx.createGain();
      gain.gain.value = noteIndex === 0 ? 0.09 : 0.045;
      gain.connect(padFilter);
      return [[-9, -0.75, 'sawtooth'], [9, 0.75, 'triangle']].map(([detune, side, type]) => {
        const osc = ctx.createOscillator();
        osc.type = type;
        osc.frequency.value = freq;
        osc.detune.value = detune;
        lfo(ctx, 0.07 + Math.random() * 0.08, 4, osc.detune); // dérive lente
        this.pan(osc, side).connect(gain);
        osc.start();
        return osc;
      });
    });

    // Scintillement : harmoniques aiguës très douces qui vont et viennent
    this.shimmer = [2, 3].map((ratio, i) => {
      const osc = ctx.createOscillator();
      osc.frequency.value = CHORDS[0][4] * ratio;
      const gain = ctx.createGain();
      gain.gain.value = 0.006;
      lfo(ctx, 0.11 + i * 0.07, 0.006, gain.gain);
      lfo(ctx, 0.2, 3, osc.frequency);
      const out = this.pan(osc, i ? 0.6 : -0.6);
      out.connect(gain).connect(this.space);
      osc.start();
      return { osc, ratio };
    });
  }

  _nextChord() {
    if (!this.ctx || !this.isPlaying) return;
    this.chordIndex = (this.chordIndex + 1) % CHORDS.length;
    const chord = CHORDS[this.chordIndex];
    const now = this.ctx.currentTime;
    chord.forEach((freq, i) => {
      this.voices[i].forEach((osc) => osc.frequency.setTargetAtTime(freq, now, 3));
    });
    this.shimmer.forEach(({ osc, ratio }) => osc.frequency.setTargetAtTime(chord[4] * ratio, now, 3));
  }

  // Une goutte : éclat de bruit très court, filtré à une hauteur aléatoire
  _drop(when) {
    const ctx = this.ctx;
    const source = ctx.createBufferSource();
    source.buffer = this.dropBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800 + Math.random() * 5200;
    filter.Q.value = 4 + Math.random() * 8;
    const env = ctx.createGain();
    const big = Math.random() < 0.08;
    const level = big ? 0.12 + Math.random() * 0.08 : 0.02 + Math.random() * 0.05;
    const decay = big ? 0.09 : 0.025 + Math.random() * 0.03;
    env.gain.setValueAtTime(level, when);
    env.gain.exponentialRampToValueAtTime(0.0001, when + decay);
    source.connect(filter).connect(env);
    this.pan(env, Math.random() * 1.8 - 0.9).connect(this.drops);
    source.start(when, Math.random() * 4, decay + 0.02);
  }

  // ~45 gouttes par seconde, programmées par fenêtres de 100 ms
  _scheduleDrops() {
    clearTimeout(this.dropTimer);
    if (!this.isPlaying) return;
    const now = this.ctx.currentTime;
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i += 1) this._drop(now + 0.05 + Math.random() * 0.1);
    this.dropTimer = setTimeout(() => this._scheduleDrops(), 100);
  }

  // Tintement d'étoile : sinus à attaque lente, longue traîne dans l'espace
  _star() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const freq = STARS[Math.floor(Math.random() * STARS.length)];
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, now);
    env.gain.linearRampToValueAtTime(0.03 + Math.random() * 0.02, now + 0.35);
    env.gain.exponentialRampToValueAtTime(0.0001, now + 6);
    const out = this.pan(env, Math.random() * 1.4 - 0.7);
    out.connect(this.space);
    const dry = ctx.createGain();
    dry.gain.value = 0.35;
    out.connect(dry).connect(this.master);
    [[1, 1], [2.01, 0.25]].forEach(([ratio, level]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq * ratio;
      gain.gain.value = level;
      osc.connect(gain).connect(env);
      osc.start(now);
      osc.stop(now + 6.2);
    });
  }

  _scheduleStars() {
    clearTimeout(this.starTimer);
    if (!this.isPlaying) return;
    this._star();
    this.starTimer = setTimeout(() => this._scheduleStars(), 5000 + Math.random() * 7000);
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
    this._scheduleDrops();
    this.starTimer = setTimeout(() => this._scheduleStars(), 3000);
  }

  pause() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(0, now, FADE / 5);
    this._setPlaying(false);
    clearInterval(this.chordTimer);
    clearTimeout(this.dropTimer);
    clearTimeout(this.starTimer);
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
