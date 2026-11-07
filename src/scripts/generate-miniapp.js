const fs = require('fs');
const path = require('path');
const { componentSpecs } = require('./update-component-docs');

const MINIAPP_DIR = path.resolve(__dirname, '../../miniapp');
const MAUI_SRC = '/home/f/nati/macle/DevToolkit_26.6.0/DevToolkit_26.6.0-LG0001/Macle_26.6.0-LG0001_DevSuite_UI/dist';

console.log('1. Setting up Native MiniApp at:', MINIAPP_DIR);
fs.mkdirSync(MINIAPP_DIR, { recursive: true });

// Ensure mauiDest exists if source is present
const mauiDest = path.join(MINIAPP_DIR, 'maui-components');
if (!fs.existsSync(mauiDest) && fs.existsSync(MAUI_SRC)) {
  console.log('Copying MAUI components...');
  fs.cpSync(MAUI_SRC, mauiDest, { recursive: true });
}

// 32 Native Component page routes
const nativeComponentRoutes = [
  // View Container
  'pages/view/index',
  'pages/scroll-view/index',
  'pages/swiper/index',
  'pages/swiper-item/index',
  'pages/cover-view/index',
  'pages/cover-image/index',
  // Basic Content
  'pages/text/index',
  'pages/icon/index',
  'pages/rich-text/index',
  'pages/progress/index',
  // Form Components
  'pages/button/index',
  'pages/checkbox/index',
  'pages/checkbox-group/index',
  'pages/form/index',
  'pages/input/index',
  'pages/picker/index',
  'pages/picker-view/index',
  'pages/picker-view-column/index',
  'pages/label/index',
  'pages/switch/index',
  'pages/radio/index',
  'pages/radio-group/index',
  'pages/slider/index',
  'pages/textarea/index',
  // Navigating
  'pages/navigator/index',
  // Media Components
  'pages/image/index',
  'pages/video/index',
  'pages/audio/index',
  'pages/camera/index',
  // Open Capability & Page Meta
  'pages/web-view/index',
  'pages/page-meta/index',
  // Map
  'pages/map/index'
];

const allPages = [
  'pages/index/index',
  'pages/runner/index',
  ...nativeComponentRoutes
];

// app.json
const appJson = {
  pages: allPages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'Macle MiniProgram Showcase',
    navigationBarTextStyle: 'black',
    capsuleTheme: 'light'
  },
  style: 'v2'
};
fs.writeFileSync(path.join(MINIAPP_DIR, 'app.json'), JSON.stringify(appJson, null, 2));

// app.js
fs.writeFileSync(path.join(MINIAPP_DIR, 'app.js'), `
App({
  onLaunch() {
    console.log('[Macle MiniProgram Showcase] launched');
  }
});
`);

// app.mass
fs.writeFileSync(path.join(MINIAPP_DIR, 'app.mass'), `
page {
  background-color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  box-sizing: border-box;
}

.page-body {
  padding: 12px;
}

.demo-block {
  margin-bottom: 16px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

.demo-title {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  display: block;
  border-left: 3px solid #2563eb;
  padding-left: 8px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
`);

// project.config.json
fs.writeFileSync(path.join(MINIAPP_DIR, 'project.config.json'), JSON.stringify({
  description: 'Macle Native MiniProgram Showcase',
  appid: 'macle-showcase',
  projectname: 'miniapp',
  setting: { es5: false }
}, null, 2));

// Generate Home Page (index)
const indexDir = path.join(MINIAPP_DIR, 'pages/index');
fs.mkdirSync(indexDir, { recursive: true });

