
  const APP_SHELL_CACHE = 'app-shell-06291247853589121';
  const MEDIA_CACHE = 'media-06291247853589121';

  const APP_SHELL_FILES = [
    './',
    './index.html',
    './manifest.webmanifest',
  ];

  const MEDIA_FILES = [    'editor.bridge-core.app.webp',
    'editor.bridge-core.app-dark.webp',
    'sqliteviewer.app.webp',
    'sqliteviewer.app-dark.webp',
    'uspeaking.netlify.app.webp',
    'uspeaking.netlify.app-dark.webp',
    'anaesthetics.app!bluetooth.webp',
    'anaesthetics.app!bluetooth-dark.webp',
    'thelogbook.app.webp',
    'thelogbook.app-dark.webp',
    'md.nico.dev.webp',
    'md.nico.dev-dark.webp',
    'edit.photostack.app.webp',
    'edit.photostack.app-dark.webp',
    'linkcleaner.app.webp',
    'linkcleaner.app-dark.webp',
    'avg-colour.netlify.app.webp',
    'avg-colour.netlify.app-dark.webp',
    'improv-wifi.com.webp',
    'improv-wifi.com-dark.webp',
    'esphome.github.io!esp-web-tools.webp',
    'esphome.github.io!esp-web-tools-dark.webp',
    'esphome.io.webp',
    'esphome.io-dark.webp',
    'stackedit.io.webp',
    'stackedit.io-dark.webp',
    'hexed.it.webp',
    'hexed.it-dark.webp',
    'makecode.com.webp',
    'makecode.com-dark.webp',
    'dannymoerkerke.github.io!file-tree.webp',
    'dannymoerkerke.github.io!file-tree-dark.webp',
    'whatpwacando.today.webp',
    'whatpwacando.today-dark.webp',
    'yakuneba-community.com!welcome!YwAnWZXanuD7QckXWJwd.webp',
    'yakuneba-community.com!welcome!YwAnWZXanuD7QckXWJwd-dark.webp',
    'loilo.github.io!diffr.webp',
    'loilo.github.io!diffr-dark.webp',
    'panel.hostmeapp.com.webp',
    'panel.hostmeapp.com-dark.webp',
    'tgstorage.com.webp',
    'tgstorage.com-dark.webp',
    'boxy-svg.com!app.webp',
    'boxy-svg.com!app-dark.webp',
    'mconverter.eu.webp',
    'mconverter.eu-dark.webp',
    'tidepool.org!uploader.webp',
    'tidepool.org!uploader-dark.webp',
    'web.telegram.org!z.webp',
    'web.telegram.org!z-dark.webp',
    'svgco.de.webp',
    'svgco.de-dark.webp',
    'tomayac.github.io!fugu-showcase!data.webp',
    'tomayac.github.io!fugu-showcase!data-dark.webp',
    'bpmtech.no.webp',
    'bpmtech.no-dark.webp',
    'case.xchart.com.webp',
    'case.xchart.com-dark.webp',
    'spike.legoeducation.com.webp',
    'spike.legoeducation.com-dark.webp',
    'postr.me.webp',
    'postr.me-dark.webp',
    'dev.to.webp',
    'dev.to-dark.webp'
  ];

  const ALL_CACHES = [APP_SHELL_CACHE, MEDIA_CACHE];

  self.addEventListener('install', (installEvent) => {
    installEvent.waitUntil((async () => {
      const appShellCache = await caches.open(APP_SHELL_CACHE);
      await appShellCache.addAll(APP_SHELL_FILES);
      const mediaCache = await caches.open(MEDIA_CACHE);
      await mediaCache.addAll(MEDIA_FILES);
      return self.skipWaiting();
    })());
  });

  self.addEventListener('activate', (activateEvent) => {
    activateEvent.waitUntil((async () => {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map(async (cacheKey) => {
        if (!ALL_CACHES.includes(cacheKey)) {
          await caches.delete(cacheKey);
        }
      }));
      return self.clients.claim();
    })());
  });

  self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith((async () => {
      const request = fetchEvent.request;
      return fetch(request).catch(() => caches.match(request));
    })());
  });

  