const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("/home/f/nati/macle/sample-project/node_modules/ws");

const OUT_PATH = path.join(__dirname, "../../dist/img/og-preview.png");

const ogHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      background: radial-gradient(circle at 85% 15%, #1e293b 0%, #0b101b 60%, #060911 100%);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 64px 72px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    
    /* Subtle grid background */
    .bg-grid {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }

    /* Glow blobs */
    .glow-blob-1 {
      position: absolute;
      top: -80px;
      right: 100px;
      width: 420px;
      height: 420px;
      background: radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 70%);
      filter: blur(50px);
      pointer-events: none;
    }
    .glow-blob-2 {
      position: absolute;
      bottom: -60px;
      left: 300px;
      width: 380px;
      height: 380px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%);
      filter: blur(50px);
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
    }

    .brand-box {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .logo-badge {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: #ffffff;
      padding: 6px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .brand-title {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #ffffff;
    }

    .brand-badge {
      font-size: 13px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 9999px;
      background: rgba(37, 99, 235, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.35);
      color: #60a5fa;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .telebirr-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 16px;
      border-radius: 9999px;
      background: linear-gradient(135deg, rgba(7, 193, 96, 0.15), rgba(59, 130, 246, 0.15));
      border: 1px solid rgba(7, 193, 96, 0.4);
      color: #34d399;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.2px;
    }

    .telebirr-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 10px #10b981;
    }

    .main {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 10px;
    }

    .title {
      font-size: 52px;
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: #ffffff;
      max-width: 1000px;
    }

    .title-gradient {
      background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #34d399 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .desc {
      font-size: 20px;
      line-height: 1.5;
      color: #94a3b8;
      max-width: 920px;
      font-weight: 400;
    }

    .features-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 8px;
    }

    .feat-card {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #cbd5e1;
      backdrop-filter: blur(8px);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 14px;
      color: #64748b;
    }

    .url-text {
      font-family: ui-monospace, SFMono-Regular, monospace;
      color: #38bdf8;
      font-weight: 600;
      font-size: 15px;
    }

    .tags {
      display: flex;
      gap: 16px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="glow-blob-1"></div>
  <div class="glow-blob-2"></div>

  <div class="header">
    <div class="brand-box">
      <div class="logo-badge">
        <img class="logo-img" src="http://localhost:3000/openplatform/macledocs/img/logo.png" alt="" />
      </div>
      <div>
        <div class="brand-title">Macle Open Platform</div>
      </div>
      <span class="brand-badge">v26.6 DevSuite</span>
    </div>
    <div class="telebirr-pill">
      <span class="telebirr-dot"></span>
      Official Framework for Telebirr MiniApps
    </div>
  </div>

  <div class="main">
    <h1 class="title">
      Build High-Performance <span class="title-gradient">MiniApps for Telebirr</span>
    </h1>
    <p class="desc">
      Complete developer documentation, 50+ MAUI UI components, API references, DevSuite IDE, and instant Web Simulator for Telebirr SuperApp mini-programs.
    </p>

    <div class="features-row">
      <div class="feat-card">⚡ Native MAML & MASS</div>
      <div class="feat-card">⚛️ Taro 3.x React</div>
      <div class="feat-card">🎨 50+ MAUI Components</div>
      <div class="feat-card">📱 Interactive Web Simulator</div>
      <div class="feat-card">💳 Telebirr APIs</div>
    </div>
  </div>

  <div class="footer">
    <span class="url-text">https://macle-opendoc.vercel.app</span>
    <div class="tags">
      <span>Ethio Telecom Telebirr SuperApp</span>
      <span>•</span>
      <span>Dual Language (EN / 中文)</span>
      <span>•</span>
      <span>Enterprise Grade</span>
    </div>
  </div>
</body>
</html>`;

async function generateOgImage() {
  console.log("Generating 1200x630 Open Graph Social Image...");
  const tempHtmlPath = path.join(__dirname, "temp-og.html");
  fs.writeFileSync(tempHtmlPath, ogHtml, "utf8");

  const chrome = spawn("/usr/bin/google-chrome", [
    "--headless=new",
    "--remote-debugging-port=9246",
    "--window-size=1200,630",
    "--no-sandbox",
    "--disable-gpu",
    "about:blank"
  ]);

  await new Promise(r => setTimeout(r, 1500));

  http.get("http://127.0.0.1:9246/json/list", (res) => {
    let raw = "";
    res.on("data", c => raw += c);
    res.on("end", async () => {
      const page = JSON.parse(raw).find(t => t.type === "page");
      const ws = new WebSocket(page.webSocketDebuggerUrl);

      let msgId = 1;
      const callbacks = new Map();
      function send(method, params = {}) {
        return new Promise((resolve) => {
          const id = msgId++;
          callbacks.set(id, resolve);
          ws.send(JSON.stringify({ id, method, params }));
        });
      }

      ws.on("message", (data) => {
        const msg = JSON.parse(data.toString());
        if (msg.id && callbacks.has(msg.id)) {
          callbacks.get(msg.id)(msg.result);
          callbacks.delete(msg.id);
        }
      });

      ws.on("open", async () => {
        await send("Page.enable");
        await send("Emulation.setDeviceMetricsOverride", {
          width: 1200,
          height: 630,
          deviceScaleFactor: 2,
          mobile: false
        });

        await send("Page.navigate", { url: `file://${tempHtmlPath}` });
        await new Promise(r => setTimeout(r, 2000));

        const snap = await send("Page.captureScreenshot", {
          format: "png",
          clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 }
        });

        fs.writeFileSync(OUT_PATH, Buffer.from(snap.data, "base64"));
        console.log(`Saved Open Graph preview to ${OUT_PATH}`);

        // Cleanup
        try { fs.unlinkSync(tempHtmlPath); } catch (e) {}
        chrome.kill();
        process.exit(0);
      });
    });
  });
}

generateOgImage().catch(err => {
  console.error("OG generation error:", err);
  process.exit(1);
});