fs.writeFileSync(path.join(indexDir, 'index.maml'), `
<view class="home-container">
  <view class="home-banner">
    <text class="banner-title">Macle Native Components</text>
    <text class="banner-sub">32 Core MiniProgram DSL Components & Numbered Examples</text>
  </view>

  <view class="demo-block">
    <text class="demo-title">View Container 视图容器 (6)</text>
    <view class="nav-grid">
      <navigator url="/pages/view/index" class="nav-item">view 视图</navigator>
      <navigator url="/pages/scroll-view/index" class="nav-item">scroll-view 滚动</navigator>
      <navigator url="/pages/swiper/index" class="nav-item">swiper 滑块</navigator>
      <navigator url="/pages/swiper-item/index" class="nav-item">swiper-item 项</navigator>
      <navigator url="/pages/cover-view/index" class="nav-item">cover-view 覆盖视图</navigator>
      <navigator url="/pages/cover-image/index" class="nav-item">cover-image 覆盖图片</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Basic Content 基础内容 (4)</text>
    <view class="nav-grid">
      <navigator url="/pages/text/index" class="nav-item">text 文本</navigator>
      <navigator url="/pages/icon/index" class="nav-item">icon 图标</navigator>
      <navigator url="/pages/rich-text/index" class="nav-item">rich-text 富文本</navigator>
      <navigator url="/pages/progress/index" class="nav-item">progress 进度条</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Form Components 表单组件 (14)</text>
    <view class="nav-grid">
      <navigator url="/pages/button/index" class="nav-item">button 按钮</navigator>
      <navigator url="/pages/checkbox/index" class="nav-item">checkbox 多选框</navigator>
      <navigator url="/pages/checkbox-group/index" class="nav-item">checkbox-group 组</navigator>
      <navigator url="/pages/form/index" class="nav-item">form 表单</navigator>
      <navigator url="/pages/input/index" class="nav-item">input 输入框</navigator>
      <navigator url="/pages/picker/index" class="nav-item">picker 选择器</navigator>
      <navigator url="/pages/picker-view/index" class="nav-item">picker-view 嵌入选择</navigator>
      <navigator url="/pages/picker-view-column/index" class="nav-item">picker-view-column</navigator>
      <navigator url="/pages/label/index" class="nav-item">label 标签</navigator>
      <navigator url="/pages/switch/index" class="nav-item">switch 开关</navigator>
      <navigator url="/pages/radio/index" class="nav-item">radio 单选框</navigator>
      <navigator url="/pages/radio-group/index" class="nav-item">radio-group 组</navigator>
      <navigator url="/pages/slider/index" class="nav-item">slider 滑块</navigator>
      <navigator url="/pages/textarea/index" class="nav-item">textarea 多行输入</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Navigating 页面导航 (1)</text>
    <view class="nav-grid">
      <navigator url="/pages/navigator/index" class="nav-item full-width">navigator 页面跳转</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Media Components 媒体组件 (4)</text>
    <view class="nav-grid">
      <navigator url="/pages/image/index" class="nav-item">image 图片</navigator>
      <navigator url="/pages/video/index" class="nav-item">video 视频</navigator>
      <navigator url="/pages/audio/index" class="nav-item">audio 音频</navigator>
      <navigator url="/pages/camera/index" class="nav-item">camera 相机</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Open Capability & Config 开放能力与配置 (2)</text>
    <view class="nav-grid">
      <navigator url="/pages/web-view/index" class="nav-item">web-view 网页容器</navigator>
      <navigator url="/pages/page-meta/index" class="nav-item">page-meta 页面配置</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Map 地图组件 (1)</text>
    <view class="nav-grid">
      <navigator url="/pages/map/index" class="nav-item full-width">map 地图</navigator>
    </view>
  </view>
</view>
`);

fs.writeFileSync(path.join(indexDir, 'index.js'), `Page({ data: {} });`);
fs.writeFileSync(path.join(indexDir, 'index.json'), JSON.stringify({ navigationBarTitleText: 'Macle Component Showcase' }, null, 2));
fs.writeFileSync(path.join(indexDir, 'index.mass'), `
.home-container { padding: 12px; }
.home-banner {
  background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
  color: #ffffff;
  padding: 22px 18px;
  border-radius: 12px;
  margin-bottom: 14px;
}
.banner-title { font-size: 20px; font-weight: 800; display: block; margin-bottom: 6px; }
.banner-sub { font-size: 12px; opacity: 0.9; display: block; line-height: 1.4; }
.nav-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.nav-item {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  width: calc(50% - 4px);
  box-sizing: border-box;
  text-align: center;
}
.full-width { width: 100% !important; }
`);

