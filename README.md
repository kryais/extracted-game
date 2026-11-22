# 3D Driving Game (Standalone Edition)

A standalone, browser-based 3D driving and world-exploration game built with **Three.js (WebGPU / WebGL2 + TSL)**, **Rapier3D** physics, **Howler.js** spatial audio, and **GSAP**.

This project is a clean, surgical extraction of the 3D driving game from [`brunosimon/folio-2025`](https://github.com/brunosimon/folio-2025), decoupled from all portfolio showcase areas, personal biography/career content, social links, analytics, and promotional modals while preserving 100% of the driving mechanics, physics, world systems, audio, mini-games, and functional game UI.

---

## Features

- **Physics-Driven Off-Road Vehicle**:
  - Full 4-wheel raycast/suspension vehicle controller powered by `@dimforge/rapier3d`.
  - Forward/reverse acceleration, steering, braking, turbo boost, aerial flip detection, upside-down/stuck recovery, and independent per-wheel or full-chassis hydraulic suspension controls.
  - Unlockable vehicle paint jobs (`Red`, `Orange`, `White`, `Black`, `Flames`, `Abyssal`) and secret classic vehicle swap via the Konami Code.
- **Dynamic World & Atmosphere**:
  - Custom TSL (Three.js Shading Language) materials with automatic WebGPU / WebGL2 backend support, bloom, and depth-of-field post-processing.
  - Real-time **Day/Night cycle** and **Seasonal/Year cycle** driving dynamic lighting, sky gradients, fog, and water/ice surface physics.
  - Dynamic **Weather system** with procedural wind, rain lines, snow accumulation (with tire tracks carved into snow/grass), clouds, lightning strikes, and a summonable tornado/cataclysm event.
  - Interactive vegetation (birch, oak, and cherry trees, bushes, flowers, grass, and falling leaves that react to vehicle motion).
- **Interactive Gameplay Areas & Physics Props**:
  - **Landing / Spawn Area**: Bonfire with spatial crackling fire audio, interactive Controls board, Map kiosk, and knockable physics props.
  - **Circuit Racing Area**: Full race track with starting lights, checkpoints, lap timer, podium, air dancer, and race-end modal.
  - **Bowling Area**: Interactive 10-pin bowling lane with pin setter, scoreboard, strike/spare detection, and jukebox music player.
  - **Cookie Bakery Area**: Interactive wood-fired bakery oven that spawns physical cookies.
  - **Altar Area**: Mysterious sacrifice vortex that tracks offerings and triggers a world cataclysm/tornado.
  - **Achievements Area**: Waterfall with secret cave zone, floating glyph pillar, and achievement progression menu.
  - **Destructible World Props**: Knockable brick walls, wooden fences, park benches, lanterns, pole lights, latrine cabin, and 20 explosive crates scattered across the island.

---

## Controls

### Keyboard & Mouse
| Action | Keys |
| :--- | :--- |
| **Drive Forward / Steer / Reverse** | `W` `A` `S` `D` or `Arrow Keys` |
| **Boost** | `Left Shift` |
| **Brake / Handbrake** | `Space` |
| **Interact** | `Enter` / `Click` interactive point |
| **Hydraulics (All Wheels)** | `Q` or `0` |
| **Hydraulics (Individual Wheels)** | `1` `2` `3` `4` (or `5` `6` `7` `8` for pairs) |
| **Horn** | `H` |
| **Open / Close World Map** | `M` |
| **Respawn Vehicle** | `R` |
| **Open / Close Game Menu** | `Escape` |
| **Camera Pan & Zoom** | `Click + Drag` / `Mouse Wheel` |

### Touch & Gamepad
- **Touch**: On-screen virtual joystick for driving/steering and context-sensitive action buttons (`Interact`, `Unstuck`, `Menu`, `Map`).
- **Gamepad**: Full Xbox / PlayStation controller support (`R2`/`L2` throttle/brake, `Left Stick` steering, `Cross`/`A` interact, `Circle`/`B` boost, `Square`/`X` brake, `Triangle`/`Y` hydraulics, `Select` map, `Start` menu).

---

## Getting Started

### Prerequisites
- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Starts the Vite development server at `http://localhost:5173/`.

### Build for Production
```bash
npm run build
```
Outputs the static production bundle to `dist/`, ready for deployment on any static web host.

### Preview Production Build
```bash
npm run preview
```

---

## URL Hash Flags (Debug & Developer Tools)

- `#debug` — Enables the Tweakpane real-time debug inspector panel (`H` to toggle visibility) and unlocks the debug achievement.
- `#skip` — Speeds up the initial world reveal animation (`4x`).
- `#stats` — Enables draw call / triangle / geometry / texture statistics in the debug panel.

---

## License & Attribution

- **Code & 3D Assets**: Licensed under the [MIT License](./license.md) — Copyright (c) 2025 Bruno Simon. See [`LICENSE`](./LICENSE) and [`license.md`](./license.md).
- **In-Game Music**: Created by Kounine and released under the [CC0 1.0 Universal Public Domain Dedication](./static/sounds/musics/license.md). See [`static/sounds/musics/license.md`](./static/sounds/musics/license.md).
# extracted-game
