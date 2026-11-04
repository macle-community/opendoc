#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DEFAULT_PORT = process.env.PORT || 3000;
const args = process.argv.slice(2);
let port = DEFAULT_PORT;
const portIndex = args.indexOf('--port');
if (portIndex !== -1 && args[portIndex + 1]) {
  port = parseInt(args[portIndex + 1], 10);
}

const DIST_DIR = path.join(__dirname, 'dist');
const BASE_ROUTE = '/openplatform/macledocs';

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
    res.writeHead(302, { Location: `${BASE_ROUTE}/#/guide/installDevtool` });
    return res.end();
  }

  // Handle route under BASE_ROUTE
  if (reqPath.startsWith(BASE_ROUTE)) {
    let subPath = reqPath.slice(BASE_ROUTE.length);
    if (subPath === '' || subPath === '/') {
      subPath = '/index.html';
    }

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

server.listen(port, () => {
  console.log('='.repeat(60));
  console.log(`Macle OpenDoc Documentation Server`);
  console.log(`Version: 9.1.69 (from DevSuite 26.6.0)`);
  console.log(`URL:     http://localhost:${port}${BASE_ROUTE}/#/guide/installDevtool`);
  console.log('='.repeat(60));
});