// Generate Runner Page
const runnerDir = path.join(MINIAPP_DIR, 'pages/runner');
fs.mkdirSync(runnerDir, { recursive: true });
fs.writeFileSync(path.join(runnerDir, 'index.maml'), `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">Dynamic MAML Runner</text>
    <text style="font-size: 13px; color: #64748b;">Live Execution Sandbox</text>
  </view>
</view>
`);
fs.writeFileSync(path.join(runnerDir, 'index.js'), `Page({ data: {} });`);
fs.writeFileSync(path.join(runnerDir, 'index.json'), JSON.stringify({ navigationBarTitleText: 'Runner' }, null, 2));
fs.writeFileSync(path.join(runnerDir, 'index.mass'), ``);

// Generate each of the 32 Native Component Pages
console.log('2. Generating 32 Native Component pages...');

for (const [key, spec] of Object.entries(componentSpecs)) {
  const componentName = key.split('/')[1];
  const pageDir = path.join(MINIAPP_DIR, 'pages', componentName);
  fs.mkdirSync(pageDir, { recursive: true });

  // MAML
  let mamlContent = `<view class="page-body">\n`;
  spec.samples.forEach(sample => {
    mamlContent += `  <view class="demo-block">\n`;
    mamlContent += `    <text class="demo-title">${sample.titleEn}</text>\n`;
    mamlContent += indent(sample.maml.trim(), 4) + '\n';
    mamlContent += `  </view>\n\n`;
  });
  mamlContent += `</view>\n`;

  // JS (Combine page data and methods from samples)
  let mergedData = {};
  const methodStrings = [];

  spec.samples.forEach(sample => {
    if (sample.js) {
      try {
        let extractedObj = null;
        const fakePage = (o) => { extractedObj = o; };
        const fn = new Function('Page', 'ma', sample.js);
        fn(fakePage, {});

        if (extractedObj) {
          if (extractedObj.data) Object.assign(mergedData, extractedObj.data);
          for (const [prop, val] of Object.entries(extractedObj)) {
            if (prop !== 'data' && typeof val === 'function') {
              methodStrings.push(val.toString());
            }
          }
        }
      } catch (err) {
        console.error('JS extraction error in ' + componentName + ':', err.message);
      }
    }
  });

  const jsContent = `Page({\n  data: ${JSON.stringify(mergedData, null, 2)}${methodStrings.length > 0 ? ',\n\n  ' + methodStrings.join(',\n\n  ') : ''}\n});\n`;

  // MASS
  let massContent = `/* pages/${componentName}/index.mass */\n`;
  spec.samples.forEach(sample => {
    if (sample.css) {
      massContent += sample.css.trim() + '\n\n';
    }
  });

  // JSON
  const jsonContent = JSON.stringify({
    navigationBarTitleText: `${componentName} ${spec.titleZh || ''}`.trim()
  }, null, 2);

  fs.writeFileSync(path.join(pageDir, 'index.maml'), mamlContent);
  fs.writeFileSync(path.join(pageDir, 'index.js'), jsContent);
  fs.writeFileSync(path.join(pageDir, 'index.mass'), massContent);
  fs.writeFileSync(path.join(pageDir, 'index.json'), jsonContent);

  console.log(`Generated miniapp page: pages/${componentName}/index (${spec.samples.length} samples)`);
}

function indent(str, spaces) {
  const pad = ' '.repeat(spaces);
  return str.split('\n').map(l => (l.trim() ? pad + l : l)).join('\n');
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

console.log('✓ Successfully generated all 32 Native MiniApp component pages.');
