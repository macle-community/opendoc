# Macle OpenDoc Documentation Suite

Complete offline documentation suite and browser reader for **Macle Mini-Program Development** (version **9.1.69**, extracted from Macle DevToolkit 26.6.0).

---

## Quick Start

You can run the documentation server directly with Node.js (zero external dependencies required):

```bash
# Start documentation server on default port 3000
node server.js

# Or start on a custom port
node server.js --port 8080

# Or via npm
npm start
```

Once started, open your browser at:
- **English**: [http://localhost:3000/openplatform/macledocs/#/guide/installDevtool?locale=en_US](http://localhost:3000/openplatform/macledocs/#/guide/installDevtool?locale=en_US)
- **Chinese**: [http://localhost:3000/openplatform/macledocs/#/guide/installDevtool?locale=zh_CN](http://localhost:3000/openplatform/macledocs/#/guide/installDevtool?locale=zh_CN)

---

## Directory Structure

```text
opendoc/
├── dist/                     # Full SPA web application & static documentation files
│   ├── index.html            # Main SPA entry point
│   ├── css/                  # Styling and themes
│   ├── js/                   # Vue 3 SPA frontend bundle
│   └── data/
│       ├── menu/             # Navigation tree JSONs (en & zh_CN)
│       └── doc/              # Documentation HTML chapters & articles
│           ├── api/          # JavaScript API references (ma.*)
│           ├── component/    # MAML UI Component documentation
│           ├── devtools/     # DevTools, simulator & remote debug guides
│           ├── framework/    # Mini-program architecture, life-cycle, configs
│           ├── guide/        # Getting started guides & setup instructions
│           ├── extended/     # Extended libraries & capabilities
│           ├── maui-component/# MAUI UI library documentation
│           ├── sdk/          # JSSDK references
│           └── en/           # Complete English documentation tree
│
├── markdown-docs/            # Clean Markdown reference documentation
│   ├── en/                   # English Markdown docs (common, DSL, H5)
│   └── zh/                   # Chinese Markdown docs (common, DSL, H5)
│
├── server.js                 # Zero-dependency local Node.js static HTTP server
├── package.json              # Package metadata and dependencies
└── README.md                 # Project documentation
```

---

## Documentation Categories

1. **Getting Started & Guides (`doc/guide/`)**:
   - DevTools setup, project creation, deployment, and configuration.
2. **Framework Architecture (`doc/framework/`)**:
   - `app.json`, `app.js`, `app.mass` application structure.
   - Page routing, lifecycle callbacks, MAML data binding, event handling.
   - SJS (Safe JavaScript) module system.
3. **MAML UI Components (`doc/component/`)**:
   - Basic components: `view`, `text`, `icon`, `progress`, `rich-text`.
   - Form components: `button`, `checkbox`, `form`, `input`, `picker`, `radio`, `slider`, `switch`.
   - Media components: `audio`, `image`, `video`, `camera`.
   - Navigation: `navigator`.
   - Canvas & Maps: `canvas`, `map`.
4. **JavaScript APIs (`doc/api/`)**:
   - Network (`ma.request`, upload/download, websocket).
   - Storage (`ma.setStorage`, `ma.getStorage`, cache).
   - Media (audio/video players, image picker, recorder).
   - Device & Hardware (system info, battery, network status, vibrate, accelerometer).
   - Navigation & Routing (`ma.navigateTo`, `ma.redirectTo`, `ma.switchTab`, `ma.navigateBack`).
   - Payment (`ma.tradePay`).
5. **Tools & Remote Debugging (`doc/devtools/`)**:
   - Simulator controls, storage inspection, remote console and network debugging.
