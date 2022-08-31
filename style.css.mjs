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
<style>
  :root {
    color-scheme: dark light;
    font-family: system-ui, sans-serif;
    scroll-padding-top: 1rem;

    --background-color: #eee;
    --foreground-color: #000;
    --accent-color: #e60073;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-color: #fff;
      --background-color: #222;
      --accent-color: hotpink;
    }
  }
  :target,
  .target {
    outline: 0.25rem solid var(--accent-color);
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main {
    max-width: 95ch;
  }
  h1 {
    color: var(--accent-color);
  }
  .logo {
    width: 2.5rem;
    height: auto;
    vertical-align: bottom;
  }
  img {
    max-width: 100%;
    height: auto;
    filter: none;
  }
  img:not(.logo):hover {
    filter: contrast(1.2);
  }
  button[type="reset"] {
    font-size: inherit;
    margin-inline-start: 0.5rem;
  }
  input {
    font-size: inherit;
    width: 30ch;
  }
  article {
    display: none;
    background-color: var(--background-color);
    border-radius: 0.5rem;
    border: solid .25rem var(--background-color);
    position: relative;
  }
  p,
  form {
    border-radius: 0.5rem;
    border: solid .25rem var(--background-color);
    margin-block: 1rem;
    padding: 0.5rem;
    background-color: var(--background-color);
  }
  article > h2 {
    background-color: var(--background-color);
    color: var(--foreground-color);
    margin: 0;
    padding: 1rem;
  }
  h1 > a,
  h2 > a {
    text-decoration: none;
  }
  h3 {
    padding-inline: 1rem;
  }
  .anchor {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }
  .copied.anchor::before {
    content: "Copied to clipboard";
    display:inline-block;
    text-decoration: none;
    margin-inline-end: 0.5rem;
    background-color: var(--background-color);
  }
  figure {
    margin: 0;
  }
  figcaption {
    padding: 1rem;
  }
  a {
    color: var(--accent-color);
  }
  ul {
    padding-inline: 1rem;
  }
  li,
  option {
    font-size: 0.9rem;
    display: inline-block;
    color: #fff;
    background-color: blue;
    border-radius: 0.25rem;
    padding: 0.25rem;
    margin-inline-end: 0.5rem;
    margin-block-end: 0.5rem;
    cursor: pointer;
  }
  li > a {
    color: inherit;
    text-decoration: none;
  }
  datalist {
    margin-block-start: 1rem;
    display: inline-block;
  }
  .source,
  .launch {
    padding-block-start: 0.5rem;
    padding-inline: 1rem;
    display: block;
  }
  .source::before,
  .launch::before,
  .share::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-inline-end: 1ex;
    vertical-align: middle;
    background-size: 1rem;
  }
  .source::before {
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg'%0Aaria-label='GitHub' role='img'%0AviewBox='0 0 512 512'%3E%3Crect%0Awidth='512' height='512'%0Arx='15%25'%0Afill='%23181717'/%3E%3Cpath fill='%23fff' d='M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z'/%3E%3C/svg%3E");
  }
  .launch::before {
    filter: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -256 1850 1850'%3E%3Cpath d='M1408 608V288q0-119-84.5-203.5T1120 0H288Q169 0 84.5 84.5T0 288v832q0 119 84.5 203.5T288 1408h704q14 0 23-9t9-23v-64q0-14-9-23t-23-9H288q-66 0-113-47t-47-113V288q0-66 47-113t113-47h832q66 0 113 47t47 113v320q0 14 9 23t23 9h64q14 0 23-9t9-23zm384 864V960q0-26-19-45t-45-19q-26 0-45 19l-176 176-652-652q-10-10-23-10t-23 10L695 553q-10 10-10 23t10 23l652 652-176 176q-19 19-19 45t19 45q19 19 45 19h512q26 0 45-19t19-45z' fill='currentColor' transform='matrix(1 0 0 -1 30.4 1427)'/%3E%3C/svg%3E");
  }
  .share {
    display: none;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    padding-block-start: 0.5rem;
    padding-inline: 1rem;
    text-decoration: underline;
    color: var(--accent-color);
  }
  .share::before {
    filter: none;
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E");
  }
  .share.mac::before {
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z'/%3E%3C/svg%3E");
  }
  @media (prefers-color-scheme: dark) {
    .launch::before,
    .share::before {
      filter: invert(1);
    }
  }
  .container {
    margin-block-start: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  }
  footer {
    padding: 0.5rem;
    border-top: solid 0.25rem var(--background-color);
    margin-block: 2rem;
    font-size: 0.8rem;
  }
  .iframe h1,
  .iframe p,
  .iframe footer {
    display: none;
  }
  .iframe {
    color-scheme: light;
    --background-color: #eee;
    --foreground-color: #000;
    --accent-color: #e60073;
  }
  .iframe .share::before,
  .iframe .launch::before {
    filter: none;
  }
  .electron::before {
    content: "";
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-size: 100%;
    vertical-align: bottom;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='256' height='256' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%232B2E3A' cx='128' cy='128' r='128'/%3E%3Cg fill='%239FEAF9' fill-rule='nonzero'%3E%3Cpath d='M100.502 71.69c-26.005-4.736-46.567.221-54.762 14.415-6.115 10.592-4.367 24.635 4.24 39.646a2.667 2.667 0 1 0 4.626-2.653c-7.752-13.522-9.261-25.641-4.247-34.326 6.808-11.791 25.148-16.213 49.187-11.835a2.667 2.667 0 0 0 .956-5.247zm-36.999 72.307c10.515 11.555 24.176 22.394 39.756 31.388 37.723 21.78 77.883 27.601 97.675 14.106a2.667 2.667 0 1 0-3.005-4.406c-17.714 12.078-55.862 6.548-92.003-14.318-15.114-8.726-28.343-19.222-38.478-30.36a2.667 2.667 0 1 0-3.945 3.59z'/%3E%3Cpath d='M194.62 140.753c17.028-20.116 22.973-40.348 14.795-54.512-6.017-10.423-18.738-15.926-35.645-16.146a2.667 2.667 0 0 0-.069 5.333c15.205.198 26.165 4.939 31.096 13.48 6.792 11.765 1.49 29.807-14.248 48.399a2.667 2.667 0 1 0 4.071 3.446zm-43.761-68.175c-15.396 3.299-31.784 9.749-47.522 18.835-38.942 22.483-64.345 55.636-60.817 79.675a2.667 2.667 0 1 0 5.277-.775c-3.133-21.344 20.947-52.769 58.207-74.281 15.267-8.815 31.135-15.06 45.972-18.239a2.667 2.667 0 1 0-1.117-5.215z'/%3E%3Cpath d='M87.77 187.753c8.904 24.86 23.469 40.167 39.847 40.167 11.945 0 22.996-8.143 31.614-22.478a2.667 2.667 0 1 0-4.571-2.748c-7.745 12.883-17.258 19.892-27.043 19.892-13.605 0-26.596-13.652-34.825-36.63a2.667 2.667 0 1 0-5.021 1.797zm81.322-4.863c4.61-14.728 7.085-31.718 7.085-49.423 0-44.179-15.463-82.263-37.487-92.042a2.667 2.667 0 0 0-2.164 4.874c19.643 8.723 34.317 44.866 34.317 87.168 0 17.177-2.397 33.63-6.84 47.83a2.667 2.667 0 1 0 5.09 1.593zm50.224-2.612c0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763 7.049 0 12.763-5.714 12.763-12.763zm-5.333 0a7.43 7.43 0 1 1-14.86 0 7.43 7.43 0 0 1 14.86 0zM48.497 193.041c7.05 0 12.764-5.714 12.764-12.763 0-7.049-5.715-12.763-12.764-12.763-7.048 0-12.763 5.714-12.763 12.763 0 7.049 5.715 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86z'/%3E%3Cpath d='M127.617 54.444c7.049 0 12.763-5.714 12.763-12.763 0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86zm1.949 93.382c-4.985 1.077-9.896-2.091-10.975-7.076a9.236 9.236 0 0 1 7.076-10.976c4.985-1.077 9.896 2.091 10.976 7.076 1.077 4.985-2.091 9.897-7.077 10.976z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>`;
