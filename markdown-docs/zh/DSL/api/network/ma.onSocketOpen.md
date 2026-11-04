## ma.onSocketOpen(function callback)

> 监听 WebSocket 连接打开事件。

### 参数

#### function callback

WebSocket 连接打开事件的回调函数

#### 参数

##### Object res

| 属性     | 类型     | 说明                   |
|:-------|:-------|:---------------------|
| header | Object | 连接成功的 HTTP 响应 Header |

### 示例代码
```js
ma.connectSocket({
  url: 'wss://example.com',
});
ma.onSocketOpen(function (res) {
  console.log(res);
});
```
