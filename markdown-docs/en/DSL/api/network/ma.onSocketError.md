## ma.onSocketError(function callback)

> Listen for the WebSocket error event.

### Parameters

#### function callback

Callback function for the WebSocket error event

#### Parameters

##### Object res

| Attribute | Type   | Description   |
|:-------|:-------|:-----|
| errMsg | String | Error message |

### Sample Code

```js
ma.connectSocket({
  url: 'wss://example.com'
});
ma.onSocketError((res) => {
  console.log(res.errMsg);
});
```
