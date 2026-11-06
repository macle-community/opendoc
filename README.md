# Macle OpenDoc Documentation Suite

Complete offline documentation suite, browser reader, and interactive component playground for **Macle Mini-Program Development** (version **26.6.0-LG0001**, synchronized directly from Huawei DevToolkit 26.6.0-LG0001).

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

Once started, open your browser (English is the default language):
- **English (Default)**: [http://localhost:3000/openplatform/macledocs/#/guide/installDevtool](http://localhost:3000/openplatform/macledocs/#/guide/installDevtool)
- **Chinese**: [http://localhost:3000/openplatform/macledocs/#/guide/installDevtool?locale=zh_CN](http://localhost:3000/openplatform/macledocs/#/guide/installDevtool?locale=zh_CN)

---

## Deploy to Vercel

The project includes pre-configured [`vercel.json`](vercel.json) ready for instant deployment.

### Option 1: Deploy using Vercel CLI

```bash
cd /home/f/nati/macle/opendoc

# Deploy to preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

### Option 2: Deploy via Git Repository (GitHub / GitLab / Bitbucket)

1. Push this repository to GitHub/GitLab:
   ```bash
   git remote add origin <your-git-remote-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..."** -> **"Project"**.
3. Import your repository.
4. The deployment settings will be detected automatically from `vercel.json`:
   - **Framework Preset**: *Other*
   - **Root Directory**: `./`
   - **Build Command**: *None / Disabled* (pre-built assets in `dist/`)
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will deploy the documentation and assign a public URL (e.g. `https://your-project.vercel.app`).

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
   - AI Agent IDE configuration (`agent.html`).
   - Digital signature & RSA release signing (`signSetting.html`).
6. **Interactive MiniApp Showcases**:
   - **Native DSL MiniApp (`miniapp/`)**: 25 interactive pages showcasing all native components and 34 MAUI 26.6.0 components including List, ListItem, and Modal.
   - **Taro React MiniApp (`miniapp-taro/`)**: 25 pages built with Taro 4 and React 18, utilizing `@tarojs/plugin-platform-macle`.
