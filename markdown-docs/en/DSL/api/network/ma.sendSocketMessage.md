## ma.sendSocketMessage(Object object)

> Send data over a WebSocket connection. You must first call ma.connectSocket, and only send after the ma.onSocketOpen callback.

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| data     | String   |     | Yes      | Content to send                  |
| success  | Function |     | No       | Callback function for a successful API call              |
| fail     | Function |     | No       | Callback function for a failed API call              |
| complete | Function |     | No       | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

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
