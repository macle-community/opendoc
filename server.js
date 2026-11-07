#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const os = require('os');

const DEFAULT_PORT = process.env.PORT || 3000;
const args = process.argv.slice(2);
let port = DEFAULT_PORT;
const portIndex = args.indexOf('--port');
if (portIndex !== -1 && args[portIndex + 1]) {
  port = parseInt(args[portIndex + 1], 10);
}

const DIST_DIR = path.join(__dirname, 'dist');
const MINIAPP_DIR = path.join(__dirname, 'miniapp');
const TARO_MINIAPP_DIR = path.join(__dirname, 'miniapp-taro');
const BASE_ROUTE = '/openplatform/macledocs';

let macleCompiler = null;
const compilerCandidates = [
  '/home/f/nati/macle/DevToolkit_26.6.0/DevToolkit_26.6.0-LG0001/Macle_26.6.0-LG0001_Engine_Compiler/node_modules/@macle/compiler',
  '/home/f/nati/macle/DevToolkit_25.9.0/Macle_25.9.0_DevSuite_IDE/macle-miniprogram-tools-25.9.0-file/extension/node_modules/@macle/compiler'
];
for (const cand of compilerCandidates) {
  try {
    macleCompiler = require(cand);
    if (macleCompiler) break;
  } catch (e) {}
}

let MacleWebSimulatorServer = null;
try {
  MacleWebSimulatorServer = require('@macle-community/simulator-web').MacleWebSimulatorServer;
} catch (e) {
  try {
    MacleWebSimulatorServer = require('../macle-web-simulator/src/server').MacleWebSimulatorServer;
  } catch (_) {
    try {
      MacleWebSimulatorServer = require('macle-web-simulator/src/server').MacleWebSimulatorServer;
    } catch (_2) {}
  }
}

// Active simulator daemons (Native MAML and Taro React)
const simulatorDaemons = {
  native: { port: 30002, projectName: 'miniapp', online: false, instance: null },
  taro: { port: 30003, projectName: 'taro-miniapp', online: false, instance: null }
};

let activeSimulatorPort = 30002;
let simulatorProjectName = 'miniapp';
let simulatorIsOnline = false;

async function startInternalSimulators() {
  if (!MacleWebSimulatorServer) return;

  // 1. Native MAML Simulator on 30002
  try {
    const nativeSim = new MacleWebSimulatorServer({
      source: MINIAPP_DIR,
      port: 30002,
      host: '127.0.0.1'
    });
    await nativeSim.init();
    await nativeSim.start();
    simulatorDaemons.native.port = 30002;
    simulatorDaemons.native.projectName = nativeSim.projectInfo.projectName;
    simulatorDaemons.native.online = true;
    simulatorDaemons.native.instance = nativeSim;
    console.log('[OpenDoc] Standalone Native MAML Web Simulator online at http://127.0.0.1:30002');
  } catch (err) {
    console.warn('[OpenDoc] Native simulator notice:', err.message);
  }

  // 2. Taro React Simulator on 30003
  try {
    const taroDist = path.join(TARO_MINIAPP_DIR, 'dist');
    if (fs.existsSync(taroDist)) {
      const taroSim = new MacleWebSimulatorServer({
        source: taroDist,
        port: 30003,
        host: '127.0.0.1'
      });
      await taroSim.init();
      await taroSim.start();
      simulatorDaemons.taro.port = 30003;
      simulatorDaemons.taro.projectName = taroSim.projectInfo.projectName;
      simulatorDaemons.taro.online = true;
      simulatorDaemons.taro.instance = taroSim;
      console.log('[OpenDoc] Standalone Taro React Web Simulator online at http://127.0.0.1:30003');
    }
  } catch (err) {
    console.warn('[OpenDoc] Taro simulator notice:', err.message);
  }

  simulatorIsOnline = simulatorDaemons.native.online || simulatorDaemons.taro.online;
  activeSimulatorPort = simulatorDaemons.native.online ? simulatorDaemons.native.port : simulatorDaemons.taro.port;
  simulatorProjectName = simulatorDaemons.native.online ? simulatorDaemons.native.projectName : simulatorDaemons.taro.projectName;
}

