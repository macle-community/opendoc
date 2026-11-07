const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../..');
const EN_MD_DIR = path.join(ROOT_DIR, 'markdown-docs/en/DSL/component');
const ZH_MD_DIR = path.join(ROOT_DIR, 'markdown-docs/zh/DSL/component');
const EN_HTML_DIR = path.join(ROOT_DIR, 'dist/data/doc/en/component');
const ZH_HTML_DIR = path.join(ROOT_DIR, 'dist/data/doc/component');

/**
 * 32 Native MiniProgram Components Specifications
 */
const componentSpecs = {
  'view/view': {
    titleEn: 'view',
    titleZh: '视图',
    samples: [
      {
        id: 1,
        titleEn: '1. Flex Direction (Row & Column Layout)',
        titleZh: '1. 弹性布局（水平与垂直）',
        maml: `<view class="page-section">
  <view class="page-section-title">flex-direction: row</view>
  <view class="flex-row">
    <view class="flex-item demo-bg-red">A</view>
    <view class="flex-item demo-bg-green">B</view>
    <view class="flex-item demo-bg-blue">C</view>
  </view>

  <view class="page-section-title" style="margin-top: 16px;">flex-direction: column</view>
  <view class="flex-col">
    <view class="flex-item demo-bg-red">Row 1</view>
    <view class="flex-item demo-bg-green">Row 2</view>
    <view class="flex-item demo-bg-blue">Row 3</view>
  </view>
</view>`,
        js: `Page({
  data: {}
});`,
        css: `.flex-row { display: flex; flex-direction: row; gap: 10px; }
.flex-col { display: flex; flex-direction: column; gap: 10px; }
.flex-item { height: 50px; flex: 1; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; border-radius: 6px; }
.demo-bg-red { background-color: #ef4444; }
.demo-bg-green { background-color: #10b981; }
.demo-bg-blue { background-color: #3b82f6; }`
      },
      {
        id: 2,
        titleEn: '2. Stream Post Feed with Hover State',
        titleZh: '2. 动态信息流与按压态',
        maml: `<view class="stream">
  <view class="post" hover-class="post-hover" hover-start-time="50" hover-stay-time="400">
    <view class="post-user">
      <view class="post-avatar">Z</view>
      <text class="post-name">Zoe</text>
    </view>
    <view class="post-body">
      <view class="post-content">Welcome to Macle Mini Program development!</view>
      <view class="post-date">June 12</view>
    </view>
  </view>
  <view class="post" hover-class="post-hover">
    <view class="post-user">
      <view class="post-avatar">J</view>
      <text class="post-name">Jim</text>
    </view>
    <view class="post-body">
      <view class="post-content">Great! How can I preview on the Web Simulator?</view>
      <view class="post-date">June 13</view>
    </view>
  </view>
</view>`,
        js: `Page({
  data: {}
});`,
        css: `.stream { display: flex; flex-direction: column; gap: 12px; }
.post { display: flex; background: #fff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
.post-hover { background-color: #f1f5f9; }
.post-user { display: flex; flex-direction: column; align-items: center; width: 60px; margin-right: 12px; }
.post-avatar { width: 36px; height: 36px; border-radius: 18px; background: #0284c7; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.post-name { font-size: 12px; color: #64748b; margin-top: 4px; }
.post-body { flex: 1; }
.post-content { font-size: 14px; color: #1e293b; line-height: 1.5; }
.post-date { font-size: 11px; color: #94a3b8; margin-top: 6px; }`
      }
    ]
  },

  'view/scroll-view': {
    titleEn: 'scroll-view',
    titleZh: '滚动视图',
    samples: [
      {
        id: 1,
        titleEn: '1. Vertical Scroll View',
        titleZh: '1. 垂直滚动视图',
        maml: `<scroll-view scroll-y="true" style="height: 160px;" bindscrolltoupper="onScrollToUpper" bindscrolltolower="onScrollToLower">
  <view class="scroll-v-item bg-red">Scroll Item 1 (Top)</view>
  <view class="scroll-v-item bg-orange">Scroll Item 2</view>
  <view class="scroll-v-item bg-green">Scroll Item 3</view>
  <view class="scroll-v-item bg-blue">Scroll Item 4 (Bottom)</view>
</scroll-view>`,
        js: `Page({
  onScrollToUpper() { ma.showToast({ title: 'Top Reached', icon: 'none' }); },
  onScrollToLower() { ma.showToast({ title: 'Bottom Reached', icon: 'none' }); }
});`,
        css: `.scroll-v-item { height: 70px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 600; margin-bottom: 8px; border-radius: 8px; }
.bg-red { background: #ef4444; } .bg-orange { background: #f97316; } .bg-green { background: #10b981; } .bg-blue { background: #3b82f6; }`
      },
      {
        id: 2,
        titleEn: '2. Horizontal Scroll View',
        titleZh: '2. 水平滚动视图',
        maml: `<scroll-view scroll-x="true" style="white-space: nowrap; width: 100%;">
  <view class="scroll-h-item bg-blue">Card 1</view>
  <view class="scroll-h-item bg-green">Card 2</view>
  <view class="scroll-h-item bg-orange">Card 3</view>
  <view class="scroll-h-item bg-purple">Card 4</view>
  <view class="scroll-h-item bg-pink">Card 5</view>
</scroll-view>`,
        js: `Page({ data: {} });`,
        css: `.scroll-h-item { display: inline-block; width: 110px; height: 80px; margin-right: 10px; border-radius: 8px; text-align: center; line-height: 80px; color: #fff; font-weight: 600; }
.bg-purple { background: #8b5cf6; } .bg-pink { background: #ec4899; }`
      }
    ]
  },

  'view/swiper': {
    titleEn: 'swiper',
    titleZh: '滑块视图',
    samples: [
      {
        id: 1,
        titleEn: '1. Interactive Swiper with Indicators & Autoplay',
        titleZh: '1. 自动轮播与面板指示点',
        maml: `<swiper indicator-dots="true" autoplay="true" interval="2500" duration="500" circular="true" style="height: 160px; border-radius: 10px; overflow: hidden;">
  <swiper-item>
    <view class="swiper-slide slide-blue"><text class="slide-text">Slide A - Macle</text></view>
  </swiper-item>
  <swiper-item>
    <view class="swiper-slide slide-green"><text class="slide-text">Slide B - Simulator</text></view>
  </swiper-item>
  <swiper-item>
    <view class="swiper-slide slide-orange"><text class="slide-text">Slide C - OpenDoc</text></view>
  </swiper-item>
</swiper>`,
        js: `Page({ data: {} });`,
        css: `.swiper-slide { height: 100%; display: flex; align-items: center; justify-content: center; }
.slide-text { color: #fff; font-size: 18px; font-weight: bold; }
.slide-blue { background: #2563eb; } .slide-green { background: #16a34a; } .slide-orange { background: #ea580c; }`
      },
      {
        id: 2,
        titleEn: '2. Circular & Vertical Swiping',
        titleZh: '2. 循环衔接与纵向滑动',
        maml: `<swiper vertical="true" indicator-dots="true" autoplay="false" style="height: 120px; border-radius: 10px; overflow: hidden;">
  <swiper-item><view class="swiper-slide slide-purple"><text class="slide-text">Vertical Panel 1</text></view></swiper-item>
  <swiper-item><view class="swiper-slide slide-teal"><text class="slide-text">Vertical Panel 2</text></view></swiper-item>
</swiper>`,
        js: `Page({ data: {} });`,
        css: `.slide-purple { background: #7c3aed; } .slide-teal { background: #0d9488; }`
      }
    ]
  },

  'view/swiper-item': {
    titleEn: 'swiper-item',
    titleZh: '滑块视图项',
    samples: [
      {
        id: 1,
        titleEn: '1. Custom Swiper Item Card',
        titleZh: '1. 自定义轮播滑块项',
        maml: `<swiper indicator-dots="true" style="height: 140px;">
  <swiper-item class="swiper-custom-item">
    <view class="card-content">
      <text class="card-title">Custom Item Container</text>
      <text class="card-sub">swiper-item wraps individual slides</text>
    </view>
  </swiper-item>
</swiper>`,
        js: `Page({ data: {} });`,
        css: `.swiper-custom-item { padding: 10px; box-sizing: border-box; }
.card-content { background: #f8fafc; border: 2px dashed #94a3b8; height: 100%; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.card-title { font-weight: bold; color: #1e293b; font-size: 15px; }
.card-sub { font-size: 12px; color: #64748b; margin-top: 4px; }`
      }
    ]
  },

  'view/cover-view': {
    titleEn: 'cover-view',
    titleZh: '覆盖文本视图',
    samples: [
      {
        id: 1,
        titleEn: '1. Cover View Overlay on Native Components',
        titleZh: '1. 原生组件上的文本视图覆盖',
        maml: `<view class="media-container" style="position: relative; height: 180px; background: #0f172a; border-radius: 10px; overflow: hidden;">
  <view class="simulated-media" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #94a3b8;">
    [Media Surface Area]
  </view>
  <cover-view class="cover-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 12px;">
    ● Live Stream Overlay
  </cover-view>
  <cover-view class="cover-actions" style="position: absolute; bottom: 12px; right: 12px; background: #2563eb; color: #fff; padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 600;">
    Overlay Button
  </cover-view>
</view>`,
        js: `Page({ data: {} });`,
        css: `.media-container { width: 100%; box-sizing: border-box; }`
      }
    ]
  },

  'view/cover-image': {
    titleEn: 'cover-image',
    titleZh: '覆盖图片视图',
    samples: [
      {
        id: 1,
        titleEn: '1. Cover Image Overlay on Media Component',
        titleZh: '1. 原生组件上的图片覆盖',
        maml: `<view class="media-container" style="position: relative; height: 160px; background: #1e293b; border-radius: 10px;">
  <cover-image class="cover-logo" src="https://img.icons8.com/color/96/play--v1.png" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 48px; height: 48px;" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.cover-logo { pointer-events: auto; }`
      }
    ]
  },

  'base/text': {
    titleEn: 'text',
    titleZh: '文本',
    samples: [
      {
        id: 1,
        titleEn: '1. Basic Text & Selectable Text',
        titleZh: '1. 基础文本与长按可选文本',
        maml: `<view class="text-group">
  <text class="text-headline">Standard Headline Text</text>
  <text class="text-sub">Regular secondary description text paragraph.</text>
  <text selectable="true" class="text-selectable">This text is selectable (user-select / selectable=true)</text>
</view>`,
        js: `Page({ data: {} });`,
        css: `.text-group { display: flex; flex-direction: column; gap: 8px; }
.text-headline { font-size: 17px; font-weight: 700; color: #0f172a; }
.text-sub { font-size: 13px; color: #64748b; }
.text-selectable { font-size: 13px; color: #2563eb; background: #eff6ff; padding: 6px 10px; border-radius: 6px; border: 1px dashed #bfdbfe; }`
      },
      {
        id: 2,
        titleEn: '2. Continuous Space Display (ensp, emsp, nbsp)',
        titleZh: '2. 空格排版格式',
        maml: `<view class="text-group">
  <text space="ensp">Half-width   space   (ensp)</text>
  <text space="emsp">Full-width   space   (emsp)</text>
  <text space="nbsp">Non-breaking   space   (nbsp)</text>
</view>`,
        js: `Page({ data: {} });`,
        css: `.text-group text { font-size: 14px; color: #334155; }`
      }
    ]
  },

  'base/icon': {
    titleEn: 'icon',
    titleZh: '图标',
    samples: [
      {
        id: 1,
        titleEn: '1. Standard System Icons',
        titleZh: '1. 常用系统图标',
        maml: `<view class="icon-grid">
  <view class="icon-item"><icon type="success" size="32" /><text>success</text></view>
  <view class="icon-item"><icon type="info" size="32" /><text>info</text></view>
  <view class="icon-item"><icon type="warn" size="32" /><text>warn</text></view>
  <view class="icon-item"><icon type="waiting" size="32" /><text>waiting</text></view>
  <view class="icon-item"><icon type="cancel" size="32" /><text>cancel</text></view>
  <view class="icon-item"><icon type="search" size="32" /><text>search</text></view>
</view>`,
        js: `Page({ data: {} });`,
        css: `.icon-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.icon-item { width: 70px; display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 11px; color: #64748b; }`
      },
      {
        id: 2,
        titleEn: '2. Custom Icon Sizes and Colors',
        titleZh: '2. 自定义图标大小与颜色',
        maml: `<view class="demo-row" style="display: flex; align-items: center; gap: 16px;">
  <icon type="success" size="24" color="#10b981" />
  <icon type="success" size="36" color="#3b82f6" />
  <icon type="success" size="48" color="#f59e0b" />
  <icon type="success" size="60" color="#ef4444" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.demo-row { margin-top: 8px; }`
      }
    ]
  },

  'base/rich-text': {
    titleEn: 'rich-text',
    titleZh: '富文本',
    samples: [
      {
        id: 1,
        titleEn: '1. HTML String Rendering',
        titleZh: '1. HTML 字符串富文本渲染',
        maml: `<rich-text nodes="{{htmlSnippet}}" space="nbsp" />`,
        js: `Page({
  data: {
    htmlSnippet: '<div style="background:#eff6ff;padding:12px;border-radius:8px;"><h4 style="color:#1d4ed8;margin:0 0 6px 0;">Macle HTML RichText</h4><p style="color:#334155;font-size:13px;margin:0;">Render formatted HTML strings with <b>bold tags</b> and <span style="color:#ef4444;">colored highlights</span>.</p></div>'
  }
});`,
        css: `rich-text { display: block; }`
      },
      {
        id: 2,
        titleEn: '2. Node Array Structure',
        titleZh: '2. 节点对象数组富文本',
        maml: `<rich-text nodes="{{nodeArray}}" />`,
        js: `Page({
  data: {
    nodeArray: [{
      name: 'div',
      attrs: { class: 'custom-node-box', style: 'color:#059669;font-weight:bold;font-size:14px;' },
      children: [{ type: 'text', text: '✓ Rendered via Structured Node Array' }]
    }]
  }
});`,
        css: `.custom-node-box { padding: 8px; }`
      }
    ]
  },

  'base/progress': {
    titleEn: 'progress',
    titleZh: '进度条',
    samples: [
      {
        id: 1,
        titleEn: '1. Basic Progress Bar with Percentage',
        titleZh: '1. 基础进度条与百分比显示',
        maml: `<view class="progress-col">
  <progress percent="30" show-info="true" stroke-width="4" />
  <progress percent="65" show-info="true" stroke-width="6" active-color="#3b82f6" />
  <progress percent="90" show-info="true" stroke-width="8" active-color="#10b981" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.progress-col { display: flex; flex-direction: column; gap: 16px; }`
      },
      {
        id: 2,
        titleEn: '2. Animated & Custom Stroke/Color Progress',
        titleZh: '2. 动画效果与自定义颜色尺寸',
        maml: `<view class="progress-col">
  <progress percent="{{animPercent}}" show-info="true" active="true" active-mode="forwards" stroke-width="8" border-radius="4" active-color="#8b5cf6" />
  <button size="mini" type="default" bindtap="increaseProgress" style="align-self: flex-start; margin-top: 8px;">+20% Progress</button>
</view>`,
        js: `Page({
  data: { animPercent: 40 },
  increaseProgress() {
    let next = this.data.animPercent + 20;
    if (next > 100) next = 20;
    this.setData({ animPercent: next });
  }
});`,
        css: `.progress-col { display: flex; flex-direction: column; gap: 10px; }`
      }
    ]
  },

  'form/button': {
    titleEn: 'button',
    titleZh: '按钮',
    samples: [
      {
        id: 1,
        titleEn: '1. Default Button (Normal & Disabled)',
        titleZh: '1. 默认按钮（普通与禁用）',
        maml: `<view class="btn-group">
  <button type="default" hover-start-time="200" hover-stay-time="500">Normal Default</button>
  <button type="default" disabled="true">Default Disabled</button>
</view>`,
        js: `Page({ data: {} });`,
        css: `.btn-group { display: flex; flex-direction: column; gap: 10px; }`
      },
      {
        id: 2,
        titleEn: '2. Warn Button (Normal & Disabled)',
        titleZh: '2. 警告按钮（普通与禁用）',
        maml: `<view class="btn-group">
  <button type="warn">Warn Action</button>
  <button type="warn" disabled="true">Warn Disabled</button>
</view>`,
        js: `Page({ data: {} });`,
        css: `.btn-group { display: flex; flex-direction: column; gap: 10px; }`
      },
      {
        id: 3,
        titleEn: '3. Primary Button & Form Actions',
        titleZh: '3. 主要按钮与表单操作',
        maml: `<view class="btn-group">
  <button type="primary" bindtap="handlePrimaryTap">Primary Button</button>
  <button type="primary" size="mini" style="align-self: flex-start;">Mini Primary</button>
</view>`,
        js: `Page({
  handlePrimaryTap() { ma.showToast({ title: 'Tapped Primary', icon: 'success' }); }
});`,
        css: `.btn-group { display: flex; flex-direction: column; gap: 10px; }`
      }
    ]
  },

  'form/checkbox': {
    titleEn: 'checkbox',
    titleZh: '多选框',
    samples: [
      {
        id: 1,
        titleEn: '1. Single Checkbox with Checked State & Color',
        titleZh: '1. 单个多选框与自定义颜色',
        maml: `<view class="checkbox-demo">
  <label class="cb-row">
    <checkbox value="agree" checked="{{isAgree}}" bindchange="onAgreeChange" color="#2563eb" />
    <text class="cb-label">I agree to the Terms of Service</text>
  </label>
</view>`,
        js: `Page({
  data: { isAgree: true },
  onAgreeChange(e) {
    this.setData({ isAgree: !this.data.isAgree });
  }
});`,
        css: `.cb-row { display: flex; align-items: center; gap: 8px; font-size: 14px; }`
      }
    ]
  },

  'form/checkbox-group': {
    titleEn: 'checkbox-group',
    titleZh: '多选框组',
    samples: [
      {
        id: 1,
        titleEn: '1. Multi-Select Checkbox Group with Change Handler',
        titleZh: '1. 多选框组合并处理选择事件',
        maml: `<checkbox-group bindchange="onCheckboxChange">
  <view class="cb-list">
    <label class="cb-item" ma:for="{{options}}" ma:key="{{item.value}}">
      <checkbox value="{{item.value}}" checked="{{item.checked}}" color="#0284c7" />
      <text>{{item.label}}</text>
    </label>
  </view>
</checkbox-group>
<view class="selected-text">Selected: {{selectedList}}</view>`,
        js: `Page({
  data: {
    options: [
      { value: 'JS', label: 'JavaScript', checked: true },
      { value: 'TS', label: 'TypeScript', checked: true },
      { value: 'REACT', label: 'React / Taro' },
      { value: 'MAML', label: 'Native MAML' }
    ],
    selectedList: 'JS, TS'
  },
  onCheckboxChange(e) {
    this.setData({ selectedList: e.detail.value.join(', ') });
  }
});`,
        css: `.cb-list { display: flex; flex-direction: column; gap: 10px; }
.cb-item { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.selected-text { margin-top: 12px; font-size: 13px; color: #0284c7; font-weight: 600; }`
      }
    ]
  },

  'form/form': {
    titleEn: 'form',
    titleZh: '表单',
    samples: [
      {
        id: 1,
        titleEn: '1. Form Container with Submit & Reset Handlers',
        titleZh: '1. 表单容器提交与重置',
        maml: `<form bindsubmit="onFormSubmit" bindreset="onFormReset">
  <view class="form-field">
    <text class="form-label">Username:</text>
    <input name="username" class="form-input" placeholder="Enter username" />
  </view>
  <view class="form-field">
    <text class="form-label">Notifications:</text>
    <switch name="notify" checked="true" color="#2563eb" />
  </view>
  <view class="form-actions">
    <button form-type="submit" type="primary" size="mini">Submit</button>
    <button form-type="reset" type="default" size="mini">Reset</button>
  </view>
</form>`,
        js: `Page({
  onFormSubmit(e) {
    ma.showModal({ title: 'Form Submitted', content: JSON.stringify(e.detail.value), showCancel: false });
  },
  onFormReset() {
    ma.showToast({ title: 'Form Reset', icon: 'none' });
  }
});`,
        css: `.form-field { margin-bottom: 14px; }
.form-label { font-size: 13px; color: #475569; margin-bottom: 6px; display: block; }
.form-input { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; font-size: 14px; }
.form-actions { display: flex; gap: 10px; margin-top: 10px; }`
      }
    ]
  },

  'form/input': {
    titleEn: 'input',
    titleZh: '输入框',
    samples: [
      {
        id: 1,
        titleEn: '1. Text Input with Placeholder',
        titleZh: '1. 文本输入框与占位提示',
        maml: `<view class="input-block">
  <input class="std-input" placeholder="Standard text input..." bindinput="onInputSync" />
  <text class="input-val-preview">Current Input: {{currentVal}}</text>
</view>`,
        js: `Page({
  data: { currentVal: '' },
  onInputSync(e) { this.setData({ currentVal: e.detail.value }); }
});`,
        css: `.std-input { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 14px; background: #fff; }
.input-val-preview { font-size: 12px; color: #64748b; margin-top: 6px; display: block; }`
      },
      {
        id: 2,
        titleEn: '2. Password, Number & Digit Input Types',
        titleZh: '2. 密码、数字与小数输入类型',
        maml: `<view class="input-col">
  <input class="std-input" password="true" placeholder="Password input" />
  <input class="std-input" type="number" placeholder="Number keyboard input" />
  <input class="std-input" type="digit" placeholder="Decimal digit keyboard input" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.input-col { display: flex; flex-direction: column; gap: 10px; }
.std-input { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 14px; background: #fff; }`
      },
      {
        id: 3,
        titleEn: '3. Focus, Maxlength & Confirm Type',
        titleZh: '3. 聚焦、最大长度与键盘按钮',
        maml: `<input class="std-input" maxlength="10" confirm-type="done" placeholder="Maxlength 10 chars" />`,
        js: `Page({ data: {} });`,
        css: `.std-input { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 14px; background: #fff; }`
      }
    ]
  },

  'form/picker': {
    titleEn: 'picker',
    titleZh: '选择器',
    samples: [
      {
        id: 1,
        titleEn: '1. Normal Selector (Single Column)',
        titleZh: '1. 普通单列选择器',
        maml: `<picker mode="selector" range="{{fruits}}" value="{{fruitIdx}}" bindchange="onFruitChange">
  <view class="picker-display">Selected Fruit: <text class="highlight">{{fruits[fruitIdx]}}</text></view>
</picker>`,
        js: `Page({
  data: { fruits: ['Apple', 'Banana', 'Orange', 'Strawberry'], fruitIdx: 0 },
  onFruitChange(e) { this.setData({ fruitIdx: e.detail.value }); }
});`,
        css: `.picker-display { background: #fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 14px; }
.highlight { color: #2563eb; font-weight: bold; margin-left: 6px; }`
      },
      {
        id: 2,
        titleEn: '2. Multi-Column Selector',
        titleZh: '2. 多列选择器',
        maml: `<picker mode="multiSelector" range="{{multiRange}}" value="{{multiIdx}}" bindchange="onMultiChange">
  <view class="picker-display">Region: <text class="highlight">{{multiRange[0][multiIdx[0]]}} - {{multiRange[1][multiIdx[1]]}}</text></view>
</picker>`,
        js: `Page({
  data: {
    multiRange: [['Asia', 'Europe', 'Americas'], ['China', 'Japan', 'Korea']],
    multiIdx: [0, 0]
  },
  onMultiChange(e) { this.setData({ multiIdx: e.detail.value }); }
});`,
        css: `.picker-display { background: #fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 14px; }
.highlight { color: #2563eb; font-weight: bold; }`
      },
      {
        id: 3,
        titleEn: '3. Time & Date Selector',
        titleZh: '3. 时间与日期选择器',
        maml: `<picker mode="date" value="{{selectedDate}}" start="2020-01-01" end="2030-12-31" bindchange="onDateChange">
  <view class="picker-display">Date: <text class="highlight">{{selectedDate}}</text></view>
</picker>`,
        js: `Page({
  data: { selectedDate: '2026-11-07' },
  onDateChange(e) { this.setData({ selectedDate: e.detail.value }); }
});`,
        css: `.picker-display { background: #fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 14px; }
.highlight { color: #2563eb; font-weight: bold; }`
      }
    ]
  },

  'form/picker-view': {
    titleEn: 'picker-view',
    titleZh: '嵌入选择器',
    samples: [
      {
        id: 1,
        titleEn: '1. Embedded Multi-Column Picker View',
        titleZh: '1. 嵌入页面的多列滚动选择视图',
        maml: `<view>
  <view class="preview-date">{{year}}年 {{month}}月 {{day}}日</view>
  <picker-view indicator-style="height: 50px;" style="width: 100%; height: 200px; background: #fff; border-radius: 8px;" value="{{val}}" bindchange="onPickerViewChange">
    <picker-view-column>
      <view ma:for="{{years}}" ma:key="{{item}}" style="line-height: 50px; text-align: center;">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view ma:for="{{months}}" ma:key="{{item}}" style="line-height: 50px; text-align: center;">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view ma:for="{{days}}" ma:key="{{item}}" style="line-height: 50px; text-align: center;">{{item}}日</view>
    </picker-view-column>
  </picker-view>
</view>`,
        js: `Page({
  data: {
    years: [2024, 2025, 2026, 2027],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30],
    val: [2, 10, 6],
    year: 2026, month: 11, day: 7
  },
  onPickerViewChange(e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    });
  }
});`,
        css: `.preview-date { text-align: center; font-size: 16px; font-weight: bold; color: #2563eb; margin-bottom: 12px; }`
      }
    ]
  },

  'form/picker-view-column': {
    titleEn: 'picker-view-column',
    titleZh: '选择器列',
    samples: [
      {
        id: 1,
        titleEn: '1. Picker View Column Layout',
        titleZh: '1. 滚动选择器列结构',
        maml: `<picker-view indicator-style="height: 40px;" style="height: 120px; background: #fff;">
  <picker-view-column>
    <view style="line-height: 40px; text-align: center;">Option 1</view>
    <view style="line-height: 40px; text-align: center;">Option 2</view>
    <view style="line-height: 40px; text-align: center;">Option 3</view>
  </picker-view-column>
</picker-view>`,
        js: `Page({ data: {} });`,
        css: `picker-view { border-radius: 8px; }`
      }
    ]
  },

  'form/label': {
    titleEn: 'label',
    titleZh: '标签',
    samples: [
      {
        id: 1,
        titleEn: '1. Label with for Attribute Binding',
        titleZh: '1. 绑定组件 ID 的标签',
        maml: `<view class="label-demo">
  <checkbox id="agree-cb" color="#2563eb" />
  <label for="agree-cb" class="bound-label">Tap this label text to toggle checkbox</label>
</view>`,
        js: `Page({ data: {} });`,
        css: `.label-demo { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.bound-label { color: #1e293b; cursor: pointer; }`
      },
      {
        id: 2,
        titleEn: '2. Label Encapsulating Controls',
        titleZh: '2. 包裹表单控件扩大点击区域',
        maml: `<label class="enclosing-label">
  <radio value="r1" checked="true" color="#10b981" />
  <text style="margin-left: 8px; font-size: 14px;">Enclosed Radio inside Label</text>
</label>`,
        js: `Page({ data: {} });`,
        css: `.enclosing-label { display: flex; align-items: center; padding: 10px; background: #fff; border-radius: 6px; }`
      }
    ]
  },

  'form/switch': {
    titleEn: 'switch',
    titleZh: '开关',
    samples: [
      {
        id: 1,
        titleEn: '1. Switch Selector with Change Event',
        titleZh: '1. 开关选择器与状态变化事件',
        maml: `<view class="switch-row">
  <text class="sw-title">Notification Enabled:</text>
  <switch checked="{{isEnabled}}" bindchange="onSwitchToggle" color="#2563eb" />
</view>`,
        js: `Page({
  data: { isEnabled: true },
  onSwitchToggle(e) {
    this.setData({ isEnabled: e.detail.value });
    ma.showToast({ title: e.detail.value ? 'Enabled' : 'Disabled', icon: 'none' });
  }
});`,
        css: `.switch-row { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 12px; border-radius: 8px; }
.sw-title { font-size: 14px; font-weight: 500; }`
      },
      {
        id: 2,
        titleEn: '2. Checkbox Style Switch & Custom Color',
        titleZh: '2. 方形样式开关与自定义颜色',
        maml: `<view class="switch-row">
  <text class="sw-title">Checkbox Style Switch:</text>
  <switch type="checkbox" checked="true" color="#10b981" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.switch-row { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 12px; border-radius: 8px; }`
      }
    ]
  },

  'form/radio': {
    titleEn: 'radio',
    titleZh: '单选框',
    samples: [
      {
        id: 1,
        titleEn: '1. Single Radio Button',
        titleZh: '1. 单选框按钮',
        maml: `<view class="radio-row">
  <radio value="single" checked="true" color="#2563eb" />
  <text style="margin-left: 8px; font-size: 14px;">Standalone Checked Radio</text>
</view>`,
        js: `Page({ data: {} });`,
        css: `.radio-row { display: flex; align-items: center; font-size: 14px; }`
      }
    ]
  },

  'form/radio-group': {
    titleEn: 'radio-group',
    titleZh: '单选框组',
    samples: [
      {
        id: 1,
        titleEn: '1. Radio Group with Exclusive Selection',
        titleZh: '1. 单项选择器组与切换事件',
        maml: `<radio-group bindchange="onRadioChange">
  <view class="radio-list">
    <label class="radio-item" ma:for="{{plans}}" ma:key="{{item.id}}">
      <radio value="{{item.id}}" checked="{{item.id === currentPlan}}" color="#2563eb" />
      <text class="radio-label">{{item.name}} ({{item.price}})</text>
    </label>
  </view>
</radio-group>
<view class="selected-plan">Selected: {{currentPlan}}</view>`,
        js: `Page({
  data: {
    plans: [
      { id: 'free', name: 'Free Tier', price: '$0' },
      { id: 'pro', name: 'Pro Plan', price: '$19/mo' },
      { id: 'team', name: 'Team Enterprise', price: '$49/mo' }
    ],
    currentPlan: 'pro'
  },
  onRadioChange(e) { this.setData({ currentPlan: e.detail.value }); }
});`,
        css: `.radio-list { display: flex; flex-direction: column; gap: 10px; }
.radio-item { display: flex; align-items: center; gap: 8px; font-size: 14px; background: #fff; padding: 10px; border-radius: 6px; }
.selected-plan { margin-top: 10px; font-size: 13px; color: #2563eb; font-weight: 600; }`
      }
    ]
  },

  'form/slider': {
    titleEn: 'slider',
    titleZh: '滑块',
    samples: [
      {
        id: 1,
        titleEn: '1. Slider with Min, Max & Show-Value',
        titleZh: '1. 滑块选择器与数值显示',
        maml: `<view class="slider-box">
  <slider min="0" max="100" value="{{volume}}" show-value="true" bindchange="onSliderChange" active-color="#2563eb" />
  <text class="slider-text">Volume: {{volume}}%</text>
</view>`,
        js: `Page({
  data: { volume: 50 },
  onSliderChange(e) { this.setData({ volume: e.detail.value }); }
});`,
        css: `.slider-box { background: #fff; padding: 12px; border-radius: 8px; }
.slider-text { font-size: 12px; color: #64748b; margin-top: 4px; display: block; }`
      },
      {
        id: 2,
        titleEn: '2. Step Slider with Custom Colors',
        titleZh: '2. 步长滑块与自定义主题色',
        maml: `<view class="slider-box">
  <slider step="10" value="30" show-value="true" active-color="#10b981" block-color="#059669" block-size="20" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.slider-box { background: #fff; padding: 12px; border-radius: 8px; }`
      }
    ]
  },

  'form/textarea': {
    titleEn: 'textarea',
    titleZh: '多行输入',
    samples: [
      {
        id: 1,
        titleEn: '1. Multi-Line Textarea with Placeholder',
        titleZh: '1. 多行文本输入框与占位符',
        maml: `<view class="textarea-wrp">
  <textarea class="std-textarea" placeholder="Enter comments or description..." bindinput="onTextareaInput" maxlength="200" />
  <view class="char-count">{{charLen}} / 200</view>
</view>`,
        js: `Page({
  data: { charLen: 0 },
  onTextareaInput(e) { this.setData({ charLen: (e.detail.value || '').length }); }
});`,
        css: `.textarea-wrp { background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; }
.std-textarea { width: 100%; height: 90px; font-size: 14px; }
.char-count { text-align: right; font-size: 11px; color: #94a3b8; margin-top: 4px; }`
      },
      {
        id: 2,
        titleEn: '2. Auto-Height Textarea with Maxlength',
        titleZh: '2. 自动增高多行输入框与字数限制',
        maml: `<view class="textarea-wrp">
  <textarea auto-height="true" placeholder="Auto-height textarea expanding with lines" class="std-textarea" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.textarea-wrp { background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; }
.std-textarea { width: 100%; min-height: 40px; font-size: 14px; }`
      }
    ]
  },

  'navigating/navigator': {
    titleEn: 'navigator',
    titleZh: '页面跳转',
    samples: [
      {
        id: 1,
        titleEn: '1. Page Navigation (open-type="navigate")',
        titleZh: '1. 保留当前页面跳转',
        maml: `<view class="nav-container">
  <navigator url="/pages/button/index" open-type="navigate" hover-class="nav-hover" class="nav-btn">
    👉 Navigate to Button Component Page
  </navigator>
  <navigator url="/pages/input/index" open-type="navigate" hover-class="nav-hover" class="nav-btn">
    👉 Navigate to Input Component Page
  </navigator>
</view>`,
        js: `Page({ data: {} });`,
        css: `.nav-container { display: flex; flex-direction: column; gap: 10px; }
.nav-btn { background: #fff; border: 1px solid #cbd5e1; padding: 12px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #2563eb; }
.nav-hover { background: #f1f5f9; }`
      },
      {
        id: 2,
        titleEn: '2. Page Redirect (open-type="redirect")',
        titleZh: '2. 关闭当前页面跳转',
        maml: `<navigator url="/pages/view/index" open-type="redirect" class="nav-btn">
  🔄 Redirect to View Page (Close Current)
</navigator>`,
        js: `Page({ data: {} });`,
        css: `.nav-btn { background: #fff; border: 1px solid #cbd5e1; padding: 12px 14px; border-radius: 8px; font-size: 14px; color: #2563eb; }`
      }
    ]
  },

  'media/image': {
    titleEn: 'image',
    titleZh: '图片',
    samples: [
      {
        id: 1,
        titleEn: '1. Image Scaling Modes (scaleToFill, aspectFit, aspectFill)',
        titleZh: '1. 常用图片缩放模式',
        maml: `<view class="img-grid">
  <view class="img-card">
    <image class="demo-img" mode="aspectFit" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
    <text class="img-label">mode="aspectFit"</text>
  </view>
  <view class="img-card">
    <image class="demo-img" mode="aspectFill" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
    <text class="img-label">mode="aspectFill"</text>
  </view>
</view>`,
        js: `Page({ data: {} });`,
        css: `.img-grid { display: flex; gap: 12px; }
.img-card { flex: 1; background: #fff; padding: 8px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center; }
.demo-img { width: 100%; height: 110px; border-radius: 6px; background: #f8fafc; }
.img-label { font-size: 11px; color: #64748b; margin-top: 6px; display: block; }`
      },
      {
        id: 2,
        titleEn: '2. Local & Remote Image Source',
        titleZh: '2. 本地与网络图片资源加载',
        maml: `<view class="img-box">
  <image class="wide-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" mode="widthFix" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.wide-img { width: 100%; border-radius: 8px; }`
      }
    ]
  },

  'media/video': {
    titleEn: 'video',
    titleZh: '视频',
    samples: [
      {
        id: 1,
        titleEn: '1. Video Player with Controls & Poster',
        titleZh: '1. 视频播放器与控制条封面',
        maml: `<view class="video-container">
  <video id="myVideo" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80" controls="true" style="width: 100%; height: 200px; border-radius: 8px;" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.video-container { width: 100%; border-radius: 8px; overflow: hidden; }`
      }
    ]
  },

  'media/audio': {
    titleEn: 'audio',
    titleZh: '音频',
    samples: [
      {
        id: 1,
        titleEn: '1. Audio Player with Playback Controls',
        titleZh: '1. 音频播放器与控制面板',
        maml: `<view class="audio-container">
  <audio id="myAudio" name="Sample Audio Track" author="Macle OpenDoc" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls="true" style="width: 100%;" />
</view>`,
        js: `Page({ data: {} });`,
        css: `.audio-container { background: #fff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }`
      }
    ]
  },

  'media/camera': {
    titleEn: 'camera',
    titleZh: '相机',
    samples: [
      {
        id: 1,
        titleEn: '1. Camera Viewfinder with Device Position & Flash',
        titleZh: '1. 系统相机取景器与前后置闪光灯',
        maml: `<view class="camera-wrapper">
  <camera device-position="back" flash="off" style="width: 100%; height: 220px; border-radius: 8px; overflow: hidden;">
    <cover-view style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.6); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px;">
      Device: Back | Flash: Off
    </cover-view>
  </camera>
</view>`,
        js: `Page({ data: {} });`,
        css: `.camera-wrapper { width: 100%; border-radius: 8px; overflow: hidden; }`
      }
    ]
  },

  'openCapability/web-view': {
    titleEn: 'web-view',
    titleZh: '网页容器',
    samples: [
      {
        id: 1,
        titleEn: '1. Full-Screen Web Browser View',
        titleZh: '1. 内嵌网页全屏容器',
        maml: `<web-view src="https://example.com" />`,
        js: `Page({ data: {} });`,
        css: `web-view { width: 100%; height: 100%; }`
      }
    ]
  },

  'pageConfig/page-meta': {
    titleEn: 'page-meta',
    titleZh: '页面配置',
    samples: [
      {
        id: 1,
        titleEn: '1. Dynamic Page Meta Configuration',
        titleZh: '1. 动态页面属性配置',
        maml: `<page-meta background-color="#f8fafc" page-style="padding: 12px;" />
<view class="meta-content">
  <text class="meta-title">Page Meta Defined</text>
  <text class="meta-desc">Configures root page styling dynamically.</text>
</view>`,
        js: `Page({ data: {} });`,
        css: `.meta-content { background: #fff; padding: 16px; border-radius: 8px; }
.meta-title { font-weight: bold; font-size: 15px; color: #1e293b; }
.meta-desc { font-size: 13px; color: #64748b; margin-top: 4px; display: block; }`
      }
    ]
  },

  'map/map': {
    titleEn: 'map',
    titleZh: '地图',
    samples: [
      {
        id: 1,
        titleEn: '1. Interactive Map with Markers & Coordinates',
        titleZh: '1. 地图展示与标记点标注',
        maml: `<map latitude="{{latitude}}" longitude="{{longitude}}" markers="{{markers}}" scale="14" style="width: 100%; height: 220px; border-radius: 8px; overflow: hidden;" />`,
        js: `Page({
  data: {
    latitude: 31.2304,
    longitude: 121.4737,
    markers: [{
      id: 1,
      latitude: 31.2304,
      longitude: 121.4737,
      name: 'Macle Headquarters'
    }]
  }
});`,
        css: `map { width: 100%; border-radius: 8px; }`
      }
    ]
  }
};

