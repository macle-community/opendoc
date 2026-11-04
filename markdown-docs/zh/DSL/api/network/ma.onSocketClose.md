## ma.onSocketClose(function callback)

> 监听 WebSocket 连接关闭事件。

### 参数

#### function callback

WebSocket 连接关闭事件的回调函数

#### 参数

##### Object res

| 属性     | 类型     | 说明                          |
|:-------|:-------|:----------------------------|
| code   | Number | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 |
| reason | String | 一个可读的字符串，表示连接被关闭的原因。        |

### 示例代码

```js
ma.connectSocket({
  url: 'wss://example.com'
});
ma.closeSocket();
ma.onSocketClose((res) => {
  console.log(res);
});
```
