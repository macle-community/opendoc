const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '../../../');
const OPENDOC_DIR = path.resolve(__dirname, '../../');
const TARO_DIR = path.join(OPENDOC_DIR, 'miniapp-taro');
const SAMPLE_PROJECT_DIR = path.join(ROOT_DIR, 'sample-project');

console.log('[Taro Miniapp] 1. Initializing directory at:', TARO_DIR);
fs.mkdirSync(TARO_DIR, { recursive: true });
fs.mkdirSync(path.join(TARO_DIR, 'config'), { recursive: true });
fs.mkdirSync(path.join(TARO_DIR, 'types'), { recursive: true });
fs.mkdirSync(path.join(TARO_DIR, 'src'), { recursive: true });

// 1. Symlink node_modules to reuse sample-project dependencies
const nodeModulesPath = path.join(TARO_DIR, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  fs.symlinkSync(path.join(SAMPLE_PROJECT_DIR, 'node_modules'), nodeModulesPath, 'dir');
  console.log('[Taro Miniapp] Symlinked node_modules to sample-project/node_modules');
}

// 2. package.json
const packageJson = {
  name: "opendoc-miniapp-taro",
  version: "1.0.0",
  private: true,
  description: "OpenDoc Taro React Mini App Showcase for Macle",
  scripts: {
    "build:macle": "taro build --type macle",
    "dev:macle": "taro build --type macle --watch"
  },
  dependencies: {
    "@tarojs/components": "^4.3.2",
    "@tarojs/helper": "^4.3.2",
    "@tarojs/plugin-framework-react": "^4.3.2",
    "@tarojs/plugin-platform-macle": "file:../../plugin-platform-macle",
    "@tarojs/react": "^4.3.2",
    "@tarojs/runtime": "^4.3.2",
    "@tarojs/shared": "^4.3.2",
    "@tarojs/taro": "^4.3.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  devDependencies: {
    "@babel/core": "^7.20.0",
    "@babel/preset-react": "^7.29.7",
    "@tarojs/cli": "^4.3.2",
    "@tarojs/webpack5-runner": "^4.3.2",
    "@types/react": "^18.0.0",
    "@types/webpack-env": "^1.13.6",
    "babel-preset-taro": "^4.3.2",
    "typescript": "^5.0.4",
    "webpack": "^5.78.0"
  }
};
fs.writeFileSync(path.join(TARO_DIR, 'package.json'), JSON.stringify(packageJson, null, 2));

// 3. babel.config.js
fs.writeFileSync(path.join(TARO_DIR, 'babel.config.js'), `// babel.config.js
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ]
};
`);

// 4. tsconfig.json
fs.writeFileSync(path.join(TARO_DIR, 'tsconfig.json'), `{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "removeComments": false,
    "preserveConstEnums": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "noImplicitAny": false,
    "allowSyntheticDefaultImports": true,
    "outDir": "lib",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "strictNullChecks": false,
    "sourceMap": true,
    "baseUrl": ".",
    "rootDir": ".",
    "jsx": "react-jsx",
    "allowJs": true,
    "resolveJsonModule": true,
    "typeRoots": [
      "node_modules/@types"
    ]
  },
  "include": [
    "src",
    "types"
  ],
  "compileOnSave": false
}
`);

// 5. types/global.d.ts
fs.writeFileSync(path.join(TARO_DIR, 'types/global.d.ts'), `/// <reference types="@tarojs/taro" />
declare const ma: any;
declare namespace Taro {
  interface TaroStatic {
    tradePay?: (options: any) => Promise<any>;
    startPay?: (options: any) => Promise<any>;
  }
}
`);

// 6. project.config.json
fs.writeFileSync(path.join(TARO_DIR, 'project.config.json'), JSON.stringify({
  miniprogramRoot: "dist/",
  projectname: "miniapp-taro",
  description: "Macle Taro React Mini App for OpenDoc",
  appid: "macle-opendoc-taro",
  setting: {
    es6: true,
    es5: false
  }
}, null, 2));

