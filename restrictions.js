(function () {
  function normalizeDateTimeValue(value, options) {
    options = options || {};
    var defaultTime = options.endOfDay ? '23:59' : '00:00';
    if (!value) return '';
    var text = String(value)
      .replace(/[\u200e\u200f\u202f]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!text) return '';

    var withDefault = function (hour, minute) {
      if (hour === '--' || minute === '--' || hour === undefined || minute === undefined || hour === null || minute === null) {
        return defaultTime;
      }
      var h = parseInt(hour, 10);
      var m = parseInt(minute, 10);
      if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) {
        return defaultTime;
      }
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      return pad(h) + ':' + pad(m);
    };

    var pad2 = function (n) { return (n < 10 ? '0' : '') + n; };
    var buildIso = function (year, month, day, hour, minute) {
      var y = parseInt(year, 10);
      var mo = parseInt(month, 10);
      var d = parseInt(day, 10);
      if (isNaN(y) || isNaN(mo) || isNaN(d)) return '';
      if (mo < 1 || mo > 12 || d < 1 || d > 31) return '';
      return y + '-' + pad2(mo) + '-' + pad2(d) + 'T' + withDefault(hour, minute);
    };

    var numbers = text.match(/\d+/g) || [];
    var timeMissing = /--\s*:\s*--/.test(text);
    var hour = timeMissing ? null : (numbers.length > 3 ? numbers[3] : null);
    var minute = timeMissing ? null : (numbers.length > 4 ? numbers[4] : null);
    if (numbers.length >= 3) {
      // YYYY-MM-DD...
      if (String(numbers[0]).length === 4) {
        var ymdIso = buildIso(numbers[0], numbers[1], numbers[2], hour, minute);
        if (ymdIso) return ymdIso;
      }
      // DD/MM/YYYY...
      if (String(numbers[2]).length === 4) {
        var dmyIso = buildIso(numbers[2], numbers[1], numbers[0], hour, minute);
        if (dmyIso) return dmyIso;
      }
    }

    return text;
  }

  function resolveLocale(lang) {
    if (!lang) return 'es-ES';
    var map = {
      es: 'es-ES',
      ca: 'ca-ES',
      gl: 'gl-ES',
      eu: 'eu-ES',
      en: 'en-US',
      de: 'de-DE',
      it: 'it-IT',
      fr: 'fr-FR',
      pt: 'pt-PT'
    };
    return map[lang] || lang;
  }

  function formatRestrictionDate(value, lang) {
    if (!value) return '';
    var date = new Date(value);
    if (isNaN(date.getTime())) return '';
    try {
      var locale = resolveLocale(lang);
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
  }

  function formatCountdown(ms) {
    var totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    var days = Math.floor(totalSeconds / 86400);
    var remainder = totalSeconds % 86400;
    var hours = Math.floor(remainder / 3600);
    var minutes = Math.floor((remainder % 3600) / 60);
    var seconds = remainder % 60;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var time = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    return days > 0 ? (days + 'd ' + time) : time;
  }

  function isRestrictionActive(restrictions) {
    return restrictions && restrictions.enabled;
  }

  function isRestrictionAllowedNow(restrictions) {
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
  }

  function isRestrictionExpired(restrictions) {
    if (!restrictions || !restrictions.enabled) return false;
    if (restrictions.neverExpires) return false;
    if (!restrictions.endAt) return false;
    var end = Date.parse(restrictions.endAt);
    if (isNaN(end)) return false;
    return Date.now() > end;
  }

  function isRestrictionBeforeStart(restrictions) {
    if (!restrictions || !restrictions.enabled) return false;
    if (!restrictions.startAt) return false;
    var start = Date.parse(restrictions.startAt);
    if (isNaN(start)) return false;
    return Date.now() < start;
  }

  function allowShare(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowShare;
  }

  function allowEmbed(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowEmbed;
  }

  function allowDownload(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowDownload;
  }

  function extractRestrictions(entries, decodeUtf8) {
    if (!entries || !entries['restrictions.json']) return null;
    try {
      var raw = decodeUtf8(entries['restrictions.json']);
      var data = JSON.parse(raw || '{}');
      if (!data || !data.enabled) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  window.Restrictions = {
    normalizeDateTimeValue: normalizeDateTimeValue,
    formatRestrictionDate: formatRestrictionDate,
    formatCountdown: formatCountdown,
    isRestrictionActive: isRestrictionActive,
    isRestrictionAllowedNow: isRestrictionAllowedNow,
    isRestrictionExpired: isRestrictionExpired,
    isRestrictionBeforeStart: isRestrictionBeforeStart,
    allowShare: allowShare,
    allowEmbed: allowEmbed,
    allowDownload: allowDownload,
    extractRestrictions: extractRestrictions
  };
})();
