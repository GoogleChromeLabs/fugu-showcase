
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
  const APP_SHELL_CACHE = 'app-shell-1050498314855206';
  const MEDIA_CACHE = 'media-1050498314855206';

  const APP_SHELL_FILES = [
    './',
    './index.html',
    './manifest.webmanifest',
  ];

  const MEDIA_FILES = [    '1tuner.com.webp',
    '1tuner.com-dark.webp',
    'activerecall.com!login.html.webp',
    'activerecall.com!login.html-dark.webp',
    'anaesthetics.app!bluetooth.webp',
    'anaesthetics.app!bluetooth-dark.webp',
    'animator.expressive.app.webp',
    'animator.expressive.app-dark.webp',
    'app.ampedstudio.com.webp',
    'app.ampedstudio.com-dark.webp',
    'app.color.io.webp',
    'app.color.io-dark.webp',
    'app.cosee.com.webp',
    'app.cosee.com-dark.webp',
    'app.diagrams.net.webp',
    'app.diagrams.net-dark.webp',
    'app.element.io!!welcome.webp',
    'app.element.io!!welcome-dark.webp',
    'app.getwavecake.com!dashboard!demo.webp',
    'app.getwavecake.com!dashboard!demo-dark.webp',
    'app.photoroom.com.webp',
    'app.photoroom.com-dark.webp',
    'app.runwayml.com.webp',
    'app.runwayml.com-dark.webp',
    'app.sketchup.com!app.webp',
    'app.sketchup.com!app-dark.webp',
    'app.slack.com.webp',
    'app.slack.com-dark.webp',
    'app.storz-bickel.com.webp',
    'app.storz-bickel.com-dark.webp',
    'app.thepocketlab.com.webp',
    'app.thepocketlab.com-dark.webp',
    'app.vysor.io.webp',
    'app.vysor.io-dark.webp',
    'apps.microsoft.com!store!detail!conifer-music!9NBHTD9DMH30.webp',
    'apps.microsoft.com!store!detail!conifer-music!9NBHTD9DMH30-dark.webp',
    'apps.microsoft.com!store!detail!mammoth!9NRFT6SLGBMK.webp',
    'apps.microsoft.com!store!detail!mammoth!9NRFT6SLGBMK-dark.webp',
    'apps.tibbo.com.webp',
    'apps.tibbo.com-dark.webp',
    'artclass.site.webp',
    'artclass.site-dark.webp',
    'audiomass.co.webp',
    'audiomass.co-dark.webp',
    'avg-colour.netlify.app.webp',
    'avg-colour.netlify.app-dark.webp',
    'bangle.io.webp',
    'bangle.io-dark.webp',
    'bitmidi.com.webp',
    'bitmidi.com-dark.webp',
    'blob.city.webp',
    'blob.city-dark.webp',
    'bluetooth.rocks.webp',
    'bluetooth.rocks-dark.webp',
    'boardgamearena.com.webp',
    'boardgamearena.com-dark.webp',
    'boxy-svg.com!app.webp',
    'boxy-svg.com!app-dark.webp',
    'bpmtech.no.webp',
    'bpmtech.no-dark.webp',
    'briefform.de.webp',
    'briefform.de-dark.webp',
    'buddy.edgetx.org.webp',
    'buddy.edgetx.org-dark.webp',
    'bundle.js.org.webp',
    'bundle.js.org-dark.webp',
    'canvas.expressive.app.webp',
    'canvas.expressive.app-dark.webp',
    'case.xchart.com.webp',
    'case.xchart.com-dark.webp',
    'chiptune.app.webp',
    'chiptune.app-dark.webp',
    'chrome.google.com!webstore!detail!croskeys-by-crosexperts!akiaafoeijpibmbbfaebhkhccepbdgfi.webp',
    'chrome.google.com!webstore!detail!croskeys-by-crosexperts!akiaafoeijpibmbbfaebhkhccepbdgfi-dark.webp',
    'chromewebstore.google.com!detail!codespinai-chat!mipjjdhkhdfggajnociccilimkhophpa.webp',
    'chromewebstore.google.com!detail!codespinai-chat!mipjjdhkhdfggajnociccilimkhophpa-dark.webp',
    'cleanfeed.net!studio.webp',
    'cleanfeed.net!studio-dark.webp',
    'code.irobot.com.webp',
    'code.irobot.com-dark.webp',
    'code.makewonder.com!cue.webp',
    'code.makewonder.com!cue-dark.webp',
    'codeit.codes.webp',
    'codeit.codes-dark.webp',
    'codepoints.net.webp',
    'codepoints.net-dark.webp',
    'codev5.vex.com.webp',
    'codev5.vex.com-dark.webp',
    'configure.zsa.io.webp',
    'configure.zsa.io-dark.webp',
    'creators.winamp.com.webp',
    'creators.winamp.com-dark.webp',
    'dannymoerkerke.github.io!file-tree.webp',
    'dannymoerkerke.github.io!file-tree-dark.webp',
    'dev.to.webp',
    'dev.to-dark.webp',
    'developer.chrome.com!fugu-showcase.webp',
    'developer.chrome.com!fugu-showcase-dark.webp',
    'diek.us!pwinter.webp',
    'diek.us!pwinter-dark.webp',
    'dj.app.webp',
    'dj.app-dark.webp',
    'dj.beatport.com!home.webp',
    'dj.beatport.com!home-dark.webp',
    'dnd-tokenizer-41471e.netlify.app.webp',
    'dnd-tokenizer-41471e.netlify.app-dark.webp',
    'docs.craft.do.webp',
    'docs.craft.do-dark.webp',
    'docs.qq.com!desktop.webp',
    'docs.qq.com!desktop-dark.webp',
    'dotbigbang.com.webp',
    'dotbigbang.com-dark.webp',
    'duino.app.webp',
    'duino.app-dark.webp',
    'dustinbrett.com.webp',
    'dustinbrett.com-dark.webp',
    'edit.photo.webp',
    'edit.photo-dark.webp',
    'edit.photostack.app.webp',
    'edit.photostack.app-dark.webp',
    'edit.video.webp',
    'edit.video-dark.webp',
    'editor.bridge-core.app.webp',
    'editor.bridge-core.app-dark.webp',
    'editor.construct.net.webp',
    'editor.construct.net-dark.webp',
    'editor.gdevelop.io.webp',
    'editor.gdevelop.io-dark.webp',
    'editor.godotengine.org!releases!latest.webp',
    'editor.godotengine.org!releases!latest-dark.webp',
    'editor.graphite.rs.webp',
    'editor.graphite.rs-dark.webp',
    'editor.kota-yata.com.webp',
    'editor.kota-yata.com-dark.webp',
    'elk.zone.webp',
    'elk.zone-dark.webp',
    'ember.ly.webp',
    'ember.ly-dark.webp',
    'eos.rreverser.com.webp',
    'eos.rreverser.com-dark.webp',
    'esc-configurator.com.webp',
    'esc-configurator.com-dark.webp',
    'esphome.github.io!esp-web-tools.webp',
    'esphome.github.io!esp-web-tools-dark.webp',
    'excalidraw.com.webp',
    'excalidraw.com-dark.webp',
    'file.kiwi.webp',
    'file.kiwi-dark.webp',
    'flash.android.com.webp',
    'flash.android.com-dark.webp',
    'floor796.com!editor!l0.webp',
    'floor796.com!editor!l0-dark.webp',
    'fpv.wtf!!about.webp',
    'fpv.wtf!!about-dark.webp',
    'fuse.littlebits.com.webp',
    'fuse.littlebits.com-dark.webp',
    'games.tigeroakes.com!last-finger-standing.webp',
    'games.tigeroakes.com!last-finger-standing-dark.webp',
    'georapbox.github.io!barcode-scanner.webp',
    'georapbox.github.io!barcode-scanner-dark.webp',
    'github.dev!github!dev.webp',
    'github.dev!github!dev-dark.webp',
    'gltf.report.webp',
    'gltf.report-dark.webp',
    'goldwave.com!editor.webp',
    'goldwave.com!editor-dark.webp',
    'grapheneos.org!install!webflashing-factory-images.webp',
    'grapheneos.org!install!webflashing-factory-images-dark.webp',
    'graphicalanalysis.app.webp',
    'graphicalanalysis.app-dark.webp',
    'graphtoy.com.webp',
    'graphtoy.com-dark.webp',
    'h5.topwargame.com!h5game!index.html.webp',
    'h5.topwargame.com!h5game!index.html-dark.webp',
    'haven.pages.dev.webp',
    'haven.pages.dev-dark.webp',
    'heritagein.info.webp',
    'heritagein.info-dark.webp',
    'hexed.it.webp',
    'hexed.it-dark.webp',
    'hoppscotch.io.webp',
    'hoppscotch.io-dark.webp',
    'hoten.cc!zc!play.webp',
    'hoten.cc!zc!play-dark.webp',
    'hub.vroid.com!en.webp',
    'hub.vroid.com!en-dark.webp',
    'ilariafoodandhome.it.webp',
    'ilariafoodandhome.it-dark.webp',
    'install.wled.me.webp',
    'install.wled.me-dark.webp',
    'josephrocca.github.io!clip-image-sorter.webp',
    'josephrocca.github.io!clip-image-sorter-dark.webp',
    'kaleidoscope24.com.webp',
    'kaleidoscope24.com-dark.webp',
    'kenchris.github.io!webnfc-groceries.webp',
    'kenchris.github.io!webnfc-groceries-dark.webp',
    'komunalno.netlify.app.webp',
    'komunalno.netlify.app-dark.webp',
    'kryogenix.org!farmbound.webp',
    'kryogenix.org!farmbound-dark.webp',
    'lab.flipper.net.webp',
    'lab.flipper.net-dark.webp',
    'ldijkman.github.io!Ace_Seventh_Heaven!Seventh_Heaven.html.webp',
    'ldijkman.github.io!Ace_Seventh_Heaven!Seventh_Heaven.html-dark.webp',
    'learningmusic.ableton.com.webp',
    'learningmusic.ableton.com-dark.webp',
    'learningsynths.ableton.com.webp',
    'learningsynths.ableton.com-dark.webp',
    'leonidasesteban.com.webp',
    'leonidasesteban.com-dark.webp',
    'lichess.org.webp',
    'lichess.org-dark.webp',
    'linear.app.webp',
    'linear.app-dark.webp',
    'linkcleaner.app.webp',
    'linkcleaner.app-dark.webp',
    'liveheats.com.webp',
    'liveheats.com-dark.webp',
    'logiwebconnect.com.webp',
    'logiwebconnect.com-dark.webp',
    'logseq.com!spa=true.webp',
    'logseq.com!spa=true-dark.webp',
    'loilo.github.io!diffr.webp',
    'loilo.github.io!diffr-dark.webp',
    'lookscanned.io!scan.webp',
    'lookscanned.io!scan-dark.webp',
    'loop.microsoft.com.webp',
    'loop.microsoft.com-dark.webp',
    'luna.amazon.com.webp',
    'luna.amazon.com-dark.webp',
    'make.firialabs.com.webp',
    'make.firialabs.com-dark.webp',
    'mandadin-4.web.app.webp',
    'mandadin-4.web.app-dark.webp',
    'manifoldcad.org.webp',
    'manifoldcad.org-dark.webp',
    'marabesi.github.io!json-tool.webp',
    'marabesi.github.io!json-tool-dark.webp',
    'markwhen.com.webp',
    'markwhen.com-dark.webp',
    'maskable.app.webp',
    'maskable.app-dark.webp',
    'mathigon.org!polypad.webp',
    'mathigon.org!polypad-dark.webp',
    'mconverter.eu.webp',
    'mconverter.eu-dark.webp',
    'md.nico.dev.webp',
    'md.nico.dev-dark.webp',
    'mdsilo.com!app!demo.webp',
    'mdsilo.com!app!demo-dark.webp',
    'mgerhardy.github.io!vengi-voxedit-html5!vengi-voxedit.html.webp',
    'mgerhardy.github.io!vengi-voxedit-html5!vengi-voxedit.html-dark.webp',
    'microsoftedge.github.io!Demos!pwamp.webp',
    'microsoftedge.github.io!Demos!pwamp-dark.webp',
    'microsoftedge.github.io!Demos!wami.webp',
    'microsoftedge.github.io!Demos!wami-dark.webp',
    'mishipay.shop.webp',
    'mishipay.shop-dark.webp',
    'momo.mometic.com.webp',
    'momo.mometic.com-dark.webp',
    'muted.io!piano.webp',
    'muted.io!piano-dark.webp',
    'my.numworks.com.webp',
    'my.numworks.com-dark.webp',
    'mypixelbuds.google.com.webp',
    'mypixelbuds.google.com-dark.webp',
    'narrow.one.webp',
    'narrow.one-dark.webp',
    'natto.dev.webp',
    'natto.dev-dark.webp',
    'nfctools.net.webp',
    'nfctools.net-dark.webp',
    'noctura.tech.webp',
    'noctura.tech-dark.webp',
    'notepad.js.org.webp',
    'notepad.js.org-dark.webp',
    'observablehq.com.webp',
    'observablehq.com-dark.webp',
    'odoo.github.io!o-spreadsheet.webp',
    'odoo.github.io!o-spreadsheet-dark.webp',
    'okso.app.webp',
    'okso.app-dark.webp',
    'open.spotify.com.webp',
    'open.spotify.com-dark.webp',
    'paintz.app.webp',
    'paintz.app-dark.webp',
    'panel.hostmeapp.com.webp',
    'panel.hostmeapp.com-dark.webp',
    'petertyliu.github.io!toaster.webp',
    'petertyliu.github.io!toaster-dark.webp',
    'photopwa.com.webp',
    'photopwa.com-dark.webp',
    'photoshop.adobe.com.webp',
    'photoshop.adobe.com-dark.webp',
    'pikimov.com!app.webp',
    'pikimov.com!app-dark.webp',
    'pinafore.social.webp',
    'pinafore.social-dark.webp',
    'pixa.pics.webp',
    'pixa.pics-dark.webp',
    'pixlr.com.webp',
    'pixlr.com-dark.webp',
    'plainandeasy.com.webp',
    'plainandeasy.com-dark.webp',
    'play-video-app.netlify.app.webp',
    'play-video-app.netlify.app-dark.webp',
    'play.geforcenow.com.webp',
    'play.geforcenow.com-dark.webp',
    'play.spacelancers.com.webp',
    'play.spacelancers.com-dark.webp',
    'player.winamp.com.webp',
    'player.winamp.com-dark.webp',
    'podcast.adobe.com.webp',
    'podcast.adobe.com-dark.webp',
    'point.seongland.com.webp',
    'point.seongland.com-dark.webp',
    'pokedex.org.webp',
    'pokedex.org-dark.webp',
    'pokemon-as-a-service.web.app.webp',
    'pokemon-as-a-service.web.app-dark.webp',
    'poketune.vercel.app.webp',
    'poketune.vercel.app-dark.webp',
    'postr.me.webp',
    'postr.me-dark.webp',
    'ppg.report.webp',
    'ppg.report-dark.webp',
    'puter.com.webp',
    'puter.com-dark.webp',
    'pwa.journalisticapp.com.webp',
    'pwa.journalisticapp.com-dark.webp',
    'pwa.kiwix.org!www!index.html.webp',
    'pwa.kiwix.org!www!index.html-dark.webp',
    'pwatungsten.app.webp',
    'pwatungsten.app-dark.webp',
    'qrsnapper.com.webp',
    'qrsnapper.com-dark.webp',
    'radio-house.app.webp',
    'radio-house.app-dark.webp',
    'radio.garden.webp',
    'radio.garden-dark.webp',
    'raverie-us.github.io!raverie-engine.webp',
    'raverie-us.github.io!raverie-engine-dark.webp',
    'readonly.link!editor.webp',
    'readonly.link!editor-dark.webp',
    'readyplayer.me!avatar.webp',
    'readyplayer.me!avatar-dark.webp',
    'recipemate.app.webp',
    'recipemate.app-dark.webp',
    'regex101.com.webp',
    'regex101.com-dark.webp',
    'remap-keys.app.webp',
    'remap-keys.app-dark.webp',
    'roland50.studio.webp',
    'roland50.studio-dark.webp',
    'ruby.rubynetwork.co.webp',
    'ruby.rubynetwork.co-dark.webp',
    'scrapbook-pwa.web.app.webp',
    'scrapbook-pwa.web.app-dark.webp',
    'semaphore.social.webp',
    'semaphore.social-dark.webp',
    'sepia-framework.github.io!app!index.html.webp',
    'sepia-framework.github.io!app!index.html-dark.webp',
    'sharedgametimer.com.webp',
    'sharedgametimer.com-dark.webp',
    'shots.so.webp',
    'shots.so-dark.webp',
    'sketch.pixiv.net!draw.webp',
    'sketch.pixiv.net!draw-dark.webp',
    'slidesynth.com.webp',
    'slidesynth.com-dark.webp',
    'snaeplayer.com.webp',
    'snaeplayer.com-dark.webp',
    'snapdrop.net.webp',
    'snapdrop.net-dark.webp',
    'snapper-gps.herokuapp.com.webp',
    'snapper-gps.herokuapp.com-dark.webp',
    'songwhip.com.webp',
    'songwhip.com-dark.webp',
    'soundation.com.webp',
    'soundation.com-dark.webp',
    'souvenir.cam.webp',
    'souvenir.cam-dark.webp',
    'spatialfusion.io.webp',
    'spatialfusion.io-dark.webp',
    'spike.legoeducation.com.webp',
    'spike.legoeducation.com-dark.webp',
    'sqlime.org.webp',
    'sqlime.org-dark.webp',
    'sqliteviewer.app.webp',
    'sqliteviewer.app-dark.webp',
    'squoosh.app.webp',
    'squoosh.app-dark.webp',
    'stackblitz.com.webp',
    'stackblitz.com-dark.webp',
    'stackedit.io.webp',
    'stackedit.io-dark.webp',
    'stadia.google.com!controller.webp',
    'stadia.google.com!controller-dark.webp',
    'staging.bsky.app.webp',
    'staging.bsky.app-dark.webp',
    'stedit.app.webp',
    'stedit.app-dark.webp',
    'strummachine.com!app.webp',
    'strummachine.com!app-dark.webp',
    'studio.samlabs.com.webp',
    'studio.samlabs.com-dark.webp',
    'svgco.de.webp',
    'svgco.de-dark.webp',
    'symbol.wtf.webp',
    'symbol.wtf-dark.webp',
    'tasmota.github.io!install.webp',
    'tasmota.github.io!install-dark.webp',
    'teenage.engineering!apps!drum-utility.webp',
    'teenage.engineering!apps!drum-utility-dark.webp',
    'tgstorage.com.webp',
    'tgstorage.com-dark.webp',
    'thelogbook.app.webp',
    'thelogbook.app-dark.webp',
    'theplayroom.babylonjs.com.webp',
    'theplayroom.babylonjs.com-dark.webp',
    'thesession.org.webp',
    'thesession.org-dark.webp',
    'three-colors.opl.io.webp',
    'three-colors.opl.io-dark.webp',
    'tidepool.org!uploader.webp',
    'tidepool.org!uploader-dark.webp',
    'tinder.com.webp',
    'tinder.com-dark.webp',
    'toolbox.lynx-r.com.webp',
    'toolbox.lynx-r.com-dark.webp',
    'toot.cafe.webp',
    'toot.cafe-dark.webp',
    'traintimes.org.uk.webp',
    'traintimes.org.uk-dark.webp',
    'trovo.live.webp',
    'trovo.live-dark.webp',
    'twitter.com.webp',
    'twitter.com-dark.webp',
    'tylify.app.webp',
    'tylify.app-dark.webp',
    'typst.app.webp',
    'typst.app-dark.webp',
    'ui.perfetto.dev.webp',
    'ui.perfetto.dev-dark.webp',
    'unsplash.com.webp',
    'unsplash.com-dark.webp',
    'usevia.app.webp',
    'usevia.app-dark.webp',
    'uspeaking.netlify.app.webp',
    'uspeaking.netlify.app-dark.webp',
    'ustaxes.org!start.webp',
    'ustaxes.org!start-dark.webp',
    'velocity.radon.games.webp',
    'velocity.radon.games-dark.webp',
    'vger.app!posts!lemmy.world!all.webp',
    'vger.app!posts!lemmy.world!all-dark.webp',
    'vimeo.com.webp',
    'vimeo.com-dark.webp',
    'vodon-player.vercel.app.webp',
    'vodon-player.vercel.app-dark.webp',
    'vscode.dev.webp',
    'vscode.dev-dark.webp',
    'vslite.dev.webp',
    'vslite.dev-dark.webp',
    'wasi.rreverser.com.webp',
    'wasi.rreverser.com-dark.webp',
    'wavacity.com.webp',
    'wavacity.com-dark.webp',
    'web-gphoto2.rreverser.com.webp',
    'web-gphoto2.rreverser.com-dark.webp',
    'web-serial-app.netlify.app.webp',
    'web-serial-app.netlify.app-dark.webp',
    'web.autocad.com.webp',
    'web.autocad.com-dark.webp',
    'web.blockbench.net.webp',
    'web.blockbench.net-dark.webp',
    'web.brewflasher.com.webp',
    'web.brewflasher.com-dark.webp',
    'web.descript.com.webp',
    'web.descript.com-dark.webp',
    'web.goodnotes.com.webp',
    'web.goodnotes.com-dark.webp',
    'web.snapchat.com.webp',
    'web.snapchat.com-dark.webp',
    'web.telegram.org!z.webp',
    'web.telegram.org!z-dark.webp',
    'webscan.goncalomb.com.webp',
    'webscan.goncalomb.com-dark.webp',
    'whatpwacando.today.webp',
    'whatpwacando.today-dark.webp',
    'wootility.io.webp',
    'wootility.io-dark.webp',
    'wormhole.app.webp',
    'wormhole.app-dark.webp',
    'write.sonnet.io.webp',
    'write.sonnet.io-dark.webp',
    'airconsole.com.webp',
    'airconsole.com-dark.webp',
    'bandlab.com.webp',
    'bandlab.com-dark.webp',
    'canva.com.webp',
    'canva.com-dark.webp',
    'capcut.com!editor.webp',
    'capcut.com!editor-dark.webp',
    'capitalone.com!tech!software-engineering!web-nfc-for-authentication-android.webp',
    'capitalone.com!tech!software-engineering!web-nfc-for-authentication-android-dark.webp',
    'cityhop.cafe.webp',
    'cityhop.cafe-dark.webp',
    'contactsdirect.com.webp',
    'contactsdirect.com-dark.webp',
    'crazygames.com.webp',
    'crazygames.com-dark.webp',
    'descript.com.webp',
    'descript.com-dark.webp',
    'duolingo.com.webp',
    'duolingo.com-dark.webp',
    'espruino.com!ide.webp',
    'espruino.com!ide-dark.webp',
    'figma.com.webp',
    'figma.com-dark.webp',
    'fotor.com!photo-editor-app!editor!basic.webp',
    'fotor.com!photo-editor-app!editor!basic-dark.webp',
    'globs.design.webp',
    'globs.design-dark.webp',
    'hypertext.plus!editor.webp',
    'hypertext.plus!editor-dark.webp',
    'improv-wifi.com.webp',
    'improv-wifi.com-dark.webp',
    'indianradio.in.webp',
    'indianradio.in-dark.webp',
    'instagram.com.webp',
    'instagram.com-dark.webp',
    'irccloud.com.webp',
    'irccloud.com-dark.webp',
    'jsmusicdb.com.webp',
    'jsmusicdb.com-dark.webp',
    'lightningmaps.org.webp',
    'lightningmaps.org-dark.webp',
    'meta.com!help!quest!software_update.webp',
    'meta.com!help!quest!software_update-dark.webp',
    'microsoft.com!en-us!makecode.webp',
    'microsoft.com!en-us!makecode-dark.webp',
    'netflix.com.webp',
    'netflix.com-dark.webp',
    'notion.so.webp',
    'notion.so-dark.webp',
    'pathuku.com!games!pathuku!play.webp',
    'pathuku.com!games!pathuku!play-dark.webp',
    'pathuku.com!hostileshapes.webp',
    'pathuku.com!hostileshapes-dark.webp',
    'photopea.com.webp',
    'photopea.com-dark.webp',
    'pinterest.de.webp',
    'pinterest.de-dark.webp',
    'senomix.com!timesheet.webp',
    'senomix.com!timesheet-dark.webp',
    'sessionwire.com.webp',
    'sessionwire.com-dark.webp',
    'soundslice.com.webp',
    'soundslice.com-dark.webp',
    'soundtrap.com.webp',
    'soundtrap.com-dark.webp',
    'speakflow.com.webp',
    'speakflow.com-dark.webp',
    'stemplayer.com.webp',
    'stemplayer.com-dark.webp',
    'target.com!room-planner!home.webp',
    'target.com!room-planner!home-dark.webp',
    'terra.com.br.webp',
    'terra.com.br-dark.webp',
    'tiktok.com.webp',
    'tiktok.com-dark.webp',
    'tldraw.com.webp',
    'tldraw.com-dark.webp',
    'topdecked.com.webp',
    'topdecked.com-dark.webp',
    'vectorpea.com.webp',
    'vectorpea.com-dark.webp',
    'vimonlineeditor.com.webp',
    'vimonlineeditor.com-dark.webp',
    'wealthposition.com.webp',
    'wealthposition.com-dark.webp',
    'webgamer.io.webp',
    'webgamer.io-dark.webp',
    'xbox.com!en-US!play!games!fortnite!BT5P2X999VH2.webp',
    'xbox.com!en-US!play!games!fortnite!BT5P2X999VH2-dark.webp',
    'xmodem.isthe.link.webp',
    'xmodem.isthe.link-dark.webp',
    'yakuneba-community.com!welcome!YwAnWZXanuD7QckXWJwd.webp',
    'yakuneba-community.com!welcome!YwAnWZXanuD7QckXWJwd-dark.webp',
    'yt-playlist-notifier.web.app.webp',
    'yt-playlist-notifier.web.app-dark.webp',
    'ytaud.io.webp',
    'ytaud.io-dark.webp'
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

  