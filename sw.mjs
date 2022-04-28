/**
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default `
  const APP_SHELL_CACHE = 'app-shell-RANDOM';
  const MEDIA_CACHE = 'media-RANDOM';

  const APP_SHELL_FILES = [
    './',
    './index.html',
    './manifest.webmanifest',
  ];

  const MEDIA_FILES = [
    /* Screenshots */
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

  `;
