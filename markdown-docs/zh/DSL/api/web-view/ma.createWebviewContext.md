## ma.createWebviewContext()

> 创建一个WebviewContext 对象，用于向 web-view 组件发送消息（最低版本： 25.12.0）

### 返回值

#### WebviewContext

WebviewContext 对象，支持与webview组件内的H5应用双向通信

| 属性          | 类型       | 入参       | 说明                                                                                        |
|:------------|:---------|----------|:------------------------------------------------------------------------------------------|
| postMessage | Function | Any      | 小程序向 `web-view` 组件内的H5应用发送消息，配合 `js-sdk` 提供的 `ma.postMessage` 可以实现小程序和 `web-view` 网页的双向通信 |
| onMessage   | Function | Function | 小程序监听组件内H5应用向小程序发送信息事件，仅支持传入function，如传入非法值则无法接收到消息                                       |

### 示例代码

```js
const webviewContext = ma.createWebviewContext();

// 小程序向容器内H5发送消息
webviewContext.postMessage({
  testMsg: '111',
});
// 监听容器内H5向小程序通信
webviewContext.onMessage((res) => {
  console.log(res, 'DSL Get Message');
  ma.showModal({
    content: JSON.stringify(res),
    title: 'DSL Get Message',
    success: (res) => {
    },
    fail: (res) => {
    },
    complete: (res) => {
    },
  });
});
```
