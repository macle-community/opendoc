## ma.canIUse(string schema)

> 判断小程序的 API，回调，参数，组件等是否在当前版本可用。

### 参数

**string schema**

使用 ${API}.${method}.${param}.${option} 或者 ${component}.${attribute}.${option} 方式来调用

### 返回值

**boolean**

当前版本是否可用

**参数说明**

${API} 代表 API 名字

${method} 代表调用方式，有效值为 return, success, object, callback

${param} 代表参数或者返回值

${option} 代表参数的可选值或者返回值的属性

${component} 代表组件名字

${attribute} 代表组件属性

${option} 代表组件属性的可选值

### 示例代码

```js
// 对象的属性或方法
ma.canIUse('Image.src');

// ma接口参数、回调或者返回值
ma.canIUse('openBluetoothAdapter');
ma.canIUse('getSystemInfo.success.screenWidth');
ma.canIUse('showToast.object.image');
ma.canIUse('request.object.method.GET');

// 组件的属性
ma.canIUse('scroll-view');
ma.canIUse('button.size');
ma.canIUse('button.type.default');
```
