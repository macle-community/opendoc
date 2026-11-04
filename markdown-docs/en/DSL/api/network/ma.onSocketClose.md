## ma.onSocketClose(function callback)

> Listen for the WebSocket connection close event.

### Parameters

#### function callback

Callback function for the WebSocket connection close event

#### Parameters

##### Object res

| Attribute | Type   | Description                          |
|:-------|:-------|:----------------------------|
| code   | Number | A numeric value indicating the status code for closing the connection, indicating the reason the connection was closed. |
| reason | String | A human-readable string indicating the reason the connection was closed.        |

### Sample Code

```js
ma.connectSocket({
  url: 'wss://example.com'
});
ma.closeSocket();
ma.onSocketClose((res) => {
  console.log(res);
});
```
