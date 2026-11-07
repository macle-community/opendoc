const fs = require('fs');
const path = require('path');
const { componentSpecs } = require('./update-component-docs');

const TARO_DIR = path.resolve(__dirname, '../../miniapp-taro');
const TARO_SRC = path.join(TARO_DIR, 'src');

console.log('1. Setting up Taro MiniApp at:', TARO_SRC);
fs.mkdirSync(TARO_SRC, { recursive: true });

// 32 Native Component page routes
const nativeComponentRoutes = [
  'pages/view/index',
  'pages/scroll-view/index',
  'pages/swiper/index',
  'pages/swiper-item/index',
  'pages/cover-view/index',
  'pages/cover-image/index',
  'pages/text/index',
  'pages/icon/index',
  'pages/rich-text/index',
  'pages/progress/index',
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
  'pages/navigator/index',
  'pages/image/index',
  'pages/video/index',
  'pages/audio/index',
  'pages/camera/index',
  'pages/web-view/index',
  'pages/page-meta/index',
  'pages/map/index'
];

const allPages = [
  'pages/index/index',
  'pages/runner/index',
  ...nativeComponentRoutes
];

// app.config.ts
const appConfigContent = `export default defineAppConfig({
  pages: ${JSON.stringify(allPages, null, 4)},
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'Macle Taro MiniApp Showcase',
    navigationBarTextStyle: 'black'
  }
});
`;
fs.writeFileSync(path.join(TARO_SRC, 'app.config.ts'), appConfigContent);

