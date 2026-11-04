## ma.onSocketError(function callback)

> 监听 WebSocket 错误事件。

### 参数

#### function callback

WebSocket 错误事件的回调函数

#### 参数

##### Object res

| 属性     | 类型     | 说明   |
|:-------|:-------|:-----|
| errMsg | String | 错误信息 |

### 示例代码

```js
ma.connectSocket({
  url: 'wss://example.com'
});
ma.onSocketError((res) => {
  console.log(res.errMsg);
});
```
