## ma.closeSocket(Object object)

> Close the WebSocket connection.

### Parameters

#### Object object

| Attribute | Type      | Default            | Required | Description                                                      |
|:---------|:---------|:---------------|:---|:--------------------------------------------------------|
| code     | Number   | 1000(indicates a normal connection closure) | No  | A numeric value indicating the status code for closing the connection, indicating the reason the connection was closed.                             |
| reason   | String   |                | No  | A human-readable string indicating the reason the connection was closed. This string must be UTF-8 text no longer than 123 bytes (not characters). |
| success  | Function |                | No  | Callback function for a successful API call                                             |
| fail     | Function |                | No  | Callback function for a failed API call                                             |
| complete | Function |                | No  | Callback function for the end of the API call (executed on both success and failure)                                |

### Sample Code

```js
    ma.connectSocket({
       url: 'wss://example.huawei.com',
    });
    // Note the timing issue
    // If ma.connectSocket has not yet called back ma.onSocketOpen, and ma.closeSocket is called first, then the goal of closing the WebSocket cannot be achieved.
    // ma.closeSocket must be called during the period the WebSocket is open in order to close it.
    ma.onSocketOpen(funtion() {
      ma.closeSocket()
    })

    ma.onSocketClose(function(res) {
      console.log('WebSocket is closed!')
    })
```
