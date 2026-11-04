# H5小程序开发指导

## 1. 依赖

### 1.1 Macle JSSDK 依赖（必须）

在H5项目中需要调用Macle框架提供的API，因此最少需要引入 `js-sdk.min.js` 依赖。引入步骤如下：

1. 在Macle仓库下载 `Macle_**.*.*_Engine_JSSDK.zip` 压缩包
2. 解压后，将 `js-sdk.min.js` 复制到项目中的 `src/js` 目录下
3. 在 `index.html` 中引入：

```html
<script src="src/lib/js-sdk.min.js"></script>
```

### 1.2 vConsole 调试依赖（可选）

开发小程序时一般都需要使用vConsole来调试运行态小程序。如有需要，应引入 `vconsole.min.js` 依赖：

```html
<script src="src/lib/vconsole.min.js"></script>
```

> **注意**：vConsole是一个轻量级的调试工具，可以在移动端网页上提供类似Chrome开发者工具的调试功能，方便查看日志、网络请求等信息。需要开发人员自行下载后复制到本项目

---

## 2. 架构

H5小程序采用H5标准开发，默认使用前端MVVM框架开发模式。

**技术特点**：
- 使用标准的前端Web技术（HTML、CSS、JavaScript）进行开发
- 默认使用单页面架构（SPA），根目录下的index.html是入口，通过app.js路由进行跳转
- 支持组件化开发
- 数据驱动，视图分离，双向绑定

---

## 3. 项目目录结构

H5的项目目录参考如下示例，项目的根目录必需是当前vscode打开的目录，不要重新生成其它文件夹作为根目录。

```
/
├── project.config.json     # 项目配置文件（必需）
├── app-config.json         # 应用配置文件（必需）
├── index.html              # HTML入口文件（必需）
├── .macle.config.json      # Macle 转换器的配置文件（必需）
└── src                     # 源码目录（所有页面和资源放这里）
    ├── pages/              # 页面脚本目录
    │   ├── page_A/          # 页面 A
    │   │   ├── page_A.js
    │   │   ├── page_A.html
    │   │   └── page_A.css
    │   └── page_B/          # 页面 B
    │       ├── page_B.js
    │       ├── page_B.html
    │       └── page_B.css
    ├── css/style.css           # 全局样式
    ├── js/
    │   ├── common.js            # 公共方法（存储、跳转等）
    │   ├── data.js              # 静态房间数据
    │   └──app.js
    ├─── lib/                 # 第三方库目录（必需）
    │    ├── js-sdk.min.js    # JSSDK依赖 （必需）
    │    └── vconsole.min.js  # vconsole依赖（可选）
    ├── images/                 # 图片资源目录
    │   └── logo.png
    └── config/                 # 配置文件目录（可选）
        └── api.js              # API配置
```

> **重要提示**：index.html 是入口文件，**不应该把所有业务页面的HTML结构写在这里**。子页面的内容应该放在src目录下的对应路径中。尽量不要将html代码内联到JS代码中。

---

## 4. H5小程序配置文件

H5项目必须`project.config.json`、`app-config.json`、`.macle.config.json`三个配置文件，必须要有一个入口文件`index.html`，这些文件的详情如下：

### 4.1 project.config.json （必需）

项目根目录必需的项目配置文件，包含项目名称、AppID、编译设置等基本信息。

> **详细说明见**: [project-config-json-details](../common/project-config-json-details.md)

**最小实践示例**:
```json
{
  "description": "project config file",
  "appid": "300s00i1gea41p020105a1gd5n16",
  "compileType": "miniprogram",
  "projectname": "pctest",
  "setting": {
    "es5": true
  }
}
```

### 4.2 app-config.json （必需）

H5小程序的核心配置文件，用于标识项目为H5类型，并包含应用的基本配置信息。

> **详细说明见**: [app-config-json-details](../common/app-config-json-details.md)

**最小实践示例**:
```json
{
  "type": "legacy",
  "entryPagePath": "index.html",
  "pages": ["index.html"],
  "page": {},
  "global": {
    "window": {
      "navigationBarBackgroundColor": "#4e9023",
      "navigationBarTitleText": "JSSDK的官方Demo",
      "backgroundTextStyle": "light",
      "navigationBarTextStyle": "white",
      "capsuleTheme": "light"
    }
  }
}
```

### 4.3 .macle.config.json （必需）

`.macle.config.json` 是Macle 转换器的配置文件，用于定义项目构建相关配置，由 CLI 工具生成或在转换过程中被读取处理。**H5小程序项目必需要有该配置文件，否则会影响编译打包不通过**。

**参数说明**：

以下参数都必须有值
| 参数 | 类型 | 说明 |
|------|------|------|
| `buildType` | number | 构建类型标识，0=未知，1=已识别 |
| `buildCmd` | string | 构建命令，如 `npm run build` |
| `buildDist` | string | 当前项目的根目录的绝对路径，根据项目实际情况进行替换|
| `entryPagePath` | string | 入口页面路径，如 `index.html` |
| `appID` | number | 应用 ID，基于时间戳生成 |
| `isCompile` | boolean | 是否已编译，CLI 中固定为 `false` |

**使用场景**：
该配置主要用于 H5 Macle 插件的转换流程中，控制入口页面、构建目录等核心转换参数。

**示例**:
```json
{
    "buildType": 0,
    "buildCmd": "",
    "buildDist": "****", 
    "entryPagePath": "index.html",
    "appID": "jssdk_demo_20240204",
    "isCompile": false
}
```
---

## 5 index.html

**index.html 是 H5 小程序的入口文件**，仅负责应用的初始化、依赖加载、页面路由等初始化的工作，**不要将其它页面的内容都写在这个文件中**。子页面内容使用独立的html承载。

**注意**：
js-sdk.min.js和vconsole.min.js依赖需要在页面渲染之前就执行或生效，因此需要放在<head>中

**示例**:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H5小程序</title>
    <link rel="stylesheet" href="src/css/style.css">
    <script src="src/lib/js-sdk.min.js"></script>
    <script src="src/lib/vconsole.min.js"></script>
</head>
<body>
  <sl-tab-group class="full">
    <!-- tab项配置 -->
    <sl-tab slot="nav" panel="route">路由</sl-tab>
    <sl-tab slot="nav" panel="network">网络</sl-tab>
</body>
</html>
```

---

## 6. API接口

H5小程序开发除了H5语法中定义的接口外，还可以通过以下方式调用原生服务：

### 5.1 小程序框架 JSSDK API

通过JSSDK API可以调用手机端原生服务，JSSDK提供了丰富的原生能力接口，包括：
- 页面路由
- 网络请求
- 设备相关操作
- 用户信息获取
- 文件操作
- 等

> **详细API列表见**: [JSSDK_API_LIST.md](./JSSDK_API_LIST.md)

### 5.2 Super App 自定义接口

通过JSSDK中的 `ma.native` 可以调用Super App自定义的接口，实现与宿主应用的深度集成。

**基本调用方式**：
```javascript
ma.native.callNative({
    action: 'xxx',
    params: {},
    success: function(res) {
        console.log('调用成功', res);
    },
    fail: function(err) {
        console.log('调用失败', err);
    }
});
```