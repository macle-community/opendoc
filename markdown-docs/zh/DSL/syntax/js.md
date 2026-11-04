## 逻辑层

小程序开发框架的逻辑层使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及小程序的特有 API。
开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。

### JavaScript 支持情况

#### 运行限制

基于安全考虑，小程序中不支持动态执行 JS 代码，即：

- 不支持使用 eval 执行 JS 代码
- 不支持使用 new Function 创建函数
  - new Function('return this') 除外

不支持 window、document 等。

### 标准 ECMAScript 支持

小程序的 JS 执行环境 在不同平台上的执行环境存在差异，对于不支持 ES6 的环境，如 IOS 9，需要开启 ES6 转 ES5，且需要自行引入相关 Polyfill。

### 无法被 Polyfill 的 API

以下 API 在部分低版本环境中无法使用，请注意尽量避免使用

- Proxy 对象
