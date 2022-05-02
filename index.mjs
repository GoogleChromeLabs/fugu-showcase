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

import path from 'path';
import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import captureWebsite from 'capture-website';
import filenamifyUrl from 'filenamify-url';
import ogp from 'ogp-parser';
import sharp from 'sharp';

// https://github.com/wilsonzlin/minify-html/issues/65
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const minifyHtml = require('@minify-html/js');

import limit from './utils.mjs';
import fuguSVG from './fugu.svg.mjs';
import style from './style.css.mjs';
import sw from './sw.mjs';
import manifest from './manifest.webmanifest.mjs';

const SKIP_SCREENSHOTS = true;

const SPREADSHEET_URL =
  'https://sheets.googleapis.com/v4/spreadsheets/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/values/Sheet2?key=AIzaSyCkROWBarEOJ9hQJggyrlUFulOFA4h6AW0&alt=json';

const SCREENSHOT_OPTIONS = {
  width: 1280,
  height: 800,
  overwrite: true,
  delay: 2,
  type: 'webp',
};

const CANONICAL_URL = 'https://tomayac.github.io/fugu-showcase/data/';
const EMBED_URL = 'https://developer.chrome.com/blog/fugu-showcase/';

// Make sure file names don't include `#`.
const fileNamifyURL = (url) => {
  return filenamifyUrl(url).replace(/#/g, '');
};

const createRawData = async () => {
  const response = await fetch(SPREADSHEET_URL);
  const json = await response.json();
  const values = json.values;
  const data = values
    // @ToDo: Temporarily skip this URL due to errors.
    .filter((row) => row[1] !== 'https://logseq.com/?spa=true')
    .map((row) => {
      return {
        timestamp: new Date(row[0]),
        appURL: row[1],
        sourceURL: row[2] || null,
        usedAPIs: row[3].split(', ').map((api) => {
          return {
            name: api.replace(/\(https.*\)/g, '').trim(),
            url: api.replace(/.*?\((https.*)\)/g, '$1'),
          };
        }),
        screenshot: `${fileNamifyURL(row[1])}.${SCREENSHOT_OPTIONS.type}`,
      };
    });
  await writeFile(
    path.resolve('data', 'data.json'),
    JSON.stringify(data, null, 2),
  );
  console.log('Successfully created `data.json`.');
  return data;
};

const createScreenshots = async (data, overrideType = null) => {
  let items = data.map((item) => [item.appURL, item.screenshot]);
  const length = items.length;
  if (!overrideType) {
    items = items.concat(items);
  }
  const tasks = items.map(([url, filename], i) => {
    return () => {
      SCREENSHOT_OPTIONS.type = overrideType || SCREENSHOT_OPTIONS.type;
      SCREENSHOT_OPTIONS.darkMode = i >= length;
      filename = SCREENSHOT_OPTIONS.darkMode
        ? filename.replace(
            new RegExp(`(.${SCREENSHOT_OPTIONS.type}$)`),
            '-dark$1',
          )
        : filename;
      if (!SCREENSHOT_OPTIONS.darkMode) {
        data[i].screenshot = filename;
      } else {
        data[i - length].screenshotDark = filename;
      }
      if (SKIP_SCREENSHOTS) {
        return;
      }
      return captureWebsite.buffer(url, SCREENSHOT_OPTIONS).then((buffer) => {
        if (!overrideType) {
          return sharp(buffer)
            .resize({
              width: SCREENSHOT_OPTIONS.width / 2,
              height: SCREENSHOT_OPTIONS.height / 2,
            })
            .toBuffer()
            .then((data) => {
              return writeFile(path.resolve('data', filename), data).then(() =>
                console.log(`Successfully created \`${filename}\`.`),
              );
            })
            .catch((err) => console.log(err));
        }
        return writeFile(path.resolve('data', filename), buffer).then(() =>
          console.log(`Successfully created \`${filename}\`.`),
        );
      });
    };
  });
  await limit(tasks, 5);
};

const createHTML = async (data) => {
  await Promise.all(
    data.map(async (item) => {
      return ogp(item.appURL, { skipOembed: true })
        .then((meta) => {
          item.meta = meta;
          item.title =
            item.meta.ogp?.['og:title'] ||
            item.meta.seo?.title ||
            item.meta.seo?.['og:title'] ||
            item.meta.seo?.['twitter:title'] ||
            item.meta.title ||
            new URL(item.appURL).hostname;
          item.description =
            item.meta.ogp?.['og:description'] ||
            item.meta.seo?.description ||
            item.meta.seo?.['og:description'] ||
            item.meta.seo?.['twitter:description'] ||
            item.meta.description ||
            '';
        })
        .catch((err) => console.error(err));
    }),
  );
  const availableAPIs = new Set();

  const header = `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="A showcase of Project Fugu APIs sourced by community submissions." />
            <meta name="robots" content="noindex,indexifembedded" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Project Fugu API Showcase" />
            <meta property="og:description" content="A showcase of Project Fugu APIs sourced by community submissions." />
            <meta property="og:url" content="${CANONICAL_URL}" />
            <meta property="og:image" content="${CANONICAL_URL}tomayac.github.io!fugu-showcase!data.png" />
            <title>Project Fugu API Showcase</title>
            <link rel="icon" href="${fuguSVG}" />
            <link rel="canonical" href="${EMBED_URL}" />
            <link rel="manifest" href="manifest.webmanifest" />
            ${style}
            <noscript>
              <style>
                article {
                  display: block;
                }
              </style>
            </noscript>
          </head>
          <body>
            <script>
              function runningInIframe() {
                try {
                  return window.self !== window.top;
                } catch {
                  return true;
                }
              }
              const inIframe = runningInIframe();
              if (inIframe) {
                document.documentElement.classList.add('iframe');
              }
            </script>
            <main>
              <h1>
                <a href="./">
                  <img class="logo" src="${fuguSVG}" alt="Project Fugu blowfish logo" width="128" height="128">
                  Project Fugu API Showcase
                </a>
              </h1>
              <p>
                This showcase of <a target="_blank" rel="noopener" href="https://web.dev/fugu-status/">Project Fugu APIs</a>
                is sourced by community submissions. You can propose missing apps by submitting them via this
                <a target="_blank" rel="noopener" href="https://docs.google.com/forms/d/e/1FAIpQLScNd1rClbmFWh6FcMmjUNrwg9RLz8Jk4BkHz_-EOpmkVd_-9g/viewform">form</a>.
                Submissions are reviewed on a regular basis and the site will be updated accordingly.
              </p>`;

  const filterAPIsForm = `
      <form class="search-apis">
        <label>
          Filter used APIs:
          <input list="available-apis" class="search-apis" type="search" />
        </label>
        <button type="reset" class="search-apis">Clear</button>
      </form>`;

  const div = `
      <div class=container>
        ${data
          .sort((a, b) =>
            a.title[0].toLowerCase().localeCompare(b.title[0].toLowerCase()),
          )
          .map((item, i) => {
            const classes = [];
            item.usedAPIs.forEach((usedAPI) => {
              availableAPIs.add(usedAPI.name);
              classes.push(
                usedAPI.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]/gi, '-')
                  .replace(/-+/g, '-')
                  .replace(/-*$/g, ''),
              );
            });
            const fileNameComponents = item.screenshot.split('.');
            fileNameComponents.pop();
            const anchor = fileNameComponents.join('.');
            classes.push(anchor);
            classes.push(item.title.toString().toLowerCase());
            return `
            <article id="${anchor}" class="${classes.join(' ')}">
              <h2><a target="_blank" rel="noopener" href="${item.appURL}">${
              item.title
            }</a></h2>
              <figure>
                <a target="_blank" rel="noopener" href="${item.appURL}">
                  <picture>
                    <source srcset="${
                      item.screenshotDark
                    }" media="(prefers-color-scheme: dark)" />
                    <source srcset="${
                      item.screenshot
                    }" media="(prefers-color-scheme: light)" />
                    <img src="${item.screenshot}"
                        width="${SCREENSHOT_OPTIONS.width}"
                        height="${SCREENSHOT_OPTIONS.height}"
                        alt="Screenshot of ${item.title}"
                        ${i > 6 ? 'loading="lazy"' : ''}>
                  </picture>
                </a>
                ${
                  item.description
                    ? `<figcaption class="description">${item.description}</figcaption>`
                    : ''
                }
              </figure>
              ${
                item.sourceURL
                  ? `<span class="source"><a target="_blank" rel="noopener" href="${item.sourceURL}">Source code</a></span>`
                  : ''
              }
              <span class="launch"><a target="_blank" rel="noopener" href="${
                item.appURL
              }">Launch app</a></span>
              <button type="button" class="share">Share app</button>
              <h3>Used APIs:</h3>
              <ul>${item.usedAPIs
                .map(
                  (usedAPI) =>
                    `<li><a target="_blank" rel="noopener" href="${usedAPI.url}">${usedAPI.name}</a></li>`,
                )
                .join('')}</ul>
              <a class="anchor" href="#${anchor}">#</a>
            </article>
          `;
          })
          .join('')}
      </div>
      <script>
        const EMBED_URL = '${EMBED_URL}';

        const articles = document.querySelectorAll('article');
        const options = document.querySelectorAll('option');
        const button = document.querySelector('button[type="reset"].search-apis');
        const input = document.querySelector('input.search-apis');
        const form = document.querySelector('form.search-apis');
        const searchButton = document.querySelector('button.search-apps');
        const searchInput = document.querySelector('input.search-apps');
        const shareButtons = document.querySelectorAll('.share');
        const container = document.querySelector('.container');
        const anchors = document.querySelectorAll('a.anchor');

        if (inIframe) {
          window.addEventListener('message', (event) => {
            console.log('Iframe received from embedding page', event.data);
            const url = new URL(location.href);
            if ('search' in event.data) {
              if (event.data.search) {
                const [key, value] = event.data.search.split('=');
                url.searchParams.set(key, value);
                input.value = getOptionValue(value);
                input.dispatchEvent(new Event('input'));
              } else {
                url.searchParams.delete('api');
              }
            }
            if ('hash' in event.data) {
              if (event.data.hash) {
                const article = document.querySelector(\`article[id="#\${event.data.hash}"]\`);
                console.log('Selector', \`article[id="#\${event.data.hash}"]\`);
                if (article) {
                  article.classList.add('target');
                  article.scrollIntoView();
                }
                url.hash = event.data.hash;
              } else {
                url.hash = '';
              }
            }
            window.history.pushState({}, '', url);
          });
        }

        if ('clipboard' in navigator && 'writeText' in navigator.clipboard) {
          anchors.forEach((anchor) => {
            anchor.addEventListener('click', async (e) => {
              e.preventDefault();
              const anchorURL = new URL(anchor.href);
              anchor.classList.add('copied');
              setTimeout(() => {
                anchor.classList.remove('copied');
              }, 3000);
              if (inIframe) {
                window.top.postMessage({
                  anchor: anchorURL.hash,
                }, '*');
              }
              window.history.pushState({}, '', anchorURL);
              try {
                const embedURL = new URL(EMBED_URL);
                anchorURL.host = embedURL.host;
                anchorURL.pathname = embedURL.pathname;
                anchorURL.port = '';
                anchorURL.protocol = 'https:';
                await navigator.clipboard.writeText(anchorURL);
              } catch (err) {
                console.error(err.name, err.message);
              }
            });
          });
        }

        const slugify = (string) => {
          return string.toLowerCase().replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').replace(/-*$/g, '');
        };

        const clearURL = () => {
          const url = new URL(location.href);
          url.searchParams.delete('api');
          url.hash = '';
          window.history.pushState({}, '', url);
        };

        const availableAPIs = [${Array.from(availableAPIs.keys())
          .sort()
          .map((api) => `'${api}'`)
          .join(', ')
          .toLowerCase()}].map(slugify);

        searchInput.addEventListener('input', (e) => {
          if (!e.target.value) {
            input.dispatchEvent(new Event('input'));
            return;
          }
          input.value = '';
          clearURL();
          articles
          .forEach((article) => {
            article.style.display = 'none';
          });
          const value = e.target.value.toLowerCase();
          const matchingArticles = container.querySelectorAll(\`article[class*="\${value}"]\`);
          matchingArticles.forEach((article) => {
            article.style.display = 'block';
          });
        });

        searchButton.addEventListener('click', (e) => {
          searchInput.value = '';
          searchInput.dispatchEvent(new Event('input'));
          clearURL();
        });

        button.addEventListener('click', () => {
          input.value = '';
          input.dispatchEvent(new Event('input'));
          clearURL();
        });

        form.addEventListener('submit', (e) => {
          e.preventDefault();
        });

        options.forEach((option) => {
          option.addEventListener('click', (e) => {
            input.value = option.value;
            input.dispatchEvent(new Event('input'));
          });
          option.addEventListener('keypress', (e) => {
            e.preventDefault();
            if (e.key !== 'Enter' && e.key !== ' ') {
              return;
            }
            input.value = option.value;
            input.dispatchEvent(new Event('input'));
          });
        });

        input.addEventListener('input', () => {
          const value = slugify(input.value);
          const url = new URL(window.location);
          if (value && availableAPIs.includes(value)) {
            url.searchParams.set('api', value);
            url.hash = '';
            if (inIframe) {
              window.top.postMessage({
                search: \`api=\${value}\`,
              }, '*');
            }
            window.history.pushState({}, '', url);
            articles.forEach(article => {
              article.style.display = 'none';
              if (article.classList.contains(value)) {
                article.style.display = 'block';
              }
            });
          } else {
            articles.forEach(article => {
              article.style.display = 'block';
            });
            url.searchParams.delete('api');
            if (inIframe) {
              window.top.postMessage({
                search: '',
              }, '*');
            }
            window.history.pushState({}, '', url);
          }
        });

        const getOptionValue = (api) => {
          for (const option of options) {
            if (slugify(option.value) === api) {
              return option.value;
              break;
            }
          }
        };

        window.addEventListener('keydown', (e) => {
          if (e.key === 'f' && e.metaKey) {
            e.preventDefault();
            searchInput.focus();
          }
        });

        window.addEventListener('load', () => {
          const url = new URL(window.location);
          const api = url.searchParams.get('api');
          if (api && availableAPIs.includes(api)) {
            input.value = getOptionValue(api);
          } else {
            url.searchParams.delete('api');
            if (inIframe) {
              window.top.postMessage({
                search: '',
              }, '*');
            }
            window.history.pushState({}, '', url);
          }
          input.dispatchEvent(new Event('input'));
        });

        if ('share' in navigator && 'canShare' in navigator) {
          const isMac = /Mac|iPhone/.test(navigator.platform);
          shareButtons.forEach((button) => {
            if (isMac) {
              button.classList.add('mac');
            }
            button.style.display = 'block';
            button.addEventListener('click', async (e) => {
              const article = e.target.closest('article');
              const img = article.querySelector('img');
              const blob = await fetch(img.currentSrc).then((res) => res.blob());
              const file = new File([blob], img.getAttribute('src'), { type: blob.type });
              const data = {
                text: \`👀 I just found the app “\${article.querySelector('h2').textContent}”: \${article.querySelector('a').href}.\n\nAmong others, it uses these cool Project Fugu APIs:\n\n\${Array.from(article.querySelectorAll('li')).slice(0, 2).map(li => \`👉 \${li.textContent}\`).join('\\n')}\n\n(via the 🐡 \${document.title}: ${EMBED_URL})\`.trim(),
                files: [file],
              }
              if (navigator.canShare(data)) {
                try {
                  await navigator.share(data);
                } catch (err) {
                  if (err.name !== 'AbortError') {
                    console.error(err.name, err.message);
                  }
                }
              }
            });
          });
        }

        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js');
          });
        }
      </script>`;

  const datalist = `
    <datalist id="available-apis">${Array.from(availableAPIs)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .map(
        (availableAPI) =>
          `<option tabindex="0" value="${availableAPI}">${availableAPI}</option>`,
      )
      .join('')}</datalist>`;

  const searchAppsForm = `
      <form class="search-apps">
        <label>
          Search apps:
          <input list="available-apps" class="search-apps" type="search" />
        </label>
        <button type="reset" class="search-apps">Clear</button>
      </form>`;

  const footer = `
            <footer>
              Made by <a target="_blank" rel="noopener" href="https://twitter.com/tomayac">@tomayac</a>.
              You can propose missing apps by submitting them via this
              <a target="_blank" rel="noopener" href="https://docs.google.com/forms/d/e/1FAIpQLScNd1rClbmFWh6FcMmjUNrwg9RLz8Jk4BkHz_-EOpmkVd_-9g/viewform">form</a>.
              Source code on <a target="_blank" rel="noopener" href="https://github.com/tomayac/fugu-showcase">GitHub</a>.
            </footer>
          </main>
        </body>
      </html>`;

  const html = `${header}${filterAPIsForm}${datalist}${searchAppsForm}${div}${footer}`;
  const minified = minifyHtml.minify(
    html,
    minifyHtml.createConfiguration({
      minify_js: true,
      minify_css: true,
      do_not_minify_doctype: true,
      ensure_spec_compliant_unquoted_attribute_values: true,
      keep_spaces_between_attributes: true,
    }),
  );
  await writeFile(path.resolve('data', 'index.html'), minified);
  console.log('Successfully created `index.html`.');
};

const createServiceWorker = async (data) => {
  const serviceWorker = sw
    .replace(
      /\s*\/\* Screenshots \*\//,
      data
        .map(
          (item) => `    '${item.screenshot}',\n    '${item.screenshotDark}'`,
        )
        .join(',\n'),
    )
    .replaceAll('RANDOM', Math.random().toString().substring(2));
  await writeFile(path.resolve('data', 'sw.js'), serviceWorker);
  console.log('Successfully created `sw.js`.');
};

const createWebManifest = async () => {
  const manifestMinified = JSON.stringify(JSON.parse(manifest));
  await writeFile(
    path.resolve('data', 'manifest.webmanifest'),
    manifestMinified,
  );
  console.log('Successfully created `manifest.webmanifest`.');
};

(async () => {
  const data = await createRawData();
  await createScreenshots(data);
  await createScreenshots(
    [
      {
        appURL: CANONICAL_URL,
        screenshot: `${fileNamifyURL(CANONICAL_URL)}.png`,
      },
    ],
    'png',
  );
  createHTML(data);
  createServiceWorker(data);
  createWebManifest();
})();
