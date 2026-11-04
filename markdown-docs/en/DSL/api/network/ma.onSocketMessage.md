## ma.onSocketMessage(function callback)

> Listen for the WebSocket message event received from the server.

### Parameters

#### function callback

Callback function for the WebSocket message event received from the server

#### Parameters

##### Object res

| Attribute | Type   | Description       |
|:-----|:-------|:---------|
| data | String | Message returned by the server |

### Sample Code

```js
ma.connectSocket({
  url: 'wss://example.com'
});
ma.onSocketMessage((res) => {
  console.log(res.data);
});
```