// 7. config/index.ts, config/dev.ts, config/prod.ts
fs.writeFileSync(path.join(TARO_DIR, 'config/index.ts'), `import path from 'path';
import { defineConfig, type UserConfigExport } from '@tarojs/cli';

export default defineConfig(async (merge) => {
  const baseConfig: UserConfigExport = {
    projectName: 'opendoc-miniapp-taro',
    date: '2026-11-06',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
      '@tarojs/plugin-framework-react',
      path.resolve(__dirname, '../../../plugin-platform-macle')
    ],
    framework: 'react',
    compiler: 'webpack5',
    cache: {
      enable: false
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false
        }
      }
    }
  };

  if (process.env.NODE_ENV === 'development') {
    return merge({}, baseConfig, require('./dev').default);
  }
  return merge({}, baseConfig, require('./prod').default);
});
`);

fs.writeFileSync(path.join(TARO_DIR, 'config/dev.ts'), `import type { UserConfigExport } from '@tarojs/cli';
export default {
  logger: { quiet: false, stats: true },
  mini: {}
} satisfies UserConfigExport;
`);

fs.writeFileSync(path.join(TARO_DIR, 'config/prod.ts'), `import type { UserConfigExport } from '@tarojs/cli';
export default {
  mini: {}
} satisfies UserConfigExport;
`);

// 8. Pages list
const pageNames = [
  'index',
  'runner',
  'button',
  'layout',
  'cell',
  'checkbox',
  'radio',
  'switch',
  'slider',
  'stepper',
  'field',
  'tag',
  'loading',
  'progress',
  'divider',
  'empty',
  'steps',
  'dialog',
  'toast',
  'view',
  'text',
  'swiper',
  'scroll-view'
];

// src/app.config.ts
const appConfig = {
  pages: pageNames.map(name => `pages/${name}/index`),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#0f172a',
    navigationBarTitleText: '⚛️ Taro React Showcase',
    navigationBarTextStyle: 'white'
  }
};
fs.writeFileSync(path.join(TARO_DIR, 'src/app.config.ts'), `export default defineAppConfig(${JSON.stringify(appConfig, null, 2)});
`);

// src/app.ts
fs.writeFileSync(path.join(TARO_DIR, 'src/app.ts'), `import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import './app.css';

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('[Macle Taro Miniapp] App launched successfully!');
  });
  return children;
}

export default App;
`);

// src/app.css
fs.writeFileSync(path.join(TARO_DIR, 'src/app.css'), `page {
  background-color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  box-sizing: border-box;
}

.taro-badge-banner {
  background: #0f172a;
  color: #38bdf8;
  padding: 8px 14px;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #1e293b;
}

.demo-block {
  margin: 14px 12px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.demo-title {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
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

.demo-layout-col {
  background-color: #38bdf8;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  padding: 10px 0;
  font-size: 12px;
  font-weight: 600;
  box-sizing: border-box;
  border: 1px dashed rgba(255, 255, 255, 0.7);
}

.demo-layout-col-alt {
  background-color: #0284c7;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  padding: 10px 0;
  font-size: 12px;
  font-weight: 600;
  box-sizing: border-box;
  border: 1px dashed rgba(255, 255, 255, 0.7);
}
`);

// 9. Generate each Taro React page
const pagesDir = path.join(TARO_DIR, 'src/pages');
fs.mkdirSync(pagesDir, { recursive: true });

