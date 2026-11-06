const fs = require('fs');
const path = require('path');

const MINIAPP_DIR = path.resolve(__dirname, '../../miniapp');
const MAUI_SRC = '/home/f/nati/macle/DevToolkit_25.9.0/Macle_25.9.0_DevSuite_UI/dist';

console.log('1. Creating directory structure at:', MINIAPP_DIR);
fs.mkdirSync(MINIAPP_DIR, { recursive: true });

// Copy maui-components
const mauiDest = path.join(MINIAPP_DIR, 'maui-components');
if (!fs.existsSync(mauiDest)) {
  console.log('2. Copying MAUI components from DevSuite_UI...');
  fs.cpSync(MAUI_SRC, mauiDest, { recursive: true });
}

// Global usingComponents
const usingComponents = {
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

const pagesList = [
  'pages/index/index',
  'pages/runner/index',
  'pages/button/index',
  'pages/layout/index',
  'pages/cell/index',
  'pages/checkbox/index',
  'pages/radio/index',
  'pages/switch/index',
  'pages/slider/index',
  'pages/stepper/index',
  'pages/field/index',
  'pages/tag/index',
  'pages/loading/index',
  'pages/progress/index',
  'pages/divider/index',
  'pages/empty/index',
  'pages/steps/index',
  'pages/dialog/index',
  'pages/toast/index',
  'pages/view/index',
  'pages/text/index',
  'pages/swiper/index',
  'pages/scroll-view/index'
];

// app.json
const appJson = {
  pages: pagesList,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'Macle OpenDoc Showcase',
    navigationBarTextStyle: 'black',
    capsuleTheme: 'light'
  },
  usingComponents: usingComponents,
  style: 'v2'
};
fs.writeFileSync(path.join(MINIAPP_DIR, 'app.json'), JSON.stringify(appJson, null, 2));

// app.js
fs.writeFileSync(path.join(MINIAPP_DIR, 'app.js'), `
App({
  onLaunch() {
    console.log('[Macle OpenDoc MiniApp] launched');
  }
});
`);

// app.mass
fs.writeFileSync(path.join(MINIAPP_DIR, 'app.mass'), `
page {
  background-color: #f7f8fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #323233;
  box-sizing: border-box;
}

.demo-block {
  margin: 16px 12px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.demo-title {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  display: block;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.demo-col {
  margin-bottom: 12px;
}
`);

// project.config.json
fs.writeFileSync(path.join(MINIAPP_DIR, 'project.config.json'), JSON.stringify({
  description: 'Macle OpenDoc Mini Program Showcase',
  appid: 'macle-opendoc-showcase',
  projectname: 'miniapp',
  setting: {
    es5: false
  }
}, null, 2));

