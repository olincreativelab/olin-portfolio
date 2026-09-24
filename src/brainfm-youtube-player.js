/**
 * ==============================================================================
 * 🎧 BRAIN.FM YOUTUBE AUDIO ENGINE — Olin.os Design System (02 · Molécule)
 * ==============================================================================
 * Module d'immersion audio exploitant l'API officielle YouTube IFrame Player.
 * Permet de streamer l'audio de vidéos de concentration (Brain.fm / 40Hz / Lofi)
 * sans afficher la vidéo (lecteur invisible 1x1px déporté).
 *
 * Fonctionnalités :
 * - Chargement asynchrone sécurisé du SDK IFrame YouTube (`YT.Player`).
 * - Synchronisation bidirectionnelle avec les composants DOM `.olin-brainfm-player`.
 * - Commutation d'états cognitifs (Focus, Relax, Create).
 * - Contrôle Play/Pause, volume, et animation réactive de l'égaliseur CSS.
 * ==============================================================================
 */

// Catalogue des flux audio YouTube calibrés pour le Deep Work
export const BRAIN_FM_TRACKS = {
  focus: {
    id: "jfKfPfyJRdk", // Lofi Girl / Synthwave Focus Flow
    title: "Kyoto // 40Hz Beta Flow",
    badge: "FOCUS",
    bpm: 120,
    frequency: "40Hz Beta"
  },
  relax: {
    id: "rUxyKA_-grg", // Ambient Space / Theta Waves
    title: "Zenith // Theta 6Hz Calm",
    badge: "RELAX",
    bpm: 72,
    frequency: "6Hz Theta"
  },
  create: {
    id: "5qap5aO4i9A", // Lofi Hip Hop / Creative Pulse
    title: "Solaris // Alpha 10Hz Flow",
    badge: "CREATE",
    bpm: 96,
    frequency: "10Hz Alpha"
  }
};

let ytApiLoaded = false;
let ytApiLoading = false;
const readyCallbacks = [];

/**
 * Charge dynamiquement le script de l'API YouTube IFrame Player
 * @returns {Promise<void>}
 */
export function loadYouTubeIframeApi() {
  return new Promise((resolve) => {
    if (ytApiLoaded && window.YT && window.YT.Player) {
      resolve();
      return;
    }

    readyCallbacks.push(resolve);

    if (ytApiLoading) return;
    ytApiLoading = true;

    // Définition du callback global appelé par le script YouTube
    window.onYouTubeIframeAPIReady = () => {
      ytApiLoaded = true;
      ytApiLoading = false;
      while (readyCallbacks.length) {
        const cb = readyCallbacks.shift();
        if (cb) cb();
      }
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }
  });
}

/**
 * Contrôleur du lecteur Mini-Player Brain.fm
 */
export class BrainFmPlayerController {
  /**
   * @param {Object} options
   * @param {HTMLElement|string} options.element Élément ou sélecteur du player .olin-brainfm-player
   * @param {string} [options.defaultState='focus'] État mental initial ('focus', 'relax', 'create')
   * @param {number} [options.volume=60] Volume initial (0-100)
   */
  constructor(options = {}) {
    this.element = typeof options.element === "string" 
      ? document.querySelector(options.element) 
      : options.element;

    this.currentState = options.defaultState || "focus";
    this.initialVolume = options.volume ?? 60;
    this.player = null;
    this.isPlaying = false;
    this.isReady = false;

    if (!this.element) {
      console.warn("[BrainFmPlayer] Élément racine .olin-brainfm-player non trouvé.");
      return;
    }

    this._bindDom();
    this._initPlayer();
  }

  /**
   * Lie les sous-éléments du DOM
   * @private
   */
  _bindDom() {
    this.btnPlay = this.element.querySelector(".olin-brainfm-player__btn-play");
    this.badgeEl = this.element.querySelector(".olin-brainfm-player__badge");
    this.trackEl = this.element.querySelector(".olin-brainfm-player__track");
    this.btnToggle = this.element.querySelector(".olin-brainfm-player__btn-toggle");

    if (this.btnPlay) {
      this.btnPlay.addEventListener("click", () => this.toggle());
    }

    this.updateTrackMeta(this.currentState);
  }