/**
 * Update Markdown files and HTML files
 */
function updateDocs() {
  console.log('--- Updating Component Documentation Sample Codes ---');
  let updatedCount = 0;

  for (const [key, spec] of Object.entries(componentSpecs)) {
    const enMdPath = path.join(EN_MD_DIR, `${key}.md`);
    const zhMdPath = path.join(ZH_MD_DIR, `${key}.md`);
    const enHtmlPath = path.join(EN_HTML_DIR, `${key}.html`);
    const zhHtmlPath = path.join(ZH_HTML_DIR, `${key}.html`);

    // Generate Markdown Sections
    let enMdSection = '### Sample Code\n\n';
    let zhMdSection = '### 示例代码\n\n';

    let enHtmlSection = '<h3 id="sample-code">Sample Code</h3>\n';
    let zhHtmlSection = '<h3 id="示例代码">示例代码</h3>\n';

    spec.samples.forEach(sample => {
      // EN Markdown
      enMdSection += `#### ${sample.titleEn}\n\n`;
      enMdSection += '```html\n' + sample.maml.trim() + '\n```\n\n';
      if (sample.js) {
        enMdSection += '```js\n' + sample.js.trim() + '\n```\n\n';
      }
      if (sample.css) {
        enMdSection += '```css\n' + sample.css.trim() + '\n```\n\n';
      }

      // ZH Markdown
      zhMdSection += `#### ${sample.titleZh}\n\n`;
      zhMdSection += '```html\n' + sample.maml.trim() + '\n```\n\n';
      if (sample.js) {
        zhMdSection += '```js\n' + sample.js.trim() + '\n```\n\n';
      }
      if (sample.css) {
        zhMdSection += '```css\n' + sample.css.trim() + '\n```\n\n';
      }

      // EN HTML
      enHtmlSection += `<h4 id="sample-code-${sample.id}">${escapeHtml(sample.titleEn)}</h4>\n`;
      enHtmlSection += `<pre><code class="language-html">${escapeHtml(sample.maml.trim())}</code></pre>\n`;
      if (sample.js) {
        enHtmlSection += `<pre><code class="language-js">${escapeHtml(sample.js.trim())}</code></pre>\n`;
      }
      if (sample.css) {
        enHtmlSection += `<pre><code class="language-css">${escapeHtml(sample.css.trim())}</code></pre>\n`;
      }

      // ZH HTML
      zhHtmlSection += `<h4 id="sample-code-${sample.id}">${escapeHtml(sample.titleZh)}</h4>\n`;
      zhHtmlSection += `<pre><code class="language-html">${escapeHtml(sample.maml.trim())}</code></pre>\n`;
      if (sample.js) {
        zhHtmlSection += `<pre><code class="language-js">${escapeHtml(sample.js.trim())}</code></pre>\n`;
      }
      if (sample.css) {
        zhHtmlSection += `<pre><code class="language-css">${escapeHtml(sample.css.trim())}</code></pre>\n`;
      }
    });

    // Update EN MD
    if (fs.existsSync(enMdPath)) {
      replaceSampleCodeInFile(enMdPath, enMdSection, false);
    }
    // Update ZH MD
    if (fs.existsSync(zhMdPath)) {
      replaceSampleCodeInFile(zhMdPath, zhMdSection, false);
    }
    // Update EN HTML
    if (fs.existsSync(enHtmlPath)) {
      replaceSampleCodeInFile(enHtmlPath, enHtmlSection, true);
    }
    // Update ZH HTML
    if (fs.existsSync(zhHtmlPath)) {
      replaceSampleCodeInFile(zhHtmlPath, zhHtmlSection, true);
    }

    updatedCount++;
    console.log(`Updated ${key} (${spec.samples.length} samples)`);
  }

  console.log(`Successfully updated ${updatedCount} component documents.`);
}

