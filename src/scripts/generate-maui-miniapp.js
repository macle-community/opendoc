const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../..');
const MINIAPP_DIR = path.join(ROOT_DIR, 'miniapp');
const TARO_DIR = path.join(ROOT_DIR, 'miniapp-taro');
const TARO_SRC = path.join(TARO_DIR, 'src');

/**
 * 27 MAUI Component Specifications with Numbered Samples
 */
const mauiComponentSpecs = {
  'maui-button': {
    name: 'maui-button',
    docPath: 'Button',
    title: 'Button 按钮',
    category: 'Basic Components',
    samples: [
      {
        num: 1,
        title: 'Button type',
        maml: `<view class="btn-wrap">
  <maui-button type="default">default button</maui-button>
  <maui-button type="primary">primary button</maui-button>
  <maui-button type="info">information button</maui-button>
  <maui-button type="warning">warning button</maui-button>
  <maui-button type="danger">danger button</maui-button>
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton type="default">default button</MauiButton>
  <MauiButton type="primary">primary button</MauiButton>
  <MauiButton type="info">information button</MauiButton>
  <MauiButton type="warning">warning button</MauiButton>
  <MauiButton type="danger">danger button</MauiButton>
</View>`
      },
      {
        num: 2,
        title: 'Plain button & Hairline border',
        maml: `<view class="btn-wrap">
  <maui-button plain type="primary">plain primary</maui-button>
  <maui-button plain hairline type="info">hairline info</maui-button>
  <maui-button plain hairline type="danger">hairline danger</maui-button>
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton plain type="primary">plain primary</MauiButton>
  <MauiButton plain hairline type="info">hairline info</MauiButton>
  <MauiButton plain hairline type="danger">hairline danger</MauiButton>
</View>`
      },
      {
        num: 3,
        title: 'Disabled & Loading state',
        maml: `<view class="btn-wrap">
  <maui-button disabled type="primary">disabled</maui-button>
  <maui-button loading type="primary" />
  <maui-button loading type="info" loading-text="Loading..." />
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton disabled type="primary">disabled</MauiButton>
  <MauiButton loading type="primary" />
  <MauiButton loading type="info" loadingText="Loading..." />
</View>`
      },
      {
        num: 4,
        title: 'Button shape & size & custom color',
        maml: `<view class="btn-wrap">
  <maui-button round type="info">round button</maui-button>
  <maui-button square type="primary">square button</maui-button>
  <maui-button type="primary" size="small">small</maui-button>
  <maui-button color="#7232dd">single-color</maui-button>
  <maui-button block type="primary" style="margin-top: 10px;">block-level button</maui-button>
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton round type="info">round button</MauiButton>
  <MauiButton square type="primary">square button</MauiButton>
  <MauiButton type="primary" size="small">small</MauiButton>
  <MauiButton color="#7232dd">single-color</MauiButton>
  <MauiButton block type="primary" style={{ marginTop: '10px' }}>block-level button</MauiButton>
</View>`
      }
    ]
  },

  'maui-cell': {
    name: 'maui-cell',
    docPath: 'Cell',
    title: 'Cell 单元格',
    category: 'Basic Components',
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Description',
        maml: `<maui-cell-group>
  <maui-cell title="Cell title" value="Content" />
  <maui-cell title="Cell title" value="Content" label="Description" />
</maui-cell-group>`,
        taro: `<MauiCellGroup>
  <MauiCell title="Cell title" value="Content" />
  <MauiCell title="Cell title" value="Content" label="Description" />
</MauiCellGroup>`
      },
      {
        num: 2,
        title: 'Cell Size & Navigation Links',
        maml: `<maui-cell-group>
  <maui-cell title="Large Cell" value="Content" size="large" label="Description" />
  <maui-cell title="Navigation Link" is-link />
  <maui-cell title="Value Link" is-link value="Detail" />
</maui-cell-group>`,
        taro: `<MauiCellGroup>
  <MauiCell title="Large Cell" value="Content" size="large" label="Description" />
  <MauiCell title="Navigation Link" isLink />
  <MauiCell title="Value Link" isLink value="Detail" />
</MauiCellGroup>`
      }
    ]
  },

  'maui-checkbox': {
    name: 'maui-checkbox',
    docPath: 'Checkbox',
    title: 'Checkbox 复选框',
    category: 'Form Components',
    jsData: `{ checked1: true, checked2: false, groupVal: ['apple', 'banana'] }`,
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Custom Shape',
        maml: `<view class="item-col">
  <maui-checkbox value="{{ checked1 }}">Basic Checkbox</maui-checkbox>
  <maui-checkbox value="{{ checked2 }}" shape="square">Square Checkbox</maui-checkbox>
  <maui-checkbox value="{{ false }}" disabled>Disabled Checkbox</maui-checkbox>
</view>`,
        taro: `<View className="item-col">
  <MauiCheckbox value={checked1} onChange={setChecked1}>Basic Checkbox</MauiCheckbox>
  <MauiCheckbox value={checked2} shape="square" onChange={setChecked2}>Square Checkbox</MauiCheckbox>
  <MauiCheckbox value={false} disabled>Disabled Checkbox</MauiCheckbox>
</View>`
      },
      {
        num: 2,
        title: 'Custom Color & Checkbox Group',
        maml: `<view class="item-col">
  <maui-checkbox value="{{ true }}" checked-color="#07c160">Custom Color (#07c160)</maui-checkbox>
  <maui-checkbox-group value="{{ groupVal }}">
    <maui-checkbox name="apple">Apple</maui-checkbox>
    <maui-checkbox name="banana">Banana</maui-checkbox>
    <maui-checkbox name="orange">Orange</maui-checkbox>
  </maui-checkbox-group>
</view>`,
        taro: `<View className="item-col">
  <MauiCheckbox value={true} checkedColor="#07c160">Custom Color (#07c160)</MauiCheckbox>
  <MauiCheckboxGroup value={groupVal}>
    <MauiCheckbox name="apple">Apple</MauiCheckbox>
    <MauiCheckbox name="banana">Banana</MauiCheckbox>
    <MauiCheckbox name="orange">Orange</MauiCheckbox>
  </MauiCheckboxGroup>
</View>`
      }
    ]
  },

  'maui-dialog': {
    name: 'maui-dialog',
    docPath: 'Dialog',
    title: 'Dialog 弹出框',
    category: 'Feedback Components',
    samples: [
      {
        num: 1,
        title: 'Message Prompt & Confirmation',
        maml: `<view class="btn-wrap">
  <maui-button type="primary" bind:tap="showPrompt">Message Prompt</maui-button>
  <maui-button type="info" bind:tap="showConfirm">Message Confirmation</maui-button>
  <maui-dialog id="maui-dialog" />
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton type="primary" onClick={showPrompt}>Message Prompt</MauiButton>
  <MauiButton type="info" onClick={showConfirm}>Message Confirmation</MauiButton>
  <MauiDialog id="maui-dialog" />
</View>`
      }
    ]
  },

  'maui-divider': {
    name: 'maui-divider',
    docPath: 'Divider',
    title: 'Divider 分割线',
    category: 'Display Components',
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Text Position',
        maml: `<view>
  <maui-divider />
  <maui-divider content-position="center">Centered Text</maui-divider>
  <maui-divider content-position="left">Left Text</maui-divider>
  <maui-divider content-position="right">Right Text</maui-divider>
</view>`,
        taro: `<View>
  <MauiDivider />
  <MauiDivider contentPosition="center">Centered Text</MauiDivider>
  <MauiDivider contentPosition="left">Left Text</MauiDivider>
  <MauiDivider contentPosition="right">Right Text</MauiDivider>
</View>`
      },
      {
        num: 2,
        title: 'Dashed & Custom Color',
        maml: `<view>
  <maui-divider dashed>Dashed Line</maui-divider>
  <maui-divider custom-style="color: #1989fa; border-color: #1989fa;">Custom Color</maui-divider>
</view>`,
        taro: `<View>
  <MauiDivider dashed>Dashed Line</MauiDivider>
  <MauiDivider customStyle={{ color: '#1989fa', borderColor: '#1989fa' }}>Custom Color</MauiDivider>
</View>`
      }
    ]
  },

  'maui-empty': {
    name: 'maui-empty',
    docPath: 'Empty',
    title: 'Empty 空状态',
    category: 'Display Components',
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Image Types',
        maml: `<view>
  <maui-empty description="No Data" />
  <maui-empty image="error" description="General Error" />
  <maui-empty image="network" description="Network Disconnected" />
</view>`,
        taro: `<View>
  <MauiEmpty description="No Data" />
  <MauiEmpty image="error" description="General Error" />
  <MauiEmpty image="network" description="Network Disconnected" />
</View>`
      }
    ]
  },

  'maui-field': {
    name: 'maui-field',
    docPath: 'Field',
    title: 'Field 输入框',
    category: 'Form Components',
    jsData: `{ username: '', password: '', phone: '123' }`,
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Custom Types',
        maml: `<maui-cell-group>
  <maui-field value="{{ username }}" label="Username" placeholder="Enter username" />
  <maui-field value="{{ password }}" type="password" label="Password" placeholder="Enter password" />
  <maui-field value="Readonly value" readonly label="Status" />
  <maui-field value="" disabled label="Disabled" placeholder="Disabled input" />
</maui-cell-group>`,
        taro: `<MauiCellGroup>
  <MauiField value={username} label="Username" placeholder="Enter username" />
  <MauiField value={password} type="password" label="Password" placeholder="Enter password" />
  <MauiField value="Readonly value" readonly label="Status" />
  <MauiField value="" disabled label="Disabled" placeholder="Disabled input" />
</MauiCellGroup>`
      },
      {
        num: 2,
        title: 'Error Message & Content Alignment',
        maml: `<maui-cell-group>
  <maui-field value="{{ phone }}" label="Phone" placeholder="Enter phone" error-message="Phone format incorrect" />
  <maui-field value="Right Aligned" label="Text" input-align="right" />
</maui-cell-group>`,
        taro: `<MauiCellGroup>
  <MauiField value={phone} label="Phone" placeholder="Enter phone" errorMessage="Phone format incorrect" />
  <MauiField value="Right Aligned" label="Text" inputAlign="right" />
</MauiCellGroup>`
      }
    ]
  },

  'maui-icon': {
    name: 'maui-icon',
    docPath: 'Icon',
    title: 'Icon 图标',
    category: 'Basic Components',
    samples: [
      {
        num: 1,
        title: 'Basic Icons & Sizes',
        maml: `<view class="icon-row">
  <maui-icon name="success" size="32px" color="#07c160" />
  <maui-icon name="cross" size="32px" color="#ee0a24" />
  <maui-icon name="star" size="32px" color="#ff976a" />
  <maui-icon name="like" size="32px" color="#1989fa" />
</view>`,
        taro: `<View className="icon-row">
  <MauiIcon name="success" size="32px" color="#07c160" />
  <MauiIcon name="cross" size="32px" color="#ee0a24" />
  <MauiIcon name="star" size="32px" color="#ff976a" />
  <MauiIcon name="like" size="32px" color="#1989fa" />
</View>`
      },
      {
        num: 2,
        title: 'Badge & Dot Information',
        maml: `<view class="icon-row">
  <maui-icon name="chat-o" size="32px" dot />
  <maui-icon name="chat-o" size="32px" info="9" />
  <maui-icon name="chat-o" size="32px" info="99+" />
</view>`,
        taro: `<View className="icon-row">
  <MauiIcon name="chat-o" size="32px" dot />
  <MauiIcon name="chat-o" size="32px" info="9" />
  <MauiIcon name="chat-o" size="32px" info="99+" />
</View>`
      }
    ]
  },

  'maui-image': {
    name: 'maui-image',
    docPath: 'Image',
    title: 'Image 图片',
    category: 'Basic Components',
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Fill Modes',
        maml: `<view class="icon-row">
  <maui-image width="80" height="80" fit="contain" src="https://via.placeholder.com/80" />
  <maui-image width="80" height="80" fit="cover" src="https://via.placeholder.com/80" />
  <maui-image width="80" height="80" round src="https://via.placeholder.com/80" />
</view>`,
        taro: `<View className="icon-row">
  <MauiImage width="80" height="80" fit="contain" src="https://via.placeholder.com/80" />
  <MauiImage width="80" height="80" fit="cover" src="https://via.placeholder.com/80" />
  <MauiImage width="80" height="80" round src="https://via.placeholder.com/80" />
</View>`
      }
    ]
  },

  'maui-layout': {
    name: 'maui-layout',
    docPath: 'Layout',
    title: 'Layout 栅格布局',
    category: 'Basic Components',
    samples: [
      {
        num: 1,
        title: 'Basic 24-Column Grid Layout',
        maml: `<view class="grid-wrap">
  <maui-row>
    <maui-col span="8"><view class="col-box bg-dark">span: 8</view></maui-col>
    <maui-col span="8"><view class="col-box bg-light">span: 8</view></maui-col>
    <maui-col span="8"><view class="col-box bg-dark">span: 8</view></maui-col>
  </maui-row>
  <maui-row style="margin-top: 10px;">
    <maui-col span="4"><view class="col-box bg-dark">span: 4</view></maui-col>
    <maui-col span="10" offset="4"><view class="col-box bg-light">offset: 4, span: 10</view></maui-col>
    <maui-col span="6"><view class="col-box bg-dark">span: 6</view></maui-col>
  </maui-row>
</view>`,
        taro: `<View className="grid-wrap">
  <MauiRow>
    <MauiCol span={8}><View className="col-box bg-dark">span: 8</View></MauiCol>
    <MauiCol span={8}><View className="col-box bg-light">span: 8</View></MauiCol>
    <MauiCol span={8}><View className="col-box bg-dark">span: 8</View></MauiCol>
  </MauiRow>
  <MauiRow style={{ marginTop: '10px' }}>
    <MauiCol span={4}><View className="col-box bg-dark">span: 4</View></MauiCol>
    <MauiCol span={10} offset={4}><View className="col-box bg-light">offset: 4, span: 10</View></MauiCol>
    <MauiCol span={6}><View className="col-box bg-dark">span: 6</View></MauiCol>
  </MauiRow>
</View>`
      }
    ]
  },

  'maui-list': {
    name: 'maui-list',
    docPath: 'List',
    title: 'List 列表',
    category: 'Display Components',
    samples: [
      {
        num: 1,
        title: 'Basic List & Items',
        maml: `<maui-list>
  <maui-list-item title="List item 1" value="Extra value" />
  <maui-list-item title="List item 2" is-link />
  <maui-list-item title="List item 3" label="Description label" />
</maui-list>`,
        taro: `<MauiList>
  <MauiListItem title="List item 1" value="Extra value" />
  <MauiListItem title="List item 2" isLink />
  <MauiListItem title="List item 3" label="Description label" />
</MauiList>`
      }
    ]
  },

  'maui-loading': {
    name: 'maui-loading',
    docPath: 'Loading',
    title: 'Loading 加载',
    category: 'Feedback Components',
    samples: [
      {
        num: 1,
        title: 'Loading Types & Custom Colors',
        maml: `<view class="icon-row">
  <maui-loading type="circular" />
  <maui-loading type="spinner" color="#1989fa" />
  <maui-loading type="circular" color="#07c160" size="32px">Loading...</maui-loading>
</view>`,
        taro: `<View className="icon-row">
  <MauiLoading type="circular" />
  <MauiLoading type="spinner" color="#1989fa" />
  <MauiLoading type="circular" color="#07c160" size="32px">Loading...</MauiLoading>
</View>`
      }
    ]
  },

  'maui-modal': {
    name: 'maui-modal',
    docPath: 'Modal',
    title: 'Modal 对话框',
    category: 'Feedback Components',
    jsData: `{ showModal: false }`,
    samples: [
      {
        num: 1,
        title: 'Basic Modal Dialog',
        maml: `<view>
  <maui-button type="primary" bind:tap="openModal">Open Modal</maui-button>
  <maui-modal show="{{ showModal }}" title="Modal Title" bind:confirm="closeModal" bind:cancel="closeModal">
    <view style="padding: 16px; text-align: center;">This is modal dialog content.</view>
  </maui-modal>
</view>`,
        taro: `<View>
  <MauiButton type="primary" onClick={() => setShowModal(true)}>Open Modal</MauiButton>
  <MauiModal show={showModal} title="Modal Title" onConfirm={() => setShowModal(false)} onCancel={() => setShowModal(false)}>
    <View style={{ padding: '16px', textAlign: 'center' }}>This is modal dialog content.</View>
  </MauiModal>
</View>`
      }
    ]
  },

  'maui-overlay': {
    name: 'maui-overlay',
    docPath: 'Overlay',
    title: 'Overlay 遮罩层',
    category: 'Feedback Components',
    jsData: `{ showOverlay: false }`,
    samples: [
      {
        num: 1,
        title: 'Basic Overlay & Embedded Content',
        maml: `<view>
  <maui-button type="primary" bind:tap="openOverlay">Show Overlay</maui-button>
  <maui-overlay show="{{ showOverlay }}" bind:click="closeOverlay">
    <view class="overlay-box">Centered Overlay Content</view>
  </maui-overlay>
</view>`,
        taro: `<View>
  <MauiButton type="primary" onClick={() => setShowOverlay(true)}>Show Overlay</MauiButton>
  <MauiOverlay show={showOverlay} onClick={() => setShowOverlay(false)}>
    <View className="overlay-box">Centered Overlay Content</View>
  </MauiOverlay>
</View>`
      }
    ]
  },

  'maui-popup': {
    name: 'maui-popup',
    docPath: 'Popup',
    title: 'Popup 弹出层',
    category: 'Feedback Components',
    jsData: `{ showBottom: false, showTop: false }`,
    samples: [
      {
        num: 1,
        title: 'Bottom & Top Popups',
        maml: `<view class="btn-wrap">
  <maui-button type="primary" bind:tap="openBottom">Bottom Popup</maui-button>
  <maui-button type="info" bind:tap="openTop">Top Popup</maui-button>
  <maui-popup show="{{ showBottom }}" position="bottom" round custom-style="height: 35%;" bind:close="closeBottom">
    <view style="padding: 20px; text-align: center;">Bottom Sheet Content</view>
  </maui-popup>
  <maui-popup show="{{ showTop }}" position="top" custom-style="height: 25%;" bind:close="closeTop">
    <view style="padding: 20px; text-align: center;">Top Sheet Content</view>
  </maui-popup>
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton type="primary" onClick={() => setShowBottom(true)}>Bottom Popup</MauiButton>
  <MauiButton type="info" onClick={() => setShowTop(true)}>Top Popup</MauiButton>
  <MauiPopup show={showBottom} position="bottom" round customStyle={{ height: '35%' }} onClose={() => setShowBottom(false)}>
    <View style={{ padding: '20px', textAlign: 'center' }}>Bottom Sheet Content</View>
  </MauiPopup>
  <MauiPopup show={showTop} position="top" customStyle={{ height: '25%' }} onClose={() => setShowTop(false)}>
    <View style={{ padding: '20px', textAlign: 'center' }}>Top Sheet Content</View>
  </MauiPopup>
</View>`
      }
    ]
  },

  'maui-progress': {
    name: 'maui-progress',
    docPath: 'Progress',
    title: 'Progress 进度条',
    category: 'Display Components',
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Stroke Width',
        maml: `<view class="item-col">
  <maui-progress percentage="30" />
  <maui-progress percentage="60" stroke-width="8" />
  <maui-progress percentage="85" color="#07c160" />
  <maui-progress percentage="50" inactive />
</view>`,
        taro: `<View className="item-col">
  <MauiProgress percentage={30} />
  <MauiProgress percentage={60} strokeWidth={8} />
  <MauiProgress percentage={85} color="#07c160" />
  <MauiProgress percentage={50} inactive />
</View>`
      }
    ]
  },

  'maui-radio': {
    name: 'maui-radio',
    docPath: 'Radio',
    title: 'Radio 单选框',
    category: 'Form Components',
    jsData: `{ radio1: '1', radio2: 'a' }`,
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Horizontal Alignment',
        maml: `<view class="item-col">
  <maui-radio-group value="{{ radio1 }}">
    <maui-radio name="1">Option 1</maui-radio>
    <maui-radio name="2">Option 2</maui-radio>
  </maui-radio-group>
  <maui-radio-group value="{{ radio2 }}" direction="horizontal" style="margin-top: 10px;">
    <maui-radio name="a" checked-color="#07c160">A (Green)</maui-radio>
    <maui-radio name="b" shape="square">B (Square)</maui-radio>
  </maui-radio-group>
</view>`,
        taro: `<View className="item-col">
  <MauiRadioGroup value={radio1} onChange={setRadio1}>
    <MauiRadio name="1">Option 1</MauiRadio>
    <MauiRadio name="2">Option 2</MauiRadio>
  </MauiRadioGroup>
  <MauiRadioGroup value={radio2} direction="horizontal" style={{ marginTop: '10px' }} onChange={setRadio2}>
    <MauiRadio name="a" checkedColor="#07c160">A (Green)</MauiRadio>
    <MauiRadio name="b" shape="square">B (Square)</MauiRadio>
  </MauiRadioGroup>
</View>`
      }
    ]
  },

  'maui-sidebar': {
    name: 'maui-sidebar',
    docPath: 'Sidebar',
    title: 'Sidebar 侧边导航',
    category: 'Navigation Components',
    jsData: `{ activeSidebar: 0 }`,
    samples: [
      {
        num: 1,
        title: 'Basic Sidebar & Badge Tips',
        maml: `<view style="display: flex;">
  <maui-sidebar active-key="{{ activeSidebar }}">
    <maui-sidebar-item title="Tab 1" />
    <maui-sidebar-item title="Tab 2" badge="8" />
    <maui-sidebar-item title="Tab 3" dot />
    <maui-sidebar-item title="Tab 4" disabled />
  </maui-sidebar>
</view>`,
        taro: `<View style={{ display: 'flex' }}>
  <MauiSidebar activeKey={activeSidebar} onChange={setActiveSidebar}>
    <MauiSidebarItem title="Tab 1" />
    <MauiSidebarItem title="Tab 2" badge="8" />
    <MauiSidebarItem title="Tab 3" dot />
    <MauiSidebarItem title="Tab 4" disabled />
  </MauiSidebar>
</View>`
      }
    ]
  },

  'maui-slider': {
    name: 'maui-slider',
    docPath: 'Slider',
    title: 'Slider 滑块',
    category: 'Form Components',
    jsData: `{ sliderVal: 40 }`,
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Custom Range/Color',
        maml: `<view class="item-col">
  <maui-slider value="{{ sliderVal }}" />
  <maui-slider value="{{ 60 }}" step="10" bar-height="4px" active-color="#ee0a24" />
  <maui-slider value="{{ 25 }}" min="10" max="90" disabled />
</view>`,
        taro: `<View className="item-col">
  <MauiSlider value={sliderVal} onChange={setSliderVal} />
  <MauiSlider value={60} step={10} barHeight="4px" activeColor="#ee0a24" />
  <MauiSlider value={25} min={10} max={90} disabled />
</View>`
      }
    ]
  },

  'maui-stepper': {
    name: 'maui-stepper',
    docPath: 'Stepper',
    title: 'Stepper 步进器',
    category: 'Form Components',
    jsData: `{ stepVal: 1 }`,
    samples: [
      {
        num: 1,
        title: 'Basic Usage & Limits',
        maml: `<view class="item-col">
  <maui-stepper value="{{ stepVal }}" />
  <maui-stepper value="{{ 2 }}" step="2" min="0" max="10" />
  <maui-stepper value="{{ 1 }}" disabled />
</view>`,
        taro: `<View className="item-col">
  <MauiStepper value={stepVal} onChange={setStepVal} />
  <MauiStepper value={2} step={2} min={0} max={10} />
  <MauiStepper value={1} disabled />
</View>`
      }
    ]
  },

  'maui-steps': {
    name: 'maui-steps',
    docPath: 'Steps',
    title: 'Steps 步骤条',
    category: 'Navigation Components',
    jsData: `{ activeStep: 1, steps: [{ text: 'Step 1', desc: 'Description 1' }, { text: 'Step 2', desc: 'Description 2' }, { text: 'Step 3', desc: 'Description 3' }] }`,
    samples: [
      {
        num: 1,
        title: 'Basic Horizontal & Vertical Steps',
        maml: `<view>
  <maui-steps steps="{{ steps }}" active="{{ activeStep }}" />
  <maui-steps steps="{{ steps }}" active="{{ activeStep }}" direction="vertical" style="margin-top: 15px;" />
</view>`,
        taro: `<View>
  <MauiSteps steps={steps} active={activeStep} />
  <MauiSteps steps={steps} active={activeStep} direction="vertical" style={{ marginTop: '15px' }} />
</View>`
      }
    ]
  },

  'maui-sticky': {
    name: 'maui-sticky',
    docPath: 'Sticky',
    title: 'Sticky 粘性布局',
    category: 'Display Components',
    samples: [
      {
        num: 1,
        title: 'Basic Sticky Layout',
        maml: `<view>
  <maui-sticky offset-top="{{ 0 }}">
    <maui-button type="primary">Sticky Top Button</maui-button>
  </maui-sticky>
</view>`,
        taro: `<View>
  <MauiSticky offsetTop={0}>
    <MauiButton type="primary">Sticky Top Button</MauiButton>
  </MauiSticky>
</View>`
      }
    ]
  },

  'maui-switch': {
    name: 'maui-switch',
    docPath: 'Switch',
    title: 'Switch 开关',
    category: 'Form Components',
    jsData: `{ switch1: true, switch2: false }`,
    samples: [
      {
        num: 1,
        title: 'Basic Usage & States',
        maml: `<view class="icon-row">
  <maui-switch checked="{{ switch1 }}" />
  <maui-switch checked="{{ switch2 }}" disabled />
  <maui-switch checked="{{ true }}" loading />
  <maui-switch checked="{{ true }}" active-color="#07c160" size="24px" />
</view>`,
        taro: `<View className="icon-row">
  <MauiSwitch checked={switch1} onChange={setSwitch1} />
  <MauiSwitch checked={switch2} disabled />
  <MauiSwitch checked={true} loading />
  <MauiSwitch checked={true} activeColor="#07c160" size="24px" />
</View>`
      }
    ]
  },

  'maui-tab': {
    name: 'maui-tab',
    docPath: 'Tab',
    title: 'Tab 标签页',
    category: 'Navigation Components',
    jsData: `{ activeTab: 0 }`,
    samples: [
      {
        num: 1,
        title: 'Basic Tabs & Animated Switching',
        maml: `<maui-tabs active="{{ activeTab }}" swipeable animated>
  <maui-tab title="Tab 1"><view class="tab-content">Tab 1 Content</view></maui-tab>
  <maui-tab title="Tab 2"><view class="tab-content">Tab 2 Content</view></maui-tab>
  <maui-tab title="Tab 3"><view class="tab-content">Tab 3 Content</view></maui-tab>
</maui-tabs>`,
        taro: `<MauiTabs active={activeTab} swipeable animated onChange={setActiveTab}>
  <MauiTab title="Tab 1"><View className="tab-content">Tab 1 Content</View></MauiTab>
  <MauiTab title="Tab 2"><View className="tab-content">Tab 2 Content</View></MauiTab>
  <MauiTab title="Tab 3"><View className="tab-content">Tab 3 Content</View></MauiTab>
</MauiTabs>`
      }
    ]
  },

  'maui-tag': {
    name: 'maui-tag',
    docPath: 'Tag',
    title: 'Tag 标签',
    category: 'Display Components',
    samples: [
      {
        num: 1,
        title: 'Tag Types & Plain/Round Styles',
        maml: `<view class="icon-row">
  <maui-tag type="primary">Primary</maui-tag>
  <maui-tag type="success">Success</maui-tag>
  <maui-tag type="danger">Danger</maui-tag>
  <maui-tag type="warning">Warning</maui-tag>
  <maui-tag plain type="primary">Plain</maui-tag>
  <maui-tag round type="success">Round</maui-tag>
  <maui-tag mark type="primary">Mark</maui-tag>
</view>`,
        taro: `<View className="icon-row">
  <MauiTag type="primary">Primary</MauiTag>
  <MauiTag type="success">Success</MauiTag>
  <MauiTag type="danger">Danger</MauiTag>
  <MauiTag type="warning">Warning</MauiTag>
  <MauiTag plain type="primary">Plain</MauiTag>
  <MauiTag round type="success">Round</MauiTag>
  <MauiTag mark type="primary">Mark</MauiTag>
</View>`
      }
    ]
  },

  'maui-title-bar': {
    name: 'maui-title-bar',
    docPath: 'titleBar',
    title: 'TitleBar 导航栏',
    category: 'Navigation Components',
    samples: [
      {
        num: 1,
        title: 'Basic TitleBar & Action Text',
        maml: `<view>
  <maui-title-bar title="Page Title" left-arrow />
  <maui-title-bar title="Page Title" left-text="Back" right-text="Action" left-arrow style="margin-top: 10px;" />
</view>`,
        taro: `<View>
  <MauiTitleBar title="Page Title" leftArrow />
  <MauiTitleBar title="Page Title" leftText="Back" rightText="Action" leftArrow style={{ marginTop: '10px' }} />
</View>`
      }
    ]
  },

  'maui-toast': {
    name: 'maui-toast',
    docPath: 'Toast',
    title: 'Toast 轻提示',
    category: 'Feedback Components',
    samples: [
      {
        num: 1,
        title: 'Text & Status Toasts',
        maml: `<view class="btn-wrap">
  <maui-button type="primary" bind:tap="showTextToast">Text Toast</maui-button>
  <maui-button type="info" bind:tap="showLoadingToast">Loading Toast</maui-button>
  <maui-toast id="maui-toast" />
</view>`,
        taro: `<View className="btn-wrap">
  <MauiButton type="primary" onClick={showTextToast}>Text Toast</MauiButton>
  <MauiButton type="info" onClick={showLoadingToast}>Loading Toast</MauiButton>
  <MauiToast id="maui-toast" />
</View>`
      }
    ]
  }
};

