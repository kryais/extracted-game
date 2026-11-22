# Standalone Game Extraction & Decoupling Report

## 1. Executive Summary

This report documents the surgical extraction of the 3D driving game from Bruno Simon's `folio-2025` repository into a standalone web driving game application. All portfolio-specific content, 3D showcase areas, personal biography/career timelines, social media links, promotional course modals, and analytics tracking have been removed while preserving 100% of the core driving engine, physics simulation, shaders, environmental cycles, audio systems, interactive world objects, and functional game UI.

---

## 2. Removed Portfolio Files & Assets

### 2.1 Deleted Source Modules (`sources/`)
| Path | Reason for Removal |
| :--- | :--- |
| `sources/data/projects.js` | Portfolio project showcase metadata and external client URLs |
| `sources/data/lab.js` | Portfolio lab experiment showcase metadata and external URLs |
| `sources/data/social.js` | Creator's personal social media & contact links |
| `sources/data/consoleLog.js` | Portfolio ASCII banner & personal social links printed to `console.log` |
| `sources/Game/World/Areas/ProjectsArea.js` | 3D project showcase viewer, pagination, and external link opener |
| `sources/Game/World/Areas/LabArea.js` | 3D lab showcase viewer, mechanism, and external link opener |
| `sources/Game/World/Areas/CareerArea.js` | Creator's employment & education timeline (`2008–2020`) |
| `sources/Game/World/Areas/SocialArea.js` | Creator's 3D social media links, Discord modal trigger, and personal bust statue |
| `sources/Game/World/Areas/BehindTheSceneArea.js` | Trigger for the portfolio "Behind the scene" credits/course promo menu tab |
| `sources/Game/World/Areas/TimeMachineArea.js` | 2019 portfolio showcase TV & external redirect to `2019.bruno-simon.com` |
| `sources/Game/World/Areas/EasterArea.js` | Unused promotional event area for Three.js Journey course discounts |
| `sources/Game/Easter.js` | Unused promotional event controller |
| `sources/Game/BlackFriday/` | Unused Black Friday promotional discount code system (`BlackFriday.js`, `FragmentObject.js`) |
| `sources/style/behindTheScene.styl` | Stylesheet for the removed "Behind the scene" portfolio menu tab |
| `sources/style/discord.styl` | Stylesheet for the removed personal Discord server/DM modal |
| `sources/style/easter.styl` | Stylesheet for the removed promotional Easter modal |
| `sources/style/blackFriday.styl` | Stylesheet for the removed promotional Black Friday UI |

### 2.2 Deleted Static Assets (`static/`)
| Path | Reason for Removal |
| :--- | :--- |
| `static/projects/` | 15 MB of portfolio project showcase textures (`.ktx`, `.png`) |
| `static/lab/` | 8.4 MB of portfolio lab showcase textures (`.ktx`, `.png`) |
| `static/career/` | Creator's career history textures (`careerFreelancer`, `careerHetic`, `careerImmersiveGarden`, `careerIRLTeacher`, `careerOnlineTeacher`, `careerUzik`) |
| `static/timeMachine/` | 2019 portfolio screen textures (`timeMachineScreenFolio`, `timeMachineScreenMGS`) |
| `static/social/` | Portfolio OpenGraph social share image (`share-image.png`) |
| `static/blackFriday/` & `static/easter/` | Unused promotional 3D models |
| `static/playground/` | Unused test playground models (`playgroundVisual.glb`, `playgroundPhysical.glb`) |
| `static/ui/previews/home.*` | Preview image for the removed "Bruno's Home" bio tab |
| `static/ui/previews/behindTheScene.*` | Preview image for the removed "Behind the scene" portfolio tab |
| `static/ui/home.svg`, `question.svg`, `discord.svg` | Icons for removed portfolio menu tabs and Discord modal |
| `static/sounds/musics/*.wav` | 131 MB of duplicate uncompressed `.wav` source files (runtime `Audio.js` loads `.mp3`; CC0 `license.md` is retained) |

---

## 3. Surgical Modifications to Core Game Files