// Define page specifications
const pageConfigs = {
  'index': {
    title: 'Component Showcase',
    maml: `
<view class="home-container">
  <view class="home-banner">
    <text class="banner-title">Macle OpenDoc</text>
    <text class="banner-sub">MiniProgram Interactive Component Library</text>
  </view>

  <view class="demo-block">
    <text class="demo-title">MAUI Basic Components</text>
    <view class="nav-grid">
      <navigator url="/pages/button/index" class="nav-item">Button 按钮</navigator>
      <navigator url="/pages/layout/index" class="nav-item">Layout 栅格</navigator>
      <navigator url="/pages/cell/index" class="nav-item">Cell 单元格</navigator>
      <navigator url="/pages/tag/index" class="nav-item">Tag 标签</navigator>
      <navigator url="/pages/loading/index" class="nav-item">Loading 加载</navigator>
      <navigator url="/pages/progress/index" class="nav-item">Progress 进度条</navigator>
      <navigator url="/pages/divider/index" class="nav-item">Divider 分割线</navigator>
      <navigator url="/pages/empty/index" class="nav-item">Empty 空状态</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">MAUI Form Components</text>
    <view class="nav-grid">
      <navigator url="/pages/checkbox/index" class="nav-item">Checkbox 复选框</navigator>
      <navigator url="/pages/radio/index" class="nav-item">Radio 单选框</navigator>
      <navigator url="/pages/switch/index" class="nav-item">Switch 开关</navigator>
      <navigator url="/pages/slider/index" class="nav-item">Slider 滑块</navigator>
      <navigator url="/pages/stepper/index" class="nav-item">Stepper 步进器</navigator>
      <navigator url="/pages/field/index" class="nav-item">Field 输入框</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">MAUI Feedback & Nav</text>
    <view class="nav-grid">
      <navigator url="/pages/dialog/index" class="nav-item">Dialog 弹出框</navigator>
      <navigator url="/pages/toast/index" class="nav-item">Toast 轻提示</navigator>
      <navigator url="/pages/steps/index" class="nav-item">Steps 步骤条</navigator>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">Standard DSL Components</text>
    <view class="nav-grid">
      <navigator url="/pages/view/index" class="nav-item">View 视图</navigator>
      <navigator url="/pages/text/index" class="nav-item">Text 文本</navigator>
      <navigator url="/pages/swiper/index" class="nav-item">Swiper 轮播</navigator>
      <navigator url="/pages/scroll-view/index" class="nav-item">ScrollView 滚动</navigator>
    </view>
  </view>
</view>
`,
    js: `
Page({
  data: {}
});
`,
    mass: `
.home-container { padding: 12px; }
.home-banner {
  background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
  color: #ffffff;
  padding: 20px 16px;
  border-radius: 12px;
  margin-bottom: 14px;
}
.banner-title { font-size: 20px; font-weight: 800; display: block; margin-bottom: 4px; }
.banner-sub { font-size: 12px; opacity: 0.9; display: block; }
.nav-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.nav-item {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  width: calc(50% - 4px);
  box-sizing: border-box;
  text-align: center;
}
`
  },

  'runner': {
    title: 'Dynamic Snippet Runner',
    maml: `
<view class="runner-page">
  <view class="demo-block">
    <text class="demo-title">Dynamic MAML Snippet Execution</text>
    <view class="runner-content">
      <text class="snippet-desc">{{ snippetTitle }}</text>
      <maui-button type="primary" block bind:click="handleRunClick">Run Live Interactive Action</maui-button>
    </view>
  </view>
</view>
`,
    js: `
Page({
  data: {
    snippetTitle: 'Macle MiniProgram Live Execution'
  },
  onLoad(options) {
    if (options.title) {
      this.setData({ snippetTitle: decodeURIComponent(options.title) });
    }
  },
  handleRunClick() {
    ma.showToast({ title: 'Code executed in DevSuite!', icon: 'success' });
  }
});
`,
    mass: `
.runner-page { padding: 12px; }
.runner-content { display: flex; flex-direction: column; gap: 12px; }
.snippet-desc { font-size: 13px; color: #64748b; }
`
  },

  'button': {
    title: 'Button 按钮',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Button Types</text>
    <view class="demo-row">
      <maui-button type="default">default button</maui-button>
      <maui-button type="primary">primary button</maui-button>
      <maui-button type="info">information button</maui-button>
      <maui-button type="warning">warning button</maui-button>
      <maui-button type="danger">danger button</maui-button>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Plain & Hairline</text>
    <view class="demo-row">
      <maui-button plain type="primary">plain primary</maui-button>
      <maui-button plain type="info">plain info</maui-button>
      <maui-button plain hairline type="primary">hairline primary</maui-button>
      <maui-button plain hairline type="info">hairline info</maui-button>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Disabled & Loading</text>
    <view class="demo-row">
      <maui-button disabled type="primary">disabled</maui-button>
      <maui-button disabled type="info">disabled</maui-button>
      <maui-button loading type="primary" />
      <maui-button loading type="primary" loading-type="spinner" />
      <maui-button loading type="info" loading-text="Loading..." />
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">4. Button Shapes & Sizes</text>
    <view class="demo-row">
      <maui-button square type="primary">square</maui-button>
      <maui-button round type="info">round</maui-button>
      <maui-button type="primary" size="large">large</maui-button>
      <maui-button type="primary" size="normal">normal</maui-button>
      <maui-button type="primary" size="small">small</maui-button>
      <maui-button type="primary" size="mini">mini</maui-button>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">5. Block-Level & Custom Colors</text>
    <view class="demo-col">
      <maui-button type="primary" block>block-level element</maui-button>
    </view>
    <view class="demo-row" style="margin-top: 10px;">
      <maui-button color="#7232dd">single-color</maui-button>
      <maui-button color="#7232dd" plain>single-color plain</maui-button>
      <maui-button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient color</maui-button>
    </view>
  </view>
</view>
`,
    js: `
Page({
  data: {}
});
`,
    mass: `
.page-body { padding: 8px 0; }
`
  },

  'layout': {
    title: 'Layout 栅格',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage (span: 8, 8, 8)</text>
    <maui-row>
      <maui-col span="8">span: 8</maui-col>
      <maui-col span="8">span: 8</maui-col>
      <maui-col span="8">span: 8</maui-col>
    </maui-row>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Column Offset (span: 4 + offset: 4, span: 10)</text>
    <maui-row>
      <maui-col span="4">span: 4</maui-col>
      <maui-col span="10" offset="4">offset: 4, span: 10</maui-col>
    </maui-row>
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Column Offset (offset: 12, span: 12)</text>
    <maui-row>
      <maui-col offset="12" span="12">offset: 12, span: 12</maui-col>
    </maui-row>
  </view>

  <view class="demo-block">
    <text class="demo-title">4. Column Gutter (gutter: 20)</text>
    <maui-row gutter="20">
      <maui-col span="8">span: 8</maui-col>
      <maui-col span="8">span: 8</maui-col>
      <maui-col span="8">span: 8</maui-col>
    </maui-row>
  </view>

  <view class="demo-block">
    <text class="demo-title">5. Flex Layout (justify: center / end)</text>
    <maui-row type="flex" justify="center">
      <maui-col span="6">span: 6</maui-col>
      <maui-col span="6">span: 6</maui-col>
    </maui-row>
    <view style="height: 10px;"></view>
    <maui-row type="flex" justify="end">
      <maui-col span="6">span: 6</maui-col>
      <maui-col span="6">span: 6</maui-col>
    </maui-row>
  </view>
</view>
`,
    js: `
Page({
  data: {}
});
`,
    mass: `
.page-body { padding: 8px 0; }
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
}
`
  },

  'cell': {
    title: 'Cell 单元格',
    maml: `
<view class="page-body">
  <view class="demo-block" style="padding: 0; overflow: hidden;">
    <text class="demo-title" style="padding: 16px 16px 8px 16px;">1. Basic Usage</text>
    <maui-cell-group>
      <maui-cell title="Cell title" value="Content" />
      <maui-cell title="Cell title" value="Content" label="Description" />
    </maui-cell-group>
  </view>

  <view class="demo-block" style="padding: 0; overflow: hidden;">
    <text class="demo-title" style="padding: 16px 16px 8px 16px;">2. Cell Size & Links</text>
    <maui-cell-group>
      <maui-cell title="Large Cell" value="Content" size="large" label="Description" />
      <maui-cell title="Navigation Link" is-link />
      <maui-cell title="Value Link" is-link value="Detail" />
    </maui-cell-group>
  </view>
</view>
`,
    js: `
Page({
  data: {}
});
`,
    mass: `
.page-body { padding: 8px 0; }
`
  },

  'checkbox': {
    title: 'Checkbox 复选框',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage</text>
    <maui-checkbox value="{{ checked }}" bind:change="onChange">Checkbox: {{ checked ? 'Checked' : 'Unchecked' }}</maui-checkbox>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Disabled & Shapes</text>
    <view class="demo-row">
      <maui-checkbox disabled value="{{ true }}">Disabled Checked</maui-checkbox>
      <maui-checkbox shape="square" value="{{ checkedSquare }}" bind:change="onSquareChange">Square Checkbox</maui-checkbox>
      <maui-checkbox checked-color="#07c160" value="{{ true }}">Custom Color</maui-checkbox>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Checkbox Group</text>
    <maui-checkbox-group value="{{ groupVal }}" bind:change="onGroupChange">
      <maui-checkbox name="a">Option A</maui-checkbox>
      <maui-checkbox name="b">Option B</maui-checkbox>
      <maui-checkbox name="c">Option C</maui-checkbox>
    </maui-checkbox-group>
  </view>
</view>
`,
    js: `
Page({
  data: {
    checked: true,
    checkedSquare: true,
    groupVal: ['a', 'b']
  },
  onChange(e) {
    this.setData({ checked: e.detail });
  },
  onSquareChange(e) {
    this.setData({ checkedSquare: e.detail });
  },
  onGroupChange(e) {
    this.setData({ groupVal: e.detail });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'radio': {
    title: 'Radio 单选框',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Radio Group (Selected: {{ currentRadio }})</text>
    <maui-radio-group value="{{ currentRadio }}" bind:change="onRadioChange">
      <maui-radio name="1">Option 1</maui-radio>
      <maui-radio name="2">Option 2</maui-radio>
      <maui-radio name="3" disabled>Option 3 (Disabled)</maui-radio>
    </maui-radio-group>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Horizontal Direction</text>
    <maui-radio-group direction="horizontal" value="{{ currentRadio }}" bind:change="onRadioChange">
      <maui-radio name="1">One</maui-radio>
      <maui-radio name="2">Two</maui-radio>
    </maui-radio-group>
  </view>
</view>
`,
    js: `
Page({
  data: {
    currentRadio: '1'
  },
  onRadioChange(e) {
    this.setData({ currentRadio: e.detail });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }
maui-radio-group:not([direction="horizontal"]) maui-radio {
  margin-bottom: 8px;
  display: block;
}
maui-radio-group[direction="horizontal"] {
  display: flex;
  flex-direction: row;
}
maui-radio-group[direction="horizontal"] maui-radio {
  margin-right: 16px;
}`
  },

  'switch': {
    title: 'Switch 开关',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage (State: {{ checked ? 'ON' : 'OFF' }})</text>
    <maui-switch checked="{{ checked }}" bind:change="onSwitchChange" />
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Disabled & Loading</text>
    <view class="demo-row">
      <maui-switch disabled checked="{{ true }}" />
      <maui-switch disabled checked="{{ false }}" />
      <maui-switch loading checked="{{ true }}" />
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Custom Size & Colors</text>
    <view class="demo-row">
      <maui-switch size="24px" checked="{{ checked }}" bind:change="onSwitchChange" />
      <maui-switch active-color="#07c160" inactive-color="#ee0a24" checked="{{ checked }}" bind:change="onSwitchChange" />
    </view>
  </view>
</view>
`,
    js: `
Page({
  data: {
    checked: true
  },
  onSwitchChange(e) {
    this.setData({ checked: e.detail });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'slider': {
    title: 'Slider 滑块',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage (Value: {{ value }})</text>
    <maui-slider value="{{ value }}" bind:change="onChange" />
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Custom Range (-50 to 50)</text>
    <maui-slider min="-50" max="50" value="0" />
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Step Size (step: 10)</text>
    <maui-slider step="10" value="30" />
  </view>
</view>
`,
    js: `
Page({
  data: {
    value: 50
  },
  onChange(e) {
    this.setData({ value: e.detail });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'stepper': {
    title: 'Stepper 步进器',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage (Value: {{ count }})</text>
    <maui-stepper value="{{ count }}" bind:change="onChange" />
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Step Size & Limits (1 to 10, step 2)</text>
    <maui-stepper min="1" max="10" step="2" value="{{ count }}" bind:change="onChange" />
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Disabled</text>
    <maui-stepper disabled value="1" />
  </view>
</view>
`,
    js: `
Page({
  data: {
    count: 3
  },
  onChange(e) {
    this.setData({ count: e.detail });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'field': {
    title: 'Field 输入框',
    maml: `
<view class="page-body">
  <view class="demo-block" style="padding: 0; overflow: hidden;">
    <maui-cell-group>
      <maui-field value="{{ username }}" placeholder="Please enter username" label="Username" />
      <maui-field type="password" label="Password" placeholder="Enter password" />
      <maui-field clearable label="Clearable" placeholder="Clearable input" />
      <maui-field disabled label="Disabled" value="Input disabled" />
    </maui-cell-group>
  </view>
</view>
`,
    js: `
Page({
  data: {
    username: 'macle_user'
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'tag': {
    title: 'Tag 标签',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Tag Types</text>
    <view class="demo-row">
      <maui-tag type="primary">Primary</maui-tag>
      <maui-tag type="success">Success</maui-tag>
      <maui-tag type="danger">Danger</maui-tag>
      <maui-tag type="warning">Warning</maui-tag>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Plain & Shapes</text>
    <view class="demo-row">
      <maui-tag plain type="primary">Plain</maui-tag>
      <maui-tag round type="primary">Round</maui-tag>
      <maui-tag mark type="primary">Mark</maui-tag>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Custom Colors & Sizes</text>
    <view class="demo-row">
      <maui-tag color="#7232dd">Custom #7232dd</maui-tag>
      <maui-tag size="large" type="primary">Large</maui-tag>
      <maui-tag size="medium" type="primary">Medium</maui-tag>
    </view>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'loading': {
    title: 'Loading 加载',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Loading Types</text>
    <view class="demo-row">
      <maui-loading />
      <maui-loading type="spinner" />
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Custom Color & Vertical Text</text>
    <view class="demo-row">
      <maui-loading color="#1989fa" />
      <maui-loading size="24px" vertical>Loading...</maui-loading>
    </view>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'progress': {
    title: 'Progress 进度条',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage (50%)</text>
    <maui-progress percentage="50" />
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Stroke Width & Inactive</text>
    <maui-progress stroke-width="8" percentage="75" />
    <view style="height: 12px;"></view>
    <maui-progress inactive percentage="40" />
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Custom Color</text>
    <maui-progress color="#ee0a24" percentage="65" />
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'divider': {
    title: 'Divider 分割线',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Divider</text>
    <maui-divider />
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Content Position</text>
    <maui-divider content-position="center">Center Text</maui-divider>
    <maui-divider content-position="left">Left Text</maui-divider>
    <maui-divider content-position="right">Right Text</maui-divider>
  </view>

  <view class="demo-block">
    <text class="demo-title">3. Dashed & Custom Colors</text>
    <maui-divider dashed />
    <maui-divider text-color="#1989fa" custom-style="color: #1989fa;">Blue Divider</maui-divider>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'empty': {
    title: 'Empty 空状态',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Basic Usage</text>
    <maui-empty description="No Data" />
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'steps': {
    title: 'Steps 步骤条',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Horizontal Steps (Active: {{ active }})</text>
    <maui-steps steps="{{ steps }}" active="{{ active }}" />
    <view style="margin-top: 14px;">
      <maui-button type="primary" size="small" bind:click="nextStep">Next Step</maui-button>
    </view>
  </view>
</view>
`,
    js: `
Page({
  data: {
    active: 1,
    steps: [
      { text: 'Step 1', desc: 'Description 1' },
      { text: 'Step 2', desc: 'Description 2' },
      { text: 'Step 3', desc: 'Description 3' }
    ]
  },
  nextStep() {
    this.setData({ active: (this.data.active + 1) % 3 });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'dialog': {
    title: 'Dialog 弹出框',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Native Dialog Trigger</text>
    <maui-button type="primary" block bind:click="showAlert">Trigger Alert Dialog</maui-button>
  </view>
</view>
`,
    js: `
Page({
  data: {},
  showAlert() {
    ma.showToast({ title: 'Dialog Verified!', icon: 'success' });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'toast': {
    title: 'Toast 轻提示',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Toast Notifications</text>
    <view class="demo-row">
      <maui-button type="primary" bind:click="showSuccess">Success Toast</maui-button>
      <maui-button type="info" bind:click="showInfo">Info Toast</maui-button>
    </view>
  </view>
</view>
`,
    js: `
Page({
  data: {},
  showSuccess() {
    ma.showToast({ title: 'Success!', icon: 'success' });
  },
  showInfo() {
    ma.showToast({ title: 'Information message', icon: 'none' });
  }
});
`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'view': {
    title: 'View 视图容器',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Flex Direction: Row</text>
    <view class="flex-row">
      <view class="box bg-red">A</view>
      <view class="box bg-green">B</view>
      <view class="box bg-blue">C</view>
    </view>
  </view>

  <view class="demo-block">
    <text class="demo-title">2. Flex Direction: Column</text>
    <view class="flex-col">
      <view class="box bg-red">Row 1</view>
      <view class="box bg-green">Row 2</view>
      <view class="box bg-blue">Row 3</view>
    </view>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `
.page-body { padding: 8px 0; }
.flex-row { display: flex; flex-direction: row; gap: 10px; }
.flex-col { display: flex; flex-direction: column; gap: 10px; }
.box { padding: 14px; color: #fff; text-align: center; border-radius: 6px; font-weight: bold; }
.bg-red { background-color: #ef4444; flex: 1; }
.bg-green { background-color: #10b981; flex: 1; }
.bg-blue { background-color: #3b82f6; flex: 1; }
`
  },

  'text': {
    title: 'Text 文本',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Text Component</text>
    <view style="display: flex; flex-direction: column; gap: 8px;">
      <text style="font-size: 16px; font-weight: bold; color: #0f172a;">Headline Bold Text</text>
      <text style="font-size: 13px; color: #64748b;">Subtitle or description text style.</text>
      <text selectable="true" style="font-size: 13px; color: #2563eb;">This text is selectable (selectable=true)</text>
    </view>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `.page-body { padding: 8px 0; }`
  },

  'swiper': {
    title: 'Swiper 轮播',
    maml: `
<view class="page-body">
  <view class="demo-block" style="padding: 0; overflow: hidden;">
    <swiper indicator-dots="true" autoplay="true" interval="3000" duration="500" style="height: 160px;">
      <swiper-item>
        <view class="swiper-slide slide-1"><text>Slide 1</text></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-slide slide-2"><text>Slide 2</text></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-slide slide-3"><text>Slide 3</text></view>
      </swiper-item>
    </swiper>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `
.page-body { padding: 8px 0; }
.swiper-slide { height: 160px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: bold; }
.slide-1 { background: #3b82f6; }
.slide-2 { background: #10b981; }
.slide-3 { background: #8b5cf6; }
`
  },

  'scroll-view': {
    title: 'ScrollView 滚动视图',
    maml: `
<view class="page-body">
  <view class="demo-block">
    <text class="demo-title">1. Horizontal Scroll View</text>
    <scroll-view scroll-x="true" style="white-space: nowrap; width: 100%;">
      <view class="scroll-item bg-1">Item 1</view>
      <view class="scroll-item bg-2">Item 2</view>
      <view class="scroll-item bg-3">Item 3</view>
      <view class="scroll-item bg-4">Item 4</view>
      <view class="scroll-item bg-5">Item 5</view>
    </scroll-view>
  </view>
</view>
`,
    js: `Page({ data: {} });`,
    mass: `
.page-body { padding: 8px 0; }
.scroll-item { display: inline-block; width: 100px; height: 80px; margin-right: 10px; border-radius: 8px; line-height: 80px; text-align: center; color: #fff; font-weight: bold; }
.bg-1 { background: #3b82f6; }
.bg-2 { background: #10b981; }
.bg-3 { background: #f59e0b; }
.bg-4 { background: #ef4444; }
.bg-5 { background: #8b5cf6; }
`
  }
};

// Generate each page directory and files
console.log('3. Writing all mini app pages...');
for (const [pageKey, config] of Object.entries(pageConfigs)) {
  const pDir = path.join(MINIAPP_DIR, 'pages', pageKey);
  fs.mkdirSync(pDir, { recursive: true });

  fs.writeFileSync(path.join(pDir, 'index.maml'), config.maml.trim());
  fs.writeFileSync(path.join(pDir, 'index.js'), config.js.trim());
  fs.writeFileSync(path.join(pDir, 'index.mass'), config.mass.trim());
  fs.writeFileSync(path.join(pDir, 'index.json'), JSON.stringify({
    navigationBarTitleText: config.title
  }, null, 2));
}

console.log('4. Successfully created miniapp with ' + Object.keys(pageConfigs).length + ' pages!');

