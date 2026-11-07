#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const OPENDOC_DIR = path.resolve(__dirname, '../../');
const DIST_DIR = path.join(OPENDOC_DIR, 'dist');
const ROOT_DIR = path.resolve(OPENDOC_DIR, '../');
const SIM_DIR = path.join(ROOT_DIR, 'macle-web-simulator');
const MINIAPP_DIR = path.join(OPENDOC_DIR, 'miniapp');
const TARO_DIR = path.join(OPENDOC_DIR, 'miniapp-taro');

console.log('='.repeat(60));
console.log('📦 Bundling Static Simulator for Vercel / Cloud Deployment');
console.log('='.repeat(60));

// 1. Build Taro miniapp if needed
const taroDist = path.join(TARO_DIR, 'dist');
if (!fs.existsSync(path.join(taroDist, 'app.json'))) {
  console.log('[1/5] Building Taro React MiniApp...');
  try {
    execSync('npm run build:macle', { cwd: TARO_DIR, stdio: 'inherit' });
  } catch (e) {
    console.warn('[Warning] Taro build failed or skipped:', e.message);
  }
} else {
  console.log('[1/5] Taro React MiniApp dist already present.');
}

// 2. Pre-compile miniapps with @macle/compiler if available
let macleCompiler = null;
const compilerCandidates = [
  path.join(ROOT_DIR, 'DevToolkit_26.6.0/DevToolkit_26.6.0-LG0001/Macle_26.6.0-LG0001_Engine_Compiler/node_modules/@macle/compiler'),
  path.join(ROOT_DIR, 'DevToolkit_25.9.0/Macle_25.9.0_DevSuite_IDE/macle-miniprogram-tools-25.9.0-file/extension/node_modules/@macle/compiler')
];
for (const cand of compilerCandidates) {
  try {
    macleCompiler = require(cand);
    if (macleCompiler) break;
  } catch (e) {}
}

const nativeTarget = path.join(os.homedir(), '.macle/target/compose/miniapp/root/debug/app');
const taroTarget = path.join(os.homedir(), '.macle/target/compose/opendoc-miniapp-taro/root/debug/app');

async function compileIfCompilerAvailable() {
  if (macleCompiler) {
    console.log('[2/5] Compiling MiniApps with @macle/compiler...');
    fs.mkdirSync(nativeTarget, { recursive: true });
    fs.mkdirSync(taroTarget, { recursive: true });
    await macleCompiler.compile(MINIAPP_DIR, nativeTarget, { debug: true, es5: false });
    if (fs.existsSync(taroDist)) {
      await macleCompiler.compile(taroDist, taroTarget, { debug: true, es5: false });
    }
  } else {
    console.log('[2/5] @macle/compiler not found in candidates, using existing cached target compose.');
  }
}

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(source)) return;
  fs.mkdirSync(target, { recursive: true });
  const files = fs.readdirSync(source);
  for (const file of files) {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  }
}

async function bundle() {
  await compileIfCompilerAvailable();

  console.log('[3/5] Copying Simulator Runtime & Framework...');
  const runtimeFramework = path.join(SIM_DIR, 'runtime/framework');
  const runtimeSimulator = path.join(SIM_DIR, 'runtime/simulator');

  // Destinations for native & taro
  const nativeDebug = path.join(DIST_DIR, 'miniapp/root/debug');
  const taroDebug = path.join(DIST_DIR, 'opendoc-miniapp-taro/root/debug');

  copyFolderRecursiveSync(runtimeFramework, path.join(nativeDebug, 'framework'));
  copyFolderRecursiveSync(runtimeSimulator, path.join(nativeDebug, 'simulator'));

  copyFolderRecursiveSync(runtimeFramework, path.join(taroDebug, 'framework'));
  copyFolderRecursiveSync(runtimeSimulator, path.join(taroDebug, 'simulator'));

  console.log('[4/5] Copying Precompiled MiniApp Targets...');
  if (fs.existsSync(nativeTarget)) {
    copyFolderRecursiveSync(nativeTarget, path.join(nativeDebug, 'app'));
  }
  if (fs.existsSync(taroTarget)) {
    copyFolderRecursiveSync(taroTarget, path.join(taroDebug, 'app'));
  }

  // Copy standalone web workbench
  const webDir = path.join(SIM_DIR, 'web');
  const simWebDist = path.join(DIST_DIR, '_simulator');
  copyFolderRecursiveSync(webDir, simWebDist);

  console.log('[5/5] Creating Static API Endpoints & Info...');
  const apiDir = path.join(DIST_DIR, 'api');
  fs.mkdirSync(apiDir, { recursive: true });

  const simInfo = {
    online: true,
    port: 443,
    projectName: 'miniapp',
    native: {
      port: 443,
      projectName: 'miniapp',
      online: true
    },
    taro: {
      port: 443,
      projectName: 'opendoc-miniapp-taro',
      online: true
    }
  };

  fs.writeFileSync(path.join(apiDir, 'simulator-info.json'), JSON.stringify(simInfo, null, 2));
  fs.writeFileSync(path.join(apiDir, 'simulator-info'), JSON.stringify(simInfo, null, 2));

  // 6. Generate Google SEO XML Sitemap & robots.txt
  console.log('[6/6] Generating SEO Sitemaps & robots.txt...');
  try {
    const { generate } = require('./generate-sitemap');
    generate();
  } catch (seoErr) {
    console.warn('[Warning] Sitemap generation notice:', seoErr.message);
  }

  console.log('='.repeat(60));
  console.log('✅ Static Simulator Bundle Complete!');
  console.log('Ready for instant deployment on Vercel / Netlify / Cloudflare Pages.');
  console.log('='.repeat(60));
}

bundle().catch(err => {
  console.error('[Error] Bundle failed:', err);
  process.exit(1);
});