// app.css
fs.writeFileSync(path.join(TARO_SRC, 'app.css'), `
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

// Home Page (index)
const indexDir = path.join(TARO_SRC, 'pages/index');
fs.mkdirSync(indexDir, { recursive: true });

fs.writeFileSync(path.join(indexDir, 'index.tsx'), `import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function IndexPage() {
  return (
    <View className="home-container">
      <View className="home-banner">
        <Text className="banner-title">Macle Taro React Components</Text>
        <Text className="banner-sub">32 Core MiniProgram DSL Components & Numbered Examples</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">View Container 视图容器 (6)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/view/index" className="nav-item">view 视图</Navigator>
          <Navigator url="/pages/scroll-view/index" className="nav-item">scroll-view 滚动</Navigator>
          <Navigator url="/pages/swiper/index" className="nav-item">swiper 滑块</Navigator>
          <Navigator url="/pages/swiper-item/index" className="nav-item">swiper-item 项</Navigator>
          <Navigator url="/pages/cover-view/index" className="nav-item">cover-view 覆盖视图</Navigator>
          <Navigator url="/pages/cover-image/index" className="nav-item">cover-image 覆盖图片</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Basic Content 基础内容 (4)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/text/index" className="nav-item">text 文本</Navigator>
          <Navigator url="/pages/icon/index" className="nav-item">icon 图标</Navigator>
          <Navigator url="/pages/rich-text/index" className="nav-item">rich-text 富文本</Navigator>
          <Navigator url="/pages/progress/index" className="nav-item">progress 进度条</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Form Components 表单组件 (14)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/button/index" className="nav-item">button 按钮</Navigator>
          <Navigator url="/pages/checkbox/index" className="nav-item">checkbox 多选框</Navigator>
          <Navigator url="/pages/checkbox-group/index" className="nav-item">checkbox-group 组</Navigator>
          <Navigator url="/pages/form/index" className="nav-item">form 表单</Navigator>
          <Navigator url="/pages/input/index" className="nav-item">input 输入框</Navigator>
          <Navigator url="/pages/picker/index" className="nav-item">picker 选择器</Navigator>
          <Navigator url="/pages/picker-view/index" className="nav-item">picker-view 嵌入选择</Navigator>
          <Navigator url="/pages/picker-view-column/index" className="nav-item">picker-view-column</Navigator>
          <Navigator url="/pages/label/index" className="nav-item">label 标签</Navigator>
          <Navigator url="/pages/switch/index" className="nav-item">switch 开关</Navigator>
          <Navigator url="/pages/radio/index" className="nav-item">radio 单选框</Navigator>
          <Navigator url="/pages/radio-group/index" className="nav-item">radio-group 组</Navigator>
          <Navigator url="/pages/slider/index" className="nav-item">slider 滑块</Navigator>
          <Navigator url="/pages/textarea/index" className="nav-item">textarea 多行输入</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Navigating 页面导航 (1)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/navigator/index" className="nav-item full-width">navigator 页面跳转</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Media Components 媒体组件 (4)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/image/index" className="nav-item">image 图片</Navigator>
          <Navigator url="/pages/video/index" className="nav-item">video 视频</Navigator>
          <Navigator url="/pages/audio/index" className="nav-item">audio 音频</Navigator>
          <Navigator url="/pages/camera/index" className="nav-item">camera 相机</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Open Capability & Config 开放能力与配置 (2)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/web-view/index" className="nav-item">web-view 网页容器</Navigator>
          <Navigator url="/pages/page-meta/index" className="nav-item">page-meta 页面配置</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Map 地图组件 (1)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/map/index" className="nav-item full-width">map 地图</Navigator>
        </View>
      </View>
    </View>
  );
}
`);

fs.writeFileSync(path.join(indexDir, 'index.config.ts'), `export default definePageConfig({ navigationBarTitleText: 'Macle Component Showcase' });\n`);
fs.writeFileSync(path.join(indexDir, 'index.css'), `
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

// Runner Page
const runnerDir = path.join(TARO_SRC, 'pages/runner');
fs.mkdirSync(runnerDir, { recursive: true });
fs.writeFileSync(path.join(runnerDir, 'index.tsx'), `import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function RunnerPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">Dynamic Taro React Runner</Text>
        <Text style={{ fontSize: '13px', color: '#64748b' }}>Live Execution Sandbox</Text>
      </View>
    </View>
  );
}
`);
fs.writeFileSync(path.join(runnerDir, 'index.config.ts'), `export default definePageConfig({ navigationBarTitleText: 'Runner' });\n`);
fs.writeFileSync(path.join(runnerDir, 'index.css'), ``);

/**
 * Custom React JSX definitions for each component
 */
const taroPageRenderers = {
  'view': `import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function ViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Flex Direction (Row & Column Layout)</Text>
        <View className="page-section">
          <View className="page-section-title">flex-direction: row</View>
          <View className="flex-row">
            <View className="flex-item demo-bg-red">A</View>
            <View className="flex-item demo-bg-green">B</View>
            <View className="flex-item demo-bg-blue">C</View>
          </View>
          <View className="page-section-title" style={{ marginTop: '16px' }}>flex-direction: column</View>
          <View className="flex-col">
            <View className="flex-item demo-bg-red">Row 1</View>
            <View className="flex-item demo-bg-green">Row 2</View>
            <View className="flex-item demo-bg-blue">Row 3</View>
          </View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Stream Post Feed with Hover State</Text>
        <View className="stream">
          <View className="post" hoverClass="post-hover" hoverStartTime={50} hoverStayTime={400}>
            <View className="post-user">
              <View className="post-avatar">Z</View>
              <Text className="post-name">Zoe</Text>
            </View>
            <View className="post-body">
              <View className="post-content">Welcome to Macle Mini Program development!</View>
              <View className="post-date">June 12</View>
            </View>
          </View>
          <View className="post" hoverClass="post-hover">
            <View className="post-user">
              <View className="post-avatar">J</View>
              <Text className="post-name">Jim</Text>
            </View>
            <View className="post-body">
              <View className="post-content">Great! How can I preview on the Web Simulator?</View>
              <View className="post-date">June 13</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}`,

  'scroll-view': `import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function ScrollViewPage() {
  const onScrollToUpper = () => { Taro.showToast({ title: 'Top Reached', icon: 'none' }); };
  const onScrollToLower = () => { Taro.showToast({ title: 'Bottom Reached', icon: 'none' }); };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Vertical Scroll View</Text>
        <ScrollView scrollY style={{ height: '160px' }} onScrollToUpper={onScrollToUpper} onScrollToLower={onScrollToLower}>
          <View className="scroll-v-item bg-red">Scroll Item 1 (Top)</View>
          <View className="scroll-v-item bg-orange">Scroll Item 2</View>
          <View className="scroll-v-item bg-green">Scroll Item 3</View>
          <View className="scroll-v-item bg-blue">Scroll Item 4 (Bottom)</View>
        </ScrollView>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Horizontal Scroll View</Text>
        <ScrollView scrollX style={{ whiteSpace: 'nowrap', width: '100%' }}>
          <View className="scroll-h-item bg-blue">Card 1</View>
          <View className="scroll-h-item bg-green">Card 2</View>
          <View className="scroll-h-item bg-orange">Card 3</View>
          <View className="scroll-h-item bg-purple">Card 4</View>
          <View className="scroll-h-item bg-pink">Card 5</View>
        </ScrollView>
      </View>
    </View>
  );
}`,

  'swiper': `import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import './index.css';

export default function SwiperPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Interactive Swiper with Indicators & Autoplay</Text>
        <Swiper indicatorDots autoplay interval={2500} duration={500} circular style={{ height: '160px', borderRadius: '10px', overflow: 'hidden' }}>
          <SwiperItem>
            <View className="swiper-slide slide-blue"><Text className="slide-text">Slide A - Macle</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-green"><Text className="slide-text">Slide B - Simulator</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-orange"><Text className="slide-text">Slide C - OpenDoc</Text></View>
          </SwiperItem>
        </Swiper>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Circular & Vertical Swiping</Text>
        <Swiper vertical indicatorDots autoplay={false} style={{ height: '120px', borderRadius: '10px', overflow: 'hidden' }}>
          <SwiperItem><View className="swiper-slide slide-purple"><Text className="slide-text">Vertical Panel 1</Text></View></SwiperItem>
          <SwiperItem><View className="swiper-slide slide-teal"><Text className="slide-text">Vertical Panel 2</Text></View></SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}`,

  'swiper-item': `import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import './index.css';

export default function SwiperItemPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Custom Swiper Item Card</Text>
        <Swiper indicatorDots style={{ height: '140px' }}>
          <SwiperItem className="swiper-custom-item">
            <View className="card-content">
              <Text className="card-title">Custom Item Container</Text>
              <Text className="card-sub">swiper-item wraps individual slides</Text>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}`,

  'cover-view': `import React from 'react';
import { View, Text, CoverView } from '@tarojs/components';
import './index.css';

export default function CoverViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Cover View Overlay on Native Components</Text>
        <View className="media-container" style={{ position: 'relative', height: '180px', background: '#0f172a', borderRadius: '10px', overflow: 'hidden' }}>
          <View className="simulated-media" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
            [Media Surface Area]
          </View>
          <CoverView className="cover-badge" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.65)', color: '#fff', padding: '4px 10px', borderRadius: '16px', fontSize: '12px' }}>
            ● Live Stream Overlay
          </CoverView>
          <CoverView className="cover-actions" style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#2563eb', color: '#fff', padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>
            Overlay Button
          </CoverView>
        </View>
      </View>
    </View>
  );
}`,

  'cover-image': `import React from 'react';
import { View, Text, CoverImage } from '@tarojs/components';
import './index.css';

export default function CoverImagePage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Cover Image Overlay on Media Component</Text>
        <View className="media-container" style={{ position: 'relative', height: '160px', background: '#1e293b', borderRadius: '10px' }}>
          <CoverImage className="cover-logo" src="https://img.icons8.com/color/96/play--v1.png" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '48px', height: '48px' }} />
        </View>
      </View>
    </View>
  );
}`,

  'text': `import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function TextPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Text & Selectable Text</Text>
        <View className="text-group">
          <Text className="text-headline">Standard Headline Text</Text>
          <Text className="text-sub">Regular secondary description text paragraph.</Text>
          <Text selectable className="text-selectable">This text is selectable (user-select / selectable=true)</Text>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Continuous Space Display (ensp, emsp, nbsp)</Text>
        <View className="text-group">
          <Text space="ensp">Half-width   space   (ensp)</Text>
          <Text space="emsp">Full-width   space   (emsp)</Text>
          <Text space="nbsp">Non-breaking   space   (nbsp)</Text>
        </View>
      </View>
    </View>
  );
}`,

  'icon': `import React from 'react';
import { View, Text, Icon } from '@tarojs/components';
import './index.css';

export default function IconPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Standard System Icons</Text>
        <View className="icon-grid">
          <View className="icon-item"><Icon type="success" size="32" /><Text>success</Text></View>
          <View className="icon-item"><Icon type="info" size="32" /><Text>info</Text></View>
          <View className="icon-item"><Icon type="warn" size="32" /><Text>warn</Text></View>
          <View className="icon-item"><Icon type="waiting" size="32" /><Text>waiting</Text></View>
          <View className="icon-item"><Icon type="cancel" size="32" /><Text>cancel</Text></View>
          <View className="icon-item"><Icon type="search" size="32" /><Text>search</Text></View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Icon Sizes and Colors</Text>
        <View className="demo-row" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Icon type="success" size="24" color="#10b981" />
          <Icon type="success" size="36" color="#3b82f6" />
          <Icon type="success" size="48" color="#f59e0b" />
          <Icon type="success" size="60" color="#ef4444" />
        </View>
      </View>
    </View>
  );
}`,

  'rich-text': `import React from 'react';
import { View, Text, RichText } from '@tarojs/components';
import './index.css';

export default function RichTextPage() {
  const htmlSnippet = '<div style="background:#eff6ff;padding:12px;border-radius:8px;"><h4 style="color:#1d4ed8;margin:0 0 6px 0;">Macle HTML RichText</h4><p style="color:#334155;font-size:13px;margin:0;">Render formatted HTML strings with <b>bold tags</b> and <span style="color:#ef4444;">colored highlights</span>.</p></div>';
  const nodeArray = [{
    name: 'div',
    attrs: { class: 'custom-node-box', style: 'color:#059669;font-weight:bold;font-size:14px;' },
    children: [{ type: 'text', text: '✓ Rendered via Structured Node Array' }]
  }];

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. HTML String Rendering</Text>
        <RichText nodes={htmlSnippet} space="nbsp" />
      </View>
      <View className="demo-block">
        <Text className="demo-title">2. Node Array Structure</Text>
        <RichText nodes={nodeArray as any} />
      </View>
    </View>
  );
}`,

  'progress': `import React, { useState } from 'react';
import { View, Text, Progress, Button } from '@tarojs/components';
import './index.css';

export default function ProgressPage() {
  const [percent, setPercent] = useState(40);
  const increase = () => setPercent(p => (p >= 100 ? 20 : p + 20));

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Progress Bar with Percentage</Text>
        <View className="progress-col">
          <Progress percent={30} showInfo strokeWidth={4} />
          <Progress percent={65} showInfo strokeWidth={6} activeColor="#3b82f6" />
          <Progress percent={90} showInfo strokeWidth={8} activeColor="#10b981" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Animated & Custom Stroke/Color Progress</Text>
        <View className="progress-col">
          <Progress percent={percent} showInfo active activeMode="forwards" strokeWidth={8} borderRadius={4} activeColor="#8b5cf6" />
          <Button size="mini" type="default" onClick={increase} style={{ alignSelf: 'flex-start', marginTop: '8px' }}>+20% Progress</Button>
        </View>
      </View>
    </View>
  );
}`,

  'button': `import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function ButtonPage() {
  const handlePrimaryTap = () => {
    Taro.showToast({ title: 'Tapped Primary', icon: 'success' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Default Button (Normal & Disabled)</Text>
        <View className="btn-group">
          <Button type="default" hoverStartTime={200} hoverStayTime={500}>Normal Default</Button>
          <Button type="default" disabled>Default Disabled</Button>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Warn Button (Normal & Disabled)</Text>
        <View className="btn-group">
          <Button type="warn">Warn Action</Button>
          <Button type="warn" disabled>Warn Disabled</Button>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Primary Button & Form Actions</Text>
        <View className="btn-group">
          <Button type="primary" onClick={handlePrimaryTap}>Primary Button</Button>
          <Button type="primary" size="mini" style={{ alignSelf: 'flex-start' }}>Mini Primary</Button>
        </View>
      </View>
    </View>
  );
}`,

  'checkbox': `import React, { useState } from 'react';
import { View, Text, Label, Checkbox } from '@tarojs/components';
import './index.css';

export default function CheckboxPage() {
  const [isAgree, setIsAgree] = useState(true);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Single Checkbox with Checked State & Color</Text>
        <View className="checkbox-demo">
          <Label className="cb-row" onClick={() => setIsAgree(!isAgree)}>
            <Checkbox value="agree" checked={isAgree} color="#2563eb" />
            <Text className="cb-label">I agree to the Terms of Service</Text>
          </Label>
        </View>
      </View>
    </View>
  );
}`,

  'checkbox-group': `import React, { useState } from 'react';
import { View, Text, Label, Checkbox, CheckboxGroup } from '@tarojs/components';
import './index.css';

export default function CheckboxGroupPage() {
  const [selectedList, setSelectedList] = useState('JS, TS');
  const options = [
    { value: 'JS', label: 'JavaScript', checked: true },
    { value: 'TS', label: 'TypeScript', checked: true },
    { value: 'REACT', label: 'React / Taro', checked: false },
    { value: 'MAML', label: 'Native MAML', checked: false }
  ];

  const onChange = (e: any) => {
    setSelectedList(e.detail.value.join(', '));
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Multi-Select Checkbox Group with Change Handler</Text>
        <CheckboxGroup onChange={onChange}>
          <View className="cb-list">
            {options.map(item => (
              <Label key={item.value} className="cb-item">
                <Checkbox value={item.value} checked={item.checked} color="#0284c7" />
                <Text>{item.label}</Text>
              </Label>
            ))}
          </View>
        </CheckboxGroup>
        <View className="selected-text">Selected: {selectedList}</View>
      </View>
    </View>
  );
}`,

  'form': `import React from 'react';
import { View, Text, Form, Input, Switch, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function FormPage() {
  const onSubmit = (e: any) => {
    Taro.showModal({ title: 'Form Submitted', content: JSON.stringify(e.detail.value), showCancel: false });
  };
  const onReset = () => {
    Taro.showToast({ title: 'Form Reset', icon: 'none' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Form Container with Submit & Reset Handlers</Text>
        <Form onSubmit={onSubmit} onReset={onReset}>
          <View className="form-field">
            <Text className="form-label">Username:</Text>
            <Input name="username" className="form-input" placeholder="Enter username" />
          </View>
          <View className="form-field">
            <Text className="form-label">Notifications:</Text>
            <Switch name="notify" checked color="#2563eb" />
          </View>
          <View className="form-actions">
            <Button formType="submit" type="primary" size="mini">Submit</Button>
            <Button formType="reset" type="default" size="mini">Reset</Button>
          </View>
        </Form>
      </View>
    </View>
  );
}`,

  'input': `import React, { useState } from 'react';
import { View, Text, Input } from '@tarojs/components';
import './index.css';

export default function InputPage() {
  const [val, setVal] = useState('');

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Text Input with Placeholder</Text>
        <View className="input-block">
          <Input className="std-input" placeholder="Standard text input..." onInput={e => setVal(e.detail.value)} />
          <Text className="input-val-preview">Current Input: {val}</Text>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Password, Number & Digit Input Types</Text>
        <View className="input-col">
          <Input className="std-input" password placeholder="Password input" />
          <Input className="std-input" type="number" placeholder="Number keyboard input" />
          <Input className="std-input" type="digit" placeholder="Decimal digit keyboard input" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Focus, Maxlength & Confirm Type</Text>
        <Input className="std-input" maxLength={10} confirmType="done" placeholder="Maxlength 10 chars" />
      </View>
    </View>
  );
}`,

  'picker': `import React, { useState } from 'react';
import { View, Text, Picker } from '@tarojs/components';
import './index.css';

export default function PickerPage() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry'];
  const [fruitIdx, setFruitIdx] = useState(0);
  const [date, setDate] = useState('2026-11-07');

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Normal Selector (Single Column)</Text>
        <Picker mode="selector" range={fruits} value={fruitIdx} onChange={(e: any) => setFruitIdx(e.detail.value)}>
          <View className="picker-display">Selected Fruit: <Text className="highlight">{fruits[fruitIdx]}</Text></View>
        </Picker>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Time & Date Selector</Text>
        <Picker mode="date" value={date} onChange={(e: any) => setDate(e.detail.value)}>
          <View className="picker-display">Date: <Text className="highlight">{date}</Text></View>
        </Picker>
      </View>
    </View>
  );
}`,

  'picker-view': `import React, { useState } from 'react';
import { View, Text, PickerView, PickerViewColumn } from '@tarojs/components';
import './index.css';

export default function PickerViewPage() {
  const years = [2024, 2025, 2026, 2027];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const days = [1, 5, 10, 15, 20, 25, 30];
  const [val, setVal] = useState([2, 10, 3]);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Embedded Multi-Column Picker View</Text>
        <View className="preview-date">{years[val[0]]}年 {months[val[1]]}月 {days[val[2]]}日</View>
        <PickerView indicatorStyle="height: 50px;" style={{ width: '100%', height: '200px', background: '#fff', borderRadius: '8px' }} value={val} onChange={(e: any) => setVal(e.detail.value)}>
          <PickerViewColumn>
            {years.map(y => <View key={y} style={{ lineHeight: '50px', textAlign: 'center' }}>{y}年</View>)}
          </PickerViewColumn>
          <PickerViewColumn>
            {months.map(m => <View key={m} style={{ lineHeight: '50px', textAlign: 'center' }}>{m}月</View>)}
          </PickerViewColumn>
          <PickerViewColumn>
            {days.map(d => <View key={d} style={{ lineHeight: '50px', textAlign: 'center' }}>{d}日</View>)}
          </PickerViewColumn>
        </PickerView>
      </View>
    </View>
  );
}`,

  'picker-view-column': `import React from 'react';
import { View, Text, PickerView, PickerViewColumn } from '@tarojs/components';
import './index.css';

export default function PickerViewColumnPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Picker View Column Layout</Text>
        <PickerView indicatorStyle="height: 40px;" style={{ height: '120px', background: '#fff' }}>
          <PickerViewColumn>
            <View style={{ lineHeight: '40px', textAlign: 'center' }}>Option 1</View>
            <View style={{ lineHeight: '40px', textAlign: 'center' }}>Option 2</View>
            <View style={{ lineHeight: '40px', textAlign: 'center' }}>Option 3</View>
          </PickerViewColumn>
        </PickerView>
      </View>
    </View>
  );
}`,

  'label': `import React from 'react';
import { View, Text, Label, Checkbox, Radio } from '@tarojs/components';
import './index.css';

export default function LabelPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Label with for Attribute Binding</Text>
        <View className="label-demo">
          <Checkbox id="agree-cb" color="#2563eb" />
          <Label for="agree-cb" className="bound-label">Tap this label text to toggle checkbox</Label>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Label Encapsulating Controls</Text>
        <Label className="enclosing-label">
          <Radio value="r1" checked color="#10b981" />
          <Text style={{ marginLeft: '8px', fontSize: '14px' }}>Enclosed Radio inside Label</Text>
        </Label>
      </View>
    </View>
  );
}`,

  'switch': `import React, { useState } from 'react';
import { View, Text, Switch } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function SwitchPage() {
  const [isEnabled, setIsEnabled] = useState(true);
  const onToggle = (e: any) => {
    setIsEnabled(e.detail.value);
    Taro.showToast({ title: e.detail.value ? 'Enabled' : 'Disabled', icon: 'none' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Switch Selector with Change Event</Text>
        <View className="switch-row">
          <Text className="sw-title">Notification Enabled:</Text>
          <Switch checked={isEnabled} onChange={onToggle} color="#2563eb" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Checkbox Style Switch & Custom Color</Text>
        <View className="switch-row">
          <Text className="sw-title">Checkbox Style Switch:</Text>
          <Switch type="checkbox" checked color="#10b981" />
        </View>
      </View>
    </View>
  );
}`,

  'radio': `import React from 'react';
import { View, Text, Radio } from '@tarojs/components';
import './index.css';

export default function RadioPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Single Radio Button</Text>
        <View className="radio-row">
          <Radio value="single" checked color="#2563eb" />
          <Text style={{ marginLeft: '8px', fontSize: '14px' }}>Standalone Checked Radio</Text>
        </View>
      </View>
    </View>
  );
}`,

  'radio-group': `import React, { useState } from 'react';
import { View, Text, Label, Radio, RadioGroup } from '@tarojs/components';
import './index.css';

export default function RadioGroupPage() {
  const [plan, setPlan] = useState('pro');
  const plans = [
    { id: 'free', name: 'Free Tier', price: '$0' },
    { id: 'pro', name: 'Pro Plan', price: '$19/mo' },
    { id: 'team', name: 'Team Enterprise', price: '$49/mo' }
  ];

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Radio Group with Exclusive Selection</Text>
        <RadioGroup onChange={(e: any) => setPlan(e.detail.value)}>
          <View className="radio-list">
            {plans.map(p => (
              <Label key={p.id} className="radio-item">
                <Radio value={p.id} checked={p.id === plan} color="#2563eb" />
                <Text className="radio-label">{p.name} ({p.price})</Text>
              </Label>
            ))}
          </View>
        </RadioGroup>
        <View className="selected-plan">Selected: {plan}</View>
      </View>
    </View>
  );
}`,

  'slider': `import React, { useState } from 'react';
import { View, Text, Slider } from '@tarojs/components';
import './index.css';

export default function SliderPage() {
  const [volume, setVolume] = useState(50);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Slider with Min, Max & Show-Value</Text>
        <View className="slider-box">
          <Slider min={0} max={100} value={volume} showValue onChange={(e: any) => setVolume(e.detail.value)} activeColor="#2563eb" />
          <Text className="slider-text">Volume: {volume}%</Text>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Step Slider with Custom Colors</Text>
        <View className="slider-box">
          <Slider step={10} value={30} showValue activeColor="#10b981" blockColor="#059669" blockSize={20} />
        </View>
      </View>
    </View>
  );
}`,

  'textarea': `import React, { useState } from 'react';
import { View, Text, Textarea } from '@tarojs/components';
import './index.css';

export default function TextareaPage() {
  const [len, setLen] = useState(0);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Multi-Line Textarea with Placeholder</Text>
        <View className="textarea-wrp">
          <Textarea className="std-textarea" placeholder="Enter comments or description..." onInput={(e: any) => setLen(e.detail.value?.length || 0)} maxLength={200} />
          <View className="char-count">{len} / 200</View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Auto-Height Textarea with Maxlength</Text>
        <View className="textarea-wrp">
          <Textarea autoHeight placeholder="Auto-height textarea expanding with lines" className="std-textarea" />
        </View>
      </View>
    </View>
  );
}`,

  'navigator': `import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function NavigatorPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Page Navigation (open-type="navigate")</Text>
        <View className="nav-container">
          <Navigator url="/pages/button/index" openType="navigate" hoverClass="nav-hover" className="nav-btn">
            👉 Navigate to Button Component Page
          </Navigator>
          <Navigator url="/pages/input/index" openType="navigate" hoverClass="nav-hover" className="nav-btn">
            👉 Navigate to Input Component Page
          </Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Page Redirect (open-type="redirect")</Text>
        <Navigator url="/pages/view/index" openType="redirect" className="nav-btn">
          🔄 Redirect to View Page (Close Current)
        </Navigator>
      </View>
    </View>
  );
}`,

  'image': `import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.css';

export default function ImagePage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Image Scaling Modes (scaleToFill, aspectFit, aspectFill)</Text>
        <View className="img-grid">
          <View className="img-card">
            <Image className="demo-img" mode="aspectFit" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
            <Text className="img-label">mode="aspectFit"</Text>
          </View>
          <View className="img-card">
            <Image className="demo-img" mode="aspectFill" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
            <Text className="img-label">mode="aspectFill"</Text>
          </View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Local & Remote Image Source</Text>
        <View className="img-box">
          <Image className="wide-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" mode="widthFix" />
        </View>
      </View>
    </View>
  );
}`,

  'video': `import React from 'react';
import { View, Text, Video } from '@tarojs/components';
import './index.css';

export default function VideoPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Video Player with Controls & Poster</Text>
        <View className="video-container">
          <Video id="myVideo" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80" controls style={{ width: '100%', height: '200px', borderRadius: '8px' }} />
        </View>
      </View>
    </View>
  );
}`,

  'audio': `import React from 'react';
import { View, Text, Audio } from '@tarojs/components';
import './index.css';

export default function AudioPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Audio Player with Playback Controls</Text>
        <View className="audio-container">
          <Audio id="myAudio" name="Sample Audio Track" author="Macle OpenDoc" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls style={{ width: '100%' }} />
        </View>
      </View>
    </View>
  );
}`,

  'camera': `import React from 'react';
import { View, Text, Camera, CoverView } from '@tarojs/components';
import './index.css';

export default function CameraPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Camera Viewfinder with Device Position & Flash</Text>
        <View className="camera-wrapper">
          <Camera devicePosition="back" flash="off" style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden' }}>
            <CoverView style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
              Device: Back | Flash: Off
            </CoverView>
          </Camera>
        </View>
      </View>
    </View>
  );
}`,

  'web-view': `import React from 'react';
import { View, Text, WebView } from '@tarojs/components';
import './index.css';

export default function WebViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Full-Screen Web Browser View</Text>
        <WebView src="https://example.com" />
      </View>
    </View>
  );
}`,

  'page-meta': `import React from 'react';
import { View, Text, PageMeta } from '@tarojs/components';
import './index.css';

export default function PageMetaPage() {
  return (
    <View className="page-body">
      <PageMeta backgroundColor="#f8fafc" pageStyle="padding: 12px;" />
      <View className="demo-block">
        <Text className="demo-title">1. Dynamic Page Meta Configuration</Text>
        <View className="meta-content">
          <Text className="meta-title">Page Meta Defined</Text>
          <Text className="meta-desc">Configures root page styling dynamically.</Text>
        </View>
      </View>
    </View>
  );
}`,

  'map': `import React from 'react';
import { View, Text, Map } from '@tarojs/components';
import './index.css';

export default function MapPage() {
  const markers = [{
    id: 1,
    latitude: 31.2304,
    longitude: 121.4737,
    name: 'Macle Headquarters'
  }];

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Interactive Map with Markers & Coordinates</Text>
        <Map latitude={31.2304} longitude={121.4737} markers={markers as any} scale={14} style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden' }} />
      </View>
    </View>
  );
}`
};

// Generate each of the 32 Native Component Pages for Taro
console.log('2. Generating 32 Taro Native Component pages...');

for (const [key, spec] of Object.entries(componentSpecs)) {
  const componentName = key.split('/')[1];
  const pageDir = path.join(TARO_SRC, 'pages', componentName);
  fs.mkdirSync(pageDir, { recursive: true });

  // TSX
  const tsxCode = taroPageRenderers[componentName] || `import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function ${capitalize(componentName)}Page() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. ${componentName} Component</Text>
      </View>
    </View>
  );
}
`;

  // Config
  const configCode = `export default definePageConfig({
  navigationBarTitleText: '${componentName} ${spec.titleZh || ''}'.trim()
});
`;

  // CSS
  let cssContent = `/* pages/${componentName}/index.css */\n`;
  spec.samples.forEach(sample => {
    if (sample.css) {
      cssContent += sample.css.trim() + '\n\n';
    }
  });

  fs.writeFileSync(path.join(pageDir, 'index.tsx'), tsxCode);
  fs.writeFileSync(path.join(pageDir, 'index.config.ts'), configCode);
  fs.writeFileSync(path.join(pageDir, 'index.css'), cssContent);

  console.log(`Generated Taro page: pages/${componentName}/index`);
}

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

console.log('✓ Successfully generated all 32 Taro React component pages.');
