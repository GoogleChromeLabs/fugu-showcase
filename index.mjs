import path from 'path';
import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import captureWebsite from 'capture-website';
import filenamifyUrl from 'filenamify-url';

import limit from './utils.mjs';

const SPREADSHEET_URL =
  'https://sheets.googleapis.com/v4/spreadsheets/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/values/Sheet2?key=AIzaSyCkROWBarEOJ9hQJggyrlUFulOFA4h6AW0&alt=json';

(async () => {
  const response = await fetch(SPREADSHEET_URL);
  const json = await response.json();
  const values = json.values;
  const data = values.map((row) => {
    return {
      timestamp: new Date(row[0]),
      appURL: row[1],
      sourceURL: row[2] || null,
      usedAPIs: row[3]
        .split(', ')
        .map((api) => api.replace(/\(https.*\)/g, '').trim()),
    };
  });
  await writeFile(
    path.resolve('data', 'data.json'),
    JSON.stringify(data, null, 2),
  );
  console.log('Successfully wrote `data.json`.');

  const options = {
    width: 1280,
    height: 800,
  };
  const items = data.map((item) => [item.appURL, filenamifyUrl(item.appURL)]);
  const tasks = items.map(([url, filename]) => {
    return () =>
      captureWebsite.file(
        url,
        path.resolve('data', `${filename}.png`),
        options,
      );
  });
  await limit(tasks, 5);
  console.log('Successfully wrote screenshots.');
})();
