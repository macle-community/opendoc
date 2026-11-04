## ma.onNetworkStatusChange(function callback)

> Listens for the network status change event

### Parameters

#### function callback

Callback function for the network status change event

#### Parameters

##### Object res

| Attribute   | Type    | Description                |
|:------------|:--------|:----------|
| isConnected | Boolean | Whether there is currently a network connection |
| networkType | String  | Network type      |

### Sample Code

```js
ma.onNetworkStatusChange(function (res) {
  console.log(res.isConnected);
  console.log(res.networkType);
});
```