const commonCss = `
.page-body {
  padding: 16px;
  background-color: #f8fafc;
  min-height: 100vh;
  box-sizing: border-box;
}
.demo-block {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.demo-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
  display: block;
}
.btn-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.item-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.col-box {
  color: #fff;
  font-size: 12px;
  line-height: 36px;
  text-align: center;
  border-radius: 4px;
}
.bg-dark { background-color: #39a9ed; }
.bg-light { background-color: #66c6f2; }
.overlay-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  font-weight: bold;
}
.tab-content {
  padding: 20px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
}
`;

module.exports = {
  mauiComponentSpecs,
  commonCss
};

// All 34 MAUI Components usingComponents map for miniapp/app.json
const mauiUsingComponents = {
  'maui-button': 'maui-components/button/index',
  'maui-cell': 'maui-components/cell/index',
  'maui-cell-group': 'maui-components/cell-group/index',
  'maui-checkbox': 'maui-components/checkbox/index',
  'maui-checkbox-group': 'maui-components/checkbox-group/index',
  'maui-col': 'maui-components/col/index',
  'maui-row': 'maui-components/row/index',
  'maui-dialog': 'maui-components/dialog/index',
  'maui-divider': 'maui-components/divider/index',
  'maui-empty': 'maui-components/empty/index',
  'maui-field': 'maui-components/field/index',
  'maui-icon': 'maui-components/icon/index',
  'maui-image': 'maui-components/image/index',
  'maui-list': 'maui-components/list/index',
  'maui-list-item': 'maui-components/list-item/index',
  'maui-loading': 'maui-components/loading/index',
  'maui-modal': 'maui-components/modal/index',
  'maui-overlay': 'maui-components/overlay/index',
  'maui-popup': 'maui-components/popup/index',
  'maui-progress': 'maui-components/progress/index',
  'maui-radio': 'maui-components/radio/index',
  'maui-radio-group': 'maui-components/radio-group/index',
  'maui-sidebar': 'maui-components/sidebar/index',
  'maui-sidebar-item': 'maui-components/sidebar-item/index',
  'maui-slider': 'maui-components/slider/index',
  'maui-stepper': 'maui-components/stepper/index',
  'maui-steps': 'maui-components/steps/index',
  'maui-sticky': 'maui-components/sticky/index',
  'maui-switch': 'maui-components/switch/index',
  'maui-tab': 'maui-components/tab/index',
  'maui-tabs': 'maui-components/tabs/index',
  'maui-tag': 'maui-components/tag/index',
  'maui-title-bar': 'maui-components/title-bar/index',
  'maui-toast': 'maui-components/toast/index'
};

