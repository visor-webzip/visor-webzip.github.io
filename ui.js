(function () {
  var els = {};
  var state = {
    loadingActive: false,
    progressTimer: null,
    lastProgressValue: 0,
    inlineToastTimer: null,
    toastTimer: null
  };

  function init(options) {
    els = options || {};
  }

  function isLoading() {
    return state.loadingActive;
  }

  function setLoading(active, options) {
    var opts = options || {};
    var mode = opts.mode === 'overlay' ? 'overlay' : 'block';
    state.loadingActive = !!active;
    if (els.loadingScreen) {
      if (active) {
        els.loadingScreen.removeAttribute('hidden');
      } else {
        els.loadingScreen.setAttribute('hidden', '');
      }
    }
    document.body.setAttribute('data-loading', active ? 'true' : 'false');
    if (active) {
      document.body.setAttribute('data-loading-mode', mode);
    } else {
      document.body.removeAttribute('data-loading-mode');
    }
    if (!active) {
      stopProgress();
    }
  }

  function setLoadingMessage(message) {
    if (els.loadingMessage) {
      els.loadingMessage.textContent = message;
    }
  }

  function setLoadingEta(message) {
    if (els.loadingEta) {
      els.loadingEta.textContent = message;
    }
  }

  function setLoadingEtaVisible(visible) {
    if (!els.loadingEta) return;
    if (visible) {
      els.loadingEta.removeAttribute('hidden');
    } else {
      els.loadingEta.setAttribute('hidden', '');
    }
  }

  function setLoadingProgressVisible(visible) {
    if (!els.loadingBarWrap) return;
    if (visible) {
      els.loadingBarWrap.removeAttribute('hidden');
    } else {
      els.loadingBarWrap.setAttribute('hidden', '');
    }
  }

  function setProgress(value) {
    if (!els.loadingBar) return;
    var percent = Math.max(0, Math.min(100, value));
    state.lastProgressValue = percent;
    els.loadingBar.style.width = percent + '%';
  }

  function startProgress(initial) {
    stopProgress();
    var current = initial || 5;
    setProgress(current);
    state.progressTimer = setInterval(function () {
      current = Math.min(current + 2, 85);
      setProgress(current);
    }, 600);
  }

  function stopProgress() {
    if (state.progressTimer) {
      clearInterval(state.progressTimer);
      state.progressTimer = null;
    }
  }

  function setStatus(message) {
    if (els.output) {
      els.output.textContent = message;
    }
    if (state.loadingActive && !(message && /^https?:\/\//i.test(message))) {
      setLoadingMessage(message);
    }
  }

  function flashMessage(message) {
    if (!els.output) return;
    els.output.textContent = message;
    if (els.getCurrentShareLink) {
      var currentShareLink = els.getCurrentShareLink();
      if (currentShareLink) {
        setTimeout(function () {
          els.output.textContent = currentShareLink;
        }, 1500);
      }
    }
  }

  function showInlineToast(button, message) {
    if (!button) return;
    var existing = button.querySelector('.inline-toast');
    var bubble = existing || document.createElement('span');
    bubble.className = 'inline-toast';
    bubble.textContent = message;
    if (!existing) {
      button.appendChild(bubble);
    }
    button.classList.add('show-toast');
    if (state.inlineToastTimer) {
      clearTimeout(state.inlineToastTimer);
    }
    state.inlineToastTimer = setTimeout(function () {
      button.classList.remove('show-toast');
    }, 1300);
  }

  function showToast(message) {
    if (!els.globalToast) return;
    els.globalToast.textContent = message;
    els.globalToast.removeAttribute('hidden');
    if (state.toastTimer) {
      clearTimeout(state.toastTimer);
    }
    state.toastTimer = setTimeout(function () {
      if (els.globalToast) {
        els.globalToast.setAttribute('hidden', '');
      }
    }, 2800);
  }

  function setUploadStatus(message, options) {
    if (els.uploadStatus) {
      var opts = options || {};
      if (opts.html) {
        els.uploadStatus.innerHTML = String(message || '');
      } else {
        els.uploadStatus.textContent = message;
      }
      els.uploadStatus.classList.toggle('is-highlight', !!opts.highlight);
    }
  }

  function setZipStatus(message, options) {
    var opts = options || {};
    if (els.zipStatus) {
      els.zipStatus.textContent = message;
      els.zipStatus.classList.toggle('is-highlight', !!opts.highlight);
    }
  }

  function setHtmlZipStatus(message, options) {
    var opts = options || {};
    if (els.htmlZipStatus) {
      els.htmlZipStatus.textContent = message;
      els.htmlZipStatus.classList.toggle('is-highlight', !!opts.highlight);
    }
  }

  window.UI = {
    init: init,
    isLoading: isLoading,
    setLoading: setLoading,
    setLoadingMessage: setLoadingMessage,
    setLoadingEta: setLoadingEta,
    setLoadingEtaVisible: setLoadingEtaVisible,
    setLoadingProgressVisible: setLoadingProgressVisible,
    setProgress: setProgress,
    startProgress: startProgress,
    stopProgress: stopProgress,
    setStatus: setStatus,
    flashMessage: flashMessage,
    showInlineToast: showInlineToast,
    showToast: showToast,
    setUploadStatus: setUploadStatus,
    setZipStatus: setZipStatus,
    setHtmlZipStatus: setHtmlZipStatus
  };
})();
