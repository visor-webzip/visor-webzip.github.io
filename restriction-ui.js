(function () {
  var UI = window.UI || {};
  var Restrictions = window.Restrictions || {};
  var t = function (key, vars) { return key; };
  var currentLang = 'es';
  var ctx = {};
  var restrictCountdownTimer = null;
  var STORAGE_KEY = 'visor-webzip-restrictions';

  function init(options) {
    options = options || {};
    ctx = options.context || {};
    if (options.t) t = options.t;
    if (options.lang) currentLang = options.lang;
    if (options.ui) UI = options.ui;
    if (options.restrictions) Restrictions = options.restrictions;
    clearLegacyStorage();
  }

  function saveToStorage() {
    return;
  }

  function loadFromStorage() {
    return;
  }

  function clearLegacyStorage() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function updateQuickRestrictInfo() {
    var infoEl = document.querySelector('[data-quick-restrict-info]');
    if (!infoEl) return;
    var enabled = !!(get('restrictionToggle') && get('restrictionToggle').checked);
    if (!enabled) {
      infoEl.textContent = t('settings.summaryNoActions') || 'ninguna';
      infoEl.setAttribute('data-active', '0');
      return;
    }
    var parts = [];
    var hasStart = !!(get('restrictionHasStart') && get('restrictionHasStart').checked);
    var startValue = hasStart ? normalizeInputDateTime(get('restrictionStartInput')) : '';
    if (!hasStart) {
      parts.push(t('restrictionModal.rangeNoStart') || 'Sin fecha de inicio');
    } else if (startValue) {
      var startText = Restrictions.formatRestrictionDate ? Restrictions.formatRestrictionDate(startValue, currentLang) : startValue;
      if (startText) {
        var openTpl = t('badges.opening') || 'Inicio: {date}';
        parts.push(openTpl.replace('{date}', startText));
      }
    }
    if (get('restrictionNoEnd') && !get('restrictionNoEnd').checked) {
      parts.push(t('restrictionModal.rangeNoEnd') || 'Sin fecha de fin');
    } else {
      var endValue = normalizeInputDateTime(get('restrictionEndInput'), { endOfDay: true });
      if (endValue) {
        var endText = Restrictions.formatRestrictionDate ? Restrictions.formatRestrictionDate(endValue, currentLang) : endValue;
        if (endText) {
          var closeTpl = t('badges.closing') || 'Fin: {date}';
          parts.push(closeTpl.replace('{date}', endText));
        }
      }
    }
    var allowed = [];
    if (get('restrictionAllowShare') && get('restrictionAllowShare').checked) allowed.push(t('settings.allowShare') || 'Compartir');
    if (get('restrictionAllowEmbed') && get('restrictionAllowEmbed').checked) allowed.push(t('settings.allowEmbed') || 'Insertar en web');
    if (get('restrictionAllowDownload') && get('restrictionAllowDownload').checked) allowed.push(t('settings.allowDownload') || 'Descargar');
    var actionsText = allowed.length ? allowed.join(', ') : (t('settings.summaryNoActions') || 'ninguna');
    var actionsLineTpl = t('settings.summaryAllowedActions') || 'Acciones permitidas en el gestor de recursos: {actions}';
    parts.push(actionsLineTpl.replace('{actions}', actionsText));
    infoEl.textContent = parts.join(' · ');
    infoEl.setAttribute('data-active', '1');
  }

  function get(key) {
    return ctx && key in ctx ? ctx[key] : null;
  }

  function getValue(key) {
    var v = get(key);
    return typeof v === 'function' ? v() : v;
  }

  function setValue(key, value) {
    var v = get(key);
    if (typeof v === 'function') {
      v(value);
    } else {
      ctx[key] = value;
    }
  }

  function setLang(lang) {
    if (lang) currentLang = lang;
    syncWarningMessageDefaultForLang();
    updateRestrictionPeriodHint();
  }

  function getKnownWarningDefaultMessages() {
    var list = [];
    var dict = window.I18N || {};
    Object.keys(dict).forEach(function (lang) {
      var value = dict[lang]
        && dict[lang].settings
        && dict[lang].settings.warningMessageDefault
        ? String(dict[lang].settings.warningMessageDefault).trim()
        : '';
      if (value && list.indexOf(value) === -1) {
        list.push(value);
      }
    });
    list.push('El tiempo de acceso se agota en 5 minutos.');
    return list;
  }

  function syncWarningMessageDefaultForLang() {
    var input = get('restrictionWarningMessage');
    if (!input) return;
    var current = input.value ? String(input.value).trim() : '';
    var translatedDefault = t('settings.warningMessageDefault') || 'El tiempo de acceso se agota en {minutes} minutos.';
    if (!current) {
      input.value = translatedDefault;
      return;
    }
    var knownDefaults = getKnownWarningDefaultMessages();
    if (knownDefaults.indexOf(current) !== -1) {
      input.value = translatedDefault;
    }
  }

  function toLocalIso(date, options) {
    if (!(date instanceof Date) || isNaN(date.getTime())) return '';
    options = options || {};
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var year = date.getFullYear();
    var month = pad(date.getMonth() + 1);
    var day = pad(date.getDate());
    var hour = options.endOfDay ? 23 : date.getHours();
    var minute = options.endOfDay ? 59 : date.getMinutes();
    return year + '-' + month + '-' + day + 'T' + pad(hour) + ':' + pad(minute);
  }

  function normalizeInputDateTime(inputEl, options) {
    var raw = inputEl ? inputEl.value : '';
    var normalized = Restrictions.normalizeDateTimeValue(raw, options);
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(normalized)) {
      return normalized;
    }
    if (!inputEl) return normalized;
    try {
      if (inputEl.valueAsDate && !isNaN(inputEl.valueAsDate.getTime())) {
        var fromDate = toLocalIso(inputEl.valueAsDate, options);
        if (fromDate) return fromDate;
      }
      if (typeof inputEl.valueAsNumber === 'number' && !isNaN(inputEl.valueAsNumber)) {
        var fromNumber = toLocalIso(new Date(inputEl.valueAsNumber), options);
        if (fromNumber) return fromNumber;
      }
    } catch (e) {}
    return normalized;
  }

  function toInputDateTimeValue(value) {
    if (!value) return '';
    var date = new Date(value);
    if (isNaN(date.getTime())) return '';
    return toLocalIso(date);
  }

  function hasExplicitStart(data) {
    if (!data || !data.startAt) return false;
    var startMs = Date.parse(data.startAt);
    if (isNaN(startMs)) return false;
    var createdMs = Date.parse(data.createdAt || '');
    if (isNaN(createdMs)) return true;
    return Math.abs(startMs - createdMs) > 60 * 1000;
  }

  function loadRestrictionsPayload(data) {
    if (!data || !data.enabled) return false;
    if (get('restrictionToggle')) get('restrictionToggle').checked = true;
    if (get('restrictionHasStart')) get('restrictionHasStart').checked = hasExplicitStart(data);
    if (get('restrictionStartInput')) {
      get('restrictionStartInput').value = hasExplicitStart(data) ? toInputDateTimeValue(data.startAt) : '';
    }
    if (get('restrictionNoEnd')) get('restrictionNoEnd').checked = !data.neverExpires && !!data.endAt;
    if (get('restrictionEndInput')) {
      get('restrictionEndInput').value = (!data.neverExpires && data.endAt) ? toInputDateTimeValue(data.endAt) : '';
    }
    if (get('restrictionLiveEnd')) get('restrictionLiveEnd').checked = !!data.enforceEndDuringView;
    if (get('restrictionWarningMinutes')) {
      get('restrictionWarningMinutes').value = data.warningMinutes !== undefined ? String(data.warningMinutes) : '5';
    }
    if (get('restrictionWarningMessage')) {
      get('restrictionWarningMessage').value = data.warningMessage || (t('settings.warningMessageDefault') || 'El tiempo de acceso se agota en {minutes} minutos.');
    }
    if (get('restrictionAllowShare')) get('restrictionAllowShare').checked = !!data.allowShare;
    if (get('restrictionAllowEmbed')) get('restrictionAllowEmbed').checked = !!data.allowEmbed;
    if (get('restrictionAllowDownload')) get('restrictionAllowDownload').checked = !!data.allowDownload;
    applyRestrictionUiState();
    updateRestrictionSummary();
    return true;
  }


  function applyRestrictionUiState() {
    var enabled = !!(get('restrictionToggle') && get('restrictionToggle').checked);
    if (get('restrictionFields')) {
      if (enabled) get('restrictionFields').removeAttribute('hidden');
      else get('restrictionFields').setAttribute('hidden', '');
    }
    if (get('restrictionActionsPanel')) {
      if (enabled) get('restrictionActionsPanel').removeAttribute('hidden');
      else get('restrictionActionsPanel').setAttribute('hidden', '');
    }
    var restrictNote = document.querySelector('[data-restrict-actions-note]');
    if (restrictNote) {
      if (enabled) restrictNote.removeAttribute('hidden');
      else restrictNote.setAttribute('hidden', '');
    }
    if (get('restrictionHint')) {
      // This hint is part of the "Create a ZIP" publish choice card and should always be visible.
      get('restrictionHint').removeAttribute('hidden');
    }
    // The "restrict existing ZIP" accordion should always be visible. It is enabled/disabled
    // elsewhere based on the toggle state.
    if (get('restrictionAccordion')) {
      get('restrictionAccordion').removeAttribute('hidden');
    }
    if (get('restrictionStartWrap')) {
      var hasStartDate = !!(get('restrictionHasStart') && get('restrictionHasStart').checked);
      if (hasStartDate) get('restrictionStartWrap').removeAttribute('hidden');
      else get('restrictionStartWrap').setAttribute('hidden', '');
    }
    if (get('restrictionEndWrap')) {
      var hasEndDate = !!(get('restrictionNoEnd') && get('restrictionNoEnd').checked);
      if (hasEndDate) get('restrictionEndWrap').removeAttribute('hidden');
      else get('restrictionEndWrap').setAttribute('hidden', '');
    }
    if (get('restrictionEndOptions')) {
      var showEndOptions = enabled && !!(get('restrictionNoEnd') && get('restrictionNoEnd').checked);
      if (showEndOptions) get('restrictionEndOptions').removeAttribute('hidden');
      else get('restrictionEndOptions').setAttribute('hidden', '');
    }
    if (get('restrictionNoEnd') && get('restrictionEndInput')) {
      var hasEndDate2 = !!get('restrictionNoEnd').checked;
      get('restrictionEndInput').disabled = !hasEndDate2;
    }
    if (get('restrictionLiveEnd')) {
      var hasEndDate = !!(get('restrictionNoEnd') && get('restrictionNoEnd').checked);
      var liveEndDisabled = !enabled || !hasEndDate;
      get('restrictionLiveEnd').disabled = !!liveEndDisabled;
      if (liveEndDisabled) {
        get('restrictionLiveEnd').checked = false;
      }
      if (get('restrictionLiveEndWrap')) {
        if (liveEndDisabled) {
          get('restrictionLiveEndWrap').setAttribute('hidden', '');
        } else {
          get('restrictionLiveEndWrap').removeAttribute('hidden');
        }
      }
      if (get('restrictionWarningWrap')) {
        var showWarning = !liveEndDisabled && !!get('restrictionLiveEnd').checked;
        if (showWarning) {
          get('restrictionWarningWrap').removeAttribute('hidden');
        } else {
          get('restrictionWarningWrap').setAttribute('hidden', '');
        }
      }
      var warningMinutesValue = getWarningMinutesValue();
      var warningEnabled = !liveEndDisabled && !!get('restrictionLiveEnd').checked && warningMinutesValue > 0;
      if (get('restrictionWarningMinutes')) {
        get('restrictionWarningMinutes').disabled = liveEndDisabled || !get('restrictionLiveEnd').checked;
      }
      if (get('restrictionWarningMessage')) {
        get('restrictionWarningMessage').disabled = !warningEnabled;
        var warningMessageField = get('restrictionWarningMessage').closest
          ? get('restrictionWarningMessage').closest('.settings-field--compact')
          : null;
        if (warningMessageField) {
          if (warningEnabled) warningMessageField.classList.remove('is-disabled');
          else warningMessageField.classList.add('is-disabled');
        }
      }
    }
    if (get('restrictionZipApply')) {
      get('restrictionZipApply').disabled = !enabled || !getValue('restrictionZipFile');
    }
    updateRestrictionSummary();
    var lockSvg = enabled
      ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
      : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>';
    var lockTargets = document.querySelectorAll('[data-lock-indicator], [data-main-settings-open]');
    lockTargets.forEach(function (target) {
      var icon = target.querySelector('svg');
      if (icon) {
        icon.innerHTML = lockSvg;
      }
      if (enabled) {
        target.classList.add('is-locked');
        target.classList.remove('is-unlocked');
      } else {
        target.classList.remove('is-locked');
        target.classList.add('is-unlocked');
      }
    });
  }


  function updateRestrictionDefaults() {
    if (!get('restrictionStartInput') || !get('restrictionEndInput')) return;
    var now = new Date();
    var hasStart = !!(get('restrictionHasStart') && get('restrictionHasStart').checked);
    if (hasStart && !get('restrictionStartInput').value) {
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      var localValue = now.getFullYear()
        + '-' + pad(now.getMonth() + 1)
        + '-' + pad(now.getDate())
        + 'T' + pad(now.getHours())
        + ':' + pad(now.getMinutes());
      get('restrictionStartInput').value = localValue;
    }
    if (get('restrictionNoEnd') && !get('restrictionNoEnd').checked) {
      get('restrictionEndInput').value = '';
    }
    if (get('restrictionWarningMinutes')) {
      var currentMinutes = parseInt(get('restrictionWarningMinutes').value, 10);
      if (isNaN(currentMinutes) || currentMinutes < 0) {
        get('restrictionWarningMinutes').value = '5';
      }
    }
    if (get('restrictionWarningMessage') && !get('restrictionWarningMessage').value) {
      get('restrictionWarningMessage').value = t('settings.warningMessageDefault') || 'El tiempo de acceso se agota en {minutes} minutos.';
    }
  }

  function resetDefaults() {
    if (get('restrictionToggle')) get('restrictionToggle').checked = false;
    if (get('restrictionHasStart')) get('restrictionHasStart').checked = false;
    if (get('restrictionStartInput')) get('restrictionStartInput').value = '';
    if (get('restrictionNoEnd')) get('restrictionNoEnd').checked = false;
    if (get('restrictionEndInput')) get('restrictionEndInput').value = '';
    if (get('restrictionLiveEnd')) get('restrictionLiveEnd').checked = false;
    if (get('restrictionWarningMinutes')) get('restrictionWarningMinutes').value = '5';
    if (get('restrictionWarningMessage')) {
      get('restrictionWarningMessage').value = t('settings.warningMessageDefault') || 'El tiempo de acceso se agota en {minutes} minutos.';
    }
    if (get('restrictionAllowShare')) get('restrictionAllowShare').checked = true;
    if (get('restrictionAllowEmbed')) get('restrictionAllowEmbed').checked = true;
    if (get('restrictionAllowDownload')) get('restrictionAllowDownload').checked = false;
    applyRestrictionUiState();
    updateRestrictionDefaults();
    updateRestrictionSummary();
  }


  function buildRestrictionsPayload() {
    if (!get('restrictionToggle') || !get('restrictionToggle').checked) return null;
    updateRestrictionDefaults();
    var hasStart = !!(get('restrictionHasStart') && get('restrictionHasStart').checked);
    var startValue = hasStart ? normalizeInputDateTime(get('restrictionStartInput')) : '';
    var endValue = normalizeInputDateTime(get('restrictionEndInput'), { endOfDay: true });
    var startAt = (hasStart && startValue) ? new Date(startValue).toISOString() : new Date().toISOString();
    var neverExpires = !(get('restrictionNoEnd') && get('restrictionNoEnd').checked);
    var endAt = null;
    if (!neverExpires && endValue) {
      endAt = new Date(endValue).toISOString();
    }
    var warningMinutesRaw = get('restrictionWarningMinutes') ? parseInt(get('restrictionWarningMinutes').value, 10) : 5;
    var warningMinutes = isNaN(warningMinutesRaw) ? 5 : Math.min(180, Math.max(0, warningMinutesRaw));
    var warningMessage = (get('restrictionWarningMessage') && get('restrictionWarningMessage').value)
      ? String(get('restrictionWarningMessage').value).trim()
      : '';
    return {
      version: 1,
      enabled: true,
      startAt: startAt,
      endAt: endAt,
      neverExpires: neverExpires,
      enforceEndDuringView: !neverExpires && !!(get('restrictionLiveEnd') && get('restrictionLiveEnd').checked),
      warningMinutes: warningMinutes,
      warningMessage: warningMessage || (t('settings.warningMessageDefault') || 'El tiempo de acceso se agota en {minutes} minutos.'),
      allowShare: !!(get('restrictionAllowShare') && get('restrictionAllowShare').checked),
      allowEmbed: !!(get('restrictionAllowEmbed') && get('restrictionAllowEmbed').checked),
      allowDownload: !!(get('restrictionAllowDownload') && get('restrictionAllowDownload').checked),
      createdAt: new Date().toISOString(),
      source: 'visor-webzip'
    };
  }

  function getWarningMinutesValue() {
    var raw = get('restrictionWarningMinutes') ? parseInt(get('restrictionWarningMinutes').value, 10) : 5;
    if (isNaN(raw)) return 5;
    return Math.min(180, Math.max(0, raw));
  }

  function updateRestrictionPeriodHint() {
    var hintNode = get('restrictionPeriodHint');
    if (!hintNode) return;
    var base = t('settings.periodHint') || 'El recurso solo será visible dentro de este intervalo.';
    var enabled = !!(get('restrictionToggle') && get('restrictionToggle').checked);
    if (!enabled) {
      hintNode.textContent = base;
      return;
    }
    var liveEndEnabled = !!(get('restrictionLiveEnd') && get('restrictionLiveEnd').checked && !get('restrictionLiveEnd').disabled);
    var liveEndText = liveEndEnabled
      ? (t('settings.periodHintLiveEndOn') || 'La visualización se desactivará al llegar a la fecha de fin.')
      : (t('settings.periodHintLiveEndOff') || 'La visualización no se desactivará automáticamente al llegar a la fecha de fin.');
    var warningText = t('settings.periodHintWarningOff') || 'No habrá aviso previo.';
    if (liveEndEnabled) {
      var minutes = getWarningMinutesValue();
      if (minutes > 0) {
        warningText = t('settings.periodHintWarningOn', { minutes: String(minutes) }) || ('Habrá aviso ' + minutes + ' minutos antes.');
      }
    }
    hintNode.textContent = [base, liveEndText, warningText].join(' ');
  }


  function updateRestrictionSummary() {
    updateRestrictionPeriodHint();
    updateQuickRestrictInfo();
    saveToStorage();
    try {
      document.dispatchEvent(new CustomEvent('vwz:restriction-summary-change'));
    } catch (e) {}
    if (!get('restrictionSummary') || !get('restrictionSummaryItems')) return;
    var enabled = !!(get('restrictionToggle') && get('restrictionToggle').checked);
    get('restrictionSummaryItems').innerHTML = '';
    if (!enabled) {
      get('restrictionSummary').setAttribute('hidden', '');
      return;
    }
    updateRestrictionDefaults();
    var hasStart = !!(get('restrictionHasStart') && get('restrictionHasStart').checked);
    var startValue = hasStart ? normalizeInputDateTime(get('restrictionStartInput')) : '';
    var endValue = normalizeInputDateTime(get('restrictionEndInput'), { endOfDay: true });
    var items = [];
    if (!hasStart) {
      items.push(t('restrictionModal.rangeNoStart') || 'Sin fecha de inicio');
    } else if (startValue) {
      var startText = Restrictions.formatRestrictionDate(startValue, currentLang) || startValue;
      if (startText) {
        var openText = t('badges.opening', { date: startText }) || ('Inicio: ' + startText);
        items.push(openText);
      }
    }
    if (get('restrictionNoEnd') && !get('restrictionNoEnd').checked) {
      items.push(t('restrictionModal.rangeNoEnd') || 'Sin fecha de fin');
    } else if (endValue) {
      var endText = Restrictions.formatRestrictionDate(endValue, currentLang) || endValue;
      if (endText) {
        var closeText = t('badges.closing', { date: endText }) || ('Fin: ' + endText);
        items.push(closeText);
      }
    }
    var allowedActions = [];
    if (get('restrictionAllowShare') && get('restrictionAllowShare').checked) {
      allowedActions.push(t('settings.allowShare') || 'Compartir');
    }
    if (get('restrictionAllowEmbed') && get('restrictionAllowEmbed').checked) {
      allowedActions.push(t('settings.allowEmbed') || 'Insertar en web');
    }
    if (get('restrictionAllowDownload') && get('restrictionAllowDownload').checked) {
      allowedActions.push(t('settings.allowDownload') || 'Descargar');
    }
    var actionsText = allowedActions.length
      ? allowedActions.join(', ')
      : (t('settings.summaryNoActions') || 'ninguna');
    var actionsLineTpl = t('settings.summaryAllowedActions') || 'Acciones durante el acceso: {actions}';
    items.push(actionsLineTpl.replace('{actions}', actionsText));
    var blockedActions = [];
    if (!(get('restrictionAllowShare') && get('restrictionAllowShare').checked)) {
      blockedActions.push(t('settings.allowShare') || 'Compartir');
    }
    if (!(get('restrictionAllowEmbed') && get('restrictionAllowEmbed').checked)) {
      blockedActions.push(t('settings.allowEmbed') || 'Insertar en web');
    }
    if (!(get('restrictionAllowDownload') && get('restrictionAllowDownload').checked)) {
      blockedActions.push(t('settings.allowDownload') || 'Descargar');
    }
    if (blockedActions.length) {
      var blockedText = blockedActions.join(', ');
      var blockedLineTpl = t('settings.summaryBlockedActions') || 'No se podrá: {actions}';
      items.push(blockedLineTpl.replace('{actions}', blockedText));
    }
    if (!items.length) {
      var fallbackLine = document.createElement('span');
      fallbackLine.className = 'zipper-restrict-summary__item';
      fallbackLine.textContent = t('settings.restrictionsOnNoDates') || 'Limitación activa.';
      get('restrictionSummaryItems').appendChild(fallbackLine);
      get('restrictionSummary').removeAttribute('hidden');
      return;
    }
    get('restrictionSummary').removeAttribute('hidden');
    items.forEach(function (text) {
      var span = document.createElement('span');
      span.className = 'zipper-restrict-summary__item';
      span.textContent = text;
      get('restrictionSummaryItems').appendChild(span);
    });
  }


  function updateShareRestrictionSummary(restrictions) {
    if (!get('shareRestrictSummary') || !get('shareRestrictItems')) return;
    get('shareRestrictItems').innerHTML = '';
    if (!restrictions || !restrictions.enabled) {
      get('shareRestrictSummary').setAttribute('hidden', '');
      return;
    }
    var startLabel = restrictions.startAt ? Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) : '';
    var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) : '';
    if (!startLabel && !endLabel) {
      get('shareRestrictSummary').setAttribute('hidden', '');
      return;
    }
    if (startLabel) {
      var startBadge = document.createElement('span');
      startBadge.className = 'manager-badge manager-badge--start';
      startBadge.textContent = t('badges.opening', { date: startLabel });
      get('shareRestrictItems').appendChild(startBadge);
    }
    if (endLabel) {
      var endBadge = document.createElement('span');
      endBadge.className = 'manager-badge manager-badge--end';
      endBadge.textContent = t('badges.closing', { date: endLabel });
      get('shareRestrictItems').appendChild(endBadge);
    }
    get('shareRestrictSummary').removeAttribute('hidden');
  }


  function applyRestrictionsToActions(restrictions) {
    setValue('currentRestrictions', restrictions || null);
    updateShareRestrictionSummary(getValue('currentRestrictions'));
    if (getValue('ignoreRestrictionsForShare')) return;
    if (get('copyButton')) {
      get('copyButton').disabled = !getValue('currentShareLink');
    }
    if (get('embedButton')) {
      get('embedButton').disabled = !getValue('currentShareLink');
    }
  }


  function showRestrictionModal(restrictions) {
    if (getValue('ignoreRestrictionsForShare')) return;
    if (!get('restrictModal')) return;
    if (restrictCountdownTimer) {
      clearInterval(restrictCountdownTimer);
      restrictCountdownTimer = null;
    }
    if (get('restrictionCountdown')) {
      get('restrictionCountdown').textContent = '';
      get('restrictionCountdown').setAttribute('hidden', '');
    }
    var lines = [];
    if (restrictions && restrictions.startAt) {
      var startText = Restrictions.formatRestrictionDate(restrictions.startAt, currentLang);
      if (startText) lines.push(t('restrictionModal.rangeStart', { date: startText }));
    }
    if (restrictions && restrictions.neverExpires) {
      lines.push(t('restrictionModal.rangeNoEnd'));
    } else if (restrictions && restrictions.endAt) {
      var endText = Restrictions.formatRestrictionDate(restrictions.endAt, currentLang);
      if (endText) lines.push(t('restrictionModal.rangeEnd', { date: endText }));
    }
    if (get('restrictRange')) {
      get('restrictRange').textContent = lines.join(' · ');
    }
    get('restrictModal').removeAttribute('hidden');

    if (restrictions && restrictions.startAt && Restrictions.isRestrictionBeforeStart(restrictions)) {
      var updateCountdown = function () {
        var remaining = Date.parse(restrictions.startAt) - Date.now();
        if (remaining <= 0) {
          if (restrictCountdownTimer) {
            clearInterval(restrictCountdownTimer);
            restrictCountdownTimer = null;
          }
          get('restrictModal').setAttribute('hidden', '');
          var openAllowed = getValue('openAllowedResource');
          if (typeof openAllowed === 'function') {
            openAllowed();
          }
          return;
        }
        var countdownText = Restrictions.formatCountdown(remaining);
        if (get('restrictionCountdown')) {
          get('restrictionCountdown').textContent = t('restrictionModal.countdown', { time: countdownText });
          get('restrictionCountdown').removeAttribute('hidden');
        }
      };
      updateCountdown();
      restrictCountdownTimer = setInterval(updateCountdown, 1000);
    }
  }

  window.RestrictionUI = {
    init: init,
    setLang: setLang,
    applyRestrictionUiState: applyRestrictionUiState,
    loadRestrictionsPayload: loadRestrictionsPayload,
    resetDefaults: resetDefaults,
    updateRestrictionDefaults: updateRestrictionDefaults,
    buildRestrictionsPayload: buildRestrictionsPayload,
    updateRestrictionSummary: updateRestrictionSummary,
    updateShareRestrictionSummary: updateShareRestrictionSummary,
    applyRestrictionsToActions: applyRestrictionsToActions,
    showRestrictionModal: showRestrictionModal,
    saveToStorage: saveToStorage,
    loadFromStorage: loadFromStorage,
    updateQuickRestrictInfo: updateQuickRestrictInfo
  };
})();