const mauiRoutes = Object.keys(mauiComponentSpecs).map(k => `pages/${k}/index`);

function generateNativeMauiPages() {
  console.log('Generating 27 Native MAML MAUI component pages...');

  for (const [key, spec] of Object.entries(mauiComponentSpecs)) {
    const pageDir = path.join(MINIAPP_DIR, 'pages', key);
    fs.mkdirSync(pageDir, { recursive: true });

    // 1. index.maml
    const mamlBlocks = spec.samples.map(s => `
  <view class="demo-block">
    <text class="demo-title">${s.num}. ${s.title}</text>
    ${s.maml}
  </view>`).join('\n');

    fs.writeFileSync(path.join(pageDir, 'index.maml'), `
<view class="page-body">
  ${mamlBlocks}
</view>
`);

    // 2. index.js
    const jsData = spec.jsData || '{}';
    fs.writeFileSync(path.join(pageDir, 'index.js'), `
Page({
  data: ${jsData},
  openModal() { this.setData({ showModal: true }); },
  closeModal() { this.setData({ showModal: false }); },
  openOverlay() { this.setData({ showOverlay: true }); },
  closeOverlay() { this.setData({ showOverlay: false }); },
  openBottom() { this.setData({ showBottom: true }); },
  closeBottom() { this.setData({ showBottom: false }); },
  openTop() { this.setData({ showTop: true }); },
  closeTop() { this.setData({ showTop: false }); },
  showPrompt() { const d = this.selectComponent('#maui-dialog'); if (d) d.alert({ title: 'Title', message: 'Message Prompt Body' }); },
  showConfirm() { const d = this.selectComponent('#maui-dialog'); if (d) d.confirm({ title: 'Confirm', message: 'Confirm action?' }); },
  showTextToast() { const t = this.selectComponent('#maui-toast'); if (t) t.text('Text toast message'); },
  showLoadingToast() { const t = this.selectComponent('#maui-toast'); if (t) t.loading({ message: 'Loading...', duration: 2000 }); }
});
`);

    // 3. index.mass
    fs.writeFileSync(path.join(pageDir, 'index.mass'), commonCss);

    // 4. index.json
    fs.writeFileSync(path.join(pageDir, 'index.json'), JSON.stringify({
      navigationBarTitleText: spec.title
    }, null, 2));

    console.log(`  ✓ Native MAML: pages/${key}/index (${spec.samples.length} samples)`);
  }
}

