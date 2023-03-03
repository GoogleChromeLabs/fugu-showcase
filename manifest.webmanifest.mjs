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

import fuguSVG from './fugu.svg.mjs';

export default `
{
  "name": "Project Fugu API Showcase",
  "short_name": "Fugu Showcase",
  "start_url": "./",
  "id": "./",
  "display": "standalone",
  "background_color": "#222",
  "theme_color": "#222",
  "user_preferences": {
    "color_scheme_dark": {
      "theme_color": "#222",
      "background_color": "#222"
    },
    "color_scheme_light": {
      "theme_color": "#eee",
      "background_color": "#eee"
    }
  },
  "icons": [
    {
      "src": "${fuguSVG}",
      "sizes": "512x512",
      "type": "image/svg+xml"
    }
  ]
}`;
