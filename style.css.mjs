export default `
<style>
  :root {
    color-scheme: dark light;
    font-family: system-ui, sans-serif;
    scroll-padding-top: 1rem;

    --background-color: #eee;
    --foreground-color: #000;
    --accent-color: deeppink;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-color: #fff;
      --background-color: #222;
    }
  }
  :target {
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
    color: inherit;
  }
  h3 {
    padding-inline: 1rem;
  }
  .anchor {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
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
  .launch::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-inline-end: 1ex;
    vertical-align: middle;
  }
  .source::before {
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg'%0Aaria-label='GitHub' role='img'%0AviewBox='0 0 512 512'%3E%3Crect%0Awidth='512' height='512'%0Arx='15%25'%0Afill='%23181717'/%3E%3Cpath fill='%23fff' d='M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z'/%3E%3C/svg%3E");
  }
  .launch::before {
    filter: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -256 1850 1850'%3E%3Cpath d='M1408 608V288q0-119-84.5-203.5T1120 0H288Q169 0 84.5 84.5T0 288v832q0 119 84.5 203.5T288 1408h704q14 0 23-9t9-23v-64q0-14-9-23t-23-9H288q-66 0-113-47t-47-113V288q0-66 47-113t113-47h832q66 0 113 47t47 113v320q0 14 9 23t23 9h64q14 0 23-9t9-23zm384 864V960q0-26-19-45t-45-19q-26 0-45 19l-176 176-652-652q-10-10-23-10t-23 10L695 553q-10 10-10 23t10 23l652 652-176 176q-19 19-19 45t19 45q19 19 45 19h512q26 0 45-19t19-45z' fill='currentColor' transform='matrix(1 0 0 -1 30.4 1427)'/%3E%3C/svg%3E");
  }
  @media (prefers-color-scheme: dark) {
    .launch::before {
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
</style>`;