function generateTaroMauiPages() {
  console.log('Generating 27 Taro React MAUI component pages...');

  for (const [key, spec] of Object.entries(mauiComponentSpecs)) {
    const pageDir = path.join(TARO_SRC, 'pages', key);
    fs.mkdirSync(pageDir, { recursive: true });

    const pascalName = key.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');

    // State declarations for React
    let stateLines = '';
    if (key === 'maui-checkbox') {
      stateLines = `
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [groupVal, setGroupVal] = useState(['apple', 'banana']);
`;
    } else if (key === 'maui-field') {
      stateLines = `
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('123');
`;
    } else if (key === 'maui-modal') {
      stateLines = `const [showModal, setShowModal] = useState(false);`;
    } else if (key === 'maui-overlay') {
      stateLines = `const [showOverlay, setShowOverlay] = useState(false);`;
    } else if (key === 'maui-popup') {
      stateLines = `
  const [showBottom, setShowBottom] = useState(false);
  const [showTop, setShowTop] = useState(false);
`;
    } else if (key === 'maui-radio') {
      stateLines = `
  const [radio1, setRadio1] = useState('1');
  const [radio2, setRadio2] = useState('a');
`;
    } else if (key === 'maui-sidebar') {
      stateLines = `const [activeSidebar, setActiveSidebar] = useState(0);`;
    } else if (key === 'maui-slider') {
      stateLines = `const [sliderVal, setSliderVal] = useState(40);`;
    } else if (key === 'maui-stepper') {
      stateLines = `const [stepVal, setStepVal] = useState(1);`;
    } else if (key === 'maui-steps') {
      stateLines = `
  const [activeStep, setActiveStep] = useState(1);
  const steps = [{ text: 'Step 1', desc: 'Description 1' }, { text: 'Step 2', desc: 'Description 2' }, { text: 'Step 3', desc: 'Description 3' }];
`;
    } else if (key === 'maui-switch') {
      stateLines = `
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
`;
    } else if (key === 'maui-tab') {
      stateLines = `const [activeTab, setActiveTab] = useState(0);`;
    }

    const taroBlocks = spec.samples.map(s => `
      <View className="demo-block">
        <Text className="demo-title">${s.num}. ${s.title}</Text>
        ${s.taro}
      </View>`).join('\n');

    // index.tsx
    fs.writeFileSync(path.join(pageDir, 'index.tsx'), `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import {
  MauiButton,
  MauiCell,
  MauiCellGroup,
  MauiCheckbox,
  MauiCheckboxGroup,
  MauiCol,
  MauiRow,
  MauiDialog,
  MauiDivider,
  MauiEmpty,
  MauiField,
  MauiIcon,
  MauiImage,
  MauiLoading,
  MauiOverlay,
  MauiPopup,
  MauiProgress,
  MauiRadio,
  MauiRadioGroup,
  MauiSidebar,
  MauiSidebarItem,
  MauiSlider,
  MauiStepper,
  MauiSteps,
  MauiSticky,
  MauiSwitch,
  MauiTab,
  MauiTabs,
  MauiTag,
  MauiTitleBar,
  MauiToast,
  MauiModal,
  MauiList,
  MauiListItem
} from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function ${pascalName}Page() {
  ${stateLines}
  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      ${taroBlocks}
    </View>
  );
}
`);

    // index.config.ts
    fs.writeFileSync(path.join(pageDir, 'index.config.ts'), `export default definePageConfig({
  navigationBarTitleText: '${spec.title}'
});
`);

    // index.css
    fs.writeFileSync(path.join(pageDir, 'index.css'), commonCss);

    console.log(`  ✓ Taro React: src/pages/${key}/index (${spec.samples.length} samples)`);
  }
}

