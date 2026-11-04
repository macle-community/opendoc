# DSL小程序开发指导

> 本文件是 DSL 小程序开发的总览指导。DSL 小程序是 Macle 小程序开发工具支持的一种小程序类型，使用平台自定义的 DSL（Domain Specific Language）语法进行开发。开发前请先通读本文件，并按需查阅各章节引用的详细文档。

## 1. 架构

DSL 小程序采用双线程模型，使用平台提供的三套自定义语言进行开发：

- **MAML（Macle Markup Language）**：模板标签语言，结合基础组件、事件系统构建页面结构，文件后缀为 `.maml`
- **MASS（Macle Style Sheets）**：样式语言，用于描述 MAML 组件样式，具有 CSS 大部分特性并扩展了尺寸单位 `rpx`、样式导入等，文件后缀为 `.mass`
- **SJS（safe/subset javascript）**：运行于渲染层的自定义脚本语言，可在 MAML 中使用以构建页面结构、响应组件事件，文件后缀为 `.sjs`
- **逻辑层**：使用 JavaScript 引擎运行，提供小程序特有的 API（`ma.*`）。开发者编写的代码最终会打包成一份 JS 文件在小程序启动时运行

**技术特点**：

- 逻辑层与渲染层分离，通过数据绑定与事件系统通信
- 数据驱动视图，支持数据绑定、列表渲染、条件渲染
- 支持组件化开发与自定义组件
- 支持分包加载，优化首次启动下载时间

---

## 2. 项目目录结构

DSL 小程序项目的根目录必需是当前vscode打开的目录，不要重新生成其它文件夹作为根目录。一个最简单的目录结构如下：

```
/                           # 当前vscode打开的目录
├── project.config.json     # 项目配置文件（必需）
├── app.js                  # 小程序入口文件（必需）
├── app.json                # 全局配置文件（必需）
├── app.mass                # 全局样式文件（可选）
├── sitemap.json            # Sitemap 配置文件（必需）
├── pages/                  # 页面目录
│   └── index/
│       ├── index.js        # 页面逻辑
│       ├── index.json      # 页面配置
│       ├── index.maml      # 页面模板
│       └── index.mass      # 页面样式
├── components/             # 自定义组件目录（可选）
├── utils/                  # 工具函数目录（可选）
├── image/                  # 图片资源目录（可选）
└── lib/                    # 第三方库目录（可选）
```

> **重要**：macle 小程序规定，每个页面的四个文件（`.js`、`.json`、`.maml`、`.mass`）必须具有相同的路径与文件名。

> 完整的文件结构、必需文件说明、分包加载、允许打包的文件格式等，详见 [文件结构](./guide/mini_program_file_structure.md)。

---

## 3. 配置文件

DSL 小程序项目必需 `project.config.json`、`app.json`、`app.js`、`sitemap.json` 四个文件；`app.mass` 为可选的全局样式文件。各文件的必需性依据其详情文档：

### 3.1 project.config.json（必需）

项目根目录的项目配置文件，包含项目名称、AppID、编译类型等基本信息，是 Macle 开发工具识别 DSL 小程序项目类型的关键文件。

> **详细说明见**：[project-config-json-details](../common/project-config-json-details.md)

### 3.2 app.json（必需）

小程序的全局配置文件，用于配置页面列表、窗口样式、底部标签栏（tabBar）、分包、网络超时等全局配置。

> **详细说明见**：[app-json-details](../common/app-json-details.md) 与 [全局配置](./guide/mini_program_app_configuration.md)

**最小实践示例**：

```json
{
  "pages": [
    "pages/index/index"
  ],
  "window": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "DSL小程序"
  }
}
```

### 3.3 app.js（必需）

小程序入口文件，定义小程序的生命周期函数和全局方法。

> **详细说明见**：[app-js-details](../common/app-js-details.md)

**基本示例**：

```javascript
// app.js
App({
  onLaunch() {},
  onShow() {},
  onHide() {}
});
```

### 3.4 app.mass（可选）

全局样式文件，定义全局使用的样式规则。定义在 `app.mass` 中的样式作用于每一个页面。

```css
/**app.mass**/
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
```

### 3.5 sitemap.json（必需）

页面索引配置文件，位于项目根目录，用于配置页面是否允许被搜索引擎索引，是 DSL 小程序必需的配置文件之一。在 `app.json` 中通过 `sitemapLocation` 字段指定其位置；若不配置索引规则，默认允许所有页面被索引。

> **详细说明见**：[sitemap-json-details](../common/sitemap-json-details.md)

---

## 4. 页面结构与生命周期

每个页面由四个文件组成，位于 `pages/页面名/` 目录下：

| 文件 | 必需 | 说明 |
|------|------|------|
| page.js | 是 | 页面逻辑文件，定义页面的数据和方法 |
| page.maml | 是 | 页面模板文件，定义页面结构 |
| page.json | 否 | 页面配置文件，定义页面的窗口样式、自定义组件等（未配置时继承 app.json 的 window 配置） |
| page.mass | 否 | 页面样式文件，定义页面样式 |

