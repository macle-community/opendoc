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
fs.writeFileSync(path.join(TARO_DIR, 'types/global.d.ts'), `/// <reference types="@tarojs/extend" />
declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
`);

// 6. project.config.json
fs.writeFileSync(path.join(TARO_DIR, 'project.config.json'), JSON.stringify({
  miniprogramRoot: "dist/",
  projectname: "opendoc-miniapp-taro",
  description: "OpenDoc Taro React Mini App Showcase for Macle",
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
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTitleText: "Macle OpenDoc Showcase",
    navigationBarTextStyle: "black",
    capsuleTheme: "light"
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

// src/app.css - Identical to opendoc/miniapp/app.mass
fs.writeFileSync(path.join(TARO_DIR, 'src/app.css'), `page {
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
}
`);

// 9. All 23 Page Definitions - 100% Identical to opendoc/miniapp/pages/
const pagesDir = path.join(TARO_DIR, 'src/pages');

const pageDefinitions = {
  'index': {
    title: 'Component Showcase',
    code: `import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function IndexPage() {
  return (
    <View className="home-container">
      <View className="home-banner">
        <Text className="banner-title">Macle OpenDoc</Text>
        <Text className="banner-sub">MiniProgram Interactive Component Library</Text>
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
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function RunnerPage() {
  const router = useRouter();
  const [snippetTitle] = useState(router.params.title ? decodeURIComponent(router.params.title) : 'Macle MiniProgram Live Execution');

  const handleRunClick = () => {
    Taro.showToast({ title: 'Code executed in DevSuite!', icon: 'success' });
  };

  return (
    <View className="runner-page">
      <View className="demo-block">
        <Text className="demo-title">Dynamic MAML Snippet Execution</Text>
        <View className="runner-content">
          <Text className="snippet-desc">{snippetTitle}</Text>
          <MauiButton type="primary" block onClick={handleRunClick}>Run Live Interactive Action</MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.runner-page { padding: 12px; }
.runner-content { display: flex; flex-direction: column; gap: 12px; }
.snippet-desc { font-size: 13px; color: #64748b; }
`
  },

  'button': {
    title: 'Button 按钮',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function ButtonPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Button Types</Text>
        <View className="demo-row">
          <MauiButton type="default">default button</MauiButton>
          <MauiButton type="primary">primary button</MauiButton>
          <MauiButton type="info">information button</MauiButton>
          <MauiButton type="warning">warning button</MauiButton>
          <MauiButton type="danger">danger button</MauiButton>
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
    css: `.page-body { padding: 8px 0; }`
  },

  'layout': {
    title: 'Layout 栅格',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRow, MauiCol } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function LayoutPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (span: 8, 8, 8)</Text>
        <MauiRow>
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Column Offset (span: 4 + offset: 4, span: 10)</Text>
        <MauiRow>
          <MauiCol span="4">span: 4</MauiCol>
          <MauiCol span="10" offset="4">offset: 4, span: 10</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Column Offset (offset: 12, span: 12)</Text>
        <MauiRow>
          <MauiCol offset="12" span="12">offset: 12, span: 12</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Column Gutter (gutter: 20)</Text>
        <MauiRow gutter="20">
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">5. Flex Layout (justify: center / end)</Text>
        <MauiRow type="flex" justify="center">
          <MauiCol span="6">span: 6</MauiCol>
          <MauiCol span="6">span: 6</MauiCol>
        </MauiRow>
        <View style={{ height: '10px' }} />
        <MauiRow type="flex" justify="end">
          <MauiCol span="6">span: 6</MauiCol>
          <MauiCol span="6">span: 6</MauiCol>
        </MauiRow>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }
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
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCell, MauiCellGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function CellPage() {
  return (
    <View className="page-body">
      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <Text className="demo-title" style={{ padding: '16px 16px 8px 16px' }}>1. Basic Usage</Text>
        <MauiCellGroup>
          <MauiCell title="Cell title" value="Content" />
          <MauiCell title="Cell title" value="Content" label="Description" />
        </MauiCellGroup>
      </View>

      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <Text className="demo-title" style={{ padding: '16px 16px 8px 16px' }}>2. Cell Size & Links</Text>
        <MauiCellGroup>
          <MauiCell title="Large Cell" value="Content" size="large" label="Description" />
          <MauiCell title="Navigation Link" is-link />
          <MauiCell title="Value Link" is-link value="Detail" />
        </MauiCellGroup>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'checkbox': {
    title: 'Checkbox 复选框',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCheckbox, MauiCheckboxGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(true);
  const [checkedSquare, setCheckedSquare] = useState(true);
  const [groupVal, setGroupVal] = useState<string[]>(['a', 'b']);

  const toggleGroup = (name: string) => {
    setGroupVal(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiCheckbox
          value={checked}
          onChange={(e: any) => {
            const nextVal = typeof e.detail === 'boolean' ? e.detail : !checked;
            setChecked(nextVal);
          }}
        >
          Checkbox: {checked ? 'Checked' : 'Unchecked'}
        </MauiCheckbox>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Disabled & Shapes</Text>
        <View className="demo-row">
          <MauiCheckbox disabled value={true}>Disabled Checked</MauiCheckbox>
          <MauiCheckbox
            shape="square"
            value={checkedSquare}
            onChange={(e: any) => {
              const nextVal = typeof e.detail === 'boolean' ? e.detail : !checkedSquare;
              setCheckedSquare(nextVal);
            }}
          >
            Square Checkbox
          </MauiCheckbox>
          <MauiCheckbox checked-color="#07c160" value={true}>Custom Color</MauiCheckbox>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Checkbox Group</Text>
        <MauiCheckboxGroup
          value={groupVal}
          onChange={(e: any) => {
            const val = Array.isArray(e.detail) ? e.detail : (e.detail?.value || []);
            setGroupVal(val);
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <MauiCheckbox name="a" value={groupVal.includes('a')} onChange={() => toggleGroup('a')}>Option A</MauiCheckbox>
            <MauiCheckbox name="b" value={groupVal.includes('b')} onChange={() => toggleGroup('b')}>Option B</MauiCheckbox>
            <MauiCheckbox name="c" value={groupVal.includes('c')} onChange={() => toggleGroup('c')}>Option C</MauiCheckbox>
          </View>
        </MauiCheckboxGroup>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'radio': {
    title: 'Radio 单选框',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRadio, MauiRadioGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function RadioPage() {
  const [currentRadio, setCurrentRadio] = useState('1');

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Radio Group (Selected: {currentRadio})</Text>
        <MauiRadioGroup
          value={currentRadio}
          onChange={(e: any) => {
            const val = typeof e.detail === 'string' ? e.detail : (e.detail?.value || e.target?.value || '1');
            setCurrentRadio(val);
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <MauiRadio name="1" value={currentRadio} onChange={() => setCurrentRadio('1')}>Option 1</MauiRadio>
            <MauiRadio name="2" value={currentRadio} onChange={() => setCurrentRadio('2')}>Option 2</MauiRadio>
            <MauiRadio name="3" value={currentRadio} onChange={() => setCurrentRadio('3')} disabled>Option 3 (Disabled)</MauiRadio>
          </View>
        </MauiRadioGroup>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Horizontal Direction</Text>
        <MauiRadioGroup
          direction="horizontal"
          value={currentRadio}
          onChange={(e: any) => {
            const val = typeof e.detail === 'string' ? e.detail : (e.detail?.value || e.target?.value || '1');
            setCurrentRadio(val);
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <MauiRadio name="1" value={currentRadio} onChange={() => setCurrentRadio('1')}>One</MauiRadio>
            <MauiRadio name="2" value={currentRadio} onChange={() => setCurrentRadio('2')}>Two</MauiRadio>
          </View>
        </MauiRadioGroup>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'switch': {
    title: 'Switch 开关',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSwitch } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function SwitchPage() {
  const [checked, setChecked] = useState(true);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (State: {checked ? 'ON' : 'OFF'})</Text>
        <MauiSwitch checked={checked} onChange={(e: any) => setChecked(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Disabled & Loading</Text>
        <View className="demo-row">
          <MauiSwitch disabled checked={true} />
          <MauiSwitch disabled checked={false} />
          <MauiSwitch loading checked={true} />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Custom Size & Colors</Text>
        <View className="demo-row">
          <MauiSwitch size="24px" checked={checked} onChange={(e: any) => setChecked(e.detail)} />
          <MauiSwitch active-color="#07c160" inactive-color="#ee0a24" checked={checked} onChange={(e: any) => setChecked(e.detail)} />
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'slider': {
    title: 'Slider 滑块',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSlider } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function SliderPage() {
  const [value, setValue] = useState(50);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (Value: {value})</Text>
        <MauiSlider value={value} onChange={(e: any) => setValue(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Range (-50 to 50)</Text>
        <MauiSlider min={-50} max={50} value={0} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Step Size (step: 10)</Text>
        <MauiSlider step={10} value={30} />
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'stepper': {
    title: 'Stepper 步进器',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiStepper } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function StepperPage() {
  const [count, setCount] = useState(3);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (Value: {count})</Text>
        <MauiStepper value={count} onChange={(e: any) => setCount(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Step Size & Limits (1 to 10, step 2)</Text>
        <MauiStepper min={1} max={10} step={2} value={count} onChange={(e: any) => setCount(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Disabled</Text>
        <MauiStepper disabled value={1} />
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'field': {
    title: 'Field 输入框',
    code: `import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { MauiField, MauiCellGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function FieldPage() {
  const [username, setUsername] = useState('macle_user');

  return (
    <View className="page-body">
      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <MauiCellGroup>
          <MauiField
            value={username}
            placeholder="Please enter username"
            label="Username"
            onChange={(e: any) => setUsername(e.detail)}
          />
          <MauiField type="password" label="Password" placeholder="Enter password" />
          <MauiField clearable label="Clearable" placeholder="Clearable input" />
          <MauiField disabled label="Disabled" value="Input disabled" />
        </MauiCellGroup>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'tag': {
    title: 'Tag 标签',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiTag } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function TagPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Tag Types</Text>
        <View className="demo-row">
          <MauiTag type="primary">Primary</MauiTag>
          <MauiTag type="success">Success</MauiTag>
          <MauiTag type="danger">Danger</MauiTag>
          <MauiTag type="warning">Warning</MauiTag>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Plain & Shapes</Text>
        <View className="demo-row">
          <MauiTag plain type="primary">Plain</MauiTag>
          <MauiTag round type="primary">Round</MauiTag>
          <MauiTag mark type="primary">Mark</MauiTag>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Custom Colors & Sizes</Text>
        <View className="demo-row">
          <MauiTag color="#7232dd">Custom #7232dd</MauiTag>
          <MauiTag size="large" type="primary">Large</MauiTag>
          <MauiTag size="medium" type="primary">Medium</MauiTag>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'loading': {
    title: 'Loading 加载',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiLoading } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function LoadingPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Loading Types</Text>
        <View className="demo-row">
          <MauiLoading />
          <MauiLoading type="spinner" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Color & Vertical Text</Text>
        <View className="demo-row">
          <MauiLoading color="#1989fa" />
          <MauiLoading size="24px" vertical>Loading...</MauiLoading>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'progress': {
    title: 'Progress 进度条',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiProgress } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function ProgressPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (50%)</Text>
        <MauiProgress percentage={50} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Stroke Width & Inactive</Text>
        <MauiProgress stroke-width="8" percentage={75} />
        <View style={{ height: '12px' }} />
        <MauiProgress inactive percentage={40} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Custom Color</Text>
        <MauiProgress color="#ee0a24" percentage={65} />
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'divider': {
    title: 'Divider 分割线',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiDivider } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function DividerPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Divider</Text>
        <MauiDivider />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Content Position</Text>
        <MauiDivider content-position="center">Center Text</MauiDivider>
        <MauiDivider content-position="left">Left Text</MauiDivider>
        <MauiDivider content-position="right">Right Text</MauiDivider>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Dashed & Custom Colors</Text>
        <MauiDivider dashed />
        <MauiDivider text-color="#1989fa" custom-style="color: #1989fa;">Blue Divider</MauiDivider>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'empty': {
    title: 'Empty 空状态',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiEmpty } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function EmptyPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiEmpty description="No Data" />
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'steps': {
    title: 'Steps 步骤条',
    code: `import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSteps, MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function StepsPage() {
  const [active, setActive] = useState(1);
  const steps = [
    { text: 'Step 1', desc: 'Description 1' },
    { text: 'Step 2', desc: 'Description 2' },
    { text: 'Step 3', desc: 'Description 3' }
  ];

  const nextStep = () => {
    setActive((active + 1) % 3);
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Horizontal Steps (Active: {active})</Text>
        <MauiSteps steps={steps} active={active} />
        <View style={{ marginTop: '14px' }}>
          <MauiButton type="primary" size="small" onClick={nextStep}>Next Step</MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'dialog': {
    title: 'Dialog 弹出框',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function DialogPage() {
  const showAlert = () => {
    Taro.showToast({ title: 'Dialog Verified!', icon: 'success' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Native Dialog Trigger</Text>
        <MauiButton type="primary" block onClick={showAlert}>Trigger Alert Dialog</MauiButton>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'toast': {
    title: 'Toast 轻提示',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function ToastPage() {
  const showSuccess = () => {
    Taro.showToast({ title: 'Success!', icon: 'success' });
  };

  const showInfo = () => {
    Taro.showToast({ title: 'Information message', icon: 'none' });
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Toast Notifications</Text>
        <View className="demo-row">
          <MauiButton type="primary" onClick={showSuccess}>Success Toast</MauiButton>
          <MauiButton type="info" onClick={showInfo}>Info Toast</MauiButton>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'view': {
    title: 'View 视图容器',
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function ViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Flex Direction: Row</Text>
        <View className="flex-row">
          <View className="box bg-red">A</View>
          <View className="box bg-green">B</View>
          <View className="box bg-blue">C</View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Flex Direction: Column</Text>
        <View className="flex-col">
          <View className="box bg-red">Row 1</View>
          <View className="box bg-green">Row 2</View>
          <View className="box bg-blue">Row 3</View>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }
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
    code: `import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function TextPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Text Component</Text>
        <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }}>Headline Bold Text</Text>
          <Text style={{ fontSize: '13px', color: '#64748b' }}>Subtitle or description text style.</Text>
          <Text selectable style={{ fontSize: '13px', color: '#2563eb' }}>This text is selectable (selectable=true)</Text>
        </View>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }`
  },

  'swiper': {
    title: 'Swiper 轮播',
    code: `import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import './index.css';

export default function SwiperPage() {
  return (
    <View className="page-body">
      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <Swiper indicatorDots autoplay interval={3000} duration={500} style={{ height: '160px' }}>
          <SwiperItem>
            <View className="swiper-slide slide-1"><Text>Slide 1</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-2"><Text>Slide 2</Text></View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper-slide slide-3"><Text>Slide 3</Text></View>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }
.swiper-slide { height: 160px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: bold; }
.slide-1 { background: #3b82f6; }
.slide-2 { background: #10b981; }
.slide-3 { background: #8b5cf6; }
`
  },

  'scroll-view': {
    title: 'ScrollView 滚动视图',
    code: `import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.css';

export default function ScrollViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Horizontal Scroll View</Text>
        <ScrollView scrollX style={{ whiteSpace: 'nowrap', width: '100%' }}>
          <View className="scroll-item bg-1">Item 1</View>
          <View className="scroll-item bg-2">Item 2</View>
          <View className="scroll-item bg-3">Item 3</View>
          <View className="scroll-item bg-4">Item 4</View>
          <View className="scroll-item bg-5">Item 5</View>
        </ScrollView>
      </View>
    </View>
  );
}
`,
    css: `.page-body { padding: 8px 0; }
.scroll-item { display: inline-block; width: 100px; height: 80px; margin-right: 10px; border-radius: 8px; line-height: 80px; text-align: center; color: #fff; font-weight: bold; }
.bg-1 { background: #3b82f6; }
.bg-2 { background: #10b981; }
.bg-3 { background: #f59e0b; }
.bg-4 { background: #ef4444; }
.bg-5 { background: #8b5cf6; }
`
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

console.log('[Taro Miniapp] 2. Generated all 23 Taro React showcase pages matching Native MiniApp identically.');
