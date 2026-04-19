(function () {
  var Storage = window.Storage || {};
  var Restrictions = window.Restrictions || {};
  var UI = window.UI || {};
  var t = function (key) { return key; };
  var currentLang = 'es';
  var managerContext = null;

  function ctx(key, fallback) {
    return managerContext && key in managerContext ? managerContext[key] : fallback;
  }

  function init(options) {
    options = options || {};
    managerContext = options.context || {};
    if (options.t) t = options.t;
    if (options.lang) currentLang = options.lang;
    if (options.storage) Storage = options.storage;
    if (options.restrictions) Restrictions = options.restrictions;
    if (options.ui) UI = options.ui;
  }


  function getManagerSort() {
    try {
      return localStorage.getItem(ctx('MANAGER_SORT_KEY')) || ctx('MANAGER_SORT_DEFAULT');
    } catch (err) {
      return ctx('MANAGER_SORT_DEFAULT');
    }
  }


  function setManagerSort(value) {
    var sortValue = value || ctx('MANAGER_SORT_DEFAULT');
    try {
      localStorage.setItem(ctx('MANAGER_SORT_KEY'), sortValue);
    } catch (err) {}
    if (ctx('managerSortSelect')) {
      ctx('managerSortSelect').value = sortValue;
    }
  }


  function getManagerSortDir() {
    try {
      return localStorage.getItem(ctx('MANAGER_SORT_DIR_KEY')) || ctx('MANAGER_SORT_DIR_DEFAULT');
    } catch (err) {
      return ctx('MANAGER_SORT_DIR_DEFAULT');
    }
  }


  function setManagerSortDir(value) {
    var dirValue = value === 'desc' ? 'desc' : 'asc';
    try {
      localStorage.setItem(ctx('MANAGER_SORT_DIR_KEY'), dirValue);
    } catch (err) {}
    updateSortDirButton(dirValue);
  }


  function updateSortDirButton(dirValue) {
    var button = document.querySelector('[data-manager-sort-dir]');
    if (!button) return;
    var isDesc = dirValue === 'desc';
    button.setAttribute('data-i18n-tooltip', 'manager.sort.dirHelp');
    button.textContent = isDesc ? '↓' : '↑';
    button.setAttribute('aria-label', t(isDesc ? 'manager.sort.dirDesc' : 'manager.sort.dirAsc'));
    button.setAttribute('data-sort-dir', isDesc ? 'desc' : 'asc');
  }


  function cleanupOldSites() {
    var cleanupDays = ctx('getCleanupDays')();
    var cutoff = isFinite(cleanupDays)
      ? Date.now() - cleanupDays * 24 * 60 * 60 * 1000
      : null;
    return Storage.getAllSites().then(function (sites) {
      var oldIds = sites.filter(function (site) {
        if (site && site.temporaryPreview) return true;
        if (cutoff === null) return false;
        return site.updatedAt && site.updatedAt < cutoff;
      }).map(function (site) { return site.id; });
      if (!oldIds.length) return;
      return Storage.deleteSitesSequential(oldIds);
    });
  }


  function sumSiteBytes(sites) {
    return sites.reduce(function (sum, site) {
      return sum + (site.totalBytes || 0);
    }, 0);
  }


  function renderManagerList(sites) {
    if (!ctx('managerList')) return;
    ctx('managerList').innerHTML = '';
    if (!sites.length) {
      var managerToolbar = document.querySelector('.manager-toolbar');
      if (managerToolbar) {
        managerToolbar.setAttribute('hidden', '');
      }
      var empty = document.createElement('p');
      empty.textContent = t('manager.empty');
      ctx('managerList').appendChild(empty);
      return;
    }
    var managerToolbar = document.querySelector('.manager-toolbar');
    if (managerToolbar) {
      managerToolbar.removeAttribute('hidden');
    }
    var sortedSites = sortManagerSites(sites);
    sortedSites.forEach(function (site) {
      var restrictions = site.restrictions || null;
      var canShare = Restrictions.allowShare(restrictions);
      var canEmbed = Restrictions.allowEmbed(restrictions);
      var canView = !Restrictions.isRestrictionBeforeStart(restrictions);
      var canDownload = Restrictions.allowDownload(restrictions);
      var item = document.createElement('div');
      item.className = 'manager-item';
      item.setAttribute('data-site-id', site.id);
      var info = document.createElement('div');
      var title = document.createElement('div');
      title.className = 'manager-item__title';
      title.setAttribute('data-title', 'true');
      var displayTitle = site.title || ctx('deriveTitleFromPath')(site.indexPath) || site.url || t('manager.siteNoUrl');
      title.textContent = displayTitle;
      var meta = document.createElement('div');
      meta.className = 'manager-item__meta';
      var date = site.updatedAt ? new Date(site.updatedAt).toLocaleString(currentLang) : t('manager.noDate');
      var savedLabel = t('manager.savedAt') || '';
      meta.textContent = ctx('formatBytes')(site.totalBytes || 0) + ' · ' + (savedLabel ? (savedLabel + ' ' + date) : date);
      if (site.updatedFromRemoteAt) {
        var updatedLabel = new Date(site.updatedFromRemoteAt).toLocaleString(currentLang);
        var updatedBadge = document.createElement('span');
        updatedBadge.className = 'manager-badge manager-badge--updated';
        updatedBadge.textContent = t('badges.updatedAt', { date: updatedLabel });
        meta.appendChild(updatedBadge);
      }
      if (site.updateAvailable) {
        var updateBadge = document.createElement('span');
        updateBadge.className = 'manager-badge manager-badge--update';
        updateBadge.textContent = t('badges.updateAvailable');
        meta.appendChild(updateBadge);
      }
      if (restrictions && restrictions.enabled) {
        var startLabel = restrictions.startAt ? Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) : '';
        var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) : '';
        if (startLabel) {
          var startBadge = document.createElement('span');
          startBadge.className = 'manager-badge manager-badge--start';
          startBadge.textContent = t('badges.opening', { date: startLabel });
          meta.appendChild(startBadge);
        }
        if (endLabel) {
          var endBadge = document.createElement('span');
          endBadge.className = 'manager-badge manager-badge--end';
          endBadge.textContent = t('badges.closing', { date: endLabel });
          meta.appendChild(endBadge);
        }
        if (!startLabel && !endLabel) {
          var genericBadge = document.createElement('span');
          genericBadge.className = 'manager-badge';
          genericBadge.textContent = t('badges.scheduled');
          meta.appendChild(genericBadge);
        }
      }
      info.appendChild(title);
      // Always hide original URL in manager list for privacy.
      info.appendChild(meta);
      var actions = document.createElement('div');
      actions.className = 'manager-item__actions';
      var viewButton = document.createElement('button');
      viewButton.type = 'button';
      viewButton.className = 'icon-button';
      viewButton.setAttribute('data-action', 'view');
      viewButton.setAttribute('data-site-id', site.id);
      viewButton.setAttribute('data-index-path', site.indexPath || '');
      viewButton.setAttribute('aria-label', t('manager.actions.view'));
      viewButton.setAttribute('data-tooltip', t('manager.actions.view'));
      viewButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7-10.5-7-10.5-7z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>';
      actions.appendChild(viewButton);
      viewButton.disabled = !canView;
      var shareButton = document.createElement('button');
      shareButton.type = 'button';
      shareButton.className = 'icon-button';
      shareButton.setAttribute('data-action', 'share');
      shareButton.setAttribute('data-zip-url', site.url || '');
      // Include the selected entry file in share links (important when the ZIP has no index.html).
      shareButton.setAttribute('data-index-path', site.indexPath || '');
      shareButton.setAttribute('aria-label', t('manager.actions.share'));
      shareButton.setAttribute('data-tooltip', t('manager.actions.share'));
      shareButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 10.7l6.8-3.4"></path><path d="M8.6 13.3l6.8 3.4"></path></svg>';
      actions.appendChild(shareButton);
      shareButton.disabled = !site.url || !canShare;
      var qrButton = document.createElement('button');
      qrButton.type = 'button';
      qrButton.className = 'icon-button';
      qrButton.setAttribute('data-action', 'qr');
      qrButton.setAttribute('data-zip-url', site.url || '');
      qrButton.setAttribute('data-index-path', site.indexPath || '');
      qrButton.setAttribute('aria-label', t('manager.actions.qr'));
      qrButton.setAttribute('data-tooltip', t('manager.actions.qr'));
      // lucide-qr-code
      qrButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>';
      actions.appendChild(qrButton);
      qrButton.disabled = !site.url || !canShare;
      var embedManagerButton = document.createElement('button');
      embedManagerButton.type = 'button';
      embedManagerButton.className = 'icon-button';
      embedManagerButton.setAttribute('data-action', 'embed');
      embedManagerButton.setAttribute('data-zip-url', site.url || '');
      embedManagerButton.setAttribute('data-index-path', site.indexPath || '');
      embedManagerButton.setAttribute('aria-label', t('manager.actions.embed'));
      embedManagerButton.setAttribute('data-tooltip', t('manager.actions.embed'));
      embedManagerButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path><path d="M14 4l-4 16"></path></svg>';
      actions.appendChild(embedManagerButton);
      embedManagerButton.disabled = !site.url || !canEmbed;
      var editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'icon-button';
      editButton.setAttribute('data-action', 'edit');
      editButton.setAttribute('data-site-id', site.id);
      editButton.setAttribute('aria-label', t('manager.actions.edit'));
      editButton.setAttribute('data-tooltip', t('manager.actions.edit'));
      editButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>';
      actions.appendChild(editButton);
      var downloadButton = document.createElement('button');
      downloadButton.type = 'button';
      downloadButton.className = 'icon-button';
      downloadButton.setAttribute('data-action', 'download');
      downloadButton.setAttribute('data-zip-url', site.url || '');
      downloadButton.setAttribute('aria-label', t('manager.actions.download'));
      downloadButton.setAttribute('data-tooltip', t('manager.actions.download'));
      downloadButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v10"></path><path d="M7 9l5 5 5-5"></path><path d="M5 21h14"></path></svg>';
      actions.appendChild(downloadButton);
      downloadButton.disabled = !site.url || !canDownload;
      var updateButton = document.createElement('button');
      updateButton.type = 'button';
      updateButton.className = 'icon-button';
      if (site.updateAvailable) {
        updateButton.classList.add('is-update-available');
      }
      updateButton.setAttribute('data-action', 'update');
      updateButton.setAttribute('data-zip-url', site.url || '');
      updateButton.setAttribute('data-index-path', site.indexPath || '');
      updateButton.setAttribute('aria-label', t('manager.actions.update'));
      updateButton.setAttribute('data-tooltip', t('manager.actions.update'));
      updateButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 12a9 9 0 1 1-2.6-6.4"></path><path d="M21 3v6h-6"></path></svg>';
      actions.appendChild(updateButton);
      updateButton.disabled = !site.url;
      var delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.className = 'icon-button';
      delButton.setAttribute('data-action', 'delete');
      delButton.setAttribute('data-site-id', site.id);
      delButton.setAttribute('aria-label', t('common.delete'));
      delButton.setAttribute('data-tooltip', t('common.delete'));
      delButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>';
      actions.appendChild(delButton);
      item.appendChild(info);
      item.appendChild(actions);
      ctx('managerList').appendChild(item);
    });
  }


  function refreshManager() {
    return Promise.all([Storage.getAllSites(), Storage.estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var visibleSites = sites.filter(function (site) { return !(site && site.temporaryPreview); });
      var expiredIds = sites.filter(function (site) {
        if (site && site.temporaryPreview) return false;
        return Restrictions.isRestrictionActive(site.restrictions) && Restrictions.isRestrictionExpired(site.restrictions);
      }).map(function (site) { return site.id; });
      if (expiredIds.length) {
        return Storage.deleteSitesSequential(expiredIds).then(function () {
          return refreshManager();
        });
      }
      var totalBytes = sumSiteBytes(visibleSites);
      if (ctx('storageUsed')) {
        ctx('storageUsed').textContent = ctx('formatBytes')(totalBytes);
      }
      if (ctx('storageUsedPercent')) {
        var quota = estimate && estimate.quota ? estimate.quota : 0;
        if (quota) {
          var percent = Math.min(100, Math.round((totalBytes / quota) * 100));
          ctx('storageUsedPercent').textContent = percent + '%';
        } else {
          ctx('storageUsedPercent').textContent = '--';
        }
      }
      if (ctx('storageTotal')) {
        ctx('storageTotal').textContent = estimate && estimate.quota ? ctx('formatBytes')(estimate.quota) : '--';
      }
      if (ctx('storageCount')) {
        ctx('storageCount').textContent = String(visibleSites.length);
      }
      renderManagerList(visibleSites);
    });
  }


  function sortManagerSites(sites) {
    var key = getManagerSort();
    var direction = getManagerSortDir();
    var factor = direction === 'desc' ? -1 : 1;
    var collator = new Intl.Collator(currentLang, { sensitivity: 'base', numeric: true });
    return sites.slice().sort(function (a, b) {
      if (key === 'date') {
        var aDate = a.updatedAt || 0;
        var bDate = b.updatedAt || 0;
        return (aDate - bDate) * factor;
      }
      if (key === 'start') {
        var aStart = a.restrictions && a.restrictions.startAt ? Date.parse(a.restrictions.startAt) : 0;
        var bStart = b.restrictions && b.restrictions.startAt ? Date.parse(b.restrictions.startAt) : 0;
        if (isNaN(aStart)) aStart = 0;
        if (isNaN(bStart)) bStart = 0;
        return (aStart - bStart) * factor;
      }
      if (key === 'size') {
        var aSize = a.totalBytes || 0;
        var bSize = b.totalBytes || 0;
        return (aSize - bSize) * factor;
      }
      var aTitle = a.title || ctx('deriveTitleFromPath')(a.indexPath) || a.url || '';
      var bTitle = b.title || ctx('deriveTitleFromPath')(b.indexPath) || b.url || '';
      return collator.compare(aTitle, bTitle) * factor;
    });
  }

  window.Manager = {
    init: init,
    getManagerSort: getManagerSort,
    setManagerSort: setManagerSort,
    getManagerSortDir: getManagerSortDir,
    setManagerSortDir: setManagerSortDir,
    updateSortDirButton: updateSortDirButton,
    cleanupOldSites: cleanupOldSites,
    renderManagerList: renderManagerList,
    refreshManager: refreshManager,
    sortManagerSites: sortManagerSites,
    highlightSites: function (siteIds) {
      if (!siteIds || !siteIds.length || !ctx('managerList')) return;
      var list = ctx('managerList');
      siteIds.forEach(function (siteId) {
        var item = list.querySelector('[data-site-id="' + siteId + '"]');
        if (!item) return;
        item.classList.add('manager-item--highlight');
        setTimeout(function () {
          item.classList.remove('manager-item--highlight');
        }, 2200);
      });
    }
  };
})();