const pageDefinitions = {
  'index': {
    title: '⚛️ Taro Component Showcase',
    code: `import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function IndexPage() {
  return (
    <View className="home-container">
      <View className="taro-banner">
        <Text className="banner-badge">⚛️ Taro 4.3 + @tarojs/plugin-platform-macle</Text>
        <Text className="banner-title">Macle Taro Showcase</Text>
        <Text className="banner-sub">React-Powered MiniProgram Components</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">MAUI Basic Components</Text>
        <View className="nav-grid">
          <Navigator url="/pages/button/index" className="nav-item">Button 按钮</Navigator>
          <Navigator url="/pages/layout/index" className="nav-item">Layout 栅格</Navigator>
          <Navigator url="/pages/cell/index" className="nav-item">Cell 单元格</Navigator>
          <Navigator url="/pages/tag/index" className="nav-item">Tag 标签</Navigator>
          <Navigator url="/pages/loading/index" className="nav-item">Loading 加载</Navigator>
          <Navigator url="/pages/progress/index" className="nav-item">Progress 进度条</Navigator>
          <Navigator url="/pages/divider/index" className="nav-item">Divider 分割线</Navigator>
          <Navigator url="/pages/empty/index" className="nav-item">Empty 空状态</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">MAUI Form Components</Text>
        <View className="nav-grid">
          <Navigator url="/pages/checkbox/index" className="nav-item">Checkbox 复选框</Navigator>
          <Navigator url="/pages/radio/index" className="nav-item">Radio 单选框</Navigator>
          <Navigator url="/pages/switch/index" className="nav-item">Switch 开关</Navigator>
          <Navigator url="/pages/slider/index" className="nav-item">Slider 滑块</Navigator>
          <Navigator url="/pages/stepper/index" className="nav-item">Stepper 步进器</Navigator>
          <Navigator url="/pages/field/index" className="nav-item">Field 输入框</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">MAUI Feedback & Nav</Text>
        <View className="nav-grid">
          <Navigator url="/pages/dialog/index" className="nav-item">Dialog 弹出框</Navigator>
          <Navigator url="/pages/toast/index" className="nav-item">Toast 轻提示</Navigator>
          <Navigator url="/pages/steps/index" className="nav-item">Steps 步骤条</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Standard DSL Components</Text>
        <View className="nav-grid">
          <Navigator url="/pages/view/index" className="nav-item">View 视图</Navigator>
          <Navigator url="/pages/text/index" className="nav-item">Text 文本</Navigator>
          <Navigator url="/pages/swiper/index" className="nav-item">Swiper 轮播</Navigator>
          <Navigator url="/pages/scroll-view/index" className="nav-item">ScrollView 滚动</Navigator>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.home-container { padding: 12px; }
.taro-banner {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  padding: 18px 16px;
  border-radius: 12px;
  margin-bottom: 14px;
  border-left: 4px solid #38bdf8;
}
.banner-badge {
  font-size: 11px;
  font-weight: 700;
  color: #38bdf8;
  display: block;
  margin-bottom: 6px;
}
.banner-title { font-size: 20px; font-weight: 800; display: block; margin-bottom: 4px; }
.banner-sub { font-size: 12px; opacity: 0.8; display: block; }
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
    title: 'Dynamic Taro Runner',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro, { useRouter } from '@tarojs/taro';

export default function RunnerPage() {
  const router = useRouter();
  const title = router.params.title ? decodeURIComponent(router.params.title) : 'Taro React Live Execution';
  const [clickCount, setClickCount] = useState(0);

  const handleAction = () => {
    setClickCount(prev => prev + 1);
    Taro.showToast({
      title: \`Taro React clicked \${clickCount + 1} times!\`,
      icon: 'success'
    });
  };

  return (
    <View style={{ padding: '12px' }}>
      <View className="demo-block">
        <Text className="demo-title">⚛️ Dynamic Taro React Execution</Text>
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Text style={{ fontSize: '13px', color: '#64748b' }}>{title}</Text>
          <MauiButton type="primary" block onClick={handleAction}>
            Execute Taro React Action ({clickCount})
          </MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'button': {
    title: 'Button 按钮 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function ButtonPage() {
  const handleClick = (type: string) => {
    Taro.showToast({ title: \`Clicked \${type} button!\`, icon: 'none' });
  };

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="taro-badge-banner">
        <Text>⚛️ Taro React: MauiButton</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">1. Button Types</Text>
        <View className="demo-row">
          <MauiButton type="default" onClick={() => handleClick('default')}>default</MauiButton>
          <MauiButton type="primary" onClick={() => handleClick('primary')}>primary</MauiButton>
          <MauiButton type="info" onClick={() => handleClick('info')}>info</MauiButton>
          <MauiButton type="warning" onClick={() => handleClick('warning')}>warning</MauiButton>
          <MauiButton type="danger" onClick={() => handleClick('danger')}>danger</MauiButton>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Plain & Hairline</Text>
        <View className="demo-row">
          <MauiButton plain type="primary">plain primary</MauiButton>
          <MauiButton plain type="info">plain info</MauiButton>
          <MauiButton plain hairline type="primary">hairline primary</MauiButton>
          <MauiButton plain hairline type="info">hairline info</MauiButton>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Disabled & Loading</Text>
        <View className="demo-row">
          <MauiButton disabled type="primary">disabled</MauiButton>
          <MauiButton disabled type="info">disabled</MauiButton>
          <MauiButton loading type="primary" />
          <MauiButton loading type="primary" loading-type="spinner" />
          <MauiButton loading type="info" loading-text="Loading..." />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Button Shapes & Sizes</Text>
        <View className="demo-row">
          <MauiButton square type="primary">square</MauiButton>
          <MauiButton round type="info">round</MauiButton>
          <MauiButton type="primary" size="large">large</MauiButton>
          <MauiButton type="primary" size="normal">normal</MauiButton>
          <MauiButton type="primary" size="small">small</MauiButton>
          <MauiButton type="primary" size="mini">mini</MauiButton>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">5. Block-Level & Custom Colors</Text>
        <View className="demo-col">
          <MauiButton type="primary" block>block-level element</MauiButton>
        </View>
        <View className="demo-row" style={{ marginTop: '10px' }}>
          <MauiButton color="#7232dd">single-color</MauiButton>
          <MauiButton color="#7232dd" plain>single-color plain</MauiButton>
          <MauiButton color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient color</MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'layout': {
    title: 'Layout 栅格 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRow, MauiCol } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function LayoutPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="taro-badge-banner">
        <Text>⚛️ Taro React: MauiRow & MauiCol</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (span: 8, 8, 8)</Text>
        <MauiRow>
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col-alt">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Column Offset (span: 4 + offset: 4, span: 10)</Text>
        <MauiRow>
          <MauiCol span={4}><View className="demo-layout-col">span: 4</View></MauiCol>
          <MauiCol span={10} offset={4}><View className="demo-layout-col-alt">offset: 4, span: 10</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Column Offset (offset: 12, span: 12)</Text>
        <MauiRow>
          <MauiCol offset={12} span={12}><View className="demo-layout-col">offset: 12, span: 12</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Column Gutter (gutter: 20)</Text>
        <MauiRow gutter="20">
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col-alt">span: 8</View></MauiCol>
          <MauiCol span={8}><View className="demo-layout-col">span: 8</View></MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">5. Flex Layout (justify: center / end)</Text>
        <MauiRow type="flex" justify="center">
          <MauiCol span={6}><View className="demo-layout-col">span: 6</View></MauiCol>
          <MauiCol span={6}><View className="demo-layout-col-alt">span: 6</View></MauiCol>
        </MauiRow>
        <View style={{ height: '10px' }} />
        <MauiRow type="flex" justify="end">
          <MauiCol span={6}><View className="demo-layout-col">span: 6</View></MauiCol>
          <MauiCol span={6}><View className="demo-layout-col-alt">span: 6</View></MauiCol>
        </MauiRow>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'cell': {
    title: 'Cell 单元格 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCell, MauiCellGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function CellPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiCellGroup>
          <MauiCell title="Cell Title" value="Content" />
          <MauiCell title="Cell Title" value="Content" label="Description information" />
        </MauiCellGroup>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Navigation & Arrow</Text>
        <MauiCellGroup>
          <MauiCell title="URL Navigation" is-link onClick={() => Taro.showToast({ title: 'Navigated!', icon: 'none' })} />
          <MauiCell title="Arrow Direction" is-link arrow-direction="down" value="Detail" />
        </MauiCellGroup>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'checkbox': {
    title: 'Checkbox 复选框 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCheckbox, MauiCheckboxGroup } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function CheckboxPage() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiCheckbox value={checked1} onChange={() => setChecked1(!checked1)}>
          Checkbox: {checked1 ? 'Checked' : 'Unchecked'}
        </MauiCheckbox>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Shape & Color</Text>
        <MauiCheckbox value={checked2} shape="square" checked-color="#07c160" onChange={() => setChecked2(!checked2)}>
          Square Custom Color
        </MauiCheckbox>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'radio': {
    title: 'Radio 单选框 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRadio, MauiRadioGroup } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function RadioPage() {
  const [radioValue, setRadioValue] = useState('1');

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Radio Group (Selected: {radioValue})</Text>
        <MauiRadioGroup value={radioValue} onChange={(e: any) => setRadioValue(e.detail || e.target?.value || '1')}>
          <MauiRadio name="1">Option 1</MauiRadio>
          <View style={{ height: '8px' }} />
          <MauiRadio name="2">Option 2</MauiRadio>
        </MauiRadioGroup>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'switch': {
    title: 'Switch 开关 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSwitch } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function SwitchPage() {
  const [checked, setChecked] = useState(true);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Switch</Text>
        <View className="demo-row">
          <MauiSwitch checked={checked} onChange={() => setChecked(!checked)} />
          <Text style={{ fontSize: '13px' }}>State: {checked ? 'ON' : 'OFF'}</Text>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'slider': {
    title: 'Slider 滑块 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSlider } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function SliderPage() {
  const [val, setVal] = useState(50);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Slider (Value: {val})</Text>
        <MauiSlider value={val} onChange={(e: any) => setVal(e.detail || 50)} />
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'stepper': {
    title: 'Stepper 步进器 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiStepper } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function StepperPage() {
  const [val, setVal] = useState(1);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Stepper (Value: {val})</Text>
        <MauiStepper value={val} min={1} max={10} step={1} onChange={(e: any) => setVal(e.detail || 1)} />
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'field': {
    title: 'Field 输入框 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiField } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function FieldPage() {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Field</Text>
        <MauiField
          value={text}
          label="Username"
          placeholder="Please enter username"
          onChange={(e: any) => setText(e.detail || '')}
        />
        <Text style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', display: 'block' }}>
          Current input: {text}
        </Text>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'tag': {
    title: 'Tag 标签 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiTag } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function TagPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Tag Types</Text>
        <View className="demo-row">
          <MauiTag type="default">Default</MauiTag>
          <MauiTag type="primary">Primary</MauiTag>
          <MauiTag type="success">Success</MauiTag>
          <MauiTag type="danger">Danger</MauiTag>
          <MauiTag type="warning">Warning</MauiTag>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'loading': {
    title: 'Loading 加载 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiLoading } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function LoadingPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Loading Types</Text>
        <View className="demo-row">
          <MauiLoading />
          <MauiLoading type="spinner" />
          <MauiLoading color="#1989fa">Loading...</MauiLoading>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'progress': {
    title: 'Progress 进度条 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiProgress } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function ProgressPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Progress Bars</Text>
        <View style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <MauiProgress percentage={50} />
          <MauiProgress percentage={75} stroke-width="8" />
          <MauiProgress percentage={100} color="#07c160" />
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'divider': {
    title: 'Divider 分割线 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiDivider } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function DividerPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Dividers</Text>
        <MauiDivider contentPosition="center">Text Center</MauiDivider>
        <MauiDivider contentPosition="left">Text Left</MauiDivider>
        <MauiDivider dashed>Dashed Divider</MauiDivider>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'empty': {
    title: 'Empty 空状态 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiEmpty, MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function EmptyPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Empty State</Text>
        <MauiEmpty description="No Data Available">
          <MauiButton round type="danger" size="small" onClick={() => Taro.showToast({ title: 'Refreshing...', icon: 'loading' })}>
            Refresh
          </MauiButton>
        </MauiEmpty>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'steps': {
    title: 'Steps 步骤条 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSteps, MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function StepsPage() {
  const [active, setActive] = useState(1);
  const steps = [
    { text: 'Step 1', desc: 'Description 1' },
    { text: 'Step 2', desc: 'Description 2' },
    { text: 'Step 3', desc: 'Description 3' }
  ];

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Steps (Active: {active + 1})</Text>
        <MauiSteps steps={steps} active={active} />
        <View style={{ marginTop: '12px' }}>
          <MauiButton size="small" type="primary" onClick={() => setActive((active + 1) % 3)}>Next Step</MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'dialog': {
    title: 'Dialog 弹出框 (Taro)',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton, MauiDialog } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function DialogPage() {
  const [show, setShow] = useState(false);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Alert Dialog</Text>
        <MauiButton type="primary" onClick={() => setShow(true)}>Open Dialog</MauiButton>
        <MauiDialog
          show={show}
          title="Taro Dialog"
          message="This dialog is rendered with Taro React!"
          show-cancel-button
          onConfirm={() => {
            setShow(false);
            Taro.showToast({ title: 'Confirmed!', icon: 'success' });
          }}
          onClose={() => setShow(false)}
        />
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'toast': {
    title: 'Toast 轻提示 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function ToastPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Taro Toast Prompts</Text>
        <View className="demo-row">
          <MauiButton type="primary" onClick={() => Taro.showToast({ title: 'Success!', icon: 'success' })}>
            Success Toast
          </MauiButton>
          <MauiButton type="info" onClick={() => Taro.showToast({ title: 'Info prompt', icon: 'none' })}>
            Info Toast
          </MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'view': {
    title: 'View 视图容器 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';

export default function ViewPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Flex Container</Text>
        <View style={{ display: 'flex', gap: '8px' }}>
          <View style={{ flex: 1, background: '#e0f2fe', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
            <Text style={{ color: '#0369a1', fontWeight: 600 }}>Box 1</Text>
          </View>
          <View style={{ flex: 1, background: '#fef3c7', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
            <Text style={{ color: '#b45309', fontWeight: 600 }}>Box 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'text': {
    title: 'Text 文本 (Taro)',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';

export default function TextPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Selectable Text</Text>
        <Text selectable style={{ fontSize: '14px', color: '#334155' }}>
          This text is selectable by long press in the mini program!
        </Text>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'swiper': {
    title: 'Swiper 轮播 (Taro)',
    code: `import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';

export default function SwiperPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Taro Swiper</Text>
        <Swiper indicatorDots autoplay circular style={{ height: '140px', borderRadius: '8px', overflow: 'hidden' }}>
          <SwiperItem style={{ background: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={{ background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={{ background: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Slide 3</Text>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}
`,
    css: ''
  },

  'scroll-view': {
    title: 'ScrollView 滚动视图 (Taro)',
    code: `import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';

export default function ScrollViewPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Horizontal ScrollView</Text>
        <ScrollView scrollX style={{ whiteSpace: 'nowrap', width: '100%' }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <View
              key={num}
              style={{
                display: 'inline-block',
                width: '100px',
                height: '70px',
                background: '#e2e8f0',
                marginRight: '8px',
                borderRadius: '8px',
                lineHeight: '70px',
                textAlign: 'center',
                color: '#475569',
                fontWeight: 600
              }}
            >
              Item {num}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
`,
    css: ''
  }
};

for (const [pageKey, def] of Object.entries(pageDefinitions)) {
  const dir = path.join(pagesDir, pageKey);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, 'index.tsx'), def.code);
  fs.writeFileSync(path.join(dir, 'index.config.ts'), `export default definePageConfig({
  navigationBarTitleText: ${JSON.stringify(def.title)}
});
`);
  if (def.css) {
    fs.writeFileSync(path.join(dir, 'index.css'), def.css);
  }
}

console.log('[Taro Miniapp] 2. Generated all 23 Taro React showcase pages.');