  /**
   * Initialise le player YouTube invisible
   * @private
   */
  async _initPlayer() {
    await loadYouTubeIframeApi();

    // Conteneur caché hors-champ pour l'IFrame YouTube
    let container = document.getElementById("olin-brainfm-yt-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "olin-brainfm-yt-container";
      container.setAttribute("aria-hidden", "true");
      container.style.cssText = `
        position: fixed;
        bottom: -9999px;
        left: -9999px;
        width: 1px;
        height: 1px;
        opacity: 0.001;
        pointer-events: none;
        overflow: hidden;
        z-index: -100;
      `;
      document.body.appendChild(container);
    }

    const videoId = BRAIN_FM_TRACKS[this.currentState]?.id || BRAIN_FM_TRACKS.focus.id;

    this.player = new window.YT.Player("olin-brainfm-yt-container", {
      height: "1",
      width: "1",
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        loop: 1
      },
      events: {
        onReady: (event) => {
          this.isReady = true;
          event.target.setVolume(this.initialVolume);
        },
        onStateChange: (event) => {
          this._handleStateChange(event.data);
        },
        onError: (err) => {
          console.warn("[BrainFmPlayer] YouTube Player Error:", err);
        }
      }
    });
  }

  /**
   * Gère les changements d'état YouTube
   * @private
   */
  _handleStateChange(state) {
    // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
    if (state === 1) {
      this.isPlaying = true;
      this.element.classList.add("is-playing");
      if (this.btnPlay) this.btnPlay.setAttribute("aria-pressed", "true");
    } else {
      this.isPlaying = false;
      this.element.classList.remove("is-playing");
      if (this.btnPlay) this.btnPlay.setAttribute("aria-pressed", "false");
    }
  }

  /**
   * Lance ou met en pause la lecture
   */
  toggle() {
    if (!this.player || !this.isReady) {
      console.log("[BrainFmPlayer] En attente de l'initialisation de YouTube API...");
      return;
    }

    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (this.player && this.isReady) {
      this.player.playVideo();
    }
  }

  pause() {
    if (this.player && this.isReady) {
      this.player.pauseVideo();
    }
  }

  /**
   * Change l'état cognitif et charge la vidéo associée
   * @param {'focus'|'relax'|'create'} state 
   */
  setMentalState(state) {
    if (!BRAIN_FM_TRACKS[state]) return;
    this.currentState = state;
    this.updateTrackMeta(state);

    if (this.player && this.isReady) {
      const track = BRAIN_FM_TRACKS[state];
      if (this.isPlaying) {
        this.player.loadVideoById(track.id);
      } else {
        this.player.cueVideoById(track.id);
      }
    }
  }

  /**
   * Met à jour les libellés dans le DOM
   */
  updateTrackMeta(stateKey) {
    const track = BRAIN_FM_TRACKS[stateKey] || BRAIN_FM_TRACKS.focus;
    if (this.badgeEl) this.badgeEl.textContent = track.badge;
    if (this.trackEl) this.trackEl.textContent = track.title;
  }

  /**
   * Ajuste le volume sonore (0 - 100)
   */
  setVolume(vol) {
    if (this.player && this.isReady) {
      this.player.setVolume(Math.max(0, Math.min(100, vol)));
    }
  }
}

/**
 * Initialisation automatique sur les éléments portant l'attribut [data-brainfm-player]
 */
export function initAutoBrainFmPlayers() {
  const nodes = document.querySelectorAll("[data-brainfm-player]");
  const instances = [];
  nodes.forEach((el) => {
    instances.push(new BrainFmPlayerController({ element: el }));
  });
  return instances;
}
