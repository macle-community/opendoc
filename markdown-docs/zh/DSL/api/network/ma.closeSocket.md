## ma.closeSocket(Object object)

> 关闭 WebSocket 连接。

### 参数

#### Object object

| 属性       | 类型       | 默认值            | 必填 | 说明                                                      |
|:---------|:---------|:---------------|:---|:--------------------------------------------------------|
| code     | Number   | 1000(表示正常关闭连接) | 否  | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。                             |
| reason   | String   |                | 否  | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 |
| success  | Function |                | 否  | 接口调用成功的回调函数                                             |
| fail     | Function |                | 否  | 接口调用失败的回调函数                                             |
| complete | Function |                | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                |

### 示例代码

```js
    ma.connectSocket({
       url: 'wss://example.huawei.com',
    });
    // 注意时序问题
    // 如果ma.connectSocket还没回调ma.onSocketOpen，而优先调用ma.closeSocket，那么就做不到关闭WebSocket的目的。
    // 必须在WebSocket打开期间调用ma.closeSocket 才能关闭。
    ma.onSocketOpen(funtion() {
      ma.closeSocket()
    })

    ma.onSocketClose(function(res) {
      console.log('WebSocket已关闭！')
    })
```