function updateAppConfigs() {
  console.log('Updating app.json and app.config.ts routes...');

  // 1. miniapp/app.json
  const appJsonPath = path.join(MINIAPP_DIR, 'app.json');
  const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));

  // Filter out any duplicates and old runner
  const existingPages = appJson.pages.filter(p => p !== 'pages/runner/index' && !mauiRoutes.includes(p));
  appJson.pages = [...existingPages, ...mauiRoutes];
  appJson.usingComponents = {
    ...(appJson.usingComponents || {}),
    ...mauiUsingComponents
  };

  fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
  console.log(`  ✓ miniapp/app.json updated with ${appJson.pages.length} pages.`);

  // 2. miniapp-taro/src/app.config.ts
  const taroConfigPath = path.join(TARO_SRC, 'app.config.ts');
  const allTaroPages = [...existingPages, ...mauiRoutes];

  const taroConfigContent = `export default defineAppConfig({
  pages: ${JSON.stringify(allTaroPages, null, 4)},
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'Macle Taro MiniApp Showcase',
    navigationBarTextStyle: 'black'
  }
});
`;
  fs.writeFileSync(taroConfigPath, taroConfigContent);
  console.log(`  ✓ miniapp-taro/src/app.config.ts updated with ${allTaroPages.length} pages.`);
}