startInternalSimulators();

function detectSimulatorPort() {
  const candidatePorts = [30002, 30003, 30001, 30004, 30000];
  for (const p of candidatePorts) {
    const probeReq = http.get({
      hostname: '127.0.0.1',
      port: p,
      path: '/api/project-info',
      timeout: 800
    }, (res) => {
      if (res.statusCode === 200) {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const info = JSON.parse(body);
            if (info.projectName === 'taro-miniapp' || info.projectName === 'dist' || (info.composeDir && info.composeDir.includes('taro'))) {
              simulatorDaemons.taro.port = p;
              simulatorDaemons.taro.projectName = info.projectName;
              simulatorDaemons.taro.online = true;
            } else if (info.projectName === 'miniapp') {
              simulatorDaemons.native.port = p;
              simulatorDaemons.native.projectName = info.projectName;
              simulatorDaemons.native.online = true;
            }
            simulatorIsOnline = simulatorDaemons.native.online || simulatorDaemons.taro.online;
            activeSimulatorPort = simulatorDaemons.native.online ? simulatorDaemons.native.port : simulatorDaemons.taro.port;
            simulatorProjectName = simulatorDaemons.native.online ? simulatorDaemons.native.projectName : simulatorDaemons.taro.projectName;
          } catch (e) {}
        });
      }
    });
    probeReq.on('error', () => {
      if (simulatorDaemons.native.port === p) simulatorDaemons.native.online = false;
      if (simulatorDaemons.taro.port === p) simulatorDaemons.taro.online = false;
      simulatorIsOnline = simulatorDaemons.native.online || simulatorDaemons.taro.online;
    });
  }
}

function getProxyTargetPort(req, reqPath) {
  const referer = req.headers['referer'] || '';
  if (
    reqPath.startsWith('/miniapp-taro/') ||
    reqPath.startsWith('/dist/') ||
    reqPath.includes('miniapp-taro') ||
    referer.includes('/miniapp-taro/') ||
    referer.includes('/dist/') ||
    req.url.includes('miniapp-taro') ||
    req.url.includes('dist')
  ) {
    return simulatorDaemons.taro.port || 30003;
  }
  if (
    reqPath.startsWith('/miniapp/') ||
    referer.includes('/miniapp/') ||
    req.url.includes('/miniapp/')
  ) {
    return simulatorDaemons.native.port || 30002;
  }
  if (req.url.includes('fw=taro')) return simulatorDaemons.taro.port || 30003;
  if (req.url.includes('fw=native')) return simulatorDaemons.native.port || 30002;

  return simulatorDaemons.native.online ? simulatorDaemons.native.port : (simulatorDaemons.taro.port || 30002);
}

