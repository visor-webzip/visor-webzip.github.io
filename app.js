(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var createLinkButton = document.querySelector('[data-create-link]');
  var createLinkFeedback = document.querySelector('[data-create-link-feedback]');
  var linkSubtitle = document.querySelector('[data-link-subtitle]');
  var lastLinkType = '';
  var copyButton = document.querySelector('[data-copy]');
  var qrButton = document.querySelector('[data-qr]');
  var embedButton = document.querySelector('[data-embed]');
  var openLink = document.querySelector('[data-open]');
  var shareRestrictSummary = document.querySelector('[data-share-restrict-summary]');
  var shareRestrictItems = document.querySelector('[data-share-restrict-items]');
  var updateBanner = document.querySelector('[data-update-banner]');
  var updateActionButton = document.querySelector('[data-update-action]');
  var updateDismissButton = document.querySelector('[data-update-dismiss]');
  var stepThree = document.querySelector('[data-step-three]');
  var homeShareResult = document.querySelector('[data-home-share-result]');
  var newResourceWrap = document.querySelector('[data-new-resource-wrap]');
  var loadingScreen = document.querySelector('[data-loading]');
  var loadingMessage = document.querySelector('[data-loading-message]');
  var loadingBar = document.querySelector('[data-loading-bar]');
  var loadingEta = document.querySelector('[data-loading-eta]');
  var mainContent = document.querySelector('[data-main]');
  var embedShell = document.querySelector('[data-embed-shell]');
  var embedFrame = document.querySelector('[data-embed-frame]');
  var embedFallback = document.querySelector('[data-embed-fallback]');
  var embedOpenFallback = document.querySelector('[data-embed-open-fallback]');
  var embedModal = document.querySelector('[data-embed-modal]');
  var embedCode = document.querySelector('[data-embed-code]');
  var embedCopyButton = document.querySelector('[data-embed-copy]');
  var embedCloseButtons = document.querySelectorAll('[data-embed-close]');
  var aboutOpen = document.querySelector('[data-about-open]');
  var aboutModal = document.querySelector('[data-about-modal]');
  var aboutCloseButtons = document.querySelectorAll('[data-about-close]');
  var restrictModal = document.querySelector('[data-restrict-modal]');
  var restrictRange = document.querySelector('[data-restrict-range]');
  var restrictCloseButtons = document.querySelectorAll('[data-restrict-close]');
  var htmlModal = document.querySelector('[data-html-modal]');
  var htmlList = document.querySelector('[data-html-list]');
  var htmlConfirm = document.querySelector('[data-html-confirm]');
  var htmlCloseButtons = document.querySelectorAll('[data-html-close]');
  var reactModal = document.querySelector('[data-react-modal]');
  var reactPrompt = document.querySelector('[data-react-prompt]');
  var reactCopyButton = document.querySelector('[data-react-copy]');
  var reactCloseButtons = document.querySelectorAll('[data-react-close]');
  var tabButtons = document.querySelectorAll('[data-tab]');
  var tabZipperButton = document.querySelector('[data-tab="zipper"]');
  var tabPanels = document.querySelectorAll('[data-tab-panel]');
  var publishChoice = document.querySelector('[data-publish-choice]');
  var publishRouteCards = document.querySelectorAll('[data-publish-route-card]');
  var publishRoutePanels = document.querySelectorAll('[data-publish-route]');
  var publishModules = document.querySelectorAll('[data-publish-module]');
  var managerList = document.querySelector('[data-manager-list]');
  var storageUsed = document.querySelector('[data-storage-used]');
  var storageUsedPercent = document.querySelector('[data-storage-used-percent]');
  var storageTotal = document.querySelector('[data-storage-total]');
  var storageCount = document.querySelector('[data-storage-count]');
  var deleteAllButton = document.querySelector('[data-delete-all]');
  var dropzone = document.querySelector('[data-dropzone]');
  var quickDropzone = document.querySelector('[data-quick-dropzone]');
  var folderInput = document.querySelector('[data-folder-input]');
  var fileInput = document.querySelector('[data-file-input]');
  var folderButton = document.querySelector('[data-folder-button]');
  var fileButton = document.querySelector('[data-file-button]');
  var quickFolderInput = document.querySelector('[data-quick-folder-input]');
  var quickFileInput = document.querySelector('[data-quick-file-input]');
  var quickFolderButton = document.querySelector('[data-quick-folder-button]');
  var quickFileButton = document.querySelector('[data-quick-file-button]');
  var quickHtmlInput = document.querySelector('[data-quick-html-input]');
  var quickDropTitle = document.querySelector('[data-quick-drop-title]');
  var quickDropFeedback = document.querySelector('[data-quick-drop-feedback]');
  var quickDropFeedbackMessage = document.querySelector('[data-quick-drop-feedback-message]');
  var newResourceButton = document.querySelector('[data-new-resource]');
  var uploadStatus = document.querySelector('[data-upload-status]');
  var buildZipButton = document.querySelector('[data-build-zip]');
  var forceFolderViewerInput = document.querySelector('[data-force-folder-viewer]');
  var forceFolderNoteNode = document.querySelector('[data-force-folder-note]');
  var previewResourceButton = document.querySelector('[data-preview-resource]');
  var previewApplyRestrictionsInput = document.querySelector('[data-preview-apply-restrictions]');
  var previewRestrictionsWrap = document.querySelector('[data-preview-restrictions-wrap]');
  var previewRestrictionsMessage = document.querySelector('[data-preview-restrictions-message]');
  var resourceStatePanel = document.querySelector('[data-resource-state-panel]');
  var resourceStateBadge = document.querySelector('[data-resource-state-badge]');
  var resourceStateSummary = document.querySelector('[data-resource-state-summary]');
  var resourceStateStart = document.querySelector('[data-resource-state-start]');
  var resourceStateEnd = document.querySelector('[data-resource-state-end]');
  var resourceStatePermissions = document.querySelector('[data-resource-state-permissions]');
  var previewStatusNode = document.querySelector('[data-preview-status]');
  var zipStatus = document.querySelector('[data-zip-status]');
  var zipNameInput = document.querySelector('[data-zip-name]');
  var resourceTitleInput = document.querySelector('[data-resource-title]');
  var htmlZipInput = document.querySelector('[data-html-zip-input]');
  var htmlZipBuildButton = document.querySelector('[data-html-zip-build]');
  var htmlZipStatus = document.querySelector('[data-html-zip-status]');
  var langSelect = document.querySelector('[data-lang-select]');
  var themeSelect = document.querySelector('[data-theme-select]');
  var cleanupThresholdInput = document.querySelector('[data-cleanup-threshold]');
  var cleanupThresholdValue = document.querySelector('[data-cleanup-threshold-value]');
  var cleanupDaysInput = document.querySelector('[data-cleanup-days]');
  var cleanupNeverInput = document.querySelector('[data-cleanup-never]');
  var resetCleanupButton = document.querySelector('[data-reset-cleanup]');
  var managerSortSelect = document.querySelector('[data-manager-sort]');
  var managerSettingsOpenButton = document.querySelector('[data-manager-settings-open]');
  var managerSettingsModal = document.querySelector('[data-manager-settings-modal]');
  var managerSettingsCloseButtons = document.querySelectorAll('[data-manager-settings-close]');
  var mainSettingsOpenButtons = document.querySelectorAll('[data-main-settings-open]');
  var mainSettingsModal = document.querySelector('[data-main-settings-modal]');
  var mainSettingsCloseButtons = document.querySelectorAll('[data-main-settings-close]');
  var managerCheckUpdatesButton = document.querySelector('[data-manager-check-updates]');
  var updateCheckModal = document.querySelector('[data-update-check-modal]');
  var updateCheckCloseButtons = document.querySelectorAll('[data-update-check-close]');
  var updateCheckStatus = document.querySelector('[data-update-check-status]');
  var updateCheckNote = document.querySelector('[data-update-check-note]');
  var updateCheckProgress = document.querySelector('[data-update-check-progress]');
  var updateCheckBarWrap = document.querySelector('[data-update-check-bar-wrap]');
  var updateCheckBar = document.querySelector('[data-update-check-bar]');
  var privacyOpen = document.querySelector('[data-privacy-open]');
  var privacyPopover = document.querySelector('[data-privacy-popover]');
  var restrictionToggle = document.querySelector('[data-restrict-toggle]');
  var restrictionToggleProxy = document.querySelector('[data-restrict-toggle-proxy]');
  var restrictionEditButton = document.querySelector('[data-restrict-edit-button]');
  var restrictionFields = document.querySelector('[data-restrict-fields]');
  var restrictionActions = document.querySelector('[data-restrict-actions]');
  var restrictionActionsPanel = document.querySelector('[data-restrict-actions-panel]');
  var restrictionStartInput = document.querySelector('[data-restrict-start]');
  var restrictionEndInput = document.querySelector('[data-restrict-end]');
  var restrictionNoEnd = document.querySelector('[data-restrict-no-end]');
  var restrictionHasStart = document.querySelector('[data-restrict-has-start]');
  var restrictionStartWrap = document.querySelector('[data-restrict-start-wrap]');
  var restrictionEndWrap = document.querySelector('[data-restrict-end-wrap]');
  var restrictionEndOptions = document.querySelector('[data-restrict-end-options]');
  var restrictionLiveEnd = document.querySelector('[data-restrict-live-end]');
  var restrictionLiveEndWrap = document.querySelector('[data-restrict-live-end-wrap]');
  var restrictionWarningWrap = document.querySelector('[data-restrict-warning-wrap]');
  var restrictionWarningMinutes = document.querySelector('[data-restrict-warning-minutes]');
  var restrictionWarningMessage = document.querySelector('[data-restrict-warning-message]');
  var analyticsSummary = document.querySelector('[data-analytics-summary]');
  var analyticsTotal = document.querySelector('[data-analytics-total]');
  var analyticsToday = document.querySelector('[data-analytics-today]');
  var analyticsLink = document.querySelector('[data-analytics-link]');
  var restrictionPeriodHint = document.querySelector('[data-restrict-period-hint]');
  var restrictionAllowShare = document.querySelector('[data-restrict-allow-share]');
  var restrictionAllowEmbed = document.querySelector('[data-restrict-allow-embed]');
  var restrictionAllowDownload = document.querySelector('[data-restrict-allow-download]');
  var restrictionHint = document.querySelector('[data-restrict-hint]');
  var restrictionAccordion = document.querySelector('[data-restrict-accordion]');
  var restrictionZipInput = document.querySelector('[data-restrict-zip-input]');
  var restrictionZipPick = document.querySelector('[data-restrict-zip-pick]');
  var restrictionZipApply = document.querySelector('[data-restrict-zip-apply]');
  var restrictionZipStatus = document.querySelector('[data-restrict-zip-status]');
  var restrictionZipLock = document.querySelector('[data-restrict-zip-lock]');
  var restrictionZipEnable = document.querySelector('[data-restrict-zip-enable]');
  var restrictionCountdown = document.querySelector('[data-restrict-countdown]');
  var appVersionNode = document.querySelector('[data-app-version]');
  var downloadPanel = document.querySelector('[data-download-panel]');
  var downloadDivider = document.querySelector('[data-download-divider]');
  var UI = window.UI || {};
  var Downloads = window.Downloads || {};
  var Zipper = window.Zipper || {};
  var HtmlPicker = window.HtmlPicker || {};
  var Storage = window.Storage || {};
  var Manager = window.Manager || {};
  var RestrictionUI = window.RestrictionUI || {};
  var Share = window.Share || {};
  var Nav = window.Nav || {};
  var restrictionSummary = document.querySelector('[data-restrict-summary]');
  var restrictionSummaryItems = document.querySelector('[data-restrict-summary-items]');
  var ignoreRestrictionsForShare = false;
  var restrictCountdownTimer = null;

  if (UI.init) {
    UI.init({
      loadingScreen: loadingScreen,
      loadingMessage: loadingMessage,
      loadingBar: loadingBar,
      loadingBarWrap: document.querySelector('[data-loading-bar-wrap]'),
      loadingEta: loadingEta,
      output: output,
      uploadStatus: uploadStatus,
      zipStatus: zipStatus,
      htmlZipStatus: htmlZipStatus,
      globalToast: document.querySelector('[data-global-toast]'),
      getCurrentShareLink: function () { return currentShareLink; }
    });
  }
  if (Downloads.init) {
    Downloads.init({
      ui: UI,
      gasUrl: GAS_WEBAPP_URL,
      t: t,
      base64ToBytes: base64ToBytes
    });
  }

  var currentShareLink = '';
  var currentZipUrl = '';
  var currentIndexPath = '';
  var selectedFiles = [];
  var quickDropHighlightTimer = null;
  var zipNameDirty = false;
  var resourceTitleDirty = false;
  var activeTitleEdit = null;
  var activePublishModule = '';
  var isEmbedMode = false;
  var currentEmbedId = '';
  var embedHeightTimer = null;
  var lastEmbedHeight = 0;
  var currentRestrictions = null;
  var restrictionZipFile = null;
  var currentPreviewSiteId = '';
  var uploadSummaryRequestId = 0;
  var lastSingleZipLikeInfo = { path: '', isScorm12: false };
  var preferredZipBuildFlow = 'files';
  var Restrictions = window.Restrictions || {};
  if (!Restrictions.normalizeDateTimeValue) {
    Restrictions.normalizeDateTimeValue = function (value) {
      if (!value) return '';
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value + 'T00:00';
      }
      if (/^\d{4}-\d{2}-\d{2}T$/.test(value)) {
        return value + '00:00';
      }
      return value;
    };
  }
  if (!Restrictions.formatRestrictionDate) {
    Restrictions.formatRestrictionDate = function (value, lang) {
      if (!value) return '';
      var date = new Date(value);
      if (isNaN(date.getTime())) return '';
      try {
        var map = {
          es: 'es-ES',
          ca: 'ca-ES',
          gl: 'gl-ES',
          eu: 'eu-ES',
          en: 'en-US',
          de: 'de-DE'
        };
        var locale = map[lang] || lang || 'es-ES';
        var formatter = new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        return formatter.format(date);
      } catch (e) {
        return date.toISOString();
      }
    };
  }
  if (!Restrictions.formatCountdown) {
    Restrictions.formatCountdown = function (ms) {
      var totalSeconds = Math.max(0, Math.ceil(ms / 1000));
      var days = Math.floor(totalSeconds / 86400);
      var remainder = totalSeconds % 86400;
      var hours = Math.floor(remainder / 3600);
      var minutes = Math.floor((remainder % 3600) / 60);
      var seconds = remainder % 60;
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      var time = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
      return days > 0 ? (days + 'd ' + time) : time;
    };
  }
  if (!Restrictions.isRestrictionActive) {
    Restrictions.isRestrictionActive = function (restrictions) {
      return restrictions && restrictions.enabled;
    };
  }
  if (!Restrictions.isRestrictionAllowedNow) {
    Restrictions.isRestrictionAllowedNow = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      if (restrictions.startAt) {
        var start = Date.parse(restrictions.startAt);
        if (!isNaN(start) && Date.now() < start) return false;
      }
      if (restrictions.neverExpires) return true;
      if (restrictions.endAt) {
        var end = Date.parse(restrictions.endAt);
        if (!isNaN(end) && Date.now() > end) return false;
      }
      return true;
    };
  }
  if (!Restrictions.isRestrictionExpired) {
    Restrictions.isRestrictionExpired = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return false;
      if (restrictions.neverExpires) return false;
      if (!restrictions.endAt) return false;
      var end = Date.parse(restrictions.endAt);
      if (isNaN(end)) return false;
      return Date.now() > end;
    };
  }
  if (!Restrictions.isRestrictionBeforeStart) {
    Restrictions.isRestrictionBeforeStart = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return false;
      if (!restrictions.startAt) return false;
      var start = Date.parse(restrictions.startAt);
      if (isNaN(start)) return false;
      return Date.now() < start;
    };
  }
  if (!Restrictions.allowShare) {
    Restrictions.allowShare = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      return !!restrictions.allowShare;
    };
  }
  if (!Restrictions.allowEmbed) {
    Restrictions.allowEmbed = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      return !!restrictions.allowEmbed;
    };
  }
  if (!Restrictions.allowDownload) {
    Restrictions.allowDownload = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      return !!restrictions.allowDownload;
    };
  }
  if (!Restrictions.extractRestrictions) {
    Restrictions.extractRestrictions = function (entries, decodeUtf8) {
      if (!entries || !entries['restrictions.json']) return null;
      try {
        var raw = decodeUtf8(entries['restrictions.json']);
        var data = JSON.parse(raw || '{}');
        if (!data || !data.enabled) return null;
        return data;
      } catch (e) {
        return null;
      }
    };
  }


  var I18N = window.I18N || {};


  var LANG_KEY = 'visor-lang';
  var THEME_KEY = 'visor-theme-mode';
  var SITES_SYNC_KEY = 'visor-sites-sync';
  var currentLang = 'es';
  var currentThemeMode = 'auto';
  var themeMediaQuery = null;
  var CLEANUP_THRESHOLD_KEY = 'visor-cleanup-threshold';
  var CLEANUP_DAYS_KEY = 'visor-cleanup-days';
  var CLEANUP_DAYS_NEVER = 'never';
  var CLEANUP_THRESHOLD_DEFAULT = 70;
  var CLEANUP_DAYS_DEFAULT = 30;
  var MANAGER_SORT_KEY = 'visor-manager-sort';
  var MANAGER_SORT_DIR_KEY = 'visor-manager-sort-dir';
  var MANAGER_SORT_DEFAULT = 'date';
  var MANAGER_SORT_DIR_DEFAULT = 'desc';
  var ANALYTICS_FALLBACK_ENDPOINT = 'https://bilateria.org/app/estadistica/visor-webzip/track.php';
  var ANALYTICS_FALLBACK_STATS_URL = 'https://bilateria.org/app/estadistica/visor-webzip/admin-stats.php';
  var ANALYTICS_VISIT_COOLDOWN_MS = 30 * 60 * 1000;

  var SERVICE_INFO = {
    default: {
      placeholderKey: 'service.otherPlaceholder'
    }
  };

  function getMetaContent(name) {
    var node = document.querySelector('meta[name="' + name + '"]');
    if (!node) return '';
    return String(node.getAttribute('content') || '').trim();
  }

  function getAnalyticsConfig() {
    return {
      endpoint: getMetaContent('analytics-endpoint') || ANALYTICS_FALLBACK_ENDPOINT,
      statsUrl: getMetaContent('analytics-stats-url') || ANALYTICS_FALLBACK_STATS_URL,
      siteId: getMetaContent('analytics-site-id') || 'visor-webzip'
    };
  }

  function getAnalyticsVisitStorageKey(siteId) {
    return 'analytics:last-visit:' + siteId;
  }

  function shouldCountAnalyticsVisit(siteId) {
    try {
      var rawValue = window.localStorage.getItem(getAnalyticsVisitStorageKey(siteId)) || '';
      var lastVisit = parseInt(rawValue, 10);
      if (!isNaN(lastVisit) && Date.now() - lastVisit < ANALYTICS_VISIT_COOLDOWN_MS) return false;
    } catch (err) {
      return true;
    }
    return true;
  }

  function rememberAnalyticsVisit(siteId) {
    try {
      window.localStorage.setItem(getAnalyticsVisitStorageKey(siteId), String(Date.now()));
    } catch (err) {}
  }

  function shouldTrackAnalytics() {
    var protocol = String(window.location.protocol || '');
    var host = String(window.location.hostname || '').toLowerCase();
    if (protocol !== 'http:' && protocol !== 'https:') return false;
    if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return false;
    if (/\.local$/.test(host)) return false;
    return true;
  }

  function updateAnalyticsSummary(data) {
    var total = parseInt(data && data.total, 10);
    var today = parseInt(data && data.today, 10);
    var cfg = getAnalyticsConfig();
    if (!analyticsSummary || isNaN(total) || isNaN(today)) return;
    if (analyticsTotal) {
      analyticsTotal.textContent = String(total);
    }
    if (analyticsToday) {
      analyticsToday.textContent = String(today);
    }
    if (analyticsLink && cfg.statsUrl) {
      analyticsLink.setAttribute('href', cfg.statsUrl);
    }
    analyticsSummary.hidden = false;
  }

  function loadAnalyticsSummary() {
    if (!shouldTrackAnalytics()) return;
    var cfg = getAnalyticsConfig();
    if (!cfg.endpoint) return;

    var callbackName = '__visorAnalyticsCallback_' + String(new Date().getTime()) + '_' + String(Math.floor(Math.random() * 100000));
    var pageParams = new URLSearchParams(window.location.search || '');
    var query = new URLSearchParams();
    var script = document.createElement('script');
    var settled = false;
    var timeoutId = 0;
    var shouldCountVisit = shouldCountAnalyticsVisit(cfg.siteId);

    function cleanupAnalytics() {
      if (settled) return;
      settled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
      try { delete window[callbackName]; } catch (err) { window[callbackName] = null; }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    }

    query.set('site', cfg.siteId);
    query.set('callback', callbackName);
    query.set('page_url', window.location.href);
    query.set('referrer', document.referrer || '');
    if (!shouldCountVisit) query.set('summary_only', '1');

    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (key) {
      var value = String(pageParams.get(key) || '').trim();
      if (value) {
        query.set(key, value);
      }
    });

    window[callbackName] = function (payload) {
      try {
        updateAnalyticsSummary(payload || {});
        if (shouldCountVisit && payload && payload.ok) rememberAnalyticsVisit(cfg.siteId);
      } finally {
        cleanupAnalytics();
      }
    };

    script.async = true;
    script.src = cfg.endpoint + (cfg.endpoint.indexOf('?') === -1 ? '?' : '&') + query.toString();
    script.onerror = function () {
      cleanupAnalytics();
    };
    timeoutId = window.setTimeout(cleanupAnalytics, 4000);
    document.head.appendChild(script);
  }

  function scheduleAnalyticsLoad() {
    if (!shouldTrackAnalytics()) return;
    var run = function () { window.setTimeout(loadAnalyticsSummary, 0); };
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(run, { timeout: 2500 });
      return;
    }
    if (document.readyState === 'complete') {
      window.setTimeout(run, 0);
      return;
    }
    window.addEventListener('load', run, { once: true });
  }

  function normalizeLang(lang) {
    if (!lang) return 'es';
    var value = String(lang).toLowerCase();
    if (value.indexOf('-') !== -1) {
      value = value.split('-')[0];
    }
    if (value.indexOf('_') !== -1) {
      value = value.split('_')[0];
    }
    if (I18N[value]) return value;
    return 'es';
  }

  function getSavedLang() {
    try {
      return normalizeLang(localStorage.getItem(LANG_KEY));
    } catch (err) {
      return null;
    }
  }

  function getStoredNumber(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null || raw === '') return fallback;
      var value = Number(raw);
      if (value === 0) return fallback;
      if (typeof value !== 'number' || isNaN(value)) return fallback;
      return value;
    } catch (err) {
      return fallback;
    }
  }






  function getCleanupThreshold() {
    var value = getStoredNumber(CLEANUP_THRESHOLD_KEY, CLEANUP_THRESHOLD_DEFAULT);
    return Math.min(95, Math.max(40, value));
  }

  function getStoredCleanupDaysRaw() {
    try {
      var raw = localStorage.getItem(CLEANUP_DAYS_KEY);
      return raw == null ? '' : String(raw).trim().toLowerCase();
    } catch (err) {
      return '';
    }
  }

  function getCleanupDays() {
    if (getStoredCleanupDaysRaw() === CLEANUP_DAYS_NEVER) {
      return Infinity;
    }
    var value = getStoredNumber(CLEANUP_DAYS_KEY, CLEANUP_DAYS_DEFAULT);
    return Math.min(365, Math.max(7, value));
  }

  function syncCleanupDaysControl(value) {
    var isNever = value === Infinity;
    if (cleanupNeverInput) {
      cleanupNeverInput.checked = isNever;
    }
    if (cleanupDaysInput) {
      cleanupDaysInput.disabled = isNever;
      if (!isNever) {
        cleanupDaysInput.value = String(value);
      } else if (!cleanupDaysInput.value) {
        cleanupDaysInput.value = String(CLEANUP_DAYS_DEFAULT);
      }
    }
  }

  function setCleanupThreshold(value) {
    var normalized = Math.min(95, Math.max(40, Number(value) || CLEANUP_THRESHOLD_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_THRESHOLD_KEY, String(normalized));
    } catch (err) {}
    if (cleanupThresholdInput) {
      cleanupThresholdInput.value = String(normalized);
    }
    if (cleanupThresholdValue) {
      cleanupThresholdValue.textContent = String(normalized);
    }
  }

  function setCleanupDays(value) {
    var isNever = value === Infinity || String(value || '').toLowerCase() === CLEANUP_DAYS_NEVER;
    var normalized = Math.min(365, Math.max(7, Number(value) || CLEANUP_DAYS_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_DAYS_KEY, isNever ? CLEANUP_DAYS_NEVER : String(normalized));
    } catch (err) {}
    syncCleanupDaysControl(isNever ? Infinity : normalized);
  }

  function getInitialLang() {
    return getSavedLang() || normalizeLang(navigator.language || navigator.userLanguage || 'es');
  }

  function notifySitesChanged() {
    try {
      localStorage.setItem(SITES_SYNC_KEY, String(Date.now()));
    } catch (err) {
      // ignore cross-tab sync errors
    }
  }

  function normalizeThemeMode(mode) {
    var value = String(mode || '').toLowerCase();
    if (value === 'light' || value === 'dark' || value === 'auto') {
      return value;
    }
    return 'auto';
  }

  function getSavedThemeMode() {
    try {
      return normalizeThemeMode(localStorage.getItem(THEME_KEY));
    } catch (err) {
      return 'auto';
    }
  }

  function getInitialThemeMode() {
    var saved = getSavedThemeMode();
    return saved || 'auto';
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyThemeMode(mode, options) {
    currentThemeMode = normalizeThemeMode(mode);
    var resolvedTheme = currentThemeMode === 'auto' ? getSystemTheme() : currentThemeMode;
    document.documentElement.setAttribute('data-theme-mode', currentThemeMode);
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    if (themeSelect) {
      themeSelect.value = currentThemeMode;
    }
    if (!options || options.persist !== false) {
      try {
        localStorage.setItem(THEME_KEY, currentThemeMode);
      } catch (err) {}
    }
  }

  function bindSystemThemeListener() {
    if (!window.matchMedia) return;
    themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var handler = function () {
      if (currentThemeMode === 'auto') {
        applyThemeMode('auto', { persist: false });
      }
    };
    if (themeMediaQuery.addEventListener) {
      themeMediaQuery.addEventListener('change', handler);
    } else if (themeMediaQuery.addListener) {
      themeMediaQuery.addListener(handler);
    }
  }

  function t(key, vars) {
    var table = I18N[currentLang] || I18N.es;
    var fallback = I18N.es;
    var parts = (key || '').split('.');
    var value = table;
    var fallbackValue = fallback;
    for (var i = 0; i < parts.length; i += 1) {
      if (value && typeof value === 'object' && parts[i] in value) {
        value = value[parts[i]];
      } else {
        value = null;
      }
      if (fallbackValue && typeof fallbackValue === 'object' && parts[i] in fallbackValue) {
        fallbackValue = fallbackValue[parts[i]];
      } else {
        fallbackValue = null;
      }
    }
    var resolved = value != null ? value : fallbackValue;
    if (typeof resolved !== 'string') {
      return resolved || '';
    }
    if (!vars) return resolved;
    return resolved.replace(/\{(\w+)\}/g, function (match, keyName) {
      if (vars && Object.prototype.hasOwnProperty.call(vars, keyName)) {
        return String(vars[keyName]);
      }
      return '';
    });
  }

  if (Zipper.init) {
    Zipper.init({ t: t });
  }
  if (Nav.init) {
    Nav.init({
      manager: Manager,
      context: {
        tabButtons: tabButtons,
        tabPanels: tabPanels,
        publishChoice: publishChoice,
        publishModules: publishModules,
        setActivePublishModule: function (value) {
          activePublishModule = value;
        }
      }
    });
  }

  if (Share.init) {
    Share.init({
      t: t,
      ui: UI,
      restrictions: Restrictions,
      context: {
        output: output,
        copyButton: copyButton,
        qrButton: qrButton,
        embedButton: embedButton,
        openLink: openLink,
        stepThree: stepThree,
        shareResultPanel: homeShareResult,
        currentShareLink: function (value) {
          if (arguments.length) {
            currentShareLink = value;
          }
          return currentShareLink;
        },
        currentRestrictions: function () { return currentRestrictions; },
        isEmbedMode: function () { return isEmbedMode; }
      }
    });
    // Ensure initial disabled/enabled state matches the current link (including the empty state).
    if (Share.setShareLink) {
      Share.setShareLink(currentShareLink || '');
    }
  }

  if (RestrictionUI.init) {
    RestrictionUI.init({
      t: t,
      lang: currentLang,
      ui: UI,
      restrictions: Restrictions,
      context: {
        restrictionToggle: restrictionToggle,
        restrictionFields: restrictionFields,
        restrictionActions: restrictionActions,
        restrictionActionsPanel: restrictionActionsPanel,
        restrictionStartInput: restrictionStartInput,
        restrictionEndInput: restrictionEndInput,
        restrictionNoEnd: restrictionNoEnd,
        restrictionHasStart: restrictionHasStart,
        restrictionStartWrap: restrictionStartWrap,
        restrictionEndWrap: restrictionEndWrap,
        restrictionEndOptions: restrictionEndOptions,
        restrictionLiveEnd: restrictionLiveEnd,
        restrictionLiveEndWrap: restrictionLiveEndWrap,
        restrictionWarningWrap: restrictionWarningWrap,
        restrictionWarningMinutes: restrictionWarningMinutes,
        restrictionWarningMessage: restrictionWarningMessage,
        restrictionPeriodHint: restrictionPeriodHint,
        restrictionAllowShare: restrictionAllowShare,
        restrictionAllowEmbed: restrictionAllowEmbed,
        restrictionAllowDownload: restrictionAllowDownload,
        restrictionHint: restrictionHint,
        restrictionAccordion: restrictionAccordion,
        restrictionZipApply: restrictionZipApply,
        restrictionZipStatus: restrictionZipStatus,
        restrictionZipFile: function () { return restrictionZipFile; },
        restrictionSummary: restrictionSummary,
        restrictionSummaryLabel: document.querySelector('[data-restrict-summary-label]'),
        restrictionSummaryItems: restrictionSummaryItems,
        shareRestrictSummary: shareRestrictSummary,
        shareRestrictItems: shareRestrictItems,
        copyButton: copyButton,
        embedButton: embedButton,
        restrictModal: restrictModal,
        restrictRange: restrictRange,
        restrictionCountdown: restrictionCountdown,
        openAllowedResource: function () {
          var hasUrl = urlParam || shortParam;
          if (!hasUrl) return;
          var entryParam = params.get('entry') || params.get('index') || params.get('path') || '';
          var viewParam = (params.get('view') || '').toLowerCase();
          var embedParam = (params.get('embed') || '').toLowerCase();
          var embedActive = embedParam === '1' || embedParam === 'true' || embedParam === 'yes';
          var embedIdParam = params.get('embedId') || '';
          var autoOpen = viewParam === 'full' || viewParam === '1';
          var previewUrl = currentZipUrl || urlParam;
          if (!previewUrl) return;
          if (embedActive) {
            loadZip(previewUrl, { force: false, autoOpen: false, embed: true, embedId: embedIdParam, preferredIndexPath: entryParam });
          } else {
            loadZip(previewUrl, { force: false, autoOpen: autoOpen, preferredIndexPath: entryParam });
          }
        },
        currentShareLink: function () { return currentShareLink; },
        currentRestrictions: function (value) {
          if (arguments.length) {
            currentRestrictions = value;
          }
          return currentRestrictions;
        },
        ignoreRestrictionsForShare: function () { return ignoreRestrictionsForShare; }
      }
    });
  }

    if (Manager.init) {
      Manager.init({
        t: t,
        lang: currentLang,
        storage: Storage,
        restrictions: Restrictions,
        ui: UI,
        context: {
        managerSortSelect: managerSortSelect,
        managerSortDirButton: document.querySelector('[data-manager-sort-dir]'),
        managerList: managerList,
        storageUsed: storageUsed,
        storageUsedPercent: storageUsedPercent,
        storageTotal: storageTotal,
        storageCount: storageCount,
        MANAGER_SORT_KEY: MANAGER_SORT_KEY,
        MANAGER_SORT_DIR_KEY: MANAGER_SORT_DIR_KEY,
        MANAGER_SORT_DEFAULT: MANAGER_SORT_DEFAULT,
        MANAGER_SORT_DIR_DEFAULT: MANAGER_SORT_DIR_DEFAULT,
        formatBytes: formatBytes,
        deriveTitleFromPath: deriveTitleFromPath,
        buildShareLink: buildShareLink,
        buildEmbedSnippet: buildEmbedSnippet,
        normalizeZipUrl: normalizeZipUrl,
        startTitleEdit: startTitleEdit,
        getCleanupDays: getCleanupDays
      }
    });
  }

  if (HtmlPicker.init) {
    HtmlPicker.init({
      modal: htmlModal,
      list: htmlList,
      confirmButton: htmlConfirm,
      closeButtons: htmlCloseButtons,
      t: t,
      ui: UI
    });
  }

  function applyTranslations() {
    var textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n');
      var value = t(key);
      if (value) {
        node.textContent = value;
      }
    });
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n-html');
      var value = t(key);
      if (value) {
        node.innerHTML = value;
      }
    });
    syncHelpExampleLinks();
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (node) {
      var key = node.getAttribute('data-i18n-placeholder');
      var value = t(key);
      if (value) {
        node.setAttribute('placeholder', value);
      }
    });
    var ariaLabels = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabels.forEach(function (node) {
      var key = node.getAttribute('data-i18n-aria-label');
      var value = t(key);
      if (value) {
        node.setAttribute('aria-label', value);
      }
    });
    var titleAttrs = document.querySelectorAll('[data-i18n-title]');
    titleAttrs.forEach(function (node) {
      var key = node.getAttribute('data-i18n-title');
      var value = t(key);
      if (value) {
        node.setAttribute('title', value);
      }
    });
    var tooltips = document.querySelectorAll('[data-i18n-tooltip]');
    tooltips.forEach(function (node) {
      var key = node.getAttribute('data-i18n-tooltip');
      var value = t(key);
      if (value) {
        node.setAttribute('data-tooltip', value);
      }
    });
  }

  function syncHelpExampleLinks() {
    var helpRoot = document.querySelector('.about-guide');
    if (!helpRoot) return;
    var links = helpRoot.querySelectorAll('a[href^="https://visor-webzip.github.io/"]');
    var base = appBase();
    links.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (!href) return;
      link.setAttribute('href', href.replace(/^https:\/\/visor-webzip\.github\.io\//, base));
    });
  }

  function applyFlowBadges() {
    var intro = document.querySelector('.publish-quick-intro');
    if (intro && !intro.querySelector('.flow-badge')) {
      var html = intro.innerHTML || '';
      if (html) {
        html = html.replace(/<br>\s*<br>/g, '<br>');
        html = html.replace(/(^|<br>)(\s*)1\./, '$1$2<span class="flow-badge">1</span> ');
        html = html.replace(/(^|<br>)(\s*)2\./, '$1$2<span class="flow-badge">2</span> ');
        intro.innerHTML = html;
      }
    }

    var swapNodes = document.querySelectorAll('[data-flow-badge-swap]');
    swapNodes.forEach(function (node) {
      if (node.querySelector('.flow-badge')) return;
      var swapHtml = node.innerHTML || '';
      if (!swapHtml) return;
      swapHtml = swapHtml.replace(/①/g, '<span class="flow-badge">1</span>');
      swapHtml = swapHtml.replace(/②/g, '<span class="flow-badge">2</span>');
      node.innerHTML = swapHtml;
    });
  }

  function setCreateLinkFeedback(message) {
    if (!createLinkFeedback) return;
    var text = String(message || '').trim();
    if (!text) {
      createLinkFeedback.textContent = '';
      createLinkFeedback.setAttribute('hidden', '');
      return;
    }
    createLinkFeedback.textContent = text;
    createLinkFeedback.removeAttribute('hidden');
  }

  function setPublishRoute(mode) {
    var normalized = mode === 'a' || mode === 'b' ? mode : '';
    if (!publishChoice) return;
    if (normalized) {
      publishChoice.setAttribute('data-active-route', normalized);
    } else {
      publishChoice.removeAttribute('data-active-route');
    }
    publishRouteCards.forEach(function (node) {
      var route = node && node.getAttribute('data-publish-route-card');
      var isActive = normalized && route === normalized;
      node.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      node.setAttribute('data-route-state', isActive ? 'active' : (normalized ? 'inactive' : 'idle'));
    });
    publishRoutePanels.forEach(function (node) {
      var route = node && node.getAttribute('data-publish-route');
      if (!route) return;
      if (normalized && route !== normalized) {
        node.setAttribute('hidden', '');
      } else {
        node.removeAttribute('hidden');
      }
    });
    updateNewResourceVisibility();
    syncZipperTabVisibility();
  }

  function resetPublishFlow() {
    if (input) input.value = '';
    lastLinkType = '';
    updateLinkSubtitle();
    setCreateLinkFeedback('');
    currentZipUrl = '';
    currentIndexPath = '';
    currentRestrictions = null;
    if (Share && Share.setShareLink) {
      Share.setShareLink('');
    } else if (output) {
      output.textContent = t('main.output.placeholder') || '';
    }
    if (RestrictionUI && RestrictionUI.applyRestrictionsToActions) {
      RestrictionUI.applyRestrictionsToActions(currentRestrictions);
    }
    if (RestrictionUI && RestrictionUI.updateShareRestrictionSummary) {
      RestrictionUI.updateShareRestrictionSummary(currentRestrictions);
    }
    if (updateBanner) {
      updateBanner.setAttribute('hidden', '');
    }
    if (updateActionButton) {
      updateActionButton.removeAttribute('data-zip-url');
    }
    if (quickHtmlInput) quickHtmlInput.value = '';
    if (htmlZipInput) {
      htmlZipInput.value = '';
      dispatchInputEvent(htmlZipInput);
    }
    preferredZipBuildFlow = 'files';
    if (zipStatus) UI.setZipStatus('');
    if (htmlZipStatus) UI.setHtmlZipStatus('');
    if (previewStatusNode) previewStatusNode.textContent = '';
    if (forceFolderViewerInput) {
      forceFolderViewerInput.checked = false;
      syncForceFolderNoteVisibility();
    }
    zipNameDirty = false;
    resourceTitleDirty = false;
    updateSelectedFiles([]);
    if (folderInput) folderInput.value = '';
    if (fileInput) fileInput.value = '';
    if (quickFolderInput) quickFolderInput.value = '';
    if (quickFileInput) quickFileInput.value = '';
    if (restrictionZipInput) restrictionZipInput.value = '';
    restrictionZipFile = null;
    if (restrictionZipStatus) restrictionZipStatus.textContent = '';
    updateRestrictZipAccordionState();
    setPublishRoute('');
  }

  function refreshFooterVersion() {
    if (!appVersionNode || !window.fetch) return;
    fetch('version.json', { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('version file not available');
        return response.json();
      })
      .then(function (payload) {
        var version = payload && payload.version ? String(payload.version).trim() : '';
        if (!version) return;
        appVersionNode.textContent = version;
      })
      .catch(function () {
        // Keep fallback version already rendered in HTML.
      });
  }


  function syncZipNameDefault() {
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = deriveZipNameFromCurrentState();
    }
  }

  function deriveZipNameFromCurrentState() {
    var resourceTitle = getActiveResourceTitleValue();
    if (resourceTitle) {
      return Zipper.toKebabCase(resourceTitle) || Zipper.getZipDefaultName();
    }
    if (selectedFiles && selectedFiles.length) {
      var derivedTitle = deriveResourceTitleFromSelection(selectedFiles);
      if (derivedTitle) {
        return Zipper.toKebabCase(derivedTitle) || Zipper.deriveZipBaseName(selectedFiles);
      }
      return Zipper.deriveZipBaseName(selectedFiles);
    }
    if (htmlZipInput && htmlZipInput.value && htmlZipInput.value.trim()) {
      var htmlTitle = deriveTitleFromHtmlText(htmlZipInput.value);
      if (htmlTitle) {
        return Zipper.toKebabCase(htmlTitle) || Zipper.getZipDefaultName();
      }
    }
    return Zipper.toKebabCase(Zipper.getZipDefaultName()) || 'recurso';
  }

  function deriveResourceTitleFromSelection(files) {
    var list = files || [];
    if (!list.length) return '';
    var rootFolder = '';
    var fromFolder = list.every(function (item, index) {
      var path = String(item && item.path ? item.path : '');
      var parts = path.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if (index === 0) {
        rootFolder = parts[0];
        return !!rootFolder;
      }
      return parts[0] === rootFolder;
    });
    if (fromFolder && rootFolder) {
      return rootFolder.replace(/[_-]+/g, ' ').trim();
    }
    var htmlEntry = list.find(function (item) {
      var lower = (item.path || '').toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (htmlEntry) {
      return deriveTitleFromPath(htmlEntry.path);
    }
    var firstDoc = list.find(function (item) {
      var lower = (item.path || '').toLowerCase();
      return lower.endsWith('.pdf') || lower.endsWith('.docx') || lower.endsWith('.txt') || lower.endsWith('.md') || lower.endsWith('.csv') || lower.endsWith('.h5p');
    });
    if (firstDoc) {
      return deriveTitleFromPath(firstDoc.path);
    }
    var base = Zipper.deriveZipBaseName(list) || '';
    return base.replace(/[_-]+/g, ' ').trim();
  }

  function syncResourceTitleDefault() {
    if (!resourceTitleInput || resourceTitleDirty) return;
    if (!selectedFiles || !selectedFiles.length) {
      resourceTitleInput.value = '';
      syncResourceTitleToggleState();
      return;
    }
    var derived = deriveResourceTitleFromSelection(selectedFiles);
    resourceTitleInput.value = derived || '';
    syncResourceTitleToggleState();
  }

  function normalizeResourceTitle(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function getActiveResourceTitleValue() {
    if (!resourceTitleInput) return '';
    return normalizeResourceTitle(resourceTitleInput.value || '');
  }

  function syncResourceTitleToggleState() {
    // El input de título siempre es visible en el nuevo layout; no-op.
  }

  function getPreviewRestrictionsState() {
    var restrictions = RestrictionUI && RestrictionUI.buildRestrictionsPayload
      ? RestrictionUI.buildRestrictionsPayload()
      : null;
    var blockedByOpening = !!(restrictions
      && Restrictions.isRestrictionActive(restrictions)
      && Restrictions.isRestrictionBeforeStart(restrictions));
    return {
      restrictions: restrictions,
      blockedByOpening: blockedByOpening
    };
  }

  function syncPreviewRestrictionsVisibility() {
    if (!previewRestrictionsWrap) return;
    var state = getPreviewRestrictionsState();
    var show = !!state.blockedByOpening;
    if (previewRestrictionsMessage) {
      previewRestrictionsMessage.textContent = t('zipper.help.previewHideResource')
        || 'Previsualizar como recurso oculto';
    }
    if (show) {
      var wasHidden = previewRestrictionsWrap.hasAttribute('hidden');
      previewRestrictionsWrap.removeAttribute('hidden');
      if (wasHidden && previewApplyRestrictionsInput) {
        previewApplyRestrictionsInput.checked = true;
      }
      return;
    }
    previewRestrictionsWrap.setAttribute('hidden', '');
    if (previewApplyRestrictionsInput) {
      previewApplyRestrictionsInput.checked = false;
    }
  }

  function renderResourceStatePanel() {
    if (!resourceStatePanel || !resourceStateBadge || !resourceStateSummary || !resourceStateStart || !resourceStateEnd || !resourceStatePermissions) {
      return;
    }
    var availabilityEnabled = !!(restrictionToggle && restrictionToggle.checked);
    if (!availabilityEnabled) {
      resourceStatePanel.setAttribute('hidden', '');
      return;
    }
    resourceStatePanel.removeAttribute('hidden');
    var restrictions = RestrictionUI && RestrictionUI.buildRestrictionsPayload
      ? RestrictionUI.buildRestrictionsPayload()
      : null;
    var startText = restrictions && restrictions.startAt
      ? (Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) || restrictions.startAt)
      : (t('zipper.panel.startImmediate') || 'Inmediato');
    var endText = restrictions && !restrictions.neverExpires && restrictions.endAt
      ? (Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) || restrictions.endAt)
      : (t('zipper.panel.noEnd') || 'Sin fecha de fin');
    var allowShareNow = !restrictions || !!restrictions.allowShare;
    var allowEmbedNow = !restrictions || !!restrictions.allowEmbed;
    var allowDownloadNow = !restrictions || !!restrictions.allowDownload;
    var permissions = [];
    if (allowShareNow) permissions.push({ label: t('settings.allowShare') || 'Compartir', kind: 'share' });
    if (allowEmbedNow) permissions.push({ label: t('settings.allowEmbed') || 'Insertar en web', kind: 'embed' });
    if (allowDownloadNow) permissions.push({ label: t('settings.allowDownload') || 'Descargar', kind: 'download' });
    var badgeText = t('zipper.panel.stateAvailable') || 'Recurso disponible';
    var summaryText = t('zipper.panel.stateAvailableHelp') || 'El recurso puede abrirse en este momento.';
    var badgeClass = 'is-available';
    if (restrictions && Restrictions.isRestrictionBeforeStart(restrictions)) {
      badgeText = t('zipper.panel.stateScheduled') || 'Pendiente de apertura';
      summaryText = t('zipper.panel.stateScheduledHelp', { date: startText })
        || ('Se abrirá el ' + startText + '.');
      badgeClass = 'is-scheduled';
    } else if (restrictions && Restrictions.isRestrictionExpired(restrictions)) {
      badgeText = t('zipper.panel.stateClosed') || 'Recurso no disponible';
      summaryText = t('zipper.panel.stateClosedHelp', { date: endText })
        || ('La disponibilidad terminó el ' + endText + '.');
      badgeClass = 'is-closed';
    } else if (restrictions && !restrictions.neverExpires && restrictions.endAt) {
      summaryText = t('zipper.panel.stateAvailableUntil', { date: endText })
        || ('Disponible hasta el ' + endText + '.');
    }
    resourceStateBadge.textContent = badgeText;
    resourceStateBadge.classList.remove('is-available', 'is-scheduled', 'is-closed');
    resourceStateBadge.classList.add(badgeClass);
    resourceStateSummary.textContent = summaryText;
    resourceStateStart.textContent = startText;
    resourceStateEnd.textContent = endText;
    resourceStatePermissions.innerHTML = '';
    if (!permissions.length) {
      var emptyPermission = document.createElement('span');
      emptyPermission.className = 'resource-state-permission-chip is-muted';
      emptyPermission.textContent = t('settings.summaryNoActions') || 'ninguna';
      resourceStatePermissions.appendChild(emptyPermission);
      return;
    }
    permissions.forEach(function (item) {
      var chip = document.createElement('span');
      chip.className = 'resource-state-permission-chip resource-state-permission-chip--' + item.kind;
      chip.textContent = item.label;
      resourceStatePermissions.appendChild(chip);
    });
  }

  function setPreviewStatus(message, options) {
    if (!previewStatusNode) return;
    previewStatusNode.textContent = message || '';
    previewStatusNode.classList.toggle('is-highlight', !!(options && options.highlight));
  }

  function renderPreviewLoadingScreen(win) {
    if (!win || win.closed) return;
    try {
      var loadingTitle = t('zipper.help.previewTitle') || 'Previsualización';
      var loadingText = t('zipper.status.previewPreparing') || 'Preparando previsualización local...';
      var html = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        + '<title>' + escapeHtml(loadingTitle) + '</title>'
        + '<style>'
        + 'html,body{height:100%;margin:0;font-family:"Libre Franklin","Segoe UI",sans-serif;background:linear-gradient(140deg,#e9f0ff,#eef8ff 45%,#f6fbff);color:#0f172a}'
        + '.stage{height:100%;display:grid;place-items:center;padding:24px}'
        + '.card{min-width:260px;max-width:420px;background:#fff;border:1px solid #d8e2f1;border-radius:14px;padding:18px;box-shadow:0 10px 24px rgba(15,23,42,.08);display:flex;gap:12px;align-items:center}'
        + '.spinner{width:22px;height:22px;border-radius:50%;border:3px solid #bfdbfe;border-top-color:#2563eb;animation:spin .9s linear infinite;flex:0 0 auto}'
        + '.text{font-size:.98rem;line-height:1.35;color:#334155}'
        + '@keyframes spin{to{transform:rotate(360deg)}}'
        + '</style></head><body><div class="stage"><div class="card"><div class="spinner" aria-hidden="true"></div><div class="text">'
        + escapeHtml(loadingText)
        + '</div></div></div></body></html>';
      win.document.open();
      win.document.write(html);
      win.document.close();
    } catch (e) {
      // Ignore if the browser does not allow writing to the popup.
    }
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    if (langSelect) {
      langSelect.value = currentLang;
    }
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (err) {
      // ignore persistence errors
    }
    document.documentElement.setAttribute('lang', currentLang);
    applyTranslations();
    applyFlowBadges();
    updateLinkSubtitle();
    updateBuildZipButtonLabel();
    if (RestrictionUI && RestrictionUI.setLang) {
      RestrictionUI.setLang(currentLang);
    }
    if (RestrictionUI && RestrictionUI.updateRestrictionSummary) {
      RestrictionUI.updateRestrictionSummary();
    }
    if (RestrictionUI && RestrictionUI.updateShareRestrictionSummary) {
      RestrictionUI.updateShareRestrictionSummary(currentRestrictions);
    }
    updateServiceInfo();
    syncZipNameDefault();
    syncResourceTitleDefault();
    syncResourceTitleToggleState();
    renderResourceStatePanel();
    setCleanupThreshold(getCleanupThreshold());
    setCleanupDays(getCleanupDays());
    Manager.updateSortDirButton(Manager.getManagerSortDir());
    if (output && !currentShareLink) {
      output.textContent = t('main.output.placeholder');
    }
    refreshPrimaryUploadSummary();
    UI.setZipStatus('');
    if (htmlZipInput) {
      if (htmlZipInput.value.trim()) {
        UI.setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        UI.setHtmlZipStatus(t('zipper.html.status.empty'));
      }
    }
    RestrictionUI.applyRestrictionUiState();
    RestrictionUI.updateRestrictionDefaults();
    RestrictionUI.updateRestrictionSummary();
    syncPreviewRestrictionsVisibility();
    renderResourceStatePanel();
    if (managerList) {
      Manager.refreshManager();
    }
  }

  function updateServiceInfo() {
    var info = SERVICE_INFO.default;
    if (input) {
      input.placeholder = t(info.placeholderKey);
    }
  }

  function getLinkTypeFromUrl(value) {
    var raw = String(value || '').toLowerCase();
    if (!raw) return '';
    if (raw.indexOf('.elpx') !== -1) return 'elpx';
    if (raw.indexOf('.h5p') !== -1) return 'h5p';
    if (raw.indexOf('.zip') !== -1) return 'zip';
    return '';
  }

  function setLastLinkType(value) {
    var typeKey = getLinkTypeFromUrl(value);
    if (typeKey) {
      lastLinkType = typeKey;
    }
  }

  function updateLinkSubtitle() {
    if (!linkSubtitle) return;
    var currentValue = input ? input.value : '';
    var typeKey = getLinkTypeFromUrl(currentValue) || lastLinkType;
    if (!typeKey) {
      linkSubtitle.textContent = t('publish.choice.main.subtitleAny') || linkSubtitle.textContent || '';
      return;
    }
    var typeLabel = t('publish.choice.main.types.' + typeKey);
    if (!typeLabel) {
      typeLabel = typeKey.toUpperCase();
    }
    linkSubtitle.textContent = t('publish.choice.main.subtitle', { type: typeLabel }) || '';
  }

  function updateRestrictZipAccordionState() {
    if (!restrictionAccordion) return;
    if (!restrictionToggle) return;
    var enabled = !!restrictionToggle.checked;
    if (restrictionZipLock) {
      if (enabled) {
        restrictionZipLock.setAttribute('hidden', '');
      } else {
        restrictionZipLock.removeAttribute('hidden');
      }
    }
    if (restrictionZipPick) restrictionZipPick.disabled = !enabled;
    if (restrictionZipInput) restrictionZipInput.disabled = !enabled;
    if (!enabled) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = '';
      }
      if (restrictionZipApply) {
        restrictionZipApply.disabled = true;
      }
      return;
    }
    // Enabled: restore status and apply enablement based on file selection.
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = restrictionZipFile ? restrictionZipFile.name : t('zipper.restrict.status.ready');
    }
    if (restrictionZipApply) {
      restrictionZipApply.disabled = !restrictionZipFile;
    }
  }







  function appBase() {
    var path = window.location.pathname;
    if (!path.endsWith('/')) {
      path = path.replace(/[^/]+$/, '');
    }
    return window.location.origin + path;
  }





  function isGoogleDriveUrl(url) {
    if (!url) return false;
    try {
      var host = (new URL(url)).hostname || '';
      host = host.toLowerCase();
      if (host === 'drive.google.com' || host.endsWith('.drive.google.com')) return true;
    } catch (e) {
      // ignore
    }
    return /drive\.google\.com/i.test(url);
  }

  function formatUserError(err, zipUrl) {
    var message = (err && err.message) ? err.message : '';
    if (/invalid distance|incorrect data check|incorrect header check|end of data|unexpected eof|inflate|zip corrupt|corrupto/i.test(message)) {
      return t('error.corruptZip');
    }
    if (/no devolvio un ZIP|recibio HTML|devolvio HTML/i.test(message)) {
      // Only show the Drive-specific hint for Drive URLs.
      if (isGoogleDriveUrl(zipUrl)) {
        if (/demasiado grande|too large|supera el limite/i.test(message)) {
          return t('error.driveTooLarge');
        }
        return message;
      }
    }
    return message || t('error.loadZip');
  }







  function resetZipDownload() {
    // No-op: downloads are triggered immediately after ZIP creation.
  }

  function getUploadSummaryTexts() {
    var lang = normalizeLang(currentLang);
    var map = {
      es: {
        filesReady: 'Archivos encontrados: {count}.',
        typesDetected: 'Tipos detectados:',
        actionLabel: 'Acción:',
        actionZipLike: 'ZIP/ELPX/H5P detectado: puedes previsualizarlo y, si quieres, aplicar restricciones de visualización.',
        actionZipLikeWithType: 'ZIP/ELPX/H5P detectado ({viewer}): puedes previsualizarlo y, si quieres, aplicar restricciones de visualización.',
        actionZipLikeWithTypeScorm12: 'SCORM 1.2 detectado ({viewer}): puedes previsualizarlo y, si quieres, aplicar restricciones de visualización.',
        analyzingZip: 'Analizando ZIP/ELPX/H5P...',
        viewerWeb: 'visor web',
        viewerDocuments: 'visor de documentos',
        viewerFiles: 'visor de archivos',
        zipLikeNoChanges: 'ZIP/ELPX/H5P cargado sin cambios. Puedes previsualizarlo y, si quieres, aplicar restricciones de visualización.',
        actionWeb: 'Se creará un ZIP con visor web.',
        actionDocuments: 'Se creará un ZIP con visor de documentos.',
        actionFolders: 'Se creará un ZIP con visor de carpetas.',
        actionForcedFolder: 'Forzado visor de carpetas: se creará un ZIP con visor de carpetas.'
      },
      ca: {
        filesReady: 'Fitxers trobats: {count}.',
        typesDetected: 'Tipus detectats:',
        actionLabel: 'Acció:',
        actionZipLike: 'S\'ha detectat ZIP/ELPX/H5P: el pots previsualitzar i, si vols, aplicar restriccions de visualització.',
        actionZipLikeWithType: 'S\'ha detectat ZIP/ELPX/H5P ({viewer}): el pots previsualitzar i, si vols, aplicar restriccions de visualització.',
        actionZipLikeWithTypeScorm12: 'SCORM 1.2 detectat ({viewer}): el pots previsualitzar i, si vols, aplicar restriccions de visualització.',
        analyzingZip: 'Analitzant ZIP/ELPX/H5P...',
        viewerWeb: 'visor web',
        viewerDocuments: 'visor de documents',
        viewerFiles: 'visor d\'arxius',
        zipLikeNoChanges: 'ZIP/ELPX/H5P carregat sense canvis. El pots previsualitzar i, si vols, aplicar restriccions de visualització.',
        actionWeb: 'Es crearà un ZIP amb visor web.',
        actionDocuments: 'Es crearà un ZIP amb visor de documents.',
        actionFolders: 'Es crearà un ZIP amb visor de carpetes.',
        actionForcedFolder: 'Visor de carpetes forçat: es crearà un ZIP amb visor de carpetes.'
      },
      gl: {
        filesReady: 'Ficheiros atopados: {count}.',
        typesDetected: 'Tipos detectados:',
        actionLabel: 'Acción:',
        actionZipLike: 'Detectouse ZIP/ELPX/H5P: podes previsualizalo e, se queres, aplicar restricións de visualización.',
        actionZipLikeWithType: 'Detectouse ZIP/ELPX/H5P ({viewer}): podes previsualizalo e, se queres, aplicar restricións de visualización.',
        actionZipLikeWithTypeScorm12: 'Detectouse SCORM 1.2 ({viewer}): podes previsualizalo e, se queres, aplicar restricións de visualización.',
        analyzingZip: 'Analizando ZIP/ELPX/H5P...',
        viewerWeb: 'visor web',
        viewerDocuments: 'visor de documentos',
        viewerFiles: 'visor de ficheiros',
        zipLikeNoChanges: 'ZIP/ELPX/H5P cargado sen cambios. Podes previsualizalo e, se queres, aplicar restricións de visualización.',
        actionWeb: 'Crearase un ZIP con visor web.',
        actionDocuments: 'Crearase un ZIP con visor de documentos.',
        actionFolders: 'Crearase un ZIP con visor de cartafoles.',
        actionForcedFolder: 'Visor de cartafoles forzado: crearase un ZIP con visor de cartafoles.'
      },
      eu: {
        filesReady: 'Aurkitutako fitxategiak: {count}.',
        typesDetected: 'Detektatutako motak:',
        actionLabel: 'Ekintza:',
        actionZipLike: 'ZIP/ELPX/H5P detektatu da: aurrebista ikus dezakezu eta, nahi baduzu, bistaratze-murrizketak aplikatu.',
        actionZipLikeWithType: 'ZIP/ELPX/H5P detektatu da ({viewer}): aurrebista ikus dezakezu eta, nahi baduzu, bistaratze-murrizketak aplikatu.',
        actionZipLikeWithTypeScorm12: 'SCORM 1.2 detektatu da ({viewer}): aurrebista ikus dezakezu eta, nahi baduzu, bistaratze-murrizketak aplikatu.',
        analyzingZip: 'ZIP/ELPX/H5P aztertzen...',
        viewerWeb: 'web bistaratzailea',
        viewerDocuments: 'dokumentu bistaratzailea',
        viewerFiles: 'fitxategi bistaratzailea',
        zipLikeNoChanges: 'ZIP/ELPX/H5P aldaketarik gabe kargatu da. Aurrebista ikus dezakezu eta, nahi baduzu, bistaratze-murrizketak aplikatu.',
        actionWeb: 'Web bistaratzailea duen ZIP bat sortuko da.',
        actionDocuments: 'Dokumentu bistaratzailea duen ZIP bat sortuko da.',
        actionFolders: 'Karpeta bistaratzailea duen ZIP bat sortuko da.',
        actionForcedFolder: 'Karpeta bistaratzailea behartuta: karpeta bistaratzailea duen ZIP bat sortuko da.'
      },
      en: {
        filesReady: 'Files found: {count}.',
        typesDetected: 'Detected types:',
        actionLabel: 'Action:',
        actionZipLike: 'ZIP/ELPX/H5P detected: you can preview it and, if you want, apply visibility restrictions.',
        actionZipLikeWithType: 'ZIP/ELPX/H5P detected ({viewer}): you can preview it and, if you want, apply visibility restrictions.',
        actionZipLikeWithTypeScorm12: 'SCORM 1.2 detected ({viewer}): you can preview it and, if you want, apply visibility restrictions.',
        analyzingZip: 'Analyzing ZIP/ELPX/H5P...',
        viewerWeb: 'web viewer',
        viewerDocuments: 'document viewer',
        viewerFiles: 'file viewer',
        zipLikeNoChanges: 'ZIP/ELPX/H5P loaded with no changes. You can preview it and, if you want, apply visibility restrictions.',
        actionWeb: 'A ZIP with web viewer will be created.',
        actionDocuments: 'A ZIP with document viewer will be created.',
        actionFolders: 'A ZIP with folder viewer will be created.',
        actionForcedFolder: 'Forced folder viewer: a ZIP with folder viewer will be created.'
      },
      de: {
        filesReady: 'Dateien gefunden: {count}.',
        typesDetected: 'Erkannte Typen:',
        actionLabel: 'Aktion:',
        actionZipLike: 'ZIP/ELPX/H5P erkannt: Du kannst eine Vorschau öffnen und bei Bedarf Sichtbarkeitsbeschränkungen anwenden.',
        actionZipLikeWithType: 'ZIP/ELPX/H5P erkannt ({viewer}): Du kannst eine Vorschau öffnen und bei Bedarf Sichtbarkeitsbeschränkungen anwenden.',
        actionZipLikeWithTypeScorm12: 'SCORM 1.2 erkannt ({viewer}): Du kannst eine Vorschau öffnen und bei Bedarf Sichtbarkeitsbeschränkungen anwenden.',
        analyzingZip: 'ZIP/ELPX/H5P wird analysiert...',
        viewerWeb: 'Web-Viewer',
        viewerDocuments: 'Dokumenten-Viewer',
        viewerFiles: 'Datei-Viewer',
        zipLikeNoChanges: 'ZIP/ELPX/H5P ohne Änderungen geladen. Du kannst eine Vorschau öffnen und bei Bedarf Sichtbarkeitsbeschränkungen anwenden.',
        actionWeb: 'Eine ZIP mit Web-Viewer wird erstellt.',
        actionDocuments: 'Eine ZIP mit Dokument-Viewer wird erstellt.',
        actionFolders: 'Eine ZIP mit Ordner-Viewer wird erstellt.',
        actionForcedFolder: 'Ordner-Viewer erzwungen: Eine ZIP mit Ordner-Viewer wird erstellt.'
      }
    };
    return map[lang] || map.es;
  }

  function collectSelectedFileTypeCounts(files) {
    var counts = {};
    (files || []).forEach(function (item) {
      var path = String(item && item.path ? item.path : '').toLowerCase();
      var label = 'OTROS';
      if (/\.html?$/.test(path)) label = 'HTML';
      else if (/\.pdf$/.test(path)) label = 'PDF';
      else if (/\.docx$/.test(path)) label = 'DOCX';
      else if (/\.md$/.test(path)) label = 'MD';
      else if (/\.txt$/.test(path)) label = 'TXT';
      else if (/\.csv$/.test(path)) label = 'CSV';
      else if (/\.h5p$/.test(path)) label = 'H5P';
      else if (/\.zip$/.test(path)) label = 'ZIP';
      else if (/\.elpx$/.test(path)) label = 'ELPX';
      else if (/\.(png|jpe?g|gif|webp|svg|bmp|ico)$/.test(path)) label = 'IMAGEN';
      else if (/\.(mp3|wav|ogg|m4a|flac|aac)$/.test(path)) label = 'AUDIO';
      else if (/\.(mp4|webm|mov|avi|mkv)$/.test(path)) label = 'VIDEO';
      counts[label] = (counts[label] || 0) + 1;
    });
    return counts;
  }

  function getSingleArchiveTypeLabel(path) {
    var lower = String(path || '').toLowerCase();
    if (/\.h5p$/.test(lower)) return 'H5P';
    if (/\.elpx$/.test(lower)) return 'ELPX';
    if (/\.zip$/.test(lower)) return 'ZIP';
    return 'ZIP/ELPX/H5P';
  }

  function setSingleZipLikeInfo(path, info) {
    lastSingleZipLikeInfo = {
      path: String(path || ''),
      isScorm12: !!(info && info.isScorm12)
    };
  }

  function getArchiveLabelForCurrentBuild(mode) {
    var resolvedMode = mode || resolveZipBuildMode();
    var flow = String(resolvedMode || '').split('-')[0];
    if (flow !== 'files') return 'ZIP';
    var singleSelected = selectedFiles && selectedFiles.length === 1 ? selectedFiles[0] : null;
    var singlePath = singleSelected ? String(singleSelected.path || (singleSelected.file && singleSelected.file.name) || '') : '';
    if (!singlePath) return 'ZIP';
    if (/\.h5p$/i.test(singlePath)) return 'H5P';
    if (/\.elpx$/i.test(singlePath)) return 'ELPX';
    if (/\.zip$/i.test(singlePath)) {
      if (lastSingleZipLikeInfo.path === singlePath && lastSingleZipLikeInfo.isScorm12) {
        return 'SCORM 1.2 (ZIP)';
      }
      return 'ZIP';
    }
    return 'ZIP';
  }

  function buildUploadSelectionSummary(files, zipViewerInfo) {
    var list = files || [];
    if (!list.length) return t('zipper.status.empty');
    var texts = getUploadSummaryTexts();
    var typeCounts = collectSelectedFileTypeCounts(list);
    var typeSummary = Object.keys(typeCounts)
      .sort(function (a, b) {
        if (a === 'OTROS' && b !== 'OTROS') return 1;
        if (b === 'OTROS' && a !== 'OTROS') return -1;
        if (typeCounts[b] !== typeCounts[a]) return typeCounts[b] - typeCounts[a];
        return a.localeCompare(b);
      })
      .map(function (type) {
        return type + ' (' + typeCounts[type] + ')';
      })
      .join(', ');

    var singleSelected = list.length === 1 ? list[0] : null;
    var singlePath = singleSelected ? String(singleSelected.path || (singleSelected.file && singleSelected.file.name) || '') : '';
    var singleIsZipLike = !!singlePath && /\.(zip|elpx|h5p)$/i.test(singlePath);
    var singleArchiveTypeLabel = getSingleArchiveTypeLabel(singlePath);
    var forceFolderViewer = !!(forceFolderViewerInput && forceFolderViewerInput.checked);
    var hasHtml = list.some(function (item) {
      var lower = String(item && item.path ? item.path : '').toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    var hasH5p = list.some(function (item) {
      return isH5pPath(String(item && item.path ? item.path : ''));
    });
    var onlyDocuments = list.every(function (item) {
      var lower = String(item && item.path ? item.path : '').toLowerCase();
      return lower.endsWith('.pdf')
        || lower.endsWith('.docx')
        || lower.endsWith('.txt')
        || lower.endsWith('.md')
        || lower.endsWith('.csv');
    });

    var parsedZipViewerType = '';
    var parsedZipIsScorm12 = false;
    if (zipViewerInfo && typeof zipViewerInfo === 'object') {
      parsedZipViewerType = String(zipViewerInfo.viewerType || '');
      parsedZipIsScorm12 = !!zipViewerInfo.isScorm12;
    } else if (typeof zipViewerInfo === 'string') {
      parsedZipViewerType = zipViewerInfo;
    }

    var actionText = texts.actionFolders;
    if (singleIsZipLike) {
      if (parsedZipViewerType && texts.actionZipLikeWithType) {
        var viewerLabel = parsedZipViewerType === 'html'
          ? texts.viewerWeb
          : (parsedZipViewerType === 'documents' ? texts.viewerDocuments : texts.viewerFiles);
        if (parsedZipIsScorm12 && texts.actionZipLikeWithTypeScorm12) {
          actionText = texts.actionZipLikeWithTypeScorm12.replace('{viewer}', viewerLabel);
        } else {
          actionText = texts.actionZipLikeWithType.replace('{viewer}', viewerLabel);
        }
      } else {
        actionText = texts.actionZipLike;
      }
      actionText = String(actionText || '').replace(/ZIP\/ELPX/g, singleArchiveTypeLabel);
    }
    else if (forceFolderViewer) actionText = texts.actionForcedFolder;
    else if (hasHtml || hasH5p) actionText = texts.actionWeb;
    else if (onlyDocuments) actionText = texts.actionDocuments;

    var filesReady = texts.filesReady.replace('{count}', String(list.length));
    var cleanFilesReady = String(filesReady || '').trim().replace(/\.$/, '');
    var filesLabel = cleanFilesReady;
    var filesValue = '';
    var filesMatch = cleanFilesReady.match(/^([^:]+):\s*(.+)$/);
    if (filesMatch) {
      filesLabel = filesMatch[1];
      filesValue = filesMatch[2];
    }
    var typesLabel = String(texts.typesDetected || '').replace(/:\s*$/, '');
    var actionLabel = String(texts.actionLabel || '').replace(/:\s*$/, '');
    var actionValue = String(actionText || '').trim().replace(/\.$/, '');
    var chips = [
      '<span class="summary-chip"><span class="summary-chip__label">' + escapeHtml(filesLabel) + ':</span><span class="summary-chip__value">' + escapeHtml(filesValue || String(list.length)) + '</span></span>',
      '<span class="summary-chip"><span class="summary-chip__label">' + escapeHtml(typesLabel) + ':</span><span class="summary-chip__value">' + escapeHtml(typeSummary) + '</span></span>',
      '<span class="summary-chip"><span class="summary-chip__label">' + escapeHtml(actionLabel) + ':</span><span class="summary-chip__value">' + escapeHtml(actionValue) + '</span></span>'
    ];
    return '<div class="upload-summary">' + chips.join('') + '</div>';
  }

  function refreshUploadSelectionSummary() {
    uploadSummaryRequestId += 1;
    var requestId = uploadSummaryRequestId;
    if (!selectedFiles || !selectedFiles.length) {
      setSingleZipLikeInfo('', null);
      UI.setUploadStatus(t('zipper.status.empty'));
      updateBuildZipButtonLabel();
      return;
    }
    UI.setUploadStatus(buildUploadSelectionSummary(selectedFiles), { html: true, highlight: true });
    var singleSelected = selectedFiles.length === 1 ? selectedFiles[0] : null;
    var singlePath = singleSelected ? String(singleSelected.path || (singleSelected.file && singleSelected.file.name) || '') : '';
    var singleIsZipLike = !!singlePath && /\.(zip|elpx|h5p)$/i.test(singlePath);
    if (!singleSelected || !singleIsZipLike || !singleSelected.file) {
      setSingleZipLikeInfo('', null);
      updateBuildZipButtonLabel();
      return;
    }
    setSingleZipLikeInfo(singlePath, null);
    var texts = getUploadSummaryTexts();
    var archiveTypeLabel = getSingleArchiveTypeLabel(singlePath);
    var analyzingText = String(texts.analyzingZip || '').replace(/ZIP\/ELPX/g, archiveTypeLabel);
    UI.setUploadStatus(buildUploadSelectionSummary(selectedFiles) + '<div class="summary-note">' + escapeHtml(analyzingText) + '</div>', { html: true, highlight: true });
    extractZipLikeRestrictions(singleSelected.file).then(function (detectedRestrictions) {
      if (requestId !== uploadSummaryRequestId) return;
      if (!selectedFiles || selectedFiles.length !== 1) return;
      var currentSingle = selectedFiles[0];
      var currentPath = String(currentSingle.path || (currentSingle.file && currentSingle.file.name) || '');
      if (currentPath !== singlePath) return;
      if (!detectedRestrictions || !RestrictionUI || !RestrictionUI.loadRestrictionsPayload) return;
      RestrictionUI.loadRestrictionsPayload(detectedRestrictions);
      if (restrictionToggleProxy && restrictionToggle) {
        restrictionToggleProxy.checked = !!restrictionToggle.checked;
      }
      syncRestrictionEditButtonVisibility();
      renderResourceStatePanel();
    });
    detectZipLikeViewerType(singleSelected.file).then(function (viewerInfo) {
      if (requestId !== uploadSummaryRequestId) return;
      if (!selectedFiles || selectedFiles.length !== 1) return;
      var currentSingle = selectedFiles[0];
      var currentPath = String(currentSingle.path || (currentSingle.file && currentSingle.file.name) || '');
      if (currentPath !== singlePath) return;
      setSingleZipLikeInfo(singlePath, viewerInfo);
      UI.setUploadStatus(buildUploadSelectionSummary(selectedFiles, viewerInfo), { html: true, highlight: true });
      updateBuildZipButtonLabel();
    }).catch(function () {
      if (requestId !== uploadSummaryRequestId) return;
      setSingleZipLikeInfo(singlePath, null);
      UI.setUploadStatus(buildUploadSelectionSummary(selectedFiles), { html: true, highlight: true });
      updateBuildZipButtonLabel();
    });
  }

  function updateQuickDropzoneState() {
    var hasFiles = !!(selectedFiles && selectedFiles.length);
    if (quickDropzone) {
      quickDropzone.classList.toggle('is-loaded', hasFiles);
    }
    if (quickDropTitle) {
      quickDropTitle.textContent = t('publish.quick.files.dropTitle') || '';
      if (hasFiles) {
        quickDropTitle.setAttribute('hidden', '');
      } else {
        quickDropTitle.removeAttribute('hidden');
      }
    }
    if (quickDropFeedback) {
      if (hasFiles) {
        quickDropFeedback.removeAttribute('hidden');
      } else {
        quickDropFeedback.setAttribute('hidden', '');
      }
    }
    if (quickDropFeedbackMessage) {
      quickDropFeedbackMessage.textContent = hasFiles
        ? (t('zipper.status.filesReady', { count: selectedFiles.length }) || '')
        : '';
    }
  }

  function emphasizeLoadedResourcePanel() {
    var target = downloadPanel || uploadStatus;
    if (!target) return;
    target.classList.add('is-just-loaded');
    if (quickDropHighlightTimer) {
      clearTimeout(quickDropHighlightTimer);
    }
    quickDropHighlightTimer = setTimeout(function () {
      target.classList.remove('is-just-loaded');
      quickDropHighlightTimer = null;
    }, 2400);
    setTimeout(function () {
      try {
        target.scrollIntoView({ block: 'start', behavior: 'smooth' });
      } catch (e) {
        target.scrollIntoView(true);
      }
    }, 80);
  }

  function refreshPrimaryUploadSummary() {
    updateNewResourceVisibility();
    updateQuickDropzoneState();
    var filesReady = !!(selectedFiles && selectedFiles.length);
    var htmlReady = !!(htmlZipInput && htmlZipInput.value && htmlZipInput.value.trim());
    if (filesReady) {
      refreshUploadSelectionSummary();
      return;
    }
    if (htmlReady) {
      UI.setUploadStatus(t('zipper.html.status.ready'));
      return;
    }
    UI.setUploadStatus(t('zipper.status.empty'));
  }

  function hasLoadedZipperContent() {
    var filesReady = !!(selectedFiles && selectedFiles.length);
    var htmlReady = !!(htmlZipInput && htmlZipInput.value && htmlZipInput.value.trim());
    return filesReady || htmlReady;
  }

  function shouldShowDownloadPanel() {
    var activeRoute = publishChoice ? (publishChoice.getAttribute('data-active-route') || '') : '';
    if (activeRoute === 'b') return false;
    return hasLoadedZipperContent();
  }

  function updateNewResourceVisibility() {
    if (!newResourceWrap) return;
    var hasActiveRoute = !!(publishChoice && publishChoice.getAttribute('data-active-route'));
    if (hasLoadedZipperContent() || hasActiveRoute) {
      newResourceWrap.removeAttribute('hidden');
    } else {
      newResourceWrap.setAttribute('hidden', '');
    }
  }

  function syncZipperTabVisibility() {
    var shouldShow = shouldShowDownloadPanel();
    if (downloadPanel) {
      if (shouldShow) {
        downloadPanel.removeAttribute('hidden');
      } else {
        downloadPanel.setAttribute('hidden', '');
      }
    }
    if (downloadDivider) {
      if (shouldShow) {
        downloadDivider.removeAttribute('hidden');
      } else {
        downloadDivider.setAttribute('hidden', '');
      }
    }
    if (tabZipperButton) {
      tabZipperButton.setAttribute('hidden', '');
    }
  }

  function detectZipLikeViewerType(file) {
    if (!file || !window.fflate || !window.fflate.unzipSync) {
      return Promise.resolve(null);
    }
    return file.arrayBuffer().then(function (buffer) {
      var entries = window.fflate.unzipSync(new Uint8Array(buffer));
      var allPaths = Object.keys(entries).filter(function (entryPath) {
        return !!entryPath && !/\/$/.test(entryPath) && entryPath.indexOf('__MACOSX/') !== 0;
      }).map(function (entryPath) {
        return normalizePath(entryPath);
      }).filter(function (path) {
        return !!path;
      });
      var isScorm12 = !!findScormManifestPath(allPaths);
      var hasForcedFolderViewer = false;
      if (entries['__vwz_viewer.json']) {
        try {
          var viewerMeta = JSON.parse(decodeUtf8(entries['__vwz_viewer.json']) || '{}');
          hasForcedFolderViewer = !!(viewerMeta && viewerMeta.forceFolderViewer);
        } catch (e) {
          hasForcedFolderViewer = false;
        }
      }
      if (hasForcedFolderViewer) {
        return { viewerType: 'files', isScorm12: isScorm12 };
      }
      var paths = Object.keys(entries).filter(function (entryPath) {
        if (!entryPath || /\/$/.test(entryPath)) return false;
        if (entryPath.indexOf('__MACOSX/') === 0) return false;
        if (entryPath === 'restrictions.json') return false;
        return !isHelperViewerPath(entryPath);
      });
      if (!paths.length) return null;
      var hasHtml = paths.some(function (entryPath) {
        var lower = String(entryPath || '').toLowerCase();
        return lower.endsWith('.html') || lower.endsWith('.htm');
      });
      var hasH5pPackage = paths.some(function (entryPath) {
        return isH5pPath(entryPath);
      });
      var hasH5pManifest = paths.some(function (entryPath) {
        var normalized = normalizePath(entryPath || '').toLowerCase();
        return normalized === 'h5p.json' || normalized === './h5p.json';
      });
      if (hasHtml) {
        return { viewerType: 'html', isScorm12: isScorm12 };
      }
      if (hasH5pPackage || hasH5pManifest) {
        return { viewerType: 'html', isScorm12: false };
      }
      var onlyDocuments = paths.every(function (entryPath) {
        return isPdfPath(entryPath)
          || isDocxPath(entryPath)
          || isTxtPath(entryPath)
          || isMarkdownPath(entryPath)
          || isCsvPath(entryPath);
      });
      return {
        viewerType: onlyDocuments ? 'documents' : 'files',
        isScorm12: isScorm12
      };
    }).catch(function () {
      return null;
    });
  }

  function extractZipLikeRestrictions(file) {
    if (!file || !window.fflate || !window.fflate.unzipSync) {
      return Promise.resolve(null);
    }
    return file.arrayBuffer().then(function (buffer) {
      var entries = window.fflate.unzipSync(new Uint8Array(buffer));
      return Restrictions.extractRestrictions(entries, decodeUtf8) || null;
    }).catch(function () {
      return null;
    });
  }

  function updateSelectedFiles(files) {
    selectedFiles = files || [];
    updateNewResourceVisibility();
    updateQuickDropzoneState();
    resetZipDownload();
    zipNameDirty = false;
    resourceTitleDirty = false;
    if (!selectedFiles.length) {
      refreshPrimaryUploadSummary();
      UI.setZipStatus('');
      if (resourceTitleInput && !resourceTitleDirty) {
        resourceTitleInput.value = '';
      }
      if (zipNameInput && !zipNameDirty) {
        zipNameInput.value = deriveZipNameFromCurrentState();
      }
      syncResourceTitleToggleState();
      updateBuildZipButtonLabel();
      syncZipperTabVisibility();
      return;
    }
    preferredZipBuildFlow = 'files';
    if (resourceTitleInput && !resourceTitleDirty) {
      resourceTitleInput.value = deriveResourceTitleFromSelection(selectedFiles);
    }
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = deriveZipNameFromCurrentState();
    }
    syncResourceTitleToggleState();
    refreshUploadSelectionSummary();
    UI.setZipStatus('');
    updateBuildZipButtonLabel();
    syncZipperTabVisibility();
    UI.showToast(t('zipper.status.filesReady', { count: selectedFiles.length }));
    emphasizeLoadedResourcePanel();
  }


  function encodeUtf8(text) {
    if (window.TextEncoder) {
      return new TextEncoder().encode(text);
    }
    var utf8 = unescape(encodeURIComponent(text));
    var bytes = new Uint8Array(utf8.length);
    for (var i = 0; i < utf8.length; i += 1) {
      bytes[i] = utf8.charCodeAt(i);
    }
    return bytes;
  }

  function decodeUtf8(bytes) {
    if (window.TextDecoder) {
      return new TextDecoder('utf-8').decode(bytes);
    }
    var out = '';
    for (var i = 0; i < bytes.length; i += 1) {
      out += String.fromCharCode(bytes[i]);
    }
    try {
      return decodeURIComponent(escape(out));
    } catch (e) {
      return out;
    }
  }

  function formatLocalDateTime(value) {
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return value.getFullYear()
      + '-' + pad(value.getMonth() + 1)
      + '-' + pad(value.getDate())
      + 'T' + pad(value.getHours())
      + ':' + pad(value.getMinutes());
  }





  function deriveTitleFromPath(path) {
    if (!path) return '';
    var trimmed = path.replace(/[#?].*$/, '');
    var parts = trimmed.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function deriveTitleFromUrl(url) {
    if (!url) return '';
    var cleaned = url.replace(/[#?].*$/, '');
    var parts = cleaned.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function deriveTitleFromHtmlText(htmlText) {
    var text = String(htmlText || '').trim();
    if (!text) return '';
    var title = '';
    if (typeof DOMParser !== 'undefined') {
      try {
        var doc = new DOMParser().parseFromString(text, 'text/html');
        title = doc && doc.title ? doc.title : '';
        if (!title && doc && doc.querySelector) {
          var metaTitleNode = doc.querySelector('meta[property="og:title"], meta[name="twitter:title"], meta[name="title"]');
          title = metaTitleNode ? (metaTitleNode.getAttribute('content') || '') : '';
        }
        if (!title && doc && doc.body) {
          var heading = doc.body.querySelector('h1');
          title = heading ? (heading.textContent || '') : '';
        }
      } catch (err) {
        title = '';
      }
    }
    if (!title) {
      var titleMatch = text.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      title = titleMatch ? titleMatch[1] : '';
    }
    if (!title) {
      var metaMatch = text.match(/<meta[^>]+(?:property|name)=["'](?:og:title|twitter:title|title)["'][^>]+content=["']([\s\S]*?)["'][^>]*>/i);
      title = metaMatch ? metaMatch[1] : '';
    }
    if (!title) {
      var h1Match = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      title = h1Match ? h1Match[1] : '';
    }
    title = String(title || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, ' ')
      .trim();
    return normalizeResourceTitle(title);
  }

  function syncResourceTitleFromHtml(htmlText) {
    if (!resourceTitleInput || resourceTitleDirty) return;
    resourceTitleInput.value = deriveTitleFromHtmlText(htmlText) || '';
    syncResourceTitleToggleState();
    syncZipNameDefault();
  }

  function dispatchInputEvent(node) {
    if (!node) return;
    try {
      node.dispatchEvent(new Event('input', { bubbles: true }));
    } catch (err) {
      var legacyEvent = document.createEvent('Event');
      legacyEvent.initEvent('input', true, true);
      node.dispatchEvent(legacyEvent);
    }
  }

  function focusZipperFlow(flow) {
    setPublishRoute('a');
    preferredZipBuildFlow = flow === 'html' ? 'html' : 'files';
    if (flow === 'html') {
      if (selectedFiles && selectedFiles.length) {
        updateSelectedFiles([]);
      } else {
        refreshPrimaryUploadSummary();
      }
    } else if (htmlZipInput && htmlZipInput.value && htmlZipInput.value.trim()) {
      htmlZipInput.value = '';
      dispatchInputEvent(htmlZipInput);
    }
    updateBuildZipButtonLabel();
  }

  function applyQuickHtmlToZipper() {
    if (!quickHtmlInput) return;
    var htmlText = String(quickHtmlInput.value || '');
    if (!htmlText.trim()) return;
    if (!htmlZipInput) return;
    setPublishRoute('a');
    preferredZipBuildFlow = 'html';
    if (selectedFiles && selectedFiles.length) {
      updateSelectedFiles([]);
    }
    htmlZipInput.value = htmlText;
    syncResourceTitleFromHtml(htmlText);
    dispatchInputEvent(htmlZipInput);
    // Keep the pasted HTML visible in the quick input.
  }

  function syncQuickHtmlToZipper() {
    if (!quickHtmlInput || !htmlZipInput) return;
    var htmlText = String(quickHtmlInput.value || '');
    if (htmlText.trim()) {
      applyQuickHtmlToZipper();
      return;
    }
    if (!htmlZipInput.value) return;
    htmlZipInput.value = '';
    dispatchInputEvent(htmlZipInput);
  }

  function triggerQuickDownloadFromHtml(htmlText) {
    htmlText = String(htmlText || '').trim();
    if (!htmlText) {
      if (UI.showToast) UI.showToast(t('zipper.html.status.empty'));
      return;
    }
    if (Zipper.looksLikeReactJsx && Zipper.looksLikeReactJsx(htmlText)) {
      if (UI.showToast) UI.showToast(t('zipper.html.status.reactDetected'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      if (UI.showToast) UI.showToast(t('zipper.status.engineMissing'));
      return;
    }
    if (UI.showToast) UI.showToast(t('zipper.status.creating'));
    try {
      var zipName = Zipper.normalizeZipName(zipNameInput ? zipNameInput.value : deriveZipNameFromCurrentState());
      var forceFolderViewer = !!(forceFolderViewerInput && forceFolderViewerInput.checked);
      var resourceTitle = getActiveResourceTitleValue();
      var files = { 'index.html': encodeUtf8(htmlText) };
      var restrictions = RestrictionUI.buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      if (forceFolderViewer) {
        injectForcedFolderViewer(files, restrictions, resourceTitle);
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      URL.revokeObjectURL(anchor.href);
      document.body.removeChild(anchor);
      if (quickHtmlInput) quickHtmlInput.value = '';
      var createdKey = forceFolderViewer ? 'zipper.status.created.files' : 'zipper.status.created.html';
      if (UI.showToast) UI.showToast(t(createdKey));
    } catch (err) {
      if (UI.showToast) UI.showToast(t('zipper.html.status.failed'));
    }
  }

  function readBlobText(blob) {
    if (!blob) return Promise.resolve('');
    if (blob.text) {
      return blob.text().catch(function () { return ''; });
    }
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result || '');
      };
      reader.onerror = function () {
        resolve('');
      };
      reader.readAsText(blob);
    });
  }

  function extractTitleFromFiles(files, indexPath) {
    if (!files || !files.length) return Promise.resolve('');
    var metaFile = null;
    var target = null;
    for (var i = 0; i < files.length; i += 1) {
      if (files[i].path === '__vwz_meta.json') {
        metaFile = files[i];
      }
      if (indexPath && files[i].path === indexPath) {
        target = files[i];
      }
    }
    var readMetaTitle = function () {
      if (!metaFile || !metaFile.blob) return Promise.resolve('');
      return readBlobText(metaFile.blob).then(function (text) {
        if (!text) return '';
        try {
          var parsed = JSON.parse(text);
          return normalizeResourceTitle(parsed && parsed.title ? parsed.title : '');
        } catch (err) {
          return '';
        }
      });
    };
    return readMetaTitle().then(function (metaTitle) {
      if (metaTitle) return metaTitle;
      if (!target || !target.blob) return '';
      return readBlobText(target.blob).then(function (text) {
        var title = '';
        if (typeof DOMParser !== 'undefined') {
          try {
            var doc = new DOMParser().parseFromString(text, 'text/html');
            title = doc && doc.title ? doc.title : '';
          } catch (err) {
            title = '';
          }
        }
        if (!title) {
          var match = text.match(/<title[^>]*>([^<]*)<\/title>/i);
          title = match ? match[1] : '';
        }
        title = (title || '').replace(/\s+/g, ' ').trim();
        return title;
      });
    });
  }

  function collectFilesFromInput(fileList) {
    var files = [];
    Array.prototype.forEach.call(fileList || [], function (file) {
      var path = file.webkitRelativePath || file.name || '';
      if (!path) return;
      path = path.replace(/^\//, '');
      files.push({ path: path, file: file });
    });
    updateSelectedFiles(files);
  }

  function readFileEntry(entry, basePath) {
    return new Promise(function (resolve, reject) {
      entry.file(function (file) {
        var path = (basePath || '') + (file.name || '');
        resolve([{ path: path, file: file }]);
      }, reject);
    });
  }

  function readAllEntries(reader) {
    return new Promise(function (resolve, reject) {
      var entries = [];
      var readBatch = function () {
        reader.readEntries(function (batch) {
          if (!batch.length) {
            resolve(entries);
            return;
          }
          entries = entries.concat(batch);
          readBatch();
        }, reject);
      };
      readBatch();
    });
  }

  function readDirectoryEntry(entry, basePath) {
    var reader = entry.createReader();
    return readAllEntries(reader).then(function (entries) {
      var prefix = (basePath || '') + entry.name + '/';
      var promises = entries.map(function (child) {
        return readEntry(child, prefix);
      });
      return Promise.all(promises).then(function (nested) {
        return nested.reduce(function (acc, group) {
          return acc.concat(group);
        }, []);
      });
    });
  }

  function readEntry(entry, basePath) {
    if (entry.isFile) {
      return readFileEntry(entry, basePath);
    }
    if (entry.isDirectory) {
      return readDirectoryEntry(entry, basePath);
    }
    return Promise.resolve([]);
  }

  function collectFilesFromDrop(event) {
    var items = event.dataTransfer && event.dataTransfer.items;
    if (items && items.length) {
      var entries = [];
      Array.prototype.forEach.call(items, function (item) {
        if (!item.webkitGetAsEntry) return;
        var entry = item.webkitGetAsEntry();
        if (entry) {
          entries.push(entry);
        }
      });
      if (entries.length) {
        return Promise.all(entries.map(function (entry) {
          return readEntry(entry, '');
        })).then(function (nested) {
          var files = nested.reduce(function (acc, group) {
            return acc.concat(group);
          }, []);
          updateSelectedFiles(files);
        });
      }
    }
    collectFilesFromInput(event.dataTransfer.files || []);
    return Promise.resolve();
  }

  function buildPreviewSiteFromFiles(rawFiles, preferredIndexPath, titleHint, options) {
    var opts = options || {};
    if (!rawFiles || !rawFiles.length) {
      return Promise.reject(new Error(t('zipper.status.previewSelectFirst')));
    }
    var siteId = 'preview-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
    var previewRestrictions = Object.prototype.hasOwnProperty.call(opts, 'previewRestrictions')
      ? (opts.previewRestrictions || null)
      : (opts.applyRestrictions ? (RestrictionUI.buildRestrictionsPayload() || null) : null);
    var tasks = rawFiles.map(function (item) {
      return item.file.arrayBuffer().then(function (buffer) {
        var normalized = normalizePath(item.path || '');
        var type = guessMimeType(normalized);
        var blob = new Blob([new Uint8Array(buffer)], { type: type });
        return {
          key: siteId + '::' + normalized,
          siteId: siteId,
          path: normalized,
          blob: blob,
          size: blob.size,
          type: type
        };
      });
    });
    return Promise.all(tasks).then(function (files) {
      var hasMeta = files.some(function (file) {
        return file && file.path === '__vwz_meta.json';
      });
      var previewTitle = normalizeResourceTitle(titleHint)
        || normalizeResourceTitle(deriveResourceTitleFromSelection(rawFiles || []))
        || normalizeResourceTitle((Zipper.deriveZipBaseName(rawFiles || []) || '').replace(/[_-]+/g, ' '));
      if (!hasMeta && previewTitle) {
        var metaBlob = new Blob([encodeUtf8(JSON.stringify({ title: previewTitle }, null, 2))], {
          type: 'application/json'
        });
        files.push({
          key: siteId + '::__vwz_meta.json',
          siteId: siteId,
          path: '__vwz_meta.json',
          blob: metaBlob,
          size: metaBlob.size,
          type: 'application/json'
        });
      }
      var previewPreferredIndexPath = preferredIndexPath || '';
      var preferredPromise = Promise.resolve({
        launchPath: previewPreferredIndexPath || '',
        scormInfo: null
      });
      if (!previewPreferredIndexPath && !opts.forceFolderViewer) {
        preferredPromise = detectScormInfoFromStoredFiles(files).then(function (scormInfo) {
          return {
            launchPath: scormInfo && scormInfo.launchPath ? scormInfo.launchPath : '',
            scormInfo: scormInfo || null
          };
        });
      }
      return preferredPromise.then(function (detectedData) {
        var detectedPreferred = detectedData && detectedData.launchPath ? detectedData.launchPath : '';
        var detectedScormInfo = detectedData && detectedData.scormInfo ? detectedData.scormInfo : null;
        if (!previewPreferredIndexPath && detectedPreferred) {
          previewPreferredIndexPath = detectedPreferred;
        }
        if (!opts.forceFolderViewer && detectedScormInfo && detectedScormInfo.items && detectedScormInfo.items.length > 1) {
          var hasClassicLauncher = files.some(function (file) {
            return isClassicScormLauncherPath(file && file.path ? file.path : '');
          });
          if (!hasClassicLauncher) {
            var uniqueScormPath = pickUniqueHtmlPath('__vwz_scorm_index.html', files.map(function (file) {
              return file && file.path ? file.path : '';
            }));
            var scormHtml = buildScormIndexHtml(detectedScormInfo, previewTitle);
            var scormBlob = new Blob([scormHtml], { type: 'text/html' });
            files.push({
              key: siteId + '::' + uniqueScormPath,
              siteId: siteId,
              path: uniqueScormPath,
              blob: scormBlob,
              size: scormBlob.size,
              type: 'text/html'
            });
            previewPreferredIndexPath = uniqueScormPath;
          }
        }
        if (opts.forceFolderViewer) {
          var visibleEntries = mapFolderFileEntries(files);
          if (visibleEntries.length) {
            var forceIndexPath = '__vwz_folder_index.html';
            var lowerPaths = files.map(function (file) { return (file.path || '').toLowerCase(); });
            var suffix = 2;
            while (lowerPaths.indexOf(forceIndexPath.toLowerCase()) !== -1) {
              forceIndexPath = '__vwz_folder_index_' + suffix + '.html';
              suffix += 1;
            }
            var html = buildFolderIndexHtml(visibleEntries, true, previewRestrictions);
            var blob = new Blob([html], { type: 'text/html' });
            files.push({
              key: siteId + '::' + forceIndexPath,
              siteId: siteId,
              path: forceIndexPath,
              blob: blob,
              size: blob.size,
              type: 'text/html'
            });
            previewPreferredIndexPath = forceIndexPath;
          }
        }
        return prepareIndexableZip(files, siteId, previewPreferredIndexPath, true, previewRestrictions).then(function (prepared) {
          var paths = prepared.files.map(function (file) { return file.path; });
          return pickIndexPath(paths, prepared.preferredIndexPath || previewPreferredIndexPath || '').then(function (indexPath) {
            var totalBytes = prepared.files.reduce(function (sum, file) { return sum + (file.size || 0); }, 0);
            return ensureStorageCapacity(totalBytes).then(function (canProceed) {
              if (!canProceed) throw new Error(t('error.noSpace'));
              var previousPreview = currentPreviewSiteId;
              if (previousPreview && previousPreview !== siteId) {
                Storage.deleteSite(previousPreview).catch(function () {});
              }
              return extractTitleFromFiles(prepared.files, indexPath).then(function (foundTitle) {
                var siteTitle = foundTitle || normalizeResourceTitle(titleHint) || deriveTitleFromPath(indexPath) || t('zipper.help.previewAction');
                var site = {
                  id: siteId,
                  url: '',
                  indexPath: indexPath,
                  updatedAt: Date.now(),
                  fileCount: prepared.files.length,
                  totalBytes: totalBytes,
                  title: siteTitle,
                  restrictions: previewRestrictions,
                  remoteMeta: null,
                  updateAvailable: false,
                  updatedFromRemoteAt: null,
                  temporaryPreview: true
                };
                return Storage.deleteSite(siteId).catch(function () {}).then(function () {
                  return Storage.saveSite(site).then(function () {
                    return Storage.saveFiles(prepared.files).then(function () {
                      currentPreviewSiteId = siteId;
                      return {
                        siteUrl: buildSiteUrl(siteId, indexPath),
                        restrictions: previewRestrictions || null
                      };
                    });
                  });
                });
              });
            });
          });
        });
        });
    });
  }

  function buildPreviewFromSelection() {
    var singleSelected = selectedFiles && selectedFiles.length === 1 ? selectedFiles[0] : null;
    var singlePath = singleSelected ? String(singleSelected.path || (singleSelected.file && singleSelected.file.name) || '') : '';
    var singleIsZipLike = !!singlePath && /\.(zip|elpx|h5p)$/i.test(singlePath);
    if (singleSelected && singleIsZipLike && singleSelected.file) {
      if (!window.fflate || !window.fflate.unzipSync) {
        return Promise.reject(new Error(t('zipper.status.engineMissing')));
      }
      return singleSelected.file.arrayBuffer().then(function (buffer) {
        var entries = window.fflate.unzipSync(new Uint8Array(buffer));
        var files = [];
        Object.keys(entries).forEach(function (entryPath) {
          if (!entryPath || entryPath.endsWith('/')) return;
          if (entryPath.indexOf('__MACOSX/') === 0) return;
          if (entryPath === 'restrictions.json') return;
          var normalized = normalizePath(entryPath);
          var type = guessMimeType(normalized);
          var blob = new Blob([entries[entryPath]], { type: type });
          var name = normalized.split('/').pop() || normalized;
          files.push({
            path: normalized,
            file: new File([blob], name, { type: type })
          });
        });
        if (!files.length) {
          throw new Error(t('error.zipNoWebFiles'));
        }
        var previewRestrictions = null;
        if (previewApplyRestrictionsInput && previewApplyRestrictionsInput.checked) {
          previewRestrictions = RestrictionUI.buildRestrictionsPayload()
            || Restrictions.extractRestrictions(entries, decodeUtf8)
            || null;
        }
        return buildPreviewSiteFromFiles(files, '', getActiveResourceTitleValue(), {
          forceFolderViewer: !!(forceFolderViewerInput && forceFolderViewerInput.checked),
          applyRestrictions: false,
          previewRestrictions: previewRestrictions
        });
      });
    }
    return buildPreviewSiteFromFiles(
      selectedFiles,
      '',
      getActiveResourceTitleValue(),
      {
        forceFolderViewer: !!(forceFolderViewerInput && forceFolderViewerInput.checked),
        applyRestrictions: !!(previewApplyRestrictionsInput && previewApplyRestrictionsInput.checked)
      }
    );
  }

  function buildPreviewFromHtml() {
    var htmlText = htmlZipInput ? htmlZipInput.value.trim() : '';
    if (!htmlText) {
      return Promise.reject(new Error(t('zipper.status.previewSelectFirst')));
    }
    var fakeFile = new File([htmlText], 'index.html', { type: 'text/html' });
    return buildPreviewSiteFromFiles([
      { path: 'index.html', file: fakeFile }
    ], 'index.html', getActiveResourceTitleValue(), {
      applyRestrictions: !!(previewApplyRestrictionsInput && previewApplyRestrictionsInput.checked)
    });
  }

  function openLocalPreview() {
    setPreviewStatus(t('zipper.status.previewPreparing'));
    var hasSelection = selectedFiles && selectedFiles.length;
    var hasHtml = htmlZipInput && htmlZipInput.value && htmlZipInput.value.trim();
    var previewWindow = null;
    var popupPreBlocked = false;
    if (hasSelection || hasHtml) {
      try {
        // Open immediately within the user gesture to avoid popup blockers.
        previewWindow = window.open('about:blank', '_blank');
        renderPreviewLoadingScreen(previewWindow);
      } catch (e) {
        previewWindow = null;
      }
      popupPreBlocked = !previewWindow;
    }
    var previewPromise = hasSelection
      ? buildPreviewFromSelection()
      : (hasHtml
        ? buildPreviewFromHtml()
        : Promise.reject(new Error(t('zipper.status.previewSelectFirst'))));
    return previewPromise.then(function (previewData) {
      var siteUrl = (previewData && typeof previewData === 'object' && previewData.siteUrl)
        ? previewData.siteUrl
        : previewData;
      var previewRestrictions = (previewData && typeof previewData === 'object' && previewData.restrictions)
        ? previewData.restrictions
        : null;
      var blockedNow = Restrictions.isRestrictionActive(previewRestrictions)
        && !Restrictions.isRestrictionAllowedNow(previewRestrictions);
      if (blockedNow) {
        if (previewWindow && !previewWindow.closed) {
          try {
            previewWindow.close();
          } catch (e) {}
        }
        RestrictionUI.showRestrictionModal(previewRestrictions);
        setPreviewStatus(t('error.restricted'));
        return siteUrl;
      }
      return registerServiceWorker().then(function () {
        return waitForServiceWorkerControl();
      }).catch(function () {
        throw new Error(t('error.offlineNotAllowed'));
      }).then(function () {
        var opened = previewWindow && !previewWindow.closed ? previewWindow : window.open(siteUrl, '_blank');
        if (!opened) {
          throw new Error(t('error.popupBlocked') || t('error.loadZip'));
        }
        try {
          opened.location.href = siteUrl;
        } catch (e) {
          // Fallback for browsers that disallow reusing the handle.
          var fallback = window.open(siteUrl, '_blank');
          if (!fallback) {
            throw new Error(t('error.popupBlocked') || t('error.loadZip'));
          }
        }
        if (popupPreBlocked) {
          setPreviewStatus(t('error.popupBlocked') || t('zipper.status.previewFailed'));
          return siteUrl;
        }
        setPreviewStatus(t('zipper.status.previewOpened'));
        return siteUrl;
      });
    }).catch(function (err) {
      if (previewWindow && !previewWindow.closed) {
        try {
          previewWindow.close();
        } catch (e) {
          // ignore close failures
        }
      }
      setPreviewStatus((err && err.message) ? err.message : t('zipper.status.previewFailed'));
      throw err;
    });
  }

  function injectForcedFolderViewer(entries, restrictions, fallbackTitle) {
    if (!entries || typeof entries !== 'object') return;
    var paths = Object.keys(entries).filter(function (path) {
      return path && !/\/$/.test(path);
    });
    var folderEntries = mapFolderFileEntries(paths.map(function (path) {
      var data = entries[path];
      return {
        path: path,
        size: data && data.length ? data.length : 0,
        type: guessMimeType(path)
      };
    }));
    if (!folderEntries.length) return;
    var allowDownload = isDownloadAllowedByRestrictions(restrictions);
    var forceIndexPath = '__vwz_folder_index.html';
    var lowerPaths = paths.map(function (path) { return String(path || '').toLowerCase(); });
    var suffix = 2;
    while (lowerPaths.indexOf(forceIndexPath.toLowerCase()) !== -1) {
      forceIndexPath = '__vwz_folder_index_' + suffix + '.html';
      suffix += 1;
    }
    entries[forceIndexPath] = encodeUtf8(buildFolderIndexHtml(folderEntries, allowDownload, restrictions));
    entries['__vwz_viewer.json'] = encodeUtf8(JSON.stringify({
      forceFolderViewer: true,
      preferredIndexPath: forceIndexPath
    }, null, 2));
    if (!entries['__vwz_meta.json']) {
      var title = normalizeResourceTitle(fallbackTitle || '');
      if (title) {
        entries['__vwz_meta.json'] = encodeUtf8(JSON.stringify({ title: title }, null, 2));
      }
    }
  }

  function resolveZipBuildMode() {
    var htmlReady = !!(htmlZipInput && htmlZipInput.value && htmlZipInput.value.trim());
    var filesReady = !!(selectedFiles && selectedFiles.length);
    if (preferredZipBuildFlow === 'html') {
      if (htmlReady) return 'html';
      if (filesReady) return 'files';
      return 'html-empty';
    }
    if (preferredZipBuildFlow === 'files') {
      if (filesReady) return 'files';
      if (htmlReady) return 'html';
      return 'files-empty';
    }

    if (filesReady) return 'files';
    if (htmlReady) return 'html';
    return 'files-empty';
  }

  function updateBuildZipButtonLabel() {
    var mode = resolveZipBuildMode();
    var flow = String(mode || '').split('-')[0];
    var archiveLabel = getArchiveLabelForCurrentBuild(mode);
    if (!buildZipButton) return;
    if (flow === 'html') {
      buildZipButton.textContent = t('zipper.html.build');
      return;
    }
    buildZipButton.textContent = t('zipper.buildDynamic', { type: archiveLabel })
      || t('zipper.build');
  }

  function buildZipFromActiveFlow() {
    var mode = resolveZipBuildMode();
    if (mode === 'files') {
      buildZipFromSelection();
      return;
    }
    if (mode === 'html') {
      buildZipFromHtml();
      return;
    }
    if (mode === 'html-empty') {
      UI.setZipStatus(t('zipper.html.status.empty'));
      return;
    }
    UI.setZipStatus(t('zipper.status.selectFirst'));
  }

  function buildZipFromSelection() {
    if (!selectedFiles.length) {
      UI.setZipStatus(t('zipper.status.selectFirst'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      UI.setZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = Zipper.normalizeZipName(zipNameInput ? zipNameInput.value : deriveZipNameFromCurrentState());
    var resourceTitle = getActiveResourceTitleValue();
    var forceFolderViewer = !!(forceFolderViewerInput && forceFolderViewerInput.checked);
    var singleSelected = selectedFiles.length === 1 ? selectedFiles[0] : null;
    var singlePath = singleSelected ? String(singleSelected.path || (singleSelected.file && singleSelected.file.name) || '') : '';
    var singleIsZipLike = !!singlePath && /\.(zip|elpx|h5p)$/i.test(singlePath);
    var singleArchiveTypeLabel = getSingleArchiveTypeLabel(singlePath);
    if (singleSelected && singleIsZipLike && singleSelected.file) {
      var restrictionsForZipLike = RestrictionUI.buildRestrictionsPayload();
      var titleForZipLike = normalizeResourceTitle(resourceTitle || '');
      if (restrictionsForZipLike || forceFolderViewer || titleForZipLike) {
        applyRestrictionsToZipFile(singleSelected.file, {
          useMainStatus: true,
          forceFolderViewer: forceFolderViewer,
          explicitRestrictions: restrictionsForZipLike,
          explicitResourceTitle: titleForZipLike
        });
        return;
      }
      var zipLikeTexts = getUploadSummaryTexts();
      var noChangesStatus = zipLikeTexts.zipLikeNoChanges || t('zipper.status.downloaded');
      UI.setZipStatus(String(noChangesStatus || '').replace(/ZIP\/ELPX/g, singleArchiveTypeLabel));
      return;
    }
    UI.setZipStatus(t('zipper.status.creating'));
    var viewerType = (function () {
      if (forceFolderViewer) return 'files';
      var hasHtml = selectedFiles.some(function (item) {
        var lower = (item.path || '').toLowerCase();
        return lower.endsWith('.html') || lower.endsWith('.htm');
      });
      var hasH5p = selectedFiles.some(function (item) {
        return isH5pPath(item && item.path ? item.path : '');
      });
      if (hasHtml || hasH5p) return 'html';
      var onlyDocuments = selectedFiles.every(function (item) {
        var lower = (item.path || '').toLowerCase();
        return lower.endsWith('.pdf') || lower.endsWith('.docx') || lower.endsWith('.txt') || lower.endsWith('.md') || lower.endsWith('.csv');
      });
      return onlyDocuments ? 'documents' : 'files';
    })();
    var tasks = selectedFiles.map(function (item) {
      return item.file.arrayBuffer().then(function (buffer) {
        return {
          path: item.path,
          data: new Uint8Array(buffer)
        };
      });
    });
    Promise.all(tasks).then(function (entries) {
      var files = {};
      entries.forEach(function (entry) {
        if (entry.path) {
          files[entry.path] = entry.data;
        }
      });
      var restrictions = RestrictionUI.buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      var hasHtmlFiles = selectedFiles.some(function (item) {
        var lower = (item.path || '').toLowerCase();
        return lower.endsWith('.html') || lower.endsWith('.htm');
      });
      var fallbackTitle = resourceTitle
        || normalizeResourceTitle(deriveResourceTitleFromSelection(selectedFiles))
        || normalizeResourceTitle((Zipper.deriveZipBaseName(selectedFiles) || '').replace(/[_-]+/g, ' '));
      if ((forceFolderViewer || !hasHtmlFiles) && fallbackTitle) {
        files['__vwz_meta.json'] = encodeUtf8(JSON.stringify({
          title: fallbackTitle
        }, null, 2));
      }
      if (forceFolderViewer) {
        var allowDownload = isDownloadAllowedByRestrictions(restrictions);
        var folderEntries = mapFolderFileEntries(selectedFiles.map(function (item) {
          return {
            path: item.path,
            size: item && item.file ? item.file.size : 0,
            type: item && item.file ? item.file.type : ''
          };
        }));
        var forceIndexPath = '__vwz_folder_index.html';
        var lowerPaths = Object.keys(files).map(function (path) { return path.toLowerCase(); });
        var suffix = 2;
        while (lowerPaths.indexOf(forceIndexPath.toLowerCase()) !== -1) {
          forceIndexPath = '__vwz_folder_index_' + suffix + '.html';
          suffix += 1;
        }
        files[forceIndexPath] = encodeUtf8(buildFolderIndexHtml(folderEntries, allowDownload, restrictions));
        files['__vwz_viewer.json'] = encodeUtf8(JSON.stringify({
          forceFolderViewer: true,
          preferredIndexPath: forceIndexPath
        }, null, 2));
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var url = URL.createObjectURL(blob);
      var anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
      setLastLinkType(zipName);
      updateLinkSubtitle();
      var createdMessageKey = 'zipper.status.created.' + viewerType;
      UI.setZipStatus(t(createdMessageKey), { highlight: true });
    }).catch(function () {
      UI.setZipStatus(t('zipper.status.failed'));
    });
  }

  function triggerQuickDownload() {
    if (!selectedFiles.length) {
      if (UI.showToast) UI.showToast(t('zipper.status.selectFirst'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      if (UI.showToast) UI.showToast(t('zipper.status.engineMissing'));
      return;
    }
    var singleSelected = selectedFiles.length === 1 ? selectedFiles[0] : null;
    var singlePath = singleSelected ? String(singleSelected.path || (singleSelected.file && singleSelected.file.name) || '') : '';
    var singleIsZipLike = !!singlePath && /\.(zip|elpx|h5p)$/i.test(singlePath);
    if (singleSelected && singleIsZipLike && singleSelected.file) {
      var restrictions = RestrictionUI.buildRestrictionsPayload();
      var resourceTitle = getActiveResourceTitleValue();
      var forceFolderViewer = !!(forceFolderViewerInput && forceFolderViewerInput.checked);
      if (!restrictions && !resourceTitle && !forceFolderViewer) {
        var origUrl = URL.createObjectURL(singleSelected.file);
        var origAnchor = document.createElement('a');
        origAnchor.href = origUrl;
        origAnchor.download = singlePath.split('/').pop() || singlePath;
        document.body.appendChild(origAnchor);
        origAnchor.click();
        document.body.removeChild(origAnchor);
        setTimeout(function () { URL.revokeObjectURL(origUrl); }, 1000);
        setLastLinkType(singlePath || origAnchor.download);
        updateLinkSubtitle();
        if (UI.showToast) UI.showToast(t('zipper.status.downloaded') || t('zipper.status.created.files'));
        return;
      }
    }
    if (UI.showToast) UI.showToast(t('zipper.status.creating'));
    buildZipFromSelection();
  }

  function buildZipFromHtml() {
    var htmlText = htmlZipInput ? htmlZipInput.value.trim() : '';
    if (!htmlText) {
      UI.setHtmlZipStatus(t('zipper.html.status.empty'));
      return;
    }
    if (Zipper.looksLikeReactJsx(htmlText)) {
      UI.setHtmlZipStatus(t('zipper.html.status.reactDetected'));
      openReactPromptModal(htmlText);
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      UI.setHtmlZipStatus(t('zipper.status.engineMissing'));
      UI.setZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = Zipper.normalizeZipName(zipNameInput ? zipNameInput.value : deriveZipNameFromCurrentState());
    var forceFolderViewer = !!(forceFolderViewerInput && forceFolderViewerInput.checked);
    var resourceTitle = getActiveResourceTitleValue();
    UI.setHtmlZipStatus(t('zipper.html.status.creating'));
    UI.setZipStatus(t('zipper.status.creating'));
    try {
      var files = {
        'index.html': encodeUtf8(htmlText)
      };
      var restrictions = RestrictionUI.buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      if (forceFolderViewer) {
        injectForcedFolderViewer(files, restrictions, resourceTitle);
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      URL.revokeObjectURL(anchor.href);
      document.body.removeChild(anchor);
      setLastLinkType(zipName);
      updateLinkSubtitle();
      var createdKey = forceFolderViewer ? 'zipper.status.created.files' : 'zipper.status.created.html';
      UI.setHtmlZipStatus(t(createdKey), { highlight: true });
      UI.setZipStatus(t(createdKey), { highlight: true });
    } catch (err) {
      UI.setHtmlZipStatus(t('zipper.html.status.failed'));
      UI.setZipStatus(t('zipper.status.failed'));
    }
  }

  function downloadZipBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function applyRestrictionsToZipFile(file, options) {
    var opts = options || {};
    if (!file) return;
    if (!window.fflate || !window.fflate.unzipSync || !window.fflate.zipSync) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      if (opts.useMainStatus) {
        UI.setZipStatus(t('zipper.restrict.status.failed'));
      }
      return;
    }
    var restrictions = (typeof opts.explicitRestrictions === 'undefined')
      ? RestrictionUI.buildRestrictionsPayload()
      : opts.explicitRestrictions;
    var explicitTitle = '';
    if (typeof opts.explicitResourceTitle === 'string') {
      explicitTitle = normalizeResourceTitle(opts.explicitResourceTitle);
    } else {
      explicitTitle = getActiveResourceTitleValue();
    }
    if (!restrictions && !opts.forceFolderViewer && !explicitTitle) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      if (opts.useMainStatus) {
        UI.setZipStatus(t('zipper.restrict.status.failed'));
      }
      return;
    }
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = t('zipper.restrict.status.working');
    }
    if (opts.useMainStatus) {
      UI.setZipStatus(t('zipper.restrict.status.working'));
    }
    file.arrayBuffer().then(function (buffer) {
      var entries = window.fflate.unzipSync(new Uint8Array(buffer));
      if (restrictions) {
        entries['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      if (explicitTitle) {
        entries['__vwz_meta.json'] = encodeUtf8(JSON.stringify({ title: explicitTitle }, null, 2));
      }
      if (opts.forceFolderViewer) {
        injectForcedFolderViewer(entries, restrictions, explicitTitle);
      }
      var zipped = window.fflate.zipSync(entries);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var name = file.name || 'site.zip';
      if (/\.h5p$/i.test(name)) {
        name = name.replace(/\.h5p$/i, '-restricciones.h5p');
      } else if (/\.elpx$/i.test(name)) {
        name = name.replace(/\.elpx$/i, '-restricciones.elpx');
      } else if (/\.zip$/i.test(name)) {
        name = name.replace(/\.zip$/i, '-restricciones.zip');
      } else {
        name += '-restricciones.zip';
      }
      downloadZipBlob(blob, name);
      setLastLinkType(name);
      updateLinkSubtitle();
      var doneArchiveType = getSingleArchiveTypeLabel(file && file.name ? file.name : name);
      if (doneArchiveType === 'ZIP/ELPX/H5P') doneArchiveType = 'ZIP';
      var doneStatusKey = (restrictions || opts.forceFolderViewer)
        ? 'zipper.restrict.status.done'
        : 'zipper.restrict.status.saved';
      var doneStatusText = t(doneStatusKey, { type: doneArchiveType });
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = doneStatusText;
      }
      if (opts.useMainStatus) {
        UI.setZipStatus(doneStatusText, { highlight: true });
      }
    }).catch(function () {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      if (opts.useMainStatus) {
        UI.setZipStatus(t('zipper.restrict.status.failed'));
      }
    });
  }
















  function updateShareRestrictionSummary(restrictions) {
    if (!shareRestrictSummary || !shareRestrictItems) return;
    shareRestrictItems.innerHTML = '';
    if (!restrictions || !restrictions.enabled) {
      shareRestrictSummary.setAttribute('hidden', '');
      return;
    }
    var startLabel = restrictions.startAt ? Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) : '';
    var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) : '';
    if (!startLabel && !endLabel) {
      shareRestrictSummary.setAttribute('hidden', '');
      return;
    }
    if (startLabel) {
      var startBadge = document.createElement('span');
      startBadge.className = 'manager-badge manager-badge--start';
      startBadge.textContent = t('badges.opening', { date: startLabel });
      shareRestrictItems.appendChild(startBadge);
    }
    if (endLabel) {
      var endBadge = document.createElement('span');
      endBadge.className = 'manager-badge manager-badge--end';
      endBadge.textContent = t('badges.closing', { date: endLabel });
      shareRestrictItems.appendChild(endBadge);
    }
    shareRestrictSummary.removeAttribute('hidden');
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return Promise.reject(new Error(t('error.serviceWorkerUnavailable')));
    }
    return navigator.serviceWorker.register('sw.js', { scope: './' }).then(function (registration) {
      try {
        if (registration && registration.update) {
          registration.update();
        }
      } catch (e) {}
      return navigator.serviceWorker.ready;
    });
  }

  function waitForServiceWorkerControl() {
    if (!('serviceWorker' in navigator)) {
      return Promise.resolve();
    }
    if (navigator.serviceWorker.controller) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var resolved = false;
      var finish = function () {
        if (resolved) return;
        resolved = true;
        navigator.serviceWorker.removeEventListener('controllerchange', onChange);
        resolve();
      };
      var onChange = function () {
        if (navigator.serviceWorker.controller) {
          finish();
        }
      };
      navigator.serviceWorker.addEventListener('controllerchange', onChange);
      setTimeout(finish, 5000);
    });
  }











  function normalizePath(path) {
    return path.replace(/\\/g, '/').replace(/^\.?\//, '');
  }

  function guessMimeType(path) {
    var lower = path.toLowerCase();
    if (lower.endsWith('.html') || lower.endsWith('.htm')) return 'text/html';
    if (lower.endsWith('.txt')) return 'text/plain';
    if (lower.endsWith('.md')) return 'text/plain';
    if (lower.endsWith('.csv')) return 'text/csv';
    if (lower.endsWith('.pdf')) return 'application/pdf';
    if (lower.endsWith('.zip') || lower.endsWith('.elpx') || lower.endsWith('.h5p')) return 'application/zip';
    if (lower.endsWith('.css')) return 'text/css';
    if (lower.endsWith('.js')) return 'text/javascript';
    if (lower.endsWith('.json')) return 'application/json';
    if (lower.endsWith('.svg')) return 'image/svg+xml';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    if (lower.endsWith('.gif')) return 'image/gif';
    if (lower.endsWith('.webp')) return 'image/webp';
    if (lower.endsWith('.woff')) return 'font/woff';
    if (lower.endsWith('.woff2')) return 'font/woff2';
    if (lower.endsWith('.ttf')) return 'font/ttf';
    if (lower.endsWith('.otf')) return 'font/otf';
    if (lower.endsWith('.ico')) return 'image/x-icon';
    if (lower.endsWith('.mp3')) return 'audio/mpeg';
    if (lower.endsWith('.mp4')) return 'video/mp4';
    if (lower.endsWith('.webm')) return 'video/webm';
    return 'application/octet-stream';
  }

  function extractDriveId(url) {
    var match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    match = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    match = url.match(/drive\.google\.com\/uc\?(?:[^#]*[?&])?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  }

  function normalizeGithubBlobUrl(url) {
    // Convert GitHub "blob" URLs to raw URLs so the backend fetches the ZIP bytes, not HTML.
    // Example:
    // https://github.com/u/r/blob/main/file.zip -> https://raw.githubusercontent.com/u/r/main/file.zip
    var parsed;
    try {
      parsed = new URL(url);
    } catch (e) {
      return url;
    }
    var host = (parsed.hostname || '').toLowerCase();
    if (host === 'raw.githubusercontent.com') return url;
    if (host !== 'github.com' && host !== 'www.github.com') return url;

    var path = parsed.pathname || '';
    var parts = path.split('/').filter(Boolean);
    // /{user}/{repo}/blob/{ref}/{path...}
    if (parts.length < 5) return url;
    if (parts[2] !== 'blob') return url;

    var user = parts[0];
    var repo = parts[1];
    var ref = parts[3];
    var filePath = parts.slice(4).join('/');
    if (!user || !repo || !ref || !filePath) return url;
    return 'https://raw.githubusercontent.com/' + user + '/' + repo + '/' + ref + '/' + filePath;
  }

  function normalizeZipUrl(url) {
    url = normalizeGithubBlobUrl(url);
    var driveId = extractDriveId(url);
    if (driveId) {
      return 'https://drive.google.com/uc?export=download&id=' + driveId;
    }
    if (url.indexOf('dropbox.com') !== -1) {
      return url.replace(/([?&])dl=0\b/, '$1dl=1');
    }
    var isNextcloud = false;
    var host = '';
    var path = '';
    var isBox = false;
    try {
      var parsed = new URL(url);
      host = parsed.hostname || '';
      path = parsed.pathname || '';
      host = host.toLowerCase();
      isBox = host === 'box.com' || host === 'app.box.com' || /(^|\.)box\.com$/.test(host);
    } catch (e) {
      // Ignore invalid URLs; fall back to simple checks.
      path = url;
      isBox = /https?:\/\/(?:app\.)?box\.com\//i.test(url);
    }
    var looksLikeNextcloud = path.indexOf('/s/') !== -1 && !isBox && host.indexOf('drive.google.com') === -1;
    if (isNextcloud || looksLikeNextcloud) {
      if (url.indexOf('/download') === -1 && url.indexOf('download=1') === -1) {
        var parts = url.split('#');
        var baseAndQuery = parts[0];
        var hash = parts.length > 1 ? '#' + parts.slice(1).join('#') : '';
        var queryIndex = baseAndQuery.indexOf('?');
        var base = queryIndex === -1 ? baseAndQuery : baseAndQuery.slice(0, queryIndex);
        var query = queryIndex === -1 ? '' : baseAndQuery.slice(queryIndex);
        base = base.replace(/\/$/, '') + '/download';
        return base + query + hash;
      }
    }
    return url;
  }

  function sha1Hex(value) {
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      return Promise.reject(new Error(t('error.sha1Unavailable')));
    }
    var data = new TextEncoder().encode(value);
    return window.crypto.subtle.digest('SHA-1', data).then(function (hash) {
      var bytes = Array.from(new Uint8Array(hash));
      return bytes.map(function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function computeSiteId(zipUrl) {
    return sha1Hex(normalizeZipUrl(zipUrl));
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    var units = (I18N[currentLang] && I18N[currentLang].units) ? I18N[currentLang].units : I18N.es.units;
    var idx = 0;
    var value = bytes;
    while (value >= 1024 && idx < units.length - 1) {
      value /= 1024;
      idx += 1;
    }
    return value.toFixed(value >= 10 || idx === 0 ? 0 : 1) + ' ' + units[idx];
  }

  function sumSiteBytes(sites) {
    return sites.reduce(function (sum, site) {
      return sum + (site.totalBytes || 0);
    }, 0);
  }



  function chooseOldestSites(sites, targetBytes) {
    var sorted = sites.slice().sort(function (a, b) {
      return (a.updatedAt || 0) - (b.updatedAt || 0);
    });
    var total = sumSiteBytes(sorted);
    var toDelete = [];
    for (var i = 0; i < sorted.length && total > targetBytes; i += 1) {
      var site = sorted[i];
      total -= site.totalBytes || 0;
      toDelete.push(site.id);
    }
    return toDelete;
  }

  function ensureStorageCapacity(extraBytes) {
    return Promise.all([Storage.getAllSites(), Storage.estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var quota = estimate && estimate.quota ? estimate.quota : 0;
      var usage = estimate && estimate.usage ? estimate.usage : sumSiteBytes(sites);
      if (!quota) {
        return true;
      }
      var projected = usage + (extraBytes || 0);
      var limit = quota * (getCleanupThreshold() / 100);
      if (projected < limit) {
        return true;
      }
      var target = Math.max(0, limit - (extraBytes || 0));
      var toDelete = chooseOldestSites(sites, target);
      if (!toDelete.length) return false;
      return Storage.deleteSitesSequential(toDelete).then(function () {
        return ensureStorageCapacity(extraBytes);
      });
    });
  }





  function closeActiveTitleEdit() {
    if (!activeTitleEdit) return;
    var input = activeTitleEdit.input;
    var titleEl = activeTitleEdit.titleEl;
    if (input && input.parentNode) {
      input.parentNode.replaceChild(titleEl, input);
    }
    activeTitleEdit = null;
  }

  function startTitleEdit(siteId, titleEl) {
    if (!siteId || !titleEl) return;
    if (activeTitleEdit && activeTitleEdit.siteId === siteId) return;
    closeActiveTitleEdit();
    var currentText = titleEl.textContent || '';
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'manager-item__title-edit';
    input.value = currentText;
    titleEl.parentNode.replaceChild(input, titleEl);
    input.focus();
    input.select();
    activeTitleEdit = { siteId: siteId, input: input, titleEl: titleEl };

    var save = function () {
      var value = input.value.trim().replace(/\s+/g, ' ');
      Storage.getSite(siteId).then(function (site) {
        if (!site) return;
        site.title = value;
        return Storage.saveSite(site).then(function () {
          notifySitesChanged();
          Manager.refreshManager();
        });
      }).finally(function () {
        closeActiveTitleEdit();
      });
    };

    input.addEventListener('blur', function () {
      save();
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        save();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeActiveTitleEdit();
      }
    });
  }



  function buildShareLink(zipUrl, fullView, entryPath) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl);
    if (fullView) {
      base += '&view=full';
    }
    if (entryPath) {
      base += '&entry=' + encodeURIComponent(entryPath);
    }
    return base;
  }

  var shortLinkCache = {};
  var shortResolveCache = {};

  function buildShortShareLink(token, fullView, entryPath) {
    var base = appBase() + '?key=' + encodeURIComponent(token);
    if (fullView) {
      base += '&view=full';
    }
    if (entryPath) {
      base += '&entry=' + encodeURIComponent(entryPath);
    }
    return base;
  }

  function createShortToken(zipUrl) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error(t('error.configMissing')));
    }
    if (shortLinkCache[zipUrl]) {
      return Promise.resolve(shortLinkCache[zipUrl]);
    }
    var endpoint = GAS_WEBAPP_URL + '?short=1&format=json&url=' + encodeURIComponent(zipUrl);
    return fetch(endpoint, { method: 'GET' })
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        if (!data || !data.token) {
          throw new Error(t('error.loadZip'));
        }
        shortLinkCache[zipUrl] = data.token;
        return data.token;
      });
  }

  function resolveShortToken(token) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error(t('error.configMissing')));
    }
    if (shortResolveCache[token]) {
      return Promise.resolve(shortResolveCache[token]);
    }
    var endpoint = GAS_WEBAPP_URL + '?short=' + encodeURIComponent(token) + '&format=json';
    return fetch(endpoint, { method: 'GET' })
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        if (!data || !data.url) {
          throw new Error(t('error.loadZip'));
        }
        shortResolveCache[token] = data.url;
        return data.url;
      });
  }

  function buildShareLinkAsync(zipUrl, fullView, entryPath) {
    if (!zipUrl) return Promise.resolve('');
    return createShortToken(zipUrl)
      .then(function (token) {
        return buildShortShareLink(token, fullView, entryPath);
      })
      .catch(function () {
        return buildShareLink(zipUrl, fullView, entryPath);
      });
  }

  function refreshShareLink(zipUrl, entryPath) {
    return buildShareLinkAsync(zipUrl, true, entryPath).then(function (shareLink) {
      Share.setShareLink(shareLink);
      return shareLink;
    });
  }

  function createEmbedId() {
    return 'vwz-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function buildEmbedLink(zipUrl, embedId, entryPath) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl) + '&embed=1';
    if (embedId) {
      base += '&embedId=' + encodeURIComponent(embedId);
    }
    if (entryPath) {
      base += '&entry=' + encodeURIComponent(entryPath);
    }
    return base;
  }

  function buildEmbedSnippet(zipUrl, entryPath) {
    var embedId = createEmbedId();
    var iframeId = 'visor-webzip-' + embedId;
    var src = buildEmbedLink(zipUrl, embedId, entryPath);
    var origin = window.location.origin;
    return '<iframe id="' + iframeId + '" src="' + src + '" style="width:100%;height:80vh;border:0" loading="lazy" allow="fullscreen"></iframe>\n'
      + '<script>\n'
      + '(function(){\n'
      + '  var iframe=document.getElementById(' + JSON.stringify(iframeId) + ');\n'
      + '  if(!iframe) return;\n'
      + '  window.addEventListener(\"message\", function(event){\n'
      + '    if(event.origin!==' + JSON.stringify(origin) + ') return;\n'
      + '    var data=event.data||{};\n'
      + '    if(data.type!==\"visor-webzip:height\") return;\n'
      + '    if(data.embedId!==' + JSON.stringify(embedId) + ') return;\n'
      + '    var height=Number(data.height)||0;\n'
      + '    if(height>0) iframe.style.height=height+\"px\";\n'
      + '  }, false);\n'
      + '})();\n'
      + '</script>';
  }

  function buildSiteUrl(siteId, indexPath) {
    var base = appBase() + 'site/' + siteId + '/';
    if (indexPath) {
      return base + encodeURI(indexPath);
    }
    return base;
  }

  function closeEmbedModal() {
    if (!embedModal) return;
    embedModal.setAttribute('hidden', '');
  }

  function openEmbedModalForZip(zipUrl) {
    if (!embedModal || !embedCode || !zipUrl) return;
    embedCode.value = buildEmbedSnippet(zipUrl, currentIndexPath);
    embedModal.removeAttribute('hidden');
    try {
      embedCode.focus();
      embedCode.select();
    } catch (e) {
      // ignore
    }
  }

  function closeManagerSettingsModal() {
    if (!managerSettingsModal) return;
    managerSettingsModal.setAttribute('hidden', '');
  }

  function openManagerSettingsModal() {
    if (!managerSettingsModal) return;
    managerSettingsModal.removeAttribute('hidden');
    try {
      if (cleanupThresholdInput) {
        cleanupThresholdInput.focus();
      }
    } catch (e) {
      // ignore
    }
  }

  function closeMainSettingsModal() {
    if (!mainSettingsModal) return;
    mainSettingsModal.setAttribute('hidden', '');
  }

  function openMainSettingsModal() {
    if (!mainSettingsModal) return;
    mainSettingsModal.removeAttribute('hidden');
  }

  function closeReactPromptModal() {
    if (!reactModal) return;
    reactModal.setAttribute('hidden', '');
  }

  function openReactPromptModal(code) {
    if (!reactModal || !reactPrompt) return;
    var basePrompt = t('reactPrompt.prompt');
    var fullPrompt = basePrompt;
    if (code) {
      fullPrompt += '\n\n' + String(code);
    }
    reactPrompt.value = fullPrompt;
    reactModal.removeAttribute('hidden');
    try {
      reactPrompt.focus();
      reactPrompt.select();
    } catch (e) {
      // ignore
    }
  }

  function setEmbedMode(enabled, embedId) {
    isEmbedMode = !!enabled;
    currentEmbedId = embedId || '';
    if (!isEmbedMode) {
      stopEmbedHeightTracking();
    }
    if (mainContent) {
      if (isEmbedMode) {
        mainContent.setAttribute('hidden', '');
      } else {
        mainContent.removeAttribute('hidden');
      }
    }
    if (embedShell) {
      if (isEmbedMode) {
        embedShell.removeAttribute('hidden');
      } else {
        embedShell.setAttribute('hidden', '');
      }
    }
  }

  function postToParent(message) {
    if (!isEmbedMode) return;
    if (!currentEmbedId) return;
    if (!window.parent || window.parent === window) return;
    try {
      window.parent.postMessage(message, '*');
    } catch (e) {
      // ignore
    }
  }

  function sendEmbedHeight(height) {
    postToParent({
      type: 'visor-webzip:height',
      embedId: currentEmbedId,
      height: height,
      url: window.location.href
    });
  }

  function sendEmbedReady(siteUrl) {
    postToParent({
      type: 'visor-webzip:ready',
      embedId: currentEmbedId,
      siteUrl: siteUrl || '',
      url: window.location.href
    });
  }

  function sendEmbedError(message) {
    postToParent({
      type: 'visor-webzip:error',
      embedId: currentEmbedId,
      message: message || '',
      url: window.location.href
    });
  }

  function stopEmbedHeightTracking() {
    if (embedHeightTimer) {
      clearInterval(embedHeightTimer);
      embedHeightTimer = null;
    }
  }

  function getEmbedContentHeight() {
    if (!embedFrame) return 0;
    try {
      var doc = embedFrame.contentDocument;
      if (!doc) return 0;
      var body = doc.body;
      var html = doc.documentElement;
      var height = Math.max(
        body ? body.scrollHeight : 0,
        html ? html.scrollHeight : 0,
        body ? body.offsetHeight : 0,
        html ? html.offsetHeight : 0
      );
      return height || 0;
    } catch (e) {
      return 0;
    }
  }

  function startEmbedHeightTracking() {
    if (!isEmbedMode) return;
    stopEmbedHeightTracking();
    lastEmbedHeight = 0;
    embedHeightTimer = setInterval(function () {
      var height = getEmbedContentHeight();
      if (!height) return;
      if (Math.abs(height - lastEmbedHeight) < 2) return;
      lastEmbedHeight = height;
      sendEmbedHeight(height);
    }, 450);
  }

  function showEmbedFallback(zipUrl, message) {
    if (embedFallback) {
      embedFallback.removeAttribute('hidden');
    }
    if (embedOpenFallback) {
      embedOpenFallback.href = buildShareLink(zipUrl, true, currentIndexPath);
    }
    if (message) {
      sendEmbedError(message);
    }
    UI.stopProgress();
    UI.setLoading(false);
  }

  function openEmbedSite(siteUrl) {
    if (!embedFrame) return;
    if (embedFallback) {
      embedFallback.setAttribute('hidden', '');
    }
    UI.setLoading(true);
    embedFrame.onload = function () {
      UI.setLoading(false);
      sendEmbedReady(siteUrl);
      startEmbedHeightTracking();
      setTimeout(function () {
        var height = getEmbedContentHeight();
        if (height) {
          lastEmbedHeight = height;
          sendEmbedHeight(height);
        }
      }, 60);
    };
    embedFrame.src = siteUrl;
  }

  function base64ToBytes(base64) {
    var binary = atob(base64);
    var len = binary.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function normalizeMetaSignature(meta) {
    if (!meta) return null;
    var signature = {};
    if (meta.size) signature.size = meta.size;
    if (meta.etag) signature.etag = meta.etag;
    if (meta.lastModified) signature.lastModified = meta.lastModified;
    if (meta.sampleHash) signature.sampleHash = meta.sampleHash;
    return Object.keys(signature).length ? signature : null;
  }

  function mergeMetaSignature(stored, remote) {
    var signature = {};
    if (stored) {
      if (stored.size) signature.size = stored.size;
      if (stored.etag) signature.etag = stored.etag;
      if (stored.lastModified) signature.lastModified = stored.lastModified;
      if (stored.sampleHash) signature.sampleHash = stored.sampleHash;
    }
    if (remote) {
      if (remote.size) signature.size = remote.size;
      if (remote.etag) signature.etag = remote.etag;
      if (remote.lastModified) signature.lastModified = remote.lastModified;
      if (remote.sampleHash) signature.sampleHash = remote.sampleHash;
    }
    return Object.keys(signature).length ? signature : null;
  }

  function metaEqual(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (a.size || null) === (b.size || null)
      && (a.etag || '') === (b.etag || '')
      && (a.lastModified || '') === (b.lastModified || '')
      && (a.sampleHash || '') === (b.sampleHash || '');
  }

  function isMetaChanged(stored, remote) {
    if (!stored || !remote) return false;
    var comparable = false;
    if (stored.etag && remote.etag) {
      comparable = true;
      if (stored.etag !== remote.etag) return true;
    }
    if (stored.lastModified && remote.lastModified) {
      comparable = true;
      if (stored.lastModified !== remote.lastModified) return true;
    }
    if (stored.size && remote.size) {
      comparable = true;
      if (stored.size !== remote.size) return true;
    }
    if (stored.sampleHash && remote.sampleHash) {
      comparable = true;
      if (stored.sampleHash !== remote.sampleHash) return true;
    }
    return comparable ? false : false;
  }

  function fetchRemoteMetaSignature(zipUrl) {
    if (!Downloads || !Downloads.fetchZipBundleMeta || !Downloads.hasGas || !Downloads.hasGas()) {
      return Promise.resolve(null);
    }
    return Downloads.fetchZipBundleMeta(zipUrl).then(function (meta) {
      return normalizeMetaSignature(meta);
    }).catch(function () {
      return null;
    });
  }

  function showUpdateBanner(zipUrl, indexPath) {
    if (!updateBanner) return;
    updateBanner.removeAttribute('hidden');
    if (updateActionButton) {
      updateActionButton.setAttribute('data-zip-url', zipUrl || '');
      updateActionButton.setAttribute('data-index-path', indexPath || '');
    }
  }

  function hideUpdateBanner() {
    if (!updateBanner) return;
    updateBanner.setAttribute('hidden', '');
    if (updateActionButton) {
      updateActionButton.removeAttribute('data-zip-url');
      updateActionButton.removeAttribute('data-index-path');
    }
  }

  function checkForRemoteUpdate(site, options) {
    if (!site || !site.url) return Promise.resolve();
    var opts = options || {};
    return fetchRemoteMetaSignature(site.url).then(function (remoteSignature) {
      if (!remoteSignature) return;
      var storedSignature = site.remoteMeta || null;
      var changed = storedSignature ? isMetaChanged(storedSignature, remoteSignature) : false;
      var nextUpdateAvailable = !!changed;

      // IMPORTANT:
      // Keep `remoteMeta` as the local baseline while an update is pending.
      // If we overwrite it with remote values here, the next check would think
      // there is no change and the update badge/banner would disappear.
      var nextSignature = changed ? storedSignature : mergeMetaSignature(storedSignature, remoteSignature);
      var needsSave = !metaEqual(storedSignature, nextSignature) || site.updateAvailable !== nextUpdateAvailable;
      if (!needsSave) {
        if (changed && opts.showBanner) {
          showUpdateBanner(opts.zipUrl || site.url, opts.indexPath || site.indexPath || '');
        }
        return changed;
      }
      site.remoteMeta = nextSignature;
      site.updateAvailable = nextUpdateAvailable;
      return Storage.saveSite(site).then(function () {
        notifySitesChanged();
        if (changed && opts.showBanner) {
          showUpdateBanner(opts.zipUrl || site.url, opts.indexPath || site.indexPath || '');
        }
        if (changed && Manager && Manager.refreshManager) {
          Manager.refreshManager();
        }
        return changed;
      });
    });
  }

  function openUpdateCheckModal() {
    if (!updateCheckModal) return;
    updateCheckModal.removeAttribute('hidden');
  }

  function closeUpdateCheckModal() {
    if (!updateCheckModal) return;
    updateCheckModal.setAttribute('hidden', '');
  }

  function closePrivacyPopover() {
    if (!privacyPopover) return;
    privacyPopover.setAttribute('hidden', '');
    if (privacyOpen) {
      privacyOpen.setAttribute('aria-expanded', 'false');
    }
  }

  function openPrivacyPopover() {
    if (!privacyPopover) return;
    privacyPopover.removeAttribute('hidden');
    if (privacyOpen) {
      privacyOpen.setAttribute('aria-expanded', 'true');
    }
  }

  function setUpdateCheckStatus(text) {
    if (updateCheckStatus) {
      updateCheckStatus.textContent = text;
    }
  }

  function setUpdateCheckNote(text) {
    if (updateCheckNote) {
      updateCheckNote.textContent = text;
    }
  }

  function setUpdateCheckProgress(done, total) {
    if (updateCheckProgress) {
      updateCheckProgress.textContent = t('manager.checkUpdatesProgress', { done: done, total: total });
    }
    if (updateCheckBar) {
      var pct = total ? Math.round((done / total) * 100) : 0;
      updateCheckBar.style.width = pct + '%';
    }
    if (updateCheckBarWrap) {
      if (total > 0) {
        updateCheckBarWrap.removeAttribute('hidden');
      } else {
        updateCheckBarWrap.setAttribute('hidden', '');
      }
    }
  }

  function checkUpdatesForAllSites() {
    var total = 0;
    var checked = 0;
    var changedIds = [];
    var skipSummary = false;
    openUpdateCheckModal();
    if (!Downloads || !Downloads.fetchZipBundleMeta || !Downloads.hasGas || !Downloads.hasGas()) {
      setUpdateCheckStatus(t('manager.checkUpdatesUnavailable'));
      setUpdateCheckNote(t('manager.checkUpdatesNote'));
      setUpdateCheckProgress(0, 0);
      if (UI.showInlineToast && managerCheckUpdatesButton) {
        UI.showInlineToast(managerCheckUpdatesButton, t('manager.checkUpdatesUnavailable'));
      }
      if (UI.showToast) {
        UI.showToast(t('manager.checkUpdatesUnavailable'));
      }
      return;
    }
    if (managerCheckUpdatesButton) {
      managerCheckUpdatesButton.disabled = true;
    }
    setUpdateCheckStatus(t('manager.checkingUpdates'));
    setUpdateCheckNote(t('manager.checkUpdatesNote'));
    Storage.getAllSites().then(function (sites) {
      total = sites.length;
      checked = 0;
      changedIds = [];
      setUpdateCheckProgress(0, total);
      if (!total) {
        setUpdateCheckStatus(t('manager.checkUpdatesNone'));
        skipSummary = true;
        return Manager.refreshManager();
      }
      return sites.reduce(function (promise, site) {
        return promise.then(function () {
          return checkForRemoteUpdate(site, { showBanner: false }).then(function (changed) {
            checked += 1;
            if (changed) changedIds.push(site.id);
            setUpdateCheckProgress(checked, total);
          });
        });
      }, Promise.resolve());
    }).then(function () {
      if (skipSummary) return;
      return Manager.refreshManager().then(function () {
        if (changedIds.length && Manager.highlightSites) {
          Manager.highlightSites(changedIds);
        }
        var summary = t('manager.checkUpdatesDoneSummary', { changed: changedIds.length, total: total });
        setUpdateCheckStatus(summary);
        if (UI.showInlineToast && managerCheckUpdatesButton) {
          UI.showInlineToast(managerCheckUpdatesButton, summary);
        }
        if (UI.showToast) {
          UI.showToast(summary);
        }
      });
    }).catch(function () {
      var doneMsg = t('manager.checkUpdatesDone');
      setUpdateCheckStatus(doneMsg);
      if (UI.showInlineToast && managerCheckUpdatesButton) {
        UI.showInlineToast(managerCheckUpdatesButton, doneMsg);
      }
      if (UI.showToast) {
        UI.showToast(doneMsg);
      }
    }).finally(function () {
      if (managerCheckUpdatesButton) {
        managerCheckUpdatesButton.disabled = false;
      }
    });
  }








  function fetchZipBundle(zipUrl) {
    if (!window.Downloads) {
      throw new Error('Download helper missing');
    }
    if (Downloads.init) {
      Downloads.init({ ui: UI, gasUrl: GAS_WEBAPP_URL, t: t, base64ToBytes: base64ToBytes });
    }
    if (Downloads.fetchZipBundle) {
      return Downloads.fetchZipBundle(zipUrl);
    }
    if (Downloads.fetchZipBundleChunked) {
      return Downloads.fetchZipBundleChunked(zipUrl);
    }
    throw new Error('Download helper missing');
  }

  function findIndexPath(paths) {
    var lower = paths.map(function (path) { return path.toLowerCase(); });
    var normalizedPaths = paths.map(function (path) { return normalizePath(path || ''); });
    if (findScormManifestPath(normalizedPaths)) {
      var scormIdx = lower.findIndex(function (p) {
        return /(^|\/)index_lms\.html?$/.test(p)
          || /(^|\/)indexapi\.html?$/.test(p)
          || /(^|\/)index_scorm\.html?$/.test(p);
      });
      if (scormIdx !== -1) return paths[scormIdx];
    }
    var idx = lower.findIndex(function (p) {
      return p === 'index.html' || p.endsWith('/index.html');
    });
    if (idx !== -1) return paths[idx];
    idx = lower.findIndex(function (p) {
      return p === 'index.htm' || p.endsWith('/index.htm');
    });
    if (idx !== -1) return paths[idx];
    var htmlIndex = lower.findIndex(function (p) { return p.endsWith('.html') || p.endsWith('.htm'); });
    if (htmlIndex !== -1) return paths[htmlIndex];
    return paths[0] || '';
  }

  function findScormManifestPath(paths) {
    var normalized = (paths || []).map(function (path) {
      return normalizePath(path || '');
    }).filter(function (path) {
      return !!path;
    });
    var matches = normalized.filter(function (path) {
      var lower = path.toLowerCase();
      return lower === 'imsmanifest.xml' || lower.endsWith('/imsmanifest.xml');
    });
    if (!matches.length) return '';
    matches.sort(function (a, b) {
      var aRoot = a.toLowerCase() === 'imsmanifest.xml' ? 0 : 1;
      var bRoot = b.toLowerCase() === 'imsmanifest.xml' ? 0 : 1;
      if (aRoot !== bRoot) return aRoot - bRoot;
      var aDepth = a.split('/').length;
      var bDepth = b.split('/').length;
      if (aDepth !== bDepth) return aDepth - bDepth;
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
    return matches[0];
  }

  function normalizeScormHref(href) {
    var value = String(href || '').trim();
    if (!value) return '';
    if (/^[a-z][a-z0-9+.-]*:/i.test(value) || value.indexOf('//') === 0) {
      return '';
    }
    return value.replace(/\\/g, '/').replace(/[#?].*$/, '').trim();
  }

  function resolveRelativePath(baseDir, relativePath) {
    var clean = normalizeScormHref(relativePath);
    if (!clean) return '';
    var stack = [];
    var startsAtRoot = clean.charAt(0) === '/';
    if (!startsAtRoot) {
      String(baseDir || '').split('/').forEach(function (part) {
        if (!part || part === '.') return;
        if (part === '..') {
          if (stack.length) stack.pop();
          return;
        }
        stack.push(part);
      });
    }
    clean.split('/').forEach(function (part) {
      if (!part || part === '.') return;
      if (part === '..') {
        if (stack.length) stack.pop();
        return;
      }
      stack.push(part);
    });
    return normalizePath(stack.join('/'));
  }

  function xmlNodeMatchesName(node, expectedName) {
    var raw = String((node && (node.localName || node.nodeName)) || '').toLowerCase();
    if (!raw) return false;
    if (raw === expectedName) return true;
    var tail = raw.split(':').pop();
    return tail === expectedName;
  }

  function getXmlElementsByName(root, expectedName) {
    if (!root || !root.getElementsByTagName) return [];
    var nodes = root.getElementsByTagName('*');
    var out = [];
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      if (xmlNodeMatchesName(node, expectedName)) {
        out.push(node);
      }
    }
    return out;
  }

  function getXmlAttributeValue(node, expectedName) {
    if (!node || !node.attributes) return '';
    var direct = node.getAttribute && node.getAttribute(expectedName);
    if (direct) return String(direct);
    var expected = String(expectedName || '').toLowerCase();
    for (var i = 0; i < node.attributes.length; i += 1) {
      var attr = node.attributes[i];
      var raw = String((attr && attr.name) || '').toLowerCase();
      if (!raw) continue;
      if (raw === expected || raw.split(':').pop() === expected) {
        return String((attr && attr.value) || '');
      }
    }
    return '';
  }

  function getScormResourceLaunchHref(resourceNode, resolveLaunchPath) {
    if (!resourceNode || !resolveLaunchPath) return '';
    var directHref = resolveLaunchPath(getXmlAttributeValue(resourceNode, 'href'));
    if (directHref) return directHref;
    var fileNodes = getXmlElementsByName(resourceNode, 'file');
    for (var i = 0; i < fileNodes.length; i += 1) {
      var fileHref = resolveLaunchPath(getXmlAttributeValue(fileNodes[i], 'href'));
      if (fileHref) return fileHref;
    }
    return '';
  }

  function getFirstScormItemResourceId(orgNode) {
    if (!orgNode) return '';
    var queue = [];
    var startNodes = orgNode.children && orgNode.children.length ? orgNode.children : orgNode.childNodes;
    Array.prototype.forEach.call(startNodes || [], function (node) {
      if (node && node.nodeType === 1) {
        queue.push(node);
      }
    });
    while (queue.length) {
      var current = queue.shift();
      if (xmlNodeMatchesName(current, 'item')) {
        var ref = current.getAttribute && current.getAttribute('identifierref');
        if (ref) return ref;
      }
      var children = current.children && current.children.length ? current.children : current.childNodes;
      Array.prototype.forEach.call(children || [], function (child) {
        if (child && child.nodeType === 1) {
          queue.push(child);
        }
      });
    }
    return '';
  }

  function getFirstXmlChildByName(node, expectedName) {
    if (!node) return null;
    var children = node.children && node.children.length ? node.children : node.childNodes;
    for (var i = 0; i < (children || []).length; i += 1) {
      var child = children[i];
      if (child && child.nodeType === 1 && xmlNodeMatchesName(child, expectedName)) {
        return child;
      }
    }
    return null;
  }

  function extractScormItemTitle(itemNode) {
    var titleNode = getFirstXmlChildByName(itemNode, 'title');
    if (!titleNode) return '';
    return String(titleNode.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function isClassicScormLauncherPath(path) {
    var lower = String(path || '').toLowerCase();
    return /(^|\/)index_lms\.html?$/.test(lower)
      || /(^|\/)indexapi\.html?$/.test(lower)
      || /(^|\/)index_scorm\.html?$/.test(lower);
  }

  function parseScormManifestInfo(manifestText, manifestPath, paths) {
    if (!manifestText || !manifestPath || !paths || !paths.length) return null;
    if (!window.DOMParser) return null;
    var parser = new window.DOMParser();
    var xmlDoc;
    try {
      xmlDoc = parser.parseFromString(manifestText, 'application/xml');
    } catch (e) {
      return null;
    }
    if (!xmlDoc || !xmlDoc.documentElement || xmlDoc.getElementsByTagName('parsererror').length) {
      return null;
    }

    var htmlLookup = {};
    (paths || []).forEach(function (path) {
      var normalized = normalizePath(path || '');
      if (!normalized) return;
      var lower = normalized.toLowerCase();
      if (!lower.endsWith('.html') && !lower.endsWith('.htm')) return;
      if (!htmlLookup[lower]) {
        htmlLookup[lower] = normalized;
      }
    });

    var manifestDir = '';
    var slashIdx = manifestPath.lastIndexOf('/');
    if (slashIdx !== -1) {
      manifestDir = manifestPath.slice(0, slashIdx + 1);
    }
    var manifestDirLower = manifestDir.toLowerCase();

    function resolveLaunchPath(href) {
      var attempts = [href];
      try {
        attempts.push(decodeURIComponent(String(href || '')));
      } catch (e) {
        // Ignore malformed escape sequences.
      }
      for (var i = 0; i < attempts.length; i += 1) {
        var resolved = resolveRelativePath(manifestDir, attempts[i]);
        if (!resolved) continue;
        var lower = resolved.toLowerCase();
        if (!lower.endsWith('.html') && !lower.endsWith('.htm')) continue;
        if (htmlLookup[lower]) {
          return htmlLookup[lower];
        }
      }
      return '';
    }

    function choosePreferredPath(candidates) {
      if (!candidates || !candidates.length) return '';
      var seen = {};
      var list = candidates.filter(function (value) {
        var path = String(value || '');
        if (!path || seen[path]) return false;
        seen[path] = true;
        return true;
      });
      if (!list.length) return '';
      list.sort(function (a, b) {
        var aLower = a.toLowerCase();
        var bLower = b.toLowerCase();
        var aInManifestDir = !!manifestDirLower && aLower.indexOf(manifestDirLower) === 0;
        var bInManifestDir = !!manifestDirLower && bLower.indexOf(manifestDirLower) === 0;
        if (aInManifestDir !== bInManifestDir) return aInManifestDir ? -1 : 1;
        var aDepth = a.split('/').length;
        var bDepth = b.split('/').length;
        if (aDepth !== bDepth) return aDepth - bDepth;
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });
      return list[0];
    }

    var resourceNodes = getXmlElementsByName(xmlDoc, 'resource');
    var resourcesById = {};
    var scoResourcesById = {};
    var resourceFallbacks = [];
    var scoFallbacks = [];
    resourceNodes.forEach(function (node) {
      if (!node) return;
      var identifier = String(getXmlAttributeValue(node, 'identifier') || '').trim();
      var href = getScormResourceLaunchHref(node, resolveLaunchPath);
      var scormType = String(getXmlAttributeValue(node, 'scormtype') || '').toLowerCase();
      if (identifier && href) {
        resourcesById[identifier] = href;
        if (scormType === 'sco') {
          scoResourcesById[identifier] = href;
        }
      }
      if (href) {
        resourceFallbacks.push(href);
        if (scormType === 'sco') {
          scoFallbacks.push(href);
        }
      }
    });

    var organizationsNode = getXmlElementsByName(xmlDoc, 'organizations')[0] || null;
    var preferredResourceId = '';
    var items = [];
    if (organizationsNode) {
      var defaultOrgId = String(getXmlAttributeValue(organizationsNode, 'default') || '').trim();
      var organizationNodes = getXmlElementsByName(organizationsNode, 'organization');
      var defaultOrg = null;
      if (defaultOrgId) {
        defaultOrg = organizationNodes.find(function (org) {
          return String(getXmlAttributeValue(org, 'identifier') || '').trim() === defaultOrgId;
        }) || null;
      }
      if (defaultOrg) {
        preferredResourceId = getFirstScormItemResourceId(defaultOrg);
      }
      if (!preferredResourceId) {
        for (var i = 0; i < organizationNodes.length; i += 1) {
          preferredResourceId = getFirstScormItemResourceId(organizationNodes[i]);
          if (preferredResourceId) break;
        }
      }

      function collectItemNodes(parentNode, depth) {
        var children = parentNode && (parentNode.children && parentNode.children.length ? parentNode.children : parentNode.childNodes);
        Array.prototype.forEach.call(children || [], function (child) {
          if (!child || child.nodeType !== 1 || !xmlNodeMatchesName(child, 'item')) return;
          var ref = String(getXmlAttributeValue(child, 'identifierref') || '').trim();
          var href = (ref && (resourcesById[ref] || scoResourcesById[ref])) || '';
          var title = extractScormItemTitle(child) || deriveTitleFromPath(href) || href;
          if (href) {
            items.push({
              title: title,
              path: href,
              depth: depth
            });
          }
          collectItemNodes(child, depth + 1);
        });
      }

      if (defaultOrg) {
        collectItemNodes(defaultOrg, 0);
      } else {
        organizationNodes.forEach(function (org) {
          collectItemNodes(org, 0);
        });
      }
    }

    var launchPath = '';
    if (preferredResourceId && resourcesById[preferredResourceId]) {
      launchPath = resourcesById[preferredResourceId];
    } else if (preferredResourceId && scoResourcesById[preferredResourceId]) {
      launchPath = scoResourcesById[preferredResourceId];
    } else {
      var commonScormLaunches = Object.keys(htmlLookup).filter(function (lowerPath) {
        return isClassicScormLauncherPath(lowerPath);
      }).map(function (lowerPath) {
        return htmlLookup[lowerPath];
      });
      launchPath = choosePreferredPath(commonScormLaunches)
        || choosePreferredPath(scoFallbacks)
        || choosePreferredPath(resourceFallbacks)
        || '';
    }

    if (!items.length) {
      var fallbackItems = choosePreferredPath(scoFallbacks) ? scoFallbacks : resourceFallbacks;
      items = (fallbackItems || []).map(function (path) {
        return {
          title: deriveTitleFromPath(path) || path,
          path: path,
          depth: 0
        };
      });
    }

    var metadataNode = getXmlElementsByName(xmlDoc, 'metadata')[0] || null;
    var schemaversionNode = getFirstXmlChildByName(metadataNode, 'schemaversion');
    var schemaversion = String((schemaversionNode && schemaversionNode.textContent) || '').trim();
    var isScorm12 = !schemaversion || /^1\.2(?:\.|$)/.test(schemaversion);
    var titleNode = getFirstXmlChildByName(xmlDoc.documentElement, 'organizations');
    var manifestTitle = '';
    if (titleNode) {
      var defaultTitleNode = getXmlElementsByName(titleNode, 'title')[0] || null;
      manifestTitle = String((defaultTitleNode && defaultTitleNode.textContent) || '').replace(/\s+/g, ' ').trim();
    }

    return {
      launchPath: launchPath,
      items: items,
      isScorm12: isScorm12,
      title: manifestTitle
    };
  }

  function detectScormLaunchPathFromManifest(manifestText, manifestPath, paths) {
    var info = parseScormManifestInfo(manifestText, manifestPath, paths);
    return info && info.launchPath ? info.launchPath : '';
  }

  function detectScormInfoFromZipEntries(entries) {
    if (!entries || typeof entries !== 'object') return null;
    var normalizedToOriginal = {};
    var paths = [];
    Object.keys(entries).forEach(function (entryPath) {
      if (!entryPath || /\/$/.test(entryPath) || entryPath.indexOf('__MACOSX/') === 0) return;
      var normalized = normalizePath(entryPath);
      if (!normalized) return;
      paths.push(normalized);
      if (!normalizedToOriginal[normalized]) {
        normalizedToOriginal[normalized] = entryPath;
      }
    });
    var manifestPath = findScormManifestPath(paths);
    if (!manifestPath) return null;
    var manifestEntryPath = normalizedToOriginal[manifestPath];
    if (!manifestEntryPath || !entries[manifestEntryPath]) return null;
    var raw = entries[manifestEntryPath];
    var bytes = raw instanceof Uint8Array ? raw : new Uint8Array(raw);
    var manifestText = decodeUtf8(bytes);
    return parseScormManifestInfo(manifestText, manifestPath, paths);
  }

  function detectScormLaunchPathFromZipEntries(entries) {
    var info = detectScormInfoFromZipEntries(entries);
    return info && info.launchPath ? info.launchPath : '';
  }

  function detectScormInfoFromStoredFiles(files) {
    if (!files || !files.length) return Promise.resolve(null);
    var pathMap = {};
    var paths = [];
    files.forEach(function (file) {
      var normalized = normalizePath((file && file.path) || '');
      if (!normalized) return;
      paths.push(normalized);
      if (!pathMap[normalized]) {
        pathMap[normalized] = file;
      }
    });
    var manifestPath = findScormManifestPath(paths);
    if (!manifestPath) return Promise.resolve(null);
    var manifestFile = pathMap[manifestPath];
    if (!manifestFile || !manifestFile.blob || !manifestFile.blob.arrayBuffer) {
      return Promise.resolve(null);
    }
    return manifestFile.blob.arrayBuffer().then(function (buffer) {
      var bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
      var manifestText = decodeUtf8(bytes);
      return parseScormManifestInfo(manifestText, manifestPath, paths);
    }).catch(function () {
      return null;
    });
  }

  function detectScormLaunchPathFromStoredFiles(files) {
    return detectScormInfoFromStoredFiles(files).then(function (info) {
      return info && info.launchPath ? info.launchPath : '';
    }).catch(function () {
      return '';
    });
  }

  function isPdfPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.pdf');
  }

  function isDocxPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.docx');
  }

  function isTxtPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.txt');
  }

  function isMarkdownPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.md');
  }

  function isCsvPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.csv');
  }

  function isH5pPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.h5p');
  }

  function encodePathForHref(path) {
    return (path || '').split('/').map(function (segment) {
      return encodeURIComponent(segment);
    }).join('/');
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildScormIndexHtml(scormInfo, fallbackTitle) {
    var info = scormInfo || {};
    var items = (info.items || []).filter(function (item) {
      return item && item.path;
    }).map(function (item) {
      return {
        title: normalizeResourceTitle(item.title || deriveTitleFromPath(item.path) || item.path),
        path: normalizePath(item.path),
        depth: Math.max(0, Number(item.depth) || 0)
      };
    });
    var launchPath = normalizePath(info.launchPath || (items[0] && items[0].path) || '');
    var pageLang = normalizeLang(currentLang);
    var title = normalizeResourceTitle(info.title || fallbackTitle || deriveTitleFromPath(launchPath) || 'SCORM 1.2');
    var encodedItems = JSON.stringify(items);
    var encodedLaunch = JSON.stringify(launchPath);
    var encodedTitle = JSON.stringify(title);
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
      + '<title>' + escapeHtml(title) + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--bg:#f4f7fb;--surface:#fff;--ink:#0f172a;--muted:#475569;--line:#d9e2f0;--accent:#2563eb;--accent-bg:#eff6ff}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0;background:var(--bg);color:var(--ink);font-family:"Libre Franklin","Segoe UI",Arial,sans-serif}'
      + '.shell{height:100%;display:grid;grid-template-columns:320px 1fr;gap:0}'
      + '.sidebar{background:var(--surface);border-right:1px solid var(--line);display:flex;flex-direction:column;min-height:0}'
      + '.head{padding:14px 16px;border-bottom:1px solid var(--line)}'
      + '.head h1{margin:0;font-size:1.02rem;line-height:1.3;color:var(--ink)}'
      + '.list{margin:0;padding:10px;list-style:none;overflow:auto;min-height:0}'
      + '.item{display:block;width:100%;text-align:left;padding:9px 10px;border-radius:10px;border:1px solid transparent;background:transparent;color:var(--ink);font-size:.92rem;line-height:1.25;cursor:pointer}'
      + '.item:hover{background:#f8fafc;border-color:#d8e2f0}'
      + '.item.is-active{background:var(--accent-bg);border-color:#bcd0f8;color:#1d4ed8;font-weight:700}'
      + '.viewer{position:relative;min-width:0;min-height:0}'
      + 'iframe{width:100%;height:100%;border:0;background:#fff}'
      + '.empty{padding:20px;color:var(--muted)}'
      + '@media (max-width:980px){.shell{grid-template-columns:1fr;grid-template-rows:42vh 1fr}.sidebar{border-right:0;border-bottom:1px solid var(--line)}}'
      + '</style></head><body>'
      + '<div class="shell">'
      + '<aside class="sidebar"><div class="head"><h1>' + escapeHtml(title) + '</h1></div><ul class="list" data-scorm-list></ul></aside>'
      + '<main class="viewer"><iframe title="' + escapeHtml(title) + '" data-scorm-frame></iframe><div class="empty" data-scorm-empty hidden>No hay páginas SCORM para mostrar.</div></main>'
      + '</div>'
      + '<script>(function(){'
      + 'var items=' + encodedItems + ';var initial=' + encodedLaunch + ';var pageTitle=' + encodedTitle + ';'
      + 'var list=document.querySelector("[data-scorm-list]");var frame=document.querySelector("[data-scorm-frame]");var empty=document.querySelector("[data-scorm-empty]");'
      + 'document.title=pageTitle||document.title;'
      + 'function enc(path){return String(path||"").split("/").map(function(seg){return encodeURIComponent(seg);}).join("/");}'
      + 'function norm(path){return String(path||"").replace(/\\\\/g,"/").replace(/^\\.\\//,"").replace(/^\\/+/, "").replace(/[?#].*$/,"");}'
      + 'function setActive(path){var target=norm(path);var buttons=list?list.querySelectorAll("button[data-path]"):[];Array.prototype.forEach.call(buttons,function(btn){btn.classList.toggle("is-active",norm(btn.getAttribute("data-path"))===target);});}'
      + 'function openPath(path,push){var clean=norm(path);if(!clean||!frame)return;frame.src=enc(clean);setActive(clean);if(push){try{history.replaceState(null,"","#"+encodeURIComponent(clean));}catch(e){}}}'
      + 'function buildList(){if(!list)return;list.innerHTML="";if(!items||!items.length){if(empty)empty.hidden=false;return;}if(empty)empty.hidden=true;items.forEach(function(item,idx){if(!item||!item.path)return;var li=document.createElement("li");var btn=document.createElement("button");btn.type="button";btn.className="item";btn.setAttribute("data-path",item.path);btn.style.paddingLeft=(10+Math.max(0,Number(item.depth)||0)*16)+"px";var title=String(item.title||item.path);btn.textContent=title;btn.addEventListener("click",function(){openPath(item.path,true);});li.appendChild(btn);list.appendChild(li);});}'
      + 'buildList();'
      + 'var fromHash="";if(location.hash&&location.hash.length>1){try{fromHash=decodeURIComponent(location.hash.slice(1));}catch(e){fromHash=location.hash.slice(1);} }'
      + 'var first=(items&&items[0]&&items[0].path)||"";var target=norm(fromHash)||norm(initial)||norm(first);'
      + 'if(target){openPath(target,false);}else if(empty){empty.hidden=false;}'
      + 'if(frame){frame.addEventListener("load",function(){try{var p=frame.contentWindow&&frame.contentWindow.location&&frame.contentWindow.location.pathname||"";p=decodeURIComponent(p.split("/").pop()||"");if(p){setActive(p);}}catch(e){}});}'
      + 'window.addEventListener("hashchange",function(){var next=\"\";if(location.hash&&location.hash.length>1){try{next=decodeURIComponent(location.hash.slice(1));}catch(e){next=location.hash.slice(1);}}if(next){openPath(next,false);}});'
      + '})();</script>'
      + '</body></html>';
  }

  function pickUniqueHtmlPath(basePath, existingPaths) {
    var desired = normalizePath(basePath || '__vwz_scorm_index.html') || '__vwz_scorm_index.html';
    var existing = {};
    (existingPaths || []).forEach(function (path) {
      var normalized = normalizePath(path || '').toLowerCase();
      if (normalized) existing[normalized] = true;
    });
    if (!existing[desired.toLowerCase()]) return desired;
    var dotIdx = desired.lastIndexOf('.');
    var stem = dotIdx === -1 ? desired : desired.slice(0, dotIdx);
    var ext = dotIdx === -1 ? '' : desired.slice(dotIdx);
    var idx = 2;
    while (existing[(stem + '_' + idx + ext).toLowerCase()]) {
      idx += 1;
    }
    return stem + '_' + idx + ext;
  }

  function getDocumentViewerStrings() {
    function getViewerText(key, fallback) {
      return t('documentViewer.' + key) || t('pdfViewer.' + key) || fallback;
    }
    return {
      documentsTitle: getViewerText('documentsTitle', 'Documentos'),
      hideList: getViewerText('hideList', 'Ocultar lista'),
      showList: getViewerText('showList', 'Mostrar lista'),
      loadingPdf: getViewerText('loadingPdf', 'Cargando PDF...'),
      failedPdf: getViewerText('failedPdf', 'No se pudo mostrar este PDF.'),
      downloadPdf: getViewerText('downloadPdf', 'Descargar PDF'),
      prevPage: getViewerText('prevPage', 'Anterior'),
      nextPage: getViewerText('nextPage', 'Siguiente'),
      zoomIn: getViewerText('zoomIn', '+'),
      zoomOut: getViewerText('zoomOut', '-'),
      fitWidth: getViewerText('fitWidth', 'Ajustar al ancho'),
      pageLabel: getViewerText('pageLabel', 'Página {current} / {total}'),
      missingPdfEngine: getViewerText('missingPdfEngine', 'No se pudo cargar el visor PDF.'),
      loadingDocx: getViewerText('loadingDocx', 'Cargando DOCX...'),
      failedDocx: getViewerText('failedDocx', 'No se pudo mostrar este DOCX.'),
      downloadDocx: getViewerText('downloadDocx', 'Descargar DOCX'),
      missingDocxEngine: getViewerText('missingDocxEngine', 'No se pudo cargar el visor DOCX.'),
      loadingText: getViewerText('loadingText', 'Cargando texto...'),
      failedText: getViewerText('failedText', 'No se pudo mostrar este archivo de texto.'),
      downloadText: getViewerText('downloadText', 'Descargar archivo')
    };
  }

  function isDownloadAllowedByRestrictions(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    if (Restrictions && Restrictions.allowDownload) {
      return !!Restrictions.allowDownload(restrictions);
    }
    return !!restrictions.allowDownload;
  }

  function extractViewerPreferences(entries) {
    if (!entries || !entries['__vwz_viewer.json']) return null;
    try {
      var raw = decodeUtf8(entries['__vwz_viewer.json']);
      var data = JSON.parse(raw || '{}');
      if (!data || typeof data !== 'object') return null;
      var preferred = normalizePath(data.preferredIndexPath || '');
      return {
        forceFolderViewer: !!data.forceFolderViewer,
        preferredIndexPath: preferred
      };
    } catch (e) {
      return null;
    }
  }

  function mapDocumentEntries(documentPaths) {
    return (documentPaths || []).map(function (path) {
      var type = isDocxPath(path)
        ? 'docx'
        : (isMarkdownPath(path)
          ? 'md'
          : (isCsvPath(path)
            ? 'csv'
            : (isTxtPath(path) ? 'txt' : 'pdf')));
      var iconType = isCsvPath(path) ? 'csv' : type;
      return {
        path: path,
        href: encodePathForHref(path),
        title: deriveTitleFromPath(path) || path,
        type: type,
        iconType: iconType
      };
    });
  }

  function buildSinglePdfDocumentHtml(selectedDoc, pageLang, strings, allowDownload) {
    var loadingPdfJs = JSON.stringify(strings.loadingPdf);
    var failedPdfJs = JSON.stringify(strings.failedPdf);
    var missingPdfEngineJs = JSON.stringify(strings.missingPdfEngine);
    var zoomInJs = JSON.stringify(strings.zoomIn);
    var zoomOutJs = JSON.stringify(strings.zoomOut);
    var fitWidthJs = JSON.stringify(strings.fitWidth);
    var downloadPdfJs = JSON.stringify(strings.downloadPdf);
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">'
      + '<title>' + escapeHtml(selectedDoc.title || 'PDF') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--ink:#0f172a;--border:#e2e8f0;--accent:#2563eb}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.pdf-shell{height:100%;padding:12px;display:grid;grid-template-rows:auto auto 1fr;gap:10px}'
      + '.viewer-kind{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:999px;border:1px solid var(--border);background:#f8fafc;color:#334155;font-size:.75rem;font-weight:700;letter-spacing:.02em}'
      + '.viewer-kind svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.viewer-kind--pdf{color:#b91c1c;background:#fef2f2;border-color:#fecaca}'
      + '.pdf-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}'
      + '.pdf-icon-btn{width:40px;height:40px;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:11px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.pdf-icon-btn svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-icon-btn:disabled{opacity:.45;cursor:not-allowed}'
      + '.pdf-icon-btn:not(:disabled):hover{background:#eef4ff;color:var(--accent);border-color:#bfdbfe}'
      + '.pdf-download{margin-left:auto;color:var(--accent);text-decoration:none;font-weight:600;width:40px;height:40px;border:1px solid var(--border);border-radius:11px;display:grid;place-items:center}'
      + '.pdf-download svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-status{margin:0;font-size:.95rem;color:#475569}'
      + '.pdf-stage{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:10px}'
      + '.pdf-stage.is-pannable{cursor:grab}'
      + '.pdf-stage.is-dragging{cursor:grabbing}'
      + '.pdf-pages{display:grid;gap:14px;justify-content:start;align-content:start;min-width:max-content}'
      + '.pdf-pages{display:grid;gap:14px;justify-content:start;align-content:start;min-width:max-content}.pdf-canvas{display:block;background:#fff;box-shadow:0 8px 20px rgba(15,23,42,.08)}'
      + '</style></head><body>'
      + '<div class="pdf-shell"><div class="pdf-toolbar"><span class="viewer-kind viewer-kind--pdf" aria-label="PDF"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg><span>PDF</span></span><button class="pdf-icon-btn" type="button" data-pdf-zoom-out><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M8 11h6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-fit-width><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16"></path><path d="M20 4v16"></path><path d="M7 12h10"></path><path d="m10-3 3 3-3 3"></path><path d="m-6 0-3-3 3-3"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-zoom-in><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg></button><a class="pdf-download" data-pdf-download hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg></a></div><p class="pdf-status" data-pdf-status></p><div class="pdf-stage" data-pdf-stage><div class="pdf-pages" data-pdf-pages></div></div></div>'
      + '<script src="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js"></script>'
      + '<script>(function(){var href=' + JSON.stringify(selectedDoc.href) + ';var baseTitle=' + JSON.stringify(selectedDoc.title || 'PDF') + ';var loading=' + loadingPdfJs + ';var failed=' + failedPdfJs + ';var missing=' + missingPdfEngineJs + ';var zoomInLabel=' + zoomInJs + ';var zoomOutLabel=' + zoomOutJs + ';var fitWidthLabel=' + fitWidthJs + ';var downloadLabel=' + downloadPdfJs + ';var allowDownload=' + allowDownloadJs + ';var statusNode=document.querySelector("[data-pdf-status]");var stageNode=document.querySelector("[data-pdf-stage]");var pagesNode=document.querySelector("[data-pdf-pages]");var zoomInBtn=document.querySelector("[data-pdf-zoom-in]");var zoomOutBtn=document.querySelector("[data-pdf-zoom-out]");var fitWidthBtn=document.querySelector("[data-pdf-fit-width]");var downloadNode=document.querySelector("[data-pdf-download]");var iconZoomIn="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"></circle><path d=\\"m21 21-4.3-4.3\\"></path><path d=\\"M11 8v6\\"></path><path d=\\"M8 11h6\\"></path></svg>";var iconZoomOut="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"></circle><path d=\\"m21 21-4.3-4.3\\"></path><path d=\\"M8 11h6\\"></path></svg>";var iconFitWidth="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M4 4v16\\"></path><path d=\\"M20 4v16\\"></path><path d=\\"M7 12h10\\"></path><path d=\\"m10-3 3 3-3 3\\"></path><path d=\\"m-6 0-3-3 3-3\\"></path></svg>";var iconDownload="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\"></path><path d=\\"m7 10 5 5 5-5\\"></path><path d=\\"M12 15V3\\"></path></svg>";zoomInBtn.title=zoomInLabel;zoomInBtn.setAttribute("aria-label",zoomInLabel);zoomOutBtn.title=zoomOutLabel;zoomOutBtn.setAttribute("aria-label",zoomOutLabel);fitWidthBtn.title=fitWidthLabel;fitWidthBtn.setAttribute("aria-label",fitWidthLabel);if(downloadNode&&allowDownload){downloadNode.hidden=false;downloadNode.href=href;downloadNode.download="";downloadNode.title=downloadLabel;downloadNode.setAttribute("aria-label",downloadLabel);}var pdfDoc=null;var scale=1.2;var renderToken=0;var dragging=false;var dragStartX=0;var dragStartY=0;var startScrollLeft=0;var startScrollTop=0;function updatePanState(){if(!stageNode)return;var pannable=stageNode.scrollWidth>stageNode.clientWidth||stageNode.scrollHeight>stageNode.clientHeight;stageNode.classList.toggle("is-pannable",pannable);}function syncButtons(){zoomOutBtn.disabled=!pdfDoc;zoomInBtn.disabled=!pdfDoc;fitWidthBtn.disabled=!pdfDoc;updatePanState();}function renderAllPages(){if(!pdfDoc||!pagesNode)return;renderToken+=1;var token=renderToken;statusNode.textContent=loading;pagesNode.innerHTML="";var chain=Promise.resolve();for(var i=1;i<=pdfDoc.numPages;i+=1){(function(pageNumber){chain=chain.then(function(){if(token!==renderToken){return;}return pdfDoc.getPage(pageNumber).then(function(page){if(token!==renderToken){return;}var viewport=page.getViewport({scale:scale});var canvas=document.createElement("canvas");canvas.className="pdf-canvas";canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);pagesNode.appendChild(canvas);var ctx=canvas.getContext("2d",{alpha:false});return page.render({canvasContext:ctx,viewport:viewport}).promise.catch(function(){return null;});});});})(i);}chain.then(function(){if(token!==renderToken){return;}statusNode.textContent="";syncButtons();}).catch(function(){if(token!==renderToken){return;}statusNode.textContent=failed;syncButtons();});}function fitToWidth(){if(!pdfDoc||!stageNode)return;pdfDoc.getPage(1).then(function(page){var viewport=page.getViewport({scale:1});var available=stageNode.clientWidth-24;var nextScale=available>0?available/viewport.width:1;scale=Math.max(0.4,Math.min(5,nextScale));renderAllPages();}).catch(function(){});}function setTitle(custom){var clean=String(custom||"").replace(/\\s+/g," ").trim();document.title=clean||baseTitle||"PDF";}if(stageNode){stageNode.addEventListener("mousedown",function(ev){if(ev.button!==0)return;if(!(stageNode.scrollWidth>stageNode.clientWidth||stageNode.scrollHeight>stageNode.clientHeight))return;dragging=true;dragStartX=ev.clientX;dragStartY=ev.clientY;startScrollLeft=stageNode.scrollLeft;startScrollTop=stageNode.scrollTop;stageNode.classList.add("is-dragging");ev.preventDefault();});window.addEventListener("mousemove",function(ev){if(!dragging)return;stageNode.scrollLeft=startScrollLeft-(ev.clientX-dragStartX);stageNode.scrollTop=startScrollTop-(ev.clientY-dragStartY);});window.addEventListener("mouseup",function(){if(!dragging)return;dragging=false;stageNode.classList.remove("is-dragging");});stageNode.addEventListener("mouseleave",function(){if(!dragging)return;dragging=false;stageNode.classList.remove("is-dragging");});}setTitle(baseTitle);fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){setTitle(meta&&meta.title?meta.title:"");}).catch(function(){});if(!window.pdfjsLib||!window.pdfjsLib.getDocument){statusNode.textContent=missing;syncButtons();return;}window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";statusNode.textContent=loading;fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){return window.pdfjsLib.getDocument({data:buffer,disableRange:true,disableStream:true,disableAutoFetch:false}).promise;}).then(function(doc){pdfDoc=doc;syncButtons();fitToWidth();}).catch(function(){statusNode.textContent=failed;syncButtons();});zoomInBtn.addEventListener("click",function(){if(!pdfDoc)return;scale=Math.min(5,scale+0.2);renderAllPages();});zoomOutBtn.addEventListener("click",function(){if(!pdfDoc)return;scale=Math.max(0.4,scale-0.2);renderAllPages();});fitWidthBtn.addEventListener("click",function(){fitToWidth();});syncButtons();})();</script>'
      + '</body></html>';
  }

  function buildSingleDocxDocumentHtml(selectedDoc, pageLang, strings, allowDownload) {
    var loadingDocxLabelJs = JSON.stringify(strings.loadingDocx);
    var failedDocxLabelJs = JSON.stringify(strings.failedDocx);
    var downloadDocxLabelJs = JSON.stringify(strings.downloadDocx);
    var missingDocxEngineLabelJs = JSON.stringify(strings.missingDocxEngine);
    var loadingTextLabelJs = JSON.stringify(strings.loadingText);
    var failedTextLabelJs = JSON.stringify(strings.failedText);
    var downloadTextLabelJs = JSON.stringify(strings.downloadText);
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">'
      + '<title>' + escapeHtml(selectedDoc.title || 'DOCX') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--ink:#0f172a;--border:#e2e8f0;--accent:#2563eb}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.docx-shell{height:100%;padding:12px}'
      + '.docx-toolbar{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:0 0 10px}'
      + '.viewer-kind{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:999px;border:1px solid var(--border);background:#f8fafc;color:#334155;font-size:.75rem;font-weight:700;letter-spacing:.02em}'
      + '.viewer-kind svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.viewer-kind--docx{color:#1d4ed8;background:#eff6ff;border-color:#bfdbfe}'
      + '.docx-viewer{height:100%;overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:18px}'
      + '.docx-status{margin:0 0 12px;font-size:.95rem;color:#475569}'
      + '.docx-content{line-height:1.5}'
      + '.docx-content img{max-width:100%;height:auto}'
      + '.docx-download{color:var(--accent);text-decoration:none;font-weight:600}'
      + '</style></head><body>'
      + '<div class="docx-shell"><div class="docx-toolbar"><span class="viewer-kind viewer-kind--docx" aria-label="DOCX"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg><span>DOCX</span></span><a class="docx-download" data-docx-download hidden></a></div><article class="docx-viewer"><p class="docx-status" data-docx-status></p><div class="docx-content" data-docx-content></div></article></div>'
      + '<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/docx-preview@0.3.3/dist/docx-preview.min.js"></script>'
      + '<script>(function(){var statusNode=document.querySelector("[data-docx-status]");var contentNode=document.querySelector("[data-docx-content]");var downloadNode=document.querySelector("[data-docx-download]");var href=' + JSON.stringify(selectedDoc.href) + ';var title=' + JSON.stringify(selectedDoc.title || 'DOCX') + ';var loading=' + loadingDocxLabelJs + ';var failed=' + failedDocxLabelJs + ';var download=' + downloadDocxLabelJs + ';var missing=' + missingDocxEngineLabelJs + ';var allowDownload=' + allowDownloadJs + ';var viewerTitle=(title||"DOCX");document.title=viewerTitle;var iconDownload="<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path><path d=\"M12 15V3\"></path></svg>";if(downloadNode){downloadNode.hidden=!allowDownload;downloadNode.title=download;downloadNode.setAttribute("aria-label",download);downloadNode.href=href;downloadNode.download="";}fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){var custom=(meta&&meta.title?String(meta.title):"").replace(/\\s+/g," ").trim();if(custom){viewerTitle=custom;document.title=custom;}}).catch(function(){});statusNode.textContent=loading;function fail(message){statusNode.textContent=message;if(!allowDownload){return;}contentNode.innerHTML="<p><a class=\\"docx-download\\" href=\\"" + href.replace(/"/g,"&quot;") + "\\" download>" + download + "</a></p>";}if(!window.docx||!window.docx.renderAsync){fail(missing);return;}fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){if(contentNode){contentNode.innerHTML="";}return window.docx.renderAsync(buffer,contentNode,contentNode,{inWrapper:true,breakPages:true,renderHeaders:true,renderFooters:true,renderFootnotes:true,renderEndnotes:true,useBase64URL:true});}).then(function(){statusNode.textContent="";}).catch(function(){fail(failed);});})();</script>'
      + '</body></html>';
  }

  function getDocumentTypeIconHtml(type) {
    if (type === 'csv') {
      return '<span class="doc-link__icon doc-link__icon--csv" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></span>';
    }
    if (type === 'docx') {
      return '<span class="doc-link__icon doc-link__icon--docx" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></span>';
    }
    if (type === 'md') {
      return '<span class="doc-link__icon doc-link__icon--md" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></span>';
    }
    if (type === 'txt') {
      return '<span class="doc-link__icon doc-link__icon--txt" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></span>';
    }
    return '<span class="doc-link__icon doc-link__icon--pdf" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></span>';
  }

  function buildDocumentListItems(docs, selectedDoc) {
    return docs.map(function (doc) {
      var selected = doc.path === selectedDoc.path ? ' class="is-active"' : '';
      return '<li><button type="button" data-doc-link' + selected + ' data-doc-type="' + escapeHtml(doc.type) + '" data-doc-href="' + escapeHtml(doc.href) + '" data-doc-title="' + escapeHtml(doc.title) + '" title="' + escapeHtml(doc.title) + '">' + getDocumentTypeIconHtml(doc.iconType || doc.type) + '<span class="doc-link__label">' + escapeHtml(doc.title) + '</span></button></li>';
    }).join('');
  }

  function buildMultiDocumentIndexHtml(docs, selectedDoc, pageLang, strings, allowDownload) {
    var documentsTitleJs = JSON.stringify(strings.documentsTitle);
    var hideListLabelJs = JSON.stringify(strings.hideList);
    var showListLabelJs = JSON.stringify(strings.showList);
    var loadingPdfLabelJs = JSON.stringify(strings.loadingPdf);
    var failedPdfLabelJs = JSON.stringify(strings.failedPdf);
    var downloadPdfLabelJs = JSON.stringify(strings.downloadPdf);
    var prevPageLabelJs = JSON.stringify(strings.prevPage);
    var nextPageLabelJs = JSON.stringify(strings.nextPage);
    var zoomInLabelJs = JSON.stringify(strings.zoomIn);
    var zoomOutLabelJs = JSON.stringify(strings.zoomOut);
    var fitWidthLabelJs = JSON.stringify(strings.fitWidth);
    var pageLabelJs = JSON.stringify(strings.pageLabel);
    var missingPdfEngineLabelJs = JSON.stringify(strings.missingPdfEngine);
    var loadingDocxLabelJs = JSON.stringify(strings.loadingDocx);
    var failedDocxLabelJs = JSON.stringify(strings.failedDocx);
    var downloadDocxLabelJs = JSON.stringify(strings.downloadDocx);
    var missingDocxEngineLabelJs = JSON.stringify(strings.missingDocxEngine);
    var loadingTextLabelJs = JSON.stringify(strings.loadingText);
    var failedTextLabelJs = JSON.stringify(strings.failedText);
    var downloadTextLabelJs = JSON.stringify(strings.downloadText);
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    var listItems = buildDocumentListItems(docs, selectedDoc);
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">'
      + '<title>' + escapeHtml(selectedDoc.title || 'Documento') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--surface-muted:#f3f5f8;--ink:#0f172a;--border:#e2e8f0;--border-strong:#cbd5e1;--accent:#2563eb;--accent-wash:#eff6ff;--shadow:0 10px 26px rgba(15,23,42,.06)}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.layout{display:grid;grid-template-columns:minmax(230px,330px) 1fr;height:100%;gap:12px;padding:12px}'
      + '.sidebar{display:flex;flex-direction:column;min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);overflow:hidden}'
      + '.sidebar-toggle{width:36px;height:36px;margin:10px 10px 8px;appearance:none;border:1px solid var(--border-strong);background:var(--surface-muted);color:#334155;border-radius:10px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.sidebar-toggle:hover{background:var(--accent-wash);color:var(--accent)}'
      + '.sidebar-toggle svg{width:18px;height:18px;display:block;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.sidebar-content{padding:0 10px 10px;overflow-y:auto;overflow-x:hidden}'
      + '.sidebar h1{margin:0 0 10px;font-size:1rem;line-height:1.2}'
      + '.sidebar ul{list-style:none;margin:0;padding:0;display:grid;gap:8px;min-width:0}'
      + '.sidebar li{min-width:0}'
      + '.sidebar button{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:10px 12px;border-radius:12px;text-decoration:none;color:var(--ink);border:1px solid var(--border);background:var(--surface-muted);font-weight:500;cursor:pointer;font:inherit;min-width:0;overflow:hidden}'
      + '.doc-link__label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
      + '.doc-link__icon{display:inline-grid;place-items:center;flex:0 0 auto;width:18px;height:18px;border-radius:6px;background:#f8fafc;border:1px solid #e2e8f0;color:#475569}'
      + '.doc-link__icon svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.doc-link__icon--pdf{color:#b91c1c;background:#fef2f2;border-color:#fecaca}'
      + '.doc-link__icon--docx{color:#1d4ed8;background:#eff6ff;border-color:#bfdbfe}'
      + '.doc-link__icon--md{color:#0f766e;background:#ecfeff;border-color:#a5f3fc}'
      + '.doc-link__icon--txt{color:#475569;background:#f8fafc;border-color:#cbd5e1}'
      + '.doc-link__icon--csv{color:#0f766e;background:#ecfdf5;border-color:#86efac}'
      + '.sidebar button:hover{background:var(--accent-wash);border-color:#bfdbfe}'
      + '.sidebar button.is-active{background:var(--accent-wash);border-color:#93c5fd;color:#1d4ed8;font-weight:700}'
      + 'body.sidebar-collapsed .layout{grid-template-columns:56px 1fr}'
      + 'body.sidebar-collapsed .sidebar{align-items:stretch}'
      + 'body.sidebar-collapsed .sidebar-toggle{margin:10px auto 8px}'
      + 'body.sidebar-collapsed .sidebar-content{display:none}'
      + '.viewer{min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column}'
      + '.pdf-pane{height:100%;display:flex;flex-direction:column;min-height:0;padding:10px;gap:10px}'
      + '.pdf-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}'
      + '.pdf-icon-btn{width:40px;height:40px;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:11px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.pdf-icon-btn svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-icon-btn:disabled{opacity:.45;cursor:not-allowed}'
      + '.pdf-icon-btn:not(:disabled):hover{background:#eef4ff;color:var(--accent);border-color:#bfdbfe}'
      + '.pdf-page{font-size:.9rem;color:#475569;padding:0 4px}'
      + '.pdf-download{margin-left:auto;color:var(--accent);text-decoration:none;font-weight:600;width:40px;height:40px;border:1px solid var(--border);border-radius:11px;display:grid;place-items:center}'
      + '.pdf-download svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-status{margin:0;font-size:.95rem;color:#475569}'
      + '.pdf-stage{overflow:auto;background:var(--surface-muted);border:1px solid var(--border);border-radius:12px;padding:10px;display:grid;place-items:start;min-height:0;flex:1}'
      + '.pdf-stage.is-pannable{cursor:grab}'
      + '.pdf-stage.is-dragging{cursor:grabbing}'
      + '.pdf-pages{display:grid;gap:12px;justify-content:start;align-content:start;min-width:max-content}'
      + '.pdf-canvas{display:block;background:#fff;box-shadow:0 8px 20px rgba(15,23,42,.08)}'
      + '.docx-pane{height:100%;display:none;flex-direction:column;min-height:0;padding:10px;gap:10px;overflow:hidden}'
      + '.docx-status{margin:0 0 12px;font-size:.95rem;color:#475569}'
      + '.docx-stage{overflow:auto;background:var(--surface-muted);border:1px solid var(--border);border-radius:12px;padding:18px;min-height:0;flex:1}'
      + '.docx-content{line-height:1.5}'
      + '.docx-content img{max-width:100%;height:auto}'
      + '.docx-content .text-plain{margin:0;white-space:pre-wrap;word-break:break-word;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,"Roboto Mono",monospace;font-size:.95rem}'
      + '.docx-content.markdown-rendered{line-height:1.7}'
      + '.docx-content.markdown-rendered h1,.docx-content.markdown-rendered h2,.docx-content.markdown-rendered h3{margin:.4em 0 .55em;line-height:1.25}'
      + '.docx-content.markdown-rendered p{margin:.45em 0 .8em}'
      + '.docx-content.markdown-rendered code{background:#e2e8f0;padding:.08em .35em;border-radius:.35em;font-size:.92em}'
      + '.docx-content.markdown-rendered pre{background:#0f172a;color:#e2e8f0;padding:12px;border-radius:10px;overflow:auto}'
      + '.docx-content.markdown-rendered pre code{background:transparent;padding:0;color:inherit}'
      + '.docx-content .csv-wrap{overflow:auto;max-width:100%}'
      + '.docx-content .csv-table{width:100%;border-collapse:collapse;font-size:.95rem;background:#fff}'
      + '.docx-content .csv-table th,.docx-content .csv-table td{border:1px solid #cbd5e1;padding:6px 8px;text-align:left;vertical-align:top;white-space:nowrap}'
      + '.docx-content .csv-table th{background:#eef2ff;font-weight:700;position:sticky;top:0;z-index:1}'
      + '.docx-download{color:var(--accent);text-decoration:none;font-weight:600}'
      + '@media (max-width:900px){.layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}body.sidebar-collapsed .layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}}'
      + '</style></head><body>'
      + '<div class="layout"><aside class="sidebar"><button type="button" class="sidebar-toggle" data-sidebar-toggle aria-expanded="true" title="' + escapeHtml(strings.hideList) + '" aria-label="' + escapeHtml(strings.hideList) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 3v18"></path><path d="m16 9-3 3 3 3"></path></svg></button><div class="sidebar-content" data-sidebar-content><h1 data-viewer-title>' + escapeHtml(strings.documentsTitle) + '</h1><ul>'
      + listItems
      + '</ul></div></aside><main class="viewer"><section class="pdf-pane" data-pdf-pane><div class="pdf-toolbar"><button class="pdf-icon-btn" type="button" data-pdf-prev><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-next><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-zoom-out><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M8 11h6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-fit-width><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16"></path><path d="M20 4v16"></path><path d="m9 8-4 4 4 4"></path><path d="m15 8 4 4-4 4"></path><path d="M5 12h14"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-zoom-in><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg></button><span class="pdf-page" data-pdf-page></span><a class="pdf-download" data-pdf-download hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg></a></div><p class="pdf-status" data-pdf-status></p><div class="pdf-stage" data-pdf-stage><div class="pdf-pages" data-pdf-pages></div></div></section><article class="docx-pane" data-docx-pane><div class="pdf-toolbar"><button class="pdf-icon-btn" type="button" data-docx-prev><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-next><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-zoom-out><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M8 11h6"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-fit-width><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16"></path><path d="M20 4v16"></path><path d="m9 8-4 4 4 4"></path><path d="m15 8 4 4-4 4"></path><path d="M5 12h14"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-zoom-in><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg></button><span class="pdf-page" data-docx-page></span><a class="pdf-download" data-docx-download hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg></a></div><p class="docx-status" data-docx-status></p><div class="docx-stage" data-docx-stage><div class="docx-content" data-docx-content></div></div></article></main></div>'
      + '<script src="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/docx-preview@0.3.3/dist/docx-preview.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>'
      + '<script>(function(){var body=document.body;var btn=document.querySelector("[data-sidebar-toggle]");var pdfPane=document.querySelector("[data-pdf-pane]");var pdfStage=document.querySelector("[data-pdf-stage]");var pdfStatus=document.querySelector("[data-pdf-status]");var pdfPage=document.querySelector("[data-pdf-page]");var docxPage=document.querySelector("[data-docx-page]");var pdfPages=document.querySelector("[data-pdf-pages]");var pdfPrev=document.querySelector("[data-pdf-prev]");var pdfNext=document.querySelector("[data-pdf-next]");var pdfZoomOut=document.querySelector("[data-pdf-zoom-out]");var pdfZoomIn=document.querySelector("[data-pdf-zoom-in]");var pdfFitWidth=document.querySelector("[data-pdf-fit-width]");var pdfDownload=document.querySelector("[data-pdf-download]");var docxPane=document.querySelector("[data-docx-pane]");var docxStatus=document.querySelector("[data-docx-status]");var docxContent=document.querySelector("[data-docx-content]");var docxDownload=document.querySelector("[data-docx-download]");var titleNode=document.querySelector("[data-viewer-title]");var links=[].slice.call(document.querySelectorAll("[data-doc-link]"));var iconOpen="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"></rect><path d=\\"M9 3v18\\"></path><path d=\\"m16 9-3 3 3 3\\"></path></svg>";var iconClosed="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"></rect><path d=\\"M9 3v18\\"></path><path d=\\"m13 9 3 3-3 3\\"></path></svg>";var labelHide=' + hideListLabelJs + ';var labelShow=' + showListLabelJs + ';var loadingPdf=' + loadingPdfLabelJs + ';var failedPdf=' + failedPdfLabelJs + ';var downloadPdf=' + downloadPdfLabelJs + ';var prevPageLabel=' + prevPageLabelJs + ';var nextPageLabel=' + nextPageLabelJs + ';var zoomInLabel=' + zoomInLabelJs + ';var zoomOutLabel=' + zoomOutLabelJs + ';var fitWidthLabel=' + fitWidthLabelJs + ';var pageTpl=' + pageLabelJs + ';var missingPdf=' + missingPdfEngineLabelJs + ';var loadingDocx=' + loadingDocxLabelJs + ';var failedDocx=' + failedDocxLabelJs + ';var downloadDocx=' + downloadDocxLabelJs + ';var missingDocx=' + missingDocxEngineLabelJs + ';var loadingText=' + loadingTextLabelJs + ';var failedText=' + failedTextLabelJs + ';var downloadText=' + downloadTextLabelJs + ';var viewerTitle=' + documentsTitleJs + ';var allowDownload=' + allowDownloadJs + ';var hasCustomTitle=false;var pdfDoc=null;var pdfPageNum=1;var pdfTotal=1;var pdfScale=1.2;var renderToken=0;var syncingScroll=false;var kindBadges=[];function ensureKindBadges(){if(kindBadges.length){return;}[pdfPage,docxPage].forEach(function(anchor){if(!anchor||!anchor.parentNode){return;}var badge=document.createElement("span");badge.setAttribute("data-viewer-kind","");badge.style.display="inline-flex";badge.style.alignItems="center";badge.style.padding="4px 8px";badge.style.borderRadius="999px";badge.style.border="1px solid #cbd5e1";badge.style.background="#f8fafc";badge.style.color="#334155";badge.style.fontSize=".74rem";badge.style.fontWeight="700";badge.style.lineHeight="1";badge.style.letterSpacing=".01em";badge.textContent="PDF";anchor.parentNode.insertBefore(badge,anchor);kindBadges.push(badge);});}function setViewerKind(type){ensureKindBadges();var key=String(type||"pdf").toLowerCase();var label=(key==="docx"?"DOCX":(key==="md"?"MD":(key==="txt"?"TXT":(key==="csv"?"CSV":"PDF"))));var tone=(key==="docx"?["#1d4ed8","#eff6ff","#bfdbfe"]:(key==="md"?["#0f766e","#ecfeff","#a5f3fc"]:(key==="txt"?["#475569","#f8fafc","#cbd5e1"]:(key==="csv"?["#0f766e","#ecfdf5","#86efac"]:["#b91c1c","#fef2f2","#fecaca"]))));kindBadges.forEach(function(node){node.textContent=label;node.style.color=tone[0];node.style.background=tone[1];node.style.borderColor=tone[2];node.setAttribute("aria-label",label);});}function applyViewerTitle(title){var clean=String(title||"").replace(/\\s+/g," ").trim();if(!clean)return;viewerTitle=clean;if(titleNode){titleNode.textContent=clean;}document.title=clean;}function markActive(link){links.forEach(function(node){node.classList.toggle("is-active",node===link);});if(link&&!hasCustomTitle){var title=(link.getAttribute("data-doc-title")||link.textContent||"").replace(/\\s+/g," ").trim();if(title){document.title=title;}}}function syncToggle(){if(!btn)return;var collapsed=body.classList.contains("sidebar-collapsed");var label=collapsed?labelShow:labelHide;btn.title=label;btn.setAttribute("aria-label",label);btn.setAttribute("aria-expanded",collapsed?"false":"true");}function pageText(){return pageTpl.replace(/\\{current\\}/g,String(pdfPageNum)).replace(/\\{total\\}/g,String(pdfTotal));}function syncPdfUi(){if(!pdfPrev||!pdfNext||!pdfZoomIn||!pdfZoomOut||!pdfFitWidth||!pdfPage)return;pdfPrev.title=prevPageLabel;pdfPrev.setAttribute("aria-label",prevPageLabel);pdfNext.title=nextPageLabel;pdfNext.setAttribute("aria-label",nextPageLabel);pdfZoomIn.title=zoomInLabel;pdfZoomIn.setAttribute("aria-label",zoomInLabel);pdfZoomOut.title=zoomOutLabel;pdfZoomOut.setAttribute("aria-label",zoomOutLabel);pdfFitWidth.title=fitWidthLabel;pdfFitWidth.setAttribute("aria-label",fitWidthLabel);pdfPrev.disabled=!pdfDoc||pdfPageNum<=1;pdfNext.disabled=!pdfDoc||pdfPageNum>=pdfTotal;pdfZoomIn.disabled=!pdfDoc;pdfZoomOut.disabled=!pdfDoc;pdfFitWidth.disabled=!pdfDoc;pdfPage.textContent=pdfDoc?pageText():"";}function getCanvases(){return pdfPages?[].slice.call(pdfPages.querySelectorAll("canvas[data-page-num]")):[];}function scrollToPage(num){if(!pdfStage||!pdfPages)return;var canvas=pdfPages.querySelector("canvas[data-page-num=\\""+String(num)+"\\"]");if(!canvas)return;syncingScroll=true;pdfStage.scrollTop=Math.max(0,canvas.offsetTop-8);setTimeout(function(){syncingScroll=false;},80);}function updatePageFromScroll(){if(!pdfDoc||syncingScroll||!pdfStage||!pdfPages)return;var canvases=getCanvases();if(!canvases.length)return;var probe=pdfStage.scrollTop+Math.max(12,pdfStage.clientHeight*0.35);var current=1;for(var i=0;i<canvases.length;i+=1){if(canvases[i].offsetTop<=probe){current=i+1;}else{break;}}if(current!==pdfPageNum){pdfPageNum=current;syncPdfUi();}}function renderAllPages(keepPage){if(!pdfDoc||!pdfPages)return;renderToken+=1;var token=renderToken;pdfStatus.textContent=loadingPdf;pdfPages.innerHTML="";var chain=Promise.resolve();for(var i=1;i<=pdfTotal;i+=1){(function(pageNumber){chain=chain.then(function(){if(token!==renderToken){return;}return pdfDoc.getPage(pageNumber).then(function(page){if(token!==renderToken){return;}var viewport=page.getViewport({scale:pdfScale});var canvas=document.createElement("canvas");canvas.className="pdf-canvas";canvas.setAttribute("data-page-num",String(pageNumber));canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);pdfPages.appendChild(canvas);var ctx=canvas.getContext("2d",{alpha:false});return page.render({canvasContext:ctx,viewport:viewport}).promise.catch(function(){return null;});});});})(i);}chain.then(function(){if(token!==renderToken){return;}pdfStatus.textContent="";syncPdfUi();if(keepPage){scrollToPage(keepPage);}}).catch(function(){if(token!==renderToken){return;}pdfStatus.textContent=failedPdf;syncPdfUi();});}function fitPdfToWidth(){if(!pdfDoc||!pdfStage)return;pdfDoc.getPage(1).then(function(page){var viewport=page.getViewport({scale:1});var available=pdfStage.clientWidth-24;var nextScale=available>0?available/viewport.width:1;pdfScale=Math.max(0.4,Math.min(5,nextScale));renderAllPages(pdfPageNum);}).catch(function(){renderAllPages(pdfPageNum);});}function loadPdf(href){setViewerKind("pdf");if(docxPane){docxPane.style.display="none";}if(pdfPane){pdfPane.style.display="flex";}if(pdfDownload){pdfDownload.hidden=!allowDownload;pdfDownload.title=downloadPdf;pdfDownload.setAttribute("aria-label",downloadPdf);pdfDownload.href=href||"";pdfDownload.download="";}pdfDoc=null;pdfPageNum=1;pdfTotal=1;syncPdfUi();if(!window.pdfjsLib||!window.pdfjsLib.getDocument){pdfStatus.textContent=missingPdf;return;}window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";pdfStatus.textContent=loadingPdf;fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){return window.pdfjsLib.getDocument({data:buffer,disableRange:true,disableStream:true,disableAutoFetch:false}).promise;}).then(function(doc){pdfDoc=doc;pdfTotal=doc.numPages||1;pdfPageNum=1;syncPdfUi();fitPdfToWidth();}).catch(function(){pdfStatus.textContent=failedPdf;syncPdfUi();});}function failDocx(href,message){if(!docxStatus||!docxContent)return;docxStatus.textContent=message;if(allowDownload){docxContent.innerHTML="<p><a class=\\"docx-download\\" href=\\"" + String(href||"").replace(/"/g,"&quot;") + "\\" download>" + downloadDocx + "</a></p>";}else{docxContent.innerHTML="";}}function showDocx(href){setViewerKind("docx");if(pdfPane){pdfPane.style.display="none";}if(docxPane){docxPane.style.display="flex";}if(docxDownload){docxDownload.hidden=!allowDownload;docxDownload.title=downloadDocx;docxDownload.setAttribute("aria-label",downloadDocx);docxDownload.href=href||"";docxDownload.download="";}if(docxStatus){docxStatus.textContent=loadingDocx;}if(docxContent){docxContent.classList.remove("markdown-rendered");docxContent.innerHTML="";}if(!window.docx||!window.docx.renderAsync){failDocx(href,missingDocx);return;}fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){if(docxContent){docxContent.classList.remove("markdown-rendered");docxContent.innerHTML="";}return window.docx.renderAsync(buffer,docxContent,docxContent,{inWrapper:true,breakPages:true,renderHeaders:true,renderFooters:true,renderFootnotes:true,renderEndnotes:true,useBase64URL:true});}).then(function(){if(docxStatus){docxStatus.textContent="";}}).catch(function(){failDocx(href,failedDocx);});}function showText(href,type){setViewerKind(type);if(pdfPane){pdfPane.style.display="none";}if(docxPane){docxPane.style.display="flex";}if(docxDownload){docxDownload.hidden=!allowDownload;docxDownload.title=downloadText;docxDownload.setAttribute("aria-label",downloadText);docxDownload.href=href||"";docxDownload.download="";}if(docxStatus){docxStatus.textContent=loadingText;}if(docxContent){docxContent.classList.remove("markdown-rendered");docxContent.innerHTML="";}fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.text();}).then(function(raw){if(!docxContent)return;if(type==="md"){var html="";var bs=String.fromCharCode(92);var mdSource=String(raw||"").split(bs).join(bs+bs);if(window.marked&&window.marked.parse){html=window.marked.parse(mdSource);}else{html="<pre class=\\"text-plain\\"></pre>";docxContent.innerHTML=html;var pre=docxContent.querySelector(".text-plain");if(pre){pre.textContent=raw||"";}if(docxStatus){docxStatus.textContent="";}return;}docxContent.classList.add("markdown-rendered");docxContent.innerHTML=html;if(window.renderMathInElement){window.renderMathInElement(docxContent,{delimiters:[{left:"$$",right:"$$",display:true},{left:"\\\\(",right:"\\\\)",display:false},{left:"\\\\[",right:"\\\\]",display:true},{left:"$",right:"$",display:false}],throwOnError:false});}}else if(type==="csv"){docxContent.classList.remove("markdown-rendered");var csvText=String(raw||"");var rows=[];var row=[];var cell="";var inQuotes=false;var q=String.fromCharCode(34);for(var i=0;i<csvText.length;i+=1){var ch=csvText.charAt(i);if(inQuotes){if(ch===q){if(i+1<csvText.length&&csvText.charAt(i+1)===q){cell+=q;i+=1;}else{inQuotes=false;}}else{cell+=ch;}}else{if(ch===q){inQuotes=true;}else if(ch===","){row.push(cell);cell="";}else if(ch.charCodeAt(0)===10){row.push(cell);rows.push(row);row=[];cell="";}else if(ch.charCodeAt(0)!==13){cell+=ch;}}}row.push(cell);rows.push(row);while(rows.length&&rows[rows.length-1].every(function(v){return String(v||"").trim()==="";})){rows.pop();}if(!rows.length){docxContent.innerHTML="<pre class=\\\"text-plain\\\"></pre>";var preEmpty=docxContent.querySelector(".text-plain");if(preEmpty){preEmpty.textContent=raw||"";}}else{var cols=rows.reduce(function(max,r){return Math.max(max,r.length);},0);function esc(v){return String(v||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}var htmlParts=[];htmlParts.push("<div class=\\\"csv-wrap\\\"><table class=\\\"csv-table\\\"><thead><tr>");for(var c=0;c<cols;c+=1){htmlParts.push("<th>"+esc((rows[0]||[])[c]||"")+"</th>");}htmlParts.push("</tr></thead><tbody>");for(var r=1;r<rows.length;r+=1){htmlParts.push("<tr>");for(var cc=0;cc<cols;cc+=1){htmlParts.push("<td>"+esc((rows[r]||[])[cc]||"")+"</td>");}htmlParts.push("</tr>");}htmlParts.push("</tbody></table></div>");docxContent.innerHTML=htmlParts.join("");}}else{docxContent.classList.remove("markdown-rendered");docxContent.innerHTML="<pre class=\\\"text-plain\\\"></pre>";var pre=docxContent.querySelector(".text-plain");if(pre){pre.textContent=raw||"";}}if(docxStatus){docxStatus.textContent="";}}).catch(function(){if(docxStatus){docxStatus.textContent=failedText;}if(docxContent){docxContent.classList.remove("markdown-rendered");docxContent.innerHTML="";}});}if(pdfPrev){pdfPrev.addEventListener("click",function(){if(!pdfDoc||pdfPageNum<=1)return;pdfPageNum-=1;syncPdfUi();scrollToPage(pdfPageNum);});}if(pdfNext){pdfNext.addEventListener("click",function(){if(!pdfDoc||pdfPageNum>=pdfTotal)return;pdfPageNum+=1;syncPdfUi();scrollToPage(pdfPageNum);});}if(pdfZoomIn){pdfZoomIn.addEventListener("click",function(){if(!pdfDoc)return;pdfScale=Math.min(5,pdfScale+0.2);renderAllPages(pdfPageNum);});}if(pdfZoomOut){pdfZoomOut.addEventListener("click",function(){if(!pdfDoc)return;pdfScale=Math.max(0.4,pdfScale-0.2);renderAllPages(pdfPageNum);});}if(pdfFitWidth){pdfFitWidth.addEventListener("click",function(){if(!pdfDoc)return;fitPdfToWidth();});}if(pdfStage){pdfStage.addEventListener("scroll",function(){updatePageFromScroll();});}if(btn){btn.addEventListener("click",function(){body.classList.toggle("sidebar-collapsed");syncToggle();});syncToggle();}links.forEach(function(link){link.addEventListener("click",function(){var href=link.getAttribute("data-doc-href")||"";var type=(link.getAttribute("data-doc-type")||"pdf").toLowerCase();if(type==="docx"){showDocx(href);}else if(type==="md"||type==="txt"||type==="csv"){showText(href,type);}else{loadPdf(href);}markActive(link);});});var initial=links.find(function(link){return link.classList.contains("is-active");})||links[0]||null;if(initial){var initialHref=initial.getAttribute("data-doc-href")||"";var initialType=(initial.getAttribute("data-doc-type")||"pdf").toLowerCase();if(initialType==="docx"){showDocx(initialHref);}else if(initialType==="md"||initialType==="txt"||initialType==="csv"){showText(initialHref,initialType);}else{loadPdf(initialHref);}markActive(initial);}fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){var custom=(meta&&meta.title?String(meta.title):"").replace(/\\s+/g," ").trim();if(custom){hasCustomTitle=true;applyViewerTitle(custom);}}).catch(function(){});syncPdfUi();})();</script>'
      + '<script>(function(){var docxPane=document.querySelector("[data-docx-pane]");var docxStage=document.querySelector("[data-docx-stage]");var docxContent=document.querySelector("[data-docx-content]");var prevBtn=document.querySelector("[data-docx-prev]");var nextBtn=document.querySelector("[data-docx-next]");var zoomOutBtn=document.querySelector("[data-docx-zoom-out]");var zoomInBtn=document.querySelector("[data-docx-zoom-in]");var fitBtn=document.querySelector("[data-docx-fit-width]");var pageNode=document.querySelector("[data-docx-page]");if(!docxPane||!docxStage||!docxContent||!prevBtn||!nextBtn||!zoomOutBtn||!zoomInBtn||!fitBtn||!pageNode){return;}var prevLabel=' + prevPageLabelJs + ';var nextLabel=' + nextPageLabelJs + ';var zoomInLabel=' + zoomInLabelJs + ';var zoomOutLabel=' + zoomOutLabelJs + ';var fitWidthLabel=' + fitWidthLabelJs + ';var pageTpl=' + pageLabelJs + ';var pageNum=1;var totalPages=1;var zoom=1;var syncing=false;function getPages(){var pages=[].slice.call(docxContent.querySelectorAll(".docx-wrapper .docx, .docx-wrapper section.docx, .docx-wrapper > section, section.docx"));if(!pages.length&&docxContent.children.length){pages=[docxContent];}return pages;}function pageText(){return pageTpl.replace(/\\{current\\}/g,String(pageNum)).replace(/\\{total\\}/g,String(totalPages));}function applyZoom(){var wrappers=[].slice.call(docxContent.querySelectorAll(".docx-wrapper"));if(!wrappers.length&&docxContent){wrappers=[docxContent];}wrappers.forEach(function(wrapper){wrapper.style.zoom=String(zoom);});}function refreshPagination(){var pages=getPages();totalPages=pages.length||1;if(pageNum<1){pageNum=1;}if(pageNum>totalPages){pageNum=totalPages;}prevBtn.disabled=pageNum<=1;nextBtn.disabled=pageNum>=totalPages;zoomInBtn.disabled=!totalPages;zoomOutBtn.disabled=!totalPages;fitBtn.disabled=!totalPages;pageNode.textContent=pageText();}function scrollToPage(target){var pages=getPages();if(!pages.length)return;var next=Math.max(1,Math.min(totalPages,target));var node=pages[next-1];if(!node)return;syncing=true;docxStage.scrollTop=Math.max(0,node.offsetTop-8);setTimeout(function(){syncing=false;},80);pageNum=next;refreshPagination();}function updateFromScroll(){if(syncing)return;var pages=getPages();if(!pages.length)return;var probe=docxStage.scrollTop+Math.max(12,docxStage.clientHeight*0.35);var current=1;for(var i=0;i<pages.length;i+=1){if(pages[i].offsetTop<=probe){current=i+1;}else{break;}}if(current!==pageNum){pageNum=current;refreshPagination();}}function fitToWidth(){var pages=getPages();if(!pages.length)return;var baseWidth=pages[0].offsetWidth||0;if(!baseWidth){return;}var available=docxStage.clientWidth-24;var nextZoom=available>0?available/baseWidth:1;zoom=Math.max(0.4,Math.min(5,nextZoom));applyZoom();refreshPagination();}prevBtn.title=prevLabel;prevBtn.setAttribute("aria-label",prevLabel);nextBtn.title=nextLabel;nextBtn.setAttribute("aria-label",nextLabel);zoomInBtn.title=zoomInLabel;zoomInBtn.setAttribute("aria-label",zoomInLabel);zoomOutBtn.title=zoomOutLabel;zoomOutBtn.setAttribute("aria-label",zoomOutLabel);fitBtn.title=fitWidthLabel;fitBtn.setAttribute("aria-label",fitWidthLabel);prevBtn.addEventListener("click",function(){if(pageNum<=1)return;scrollToPage(pageNum-1);});nextBtn.addEventListener("click",function(){if(pageNum>=totalPages)return;scrollToPage(pageNum+1);});zoomInBtn.addEventListener("click",function(){zoom=Math.min(5,zoom+0.1);applyZoom();refreshPagination();});zoomOutBtn.addEventListener("click",function(){zoom=Math.max(0.4,zoom-0.1);applyZoom();refreshPagination();});fitBtn.addEventListener("click",function(){fitToWidth();});docxStage.addEventListener("scroll",function(){updateFromScroll();});var observerTimer=0;var observer=new MutationObserver(function(){if(observerTimer){clearTimeout(observerTimer);}observerTimer=setTimeout(function(){pageNum=1;applyZoom();refreshPagination();scrollToPage(1);},40);});observer.observe(docxContent,{childList:true,subtree:true});refreshPagination();})();</script>'
      + '</body></html>';
  }

  function buildDocumentIndexHtml(documentPaths, selectedPath, allowDownload) {
    var pageLang = normalizeLang(currentLang);
    var strings = getDocumentViewerStrings();
    var docs = mapDocumentEntries(documentPaths);
    if (!docs.length) {
      return '<!doctype html><html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"></head><body></body></html>';
    }
    var selectedDoc = docs.find(function (doc) { return doc.path === selectedPath; }) || docs[0];
    if (docs.length <= 1) {
      if (selectedDoc.type === 'pdf') {
        return buildSinglePdfDocumentHtml(selectedDoc, pageLang, strings, allowDownload);
      }
      // Reuse the multi-document viewer for a single DOCX to avoid
      // the blank-render edge case seen in the single-DOCX template.
      return buildMultiDocumentIndexHtml(docs, selectedDoc, pageLang, strings, allowDownload);
    }
    return buildMultiDocumentIndexHtml(docs, selectedDoc, pageLang, strings, allowDownload);
  }

  function getFolderViewerStrings() {
    return {
      title: t('folderViewer.title') || 'Explorador de archivos',
      subtitle: t('folderViewer.subtitle') || 'Abre o descarga archivos individuales y selecciones múltiples.',
      searchPlaceholder: t('folderViewer.searchPlaceholder') || 'Buscar archivos...',
      downloadAll: t('folderViewer.downloadAll') || 'Descargar todo',
      searchResults: t('folderViewer.searchResults') || 'Resultados de búsqueda',
      selectAll: t('folderViewer.selectAll') || 'Seleccionar visibles',
      clearSelection: t('folderViewer.clearSelection') || 'Limpiar selección',
      openSelected: t('folderViewer.openSelected') || 'Abrir seleccionados',
      downloadSelected: t('folderViewer.downloadSelected') || 'Descargar selección',
      downloadVisible: t('folderViewer.downloadVisible') || 'Descargar lista visible',
      noResults: t('folderViewer.noResults') || 'No hay archivos para mostrar.',
      selectedCount: t('folderViewer.selectedCount') || '{count} seleccionados',
      openFile: t('folderViewer.openFile') || 'Abrir archivo',
      downloadFile: t('folderViewer.downloadFile') || 'Descargar archivo',
      preparingFolder: t('folderViewer.preparingFolder') || 'Preparando carpeta...',
      folderReady: t('folderViewer.folderReady') || 'Carpeta exportada.',
      folderFailed: t('folderViewer.folderFailed') || 'No se pudo exportar la carpeta.',
      preparingZip: t('folderViewer.preparingZip') || 'Preparando ZIP...',
      zipReady: t('folderViewer.zipReady') || 'ZIP preparado.',
      zipFailed: t('folderViewer.zipFailed') || 'No se pudo crear el ZIP.',
      contextOpen: t('folderViewer.contextOpen') || 'Abrir',
      contextDownload: t('folderViewer.contextDownload') || 'Descargar',
      contextDownloadVisible: t('folderViewer.contextDownloadVisible') || 'Descargar lista visible',
      folder: t('folderViewer.folder') || 'Carpeta',
      filesWord: t('folderViewer.filesWord') || 'archivos',
      restrictionTitle: t('restrictionModal.title') || 'Acceso restringido',
      restrictionBody: t('restrictionModal.body') || 'Este recurso no está disponible en este momento.',
      restrictionStartLabel: t('settings.restrictStart') || 'Inicio',
      restrictionEndLabel: t('settings.restrictEnd') || 'Fin',
      restrictionNoEnd: t('restrictionModal.rangeNoEnd') || 'Sin fecha de fin',
      restrictionCountdown: t('restrictionModal.countdown') || 'Tiempo restante: {time}'
    };
  }

  function isHelperViewerPath(path) {
    var lower = (path || '').toLowerCase();
    return lower === '__vwz_meta.json'
      || lower === '__vwz_viewer.json'
      || lower.indexOf('__vwz_docs_index') === 0
      || lower.indexOf('__vwz_folder_index') === 0
      || lower.indexOf('__vwz_h5p_index') === 0
      || lower.indexOf('__vwz_h5p/') === 0;
  }

  function mapFolderFileEntries(files) {
    return (files || [])
      .filter(function (file) {
        return file && file.path && !isHelperViewerPath(file.path);
      })
      .map(function (file) {
        var path = String(file.path || '');
        var segments = path.split('/');
        return {
          path: path,
          href: encodePathForHref(path),
          name: segments[segments.length - 1] || path,
          size: Number(file.size) || 0,
          type: String(file.type || '').toLowerCase()
        };
      });
  }

  function buildFolderIndexHtml(fileEntries, allowDownload, restrictions) {
    var pageLang = normalizeLang(currentLang);
    var strings = getFolderViewerStrings();
    var filesJson = JSON.stringify(fileEntries || []);
    var stringsJson = JSON.stringify(strings || {});
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    var restrictionsJson = JSON.stringify(restrictions || null);
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
      + '<title>' + escapeHtml(strings.title) + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#ffffff;--surface-soft:#f5f8ff;--surface-strong:#ecf2ff;--ink:#0f172a;--ink-muted:#4b5563;--border:#d8e2f1;--accent:#2563eb;--accent-2:#0ea5e9;--ok:#059669}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:linear-gradient(140deg,#e9f0ff,#eef8ff 45%,#f6fbff);color:var(--ink)}'
      + '.shell{max-width:1200px;margin:0 auto;padding:14px;display:grid;gap:10px}'
      + '.topbar{background:var(--surface);border:1px solid var(--border);border-radius:15px;padding:10px 12px;box-shadow:0 10px 24px rgba(15,23,42,.06);display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap}'
      + '.title{display:flex;align-items:center;gap:8px;font-weight:700}.title .icon{color:var(--accent)}'
      + '.toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}'
      + '.search{min-width:220px;flex:1;display:flex;align-items:center;gap:8px;background:var(--surface-soft);border:1px solid var(--border);border-radius:11px;padding:7px 10px}'
      + '.search input{border:0;background:transparent;outline:none;font:inherit;color:var(--ink);width:100%}'
      + '.btn-icon{width:36px;height:36px;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:10px;display:inline-grid;place-items:center;cursor:pointer}'
      + '.btn-icon:hover{border-color:#b7caf0;background:var(--surface-strong);color:var(--accent)}.btn-icon:disabled{opacity:.45;cursor:not-allowed}'
      + '.btn-download-all{height:36px;padding:0 12px;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:10px;font:inherit;font-weight:600;cursor:pointer;white-space:nowrap}'
      + '.btn-download-all:hover{border-color:#b7caf0;background:var(--surface-strong);color:var(--accent)}.btn-download-all:disabled{opacity:.45;cursor:not-allowed}'
      + '.btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent-2));border-color:transparent;color:#fff}.btn-primary:hover{background:linear-gradient(135deg,#1d4ed8,#0284c7);color:#fff}'
      + '.stats{font-size:.85rem;color:var(--ok);font-weight:600}'
      + '.restriction-banner{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border:1px solid #f5d0d0;background:#fff1f2;color:#7f1d1d;border-radius:13px;box-shadow:0 8px 20px rgba(127,29,29,.08)}'
      + '.restriction-banner[hidden]{display:none !important}.restriction-banner__icon{width:18px;height:18px;display:inline-grid;place-items:center;margin-top:2px}'
      + '.restriction-banner__icon svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}'
      + '.restriction-banner__title{font-weight:700}.restriction-banner__body{margin-top:2px;color:#991b1b}.restriction-banner__meta{margin-top:3px;color:#7f1d1d;font-size:.88rem}.restriction-banner__countdown{margin-top:3px;font-size:.88rem;color:#9a3412}'
      + '.layout{display:grid;grid-template-columns:minmax(220px,290px) 1fr;gap:10px;min-height:68vh}'
      + '.panel{background:var(--surface);border:1px solid var(--border);border-radius:15px;box-shadow:0 10px 24px rgba(15,23,42,.05);overflow:hidden}'
      + '.panel-head{padding:10px 12px;border-bottom:1px solid var(--border);font-size:.86rem;color:var(--ink-muted);font-weight:600}'
      + '.folders{max-height:68vh;overflow:auto;padding:8px}'
      + '.folder-item{width:100%;display:flex;align-items:center;gap:8px;border:1px solid transparent;background:transparent;color:var(--ink);border-radius:10px;padding:8px 9px;font:inherit;cursor:pointer;text-align:left}'
      + '.folder-item:hover{background:var(--surface-soft)}.folder-item.is-active{background:#e6efff;border-color:#bfd2f8;color:#1d4ed8}'
      + '.folder-item__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.folder-item__count{font-size:.75rem;color:var(--ink-muted)}'
      + '.folder-toggle{width:14px;height:14px;display:inline-grid;place-items:center;flex:0 0 auto;cursor:pointer;user-select:none;color:#64748b}'
      + '.folder-toggle svg{width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform .16s ease}'
      + '.folder-toggle.is-expanded svg{transform:rotate(90deg)}.folder-toggle.is-empty{visibility:hidden;cursor:default}'
      + '.files{max-height:68vh;overflow:auto;padding:8px;display:grid;gap:6px}'
      + '.file-row{display:grid;grid-template-columns:auto auto minmax(170px,1fr) auto auto auto;gap:8px;align-items:center;padding:8px;border-radius:10px;border:1px solid #eaf0fa;background:#fcfdff;cursor:pointer}'
      + '.file-row:hover{background:#f4f8ff;border-color:#d9e5fa}'
      + '.file-main{display:flex;align-items:center;gap:8px;min-width:0}.file-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
      + '.file-size{font-size:.82rem;color:var(--ink-muted)}'
      + '.icon{display:inline-grid;place-items:center;width:18px;height:18px;color:#334155}.icon svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}.icon img{width:16px;height:16px;display:block}'
      + '.icon--image{color:#0ea5e9}.icon--audio{color:#a855f7}.icon--video{color:#ef4444}.icon--archive{color:#f59e0b}.icon--code{color:#2563eb}.icon--doc{color:#0f766e}'
      + '.file-action{width:32px;height:32px;border:1px solid var(--border);background:var(--surface);border-radius:9px;display:inline-grid;place-items:center;cursor:pointer;color:var(--ink)}'
      + '.file-action svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.file-action:hover{background:var(--surface-strong);border-color:#b7caf0;color:var(--accent)}.file-action:disabled{opacity:.45;cursor:not-allowed}'
      + '.empty{padding:16px;color:var(--ink-muted);font-size:.92rem}'
      + '.ctx-menu{position:fixed;z-index:80;min-width:170px;background:#fff;border:1px solid var(--border);border-radius:10px;box-shadow:0 16px 30px rgba(15,23,42,.16);padding:6px;display:grid;gap:4px}'
      + '.ctx-menu[hidden]{display:none !important}.ctx-menu button{border:0;background:transparent;text-align:left;padding:8px 10px;border-radius:8px;font:inherit;color:var(--ink);cursor:pointer}'
      + '.ctx-menu button:hover{background:var(--surface-soft);color:var(--accent)}.ctx-menu button:disabled{opacity:.5;cursor:not-allowed}'
      + '@media (max-width:920px){.layout{grid-template-columns:1fr}.folders{max-height:240px}.file-row{grid-template-columns:auto auto minmax(110px,1fr) auto auto}.file-size{display:none}}'
      + '</style></head><body>'
      + '<main class="shell">'
      + '<section class="topbar">'
      + '<div class="title"><span class="icon" data-title-icon></span><span data-title></span></div>'
      + '<div class="toolbar">'
      + '<label class="search"><span class="icon" data-search-icon></span><input type="search" data-filter></label>'
      + '<button type="button" class="btn-download-all" data-download-selected hidden>Descargar selección</button>'
      + '<button type="button" class="btn-download-all" data-download-all>Descargar todo</button>'
      + '</div>'
      + '<div class="stats" data-selected-note></div>'
      + '</section>'
      + '<section class="restriction-banner" data-restriction-banner hidden><span class="restriction-banner__icon" data-restriction-icon></span><div><div class="restriction-banner__title" data-restriction-title></div><div class="restriction-banner__body" data-restriction-body></div><div class="restriction-banner__meta" data-restriction-meta hidden></div><div class="restriction-banner__countdown" data-restriction-countdown hidden></div></div></section>'
      + '<section class="layout">'
      + '<aside class="panel"><div class="panel-head"><span data-subtitle></span></div><div class="folders" data-folder-tree></div></aside>'
      + '<section class="panel"><div class="panel-head"><span data-current-folder></span></div><div class="files" data-file-list></div></section>'
      + '</section>'
      + '</main>'
      + '<div class="ctx-menu" data-ctx-menu hidden><button type="button" data-ctx-open></button><button type="button" data-ctx-download></button><button type="button" data-ctx-download-visible></button></div>'
      + '<script src="https://unpkg.com/fflate@0.8.2/umd/index.js"></script>'
      + '<script>(function(){'
      + 'var files=' + filesJson + ';var labels=' + stringsJson + ';var allowDownload=' + allowDownloadJs + ';var embeddedRestrictions=' + restrictionsJson + ';'
      + 'var titleNode=document.querySelector("[data-title]");var subtitleNode=document.querySelector("[data-subtitle]");var filterInput=document.querySelector("[data-filter]");'
      + 'var folderTreeNode=document.querySelector("[data-folder-tree]");var fileListNode=document.querySelector("[data-file-list]");var currentFolderNode=document.querySelector("[data-current-folder]");'
      + 'var titleIconNode=document.querySelector("[data-title-icon]");var searchIconNode=document.querySelector("[data-search-icon]");'
      + 'var downloadAllBtn=document.querySelector("[data-download-all]");var downloadSelectedBtn=document.querySelector("[data-download-selected]");var selectedNote=document.querySelector("[data-selected-note]");'
      + 'var ctxMenu=document.querySelector("[data-ctx-menu]");var ctxOpenBtn=document.querySelector("[data-ctx-open]");var ctxDownloadBtn=document.querySelector("[data-ctx-download]");var ctxDownloadVisibleBtn=document.querySelector("[data-ctx-download-visible]");var ctxFile=null;'
      + 'var restrictionBanner=document.querySelector("[data-restriction-banner]");var restrictionIcon=document.querySelector("[data-restriction-icon]");var restrictionTitle=document.querySelector("[data-restriction-title]");var restrictionBody=document.querySelector("[data-restriction-body]");var restrictionMeta=document.querySelector("[data-restriction-meta]");var restrictionCountdown=document.querySelector("[data-restriction-countdown]");'
      + 'var currentRestrictions=null;var restrictionCountdownTimer=null;var restrictionUnlockTimer=null;var restrictionLiveEndTimer=null;var restrictionLocked=false;'
      + 'if(titleNode)titleNode.textContent=labels.title||"";if(subtitleNode)subtitleNode.textContent=labels.subtitle||"";if(filterInput)filterInput.placeholder=labels.searchPlaceholder||"";'
      + 'var iFolder="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H3z\\"></path><path d=\\"M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\"></path></svg>";'
      + 'var iSearch="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"7\\"></circle><path d=\\"m20 20-3.5-3.5\\"></path></svg>";'
      + 'var iOpen="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M14 3h7v7\\"></path><path d=\\"M10 14 21 3\\"></path><path d=\\"M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5\\"></path></svg>";'
      + 'var iDownload="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" fill=\\"none\\" stroke-width=\\"2\\"><path d=\\"M12 3v10\\"></path><path d=\\"M7 9l5 5 5-5\\"></path><path d=\\"M5 21h14\\"></path></svg>";'
      + 'var iAlert="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\"></path><line x1=\\"12\\" y1=\\"9\\" x2=\\"12\\" y2=\\"13\\"></line><line x1=\\"12\\" y1=\\"17\\" x2=\\"12.01\\" y2=\\"17\\"></line></svg>";'
      + 'var iChevron="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"m9 18 6-6-6-6\\"></path></svg>";'
      + 'if(titleIconNode)titleIconNode.innerHTML=iFolder;if(searchIconNode)searchIconNode.innerHTML=iSearch;'
      + 'if(restrictionIcon)restrictionIcon.innerHTML=iAlert;'
      + 'if(downloadAllBtn){downloadAllBtn.textContent=labels.downloadAll||"Descargar todo";downloadAllBtn.setAttribute("aria-label",labels.downloadAll||"Descargar todo");downloadAllBtn.title=labels.downloadAll||"Descargar todo";}'
      + 'if(downloadSelectedBtn){downloadSelectedBtn.textContent=labels.downloadSelected||"Descargar selección";downloadSelectedBtn.setAttribute("aria-label",labels.downloadSelected||"Descargar selección");downloadSelectedBtn.title=labels.downloadSelected||"Descargar selección";downloadSelectedBtn.classList.add("btn-primary");}'
      + 'if(ctxOpenBtn)ctxOpenBtn.textContent=labels.contextOpen||labels.openFile||"Abrir";if(ctxDownloadBtn)ctxDownloadBtn.textContent=labels.contextDownload||labels.downloadFile||"Descargar";if(ctxDownloadVisibleBtn)ctxDownloadVisibleBtn.textContent=labels.contextDownloadVisible||labels.downloadVisible||"Descargar visibles";'
      + 'if(!allowDownload){if(downloadAllBtn)downloadAllBtn.disabled=true;}'
      + 'var folderIcon=iFolder;'
      + 'var fileIcon="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"></path><path d=\\"M14 2v6h6\\"></path></svg>";'
      + 'var imageIcon="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"></rect><circle cx=\\"9\\" cy=\\"9\\" r=\\"2\\"></circle><path d=\\"m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21\\"></path></svg>";'
      + 'var audioIcon="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M11 5 6 9H3v6h3l5 4z\\"></path><path d=\\"M15.5 8.5a5 5 0 0 1 0 7\\"></path><path d=\\"M18.5 6a9 9 0 0 1 0 12\\"></path></svg>";'
      + 'var videoIcon="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"m22 8-6 4 6 4V8Z\\"></path><rect x=\\"2\\" y=\\"6\\" width=\\"14\\" height=\\"12\\" rx=\\"2\\" ry=\\"2\\"></rect></svg>";'
      + 'var archiveIcon="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"4\\" rx=\\"1\\"></rect><path d=\\"M5 7v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7\\"></path><path d=\\"M10 12h4\\"></path></svg>";'
      + 'var codeIcon="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"m16 18 6-6-6-6\\"></path><path d=\\"m8 6-6 6 6 6\\"></path></svg>";'
      + 'var elpxIcon=archiveIcon;'
      + 'function iconKind(file){var name=(file&&file.path?file.path:"").toLowerCase();if(/\\.(png|jpe?g|gif|webp|svg|bmp|ico)$/i.test(name))return"image";if(/\\.(mp3|wav|ogg|m4a|flac|aac)$/i.test(name))return"audio";if(/\\.(mp4|webm|mov|avi|mkv)$/i.test(name))return"video";if(/\\.(zip|elpx|h5p|rar|7z|tar|gz|bz2)$/i.test(name))return"archive";if(/\\.(html?|css|js|mjs|json|xml|csv|md|txt)$/i.test(name))return"code";return"doc";}'
      + 'function iconForKind(kind){if(kind==="image")return imageIcon;if(kind==="audio")return audioIcon;if(kind==="video")return videoIcon;if(kind==="archive")return archiveIcon;if(kind==="code")return codeIcon;return fileIcon;}'
      + 'function formatBytes(bytes){var size=Number(bytes)||0;if(!size)return"0 B";var units=["B","KB","MB","GB","TB"];var idx=0;var value=size;while(value>=1024&&idx<units.length-1){value/=1024;idx+=1;}var fixed=value>=10||idx===0?0:1;return value.toFixed(fixed)+" "+units[idx];}'
      + 'function formatDateTime(ts){var date=new Date(ts);if(isNaN(date.getTime()))return"";try{return date.toLocaleString();}catch(e){return date.toISOString();}}'
      + 'function formatCountdown(ms){var total=Math.max(0,Math.ceil(ms/1000));var d=Math.floor(total/86400);var rem=total%86400;var h=Math.floor(rem/3600);var m=Math.floor((rem%3600)/60);var s=rem%60;var pad=function(n){return(n<10?"0":"")+n;};var base=pad(h)+":"+pad(m)+":"+pad(s);return d>0?(String(d)+"d "+base):base;}'
      + 'function parseRestrictionsDate(value){if(!value)return NaN;var ts=Date.parse(value);return isNaN(ts)?NaN:ts;}'
      + 'function evaluateRestrictions(){if(!currentRestrictions||!currentRestrictions.enabled)return{allowed:true};var now=Date.now();var start=parseRestrictionsDate(currentRestrictions.startAt);if(!isNaN(start)&&now<start)return{allowed:false,reason:"before",at:start};if(!currentRestrictions.neverExpires){var end=parseRestrictionsDate(currentRestrictions.endAt);if(!isNaN(end)&&now>end)return{allowed:false,reason:"after",at:end};return{allowed:true,end:end};}return{allowed:true};}'
      + 'function setRestrictionLock(locked){restrictionLocked=!!locked;if(filterInput)filterInput.disabled=restrictionLocked;if(downloadAllBtn)downloadAllBtn.disabled=restrictionLocked||!allowDownload;if(downloadSelectedBtn)downloadSelectedBtn.disabled=restrictionLocked||!allowDownload;}'
      + 'function clearRestrictionTimers(){if(restrictionCountdownTimer){clearInterval(restrictionCountdownTimer);restrictionCountdownTimer=null;}if(restrictionUnlockTimer){clearTimeout(restrictionUnlockTimer);restrictionUnlockTimer=null;}if(restrictionLiveEndTimer){clearTimeout(restrictionLiveEndTimer);restrictionLiveEndTimer=null;}}'
      + 'function showRestrictionBanner(state){if(!restrictionBanner)return;if(restrictionTitle)restrictionTitle.textContent=labels.restrictionTitle||"Acceso restringido";if(restrictionBody)restrictionBody.textContent=labels.restrictionBody||"Este recurso no está disponible en este momento.";if(restrictionMeta){var metaLabel=state&&state.reason==="before"?(labels.restrictionStartLabel||"Inicio"):(labels.restrictionEndLabel||"Fin");var metaDate=state&&state.at?formatDateTime(state.at):"";restrictionMeta.textContent=metaDate?(metaLabel+": "+metaDate):"";if(metaDate)restrictionMeta.removeAttribute("hidden");else restrictionMeta.setAttribute("hidden","");}if(restrictionCountdown){restrictionCountdown.textContent="";restrictionCountdown.setAttribute("hidden","");}restrictionBanner.removeAttribute("hidden");}'
      + 'function hideRestrictionBanner(){if(!restrictionBanner)return;restrictionBanner.setAttribute("hidden","");if(restrictionMeta){restrictionMeta.textContent="";restrictionMeta.setAttribute("hidden","");}if(restrictionCountdown){restrictionCountdown.textContent="";restrictionCountdown.setAttribute("hidden","");}}'
      + 'function scheduleRestrictionTimers(state){clearRestrictionTimers();if(!currentRestrictions||!currentRestrictions.enabled)return;if(state&&state.reason==="before"&&state.at){var delay=Math.max(0,state.at-Date.now())+250;restrictionUnlockTimer=setTimeout(function(){applyRestrictionState();},delay);restrictionCountdownTimer=setInterval(function(){var left=state.at-Date.now();if(left<=0){clearRestrictionTimers();applyRestrictionState();return;}if(restrictionCountdown){restrictionCountdown.textContent=(labels.restrictionCountdown||"Tiempo restante: {time}").replace(/\\{time\\}/g,formatCountdown(left));restrictionCountdown.removeAttribute("hidden");}},1000);}if(state&&state.allowed&&currentRestrictions.enforceEndDuringView&&!currentRestrictions.neverExpires&&state.end&&!isNaN(state.end)){var liveDelay=state.end-Date.now();if(liveDelay<=0){applyRestrictionState();}else{restrictionLiveEndTimer=setTimeout(function(){applyRestrictionState();},liveDelay+250);}}}'
      + 'function applyRestrictionState(){var wasLocked=restrictionLocked;var state=evaluateRestrictions();if(!state.allowed){setRestrictionLock(true);showRestrictionBanner(state);hideContextMenu();if(folderTreeNode)folderTreeNode.innerHTML="";if(fileListNode)fileListNode.innerHTML="";if(currentFolderNode)currentFolderNode.textContent="/";if(selectedNote)selectedNote.textContent="";scheduleRestrictionTimers(state);return false;}setRestrictionLock(false);hideRestrictionBanner();scheduleRestrictionTimers(state);if(wasLocked){renderFolders();renderFiles();}return true;}'
      + 'function buildTree(list){var root={name:"",path:"",folders:{},files:[]};list.forEach(function(file){var parts=String(file.path||"").split("/").filter(Boolean);if(!parts.length)return;var node=root;for(var i=0;i<parts.length-1;i+=1){var folderName=parts[i];if(!node.folders[folderName]){var nextPath=node.path?node.path+"/"+folderName:folderName;node.folders[folderName]={name:folderName,path:nextPath,folders:{},files:[]};}node=node.folders[folderName];}node.files.push(file);});return root;}'
      + 'function flattenFileCount(node){var count=(node.files||[]).length;Object.keys(node.folders||{}).forEach(function(key){count+=flattenFileCount(node.folders[key]);});return count;}'
      + 'function getNodeByPath(root,path){if(!path)return root;var parts=String(path).split("/").filter(Boolean);var node=root;for(var i=0;i<parts.length;i+=1){if(!node.folders[parts[i]])return null;node=node.folders[parts[i]];}return node;}'
      + 'function isExpanded(path){if(!path)return true;if(!Object.prototype.hasOwnProperty.call(expandedFolders,path)){expandedFolders[path]=true;}return !!expandedFolders[path];}'
      + 'function collectFolderRows(node,depth,rows){var keys=Object.keys(node.folders||{}).sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true,sensitivity:"base"});});var path=node.path||"";var expanded=isExpanded(path);rows.push({path:path,name:path?node.name:"/",count:flattenFileCount(node),depth:depth,hasChildren:keys.length>0,expanded:expanded});if(path&&!expanded)return;keys.forEach(function(key){collectFolderRows(node.folders[key],depth+1,rows);});}'
      + 'function isArchivePath(path){return /\\.(zip|elpx|h5p)$/i.test(String(path||""));}'
      + 'function mimeFromPath(path){var lower=String(path||"").toLowerCase();if(/\\.pdf$/i.test(lower))return"application/pdf";if(/\\.docx$/i.test(lower))return"application/vnd.openxmlformats-officedocument.wordprocessingml.document";if(/\\.(zip|elpx|h5p)$/i.test(lower))return"application/zip";if(/\\.(html?|svg|xml)$/i.test(lower))return"text/html";if(/\\.(txt|md|csv|json|js|css)$/i.test(lower))return"text/plain";if(/\\.(png)$/i.test(lower))return"image/png";if(/\\.(jpe?g)$/i.test(lower))return"image/jpeg";if(/\\.(gif)$/i.test(lower))return"image/gif";if(/\\.(webp)$/i.test(lower))return"image/webp";if(/\\.(mp3)$/i.test(lower))return"audio/mpeg";if(/\\.(wav)$/i.test(lower))return"audio/wav";if(/\\.(ogg)$/i.test(lower))return"audio/ogg";if(/\\.(mp4)$/i.test(lower))return"video/mp4";if(/\\.(webm)$/i.test(lower))return"video/webm";return"application/octet-stream";}'
      + 'function buildArchiveExplorerHtml(entries,title){return "";}'
      + 'function openArchiveFile(file){if(!file||!file.href)return;triggerDownload(file);}'
      + 'function canOpen(file){var lower=String(file.path||"").toLowerCase();return /\\.(html?|pdf|txt|md|json|xml|csv|svg|png|jpe?g|gif|webp|mp3|wav|ogg|mp4|webm)$/i.test(lower);}'
      + 'function triggerDownloadDirect(file){if(!file||!file.href)return;var a=document.createElement("a");a.href=file.href;a.download=file.name||"";a.rel="noopener";document.body.appendChild(a);a.click();document.body.removeChild(a);}'
      + 'function triggerDownload(file,forceDirect){if(restrictionLocked||!allowDownload||!file||!file.href)return;var direct=!!forceDirect;if(!direct&&window.showSaveFilePicker){fetch(file.href,{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("fetch");return r.blob();}).then(function(blob){return window.showSaveFilePicker({suggestedName:file.name||"archivo"}).then(function(handle){return handle.createWritable().then(function(writable){return writable.write(blob).then(function(){return writable.close();});});});}).catch(function(err){if(err&&err.name==="AbortError")return;triggerDownloadDirect(file);});return;}triggerDownloadDirect(file);}'
      + 'function fallbackDownloadBatch(list){(list||[]).forEach(function(file,index){setTimeout(function(){triggerDownload(file,true);},index*120);});}'
      + 'function sanitizeZipName(value){var clean=String(value||"archivos").replace(/[\\\\/:*?\\"<>|]/g," ").replace(/\\s+/g," ").trim();clean=clean.replace(/\\.+$/,"").trim();if(!clean)clean="archivos";return clean;}'
      + 'function folderFilesForDownload(){var query=((filterInput&&filterInput.value)||"").toLowerCase().trim();if(query){return visibleFiles();}if(!activeFolderPath){return files.slice();}var prefix=activeFolderPath.replace(/^\\/+|\\/+$/g,"");if(!prefix){return files.slice();}prefix=prefix+"/";return files.filter(function(file){var p=String(file.path||"");return p.indexOf(prefix)===0;});}'
      + 'function detectSharedTopFolder(list){var top=null;for(var i=0;i<(list||[]).length;i+=1){var file=list[i]||{};var parts=String(file.path||"").split("/").filter(Boolean);if(!parts.length)return"";if(top===null){top=parts[0];}else if(top!==parts[0]){return"";}}return top||"";}'
      + 'function stripTopFolder(entries,topFolder){if(!topFolder)return entries||[];var prefix=topFolder+"/";return (entries||[]).map(function(entry){var currentPath=String(entry&&entry.path||"");if(currentPath.indexOf(prefix)!==0){return entry;}return{path:currentPath.slice(prefix.length),data:entry.data,file:entry.file};});}'
      + 'function downloadAsZip(entries,baseName){if(!window.fflate||!window.fflate.zipSync){fallbackDownloadBatch(entries.map(function(e){return e.file;}));return Promise.resolve();}var payload={};entries.forEach(function(entry){if(entry&&entry.path)payload[entry.path]=entry.data;});var names=Object.keys(payload);if(!names.length){return Promise.resolve();}var zipped=window.fflate.zipSync(payload);var blob=new Blob([zipped],{type:"application/zip"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=sanitizeZipName(baseName)+".zip";a.rel="noopener";document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(function(){URL.revokeObjectURL(a.href);},1000);return Promise.resolve();}'
      + 'function writeEntriesToDirectory(rootHandle,entries){var chain=Promise.resolve();entries.forEach(function(entry){chain=chain.then(function(){var parts=String(entry.path||"").split("/").filter(Boolean);if(!parts.length)return;var fileName=parts.pop();var dirPromise=Promise.resolve(rootHandle);parts.forEach(function(part){dirPromise=dirPromise.then(function(handle){return handle.getDirectoryHandle(part,{create:true});});});return dirPromise.then(function(dir){return dir.getFileHandle(fileName,{create:true});}).then(function(fileHandle){return fileHandle.createWritable();}).then(function(writable){return writable.write(entry.data).then(function(){return writable.close();});});});});return chain;}'
      + 'function triggerDownloadBatch(list,kind,baseOverride,stripPrefix){if(restrictionLocked||!allowDownload||!list||!list.length)return;if(list.length===1){triggerDownload(list[0]);return;}var source=(list||[]).slice();var sharedTop=kind==="all"?detectSharedTopFolder(source):"";var folderName=activeFolderPath?activeFolderPath.split("/").pop():"carpeta";var base=(baseOverride||(kind==="all"&&sharedTop?sharedTop:(kind==="selected"?"seleccion":folderName)))||"archivos";var tasks=source.map(function(file){return fetch(file.href,{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){return{path:file.path,data:new Uint8Array(buffer),file:file};});});if(window.showDirectoryPicker){if(selectedNote){selectedNote.textContent=labels.preparingFolder||"Preparando carpeta...";}window.showDirectoryPicker({mode:"readwrite"}).then(function(root){return root.getDirectoryHandle(sanitizeZipName(base),{create:true});}).then(function(target){return Promise.all(tasks).then(function(entries){var exportEntries=stripPrefix?stripTopFolder(entries,stripPrefix):(kind==="all"&&sharedTop?stripTopFolder(entries,sharedTop):entries);return writeEntriesToDirectory(target,exportEntries);});}).then(function(){if(selectedNote){selectedNote.textContent=labels.folderReady||"Carpeta exportada.";}updateSelectedState();}).catch(function(err){if(err&&err.name==="AbortError"){updateSelectedState();return;}if(selectedNote){selectedNote.textContent=labels.folderFailed||"No se pudo exportar la carpeta.";}Promise.all(tasks).then(function(entries){if(selectedNote){selectedNote.textContent=labels.preparingZip||"Preparando ZIP...";}var exportEntries=stripPrefix?stripTopFolder(entries,stripPrefix):(kind==="all"&&sharedTop?stripTopFolder(entries,sharedTop):entries);return downloadAsZip(exportEntries,base).then(function(){if(selectedNote){selectedNote.textContent=labels.zipReady||"ZIP preparado.";}updateSelectedState();});}).catch(function(){if(selectedNote){selectedNote.textContent=labels.zipFailed||"No se pudo crear el ZIP.";}fallbackDownloadBatch(source);updateSelectedState();});});return;}if(selectedNote){selectedNote.textContent=labels.preparingZip||"Preparando ZIP...";}Promise.all(tasks).then(function(entries){var exportEntries=stripPrefix?stripTopFolder(entries,stripPrefix):(kind==="all"&&sharedTop?stripTopFolder(entries,sharedTop):entries);return downloadAsZip(exportEntries,base).then(function(){if(selectedNote){selectedNote.textContent=labels.zipReady||"ZIP preparado.";}updateSelectedState();});}).catch(function(){if(selectedNote){selectedNote.textContent=labels.zipFailed||"No se pudo crear el ZIP.";}fallbackDownloadBatch(source);updateSelectedState();});}'
      + 'function openFile(file){if(restrictionLocked||!file||!file.href)return;window.open(file.href,"_blank","noopener");}'
      + 'function filesInFolder(path){if(!path)return files.slice();var prefix=String(path||"").replace(/^\\/+|\\/+$/g,"");if(!prefix)return files.slice();prefix=prefix+"/";return files.filter(function(file){var p=String(file.path||"");return p.indexOf(prefix)===0;});}'
      + 'function selectedEntries(){var fileChecks=[].slice.call(document.querySelectorAll("[data-file-check]:checked"));var folderChecks=[].slice.call(document.querySelectorAll("[data-folder-check]:checked"));var byPath={};files.forEach(function(f){byPath[f.path]=f;});var selectedFilesList=fileChecks.map(function(node){return byPath[node.getAttribute("data-file-check")]||null;}).filter(Boolean);var selectedFolders=folderChecks.map(function(node){return String(node.getAttribute("data-folder-check")||"");}).filter(Boolean);return{files:selectedFilesList,folders:selectedFolders};}'
      + 'function selectedDownloadFiles(){var selected=selectedEntries();var map={};selected.files.forEach(function(file){map[file.path]=file;});selected.folders.forEach(function(path){filesInFolder(path).forEach(function(file){map[file.path]=file;});});return Object.keys(map).map(function(path){return map[path];});}'
      + 'function hideContextMenu(){if(ctxMenu)ctxMenu.setAttribute("hidden","");ctxFile=null;}'
      + 'function showContextMenu(x,y,file){if(!ctxMenu||restrictionLocked)return;ctxFile=file||null;if(ctxOpenBtn)ctxOpenBtn.disabled=!ctxFile||!canOpen(ctxFile);if(ctxDownloadBtn)ctxDownloadBtn.disabled=!allowDownload||!ctxFile;if(ctxDownloadVisibleBtn)ctxDownloadVisibleBtn.disabled=!allowDownload;ctxMenu.style.left=Math.max(8,Math.floor(x))+"px";ctxMenu.style.top=Math.max(8,Math.floor(y))+"px";ctxMenu.removeAttribute("hidden");}'
      + 'function updateSelectedState(){var selected=selectedEntries();var count=selected.files.length+selected.folders.length;var text=(labels.selectedCount||"{count} seleccionados").replace(/\\{count\\}/g,String(count));if(selectedNote)selectedNote.textContent=text;if(downloadSelectedBtn){var show=allowDownload&&!restrictionLocked&&count>1;downloadSelectedBtn.hidden=!show;downloadSelectedBtn.disabled=!show;}}'
      + 'var root=buildTree(files);var activeFolderPath="";var expandedFolders={};'
      + 'function visibleFiles(){var query=((filterInput&&filterInput.value)||"").toLowerCase().trim();if(query){return files.filter(function(file){var hay=(String(file.name||"")+" "+String(file.path||"")).toLowerCase();return hay.indexOf(query)!==-1;});}var node=getNodeByPath(root,activeFolderPath)||root;return (node.files||[]).slice();}'
      + 'function visibleFolders(){var query=((filterInput&&filterInput.value)||"").toLowerCase().trim();if(query){return [];}var node=getNodeByPath(root,activeFolderPath)||root;return Object.keys(node.folders||{}).map(function(key){return node.folders[key];});}'
      + 'function renderFolders(){if(!folderTreeNode||restrictionLocked)return;folderTreeNode.innerHTML="";var rows=[];collectFolderRows(root,0,rows);rows.forEach(function(row){var btn=document.createElement("button");btn.type="button";btn.className="folder-item"+(row.path===activeFolderPath?" is-active":"");btn.style.paddingLeft=(9+row.depth*14)+"px";btn.setAttribute("data-folder-path",row.path);var toggle=document.createElement("span");toggle.className="folder-toggle"+(row.hasChildren?(row.expanded?" is-expanded":""):" is-empty");if(row.hasChildren){toggle.innerHTML=iChevron;toggle.addEventListener("click",function(ev){ev.stopPropagation();expandedFolders[row.path]=!row.expanded;renderFolders();});}var icon=document.createElement("span");icon.className="icon";icon.innerHTML=folderIcon;var name=document.createElement("span");name.className="folder-item__name";name.textContent=row.name;var count=document.createElement("span");count.className="folder-item__count";count.textContent=String(row.count);btn.appendChild(toggle);btn.appendChild(icon);btn.appendChild(name);btn.appendChild(count);btn.addEventListener("click",function(){activeFolderPath=row.path;renderFolders();renderFiles();});folderTreeNode.appendChild(btn);});}'
      + 'function renderFiles(){if(!fileListNode||restrictionLocked)return;var folders=visibleFolders().sort(function(a,b){return String(a.name||"").localeCompare(String(b.name||""),undefined,{numeric:true,sensitivity:"base"});});var rows=visibleFiles().sort(function(a,b){return String(a.name||"").localeCompare(String(b.name||""),undefined,{numeric:true,sensitivity:"base"});});fileListNode.innerHTML="";var query=((filterInput&&filterInput.value)||"").toLowerCase().trim();if(currentFolderNode){currentFolderNode.textContent=query?(labels.searchResults||"Resultados de búsqueda"):(activeFolderPath||"/");}if(!folders.length&&!rows.length){var empty=document.createElement("p");empty.className="empty";empty.textContent=labels.noResults||"";fileListNode.appendChild(empty);updateSelectedState();return;}folders.forEach(function(folder){var row=document.createElement("div");row.className="file-row";var check=document.createElement("input");check.type="checkbox";check.setAttribute("data-folder-check",folder.path);check.addEventListener("click",function(ev){ev.stopPropagation();});check.addEventListener("change",updateSelectedState);var fileType=document.createElement("span");fileType.className="icon";fileType.innerHTML=folderIcon;var fileMain=document.createElement("div");fileMain.className="file-main";var name=document.createElement("span");name.className="file-name";name.textContent=(folder.name||folder.path);fileMain.appendChild(name);var size=document.createElement("span");size.className="file-size";size.textContent=String(filesInFolder(folder.path).length)+" "+(labels.filesWord||"archivos");var openBtn=document.createElement("button");openBtn.type="button";openBtn.className="file-action";openBtn.innerHTML=iOpen;openBtn.title=labels.folder||"Carpeta";openBtn.setAttribute("aria-label",labels.folder||"Carpeta");openBtn.addEventListener("click",function(ev){ev.stopPropagation();activeFolderPath=folder.path;renderFolders();renderFiles();});var downloadBtn=document.createElement("button");downloadBtn.type="button";downloadBtn.className="file-action";downloadBtn.innerHTML=iDownload;downloadBtn.title=labels.downloadFile||"Descargar";downloadBtn.setAttribute("aria-label",labels.downloadFile||"Descargar");downloadBtn.disabled=!allowDownload;downloadBtn.addEventListener("click",function(ev){ev.stopPropagation();var folderBase=(folder.name||String(folder.path||"").split("/").pop()||"carpeta");triggerDownloadBatch(filesInFolder(folder.path),"folder",folderBase,folder.path);});row.addEventListener("click",function(ev){if(ev.target&&ev.target.closest&&(ev.target.closest("button")||ev.target.closest("input")))return;check.checked=!check.checked;updateSelectedState();});row.addEventListener("dblclick",function(ev){if(ev.target&&ev.target.closest&&(ev.target.closest("button")||ev.target.closest("input")))return;activeFolderPath=folder.path;renderFolders();renderFiles();});row.appendChild(check);row.appendChild(fileType);row.appendChild(fileMain);row.appendChild(size);row.appendChild(openBtn);row.appendChild(downloadBtn);fileListNode.appendChild(row);});rows.forEach(function(file){var row=document.createElement("div");row.className="file-row";var check=document.createElement("input");check.type="checkbox";check.setAttribute("data-file-check",file.path);check.addEventListener("click",function(ev){ev.stopPropagation();});check.addEventListener("change",updateSelectedState);var kind=iconKind(file);var fileType=document.createElement("span");fileType.className="icon icon--"+kind;fileType.innerHTML=iconForKind(kind);var fileMain=document.createElement("div");fileMain.className="file-main";var name=document.createElement("span");name.className="file-name";name.textContent=file.name||file.path;fileMain.appendChild(name);var size=document.createElement("span");size.className="file-size";size.textContent=formatBytes(file.size);var openBtn=document.createElement("button");openBtn.type="button";openBtn.className="file-action";openBtn.innerHTML=iOpen;openBtn.title=labels.openFile||"Abrir";openBtn.setAttribute("aria-label",labels.openFile||"Abrir");openBtn.disabled=!canOpen(file);openBtn.addEventListener("click",function(ev){ev.stopPropagation();openFile(file);});var downloadBtn=document.createElement("button");downloadBtn.type="button";downloadBtn.className="file-action";downloadBtn.innerHTML=iDownload;downloadBtn.title=labels.downloadFile||"Descargar";downloadBtn.setAttribute("aria-label",labels.downloadFile||"Descargar");downloadBtn.disabled=!allowDownload;downloadBtn.addEventListener("click",function(ev){ev.stopPropagation();triggerDownload(file);});row.addEventListener("click",function(ev){if(ev.target&&ev.target.closest&&(ev.target.closest("button")||ev.target.closest("input")))return;check.checked=!check.checked;updateSelectedState();});row.addEventListener("dblclick",function(ev){if(ev.target&&ev.target.closest&&(ev.target.closest("button")||ev.target.closest("input")))return;if(canOpen(file)){openFile(file);}});row.addEventListener("contextmenu",function(ev){ev.preventDefault();showContextMenu(ev.clientX,ev.clientY,file);});row.appendChild(check);row.appendChild(fileType);row.appendChild(fileMain);row.appendChild(size);row.appendChild(openBtn);row.appendChild(downloadBtn);fileListNode.appendChild(row);});updateSelectedState();}'
      + 'if(filterInput){filterInput.addEventListener("input",renderFiles);}'
      + 'if(downloadAllBtn){downloadAllBtn.addEventListener("click",function(){if(!allowDownload)return;triggerDownloadBatch(files.slice(),"all");});}'
      + 'if(downloadSelectedBtn){downloadSelectedBtn.addEventListener("click",function(){if(!allowDownload||restrictionLocked)return;var selection=selectedDownloadFiles();if(selection.length>1){triggerDownloadBatch(selection,"selected","seleccion","");}});}'
      + 'if(ctxOpenBtn){ctxOpenBtn.addEventListener("click",function(){if(ctxFile&&canOpen(ctxFile)){openFile(ctxFile);}hideContextMenu();});}'
      + 'if(ctxDownloadBtn){ctxDownloadBtn.addEventListener("click",function(){if(ctxFile&&allowDownload){triggerDownload(ctxFile);}hideContextMenu();});}'
      + 'if(ctxDownloadVisibleBtn){ctxDownloadVisibleBtn.addEventListener("click",function(){if(allowDownload){triggerDownloadBatch(folderFilesForDownload(),"visible");}hideContextMenu();});}'
      + 'document.addEventListener("click",hideContextMenu);document.addEventListener("scroll",hideContextMenu,true);document.addEventListener("keydown",function(ev){if(ev.key==="Escape"){hideContextMenu();}});'
      + 'fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){var custom=(meta&&meta.title?String(meta.title):"").replace(/\\s+/g," ").trim();if(custom){document.title=custom;if(titleNode)titleNode.textContent=custom;}}).catch(function(){});'
      + 'function loadRestrictions(){if(embeddedRestrictions&&embeddedRestrictions.enabled){currentRestrictions=embeddedRestrictions;return Promise.resolve();}return fetch("restrictions.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-restrictions");return r.json();}).then(function(data){if(data&&data.enabled){currentRestrictions=data;}else{currentRestrictions=null;}}).catch(function(){currentRestrictions=null;});}'
      + 'loadRestrictions().then(function(){if(applyRestrictionState()){renderFolders();renderFiles();}});'
      + '})();</script>'
      + '</body></html>';
  }

  function getH5pViewerStrings() {
    var lang = normalizeLang(currentLang);
    var map = {
      es: {
        title: 'Contenidos H5P',
        loading: 'Cargando H5P...',
        failed: 'No se pudo mostrar este contenido H5P.',
        missing: 'No se pudo cargar el motor H5P.',
        missingLibraries: 'Este archivo H5P no incluye las librerías necesarias. Exporta el H5P como paquete completo.',
        download: 'Descargar H5P',
        hideList: 'Ocultar lista',
        showList: 'Mostrar lista'
      },
      ca: {
        title: 'Continguts H5P',
        loading: 'Carregant H5P...',
        failed: 'No s\'ha pogut mostrar aquest contingut H5P.',
        missing: 'No s\'ha pogut carregar el motor H5P.',
        missingLibraries: 'Aquest fitxer H5P no inclou les llibreries necessàries. Exporta l\'H5P com a paquet complet.',
        download: 'Descarregar H5P',
        hideList: 'Amagar llista',
        showList: 'Mostrar llista'
      },
      gl: {
        title: 'Contidos H5P',
        loading: 'Cargando H5P...',
        failed: 'Non se puido mostrar este contido H5P.',
        missing: 'Non se puido cargar o motor H5P.',
        missingLibraries: 'Este ficheiro H5P non inclúe as librarías necesarias. Exporta o H5P como paquete completo.',
        download: 'Descargar H5P',
        hideList: 'Agochar lista',
        showList: 'Amosar lista'
      },
      eu: {
        title: 'H5P edukiak',
        loading: 'H5P kargatzen...',
        failed: 'Ezin izan da H5P eduki hau erakutsi.',
        missing: 'Ezin izan da H5P motorra kargatu.',
        missingLibraries: 'H5P fitxategi honek ez ditu beharrezko liburutegiak. Esportatu H5P pakete oso gisa.',
        download: 'H5P deskargatu',
        hideList: 'Zerrenda ezkutatu',
        showList: 'Zerrenda erakutsi'
      },
      en: {
        title: 'H5P Content',
        loading: 'Loading H5P...',
        failed: 'Could not display this H5P content.',
        missing: 'Could not load the H5P engine.',
        missingLibraries: 'This H5P file does not include required libraries. Export the H5P as a full package.',
        download: 'Download H5P',
        hideList: 'Hide list',
        showList: 'Show list'
      },
      de: {
        title: 'H5P-Inhalte',
        loading: 'H5P wird geladen...',
        failed: 'Dieser H5P-Inhalt konnte nicht angezeigt werden.',
        missing: 'Die H5P-Engine konnte nicht geladen werden.',
        missingLibraries: 'Diese H5P-Datei enthält nicht die erforderlichen Bibliotheken. Exportiere das H5P als vollständiges Paket.',
        download: 'H5P herunterladen',
        hideList: 'Liste ausblenden',
        showList: 'Liste anzeigen'
      }
    };
    return map[lang] || map.es;
  }

  function buildH5pIndexHtml(packages, selectedSourcePath, allowDownload) {
    var pageLang = normalizeLang(currentLang);
    var strings = getH5pViewerStrings();
    var packageList = (packages || []).map(function (item, index) {
      var explicitId = normalizePath(item && item.id ? item.id : '');
      var sourcePath = normalizePath(item && item.sourcePath ? item.sourcePath : '');
      var rootPath = normalizePath(item && item.rootPath ? item.rootPath : '');
      if (!rootPath && sourcePath && isH5pPath(sourcePath)) {
        // Defensive fallback: recover the extracted root used by expandH5pPackagesInFiles.
        rootPath = buildH5pExtractRoot(sourcePath, {});
      }
      var fallbackTitle = deriveTitleFromPath(sourcePath || rootPath) || 'H5P';
      return {
        id: explicitId || sourcePath || rootPath || ('h5p-' + String(index + 1)),
        sourcePath: sourcePath,
        rootPath: rootPath,
        title: normalizeResourceTitle(item && item.title ? item.title : '') || fallbackTitle,
        missingLibraries: !!(item && item.missingLibraries)
      };
    }).filter(function (item) {
      return !!item.id && item.rootPath !== null && item.rootPath !== undefined;
    });
    var selectedPath = normalizePath(selectedSourcePath || (packageList[0] && packageList[0].id) || '');
    var selected = packageList.find(function (item) { return item.id === selectedPath; }) || packageList[0] || null;
    var selectedTitle = selected && selected.title ? selected.title : (strings.title || 'H5P');
    var hasMultiplePackages = packageList.length > 1;
    var listItems = packageList.map(function (item) {
      var selectedClass = item.id === (selected && selected.id) ? ' class="is-active"' : '';
      return '<li><button type="button" data-h5p-link' + selectedClass
        + ' data-h5p-id="' + escapeHtml(item.id) + '"'
        + ' data-h5p-source="' + escapeHtml(item.sourcePath) + '"'
        + ' data-h5p-root="' + escapeHtml(item.rootPath) + '"'
        + ' data-h5p-title="' + escapeHtml(item.title || item.id) + '"'
        + ' title="' + escapeHtml(item.title || item.id) + '">'
        + '<span class="h5p-link__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></span>'
        + '<span class="h5p-link__label">' + escapeHtml(item.title || item.id) + '</span>'
        + '</button></li>';
    }).join('');
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    var stringsJson = JSON.stringify(strings || {});
    var itemsJson = JSON.stringify(packageList || []);
    var bodyClass = hasMultiplePackages ? '' : ' class="h5p-single"';
    var sidebarHtml = hasMultiplePackages
      ? '<aside class="sidebar"><button type="button" class="sidebar-toggle" data-sidebar-toggle aria-expanded="true"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 3v18"></path><path d="m16 9-3 3 3 3"></path></svg></button><div class="sidebar-content"><h1 data-viewer-title>' + escapeHtml(strings.title || 'H5P') + '</h1><ul>' + listItems + '</ul></div></aside>'
      : '';
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
      + '<title>' + escapeHtml(selectedTitle || 'H5P') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--surface-muted:#f3f5f8;--ink:#0f172a;--border:#e2e8f0;--accent:#2563eb;--accent-wash:#eff6ff;--shadow:0 10px 26px rgba(15,23,42,.06)}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.layout{display:grid;grid-template-columns:minmax(230px,330px) 1fr;height:100%;gap:12px;padding:12px}'
      + '.sidebar{display:flex;flex-direction:column;min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);overflow:hidden}'
      + '.sidebar-toggle{width:36px;height:36px;margin:10px 10px 8px;appearance:none;border:1px solid #cbd5e1;background:var(--surface-muted);color:#334155;border-radius:10px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.sidebar-toggle:hover{background:var(--accent-wash);color:var(--accent)}.sidebar-toggle svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.sidebar-content{padding:0 10px 10px;overflow:auto}'
      + '.sidebar h1{margin:0 0 10px;font-size:1rem;line-height:1.2}'
      + '.sidebar ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}'
      + '.sidebar button{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:10px 12px;border-radius:12px;border:1px solid var(--border);background:var(--surface-muted);font:inherit;color:var(--ink);cursor:pointer;min-width:0;overflow:hidden}'
      + '.h5p-link__label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
      + '.h5p-link__icon{display:inline-grid;place-items:center;flex:0 0 auto;width:18px;height:18px;border-radius:6px;background:#ecfdf5;border:1px solid #86efac;color:#0f766e}'
      + '.h5p-link__icon svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.sidebar button:hover{background:var(--accent-wash);border-color:#bfdbfe}'
      + '.sidebar button.is-active{background:var(--accent-wash);border-color:#93c5fd;color:#1d4ed8;font-weight:700}'
      + 'body.sidebar-collapsed .layout{grid-template-columns:56px 1fr}'
      + 'body.sidebar-collapsed .sidebar-toggle{margin:10px auto 8px}'
      + 'body.sidebar-collapsed .sidebar-content{display:none}'
      + '.h5p-single .layout{grid-template-columns:1fr}'
      + '.h5p-single .sidebar{display:none}'
      + '.viewer{min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);overflow:visible;display:block}'
      + '.toolbar{display:flex;align-items:center;gap:10px;padding:10px;border-bottom:1px solid var(--border)}'
      + '.badge{display:inline-flex;align-items:center;padding:4px 9px;border-radius:999px;border:1px solid #86efac;background:#ecfdf5;color:#0f766e;font-size:.74rem;font-weight:700;letter-spacing:.01em}'
      + '.status{font-size:.95rem;color:#475569}'
      + '.download{margin-left:auto;color:var(--accent);text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:6px}'
      + '.download[hidden]{display:none !important}'
      + '.stage{padding:14px;min-height:0;display:flex;justify-content:center;align-items:flex-start}'
      + '.h5p-mount{width:min(100%,980px);min-height:220px}'
      + '.h5p-mount iframe,.h5p-mount .h5p-iframe-wrapper,.h5p-mount .h5p-container{max-width:100%}'
      + '@media (max-width:900px){.layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}body.sidebar-collapsed .layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}}'
      + '</style></head><body' + bodyClass + '>'
      + '<div class="layout">' + sidebarHtml
      + '<main class="viewer"><section class="toolbar"><span class="badge">H5P</span><span class="status" data-h5p-status></span><a class="download" data-h5p-download hidden></a></section><section class="stage"><div class="h5p-mount" data-h5p-mount></div></section></main></div>'
      + '<script src="https://cdn.jsdelivr.net/npm/h5p-standalone@3.8.0/dist/main.bundle.js"></script>'
      + '<script>(function(){var strings=' + stringsJson + ';var items=' + itemsJson + ';var allowDownload=' + allowDownloadJs + ';var body=document.body;var toggle=document.querySelector("[data-sidebar-toggle]");var titleNode=document.querySelector("[data-viewer-title]");var statusNode=document.querySelector("[data-h5p-status]");var mountNode=document.querySelector("[data-h5p-mount]");var downloadNode=document.querySelector("[data-h5p-download]");var links=[].slice.call(document.querySelectorAll("[data-h5p-link]"));var iconOpen="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"></rect><path d=\\"M9 3v18\\"></path><path d=\\"m16 9-3 3 3 3\\"></path></svg>";var iconClosed="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"></rect><path d=\\"M9 3v18\\"></path><path d=\\"m13 9 3 3-3 3\\"></path></svg>";if(toggle){toggle.setAttribute("aria-label",strings.hideList||"Hide list");toggle.title=strings.hideList||"Hide list";}function enc(path){return String(path||"").split("/").map(function(seg){return encodeURIComponent(seg);}).join("/");}function applyTitle(text){var clean=String(text||"").replace(/\\s+/g," ").trim();if(!clean)return;if(titleNode)titleNode.textContent=clean;document.title=clean;}function markActive(id){links.forEach(function(link){link.classList.toggle("is-active",String(link.getAttribute("data-h5p-id")||"")===String(id||""));});}function syncToggle(){if(!toggle)return;var collapsed=body.classList.contains("sidebar-collapsed");toggle.innerHTML=collapsed?iconClosed:iconOpen;toggle.setAttribute("aria-expanded",collapsed?"false":"true");toggle.setAttribute("aria-label",collapsed?(strings.showList||"Show list"):(strings.hideList||"Hide list"));toggle.title=collapsed?(strings.showList||"Show list"):(strings.hideList||"Hide list");}function fitMountHeight(){if(!mountNode)return;var probe=mountNode.querySelector(".h5p-iframe-wrapper,.h5p-container,iframe,.h5p-content");if(!probe)return;var h=Math.ceil(Math.max(probe.scrollHeight||0,probe.offsetHeight||0,probe.getBoundingClientRect?probe.getBoundingClientRect().height:0));if(h&&h>0){mountNode.style.minHeight=Math.max(180,h)+"px";}}function renderH5p(item){if(!item||!mountNode)return;markActive(item.id||"");applyTitle(item.title||strings.title||"H5P");if(statusNode)statusNode.textContent=strings.loading||"Loading H5P...";if(downloadNode){downloadNode.hidden=!(allowDownload&&item.sourcePath);downloadNode.textContent=strings.download||"Download H5P";downloadNode.href=item.sourcePath?enc(item.sourcePath):"";downloadNode.download="";downloadNode.setAttribute("aria-label",strings.download||"Download H5P");}mountNode.innerHTML="";mountNode.style.minHeight="220px";if(item.missingLibraries){if(statusNode)statusNode.textContent=strings.missingLibraries||"This H5P file does not include required libraries.";return;}if(!window.H5PStandalone||!window.H5PStandalone.H5P){if(statusNode)statusNode.textContent=strings.missing||"Could not load the H5P engine.";return;}var rootPath=enc(item.rootPath||".");var options={h5pJsonPath:rootPath,contentJsonPath:rootPath+"/content",librariesPath:rootPath,frameJs:"https://cdn.jsdelivr.net/npm/h5p-standalone@3.8.0/dist/frame.bundle.js",frameCss:"https://cdn.jsdelivr.net/npm/h5p-standalone@3.8.0/dist/styles/h5p.css",frame:true,embedType:"div",fullScreen:true,export:!!allowDownload,downloadUrl:item.sourcePath?enc(item.sourcePath):""};Promise.resolve(new window.H5PStandalone.H5P(mountNode,options)).then(function(){if(statusNode)statusNode.textContent="";fitMountHeight();setTimeout(fitMountHeight,120);setTimeout(fitMountHeight,500);setTimeout(fitMountHeight,1200);if(window.ResizeObserver){try{var ro=new ResizeObserver(function(){fitMountHeight();});ro.observe(mountNode);}catch(e){}}}).catch(function(){if(statusNode)statusNode.textContent=strings.failed||"Could not display this H5P content.";});}if(toggle){toggle.addEventListener("click",function(){body.classList.toggle("sidebar-collapsed");syncToggle();});syncToggle();}links.forEach(function(link){link.addEventListener("click",function(){var id=String(link.getAttribute("data-h5p-id")||"");var found=items.find(function(item){return String(item&&item.id||"")===id;});if(found){renderH5p(found);}});});var initial=items.find(function(item){return links.some(function(link){return link.classList.contains("is-active")&&String(link.getAttribute("data-h5p-id")||"")===String(item&&item.id||"");});})||items[0]||null;if(initial){renderH5p(initial);}else if(statusNode){statusNode.textContent=strings.failed||"Could not display this H5P content.";}})();</script>'
      + '</body></html>';
  }

  function sanitizePathSegment(value) {
    var cleaned = String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    return cleaned || 'h5p';
  }

  function shortStableHash(value) {
    var str = String(value || '');
    var hash = 2166136261;
    for (var i = 0; i < str.length; i += 1) {
      hash ^= str.charCodeAt(i);
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return Math.abs(hash >>> 0).toString(36);
  }

  function buildH5pExtractRoot(sourcePath, usedRoots) {
    var baseTitle = deriveTitleFromPath(sourcePath) || 'h5p';
    var slug = sanitizePathSegment(baseTitle);
    var hash = shortStableHash(normalizePath(sourcePath || ''));
    var candidate = '__vwz_h5p/' + slug + '-' + hash;
    var lower = candidate.toLowerCase();
    var idx = 2;
    while (usedRoots[lower]) {
      candidate = '__vwz_h5p/' + slug + '-' + hash + '-' + idx;
      lower = candidate.toLowerCase();
      idx += 1;
    }
    usedRoots[lower] = true;
    return candidate;
  }

  var h5pLibraryBundleCache = {};
  var H5P_CONTENT_TYPE_API_BASE = 'https://api.h5p.org/v1/content-types/';

  function fetchH5pLibraryBundle(mainLibrary) {
    var libraryName = String(mainLibrary || '').trim();
    if (!libraryName) return Promise.resolve(null);
    if (h5pLibraryBundleCache[libraryName]) {
      return h5pLibraryBundleCache[libraryName];
    }
    var endpoint = H5P_CONTENT_TYPE_API_BASE + encodeURIComponent(libraryName);
    h5pLibraryBundleCache[libraryName] = fetch(endpoint, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
      cache: 'force-cache'
    })
      .then(function (response) {
        if (!response || !response.ok) {
          throw new Error('HTTP ' + (response ? response.status : '0'));
        }
        return response.arrayBuffer();
      })
      .then(function (buffer) {
        if (!window.fflate || !window.fflate.unzipSync) return null;
        return window.fflate.unzipSync(new Uint8Array(buffer));
      })
      .catch(function () {
        return null;
      });
    return h5pLibraryBundleCache[libraryName];
  }

  function expandH5pPackagesInFiles(files, siteId) {
    var baseFiles = (files || []).slice();
    var result = {
      files: baseFiles.slice(),
      packages: []
    };
    if (!baseFiles.length) return Promise.resolve(result);
    if (!window.fflate || !window.fflate.unzipSync) return Promise.resolve(result);

    var existingPaths = {};
    var usedRoots = {};
    var baseFilesByPath = {};
    var fileIndexByPath = {};
    result.files.forEach(function (file, index) {
      var normalized = normalizePath(file && file.path ? file.path : '').toLowerCase();
      if (!normalized) return;
      existingPaths[normalized] = true;
      if (!baseFilesByPath[normalized]) {
        baseFilesByPath[normalized] = file;
      }
      fileIndexByPath[normalized] = index;
      if (normalized.indexOf('__vwz_h5p/') === 0) {
        var rootParts = normalized.split('/').slice(0, 2);
        if (rootParts.length === 2) {
          usedRoots[rootParts.join('/')] = true;
        }
      }
    });

    function upsertVirtualFile(targetPath, data, forceReplace) {
      var normalizedPath = normalizePath(targetPath || '');
      if (!normalizedPath) return false;
      var targetLower = normalizedPath.toLowerCase();
      var existingIndex = fileIndexByPath[targetLower];
      if (existingIndex != null && !forceReplace) return false;
      var type = guessMimeType(normalizedPath);
      var blob = new Blob([data], { type: type });
      var record = {
        key: siteId + '::' + normalizedPath,
        siteId: siteId,
        path: normalizedPath,
        blob: blob,
        size: blob.size,
        type: type
      };
      if (existingIndex != null && forceReplace) {
        result.files[existingIndex] = record;
      } else {
        result.files.push(record);
        fileIndexByPath[targetLower] = result.files.length - 1;
      }
      existingPaths[targetLower] = true;
      return true;
    }

    function appendEntriesToRoot(entryMap, rootPath, options) {
      options = options || {};
      var added = 0;
      Object.keys(entryMap || {}).forEach(function (entryPath) {
        if (!entryPath || /\/$/.test(entryPath)) return;
        if (entryPath.indexOf('__MACOSX/') === 0) return;
        var normalizedEntry = normalizePath(entryPath);
        if (!normalizedEntry) return;
        var lowerEntry = normalizedEntry.toLowerCase();
        if (options.skipContent && lowerEntry.indexOf('content/') === 0) return;
        if (options.skipContent && lowerEntry === 'h5p.json' && !options.replaceH5pJson) return;
        var targetPath = normalizePath((rootPath ? rootPath + '/' : '') + normalizedEntry);
        var data = entryMap[entryPath];
        var replaceCurrent = !!(options.replaceH5pJson && lowerEntry === 'h5p.json');
        if (upsertVirtualFile(targetPath, data, replaceCurrent)) {
          added += 1;
        }
      });
      return added;
    }

    function parseMetaFromBytes(bytes) {
      try {
        return JSON.parse(decodeUtf8(bytes) || '{}') || {};
      } catch (e) {
        return {};
      }
    }

    function collectLibrariesFromPaths(paths) {
      var byMachine = {};
      (paths || []).forEach(function (path) {
        var normalized = normalizePath(path || '');
        if (!normalized) return;
        var match = /^([^/]+)-(\d+)\.(\d+)\//i.exec(normalized);
        if (!match) return;
        var machineName = String(match[1] || '').trim();
        var major = String(match[2] || '').trim();
        var minor = String(match[3] || '').trim();
        if (!machineName || !major || !minor) return;
        var machineKey = machineName.toLowerCase();
        if (!byMachine[machineKey]) byMachine[machineKey] = {};
        byMachine[machineKey][major + '.' + minor] = true;
      });
      return byMachine;
    }

    function hasLibraryVersion(libraryMap, machineName, major, minor) {
      var machineKey = String(machineName || '').toLowerCase();
      var versionKey = String(major || '') + '.' + String(minor || '');
      return !!(libraryMap && libraryMap[machineKey] && libraryMap[machineKey][versionKey]);
    }

    function getMissingPreloadedDependencies(meta, libraryMap) {
      var deps = Array.isArray(meta && meta.preloadedDependencies) ? meta.preloadedDependencies : [];
      var missing = [];
      deps.forEach(function (dep) {
        if (!dep || !dep.machineName) return;
        var machineName = String(dep.machineName || '').trim();
        var major = String(dep.majorVersion || '').trim();
        var minor = String(dep.minorVersion || '').trim();
        if (!machineName || !major || !minor) return;
        if (!hasLibraryVersion(libraryMap, machineName, major, minor)) {
          missing.push(machineName + ' ' + major + '.' + minor);
        }
      });
      return missing;
    }

    function isMainLibraryMissing(meta, libraryMap) {
      var machineName = String(meta && meta.mainLibrary ? meta.mainLibrary : '').trim();
      if (!machineName) return false;
      var deps = Array.isArray(meta && meta.preloadedDependencies) ? meta.preloadedDependencies : [];
      var mainDep = deps.find(function (dep) {
        return dep && String(dep.machineName || '').trim() === machineName;
      });
      if (mainDep) {
        var major = String(mainDep.majorVersion || '').trim();
        var minor = String(mainDep.minorVersion || '').trim();
        if (major && minor) {
          return !hasLibraryVersion(libraryMap, machineName, major, minor);
        }
      }
      var machineKey = machineName.toLowerCase();
      return !(libraryMap && libraryMap[machineKey] && Object.keys(libraryMap[machineKey]).length);
    }

    function computeMissingLibrariesForRoot(rootPath, meta) {
      var rootLower = normalizePath(rootPath || '').toLowerCase();
      var rootPrefix = rootLower ? (rootLower + '/') : '';
      var rootRelativePaths = Object.keys(existingPaths).filter(function (path) {
        if (!rootPrefix) return true;
        return path.indexOf(rootPrefix) === 0;
      }).map(function (path) {
        return rootPrefix ? path.slice(rootPrefix.length) : path;
      });
      var hasAnyLibraries = rootRelativePaths.some(function (path) {
        return /^h5p\.[^/]+\//.test(path);
      });
      var libraryMap = collectLibrariesFromPaths(rootRelativePaths);
      var missingDeps = getMissingPreloadedDependencies(meta, libraryMap);
      var missingMainLibrary = isMainLibraryMissing(meta, libraryMap);
      return !hasAnyLibraries || missingMainLibrary || missingDeps.length > 0;
    }

    var tasks = [];
    baseFiles.forEach(function (file) {
      var sourcePath = normalizePath(file && file.path ? file.path : '');
      if (!sourcePath || !isH5pPath(sourcePath)) return;
      if (!file.blob || !file.blob.arrayBuffer) return;
      tasks.push(file.blob.arrayBuffer().then(function (buffer) {
        var entries = window.fflate.unzipSync(new Uint8Array(buffer));
        var paths = Object.keys(entries).filter(function (entryPath) {
          return !!entryPath && !/\/$/.test(entryPath) && entryPath.indexOf('__MACOSX/') !== 0;
        }).map(function (entryPath) {
          return normalizePath(entryPath);
        }).filter(function (path) {
          return !!path;
        });
        var hasManifest = paths.some(function (path) { return String(path).toLowerCase() === 'h5p.json'; });
        var hasContent = paths.some(function (path) { return String(path).toLowerCase() === 'content/content.json'; });
        var hasLibraries = paths.some(function (path) { return /^h5p\.[^/]+\//i.test(String(path || '')); });
        if (!hasManifest || !hasContent) return;

        var h5pMeta = {};
        var mainLibrary = '';
        try {
          h5pMeta = parseMetaFromBytes(entries['h5p.json']);
          mainLibrary = String(h5pMeta && h5pMeta.mainLibrary ? h5pMeta.mainLibrary : '').trim();
        } catch (e) {
          mainLibrary = '';
        }
        var libraryMap = collectLibrariesFromPaths(paths);
        var missingDeps = getMissingPreloadedDependencies(h5pMeta, libraryMap);
        var missingMainLibrary = isMainLibraryMissing(h5pMeta, libraryMap);
        var needsHydration = !hasLibraries || missingMainLibrary || missingDeps.length > 0;

        var rootPath = buildH5pExtractRoot(sourcePath, usedRoots);
        var packageInfo = {
          sourcePath: sourcePath,
          rootPath: rootPath,
          title: deriveTitleFromPath(sourcePath) || sourcePath,
          missingLibraries: true
        };
        result.packages.push(packageInfo);

        appendEntriesToRoot(entries, rootPath);
        packageInfo.missingLibraries = computeMissingLibrariesForRoot(rootPath, h5pMeta);

        if (!needsHydration || !mainLibrary) {
          return;
        }

        return fetchH5pLibraryBundle(mainLibrary).then(function (bundleEntries) {
          if (!bundleEntries) return;
          appendEntriesToRoot(bundleEntries, rootPath, { skipContent: true, replaceH5pJson: true });
          packageInfo.missingLibraries = computeMissingLibrariesForRoot(rootPath, h5pMeta);
        });
      }).catch(function () {
        return null;
      }));
    });

    // Also support raw/incomplete H5P packages opened directly (without .h5p wrapper path).
    var embeddedRoots = {};
    baseFiles.forEach(function (file) {
      var normalized = normalizePath(file && file.path ? file.path : '');
      if (!normalized) return;
      var lower = normalized.toLowerCase();
      if (!/(^|\/)h5p\.json$/.test(lower)) return;
      var rootPath = '';
      if (lower !== 'h5p.json') {
        rootPath = normalized.slice(0, normalized.length - 9).replace(/\/$/, '');
      }
      var contentPath = (rootPath ? rootPath + '/' : '') + 'content/content.json';
      if (!existingPaths[contentPath.toLowerCase()]) return;
      var rootPrefix = rootPath ? (rootPath.toLowerCase() + '/') : '';
      var hasLibraries = Object.keys(existingPaths).some(function (path) {
        if (rootPrefix) {
          if (path.indexOf(rootPrefix) !== 0) return false;
          path = path.slice(rootPrefix.length);
        }
        return /^h5p\.[^/]+\//.test(path);
      });
      embeddedRoots[(rootPath || '__root__').toLowerCase()] = {
        rootPath: rootPath,
        hasLibraries: hasLibraries
      };
    });

    Object.keys(embeddedRoots).forEach(function (key) {
      var rootInfo = embeddedRoots[key] || {};
      var rootPath = rootInfo.rootPath || '';
      var h5pJsonPath = (rootPath ? rootPath + '/' : '') + 'h5p.json';
      var h5pJsonBlobFile = baseFilesByPath[h5pJsonPath.toLowerCase()];
      if (!h5pJsonBlobFile || !h5pJsonBlobFile.blob) return;
      tasks.push(h5pJsonBlobFile.blob.arrayBuffer().then(function (buffer) {
        var parsedMeta = parseMetaFromBytes(new Uint8Array(buffer));
        var mainLibrary = String(parsedMeta && parsedMeta.mainLibrary ? parsedMeta.mainLibrary : '').trim();
        if (!mainLibrary) return;
        var rootPrefix = rootPath ? (rootPath.toLowerCase() + '/') : '';
        var rootRelativePaths = Object.keys(existingPaths).filter(function (path) {
          if (!rootPrefix) return true;
          if (path.indexOf(rootPrefix) !== 0) return false;
          return true;
        }).map(function (path) {
          return rootPrefix ? path.slice(rootPrefix.length) : path;
        });
        var libraryMap = collectLibrariesFromPaths(rootRelativePaths);
        var missingDeps = getMissingPreloadedDependencies(parsedMeta, libraryMap);
        var missingMainLibrary = isMainLibraryMissing(parsedMeta, libraryMap);
        var needsHydration = !rootInfo.hasLibraries || missingMainLibrary || missingDeps.length > 0;
        if (!needsHydration) return;
        return fetchH5pLibraryBundle(mainLibrary).then(function (bundleEntries) {
          if (!bundleEntries) return;
          appendEntriesToRoot(bundleEntries, rootPath, { skipContent: true, replaceH5pJson: true });
        });
      }).catch(function () {
        return null;
      }));
    });

    if (!tasks.length) return Promise.resolve(result);
    return Promise.all(tasks).then(function () {
      return result;
    }).catch(function () {
      return result;
    });
  }

  function detectEmbeddedH5pPackages(visibleEntries) {
    var entries = visibleEntries || [];
    if (!entries.length) return [];
    var pathSet = {};
    entries.forEach(function (entry) {
      var normalized = normalizePath(entry && entry.path ? entry.path : '').toLowerCase();
      if (normalized) pathSet[normalized] = true;
    });
    var packagesByRoot = {};
    entries.forEach(function (entry) {
      var normalizedPath = normalizePath(entry && entry.path ? entry.path : '');
      if (!normalizedPath) return;
      var lower = normalizedPath.toLowerCase();
      if (!/(^|\/)h5p\.json$/.test(lower)) return;
      var rootPath = '';
      if (lower !== 'h5p.json') {
        rootPath = normalizedPath.slice(0, normalizedPath.length - 9).replace(/\/$/, '');
      }
      var contentPath = (rootPath ? rootPath + '/' : '') + 'content/content.json';
      if (!pathSet[contentPath.toLowerCase()]) return;
      var rootLower = normalizePath(rootPath || '').toLowerCase();
      var rootPrefix = rootLower ? (rootLower + '/') : '';
      var hasLibraries = Object.keys(pathSet).some(function (path) {
        if (rootPrefix) {
          if (path.indexOf(rootPrefix) !== 0) return false;
          path = path.slice(rootPrefix.length);
        }
        return /^h5p\.[^/]+\//.test(path);
      });
      var id = rootPath || '__vwz_h5p_root';
      if (packagesByRoot[id]) return;
      var title = rootPath ? (deriveTitleFromPath(rootPath) || rootPath) : 'H5P';
      packagesByRoot[id] = {
        id: id,
        sourcePath: '',
        rootPath: rootPath,
        title: title,
        missingLibraries: !hasLibraries
      };
    });
    return Object.keys(packagesByRoot).map(function (key) {
      return packagesByRoot[key];
    }).sort(function (a, b) {
      return String(a.title || '').localeCompare(String(b.title || ''), undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });
  }


  function prepareIndexableZip(files, siteId, preferredIndexPath, allowDownload, restrictions) {
    function comparePdfPaths(a, b) {
      var left = String(a || '');
      var right = String(b || '');
      function numericPrefixSequence(path) {
        return path.split('/').filter(function (part) { return !!part; }).map(function (part) {
          var match = /^(\d+)(?:[\s._-]+|$)/.exec(part);
          return match ? parseInt(match[1], 10) : null;
        });
      }

      var leftSeq = numericPrefixSequence(left);
      var rightSeq = numericPrefixSequence(right);
      var maxLen = Math.max(leftSeq.length, rightSeq.length);

      for (var i = 0; i < maxLen; i += 1) {
        var leftNum = i < leftSeq.length ? leftSeq[i] : null;
        var rightNum = i < rightSeq.length ? rightSeq[i] : null;

        if (leftNum !== null && rightNum !== null) {
          if (leftNum !== rightNum) {
            return leftNum - rightNum;
          }
          continue;
        }
        if (leftNum !== null && rightNum === null) {
          return -1;
        }
        if (leftNum === null && rightNum !== null) {
          return 1;
        }
      }

      return left.localeCompare(right, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    }

    return expandH5pPackagesInFiles(files, siteId).then(function (expanded) {
      var workingFiles = expanded && expanded.files ? expanded.files : (files || []);
      var h5pPackages = expanded && expanded.packages ? expanded.packages : [];
      var htmlExists = workingFiles.some(function (file) {
        var lower = (file.path || '').toLowerCase();
        return lower.endsWith('.html') || lower.endsWith('.htm');
      });
      if (htmlExists) {
        return { files: workingFiles, preferredIndexPath: preferredIndexPath || '' };
      }
      var visibleEntries = mapFolderFileEntries(workingFiles);
      if (!visibleEntries.length) {
        return { files: workingFiles, preferredIndexPath: preferredIndexPath || '' };
      }
      var documentPaths = visibleEntries.map(function (entry) { return entry.path; }).filter(function (path) {
        return isPdfPath(path) || isDocxPath(path) || isTxtPath(path) || isMarkdownPath(path) || isCsvPath(path);
      });
      documentPaths.sort(comparePdfPaths);
      var h5pPaths = visibleEntries.map(function (entry) { return entry.path; }).filter(function (path) {
        return isH5pPath(path);
      }).sort(function (a, b) {
        return String(a || '').localeCompare(String(b || ''), undefined, {
          numeric: true,
          sensitivity: 'base'
        });
      });
      var packageBySource = {};
      h5pPackages.forEach(function (item) {
        var sourcePath = normalizePath(item && item.sourcePath ? item.sourcePath : '');
        if (!sourcePath) return;
        if (!packageBySource[sourcePath]) {
          packageBySource[sourcePath] = item;
        }
      });
      var resolvedH5pPackages = h5pPaths.map(function (path) {
        var pkg = packageBySource[path];
        if (!pkg) return null;
        return {
          sourcePath: normalizePath(pkg.sourcePath || path),
          rootPath: normalizePath(pkg.rootPath || ''),
          title: normalizeResourceTitle(pkg.title || deriveTitleFromPath(path)) || deriveTitleFromPath(path) || path,
          missingLibraries: !!pkg.missingLibraries
        };
      }).filter(function (item) {
        return !!(item && item.sourcePath && item.rootPath);
      });
      var embeddedH5pPackages = detectEmbeddedH5pPackages(visibleEntries);
      var allH5pPackages = resolvedH5pPackages.slice();
      var packageIds = {};
      allH5pPackages.forEach(function (item) {
        packageIds[(item.sourcePath || item.rootPath || '').toLowerCase()] = true;
      });
      embeddedH5pPackages.forEach(function (item) {
        var id = (item && (item.id || item.rootPath) ? String(item.id || item.rootPath) : '').toLowerCase();
        if (!id || packageIds[id]) return;
        allH5pPackages.push(item);
        packageIds[id] = true;
      });

      var lowerPaths = workingFiles.map(function (file) { return (file.path || '').toLowerCase(); });
      var onlyDocuments = documentPaths.length === visibleEntries.length;
      var onlyH5pArchives = h5pPaths.length > 0
        && h5pPaths.length === visibleEntries.length
        && resolvedH5pPackages.length === h5pPaths.length;
      var onlyEmbeddedH5p = false;
      if (!h5pPaths.length && embeddedH5pPackages.length > 0) {
        onlyEmbeddedH5p = visibleEntries.every(function (entry) {
          var entryPath = normalizePath(entry && entry.path ? entry.path : '');
          if (!entryPath) return false;
          return embeddedH5pPackages.some(function (pkg) {
            var rootPath = normalizePath(pkg && pkg.rootPath ? pkg.rootPath : '');
            if (!rootPath) return true;
            return entryPath === rootPath || entryPath.indexOf(rootPath + '/') === 0;
          });
        });
      }
      var onlyH5p = onlyH5pArchives || onlyEmbeddedH5p;
      var indexPrefix = onlyDocuments
        ? '__vwz_docs_index'
        : (onlyH5p ? '__vwz_h5p_index' : '__vwz_folder_index');
      var indexPath = indexPrefix + '.html';
      var suffix = 2;
      while (lowerPaths.indexOf(indexPath.toLowerCase()) !== -1) {
        indexPath = indexPrefix + '_' + suffix + '.html';
        suffix += 1;
      }
      var html;
      if (onlyDocuments) {
        var preferredDoc = preferredIndexPath ? normalizePath(preferredIndexPath) : '';
        var selectedDoc = documentPaths.find(function (path) { return path === preferredDoc; }) || documentPaths[0];
        html = buildDocumentIndexHtml(documentPaths, selectedDoc, allowDownload);
      } else if (onlyH5p) {
        var preferredH5p = preferredIndexPath ? normalizePath(preferredIndexPath) : '';
        var selectedH5p = allH5pPackages.find(function (item) {
          return item.sourcePath === preferredH5p
            || item.rootPath === preferredH5p
            || item.id === preferredH5p;
        }) || allH5pPackages[0];
        var selectedH5pId = selectedH5p
          ? (selectedH5p.sourcePath || selectedH5p.id || selectedH5p.rootPath || '')
          : '';
        html = buildH5pIndexHtml(
          allH5pPackages,
          selectedH5pId,
          allowDownload
        );
      } else {
        html = buildFolderIndexHtml(visibleEntries, allowDownload, restrictions);
      }
      var blob = new Blob([html], { type: 'text/html' });
      var nextFiles = workingFiles.slice();
      nextFiles.push({
        key: siteId + '::' + indexPath,
        siteId: siteId,
        path: indexPath,
        blob: blob,
        size: blob.size,
        type: 'text/html'
      });
      return { files: nextFiles, preferredIndexPath: indexPath };
    }).catch(function () {
      return { files: files || [], preferredIndexPath: preferredIndexPath || '' };
    });
  }

  function pickIndexPath(paths, preferredIndexPath) {
    var htmlPaths = paths.filter(function (path) {
      var lower = path.toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (!htmlPaths.length) {
      return Promise.reject(new Error(t('error.needHtmlFile')));
    }
    var preferredFromUrl = preferredIndexPath ? normalizePath(preferredIndexPath) : '';
    if (preferredFromUrl) {
      var match = htmlPaths.find(function (p) { return p === preferredFromUrl; });
      if (match) {
        return Promise.resolve(match);
      }
    }
    var preferred = findIndexPath(paths);
    if (preferred && /index\.html?$/.test(preferred.toLowerCase())) {
      return Promise.resolve(preferred);
    }
    if (htmlPaths.length === 1) {
      return Promise.resolve(htmlPaths[0]);
    }
    return HtmlPicker.open(htmlPaths, preferredFromUrl || preferred || htmlPaths[0]);
  }

  function loadZip(zipUrl, options) {
    var opts = options || {};
    var fromManager = !!opts.fromManager;
    var autoOpen = !!opts.autoOpen && !fromManager;
    var showProgress = opts.showProgress !== false;
    var loadingMode = opts.loadingMode === 'overlay' ? 'overlay' : 'block';
    var surfaceCreateLinkError = !!opts.surfaceCreateLinkError;
    var setScopedLoading = function (active) {
      UI.setLoading(active, { mode: loadingMode });
    };
    var normalizedZipUrl = normalizeZipUrl(zipUrl);
    var shouldUseNormalized = false;
    var zipHost = '';
    try {
      zipHost = ((new URL(zipUrl)).hostname || '').toLowerCase();
    } catch (hostErr) {
      zipHost = '';
    }
    var isBoxHost = zipHost === 'box.com' || zipHost === 'app.box.com' || /(^|\.)box\.com$/.test(zipHost);
    if (!isBoxHost && (normalizedZipUrl.indexOf('/s/') !== -1 || normalizedZipUrl.indexOf('nextcloud') !== -1)) {
      shouldUseNormalized = true;
    }
    if (zipUrl.indexOf('dropbox.com') !== -1 && !isBoxHost) {
      shouldUseNormalized = true;
    }
    // GitHub "blob" pages are HTML. Use the raw URL when normalizeZipUrl() converted it.
    if (!shouldUseNormalized && normalizedZipUrl !== zipUrl) {
      try {
        var parsedZip = new URL(zipUrl);
        var hostZip = (parsedZip.hostname || '').toLowerCase();
        if ((hostZip === 'github.com' || hostZip === 'www.github.com') && parsedZip.pathname.indexOf('/blob/') !== -1) {
          shouldUseNormalized = true;
        }
      } catch (e) {
        // ignore
      }
    }
    var effectiveZipUrl = shouldUseNormalized ? normalizedZipUrl : zipUrl;
    if (shouldUseNormalized && input && input.value && input.value.trim() === zipUrl && normalizedZipUrl !== zipUrl) {
      input.value = normalizedZipUrl;
      updateLinkSubtitle();
    }
    if (autoOpen) {
      setScopedLoading(true);
      UI.setProgress(5);
      UI.setLoadingMessage(t('status.preparing'));
    }
    if (!GAS_WEBAPP_URL) {
      var configError = t('error.configMissing');
      UI.setStatus(configError);
      if (surfaceCreateLinkError) {
        setCreateLinkFeedback(configError);
      }
      if (showProgress && !autoOpen) {
        setScopedLoading(false);
      }
      return Promise.resolve();
    }
    UI.setStatus(t('status.preparingZip'));
    if (autoOpen) {
      UI.startProgress(8);
    }

    var workerPromise = registerServiceWorker().catch(function () {
      throw new Error(t('error.offlineNotAllowed'));
    });
    var controlPromise = workerPromise.then(function () {
      return waitForServiceWorkerControl();
    });

    var remoteMetaPromise = null;
    function getRemoteMetaPromise() {
      if (!remoteMetaPromise) {
        remoteMetaPromise = fetchRemoteMetaSignature(effectiveZipUrl);
      }
      return remoteMetaPromise;
    }

    return computeSiteId(effectiveZipUrl)
      .then(function (siteId) {
        return Storage.getSite(siteId).then(function (site) {
          return { siteId: siteId, cached: !!site, site: site };
        });
      })
      .then(function (result) {
        currentZipUrl = effectiveZipUrl;
        // If the share URL contains an explicit entry HTML path, keep it in the generated links.
        refreshShareLink(effectiveZipUrl, opts.preferredIndexPath || '');

        if (result.cached && !opts.force) {
          var cachedIndexPath = result.site ? (result.site.indexPath || '') : '';
          var effectiveIndexPath = opts.preferredIndexPath ? normalizePath(opts.preferredIndexPath) : cachedIndexPath;
          currentIndexPath = effectiveIndexPath || cachedIndexPath || '';
          refreshShareLink(effectiveZipUrl, currentIndexPath);
          var remoteUpdateCheck = checkForRemoteUpdate(result.site, {
            showBanner: !opts.embed,
            zipUrl: effectiveZipUrl,
            indexPath: currentIndexPath
          });
          if (result.site && Restrictions.isRestrictionActive(result.site.restrictions) && !Restrictions.isRestrictionAllowedNow(result.site.restrictions)) {
            if (Restrictions.isRestrictionExpired(result.site.restrictions)) {
              if (opts.allowInactive) {
                UI.setStatus(t('status.restrictedReady'));
                if (showProgress && !autoOpen) {
                  setScopedLoading(false);
                }
                currentRestrictions = result.site ? result.site.restrictions || null : null;
                RestrictionUI.applyRestrictionsToActions(currentRestrictions);
                return { siteId: result.siteId, siteUrl: null };
              }
              return Storage.deleteSite(result.siteId).then(function () {
                RestrictionUI.showRestrictionModal(result.site.restrictions);
                var err = new Error(t('error.restricted'));
                err.skipStatus = true;
                throw err;
              });
            }
            if (opts.allowInactive) {
              UI.setStatus(t('status.restrictedReady'));
              if (showProgress && !autoOpen) {
                setScopedLoading(false);
              }
              currentRestrictions = result.site ? result.site.restrictions || null : null;
              RestrictionUI.applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            RestrictionUI.showRestrictionModal(result.site.restrictions);
            var errInactive = new Error(t('error.restricted'));
            errInactive.skipStatus = true;
            throw errInactive;
          }
          if (opts.embed && result.site && Restrictions.isRestrictionActive(result.site.restrictions) && !Restrictions.allowEmbed(result.site.restrictions)) {
            throw new Error(t('error.embedNotAllowed'));
          }
          var siteUrl = buildSiteUrl(result.siteId, currentIndexPath || (result.site ? result.site.indexPath : ''));
          return controlPromise.then(function () {
            if (opts.embed) {
              openEmbedSite(siteUrl);
              return { siteId: result.siteId, siteUrl: siteUrl };
            }
            if (autoOpen) {
              return Promise.resolve(remoteUpdateCheck).then(function (changed) {
                if (changed) {
                  // In full-view mode, refresh cached resources automatically
                  // so the user sees the updated content without reloading.
                  return loadZip(effectiveZipUrl, {
                    force: true,
                    autoOpen: true,
                    preferredIndexPath: currentIndexPath || ''
                  }).then(function () {
                    return { siteId: result.siteId, siteUrl: siteUrl, updateAvailable: true };
                  });
                }
                UI.setProgress(100);
                window.location.assign(siteUrl);
                return { siteId: result.siteId, siteUrl: siteUrl };
              });
            }
            if (showProgress && !autoOpen) {
              setScopedLoading(false);
            }
            currentRestrictions = result.site ? result.site.restrictions || null : null;
            RestrictionUI.applyRestrictionsToActions(currentRestrictions);
            return { siteId: result.siteId, siteUrl: siteUrl };
          });
        }

        UI.setStatus(t('status.downloadingZip'));
        if (showProgress && !autoOpen) {
          setScopedLoading(true);
          UI.setLoadingMessage(t('status.connecting') + '...');
          UI.startProgress(2);
          UI.setLoadingEtaVisible(false);
        }
        if (autoOpen) {
          UI.stopProgress();
          UI.startProgress(2);
          UI.setLoadingEtaVisible(false);
        }
        return fetchZipBundle(effectiveZipUrl).then(function (bundle) {
          if (autoOpen || showProgress) {
            UI.stopProgress();
            UI.setProgress(100);
            UI.setLoadingEtaVisible(false);
          }
          UI.setStatus(t('status.unpacking'));
          if (autoOpen || showProgress) {
            UI.stopProgress();
            UI.setProgress(0);
            UI.setLoadingMessage(t('status.unpacking'));
            UI.setLoadingEtaVisible(false);
          }
          if (!window.fflate || !window.fflate.unzipSync) {
            throw new Error(t('error.fflateMissing'));
          }
          var bytes = bundle.bytes ? bundle.bytes : base64ToBytes(bundle.base64);
          var entries = window.fflate.unzipSync(bytes);
          var restrictions = Restrictions.extractRestrictions(entries, decodeUtf8);
          var viewerPreferences = extractViewerPreferences(entries);
          var scormInfo = null;
          var scormPreferredIndexPath = '';
          if (!opts.preferredIndexPath && !(viewerPreferences && viewerPreferences.preferredIndexPath)) {
            scormInfo = detectScormInfoFromZipEntries(entries);
            if (scormInfo && scormInfo.launchPath) {
              scormPreferredIndexPath = scormInfo.launchPath;
            }
            if (scormInfo && scormInfo.items && scormInfo.items.length > 1
              && !(viewerPreferences && viewerPreferences.forceFolderViewer)) {
              var hasClassicScormLauncher = Object.keys(entries).some(function (entryPath) {
                if (!entryPath || /\/$/.test(entryPath) || entryPath.indexOf('__MACOSX/') === 0) return false;
                return isClassicScormLauncherPath(entryPath);
              });
              if (!hasClassicScormLauncher) {
                var wrapperPath = pickUniqueHtmlPath('__vwz_scorm_index.html', Object.keys(entries));
                entries[wrapperPath] = encodeUtf8(buildScormIndexHtml(scormInfo, deriveTitleFromPath(scormPreferredIndexPath)));
                scormPreferredIndexPath = wrapperPath;
              }
            }
          }
          var blockedNow = Restrictions.isRestrictionActive(restrictions) && !Restrictions.isRestrictionAllowedNow(restrictions);
          if (blockedNow && Restrictions.isRestrictionExpired(restrictions)) {
            if (opts.allowInactive) {
              UI.setStatus(t('status.restrictedReady'));
              if (autoOpen || showProgress) {
                UI.stopProgress();
                setScopedLoading(false);
              }
              currentRestrictions = restrictions || null;
              RestrictionUI.applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            RestrictionUI.showRestrictionModal(restrictions);
            var blocked = new Error(t('error.restricted'));
            blocked.skipStatus = true;
            throw blocked;
          }
          if (opts.embed && Restrictions.isRestrictionActive(restrictions) && !Restrictions.allowEmbed(restrictions)) {
            throw new Error(t('error.embedNotAllowed'));
          }
          var files = [];
          Object.keys(entries).forEach(function (entryPath) {
            if (entryPath.endsWith('/') || entryPath.indexOf('__MACOSX/') === 0) {
              return;
            }
            if (entryPath === 'restrictions.json') {
              return;
            }
            if (entryPath === '__vwz_viewer.json') {
              return;
            }
            var normalized = normalizePath(entryPath);
            var data = entries[entryPath];
            var type = guessMimeType(normalized);
            var blob = new Blob([data], { type: type });
            files.push({
              key: result.siteId + '::' + normalized,
              siteId: result.siteId,
              path: normalized,
              blob: blob,
              size: blob.size,
              type: type
            });
          });

          var allowDownload = isDownloadAllowedByRestrictions(restrictions);
          var preferredIndexHint = opts.preferredIndexPath
            || (viewerPreferences && viewerPreferences.preferredIndexPath)
            || scormPreferredIndexPath
            || '';
          return prepareIndexableZip(files, result.siteId, preferredIndexHint, allowDownload, restrictions).then(function (preparedDocs) {
            files = preparedDocs.files;

            if (!files.length) {
              throw new Error(t('error.zipNoWebFiles'));
            }
            if (autoOpen || showProgress) {
              UI.stopProgress();
              UI.setProgress(100);
            }

            var paths = files.map(function (file) { return file.path; });
            return pickIndexPath(paths, preparedDocs.preferredIndexPath || preferredIndexHint || '').then(function (indexPath) {
              currentIndexPath = indexPath || '';
              refreshShareLink(effectiveZipUrl, currentIndexPath);
              if (HtmlPicker.consumeWasLoading && HtmlPicker.consumeWasLoading()) {
                setScopedLoading(true);
                UI.setLoadingMessage(t('status.saving'));
              }
            UI.setStatus(t('status.saving'));
            if (autoOpen || showProgress) {
              UI.stopProgress();
              UI.setProgress(0);
              UI.startProgress(0);
              UI.setLoadingMessage(t('status.saving'));
              UI.setLoadingEtaVisible(false);
            }

            var totalBytes = files.reduce(function (sum, item) { return sum + item.size; }, 0);
            return ensureStorageCapacity(totalBytes).then(function (canProceed) {
              if (!canProceed) {
                throw new Error(t('error.noSpace'));
              }
              return Storage.deleteSite(result.siteId).catch(function () {
                // Ignore delete errors.
              });
            }).then(function () {
              return extractTitleFromFiles(files, indexPath).then(function (foundTitle) {
                var siteTitle = foundTitle || deriveTitleFromPath(indexPath) || deriveTitleFromUrl(effectiveZipUrl);
                return getRemoteMetaPromise().then(function (remoteSignature) {
                  var storedSignature = (result.site && result.site.remoteMeta) ? result.site.remoteMeta : null;
                  var mergedSignature = mergeMetaSignature(storedSignature, remoteSignature);
                  var changed = storedSignature ? isMetaChanged(storedSignature, remoteSignature) : false;
                  var forcedUpdate = !!(opts.force && result.cached);
                  // Only mark as "updated" when there was an actual update (or we already knew an update
                  // was available). Otherwise manual refreshes would incorrectly show a green update date.
                  var shouldMarkUpdated = forcedUpdate && !!((result.site && result.site.updateAvailable) || changed);
                  var updatedFromRemoteAt = shouldMarkUpdated
                    ? Date.now()
                    : (result.site && result.site.updatedFromRemoteAt ? result.site.updatedFromRemoteAt : null);
                  // Preserve the original "saved" date in the Manager. The update date is already shown
                  // separately via `updatedFromRemoteAt` (green badge).
                  var firstSavedAt = (result.site && result.site.updatedAt) ? result.site.updatedAt : Date.now();
                  var site = {
                    id: result.siteId,
                    url: effectiveZipUrl,
                    indexPath: indexPath,
                    updatedAt: firstSavedAt,
                    fileCount: files.length,
                    totalBytes: totalBytes,
                    title: siteTitle,
                    restrictions: restrictions || null,
                    remoteMeta: mergedSignature,
                    updateAvailable: false,
                    updatedFromRemoteAt: updatedFromRemoteAt
                  };
                  return Storage.saveSite(site).then(function () {
                    return Storage.saveFiles(files).then(function () {
                      notifySitesChanged();
                      var siteUrl = buildSiteUrl(result.siteId, indexPath);
                      return controlPromise.then(function () {
                        currentRestrictions = restrictions || null;
                        RestrictionUI.applyRestrictionsToActions(currentRestrictions);
                        hideUpdateBanner();
                        if (opts.embed) {
                          openEmbedSite(siteUrl);
                          return { siteId: result.siteId, siteUrl: siteUrl };
                        }
                        if (blockedNow && !opts.allowInactive) {
                          RestrictionUI.showRestrictionModal(restrictions);
                          if (showProgress || autoOpen) {
                            UI.stopProgress();
                            setScopedLoading(false);
                          }
                          if (loadingMessage) {
                            loadingMessage.textContent = t('loading.message');
                          }
                          if (loadingEta) {
                            UI.setLoadingEtaVisible(false);
                          }
                          return { siteId: result.siteId, siteUrl: null };
                        }
                        if (autoOpen) {
                          window.location.assign(siteUrl);
                        }
                        if (showProgress && !autoOpen) {
                          UI.setProgress(100);
                          UI.stopProgress();
                          setScopedLoading(false);
                        }
                        Manager.refreshManager();
                        return { siteId: result.siteId, siteUrl: siteUrl };
                      });
                    });
                  });
                });
              });
            });
            });
          });
        });
      })
      .then(function () {
        UI.setStatus(currentShareLink);
        if (surfaceCreateLinkError) {
          setCreateLinkFeedback('');
        }
      })
      .catch(function (err) {
        var message = formatUserError(err, effectiveZipUrl);
        if (opts.embed) {
          Share.setShareLink('');
          currentIndexPath = '';
          showEmbedFallback(effectiveZipUrl, message);
          return;
        }
        Share.setShareLink('');
        currentIndexPath = '';
        currentRestrictions = null;
        RestrictionUI.applyRestrictionsToActions(currentRestrictions);
        if (!err || !err.skipStatus) {
          UI.setStatus(message);
        }
        if (surfaceCreateLinkError) {
          setCreateLinkFeedback(message);
        }
        if (autoOpen) {
          setScopedLoading(false);
        }
        if (showProgress && !autoOpen) {
          UI.stopProgress();
          setScopedLoading(false);
        }
      });
  }


  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      Share.copyText(currentShareLink);
    });
  }
  if (updateActionButton) {
    updateActionButton.addEventListener('click', function () {
      var zipUrl = updateActionButton.getAttribute('data-zip-url') || currentZipUrl || '';
      var indexPath = updateActionButton.getAttribute('data-index-path') || '';
      if (!zipUrl) return;
      hideUpdateBanner();
      loadZip(zipUrl, { force: true, autoOpen: false, preferredIndexPath: indexPath });
    });
  }
  if (updateDismissButton) {
    updateDismissButton.addEventListener('click', function () {
      hideUpdateBanner();
    });
  }

  function openQrWindow(shareLink) {
    if (!shareLink) return;
    var target = 'qr.html#' + encodeURIComponent(shareLink);
    var w = null;
    try {
      // Best-effort "new window" (popup). Browsers/user settings may still open a new tab,
      // especially on mobile.
      var width = 560;
      var height = 720;
      var left = 0;
      var top = 0;
      try {
        left = Math.max(0, Math.round((window.screenX || 0) + ((window.outerWidth || width) - width) / 2));
        top = Math.max(0, Math.round((window.screenY || 0) + ((window.outerHeight || height) - height) / 2));
      } catch (e) {}
      var features = [
        'popup=yes',
        'width=' + width,
        'height=' + height,
        'left=' + left,
        'top=' + top,
        'resizable=yes',
        'scrollbars=yes',
        'toolbar=no',
        'menubar=no',
        'location=no',
        'status=no'
      ].join(',');
      w = window.open(target, 'vwz-qr', features);
      if (!w) {
        // Fallback (popup blocked): open a new tab.
        w = window.open(target, '_blank');
      }
    } catch (e) {
      w = null;
    }
    try {
      if (w) w.opener = null;
    } catch (e) {}
  }

  if (qrButton) {
    qrButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      openQrWindow(currentShareLink);
    });
  }

  if (embedButton) {
    embedButton.addEventListener('click', function () {
      if (!currentZipUrl) {
        return;
      }
      openEmbedModalForZip(currentZipUrl);
    });
  }

  if (embedModal) {
    if (embedCloseButtons && embedCloseButtons.length) {
      embedCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeEmbedModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeEmbedModal();
      }
    });
  }
  if (updateCheckModal) {
    if (updateCheckCloseButtons && updateCheckCloseButtons.length) {
      updateCheckCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeUpdateCheckModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !updateCheckModal.hasAttribute('hidden')) {
        closeUpdateCheckModal();
      }
    });
  }
  if (privacyOpen && privacyPopover) {
    privacyOpen.addEventListener('click', function (event) {
      event.preventDefault();
      if (privacyPopover.hasAttribute('hidden')) {
        openPrivacyPopover();
      } else {
        closePrivacyPopover();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !privacyPopover.hasAttribute('hidden')) {
        closePrivacyPopover();
      }
    });
    document.addEventListener('click', function (event) {
      if (privacyPopover.hasAttribute('hidden')) return;
      var target = event.target;
      if (privacyOpen.contains(target) || privacyPopover.contains(target)) return;
      closePrivacyPopover();
    });
    document.addEventListener('focusin', function (event) {
      if (privacyPopover.hasAttribute('hidden')) return;
      var target = event.target;
      if (privacyOpen.contains(target) || privacyPopover.contains(target)) return;
      closePrivacyPopover();
    });
    window.addEventListener('resize', function () {
      if (!privacyPopover.hasAttribute('hidden')) {
        closePrivacyPopover();
      }
    });
  }

  if (embedCopyButton) {
    embedCopyButton.addEventListener('click', function () {
      if (!embedCode || !embedCode.value) {
        return;
      }
      Share.copyText(embedCode.value, embedCopyButton);
    });
  }

  if (dropzone) {
    var stopEvent = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    dropzone.addEventListener('dragenter', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragover', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragleave', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
    });
    dropzone.addEventListener('drop', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
      collectFilesFromDrop(event);
    });
  }
  if (quickDropzone) {
    var stopQuickDropEvent = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    quickDropzone.addEventListener('dragenter', function (event) {
      stopQuickDropEvent(event);
      quickDropzone.classList.add('is-dragover');
    });
    quickDropzone.addEventListener('dragover', function (event) {
      stopQuickDropEvent(event);
      quickDropzone.classList.add('is-dragover');
    });
    quickDropzone.addEventListener('dragleave', function (event) {
      stopQuickDropEvent(event);
      quickDropzone.classList.remove('is-dragover');
    });
    quickDropzone.addEventListener('drop', function (event) {
      stopQuickDropEvent(event);
      quickDropzone.classList.remove('is-dragover');
      focusZipperFlow('files');
      collectFilesFromDrop(event);
    });
  }

  if (folderInput) {
    folderInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (folderButton && folderInput) {
    folderButton.addEventListener('click', function () {
      folderInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (fileButton && fileInput) {
    fileButton.addEventListener('click', function () {
      fileInput.click();
    });
  }
  if (quickFolderInput) {
    quickFolderInput.addEventListener('change', function (event) {
      focusZipperFlow('files');
      collectFilesFromInput(event.target.files || []);
      event.target.value = '';
    });
  }
  if (quickFolderButton && quickFolderInput) {
    quickFolderButton.addEventListener('click', function () {
      quickFolderInput.value = '';
      focusZipperFlow('files');
    });
  }
  if (quickFileInput) {
    quickFileInput.addEventListener('change', function (event) {
      focusZipperFlow('files');
      collectFilesFromInput(event.target.files || []);
      event.target.value = '';
    });
  }
  if (quickFileButton && quickFileInput) {
    quickFileButton.addEventListener('click', function () {
      quickFileInput.value = '';
      focusZipperFlow('files');
    });
  }

  if (quickHtmlInput) {
    quickHtmlInput.addEventListener('input', function () {
      syncQuickHtmlToZipper();
    });
    quickHtmlInput.addEventListener('paste', function () {
      setTimeout(function () {
        if (quickHtmlInput && quickHtmlInput.value && quickHtmlInput.value.trim()) {
          applyQuickHtmlToZipper();
        }
      }, 0);
    });
    quickHtmlInput.addEventListener('keydown', function (event) {
      var isEnter = event.key === 'Enter';
      var withModifier = event.ctrlKey || event.metaKey;
      if (!isEnter || !withModifier) return;
      event.preventDefault();
      applyQuickHtmlToZipper();
    });
  }

  if (newResourceButton) {
    newResourceButton.addEventListener('click', function () {
      resetPublishFlow();
    });
  }

  if (buildZipButton) {
    buildZipButton.addEventListener('click', function () {
      buildZipFromActiveFlow();
    });
  }

  if (previewResourceButton) {
    previewResourceButton.addEventListener('click', function () {
      openLocalPreview();
    });
  }
  if (previewApplyRestrictionsInput) {
    previewApplyRestrictionsInput.addEventListener('change', function () {
      if (!previewApplyRestrictionsInput.checked) return;
      var restrictions = RestrictionUI.buildRestrictionsPayload();
      if (!restrictions) {
        openMainSettingsModal();
      }
    });
  }

  document.addEventListener('vwz:restriction-summary-change', function () {
    syncPreviewRestrictionsVisibility();
    renderResourceStatePanel();
  });

  if (zipNameInput) {
    zipNameInput.addEventListener('input', function () {
      zipNameDirty = true;
    });
  }

  if (resourceTitleInput) {
    resourceTitleInput.addEventListener('input', function () {
      resourceTitleDirty = true;
      syncZipNameDefault();
    });
  }

  if (htmlZipInput) {
    htmlZipInput.addEventListener('input', function () {
      var hasHtml = !!(htmlZipInput.value && htmlZipInput.value.trim());
      if (hasHtml) {
        preferredZipBuildFlow = 'html';
        if (!selectedFiles || !selectedFiles.length) {
          syncResourceTitleFromHtml(htmlZipInput.value);
        }
        UI.setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        if (selectedFiles && selectedFiles.length) {
          preferredZipBuildFlow = 'files';
        } else if (!resourceTitleDirty && resourceTitleInput) {
          resourceTitleInput.value = '';
          syncResourceTitleToggleState();
          syncZipNameDefault();
        }
        UI.setHtmlZipStatus(t('zipper.html.status.empty'));
      }
      refreshPrimaryUploadSummary();
      updateBuildZipButtonLabel();
      syncZipperTabVisibility();
    });
  }

  if (htmlZipBuildButton) {
    htmlZipBuildButton.addEventListener('click', function () {
      buildZipFromHtml();
    });
  }
  function syncForceFolderNoteVisibility() {
    if (!forceFolderNoteNode || !forceFolderViewerInput) return;
    if (forceFolderViewerInput.checked) {
      forceFolderNoteNode.removeAttribute('hidden');
    } else {
      forceFolderNoteNode.setAttribute('hidden', '');
    }
  }
  if (forceFolderViewerInput) {
    forceFolderViewerInput.addEventListener('change', function () {
      syncForceFolderNoteVisibility();
      refreshUploadSelectionSummary();
    });
  }
  syncForceFolderNoteVisibility();
  function syncRestrictionEditButtonVisibility() {
    if (!restrictionEditButton || !restrictionToggle) return;
    if (restrictionToggle.checked) {
      restrictionEditButton.removeAttribute('hidden');
    } else {
      restrictionEditButton.setAttribute('hidden', '');
    }
  }
  syncRestrictionEditButtonVisibility();
  if (restrictionToggle) {
    restrictionToggle.addEventListener('change', function () {
      if (restrictionToggleProxy) {
        restrictionToggleProxy.checked = !!restrictionToggle.checked;
      }
      syncRestrictionEditButtonVisibility();
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionDefaults();
      if (!restrictionToggle.checked) {
        restrictionZipFile = null;
        if (restrictionZipInput) {
          restrictionZipInput.value = '';
        }
      }
      updateRestrictZipAccordionState();
    });
  }
  if (restrictionToggleProxy && restrictionToggle) {
    restrictionToggleProxy.checked = !!restrictionToggle.checked;
    restrictionToggleProxy.addEventListener('change', function () {
      var next = !!restrictionToggleProxy.checked;
      if (restrictionToggle.checked !== next) {
        restrictionToggle.checked = next;
        restrictionToggle.dispatchEvent(new Event('change'));
      }
      if (next) {
        openMainSettingsModal();
      }
    });
  }
  if (restrictionHasStart) {
    restrictionHasStart.addEventListener('change', function () {
      if (restrictionHasStart.checked && restrictionStartInput) {
        restrictionStartInput.value = formatLocalDateTime(new Date());
      }
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionNoEnd) {
    restrictionNoEnd.addEventListener('change', function () {
      if (restrictionNoEnd.checked && restrictionEndInput) {
        restrictionEndInput.value = formatLocalDateTime(new Date());
      }
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionLiveEnd) {
    restrictionLiveEnd.addEventListener('change', function () {
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionWarningMinutes) {
    restrictionWarningMinutes.addEventListener('input', function () {
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionSummary();
    });
    restrictionWarningMinutes.addEventListener('change', function () {
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionWarningMessage) {
    restrictionWarningMessage.addEventListener('input', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionStartInput) {
    restrictionStartInput.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
    restrictionStartInput.addEventListener('input', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionEndInput) {
    var isFirefoxBrowser = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent || '');
    var ensureFirefoxEndHasTime = function () {
      if (!isFirefoxBrowser) return;
      if (restrictionNoEnd && !restrictionNoEnd.checked) return;
      var currentValue = restrictionEndInput.value ? String(restrictionEndInput.value).trim() : '';
      var normalizedCurrent = Restrictions.normalizeDateTimeValue(currentValue, { endOfDay: true });
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(normalizedCurrent)) {
        if (!currentValue || /--\s*:\s*--/.test(currentValue) || /^\d{4}-\d{2}-\d{2}$/.test(currentValue) || /^\d{4}-\d{2}-\d{2}T$/.test(currentValue)) {
          restrictionEndInput.value = normalizedCurrent;
        }
        return;
      }
      var startValue = restrictionStartInput && restrictionStartInput.value ? restrictionStartInput.value : '';
      var normalizedStart = Restrictions.normalizeDateTimeValue(startValue);
      var dayMatch = normalizedStart.match(/^(\d{4}-\d{2}-\d{2})/);
      var baseDay = dayMatch ? dayMatch[1] : formatLocalDateTime(new Date()).slice(0, 10);
      restrictionEndInput.value = baseDay + 'T23:59';
    };
    var maybeAutofillRestrictionEndTime = function () {
      var raw = restrictionEndInput.value ? String(restrictionEndInput.value).trim() : '';
      if (!raw) return;
      var missingTime = /^\d{4}-\d{2}-\d{2}$/.test(raw)
        || /^\d{4}-\d{2}-\d{2}T$/.test(raw)
        || /--\s*:\s*--/.test(raw);
      if (!missingTime) return;
      var normalized = Restrictions.normalizeDateTimeValue(raw, { endOfDay: true });
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(normalized)) {
        restrictionEndInput.value = normalized;
      }
    };
    var refreshRestrictionEndSummary = function () {
      maybeAutofillRestrictionEndTime();
      RestrictionUI.updateRestrictionSummary();
    };
    restrictionEndInput.addEventListener('change', refreshRestrictionEndSummary);
    restrictionEndInput.addEventListener('input', refreshRestrictionEndSummary);
    restrictionEndInput.addEventListener('blur', refreshRestrictionEndSummary);
    restrictionEndInput.addEventListener('focus', function () {
      ensureFirefoxEndHasTime();
      RestrictionUI.updateRestrictionSummary();
    });
    restrictionEndInput.addEventListener('mousedown', function () {
      ensureFirefoxEndHasTime();
    });
    restrictionEndInput.addEventListener('click', function () {
      setTimeout(refreshRestrictionEndSummary, 0);
    });
  }
  if (restrictionAllowShare) {
    restrictionAllowShare.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionAllowEmbed) {
    restrictionAllowEmbed.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionAllowDownload) {
    restrictionAllowDownload.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionZipPick && restrictionZipInput) {
    restrictionZipPick.addEventListener('click', function () {
      restrictionZipInput.click();
    });
  }
  if (restrictionZipInput) {
    restrictionZipInput.addEventListener('change', function () {
      restrictionZipFile = restrictionZipInput.files && restrictionZipInput.files[0] ? restrictionZipInput.files[0] : null;
      updateRestrictZipAccordionState();
      updateBuildZipButtonLabel();
    });
  }
  if (restrictionZipApply) {
    restrictionZipApply.addEventListener('click', function () {
      applyRestrictionsToZipFile(restrictionZipFile);
    });
  }
  if (restrictionZipEnable) {
    restrictionZipEnable.addEventListener('click', function () {
      openMainSettingsModal();
      // After opening, move focus to the toggle to make the next action obvious.
      setTimeout(function () {
        try {
          if (restrictionToggle && restrictionToggle.focus) restrictionToggle.focus();
        } catch (e) {}
      }, 0);
    });
  }

  function handleCreateLink(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var zipUrl = input.value.trim();
    if (!zipUrl) {
      return;
    }
    setPublishRoute('b');
    setCreateLinkFeedback('');
    Nav.setActiveTab('home');
    Nav.setPublishModule('');
    ignoreRestrictionsForShare = true;
    loadZip(zipUrl, { force: true, allowInactive: true, loadingMode: 'overlay', surfaceCreateLinkError: true })
      .finally(function () {
        ignoreRestrictionsForShare = false;
      });
  }
  if (form) {
    form.addEventListener('submit', handleCreateLink);
  }
  if (!form && createLinkButton) {
    createLinkButton.addEventListener('click', handleCreateLink);
  }
  if (input) {
    input.addEventListener('input', function () {
      updateLinkSubtitle();
      if (input.value && input.value.trim()) {
        setPublishRoute('b');
      }
    });
  }

  publishRouteCards.forEach(function (card) {
    var route = card.getAttribute('data-publish-route-card');
    if (!route) return;
    var activate = function () {
      setPublishRoute(route);
    };
    card.addEventListener('click', activate);
    card.addEventListener('keydown', function (event) {
      var key = event.key;
      if (key !== 'Enter' && key !== ' ') return;
      event.preventDefault();
      activate();
    });
  });

  publishRoutePanels.forEach(function (panel) {
    var route = panel.getAttribute('data-publish-route');
    if (!route) return;
    panel.addEventListener('click', function () {
      setPublishRoute(route);
    });
    panel.addEventListener('focusin', function () {
      setPublishRoute(route);
    });
  });

  var params = new URLSearchParams(window.location.search);
  var urlParam = params.get('url');
  var shortParam = params.get('key') || params.get('short') || params.get('s');
  var initialTabParam = String(params.get('tab') || '').toLowerCase();
  if (urlParam) {
    ignoreRestrictionsForShare = false;
  }
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      setLanguage(langSelect.value);
    });
  }
  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      applyThemeMode(themeSelect.value);
    });
  }
  bindSystemThemeListener();
  applyThemeMode(getInitialThemeMode(), { persist: false });
  setLanguage(getInitialLang());
  updateServiceInfo();
  scheduleAnalyticsLoad();
  updateRestrictZipAccordionState();
  syncZipperTabVisibility();
  var goTabButtons = document.querySelectorAll('[data-go-tab]');
  if (goTabButtons.length) {
    goTabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-tab');
        if (target === 'zipper' && tabZipperButton && tabZipperButton.hasAttribute('hidden')) {
          return;
        }
        if (target) {
          if (target === 'home' || target === 'zipper') {
            Nav.setActiveTab(target);
            Nav.setPublishModule(target === 'home' ? '' : target);
          } else {
            Nav.setActiveTab(target);
          }
        }
      });
    });
  }
  if (tabButtons.length && tabPanels.length) {
    var openTab = function (tabName) {
      if (tabName === 'home') {
        Nav.setActiveTab('home');
        Nav.setPublishModule('');
        return;
      }
      if (tabName === 'zipper') {
        if (tabZipperButton && tabZipperButton.hasAttribute('hidden')) {
          Nav.setActiveTab('home');
          Nav.setPublishModule('');
          return;
        }
        Nav.setActiveTab(tabName);
        Nav.setPublishModule(tabName);
        return;
      }
      Nav.setActiveTab(tabName);
    };
    var tabButtonList = Array.prototype.slice.call(tabButtons);
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var tab = button.getAttribute('data-tab');
        openTab(tab);
      });
      button.addEventListener('keydown', function (event) {
        var key = event.key;
        if (key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Home' && key !== 'End') return;
        event.preventDefault();
        var visibleTabButtons = tabButtonList.filter(function (node) {
          return !node.hasAttribute('hidden');
        });
        if (!visibleTabButtons.length) return;
        var currentIndex = visibleTabButtons.indexOf(button);
        if (currentIndex < 0) currentIndex = 0;
        var nextIndex = currentIndex;
        if (key === 'Home') nextIndex = 0;
        if (key === 'End') nextIndex = visibleTabButtons.length - 1;
        if (key === 'ArrowLeft') nextIndex = (currentIndex - 1 + visibleTabButtons.length) % visibleTabButtons.length;
        if (key === 'ArrowRight') nextIndex = (currentIndex + 1) % visibleTabButtons.length;
        var nextButton = visibleTabButtons[nextIndex];
        if (!nextButton) return;
        var tab = nextButton.getAttribute('data-tab');
        openTab(tab);
        nextButton.focus();
      });
    });
    Nav.setPublishModule('');
    if (!urlParam && !shortParam && initialTabParam) {
      openTab(initialTabParam === 'manager' ? 'manager' : 'home');
    }
  }
  if (managerList) {
    managerList.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      var button = target.closest('button');
      if (!button) return;
      if (button.disabled) return;
      var action = button.getAttribute('data-action');
      var siteId = button.getAttribute('data-site-id');
      var indexPath = button.getAttribute('data-index-path') || '';
      var zipUrl = button.getAttribute('data-zip-url') || '';
      if (action === 'delete' && siteId) {
        button.classList.add('is-active');
        Storage.deleteSite(siteId).then(function () {
          notifySitesChanged();
          Manager.refreshManager();
        }).finally(function () {
          button.classList.remove('is-active');
        });
        return;
      }
      if (action === 'view' && siteId) {
        Storage.getSite(siteId).then(function (site) {
          if (site && site.url) {
            // Background check when opening from the eye icon.
            checkForRemoteUpdate(site, { showBanner: false }).catch(function () {});
          }
          if (site && Restrictions.isRestrictionActive(site.restrictions) && !Restrictions.isRestrictionAllowedNow(site.restrictions)) {
            if (Restrictions.isRestrictionExpired(site.restrictions)) {
              return Storage.deleteSite(siteId).then(function () {
                notifySitesChanged();
                Manager.refreshManager();
                RestrictionUI.showRestrictionModal(site.restrictions);
              });
            }
            RestrictionUI.showRestrictionModal(site.restrictions);
            return;
          }
          var siteUrl = buildSiteUrl(siteId, indexPath || '');
          window.open(siteUrl, '_blank');
        });
        return;
      }
      if (action === 'share' && zipUrl) {
        buildShareLinkAsync(zipUrl, true, indexPath || '').then(function (shareLink) {
          Share.copyText(shareLink, button);
        }).catch(function () {
          Share.copyText(buildShareLink(zipUrl, true, indexPath || ''), button);
        });
        return;
      }
      if (action === 'qr' && zipUrl) {
        buildShareLinkAsync(zipUrl, true, indexPath || '').then(function (shareLink) {
          openQrWindow(shareLink);
        }).catch(function () {
          openQrWindow(buildShareLink(zipUrl, true, indexPath || ''));
        });
        return;
      }
      if (action === 'embed' && zipUrl) {
        Share.copyText(buildEmbedSnippet(zipUrl, indexPath || ''), button);
        return;
      }
      if (action === 'download' && zipUrl) {
        var downloadUrl = normalizeZipUrl(zipUrl);
        window.open(downloadUrl, '_blank');
        return;
      }
      if (action === 'update' && zipUrl) {
        button.classList.add('is-updating');
        button.disabled = true;
        UI.showInlineToast(button, t('manager.actions.updating'));
        Promise.resolve(loadZip(zipUrl, {
          force: true,
          autoOpen: false,
          showProgress: false,
          fromManager: true,
          preferredIndexPath: indexPath || ''
        })).then(function () {
          UI.showInlineToast(button, t('manager.actions.updated'));
        }).catch(function (err) {
          UI.showInlineToast(button, (err && err.userMessage) || t('errors.loadZip'));
        }).finally(function () {
          if (document.body.contains(button)) {
            button.classList.remove('is-updating');
            button.disabled = false;
          }
        });
        return;
      }
      if (action === 'edit' && siteId) {
        var item = button.closest('.manager-item');
        if (!item) return;
        var titleEl = item.querySelector('[data-title]');
        startTitleEdit(siteId, titleEl);
      }
    });
  }
  var sortDirButton = document.querySelector('[data-manager-sort-dir]');
  if (managerSortSelect) {
    Manager.setManagerSort(Manager.getManagerSort());
    managerSortSelect.addEventListener('change', function () {
      Manager.setManagerSort(managerSortSelect.value);
      Manager.refreshManager();
    });
  }
  if (managerCheckUpdatesButton) {
    managerCheckUpdatesButton.addEventListener('click', function () {
      checkUpdatesForAllSites();
    });
  }
  if (sortDirButton) {
    Manager.setManagerSortDir(Manager.getManagerSortDir());
    sortDirButton.addEventListener('click', function () {
      var nextDir = Manager.getManagerSortDir() === 'asc' ? 'desc' : 'asc';
      Manager.setManagerSortDir(nextDir);
      Manager.refreshManager();
    });
  }
  if (cleanupThresholdInput) {
    cleanupThresholdInput.addEventListener('input', function () {
      setCleanupThreshold(cleanupThresholdInput.value);
    });
  }
  if (cleanupDaysInput) {
    cleanupDaysInput.addEventListener('change', function () {
      if (cleanupNeverInput && cleanupNeverInput.checked) return;
      setCleanupDays(cleanupDaysInput.value);
      Manager.cleanupOldSites();
      Manager.refreshManager();
    });
  }
  if (cleanupNeverInput) {
    cleanupNeverInput.addEventListener('change', function () {
      if (cleanupNeverInput.checked) {
        setCleanupDays(CLEANUP_DAYS_NEVER);
      } else {
        setCleanupDays(cleanupDaysInput && cleanupDaysInput.value ? cleanupDaysInput.value : CLEANUP_DAYS_DEFAULT);
      }
      Manager.cleanupOldSites();
      Manager.refreshManager();
    });
  }
  if (resetCleanupButton) {
    resetCleanupButton.addEventListener('click', function () {
      setCleanupThreshold(CLEANUP_THRESHOLD_DEFAULT);
      setCleanupDays(CLEANUP_DAYS_DEFAULT);
      Manager.cleanupOldSites();
      Manager.refreshManager();
    });
  }
  if (deleteAllButton) {
    deleteAllButton.addEventListener('click', function () {
      if (!confirm(t('manager.deleteAllConfirm'))) {
        return;
      }
      Storage.getAllSites().then(function (sites) {
        var ids = sites.map(function (site) { return site.id; });
        return Storage.deleteSitesSequential(ids);
      }).then(function () {
        notifySitesChanged();
        Manager.refreshManager();
      });
    });
  }
  if (managerSettingsOpenButton && managerSettingsModal) {
    managerSettingsOpenButton.addEventListener('click', function () {
      openManagerSettingsModal();
    });
    if (managerSettingsCloseButtons && managerSettingsCloseButtons.length) {
      managerSettingsCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeManagerSettingsModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeManagerSettingsModal();
      }
    });
  }

  if (restrictCloseButtons && restrictCloseButtons.length) {
    restrictCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (restrictModal) {
          restrictModal.setAttribute('hidden', '');
        }
      });
    });
  }

  if (mainSettingsOpenButtons && mainSettingsOpenButtons.length && mainSettingsModal) {
    mainSettingsOpenButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        openMainSettingsModal();
      });
    });
    if (mainSettingsCloseButtons && mainSettingsCloseButtons.length) {
      mainSettingsCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeMainSettingsModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainSettingsModal && !mainSettingsModal.hasAttribute('hidden')) {
        closeMainSettingsModal();
      }
    });
  }
  var lockIndicators = document.querySelectorAll('[data-lock-indicator]');
  if (lockIndicators && lockIndicators.length && mainSettingsModal) {
    lockIndicators.forEach(function (node) {
      node.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        openMainSettingsModal();
      });
      node.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openMainSettingsModal();
        }
      });
    });
  }
  if (aboutOpen && aboutModal) {
    var aboutDialog = aboutModal.querySelector('[role="dialog"]') || aboutModal;
    var aboutLastFocus = null;

    function getFocusableElements(container) {
      if (!container) return [];
      return Array.prototype.slice.call(container.querySelectorAll(
        'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'
      )).filter(function (el) {
        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
      });
    }

    function closeAboutModal() {
      if (aboutModal.hasAttribute('hidden')) return;
      aboutModal.setAttribute('hidden', '');
      if (aboutLastFocus && aboutLastFocus.focus) {
        try { aboutLastFocus.focus(); } catch (e) { /* ignore */ }
      }
      aboutLastFocus = null;
    }

    function openAboutModal() {
      aboutLastFocus = document.activeElement;
      aboutModal.removeAttribute('hidden');
      var title = aboutModal.querySelector('#about-title');
      if (title && title.focus) {
        try { title.focus(); } catch (e) { /* ignore */ }
      }
    }

    aboutOpen.addEventListener('click', function () {
      openAboutModal();
    });

    aboutCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        closeAboutModal();
      });
    });

    aboutModal.addEventListener('keydown', function (event) {
      if (aboutModal.hasAttribute('hidden')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeAboutModal();
        return;
      }
      if (event.key !== 'Tab') return;

      var focusables = getFocusableElements(aboutDialog);
      if (!focusables.length) return;

      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      var active = document.activeElement;

      if (!aboutDialog.contains(active)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey) {
        if (active === first) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last) {
        event.preventDefault();
        first.focus();
      }
    });

    // Internal navigation inside the help dialog, without changing the URL hash.
    aboutModal.addEventListener('click', function (event) {
      var link = event.target && event.target.closest ? event.target.closest('[data-help-nav] a[href^="#"]') : null;
      if (!link) return;
      var href = link.getAttribute('href') || '';
      var id = href.slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      try { target.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) { target.scrollIntoView(true); }
      if (target.focus) {
        try { target.focus(); } catch (e) { /* ignore */ }
      }
    });
  }
  if (htmlModal) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        HtmlPicker.close();
      }
    });
  }
  if (reactModal) {
    if (reactCloseButtons && reactCloseButtons.length) {
      reactCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeReactPromptModal();
        });
      });
    }
    if (reactCopyButton) {
      reactCopyButton.addEventListener('click', function () {
        if (!reactPrompt || !reactPrompt.value) {
          return;
        }
        Share.copyText(reactPrompt.value, reactCopyButton);
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeReactPromptModal();
      }
    });
  }
  function startFromUrl(resolvedUrl) {
    if (input) {
      input.value = resolvedUrl;
    }
    updateLinkSubtitle();
    var entryParam = params.get('entry') || params.get('index') || params.get('path') || '';
    var viewParam = (params.get('view') || '').toLowerCase();
    var embedParam = (params.get('embed') || '').toLowerCase();
    var forceParam = (params.get('force') || params.get('update') || params.get('refresh') || '').toLowerCase();
    var embedActive = embedParam === '1' || embedParam === 'true' || embedParam === 'yes';
    var autoOpen = viewParam === 'full' || viewParam === '1';
    var force = forceParam === '1' || forceParam === 'true' || forceParam === 'yes';
    if (embedActive) {
      var embedIdParam = params.get('embedId') || '';
      setEmbedMode(true, embedIdParam);
      loadZip(resolvedUrl, { force: force, autoOpen: false, embed: true, embedId: embedIdParam, preferredIndexPath: entryParam });
    } else {
      setEmbedMode(false, '');
      Nav.setActiveTab('home');
      Nav.setPublishModule('');
      loadZip(resolvedUrl, { force: force, autoOpen: autoOpen, preferredIndexPath: entryParam });
    }
  }

  Manager.cleanupOldSites();
  Manager.refreshManager();
  refreshFooterVersion();
  if (!urlParam && shortParam) {
    UI.setLoading(true);
    resolveShortToken(shortParam).then(function (resolvedUrl) {
      startFromUrl(resolvedUrl);
    }).catch(function (err) {
      UI.setLoading(false);
      UI.setStatus(formatUserError(err));
    });
  } else if (urlParam) {
    startFromUrl(urlParam);
  } else {
    setEmbedMode(false, '');
    Nav.setActiveTab('home');
    Nav.setPublishModule('');
    UI.setLoading(false);
  }

  window.addEventListener('pageshow', function (event) {
    if (event.persisted && Manager && Manager.refreshManager) {
      Manager.refreshManager();
    }
  });
  window.addEventListener('focus', function () {
    if (Manager && Manager.refreshManager) {
      Manager.refreshManager();
    }
  });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible') return;
    if (Manager && Manager.refreshManager) {
      Manager.refreshManager();
    }
  });
  window.addEventListener('storage', function (event) {
    if (!event || event.key !== SITES_SYNC_KEY) return;
    if (Manager && Manager.refreshManager) {
      Manager.refreshManager();
    }
  });
})();