function updateShowcaseHome() {
  console.log('Updating Showcase Catalog Home pages with MAUI section...');

  // Group MAUI components by category
  const categories = {
    'MAUI Basic Components 基础组件': ['maui-button', 'maui-cell', 'maui-icon', 'maui-image', 'maui-layout'],
    'MAUI Form Components 表单组件': ['maui-checkbox', 'maui-field', 'maui-radio', 'maui-slider', 'maui-stepper', 'maui-switch'],
    'MAUI Feedback Components 反馈组件': ['maui-dialog', 'maui-loading', 'maui-modal', 'maui-overlay', 'maui-popup', 'maui-toast'],
    'MAUI Navigation Components 导航组件': ['maui-sidebar', 'maui-steps', 'maui-tab', 'maui-title-bar'],
    'MAUI Display Components 展示组件': ['maui-divider', 'maui-empty', 'maui-list', 'maui-progress', 'maui-sticky', 'maui-tag']
  };

  // MAML showcase section
  const mamlSections = Object.entries(categories).map(([cat, items]) => `
  <view class="demo-block">
    <text class="demo-title" style="border-left-color: #0284c7;">${cat} (${items.length})</text>
    <view class="nav-grid">
      ${items.map(k => `<navigator url="/pages/${k}/index" class="nav-item">${mauiComponentSpecs[k].title}</navigator>`).join('\n      ')}
    </view>
  </view>`).join('\n');

  // Taro showcase section
  const taroSections = Object.entries(categories).map(([cat, items]) => `
      <View className="demo-block">
        <Text className="demo-title" style={{ borderLeftColor: '#0284c7' }}>${cat} (${items.length})</Text>
        <View className="nav-grid">
          ${items.map(k => `<Navigator url="/pages/${k}/index" className="nav-item">${mauiComponentSpecs[k].title}</Navigator>`).join('\n          ')}
        </View>
      </View>`).join('\n');

  // Read current index.maml and inject before closing
  const mamlIndexPath = path.join(MINIAPP_DIR, 'pages/index/index.maml');
  let mamlContent = fs.readFileSync(mamlIndexPath, 'utf8');
  if (!mamlContent.includes('maui-button')) {
    mamlContent = mamlContent.replace('</view>\n\n<view class="home-footer">', `${mamlSections}\n</view>\n\n<view class="home-footer">`);
    if (!mamlContent.includes('maui-button')) {
      mamlContent = mamlContent.replace(/<\/view>\s*$/, `${mamlSections}\n</view>`);
    }
    fs.writeFileSync(mamlIndexPath, mamlContent);
  }

  // Read current index.tsx and inject before closing
  const taroIndexPath = path.join(TARO_SRC, 'pages/index/index.tsx');
  let taroContent = fs.readFileSync(taroIndexPath, 'utf8');
  if (!taroContent.includes('maui-button')) {
    taroContent = taroContent.replace(/(<\/View>\s*<\/View>\s*\);\s*}\s*)$/, `${taroSections}\n      </View>\n    </View>\n  );\n}\n`);
    fs.writeFileSync(taroIndexPath, taroContent);
  }

  console.log('  ✓ Showcase Home pages updated with MAUI sections.');
}

function run() {
  generateNativeMauiPages();
  generateTaroMauiPages();
  updateAppConfigs();
  updateShowcaseHome();
  console.log('============================================================');
  console.log('✅ MAUI Component Generation Complete! (27 Components)');
  console.log('============================================================');
}

run();