1. **`sources/index.html`**:
   - Replaced `<title>Bruno's</title>` and all `Bruno Simon` / `Three.js Journey` / `bruno-simon.com` meta, OpenGraph, and Twitter card tags with neutral standalone `<title>Driving Game</title>` metadata.
   - Removed the Google Analytics (`googletagmanager.com/gtag/js?id=G-JMSN30BQ5J` / `%VITE_ANALYTICS_TAG%`) tracking scripts.
   - Removed the `home` ("Bruno's Home" biography) and `behindTheScene` ("Behind the scene" portfolio write-up and links) tabs, previews, and content panels from `.js-menu`.
   - Removed the `discord` modal (`data-name="discord"`) from `.js-modals`.
   - Retained all functional game UI tabs (`options`, `controls`, `achievements`, `circuit`, `whispers`) and modals (`circuit-end`, `map`).

2. **`sources/index.js` & `sources/style/index.styl`**:
   - Removed `consoleLog.js` import and console output from `sources/index.js`.
   - Removed `@import url('./discord.styl')`, `@import url('./behindTheScene.styl')`, and `blackFriday.styl` from `sources/style/index.styl`.

3. **`sources/Game/Game.js` & `sources/Game/World/VisualVehicle.js`**:
   - Removed portfolio textures (`career*Texture`, `timeMachineScreen*Texture`) and unused `playground*` models from the `resourcesLoader.load` manifest.
   - Renamed `static/behindTheScene/stars.*` to `static/stars/stars.*` and `behindTheSceneStarsTexture` to `starsTexture` (used by the `abyssal` vehicle paint reward in `VisualVehicle.js`).
   - Removed `this.world.areas.social` reset hook in `Game.reset()`.

4. **`sources/Game/World/Areas/Areas.js` & `LandingArea.js` & `CookieArea.js`**:
   - Updated `Areas.js` to instantiate only the 7 gameplay areas: `AchievementsArea`, `AltarArea`, `BowlingArea`, `CircuitArea`, `CookieArea`, `LandingArea`, and `ToiletArea`.
   - Removed `setLetters()` from `LandingArea.js` (which initialized the 10 physical 3D letters spelling `BRUNO SIMON` at the landing spawn).
   - Added a defensive `computeBoundingSphere()` check in `CookieArea.js` before reading `mesh.geometry.boundingSphere.center`.

5. **3D Scene Graph Cleaning (`static/areas/areas.glb`, `areas-compressed.glb`, `static/respawns/respawnsReferences.glb`, `respawnsReferences-compressed.glb`)**:
   - Unlinked the top-level portfolio scene nodes (`career`, `social`, `projects`, `lab`, `behindTheScene`, `timeMachine`) from `scenes[0].nodes` in `areas.glb` and `areas-compressed.glb`.
   - Unlinked the 10 3D name letter nodes (`refLettersPhysicalDynamic.010`..`019`) from `landing.children` in `areas.glb` and `areas-compressed.glb`.
   - Unlinked the portfolio respawn nodes (`respawnProjects`, `respawnLab`, `respawnCareer`, `respawnSocial`, `respawnBehindTheScene`, `respawnTimeMachine`, `respawnOnlyFans`) from `respawnsReferences.glb` and `respawnsReferences-compressed.glb`.
   - Preserved all binary buffer views and accessor layouts untouched so Rapier3D trimesh/hull colliders and Draco/KTX2 loaders operate identically to the original export.

6. **`sources/Game/ClosingManager.js`, `Map.js`, `Audio.js`, `Title.js`, `data/achievements.js`**:
   - **`ClosingManager.js`**: Removed `ProjectsArea` and `LabArea` close checks; updated gamepad `pause` handler from `this.game.menu.open('home')` to `this.game.menu.open()` (which opens the default `options` tab).
   - **`Map.js`**: Kept only the 6 gameplay fast-travel pins (`Achievements`, `Altar`, `Bowling`, `Circuit`, `Cookie`, `Landing`).
   - **`Audio.js`**: Removed `areas.projects` reference from `ovenFire` ambient sound and connected the `campfire` spatial sound to the `LandingArea` bonfire (`bonfireHashes`).
   - **`Title.js`**: Removed the `'Bruno'` prefix from `document.title = title.join('')` while preserving the animated `🚗` + `🌳` browser tab speedometer.
   - **`data/achievements.js`**: Removed portfolio-tied achievements (`projects`, `lab`, `fan`, `statueDown`) and updated the `areas` ("Traveler: Visit every area.") requirement from `13` to `7` to match the 7 gameplay areas.

---

## 4. License & Legal Notice Preservation

- Retained `/license.md` and `/LICENSE` (MIT License, Copyright (c) 2025 Bruno Simon).
- Retained `/static/sounds/musics/license.md` (CC0 1.0 Universal license for in-game music by Kounine).
