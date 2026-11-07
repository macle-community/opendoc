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
  let activeMiniApp = 'native'; // 'native' (miniapp) or 'taro' (miniapp-taro)
  let currentDevSuitePage = 'pages/index/index';
  let simulatorInfo = {
    online: false,
    port: 30002,
    projectName: 'miniapp',
    native: { online: false, port: 30002, projectName: 'miniapp' },
    taro: { online: false, port: 30003, projectName: 'dist' }
  };
  const consoleLogs = [];

  // Check DevSuite simulator health via proxy
  async function checkDevSuiteSimulatorHealth() {
    try {
      const res = await fetch('/api/simulator-info');
      if (res.ok) {
        simulatorInfo = await res.json();
        return simulatorInfo;
      }
    } catch (e) {}

    return {
      online: false,
      port: 30002,
      projectName: 'miniapp',
      native: { online: false, port: 30002, projectName: 'miniapp' },
      taro: { online: false, port: 30003, projectName: 'dist' }
    };
  }

  function getActiveSimulatorProject() {
    if (activeMiniApp === 'taro') {
      return (simulatorInfo.taro && simulatorInfo.taro.projectName) || 'dist';
    }
    return (simulatorInfo.native && simulatorInfo.native.projectName) || 'miniapp';
  }

  function getActiveSimulatorPort() {
    if (activeMiniApp === 'taro') {
      return (simulatorInfo.taro && simulatorInfo.taro.port) || 30003;
    }
    return (simulatorInfo.native && simulatorInfo.native.port) || 30002;
  }

  async function updateDevSuiteStatusPill() {
    const pill = document.getElementById('macle-sim-status-pill');
    if (!pill) return false;
    const health = await checkDevSuiteSimulatorHealth();
    const isTaro = activeMiniApp === 'taro';
    const isCurrentOnline = isTaro ? health.taro?.online : health.native?.online;

    if (isCurrentOnline) {
      pill.className = 'macle-sim-status-pill online';
      const proj = getActiveSimulatorProject();
      const port = getActiveSimulatorPort();
      pill.textContent = `● ${isTaro ? '⚛️ Taro' : '📱 Native'} (${port})`;
      pill.title = `${isTaro ? 'Taro React MiniApp' : 'Native MiniApp'} connected on port ${port} (${proj})`;
    } else if (health.online) {
      pill.className = 'macle-sim-status-pill online';
      pill.textContent = `● Simulator Online`;
      pill.title = 'DevSuite simulator is online';
    } else {
      pill.className = 'macle-sim-status-pill offline';
      pill.textContent = '○ Simulator Offline';
      pill.title = 'DevSuite simulator process is offline';
    }
    return isCurrentOnline || health.online;
  }

  function switchActiveMiniApp(appFramework) {
    activeMiniApp = appFramework === 'taro' ? 'taro' : 'native';
    const toggleBtns = modalEl?.querySelectorAll('.macle-miniapp-btn');
    toggleBtns?.forEach(b => b.classList.toggle('active', b.dataset.app === activeMiniApp));

    updateDevSuiteStatusPill();

    if (activeSimMode === 'devsuite') {
      const iframe = document.getElementById('macle-devsuite-iframe');
      if (iframe) {
        const proj = getActiveSimulatorProject();
        const page = currentDevSuitePage || 'pages/button/index';
        iframe.src = `/${proj}/root/debug/simulator/?entryPagePath=${encodeURIComponent(page)}`;
        addLog('info', `Switched simulator to ${activeMiniApp === 'taro' ? '⚛️ Taro MiniApp' : '📱 Native MiniApp'} (${proj})`);
      }
    }
  }

  // Component to Miniapp Page mapping
  function detectDocPage() {
    const hash = (window.location.hash || '').toLowerCase();
    const raw = (currentExample.rawCode || '').toLowerCase();
    const title = (currentExample.title || '').toLowerCase();

    if (hash.includes('button') || raw.includes('maui-button') || title.includes('button')) return 'pages/button/index';
    if (hash.includes('layout') || raw.includes('maui-row') || raw.includes('maui-col') || title.includes('layout') || title.includes('col') || title.includes('row')) return 'pages/layout/index';
    if (hash.includes('cell') || raw.includes('maui-cell') || title.includes('cell')) return 'pages/cell/index';
    if (hash.includes('checkbox') || raw.includes('maui-checkbox') || title.includes('checkbox')) return 'pages/checkbox/index';
    if (hash.includes('radio') || raw.includes('maui-radio') || title.includes('radio')) return 'pages/radio/index';
    if (hash.includes('switch') || raw.includes('maui-switch') || title.includes('switch')) return 'pages/switch/index';
    if (hash.includes('slider') || raw.includes('maui-slider') || title.includes('slider')) return 'pages/slider/index';
    if (hash.includes('stepper') || raw.includes('maui-stepper') || title.includes('stepper')) return 'pages/stepper/index';
    if (hash.includes('field') || raw.includes('maui-field') || title.includes('field') || title.includes('input')) return 'pages/field/index';
    if (hash.includes('tag') || raw.includes('maui-tag') || title.includes('tag')) return 'pages/tag/index';
    if (hash.includes('loading') || raw.includes('maui-loading') || title.includes('loading')) return 'pages/loading/index';
    if (hash.includes('progress') || raw.includes('maui-progress') || title.includes('progress')) return 'pages/progress/index';
    if (hash.includes('divider') || raw.includes('maui-divider') || title.includes('divider')) return 'pages/divider/index';
    if (hash.includes('empty') || raw.includes('maui-empty') || title.includes('empty')) return 'pages/empty/index';
    if (hash.includes('steps') || raw.includes('maui-steps') || title.includes('steps')) return 'pages/steps/index';
    if (hash.includes('dialog') || raw.includes('maui-dialog') || title.includes('dialog')) return 'pages/dialog/index';
    if (hash.includes('toast') || raw.includes('maui-toast') || title.includes('toast')) return 'pages/toast/index';

    if (hash.includes('view') && !hash.includes('scroll-view') && !hash.includes('web-view')) return 'pages/view/index';
    if (hash.includes('text') || raw.includes('<text')) return 'pages/text/index';
    if (hash.includes('swiper') || raw.includes('<swiper')) return 'pages/swiper/index';
    if (hash.includes('scroll-view') || raw.includes('<scroll-view')) return 'pages/scroll-view/index';

    return 'pages/index/index';
  }

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

  // React Component name map for Taro (@macle-community/taro-plugin-macle)
  const MAUI_REACT_NAME_MAP = {
    'maui-button': 'MauiButton',
    'maui-cell': 'MauiCell',
    'maui-cell-group': 'MauiCellGroup',
    'maui-checkbox': 'MauiCheckbox',
    'maui-checkbox-group': 'MauiCheckboxGroup',
    'maui-col': 'MauiCol',
    'maui-row': 'MauiRow',
    'maui-dialog': 'MauiDialog',
    'maui-divider': 'MauiDivider',
    'maui-empty': 'MauiEmpty',
    'maui-field': 'MauiField',
    'maui-icon': 'MauiIcon',
    'maui-image': 'MauiImage',
    'maui-loading': 'MauiLoading',
    'maui-overlay': 'MauiOverlay',
    'maui-popup': 'MauiPopup',
    'maui-progress': 'MauiProgress',
    'maui-radio': 'MauiRadio',
    'maui-radio-group': 'MauiRadioGroup',
    'maui-sidebar': 'MauiSidebar',
    'maui-sidebar-item': 'MauiSidebarItem',
    'maui-slider': 'MauiSlider',
    'maui-stepper': 'MauiStepper',
    'maui-steps': 'MauiSteps',
    'maui-sticky': 'MauiSticky',
    'maui-switch': 'MauiSwitch',
    'maui-tab': 'MauiTab',
    'maui-tabs': 'MauiTabs',
    'maui-tag': 'MauiTag',
    'maui-title-bar': 'MauiTitleBar',
    'maui-toast': 'MauiToast',
    'maui-modal': 'MauiModal',
    'maui-list': 'MauiList',
    'maui-list-item': 'MauiListItem'
  };

  // Convert MAML snippet to Taro JSX
  function convertMamlToTaroJsx(snippet) {
    let jsx = snippet.trim();
    // Convert MAUI tags
    jsx = jsx.replace(/<maui-([a-z0-9-]+)([^>]*)>/g, function(match, tag, attrs) {
      const comp = MAUI_REACT_NAME_MAP['maui-' + tag] || ('Maui' + tag.charAt(0).toUpperCase() + tag.slice(1));
      return '<' + comp + attrs + '>';
    });
    jsx = jsx.replace(/<\/maui-([a-z0-9-]+)>/g, function(match, tag) {
      const comp = MAUI_REACT_NAME_MAP['maui-' + tag] || ('Maui' + tag.charAt(0).toUpperCase() + tag.slice(1));
      return '</' + comp + '>';
    });
    // Convert standard tags
    jsx = jsx.replace(/<view([^>]*)>/g, '<View$1>').replace(/<\/view>/g, '</View>');
    jsx = jsx.replace(/<text([^>]*)>/g, '<Text$1>').replace(/<\/text>/g, '</Text>');
    jsx = jsx.replace(/<button([^>]*)>/g, '<Button$1>').replace(/<\/button>/g, '</Button>');
    jsx = jsx.replace(/<input([^>]*?)(\/?>)/g, function(m, attrs) {
      return '<Input' + attrs + ' />';
    });
    jsx = jsx.replace(/<swiper([^>]*)>/g, '<Swiper$1>').replace(/<\/swiper>/g, '</Swiper>');
    jsx = jsx.replace(/<swiper-item([^>]*)>/g, '<SwiperItem$1>').replace(/<\/swiper-item>/g, '</SwiperItem>');
    jsx = jsx.replace(/<scroll-view([^>]*)>/g, '<ScrollView$1>').replace(/<\/scroll-view>/g, '</ScrollView>');
    // JSX Attributes
    jsx = jsx.replace(/\bclass=/g, 'className=');
    jsx = jsx.replace(/\b(span|offset|gutter|step|min|max|current|count)="([0-9]+)"/g, '$1={$2}');
    jsx = jsx.replace(/\bbindtap="([a-zA-Z0-9_]+)"/g, 'onClick={$1}');
    jsx = jsx.replace(/\bbindchange="([a-zA-Z0-9_]+)"/g, 'onChange={$1}');
    jsx = jsx.replace(/\bbindinput="([a-zA-Z0-9_]+)"/g, 'onInput={$1}');
    jsx = jsx.replace(/\bbindclose="([a-zA-Z0-9_]+)"/g, 'onClose={$1}');
    jsx = jsx.replace(/\bbindconfirm="([a-zA-Z0-9_]+)"/g, 'onConfirm={$1}');
    return jsx;
  }

  // Detect used MAUI components
  function detectUsedMauiComponents(snippet) {
    const list = [];
    const set = new Set();
    const regex = /<maui-([a-z0-9-]+)/g;
    let m;
    while ((m = regex.exec(snippet)) !== null) {
      const tag = 'maui-' + m[1];
      const reactName = MAUI_REACT_NAME_MAP[tag];
      if (reactName && !set.has(reactName)) {
        set.add(reactName);
        list.push(reactName);
      }
    }
    return list;
  }

  // Generate Taro Snippet for inline documentation switch
  function generateTaroSnippet(rawCode, lang, title) {
    const trimmed = rawCode.trim();
    const isJsApi = trimmed.startsWith('ma.') || trimmed.includes('ma.') || lang === 'js';

    if (isJsApi) {
      const taroApiCode = trimmed.replace(/\bma\.([a-zA-Z0-9_]+)/g, 'Taro.$1');
      return `import Taro from '@tarojs/taro'\n\n// Macle API via @macle-community/taro-plugin-macle bridge\n${taroApiCode}`;
    }

    const mauiComps = detectUsedMauiComponents(trimmed);
    let imports = `import React from 'react'\nimport { View } from '@tarojs/components'\n`;
    if (mauiComps.length > 0) {
      imports += `import {\n  ${mauiComps.join(',\n  ')}\n} from '@macle-community/taro-plugin-macle/components-react'\n\n`;
    } else {
      imports += `import Taro from '@tarojs/taro'\n\n`;
    }

    const jsx = convertMamlToTaroJsx(trimmed);
    return `${imports}// Inside your Taro React Component render:\n${jsx}`;
  }

  // Generate complete runnable Taro React file for modal and Full Package
  function generateTaroFullComponent(rawCode, lang, title) {
    const trimmed = rawCode.trim();
    const isJsApi = trimmed.startsWith('ma.') || trimmed.includes('ma.') || lang === 'js';

    if (isJsApi) {
      const apiMatch = trimmed.match(/ma\.([a-zA-Z0-9_.]+)/);
      const apiName = apiMatch ? 'Taro.' + apiMatch[1].replace(/^ma\./, '') : 'Taro API';
      const taroCode = trimmed.replace(/\bma\.([a-zA-Z0-9_]+)/g, 'Taro.$1');

      return `// src/pages/demo/index.tsx
import React, { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

/**
 * ${escapeJs(title)}
 * Macle MiniProgram API Demo with Taro 4 & @macle-community/taro-plugin-macle
 */
export default function ApiDemoPage() {
  const [resultLog, setResultLog] = useState<string>('Ready to execute ${escapeJs(apiName)}')

  const handleRunApi = async () => {
    setResultLog('Executing ${escapeJs(apiName)}...')
    try {
      // Documentation Code Snippet (Native Macle Bridge via Taro)
${indent(taroCode, 6)}
      setResultLog('${escapeJs(apiName)} executed successfully.')
    } catch (err: any) {
      console.error('[Taro Execution Error]:', err)
      setResultLog('Error: ' + (err?.message || JSON.stringify(err)))
    }
  }

  return (
    <View className="container">
      <View className="demo-card">
        <View className="demo-card__header">
          <Text className="demo-card__title">${escapeHtml(title)}</Text>
          <Text className="demo-card__desc">Interactive Taro Runner via @macle-community/taro-plugin-macle</Text>
        </View>
        <View className="demo-card__body">
          <Button type="primary" onClick={handleRunApi} className="api-btn">
            Execute ${escapeHtml(apiName)}
          </Button>
        </View>
        {resultLog ? (
          <View className="log-card">
            <Text className="log-header">Execution Result:</Text>
            <Text className="log-content">{resultLog}</Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}`;
    }

    // UI Component Example
    const mauiComps = detectUsedMauiComponents(trimmed);
    let mauiImportBlock = '';
    if (mauiComps.length > 0) {
      mauiImportBlock = `import {\n  ${mauiComps.join(',\n  ')}\n} from '@macle-community/taro-plugin-macle/components-react'\n`;
    }

    const jsx = convertMamlToTaroJsx(trimmed);

    return `// src/pages/demo/index.tsx
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
${mauiImportBlock}import './index.css'

/**
 * ${escapeJs(title)}
 * Native Macle UI Component example built with Taro 4 & @macle-community/taro-plugin-macle
 */
export default function DemoPage() {
  const [count, setCount] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(true)
  const [inputValue, setInputValue] = useState<string>('')

  // Interactive event handlers
  const handleClick = () => {
    const nextCount = count + 1
    setCount(nextCount)
    Taro.showToast({
      title: 'Clicked (' + nextCount + ')',
      icon: 'success',
      duration: 1500
    })
  }

  const handleChange = (e: any) => {
    const nextVal = typeof e === 'boolean' ? e : (e?.detail !== undefined ? e.detail : !checked)
    setChecked(nextVal)
    Taro.showToast({
      title: 'State: ' + (nextVal ? 'ON' : 'OFF'),
      icon: 'none'
    })
  }

  const handleInput = (e: any) => {
    setInputValue(e.detail?.value || '')
  }

  return (
    <View className="container">
      <View className="demo-card">
        <View className="demo-card__header">
          <Text className="demo-card__title">${escapeHtml(title)}</Text>
          <Text className="demo-card__desc">Taro + @macle-community/taro-plugin-macle Component</Text>
        </View>
        <View className="demo-card__body">
${indent(jsx, 10)}
        </View>
      </View>
    </View>
  )
}`;
  }

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

      // State for this code block
      const originalSnippet = codeEl.innerText;
      const originalHtml = codeEl.innerHTML;
      let currentActiveFw = 'native';

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

      // Framework Switcher for MAML and JS API examples
      const rawText = originalSnippet.trim();
      const isJsApi = rawText.includes('ma.') || (lang === 'js' && rawText.includes('ma'));
      const canSupportTaro = isMaml || isJsApi;

      if (canSupportTaro) {
        const fwToggle = document.createElement('div');
        fwToggle.className = 'macle-fw-toggle';
        fwToggle.innerHTML = `
          <button class="macle-fw-btn active" data-fw="native" title="View Native Mini Program Code">Native (${isMaml ? 'MAML' : 'JS'})</button>
          <button class="macle-fw-btn" data-fw="taro" title="View Taro React Code with @macle-community/taro-plugin-macle">⚛️ Taro (React)</button>
        `;

        const nativeBtn = fwToggle.querySelector('[data-fw="native"]');
        const taroBtn = fwToggle.querySelector('[data-fw="taro"]');
        const langBadge = toolbarLeft.querySelector('.macle-lang-badge');
        const fileBadge = toolbarLeft.querySelector('.macle-file-badge');

        taroBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          currentActiveFw = 'taro';
          nativeBtn.classList.remove('active');
          taroBtn.classList.add('active');

          const heading = getClosestHeading(pre);
          const taroSnippet = generateTaroSnippet(originalSnippet, lang, heading);
          codeEl.innerHTML = highlightCode(taroSnippet, 'taro');
          langBadge.textContent = 'TSX';
          fileBadge.textContent = 'index.tsx';
          fileBadge.style.color = '#38bdf8';
        });

        nativeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          currentActiveFw = 'native';
          taroBtn.classList.remove('active');
          nativeBtn.classList.add('active');

          codeEl.innerHTML = originalHtml;
          langBadge.textContent = badgeLang;
          fileBadge.textContent = badgeFile;
          fileBadge.style.color = '#0284c7';
        });

        toolbarLeft.appendChild(fwToggle);
      }

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
        runBtn.title = 'Run example in Macle Web Simulator with Full Code';
        runBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <span>Run</span>
        `;
        runBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          handleRunCode(originalSnippet, lang, pre, currentActiveFw);
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

      if (trimmed.includes('maui-col') || trimmed.includes('maui-row')) {
        massCode += `