页面配置项会覆盖 `app.json` 中 `window` 相同的配置项。详见 [页面配置](./guide/mini_program_page_configuration.md)。

**示例 - pages/index/index.js**：

```javascript
// index.js
Page({
  data: {
    motto: 'Hello World'
  },
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {}
});
```

**示例 - pages/index/index.maml**：

```xml
<!--index.maml-->
<view class="container">
  <text>{{motto}}</text>
</view>
```

页面生命周期与事件系统详见 [事件系统](./guide/event.md)。

---

## 5. 语法

DSL 小程序使用 MAML、MASS、SJS 三套自定义语言，详细语法参考 `syntax/` 目录：

### 5.1 MAML

MAML 是框架设计的标签语言，结合基础组件、事件系统构建页面结构。支持数据绑定、列表渲染（`ma:for`）、条件渲染（`ma:if`/`ma:elif`/`ma:else`）、模板（`template`）、文件引用（`import`/`include`）以及简易双向绑定（`model:` 前缀）。

> 详见：[数据绑定](./syntax/maml/data.md) · [列表渲染](./syntax/maml/list.md) · [条件渲染](./syntax/maml/condition.md) · [模板](./syntax/maml/template.md) · [引用](./syntax/maml/import.md) · [双向绑定](./syntax/maml/two-way-bind.md)

### 5.2 MASS

MASS 是一套样式语言，具有 CSS 大部分特性，并扩展了尺寸单位 `rpx`（规定屏幕宽为 750rpx，可自适应屏幕宽度）与样式导入（`@import`）。支持内联样式（`style`/`class`）、全局样式（`app.mass`）与局部样式（页面 `.mass`）。

> 详见：[MASS](./syntax/mass.md)

### 5.3 SJS

SJS 是运行于渲染层的自定义脚本语言（JavaScript 的子集，与 JavaScript 不是同一种语言），可在 MAML 中通过 `<sjs>` 标签或 `.sjs` 文件构建页面结构、响应组件事件。SJS 运行环境与逻辑层隔离，不能调用小程序 API。

> 详见：[SJS 概述](./syntax/sjs/overview.md) · [变量](./syntax/sjs/variable.md) · [数据类型](./syntax/sjs/datatype.md) · [运算符](./syntax/sjs/operator.md) · [语句](./syntax/sjs/statement.md) · [基础类库](./syntax/sjs/basiclib.md) · [事件](./syntax/sjs/event.md) · [注释](./syntax/sjs/comment.md)

### 5.4 逻辑层（JavaScript）

逻辑层使用 JavaScript 引擎运行，提供小程序特有 API。基于安全考虑，不支持 `eval`、`new Function`（`new Function('return this')` 除外）、`window`、`document` 等；不支持动态执行 JS 代码。

> 详见：[逻辑层](./syntax/js.md)

---

## 6. 基础组件

DSL 小程序提供了一套基础组件用于构建界面，包括视图容器、基础内容、表单、媒体、地图、导航等，在 MAML 中使用对应的标签名即可。

> **完整组件清单见**：[DSL_COMPONENT_LIST.md](./DSL_COMPONENT_LIST.md)

常用组件示例：

```xml
<view class="container">
  <text>{{message}}</text>
  <button type="primary" bindtap="handleTap">点击</button>
  <input placeholder="请输入" />
</view>
```

各组件的属性、事件、默认值、示例请查阅 `component/` 目录下的对应详情文件。

---

## 7. API 接口

DSL 小程序通过逻辑层的 `ma.*` API 调用原生能力与平台服务，涵盖基础能力、设备、网络、文件、存储、媒体、路由、界面、地图、用户授权、支付等。

> **完整 API 清单见**：[DSL_API_LIST.md](./DSL_API_LIST.md)

**基本调用方式**：

```javascript
ma.showToast({
  title: '成功',
  icon: 'success'
});

ma.request({
  url: 'https://example.com/api',
  method: 'GET',
  success(res) {
    console.log(res.data);
  },
  fail(err) {
    console.log(err.errMsg);
  }
});
```

部分接口（如定位、麦克风、相机、用户信息等）需要经过用户授权（`scope`）才能调用，可通过 `ma.authorize` 提前发起授权请求，详见 [用户授权](./api/openApi/authority.md)。

---

## 8. 相关文档

- [文件结构](./guide/mini_program_file_structure.md) · [全局配置](./guide/mini_program_app_configuration.md) · [页面配置](./guide/mini_program_page_configuration.md) · [事件系统](./guide/event.md)
- [基础组件清单](./DSL_COMPONENT_LIST.md)
- [API 接口清单](./DSL_API_LIST.md)
- 配置文件详情：[project.config.json](../common/project-config-json-details.md) · [app.json](../common/app-json-details.md) · [app.js](../common/app-js-details.md) · [sitemap.json](../common/sitemap-json-details.md)
