## ma.onSocketOpen(function callback)

> Listen for the WebSocket connection open event.

### Parameters

#### function callback

Callback function for the WebSocket connection open event

#### Parameters

##### Object res

| Attribute | Type   | Description                   |
|:-------|:-------|:---------------------|
| header | Object | The HTTP response Header on a successful connection |

### Sample Code
```js
ma.connectSocket({
  url: 'wss://example.com',
});
ma.onSocketOpen(function (res) {
  console.log(res);
});
```