setInterval(detectSimulatorPort, 2500);
detectSimulatorPort();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let reqPath = decodeURIComponent(parsedUrl.pathname);

  // Root redirect
  if (reqPath === '/' || reqPath === '') {
    res.writeHead(302, { Location: `${BASE_ROUTE}/#/guide/installDevtool?locale=en_US` });
    return res.end();
  }

  // 1. Internal Simulator Info API
  if (reqPath === '/api/simulator-info') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({
      online: simulatorDaemons.native.online || simulatorDaemons.taro.online,
      port: activeSimulatorPort,
      projectName: simulatorProjectName,
      native: simulatorDaemons.native,
      taro: simulatorDaemons.taro
    }));
  }

  // 2. Dynamic Snippet Compilation Endpoint
  if (reqPath === '/api/compile-snippet' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { framework, tsx, maml, js, json, mass, title } = payload;
        const isTaro = framework === 'taro' || !!tsx;

        if (isTaro) {
          const taroRunnerDir = path.join(TARO_MINIAPP_DIR, 'src/pages/runner');
          fs.mkdirSync(taroRunnerDir, { recursive: true });
          if (tsx) {
            const normalizedTsx = tsx
              .replace(/@(?:tarojs|macle-community)\/(?:plugin-platform-macle|taro-plugin-macle)\/dist\/components-react/g, '@macle-community/taro-plugin-macle/components-react')
              .replace(/@tarojs\/plugin-platform-macle\/components-react/g, '@macle-community/taro-plugin-macle/components-react');
            fs.writeFileSync(path.join(taroRunnerDir, 'index.tsx'), normalizedTsx);
          }
          const { execSync } = require('child_process');
          execSync('./node_modules/.bin/taro build --type macle', { cwd: TARO_MINIAPP_DIR, stdio: 'pipe' });
          if (macleCompiler) {
            const outApp = path.join(os.homedir(), '.macle/target/compose', simulatorDaemons.taro.projectName, 'root/debug/app');
            fs.mkdirSync(outApp, { recursive: true });
            await macleCompiler.compile(path.join(TARO_MINIAPP_DIR, 'dist'), outApp, { debug: true, es5: false });
          }
          if (simulatorDaemons.taro.instance && simulatorDaemons.taro.instance.liveReload) {
            simulatorDaemons.taro.instance.liveReload.notifyReload('snippet');
          }
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({
            ok: true,
            page: 'pages/runner/index',
            projectName: simulatorDaemons.taro.projectName,
            framework: 'taro'
          }));
        } else {
          const runnerPageDir = path.join(MINIAPP_DIR, 'pages/runner');
          fs.mkdirSync(runnerPageDir, { recursive: true });

          if (maml) fs.writeFileSync(path.join(runnerPageDir, 'index.maml'), maml);
          if (js) fs.writeFileSync(path.join(runnerPageDir, 'index.js'), js);
          if (mass) fs.writeFileSync(path.join(runnerPageDir, 'index.mass'), mass);
          fs.writeFileSync(path.join(runnerPageDir, 'index.json'), JSON.stringify({
            navigationBarTitleText: title || 'Live Code Example'
          }, null, 2));

          if (macleCompiler) {
            const outApp = path.join(os.homedir(), '.macle/target/compose', simulatorDaemons.native.projectName, 'root/debug/app');
            fs.mkdirSync(outApp, { recursive: true });
            await macleCompiler.compile(MINIAPP_DIR, outApp, { debug: true, es5: false });
          }
          if (simulatorDaemons.native.instance && simulatorDaemons.native.instance.liveReload) {
            simulatorDaemons.native.instance.liveReload.notifyReload('snippet');
          }

          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({
            ok: true,
            page: 'pages/runner/index',
            projectName: simulatorDaemons.native.projectName,
            framework: 'native'
          }));
        }
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  // 3. Reverse proxy to Macle Web Simulator
  const isSimulatorProxy =
    reqPath.startsWith('/_simulator') ||
    reqPath.startsWith(`${BASE_ROUTE}/_simulator`) ||
    reqPath.startsWith('/__web') ||
    reqPath.startsWith('/api/') ||
    reqPath.startsWith('/mcss/') ||
    reqPath.includes('/root/debug/') ||
    reqPath.startsWith('/miniapp/root/') ||
    reqPath.startsWith('/miniapp-taro/root/') ||
    reqPath.startsWith('/dist/root/') ||
    reqPath.startsWith('/store/') ||
    reqPath.startsWith('/tmp/');

  if (isSimulatorProxy) {
    let targetPath;
    if (reqPath.startsWith(`${BASE_ROUTE}/_simulator`)) {
      targetPath = req.url.slice(`${BASE_ROUTE}/_simulator`.length) || '/';
    } else if (reqPath.startsWith('/_simulator')) {
      targetPath = req.url.slice('/_simulator'.length) || '/';
    } else {
      targetPath = req.url;
    }

    const targetPort = getProxyTargetPort(req, reqPath);
    const proxyHeaders = { ...req.headers, host: `127.0.0.1:${targetPort}` };
    delete proxyHeaders['accept-encoding']; // Avoid compressed streaming issues

    const proxyReq = http.request({
      hostname: '127.0.0.1',
      port: targetPort,
      path: targetPath,
      method: req.method,
      headers: proxyHeaders
    }, (proxyRes) => {
      const responseHeaders = { ...proxyRes.headers };
      if (responseHeaders.location && responseHeaders.location.startsWith('/')) {
        responseHeaders.location = responseHeaders.location;
      }
      res.writeHead(proxyRes.statusCode, responseHeaders);
      proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
      res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        error: 'Macle Web Simulator is currently offline',
        message: err.message,
        port: targetPort
      }));
    });

    req.pipe(proxyReq);
    return;
  }

  // 4. Handle route under BASE_ROUTE or direct dist assets (/data, /css, /js, /img, /favicon.ico, robots.txt, sitemap.xml)
  let subPath = null;
  if (reqPath.startsWith(BASE_ROUTE)) {
    subPath = reqPath.slice(BASE_ROUTE.length);
    if (subPath === '' || subPath === '/') {
      subPath = '/index.html';
    }
  } else if (
    reqPath.startsWith('/data/') ||
    reqPath.startsWith('/css/') ||
    reqPath.startsWith('/js/') ||
    reqPath.startsWith('/img/') ||
    reqPath === '/favicon.ico' ||
    reqPath === '/robots.txt' ||
    reqPath === '/sitemap.xml' ||
    reqPath === '/sitemap.json' ||
    reqPath.startsWith('/google')
  ) {
    subPath = reqPath;
  }

  if (subPath !== null) {
    const filePath = path.join(DIST_DIR, subPath);

    // Prevent directory traversal attacks
    if (!filePath.startsWith(DIST_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      return res.end('Forbidden');
    }

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': stats.size,
          'Cache-Control': 'no-cache'
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
      } else {
        // Fallback to index.html for SPA client-side routing
        const indexPath = path.join(DIST_DIR, 'index.html');
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('File Not Found');
          }
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Length': data.length
          });
          res.end(data);
        });
      }
    });
    return;
  }

  // 404 for other unhandled routes
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

