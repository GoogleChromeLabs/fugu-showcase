import path from 'path';
import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import captureWebsite from 'capture-website';
import filenamifyUrl from 'filenamify-url';
import ogp from 'ogp-parser';

import limit from './utils.mjs';
import fuguSVG  from './fugu.svg.mjs';
import style from './style.css.mjs';

const SPREADSHEET_URL =
  'https://sheets.googleapis.com/v4/spreadsheets/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/values/Sheet2?key=AIzaSyCkROWBarEOJ9hQJggyrlUFulOFA4h6AW0&alt=json';

const SCREENSHOT_OPTIONS = {
  width: 1280,
  height: 800,
};

const createRawData = async () => {
  const response = await fetch(SPREADSHEET_URL);
  const json = await response.json();
  const values = json.values;
  const data = values.map((row) => {
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
      screenshot: `${filenamifyUrl(row[1])}.png`,
    };
  });
  await writeFile(
    path.resolve('data', 'data.json'),
    JSON.stringify(data, null, 2),
  );
  console.log('Successfully wrote `data.json`.');
  return data;
};

const createScreenshots = async (data) => {
  const items = data.map((item) => [item.appURL, item.screenshot]);
  const tasks = items.map(([url, filename], i) => {
    data[i].screenshot = filename;
    return () =>
      captureWebsite.file(
        url,
        path.resolve('data', filename),
        SCREENSHOT_OPTIONS,
      );
  });
  await limit(tasks, 5);
  console.log('Successfully wrote screenshots.');
};

const createHTML = async (data) => {
  await Promise.all(
    data.map(async (item) => {
      return ogp(item.appURL, { skipOembed: true }).then(
        (meta) => (item.meta = meta),
      );
    }),
  );
  const availableAPIs = new Set();

  const header = `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Fugu API Showcase</title>
            <link rel="icon" href="${fuguSVG}" />
            ${style}
          </head>
          <body>
            <h1>Fugu API Showcase</h1>`;

  const form = `
      <form>
        <label>
          Filter used APIs:
          <input list="available-apis" id="search" type="search" />
        </label>
      </form>`;

  const div = `
      <div class=container>
        ${data
          .map((item) => {
            const title =
              item.meta.ogp?.['og:title'] ||
              item.meta.seo?.title ||
              item.meta.seo?.['og:title'] ||
              item.meta.seo?.['twitter:title'] ||
              item.meta.title ||
              new URL(item.appURL).hostname;
            const description =
              item.meta.ogp?.['og:description'] ||
              item.meta.seo?.description ||
              item.meta.seo?.['og:description'] ||
              item.meta.seo?.['twitter:description'] ||
              item.meta.description ||
              '';
            const classes = [];
            item.usedAPIs.forEach((usedAPI) => {
              availableAPIs.add(usedAPI.name);
              classes.push(
                usedAPI.name.toLowerCase().replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').replace(/-*$/g, '')
              );
            });
            return `
            <article class="${classes.join(' ')}">
              <h2><a target="_blank" rel="noopener" href="${
                item.appURL
              }">${title}</a></h2>
              <figure>
                <a target="_blank" rel="noopener" href="${item.appURL}">
                  <img src="${item.screenshot}" width="${
              SCREENSHOT_OPTIONS.width
            }" height="${
              SCREENSHOT_OPTIONS.height
            }" alt="Screenshot of ${title}" />
                </a>
                ${
                  description
                    ? `<figcaption class="description">${description}</figcaption>`
                    : ''
                }
              </figure>
              ${
                item.sourceURL
                  ? `<span class="source"><a target="_blank" rel="noopener" href="${item.sourceURL}">Source</a></span>`
                  : ''
              }
              <span class="launch"><a target="_blank" rel="noopener" href="${
                item.appURL
              }">Launch</a></span>
              <p>Used APIs:</p>
              <ul>${item.usedAPIs
                .map(
                  (usedAPI) =>
                    `<li><a target="_blank" rel="noopener" href="${usedAPI.url}">${usedAPI.name}</a></li>`,
                )
                .join('')}</ul>
            </article>
          `;
          })
          .join('')}
      </div>
      <script>
        const articles = document.querySelectorAll('article');
        const options = document.querySelectorAll('option');
        const input = document.querySelector('input');
        const form = document.querySelector('form');

        const slugify = (string) => {
          return string.toLowerCase().replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').replace(/-*$/g, '');
        };

        const availableAPIs = [${Array.from(availableAPIs.keys())
          .sort()
          .map((api) => `'${api}'`)
          .join(', ')
          .toLowerCase()}].map(slugify);

        form.addEventListener('submit', (e) => {
          e.preventDefault();
        });

        options.forEach((option) => {
          option.addEventListener('click', (e) => {
            const value = slugify(option.value);
            input.value = value;
            input.dispatchEvent(new Event('input'));
          });
        });

        input.addEventListener('input', () => {
          const value = slugify(input.value);
          const url = new URL(window.location);
          if (value && availableAPIs.includes(value)) {
            url.searchParams.set('api', value);
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
            window.history.pushState({}, '', url);
          }
        });

        window.addEventListener('load', () => {
          const url = new URL(window.location);
          const api = url.searchParams.get('api');
          if (api && availableAPIs.includes(api)) {
            input.value = api;
          } else {
            url.searchParams.delete('api');
            window.history.pushState({}, '', url);
          }
          input.dispatchEvent(new Event('input'));
        });
      </script>`;

  const datalist = `
    <datalist id="available-apis">${Array.from(availableAPIs)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .map(
        (availableAPI) =>
          `<option value="${availableAPI}">${availableAPI}</option>`,
      )
      .join('')}</datalist>`;

  const footer = `</body></html>`;

  const html = `${header}${form}${datalist}${div}${footer}`;
  await writeFile(path.resolve('data', 'index.html'), html);
  console.log('Successfully wrote `index.html`.');
};

(async () => {
  const data = await createRawData();
  await createScreenshots(data);
  await createHTML(data);
})();