function replaceSampleCodeInFile(filePath, newSection, isHtml) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (isHtml) {
    // Find <h3 id="sample..."> or <h3 id="示例...">
    const startRegex = /<h3[^>]*id="(?:sample|示例)[^>]*>[\s\S]*?<\/h3>/i;
    const startMatch = content.match(startRegex);
    if (!startMatch) {
      // Append if not found
      content += '\n' + newSection;
      fs.writeFileSync(filePath, content, 'utf8');
      return;
    }

    const startIndex = startMatch.index;
    // Find next <h2 or <h3 that isn't sample
    const rest = content.substring(startIndex + startMatch[0].length);
    const nextHRegex = /<h[23][^>]*id="(?!sample-code-)[^>]*>/i;
    const nextMatch = rest.match(nextHRegex);

    if (nextMatch) {
      const endIndex = startIndex + startMatch[0].length + nextMatch.index;
      content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
    } else {
      content = content.substring(0, startIndex) + newSection;
    }
  } else {
    // Markdown
    const startRegex = /###\s+(?:Sample Code|示例代码)/i;
    const startMatch = content.match(startRegex);
    if (!startMatch) {
      content += '\n\n' + newSection;
      fs.writeFileSync(filePath, content, 'utf8');
      return;
    }

    const startIndex = startMatch.index;
    const rest = content.substring(startIndex + startMatch[0].length);
    const nextHRegex = /\n###?\s+(?!#[0-9]|\d+\.)[^\n]+/i;
    const nextMatch = rest.match(nextHRegex);

    if (nextMatch) {
      const endIndex = startIndex + startMatch[0].length + nextMatch.index;
      content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
    } else {
      content = content.substring(0, startIndex) + newSection;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

if (require.main === module) {
  updateDocs();
}

module.exports = { componentSpecs, updateDocs };
