/**
 * Macle OpenDoc Code Block Runner & Web Simulator Controller
 * Provides one-click execution of documentation code examples
 * with full runnable code generation and live Web Simulator preview.
 */
(function() {
  'use strict';

  // State
  let currentExample = {
    title: 'Code Example',
    rawCode: '',
    lang: 'html',
    files: {},
    activeTab: 'package'
  };

  let modalEl = null;
  let activeViewMode = 'split'; // 'split', 'code', 'sim'
  let activeSimMode = 'live';   // 'live', 'devsuite'
  const consoleLogs = [];

  // Component Mapping to MiniProgram paths
  const MAUI_COMPONENT_MAP = {
    'maui-button': '/maui-components/button/index',
    'maui-cell': '/maui-components/cell/index',
    'maui-cell-group': '/maui-components/cell-group/index',
    'maui-checkbox': '/maui-components/checkbox/index',
    'maui-checkbox-group': '/maui-components/checkbox-group/index',
    'maui-col': '/maui-components/col/index',
    'maui-row': '/maui-components/row/index',
    'maui-dialog': '/maui-components/dialog/index',
    'maui-divider': '/maui-components/divider/index',
    'maui-empty': '/maui-components/empty/index',
    'maui-field': '/maui-components/field/index',
    'maui-icon': '/maui-components/icon/index',
    'maui-image': '/maui-components/image/index',
    'maui-loading': '/maui-components/loading/index',
    'maui-overlay': '/maui-components/overlay/index',
    'maui-popup': '/maui-components/popup/index',
    'maui-progress': '/maui-components/progress/index',
    'maui-radio': '/maui-components/radio/index',
    'maui-radio-group': '/maui-components/radio-group/index',
    'maui-sidebar': '/maui-components/sidebar/index',
    'maui-sidebar-item': '/maui-components/sidebar-item/index',
    'maui-slider': '/maui-components/slider/index',
    'maui-stepper': '/maui-components/stepper/index',
    'maui-steps': '/maui-components/steps/index',
    'maui-sticky': '/maui-components/sticky/index',
    'maui-switch': '/maui-components/switch/index',
    'maui-tab': '/maui-components/tab/index',
    'maui-tabs': '/maui-components/tabs/index',
    'maui-tag': '/maui-components/tag/index',
    'maui-title-bar': '/maui-components/title-bar/index',
    'maui-toast': '/maui-components/toast/index'
  };

  // 1. Initialize DOM Code Decorator
  function initDocRunner() {
    decorateAllCodeBlocks();

    // Use MutationObserver to watch for SPA content updates
    const observer = new MutationObserver(function(mutations) {
      let shouldDecorate = false;
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.addedNodes.length > 0) {
          shouldDecorate = true;
          break;
        }
      }
      if (shouldDecorate) {
        decorateAllCodeBlocks();
      }
    });

    const target = document.querySelector('.markdown-body') || document.getElementById('app') || document.body;
    observer.observe(target, { childList: true, subtree: true });

    // Also decorate on hash change
    window.addEventListener('hashchange', function() {
      setTimeout(decorateAllCodeBlocks, 300);
    });

    // Create Runner Modal DOM
    createRunnerModal();
  }

  // 2. Decorate all <pre><code> blocks with Header Toolbar
  function decorateAllCodeBlocks() {
    const preElements = document.querySelectorAll('.markdown-body pre');
    preElements.forEach(function(pre) {
      if (pre.dataset.macleDecorated === 'true') return;

      const codeEl = pre.querySelector('code');
      if (!codeEl) return;

      pre.dataset.macleDecorated = 'true';

      // Detect language
      let lang = 'html';
      const className = codeEl.className || '';
      const match = className.match(/language-([a-zA-Z0-9_-]+)/);
      if (match) {
        lang = match[1].toLowerCase();
      } else {
        const rawCode = codeEl.innerText.trim();
        if (rawCode.startsWith('<')) lang = 'html';
        else if (rawCode.startsWith('{') || rawCode.startsWith('[')) lang = 'json';
        else if (rawCode.includes('ma.') || rawCode.includes('function') || rawCode.includes('const ') || rawCode.includes('Page(')) lang = 'js';
      }

      // Check if code block is .maml (only .maml gets the Run button)
      const isMaml = (lang === 'html' || lang === 'xml' || lang === 'maml');

      // Format display names
      let badgeLang = lang.toUpperCase();
      let badgeFile = 'snippet';
      if (isMaml) {
        badgeLang = 'MAML';
        badgeFile = 'index.maml';
      } else if (lang === 'js' || lang === 'javascript') {
        badgeLang = 'JS';
        badgeFile = 'index.js';
      } else if (lang === 'json') {
        badgeLang = 'JSON';
        badgeFile = 'index.json';
      } else if (lang === 'css' || lang === 'wxss' || lang === 'mass') {
        badgeLang = 'MASS';
        badgeFile = 'index.mass';
      }

      // Create toolbar wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'macle-code-wrapper';

      const toolbar = document.createElement('div');
      toolbar.className = 'macle-code-toolbar';

      // Toolbar Left
      const toolbarLeft = document.createElement('div');
      toolbarLeft.className = 'macle-toolbar-left';
      toolbarLeft.innerHTML = `
        <span class="macle-lang-badge">${badgeLang}</span>
        <span class="macle-file-badge">${badgeFile}</span>
      `;

      // Toolbar Right (Copy, and Run for .maml only)
      const toolbarRight = document.createElement('div');
      toolbarRight.className = 'macle-toolbar-right';

      // Copy Button (present on all code blocks)
      const copyBtn = document.createElement('button');
      copyBtn.className = 'macle-btn macle-btn-copy';
      copyBtn.title = 'Copy code snippet';
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <span>Copy</span>
      `;
      copyBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const codeText = codeEl.innerText;
        navigator.clipboard.writeText(codeText).then(function() {
          copyBtn.classList.add('copied');
          copyBtn.querySelector('span').textContent = 'Copied! ✓';
          setTimeout(function() {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').textContent = 'Copy';
          }, 1800);
        });
      });
      toolbarRight.appendChild(copyBtn);

      // Run in Simulator Button: ONLY for .maml code examples!
      if (isMaml) {
        const runBtn = document.createElement('button');
        runBtn.className = 'macle-btn macle-btn-run';
        runBtn.title = 'Run MAML example in Macle Web Simulator with Full Code';
        runBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <span>Run</span>
        `;
        runBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          handleRunCode(codeEl.innerText, lang, pre);
        });
        toolbarRight.appendChild(runBtn);
      }

      toolbar.appendChild(toolbarLeft);
      toolbar.appendChild(toolbarRight);

      // Insert wrapper into DOM
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(toolbar);
      wrapper.appendChild(pre);
    });
  }

  // 3. Find Contextual Heading
  function getClosestHeading(element) {
    let curr = element;
    while (curr && curr !== document.body) {
      let prev = curr.previousElementSibling;
      while (prev) {
        if (/^H[1-6]$/i.test(prev.tagName)) {
          return prev.innerText.replace(/^[#\s]+/, '').trim();
        }
        prev = prev.previousElementSibling;
      }
      curr = curr.parentElement;
    }
    const docTitle = document.querySelector('h1, h2');
    return docTitle ? docTitle.innerText.trim() : 'Macle Code Example';
  }

  // 4. Synthesize Complete Runnable MiniProgram Code
  function synthesizeFullExample(rawCode, lang, title) {
    const trimmed = rawCode.trim();

    // 1. Detect used MAUI components
    const usingComponents = {};
    const mauiRegex = /<maui-([a-z0-9-]+)/g;
    let match;
    while ((match = mauiRegex.exec(trimmed)) !== null) {
      const compName = 'maui-' + match[1];
      if (MAUI_COMPONENT_MAP[compName]) {
        usingComponents[compName] = MAUI_COMPONENT_MAP[compName];
      }
    }

    const hasMaui = Object.keys(usingComponents).length > 0;
    const isJsApi = trimmed.startsWith('ma.') || trimmed.includes('ma.') || lang === 'js';

    let mamlCode = '';
    let jsCode = '';
    let jsonCode = '';
    let massCode = '';

    if (!isJsApi) {
      // --- MAML / UI Component Example ---
      mamlCode = `<!-- pages/demo/index.maml -->
<view class="container">
  <view class="demo-card">
    <view class="demo-card__header">
      <text class="demo-card__title">${escapeHtml(title)}</text>
      <text class="demo-card__desc">Macle MiniProgram Live Example</text>
    </view>
    <view class="demo-card__body">
${indent(trimmed, 6)}
    </view>
  </view>
</view>`;

      jsCode = `// pages/demo/index.js
Page({
  data: {
    title: "${escapeJs(title)}",
    checked: true,
    count: 0,
    currentTab: 0,
    inputValue: "",
    stepperValue: 1,
    sliderValue: 50
  },

  onLoad(options) {
    console.log("[Macle Demo] '${escapeJs(title)}' page initialized");
  },

  // Interactive event handlers
  handleClick(e) {
    const count = this.data.count + 1;
    this.setData({ count });
    ma.showToast({
      title: "Clicked (" + count + ")",
      icon: "success",
      duration: 1500
    });
  },

  handleChange(e) {
    const checked = e.detail !== undefined ? e.detail : !this.data.checked;
    this.setData({ checked });
    ma.showToast({
      title: "State: " + (checked ? "ON" : "OFF"),
      icon: "none"
    });
  },

  onInput(e) {
    this.setData({ inputValue: e.detail.value || "" });
  }
});`;

      const jsonObj = {
        navigationBarTitleText: title.split(' ')[0] || "Macle Demo",
        navigationBarBackgroundColor: "#07c160",
        navigationBarTextStyle: "white",
        usingComponents: usingComponents
      };
      jsonCode = JSON.stringify(jsonObj, null, 2);

      massCode = `/* pages/demo/index.mass */
.container {
  padding: 16px;
  background-color: #f7f8fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.demo-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 18px 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.demo-card__header {
  margin-bottom: 16px;
}

.demo-card__title {
  font-size: 17px;
  font-weight: 700;
  color: #323233;
  display: block;
}

.demo-card__desc {
  font-size: 13px;
  color: #969799;
  margin-top: 4px;
  display: block;
}

.demo-card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}`;
    } else {
      // --- JavaScript API Example ---
      const apiNameMatch = trimmed.match(/ma\.([a-zA-Z0-9_.]+)/);
      const apiName = apiNameMatch ? 'ma.' + apiNameMatch[1] : 'Macle API';

      mamlCode = `<!-- pages/demo/index.maml -->
<view class="container">
  <view class="demo-card">
    <view class="demo-card__header">
      <text class="demo-card__title">${escapeHtml(title)}</text>
      <text class="demo-card__desc">Interactive ${apiName} Runner</text>
    </view>
    <view class="demo-card__body">
      <button type="primary" bindtap="handleRunApi" class="api-btn">
        Execute ${apiName}
      </button>
    </view>
    <view class="log-card" wx:if="{{ resultLog }}">
      <text class="log-header">Execution Result:</text>
      <text class="log-content">{{ resultLog }}</text>
    </view>
  </view>
</view>`;

      jsCode = `// pages/demo/index.js
Page({
  data: {
    resultLog: "Ready to run. Tap the button to invoke ${apiName}."
  },

  onLoad() {
    console.log("[Macle API Demo] Ready for ${apiName}");
  },

  handleRunApi() {
    const self = this;
    this.setData({ resultLog: "Executing ${apiName}..." });

    try {
      // Documentation Code Snippet
${indent(trimmed, 6)}
    } catch (err) {
      console.error("[Execution Error]:", err);
      self.setData({ resultLog: "Error: " + err.message });
    }
  }
});`;

      jsonCode = JSON.stringify({
        navigationBarTitleText: apiName,
        navigationBarBackgroundColor: "#07c160",
        navigationBarTextStyle: "white"
      }, null, 2);

      massCode = `/* pages/demo/index.mass */
.container {
  padding: 16px;
  background-color: #f7f8fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.demo-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 18px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.demo-card__title {
  font-size: 17px;
  font-weight: 700;
  color: #323233;
}

.demo-card__desc {
  font-size: 13px;
  color: #969799;
  margin-top: 4px;
}

.api-btn {
  background: #07c160;
  color: #ffffff;
  border-radius: 8px;
  font-size: 15px;
  margin-top: 14px;
}

.log-card {
  margin-top: 18px;
  background: #0f172a;
  border-radius: 8px;
  padding: 12px;
}

.log-header {
  font-size: 11px;
  font-weight: 700;
  color: #38bdf8;
  text-transform: uppercase;
}

.log-content {
  font-size: 12px;
  font-family: monospace;
  color: #f1f5f9;
  margin-top: 6px;
  display: block;
  white-space: pre-wrap;
}`;
    }

    // Full package combined
    const packageCode = `// ==========================================
// Macle MiniProgram Complete Runnable Package
// Component/API: ${title}
// Generated by Macle OpenDoc Code Runner
// ==========================================

// --- File 1: pages/demo/index.maml ---
${mamlCode}

// --- File 2: pages/demo/index.js ---
${jsCode}

// --- File 3: pages/demo/index.json ---
${jsonCode}

// --- File 4: pages/demo/index.mass ---
${massCode}
`;

    return {
      package: packageCode,
      maml: mamlCode,
      js: jsCode,
      json: jsonCode,
      mass: massCode,
      hasMaui: hasMaui,
      isJsApi: isJsApi
    };
  }

  // 5. Handle Click on "▶ Run"
  function handleRunCode(rawCode, lang, preElement) {
    const title = getClosestHeading(preElement) || 'Macle Example';
    const files = synthesizeFullExample(rawCode, lang, title);

    currentExample = {
      title: title,
      rawCode: rawCode,
      lang: lang,
      files: files,
      activeTab: 'package'
    };

    openRunnerModal();
  }

  // 6. Build the Runner Modal DOM
  function createRunnerModal() {
    if (modalEl) return;

    modalEl = document.createElement('div');
    modalEl.className = 'macle-runner-overlay';
    modalEl.id = 'macle-runner-modal-root';

    modalEl.innerHTML = `
      <div class="macle-runner-modal">
        <!-- Header -->
        <div class="macle-runner-header">
          <div class="macle-header-title-box">
            <div class="macle-logo-badge">M</div>
            <div class="macle-header-title">
              <span id="macle-modal-title">Code Runner & Simulator</span>
            </div>
            <span class="macle-header-sub" id="macle-modal-sub">MiniProgram Preview</span>
          </div>

          <div class="macle-header-actions">
            <!-- View Mode Switcher -->
            <div class="macle-view-toggle">
              <button class="macle-view-btn active" data-view="split">Split</button>
              <button class="macle-view-btn" data-view="code">Code Only</button>
              <button class="macle-view-btn" data-view="sim">Simulator Only</button>
            </div>

            <!-- Close Button -->
            <button class="macle-close-btn" id="macle-close-modal" title="Close Runner (Esc)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="macle-runner-body">
          <!-- Left: Code Panel -->
          <div class="macle-code-panel">
            <div class="macle-tabs-bar">
              <div class="macle-tabs-list">
                <button class="macle-tab active" data-tab="package">
                  <span class="macle-tab-icon">📦</span> Full Package
                </button>
                <button class="macle-tab" data-tab="maml">
                  <span class="macle-tab-icon">📄</span> index.maml
                </button>
                <button class="macle-tab" data-tab="js">
                  <span class="macle-tab-icon">⚡</span> index.js
                </button>
                <button class="macle-tab" data-tab="json">
                  <span class="macle-tab-icon">⚙️</span> index.json
                </button>
                <button class="macle-tab" data-tab="mass">
                  <span class="macle-tab-icon">🎨</span> index.mass
                </button>
              </div>

              <div class="macle-tabs-actions">
                <button class="macle-panel-btn" id="macle-copy-tab-code">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span>Copy File</span>
                </button>
                <button class="macle-panel-btn apply-btn" id="macle-apply-btn" title="Re-render in simulator">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <span>Run</span>
                </button>
              </div>
            </div>

            <!-- Code Editor & Display -->
            <div class="macle-editor-area">
              <pre class="macle-code-display"><code id="macle-active-code"></code></pre>
            </div>
          </div>

          <!-- Right: Web Simulator Panel -->
          <div class="macle-sim-panel">
            <div class="macle-sim-topbar">
              <!-- Simulator Mode Selector -->
              <div class="macle-sim-modes">
                <button class="macle-sim-mode-btn active" data-sim="live">📱 Live Runner</button>
                <button class="macle-sim-mode-btn" data-sim="devsuite">🌐 DevSuite Simulator</button>
              </div>

              <div class="macle-sim-tools">
                <button class="macle-sim-tool-btn" id="macle-reload-sim" title="Restart Simulator">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                </button>
                <button class="macle-sim-tool-btn" id="macle-open-ext-sim" title="Open Standalone Simulator in New Tab">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </button>
              </div>
            </div>

            <!-- Device Stage -->
            <div class="macle-device-stage">
              <div class="macle-phone-frame" id="macle-phone-frame">
                <!-- Notch / Island -->
                <div class="macle-phone-notch">
                  <div class="macle-notch-lens"></div>
                </div>

                <!-- Screen -->
                <div class="macle-phone-screen">
                  <!-- iOS Status Bar -->
                  <div class="macle-phone-statusbar">
                    <span id="macle-live-clock">12:00</span>
                    <div class="macle-status-icons">
                      <span>5G</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/></svg>
                      <svg width="18" height="10" viewBox="0 0 24 14" fill="currentColor"><rect x="1" y="1" width="20" height="12" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><rect x="3" y="3" width="13" height="8" rx="1.5"/></svg>
                    </div>
                  </div>

                  <!-- MiniProgram Navbar -->
                  <div class="macle-phone-navbar">
                    <div class="macle-nav-back" id="macle-nav-back" title="Back">‹</div>
                    <div class="macle-nav-title" id="macle-nav-title">Demo</div>
                    <div class="macle-nav-capsule">
                      <span class="macle-capsule-dots">•••</span>
                      <span class="macle-capsule-circle"></span>
                    </div>
                  </div>

                  <!-- MiniProgram Viewport (Live Mode) -->
                  <div class="macle-phone-viewport" id="macle-phone-viewport">
                    <!-- Dynamic live content inserted here -->
                  </div>

                  <!-- DevSuite Iframe (DevSuite Mode) -->
                  <iframe class="macle-sim-iframe" id="macle-devsuite-iframe" src="about:blank"></iframe>

                  <!-- Live Toast Overlay -->
                  <div class="macle-sim-toast" id="macle-sim-toast">
                    <span class="macle-toast-icon">✓</span>
                    <span id="macle-toast-text">Success</span>
                  </div>

                  <!-- Live Modal Dialog Overlay -->
                  <div class="macle-sim-modal-overlay" id="macle-sim-modal-overlay">
                    <div class="macle-sim-modal-box">
                      <div class="macle-sim-modal-title" id="macle-modal-dialog-title">Alert</div>
                      <div class="macle-sim-modal-content" id="macle-modal-dialog-content">Message</div>
                      <div class="macle-sim-modal-footer">
                        <button class="macle-sim-modal-btn cancel" id="macle-modal-dialog-cancel">Cancel</button>
                        <button class="macle-sim-modal-btn confirm" id="macle-modal-dialog-confirm">Confirm</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- DevTools Console Drawer at Bottom -->
            <div class="macle-sim-console">
              <div class="macle-console-header">
                <span>SIMULATOR CONSOLE</span>
                <span id="macle-clear-console" style="cursor: pointer; text-decoration: underline;">Clear</span>
              </div>
              <div class="macle-console-list" id="macle-console-list"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalEl);

    // Setup Event Listeners
    setupModalListeners();
    startClock();
  }

  // 7. Event Listeners for the Modal
  function setupModalListeners() {
    // Close button
    document.getElementById('macle-close-modal').addEventListener('click', closeRunnerModal);

    // Overlay click outside to close
    modalEl.addEventListener('click', function(e) {
      if (e.target === modalEl) closeRunnerModal();
    });

    // Escape key
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalEl.classList.contains('active')) {
        closeRunnerModal();
      }
    });

    // View Mode Switcher
    const viewButtons = modalEl.querySelectorAll('.macle-view-btn');
    viewButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.view;
        activeViewMode = view;

        const modalBox = modalEl.querySelector('.macle-runner-modal');
        modalBox.classList.remove('view-code-only', 'view-sim-only');
        if (view === 'code') modalBox.classList.add('view-code-only');
        if (view === 'sim') modalBox.classList.add('view-sim-only');
      });
    });

    // Code Tab Switcher
    const tabs = modalEl.querySelectorAll('.macle-tab');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentExample.activeTab = tab.dataset.tab;
        renderActiveCodeTab();
      });
    });

    // Copy Current Tab Code
    document.getElementById('macle-copy-tab-code').addEventListener('click', function() {
      const tab = currentExample.activeTab || 'package';
      const textToCopy = currentExample.files[tab] || '';
      navigator.clipboard.writeText(textToCopy).then(function() {
        const btn = document.getElementById('macle-copy-tab-code');
        const span = btn.querySelector('span');
        const orig = span.textContent;
        span.textContent = 'Copied! ✓';
        setTimeout(() => span.textContent = orig, 1800);
      });
    });

    // Apply / Re-run
    document.getElementById('macle-apply-btn').addEventListener('click', function() {
      renderLiveSimulator();
      addLog('info', 'Code re-executed in Web Simulator');
    });

    // Simulator Mode Switcher (Live vs DevSuite)
    const simModeBtns = modalEl.querySelectorAll('.macle-sim-mode-btn');
    simModeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        simModeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSimMode = btn.dataset.sim;
        switchSimulatorMode(activeSimMode);
      });
    });

    // Reload Simulator
    document.getElementById('macle-reload-sim').addEventListener('click', function() {
      if (activeSimMode === 'devsuite') {
        const iframe = document.getElementById('macle-devsuite-iframe');
        iframe.src = iframe.src;
      } else {
        renderLiveSimulator();
      }
      addLog('info', 'Simulator reloaded');
    });

    // Open External Standalone Simulator
    document.getElementById('macle-open-ext-sim').addEventListener('click', function() {
      const port = 30003;
      const targetUrl = `http://localhost:${port}/__web/index.html?project=dist&port=${port}&page=pages/detail/index`;
      window.open(targetUrl, '_blank');
      addLog('info', `Opened standalone simulator at: ${targetUrl}`);
    });

    // Clear Console
    document.getElementById('macle-clear-console').addEventListener('click', function() {
      consoleLogs.length = 0;
      renderConsoleLogs();
    });
  }

  // 8. Open the Modal & populate content
  function openRunnerModal() {
    createRunnerModal();

    // Populate Headers
    document.getElementById('macle-modal-title').textContent = currentExample.title;
    document.getElementById('macle-modal-sub').textContent = currentExample.files.hasMaui
      ? 'MAUI Component Preview'
      : (currentExample.files.isJsApi ? 'Macle API Playground' : 'MiniProgram Component');
    document.getElementById('macle-nav-title').textContent = currentExample.title.split(' ')[0] || 'Demo';

    // Set first tab
    const tabs = modalEl.querySelectorAll('.macle-tab');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === currentExample.activeTab));

    // Reset to live simulator mode by default
    activeSimMode = 'live';
    const simModeBtns = modalEl.querySelectorAll('.macle-sim-mode-btn');
    simModeBtns.forEach(b => b.classList.toggle('active', b.dataset.sim === 'live'));
    const viewport = document.getElementById('macle-phone-viewport');
    const iframe = document.getElementById('macle-devsuite-iframe');
    if (iframe) iframe.style.display = 'none';
    if (viewport) viewport.style.display = 'block';

    // Render code in active tab
    renderActiveCodeTab();

    // Render Live simulator
    renderLiveSimulator();

    // Show modal
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    addLog('info', `Loaded '${currentExample.title}' in Web Simulator`);
  }

  function closeRunnerModal() {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 9. Render code with syntax highlighting
  function renderActiveCodeTab() {
    const tab = currentExample.activeTab || 'package';
    const code = currentExample.files[tab] || '';
    const codeEl = document.getElementById('macle-active-code');
    codeEl.innerHTML = highlightCode(code, tab);
  }

  function highlightCode(code, type) {
    if (!code) return '';
    let escaped = escapeHtml(code);

    if (type === 'maml' || type === 'package') {
      // Tags
      escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9_-]+)/g, '<span class="hl-tag">$1</span>');
      // Attributes
      escaped = escaped.replace(/([a-zA-Z0-9_:-]+)=(&quot;.*?&quot;)/g, '<span class="hl-attr">$1</span>=<span class="hl-val">$2</span>');
      // Comments
      escaped = escaped.replace(/(&lt;!--.*?--&gt;)/g, '<span class="hl-comment">$1</span>');
    }

    if (type === 'js' || type === 'package') {
      // Keywords
      escaped = escaped.replace(/\b(const|let|var|function|return|if|else|this|new|Page|Component|ma)\b/g, '<span class="hl-kw">$1</span>');
      // Strings
      escaped = escaped.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="hl-str">$1</span>');
      // Comments
      escaped = escaped.replace(/(\/\/[^\n]*)/g, '<span class="hl-comment">$1</span>');
    }

    if (type === 'json') {
      // Keys
      escaped = escaped.replace(/(&quot;[a-zA-Z0-9_-]+&quot;):/g, '<span class="hl-key">$1</span>:');
      // Strings
      escaped = escaped.replace(/: (&quot;.*?&quot;)/g, ': <span class="hl-str">$1</span>');
      // Numbers & Booleans
      escaped = escaped.replace(/\b(true|false|null|[0-9]+)\b/g, '<span class="hl-num">$1</span>');
    }

    return escaped;
  }

  // 10. Switch between Live Runner and DevSuite Simulator
  function switchSimulatorMode(mode) {
    const viewport = document.getElementById('macle-phone-viewport');
    const iframe = document.getElementById('macle-devsuite-iframe');

    if (mode === 'devsuite') {
      viewport.style.display = 'none';
      iframe.style.display = 'block';
      const port = 30003;
      // Use proxy route /_simulator/
      const url = `/_simulator/__web/index.html?project=dist&port=${port}&page=pages/detail/index`;
      if (iframe.src !== url && !iframe.src.includes('pages/detail/index')) {
        iframe.src = url;
        addLog('info', 'DevSuite Web Simulator attached (port 30003)');
      }
    } else {
      iframe.style.display = 'none';
      viewport.style.display = 'block';
      renderLiveSimulator();
    }
  }

  // 11. Render Live Interactive Simulator
  function renderLiveSimulator() {
    const viewport = document.getElementById('macle-phone-viewport');
    viewport.innerHTML = '';

    const isApi = currentExample.files.isJsApi;

    if (!isApi) {
      // UI Component Showcase
      const card = document.createElement('div');
      card.className = 'sim-page-card';

      const titleEl = document.createElement('div');
      titleEl.className = 'sim-page-title';
      titleEl.textContent = currentExample.title;

      const descEl = document.createElement('div');
      descEl.className = 'sim-page-desc';
      descEl.textContent = 'Macle MiniProgram interactive component preview';

      const contentBox = document.createElement('div');
      contentBox.className = 'sim-content-box';

      // Parse the raw code and transform into interactive elements
      contentBox.innerHTML = transformMamlToInteractiveHtml(currentExample.rawCode);

      card.appendChild(titleEl);
      card.appendChild(descEl);
      card.appendChild(contentBox);
      viewport.appendChild(card);

      // Attach interaction listeners to interactive elements
      attachLiveInteractivity(contentBox);
    } else {
      // JavaScript API Showcase
      const card = document.createElement('div');
      card.className = 'sim-page-card';

      const apiMatch = currentExample.rawCode.match(/ma\.([a-zA-Z0-9_.]+)/);
      const apiName = apiMatch ? 'ma.' + apiMatch[1] : 'Macle API';

      card.innerHTML = `
        <div class="sim-page-title">${escapeHtml(currentExample.title)}</div>
        <div class="sim-page-desc">Interactive execution of <code>${escapeHtml(apiName)}</code> inside the MiniProgram environment.</div>
        <div class="sim-content-box" style="margin-top: 14px;">
          <button class="maui-button maui-button--primary maui-button--block" id="macle-exec-api-btn">
            ▶ Run ${escapeHtml(apiName)}
          </button>
          <div style="background: #0f172a; border-radius: 8px; padding: 12px; margin-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #38bdf8; text-transform: uppercase;">Console / Return Value:</div>
            <div id="macle-api-output" style="font-size: 12px; font-family: monospace; color: #f1f5f9; margin-top: 6px; white-space: pre-wrap;">Ready to invoke ${apiName}...</div>
          </div>
        </div>
      `;

      viewport.appendChild(card);

      // Attach API execution button listener
      document.getElementById('macle-exec-api-btn').addEventListener('click', function() {
        executeSimulatedApi(currentExample.rawCode);
      });
    }
  }

  // 12. Transform MAML snippet into clean HTML with MAUI classes
  function transformMamlToInteractiveHtml(snippet) {
    let html = snippet;

    // Convert <maui-button ...>
    html = html.replace(/<maui-button([^>]*)>(.*?)<\/maui-button>/gs, function(match, attrs, content) {
      let classes = ['maui-button'];
      const typeMatch = attrs.match(/type=["']?([a-zA-Z0-9_-]+)["']?/);
      classes.push('maui-button--' + (typeMatch ? typeMatch[1] : 'default'));

      if (attrs.includes('plain')) classes.push('maui-button--plain');
      if (attrs.includes('round')) classes.push('maui-button--round');
      if (attrs.includes('square')) classes.push('maui-button--square');
      if (attrs.includes('block')) classes.push('maui-button--block');
      if (attrs.includes('disabled')) classes.push('maui-button--disabled');

      const sizeMatch = attrs.match(/size=["']?([a-zA-Z0-9_-]+)["']?/);
      if (sizeMatch) classes.push('maui-button--' + sizeMatch[1]);

      let customStyle = '';
      const colorMatch = attrs.match(/color=["']?([^"'>]+)["']?/);
      if (colorMatch) {
        customStyle = `style="background: ${colorMatch[1]}; border-color: ${colorMatch[1]}; color: #fff;"`;
      }

      return `<button class="${classes.join(' ')}" ${customStyle} data-macle-btn="true">${content.trim() || 'Button'}</button>`;
    });

    // Convert self-closing <maui-button ... />
    html = html.replace(/<maui-button([^>]*?)\/>/gs, function(match, attrs) {
      let classes = ['maui-button'];
      const typeMatch = attrs.match(/type=["']?([a-zA-Z0-9_-]+)["']?/);
      classes.push('maui-button--' + (typeMatch ? typeMatch[1] : 'default'));
      if (attrs.includes('loading')) classes.push('maui-button--loading');
      return `<button class="${classes.join(' ')}" data-macle-btn="true">Loading...</button>`;
    });

    // Convert <maui-cell-group>
    html = html.replace(/<maui-cell-group[^>]*>/g, '<div class="maui-cell-group">');
    html = html.replace(/<\/maui-cell-group>/g, '</div>');

    // Convert <maui-cell ... />
    html = html.replace(/<maui-cell([^>]*?)\/>/g, function(match, attrs) {
      const titleMatch = attrs.match(/title=["']?([^"'>]+)["']?/);
      const valMatch = attrs.match(/value=["']?([^"'>]+)["']?/);
      const title = titleMatch ? titleMatch[1] : 'Cell Title';
      const val = valMatch ? valMatch[1] : '';
      return `<div class="maui-cell" data-macle-cell="true">
        <span class="maui-cell__title">${title}</span>
        <span class="maui-cell__value">${val}</span>
      </div>`;
    });

    // Convert <maui-tag ...>
    html = html.replace(/<maui-tag([^>]*)>(.*?)<\/maui-tag>/gs, function(match, attrs, content) {
      let classes = ['maui-tag'];
      const typeMatch = attrs.match(/type=["']?([a-zA-Z0-9_-]+)["']?/);
      classes.push('maui-tag--' + (typeMatch ? typeMatch[1] : 'primary'));
      if (attrs.includes('plain')) classes.push('maui-tag--plain');
      return `<span class="${classes.join(' ')}">${content.trim()}</span>`;
    });

    // Convert <maui-switch ... />
    html = html.replace(/<maui-switch([^>]*?)\/>/g, function(match, attrs) {
      const isChecked = attrs.includes('checked');
      return `<div class="maui-switch ${isChecked ? 'checked' : ''}" data-macle-switch="true">
        <div class="maui-switch__node"></div>
      </div>`;
    });

    // Convert <maui-divider ... />
    html = html.replace(/<maui-divider([^>]*?)\/>/g, '<div class="maui-divider"></div>');

    // Convert standard <button ...>
    html = html.replace(/<button([^>]*)>(.*?)<\/button>/gs, function(match, attrs, content) {
      let type = 'default';
      if (attrs.includes('primary')) type = 'primary';
      else if (attrs.includes('warn')) type = 'danger';
      return `<button class="maui-button maui-button--${type}" data-macle-btn="true">${content.trim() || 'Button'}</button>`;
    });

    // Convert <view ...> to <div> and <text> to <span>
    html = html.replace(/<view([^>]*)>/g, '<div$1>').replace(/<\/view>/g, '</div>');
    html = html.replace(/<text([^>]*)>/g, '<span$1>').replace(/<\/text>/g, '</span>');

    return html;
  }

  // 13. Attach Interactive behavior to simulator DOM elements
  function attachLiveInteractivity(container) {
    // Buttons
    const buttons = container.querySelectorAll('[data-macle-btn="true"]');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const text = btn.innerText.trim();
        simShowToast(`Button '${text}' clicked!`, 'success');
        addLog('info', `[Event] Button '${text}' tapped`);
      });
    });

    // Switches
    const switches = container.querySelectorAll('[data-macle-switch="true"]');
    switches.forEach(function(sw) {
      sw.addEventListener('click', function() {
        sw.classList.toggle('checked');
        const isChecked = sw.classList.contains('checked');
        simShowToast(`Switch is now: ${isChecked ? 'ON' : 'OFF'}`);
        addLog('info', `[Event] Switch changed: ${isChecked}`);
      });
    });

    // Cells
    const cells = container.querySelectorAll('[data-macle-cell="true"]');
    cells.forEach(function(cell) {
      cell.addEventListener('click', function() {
        const title = cell.querySelector('.maui-cell__title')?.innerText || 'Cell';
        simShowToast(`Tapped: ${title}`);
        addLog('info', `[Event] Cell '${title}' clicked`);
      });
    });
  }

  // 14. Simulated Macle API Runtime
  const simMacleRuntime = {
    showToast(opts) {
      const title = opts.title || 'Toast';
      const icon = opts.icon || 'success';
      const duration = opts.duration || 1800;
      simShowToast(title, icon, duration);
      addLog('info', `[ma.showToast]: "${title}" (icon: ${icon})`);
      if (typeof opts.success === 'function') opts.success({ errMsg: 'showToast:ok' });
    },

    showModal(opts) {
      const title = opts.title || 'Alert';
      const content = opts.content || '';
      simShowModal(title, content, function(confirmed) {
        addLog('info', `[ma.showModal]: User selected ${confirmed ? 'Confirm' : 'Cancel'}`);
        if (typeof opts.success === 'function') {
          opts.success({ confirm: confirmed, cancel: !confirmed, errMsg: 'showModal:ok' });
        }
      });
    },

    showLoading(opts) {
      simShowToast(opts.title || 'Loading...', 'loading', 5000);
      addLog('info', `[ma.showLoading]: "${opts.title}"`);
    },

    hideLoading() {
      const toastEl = document.getElementById('macle-sim-toast');
      toastEl.classList.remove('show');
    },

    getSystemInfo(opts) {
      const info = {
        brand: 'Apple',
        model: 'iPhone 14 Pro',
        pixelRatio: 3,
        screenWidth: 393,
        screenHeight: 852,
        windowWidth: 375,
        windowHeight: 640,
        language: 'en_US',
        version: '25.9.0',
        system: 'iOS 17.4',
        platform: 'devtools',
        errMsg: 'getSystemInfo:ok'
      };
      addLog('info', `[ma.getSystemInfo]: Model: ${info.model}, System: ${info.system}`);
      if (typeof opts.success === 'function') opts.success(info);
      return info;
    },

    getSystemInfoSync() {
      return this.getSystemInfo({});
    },

    vibrateShort() {
      const frame = document.getElementById('macle-phone-frame');
      frame.classList.add('vibrate');
      setTimeout(() => frame.classList.remove('vibrate'), 200);
      addLog('info', '[ma.vibrateShort]: Haptic vibration triggered');
    },

    setStorage(opts) {
      try {
        localStorage.setItem('macle_sim_' + opts.key, JSON.stringify(opts.data));
        addLog('info', `[ma.setStorage]: Saved key "${opts.key}"`);
        if (typeof opts.success === 'function') opts.success({ errMsg: 'setStorage:ok' });
      } catch (e) {
        if (typeof opts.fail === 'function') opts.fail({ errMsg: e.message });
      }
    },

    getStorage(opts) {
      try {
        const raw = localStorage.getItem('macle_sim_' + opts.key);
        const data = raw ? JSON.parse(raw) : null;
        addLog('info', `[ma.getStorage]: Retrieved key "${opts.key}" -> ${raw}`);
        if (typeof opts.success === 'function') opts.success({ data: data, errMsg: 'getStorage:ok' });
      } catch (e) {
        if (typeof opts.fail === 'function') opts.fail({ errMsg: e.message });
      }
    },

    setClipboardData(opts) {
      navigator.clipboard.writeText(opts.data || '').then(() => {
        simShowToast('Content copied to clipboard', 'success');
        addLog('info', `[ma.setClipboardData]: Copied "${opts.data}"`);
        if (typeof opts.success === 'function') opts.success({ errMsg: 'setClipboardData:ok' });
      });
    },

    navigateTo(opts) {
      simShowToast(`Navigating to: ${opts.url}`, 'none');
      addLog('info', `[ma.navigateTo]: Target route "${opts.url}"`);
      if (typeof opts.success === 'function') opts.success({ errMsg: 'navigateTo:ok' });
    },

    redirectTo(opts) {
      simShowToast(`Redirecting to: ${opts.url}`, 'none');
      addLog('info', `[ma.redirectTo]: Target route "${opts.url}"`);
      if (typeof opts.success === 'function') opts.success({ errMsg: 'redirectTo:ok' });
    },

    navigateBack(opts) {
      simShowToast('Navigated back', 'none');
      addLog('info', '[ma.navigateBack]: Returned to previous page');
      if (typeof opts.success === 'function') opts.success({ errMsg: 'navigateBack:ok' });
    }
  };

  // 15. Execute API Code inside Simulator
  function executeSimulatedApi(snippet) {
    const outputEl = document.getElementById('macle-api-output');
    outputEl.textContent = 'Executing...';

    // Intercept ma and console
    const originalMa = window.ma;
    window.ma = simMacleRuntime;

    try {
      const customConsole = {
        log: function(...args) {
          const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
          outputEl.textContent = str;
          addLog('info', '[Console Log]: ' + str);
        },
        warn: function(...args) {
          const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
          outputEl.textContent = 'Warn: ' + str;
          addLog('warn', '[Console Warn]: ' + str);
        },
        error: function(...args) {
          const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
          outputEl.textContent = 'Error: ' + str;
          addLog('error', '[Console Error]: ' + str);
        }
      };

      const runnerFn = new Function('ma', 'console', `
        ${snippet}
      `);

      runnerFn(simMacleRuntime, customConsole);
      setTimeout(function() {
        if (outputEl.textContent === 'Executing...') {
          outputEl.textContent = 'API executed successfully (see simulator notification & logs).';
        }
      }, 350);
    } catch (err) {
      outputEl.textContent = 'Runtime error: ' + err.message;
      addLog('error', `Execution error: ${err.message}`);
    } finally {
      window.ma = originalMa;
    }
  }

  // 16. Show Toast on simulated device
  function simShowToast(text, icon = 'success', duration = 1800) {
    const toastEl = document.getElementById('macle-sim-toast');
    const toastText = document.getElementById('macle-toast-text');
    const toastIcon = toastEl.querySelector('.macle-toast-icon');

    toastText.textContent = text;
    if (icon === 'success') toastIcon.textContent = '✓';
    else if (icon === 'loading') toastIcon.textContent = '⏳';
    else toastIcon.textContent = 'ℹ️';

    toastEl.classList.add('show');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(function() {
      toastEl.classList.remove('show');
    }, duration);
  }

  // 17. Show Modal Dialog on simulated device
  function simShowModal(title, content, callback) {
    const overlay = document.getElementById('macle-sim-modal-overlay');
    document.getElementById('macle-modal-dialog-title').textContent = title;
    document.getElementById('macle-modal-dialog-content').textContent = content;

    const cancelBtn = document.getElementById('macle-modal-dialog-cancel');
    const confirmBtn = document.getElementById('macle-modal-dialog-confirm');

    function cleanup() {
      overlay.classList.remove('show');
      cancelBtn.onclick = null;
      confirmBtn.onclick = null;
    }

    cancelBtn.onclick = function() {
      cleanup();
      if (callback) callback(false);
    };

    confirmBtn.onclick = function() {
      cleanup();
      if (callback) callback(true);
    };

    overlay.classList.add('show');
  }

  // 18. Logger
  function addLog(level, msg) {
    const time = new Date().toLocaleTimeString();
    consoleLogs.push({ level, msg, time });
    if (consoleLogs.length > 80) consoleLogs.shift();
    renderConsoleLogs();
  }

  function renderConsoleLogs() {
    const list = document.getElementById('macle-console-list');
    if (!list) return;
    list.innerHTML = '';
    consoleLogs.forEach(function(l) {
      const item = document.createElement('div');
      item.className = 'macle-log-item ' + l.level;
      item.innerHTML = `<span class="macle-log-time">[${l.time}]</span> <span>${escapeHtml(l.msg)}</span>`;
      list.appendChild(item);
    });
    list.scrollTop = list.scrollHeight;
  }

  // 19. Utilities
  function startClock() {
    function update() {
      const clockEl = document.getElementById('macle-live-clock');
      if (clockEl) {
        const d = new Date();
        const hrs = String(d.getHours()).padStart(2, '0');
        const min = String(d.getMinutes()).padStart(2, '0');
        clockEl.textContent = `${hrs}:${min}`;
      }
    }
    update();
    setInterval(update, 10000);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeJs(str) {
    return String(str || '').replace(/"/g, '\\"').replace(/\n/g, ' ');
  }

  function indent(text, spaces) {
    const pad = ' '.repeat(spaces);
    return text.split('\n').map(l => pad + l).join('\n');
  }

  // 20. Auto-run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDocRunner);
  } else {
    initDocRunner();
  }
})();
