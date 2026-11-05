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
const BASE_ROUTE = '/openplatform/macledocs';

let macleCompiler = null;
try {
  macleCompiler = require('/home/f/nati/macle/DevToolkit_25.9.0/Macle_25.9.0_DevSuite_IDE/macle-miniprogram-tools-25.9.0-file/extension/node_modules/@macle/compiler');
} catch (e) {
  console.warn('Notice: @macle/compiler not loaded:', e.message);
}

// Active simulator daemon port & project discovery
let activeSimulatorPort = 30002;
let simulatorProjectName = 'miniapp';
let simulatorIsOnline = false;

function detectSimulatorPort() {
  const candidatePorts = [30002, 30003, 30001, 30004, 30000];
  let found = false;
  for (const p of candidatePorts) {
    const probeReq = http.get({
      hostname: '127.0.0.1',
      port: p,
      path: '/api/project-info',
      timeout: 600
    }, (res) => {
      if (res.statusCode === 200) {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const info = JSON.parse(body);
            activeSimulatorPort = p;
            simulatorIsOnline = true;
            if (info.projectName) simulatorProjectName = info.projectName;
          } catch (e) {}
        });
      }
    });
    probeReq.on('error', () => {});
  }
}

setInterval(detectSimulatorPort, 2500);
detectSimulatorPort();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
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
      online: simulatorIsOnline,
      port: activeSimulatorPort,
      projectName: simulatorProjectName
    }));
  }

  // 2. Dynamic Snippet Compilation Endpoint
  if (reqPath === '/api/compile-snippet' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const { maml, js, json, mass, title } = payload;

        const runnerPageDir = path.join(MINIAPP_DIR, 'pages/runner');
        fs.mkdirSync(runnerPageDir, { recursive: true });

        if (maml) fs.writeFileSync(path.join(runnerPageDir, 'index.maml'), maml);
        if (js) fs.writeFileSync(path.join(runnerPageDir, 'index.js'), js);
        if (mass) fs.writeFileSync(path.join(runnerPageDir, 'index.mass'), mass);
        fs.writeFileSync(path.join(runnerPageDir, 'index.json'), JSON.stringify({
          navigationBarTitleText: title || 'Live Code Example'
        }, null, 2));

        if (macleCompiler) {
          const outApp = path.join(os.homedir(), '.macle/target/compose', simulatorProjectName, 'root/debug/app');
          fs.mkdirSync(outApp, { recursive: true });
          await macleCompiler.compile(MINIAPP_DIR, outApp, { debug: true, es5: false });
        }

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          ok: true,
          page: 'pages/runner/index',
          projectName: simulatorProjectName
        }));
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

    const proxyHeaders = { ...req.headers, host: `127.0.0.1:${activeSimulatorPort}` };
    delete proxyHeaders['accept-encoding']; // Avoid compressed streaming issues

    const proxyReq = http.request({
      hostname: '127.0.0.1',
      port: activeSimulatorPort,
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
      simulatorIsOnline = false;
      res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        error: 'Macle Web Simulator is currently offline',
        message: err.message,
        port: activeSimulatorPort
      }));
    });

    req.pipe(proxyReq);
    return;
  }

  // 4. Handle route under BASE_ROUTE or direct dist assets (/data, /css, /js, /img, /favicon.ico)
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
    reqPath === '/favicon.ico'
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
  const proxyReq = http.request({
    hostname: '127.0.0.1',
    port: activeSimulatorPort,
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
