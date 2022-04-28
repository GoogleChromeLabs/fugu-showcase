/**
 * SVGcode—Convert raster images to SVG vector graphics
 * Copyright (C) 2022 Google LLC
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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
