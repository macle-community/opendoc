## ma.sendSocketMessage(Object object)

> 通过 WebSocket 连接发送数据。需要先 ma.connectSocket，并在 ma.onSocketOpen 回调之后才能发送。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| data     | String   |     | 是  | 需要发送的内容                  |
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
    let socketOpen = false
    let socketMsgQueue = []
    ma.connectSocket({
        url: 'test.php'
    })

    ma.onSocketOpen(function(res) {
       socketOpen = true
       for (let i = 0; i < socketMsgQueue.length; i++){
           sendSocketMessage(socketMsgQueue[i])
       }
       socketMsgQueue = []
    })

    function sendSocketMessage(msg) {
        if (socketOpen) {
            ma.sendSocketMessage({
             data:msg
            })
        } else {
            socketMsgQueue.push(msg)
        }
    }
```