// Proxy WebSocket / HTTP Upgrade requests to Macle Web Simulator
server.on('upgrade', (req, socket, head) => {
  const targetPort = getProxyTargetPort(req, req.url);
  const proxyReq = http.request({
    hostname: '127.0.0.1',
    port: targetPort,
    path: req.url,
    method: req.method,
    headers: req.headers
  });

  proxyReq.on('upgrade', (proxyRes, proxySocket, proxyHead) => {
    let headerStr = `HTTP/1.1 101 Switching Protocols\r\n`;
    for (const key of Object.keys(proxyRes.headers)) {
      headerStr += `${key}: ${proxyRes.headers[key]}\r\n`;
    }
    headerStr += '\r\n';
    socket.write(headerStr);
    if (proxyHead && proxyHead.length) {
      proxySocket.unshift(proxyHead);
    }
    proxySocket.pipe(socket);
    socket.pipe(proxySocket);
  });

  proxyReq.on('error', () => {
    socket.destroy();
  });

  proxyReq.end();
});

server.listen(port, () => {
  console.log('='.repeat(60));
  console.log(`Macle OpenDoc Documentation Server`);
  console.log(`Version: 9.1.69 (from DevSuite 26.6.0)`);
  console.log(`URL:     http://localhost:${port}${BASE_ROUTE}/#/guide/installDevtool?locale=en_US`);
  console.log(`Simulator Target: http://localhost:${activeSimulatorPort}/`);
  console.log('='.repeat(60));
});