/* Layout Grid Column Visual Borders */
.maui-row {
  margin-bottom: 12px;
}
.maui-col {
  border: 1.5px solid #0284c7;
  background-color: #f0f9ff;
  color: #0369a1;
  text-align: center;
  border-radius: 4px;
  line-height: 38px;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 13px;
}
.maui-col:nth-child(even) {
  background-color: #e0f2fe;
}`;
      }
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

    // Taro React component
    const taroCode = generateTaroFullComponent(rawCode, lang, title);

    // Full package combined
    const packageCode = `// ========================================================
// Macle MiniProgram Complete Runnable Package
// Component/API: ${title}
// Generated by Macle OpenDoc Code Runner
// Supports: Native Macle DSL & Taro (@macle-community/taro-plugin-macle)
// ========================================================

// --- File 1: pages/demo/index.maml (Native Markup) ---
${mamlCode}

// --- File 2: pages/demo/index.js (Native Page Logic) ---
${jsCode}

// --- File 3: pages/demo/index.json (Page Config) ---
${jsonCode}

// --- File 4: pages/demo/index.mass (Native Stylesheet) ---
${massCode}

// --- File 5: src/pages/demo/index.tsx (Taro React with @macle-community/taro-plugin-macle) ---
${taroCode}
`;

    return {
      package: packageCode,
      maml: mamlCode,
      taro: taroCode,
      js: jsCode,
      json: jsonCode,
      mass: massCode,
      hasMaui: hasMaui,
      isJsApi: isJsApi
    };
  }

  // 5. Handle Click on "▶ Run"
  function handleRunCode(rawCode, lang, preElement, preferredFw) {
    const title = getClosestHeading(preElement) || 'Macle Example';
    const files = synthesizeFullExample(rawCode, lang, title);

    currentExample = {
      title: title,
      rawCode: rawCode,
      lang: lang,
      files: files,
      activeTab: (preferredFw === 'taro') ? 'taro' : 'package'
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
                <button class="macle-tab is-taro" data-tab="taro">
                  <span class="macle-tab-icon">⚛️</span> Taro (React)
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

              <!-- DevSuite Page Controls (visible in devsuite mode) -->
              <div class="macle-devsuite-page-controls" id="macle-devsuite-page-controls" style="display: none;">
                <!-- MiniApp Switcher: Native vs Taro -->
                <div class="macle-miniapp-toggle" title="Switch between Native MiniApp and Taro React MiniApp">
                  <button class="macle-miniapp-btn active" data-app="native">📱 Native</button>
                  <button class="macle-miniapp-btn" data-app="taro">⚛️ Taro</button>
                </div>

                <select class="macle-sim-page-select" id="macle-devsuite-page-select" title="Switch DevSuite Simulator Page">
                  <option value="pages/button/index">Button 按钮</option>
                  <option value="pages/layout/index">Layout 栅格</option>
                  <option value="pages/cell/index">Cell 单元格</option>
                  <option value="pages/checkbox/index">Checkbox 复选框</option>
                  <option value="pages/radio/index">Radio 单选框</option>
                  <option value="pages/switch/index">Switch 开关</option>
                  <option value="pages/slider/index">Slider 滑块</option>
                  <option value="pages/stepper/index">Stepper 步进器</option>
                  <option value="pages/field/index">Field 输入框</option>
                  <option value="pages/tag/index">Tag 标签</option>
                  <option value="pages/loading/index">Loading 加载</option>
                  <option value="pages/progress/index">Progress 进度条</option>
                  <option value="pages/divider/index">Divider 分割线</option>
                  <option value="pages/empty/index">Empty 空状态</option>
                  <option value="pages/steps/index">Steps 步骤条</option>
                  <option value="pages/dialog/index">Dialog 弹出框</option>
                  <option value="pages/toast/index">Toast 轻提示</option>
                  <option value="pages/view/index">View 视图</option>
                  <option value="pages/text/index">Text 文本</option>
                  <option value="pages/swiper/index">Swiper 轮播</option>
                  <option value="pages/scroll-view/index">ScrollView 滚动</option>
                  <option value="pages/index/index">Showcase Catalog 目录</option>
                  <option value="pages/runner/index">Custom Snippet 实时运行</option>
                </select>
              </div>

              <div class="macle-sim-tools">
                <span class="macle-sim-status-pill online" id="macle-sim-status-pill" title="DevSuite Simulator Status">● 30003 Online</span>
                <button class="macle-sim-tool-btn" id="macle-reload-sim" title="Restart Simulator">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                </button>
                <button class="macle-sim-tool-btn" id="macle-open-ext-sim" title="Open Full Standalone Workbench in New Tab">
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

                  <!-- DevSuite Offline State Overlay -->
                  <div class="macle-devsuite-offline-overlay" id="macle-devsuite-offline" style="display: none;">
                    <div class="macle-offline-icon">⚠️</div>
                    <div class="macle-offline-title">DevSuite Simulator Offline</div>
                    <div class="macle-offline-desc">The simulator server on port 30003 is not running.</div>
                    <div class="macle-offline-cmd"><code>npm run simulate:web</code></div>
                    <button class="macle-offline-retry-btn" id="macle-offline-retry">Retry Connection</button>
                  </div>

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

        // Automatically synchronize the mini app framework in the simulator
        if (tab.dataset.tab === 'taro') {
          switchActiveMiniApp('taro');
        } else if (tab.dataset.tab === 'maml' || tab.dataset.tab === 'js') {
          switchActiveMiniApp('native');
        }
      });
    });

    // MiniApp framework toggle (Native vs Taro MiniApp)
    const miniappBtns = modalEl.querySelectorAll('.macle-miniapp-btn');
    miniappBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const app = btn.dataset.app;
        switchActiveMiniApp(app);
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
    document.getElementById('macle-apply-btn').addEventListener('click', async function() {
      renderLiveSimulator();
      addLog('info', 'Code re-executed in Live Runner');

      // Also compile snippet into the corresponding miniapp runner page
      try {
        const isTaro = activeMiniApp === 'taro' || currentExample.activeTab === 'taro';
        const payload = isTaro ? {
          framework: 'taro',
          tsx: currentExample.files['taro'],
          title: currentExample.title
        } : {
          framework: 'native',
          maml: currentExample.files['index.maml'] || currentExample.rawCode,
          js: currentExample.files['index.js'] || 'Page({ data: {} });',
          json: currentExample.files['index.json'] || '{}',
          mass: currentExample.files['index.mass'] || '',
          title: currentExample.title
        };
        const res = await fetch('/api/compile-snippet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          addLog('info', `Snippet compiled to ${isTaro ? 'Taro' : 'Native'} miniapp runner page`);
          if (activeSimMode === 'devsuite') {
            currentDevSuitePage = 'pages/runner/index';
            const pageSelect = document.getElementById('macle-devsuite-page-select');
            if (pageSelect) pageSelect.value = currentDevSuitePage;
            const iframe = document.getElementById('macle-devsuite-iframe');
            const proj = getActiveSimulatorProject();
            if (iframe) iframe.src = `/${proj}/root/debug/simulator/?entryPagePath=pages/runner/index`;
          }
        }
      } catch (e) {
        console.warn('Compile snippet failed:', e);
      }
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
        const proj = getActiveSimulatorProject();
        if (iframe) {
          iframe.src = `/${proj}/root/debug/simulator/?entryPagePath=${encodeURIComponent(currentDevSuitePage)}`;
        }
        updateDevSuiteStatusPill();
      } else {
        renderLiveSimulator();
      }
      addLog('info', `Simulator reloaded (${getActiveSimulatorProject()})`);
    });

    // DevSuite Page Selector
    const devsuiteSelect = document.getElementById('macle-devsuite-page-select');
    if (devsuiteSelect) {
      devsuiteSelect.addEventListener('change', function(e) {
        currentDevSuitePage = e.target.value;
        const iframe = document.getElementById('macle-devsuite-iframe');
        const proj = getActiveSimulatorProject();
        if (iframe && activeSimMode === 'devsuite') {
          iframe.src = `/${proj}/root/debug/simulator/?entryPagePath=${encodeURIComponent(currentDevSuitePage)}`;
          addLog('info', `Navigated DevSuite Simulator to ${currentDevSuitePage} (${proj})`);
        }
      });
    }

    // DevSuite Offline Retry
    document.getElementById('macle-offline-retry')?.addEventListener('click', function() {
      switchSimulatorMode('devsuite');
    });

    // Open External Standalone Simulator
    document.getElementById('macle-open-ext-sim').addEventListener('click', function() {
      const page = currentDevSuitePage || 'pages/index/index';
      const proj = getActiveSimulatorProject();
      const port = getActiveSimulatorPort();
      const targetUrl = `/__web/index.html?project=${proj}&port=${port}&page=${encodeURIComponent(page)}`;
      window.open(targetUrl, '_blank');
      addLog('info', `Opened standalone Macle Web Simulator workbench: ${targetUrl}`);
    });

    // Clear Console
    document.getElementById('macle-clear-console').addEventListener('click', function() {
      consoleLogs.length = 0;
      renderConsoleLogs();
    });
  }

  // 8. Open the Modal & populate content
  async function openRunnerModal() {
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

    // Sync activeMiniApp with the requested framework
    if (currentExample.activeTab === 'taro') {
      activeMiniApp = 'taro';
    } else {
      activeMiniApp = 'native';
    }
    const miniappBtns = modalEl.querySelectorAll('.macle-miniapp-btn');
    miniappBtns.forEach(b => b.classList.toggle('active', b.dataset.app === activeMiniApp));

    // Automatically detect and match miniapp page to the current doc example
    currentDevSuitePage = detectDocPage();
    const pageSelect = document.getElementById('macle-devsuite-page-select');
    if (pageSelect) {
      pageSelect.value = currentDevSuitePage;
    }

    // Check DevSuite simulator online status
    const isOnline = await updateDevSuiteStatusPill();

    // Default to DevSuite simulator mode if online so the miniapp page displays directly!
    if (isOnline) {
      activeSimMode = 'devsuite';
      const simModeBtns = modalEl.querySelectorAll('.macle-sim-mode-btn');
      simModeBtns.forEach(b => b.classList.toggle('active', b.dataset.sim === 'devsuite'));
      await switchSimulatorMode('devsuite');
    } else {
      activeSimMode = 'live';
      const simModeBtns = modalEl.querySelectorAll('.macle-sim-mode-btn');
      simModeBtns.forEach(b => b.classList.toggle('active', b.dataset.sim === 'live'));
      await switchSimulatorMode('live');
    }

    // Render code in active tab
    renderActiveCodeTab();

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

    // 1. Extract strings and replace with placeholders so inner characters aren't touched
    const strings = [];
    escaped = escaped.replace(/(".*?"|'.*?'|`.*?`)/g, function(match) {
      const idx = strings.length;
      strings.push(match);
      return '___STR_' + idx + '___';
    });

    // 2. Extract comments and replace with placeholders
    const comments = [];
    escaped = escaped.replace(/(&lt;!--.*?--&gt;|\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, function(match) {
      const idx = comments.length;
      comments.push(match);
      return '___CMT_' + idx + '___';
    });

    if (type === 'taro' || type === 'tsx') {
      // Tags (PascalCase)
      escaped = escaped.replace(/(&lt;\/?[A-Z][a-zA-Z0-9_-]*)/g, '<span class="hl-tag">$1</span>');
      // TSX / React keywords
      escaped = escaped.replace(/\b(import|export|default|from|const|let|var|function|return|if|else|this|new|async|await|useState|useEffect|React|Taro)\b/g, '<span class="hl-kw">$1</span>');
      // Attributes with bindings or string literals (e.g. span={8}, className="demo", onClick={handleClick})
      escaped = escaped.replace(/\b([a-zA-Z0-9_:-]+)\s*=\s*(?=___STR_|\{)/g, '<span class="hl-attr">$1</span>=');
      // Numbers & Booleans
      escaped = escaped.replace(/\b(true|false|null|undefined|\d+)\b(?![_A-Z0-9]*___)/g, '<span class="hl-num">$1</span>');
    } else if (type === 'maml') {
      // Tags
      escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9_-]+)/g, '<span class="hl-tag">$1</span>');
      // Attributes (e.g. span="8", bindtap="handleTap")
      escaped = escaped.replace(/\b([a-zA-Z0-9_:-]+)\s*=\s*(?=___STR_|\{)/g, '<span class="hl-attr">$1</span>=');
    } else if (type === 'js') {
      // Keywords
      escaped = escaped.replace(/\b(const|let|var|function|return|if|else|this|new|Page|Component|ma)\b/g, '<span class="hl-kw">$1</span>');
      // Numbers & Booleans
      escaped = escaped.replace(/\b(true|false|null|undefined|\d+)\b(?![_A-Z0-9]*___)/g, '<span class="hl-num">$1</span>');
    } else if (type === 'json') {
      // Numbers & Booleans
      escaped = escaped.replace(/\b(true|false|null|\d+)\b(?![_A-Z0-9]*___)/g, '<span class="hl-num">$1</span>');
    } else {
      // 'package' or other multi-language combined
      escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9_-]+)/g, '<span class="hl-tag">$1</span>');
      escaped = escaped.replace(/\b(import|export|default|from|const|let|var|function|return|if|else|this|new|async|await|useState|useEffect|React|Taro|Page|Component|ma)\b/g, '<span class="hl-kw">$1</span>');
      escaped = escaped.replace(/\b([a-zA-Z0-9_:-]+)\s*=\s*(?=___STR_|\{)/g, '<span class="hl-attr">$1</span>=');
      escaped = escaped.replace(/\b(true|false|null|undefined|\d+)\b(?![_A-Z0-9]*___)/g, '<span class="hl-num">$1</span>');
    }

    // Restore strings and comments wrapped in spans
    escaped = escaped.replace(/___STR_(\d+)___/g, function(match, idx) {
      return '<span class="hl-str">' + strings[idx] + '</span>';
    });
    escaped = escaped.replace(/___CMT_(\d+)___/g, function(match, idx) {
      return '<span class="hl-comment">' + comments[idx] + '</span>';
    });

    return escaped;
  }

  // 10. Switch between Live Runner and DevSuite Simulator
  async function switchSimulatorMode(mode) {
    const phoneFrame = document.getElementById('macle-phone-frame');
    const viewport = document.getElementById('macle-phone-viewport');
    const iframe = document.getElementById('macle-devsuite-iframe');
    const offlineOverlay = document.getElementById('macle-devsuite-offline');
    const pageControls = document.getElementById('macle-devsuite-page-controls');

    if (mode === 'devsuite') {
      phoneFrame?.classList.add('is-devsuite-mode');
      viewport.style.display = 'none';
      if (pageControls) pageControls.style.display = 'block';

      const isOnline = await updateDevSuiteStatusPill();
      if (!isOnline) {
        iframe.style.display = 'none';
        if (offlineOverlay) offlineOverlay.style.display = 'flex';
        addLog('warn', `DevSuite Simulator is offline on port ${simulatorInfo.port || 30002}`);
        return;
      }

      if (offlineOverlay) offlineOverlay.style.display = 'none';
      iframe.style.display = 'block';

      if (!currentDevSuitePage) {
        currentDevSuitePage = detectDocPage();
      }
      const pageSelect = document.getElementById('macle-devsuite-page-select');
      if (pageSelect) {
        pageSelect.value = currentDevSuitePage;
      }

      const proj = getActiveSimulatorProject();
      const targetUrl = `/${proj}/root/debug/simulator/?entryPagePath=${encodeURIComponent(currentDevSuitePage)}`;
      if (iframe.src !== targetUrl && !iframe.src.endsWith(targetUrl)) {
        iframe.src = targetUrl;
        addLog('info', `DevSuite Simulator displayed page: ${currentDevSuitePage} (${proj})`);
      }
    } else {
      phoneFrame?.classList.remove('is-devsuite-mode');
      if (pageControls) pageControls.style.display = 'none';
      if (offlineOverlay) offlineOverlay.style.display = 'none';
      iframe.style.display = 'none';
      viewport.style.display = 'block';
      updateDevSuiteStatusPill();
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

    // Convert <maui-row ...>
    html = html.replace(/<maui-row([^>]*)>/g, function(match, attrs) {
      const gutterMatch = attrs.match(/gutter=["']?([0-9]+)["']?/);
      let style = '';
      if (gutterMatch) {
        const halfGutter = parseInt(gutterMatch[1], 10) / 2;
        style = ` style="margin-left: -${halfGutter}px; margin-right: -${halfGutter}px;"`;
      }
      return `<div class="maui-row"${style}>`;
    });
    html = html.replace(/<\/maui-row>/g, '</div>');

    // Convert <maui-col ...>
    html = html.replace(/<maui-col([^>]*)>(.*?)<\/maui-col>/gs, function(match, attrs, content) {
      const spanMatch = attrs.match(/span=["']?([0-9]+)["']?/);
      const offsetMatch = attrs.match(/offset=["']?([0-9]+)["']?/);
      const span = spanMatch ? spanMatch[1] : '24';
      const offset = offsetMatch ? offsetMatch[1] : '';
      let classes = ['maui-col', 'maui-col--' + span];
      if (offset) classes.push('maui-col--offset-' + offset);
      return `<div class="${classes.join(' ')}" title="span: ${span}${offset ? ', offset: ' + offset : ''}">${content.trim()}</div>`;
    });

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
      .replace(/>/g, '&gt;');
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
