## ma.onSocketMessage(function callback)

> 监听 WebSocket 接受到服务器的消息事件。

### 参数

#### function callback

WebSocket 接受到服务器的消息事件的回调函数

#### 参数

##### Object res

| 属性   | 类型     | 说明       |
|:-----|:-------|:---------|
| data | String | 服务器返回的消息 |

### 示例代码

```js
ma.connectSocket({
  url: 'wss://example.com'
});
ma.onSocketMessage((res) => {
  console.log(res.data);
});
```
