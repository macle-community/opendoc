## ma.offNetworkStatusChange(function callback)

> Unlistens from the network status change event. If the parameter is empty, all event listeners are removed.

### Parameters

#### function callback

Callback function for the network status change event

### Sample Code
```html
<view>
  <button bindtap="onNetworkStatusChange">Start listening for network status changes</button>
  <button bindtap="offNetworkStatusChange">Cancel listening for network status changes</button>
</view>
```
```js
Page({
    listener(res) {
        console.log(res)
    },
    onNetworkStatusChange(){
        ma.onNetworkStatusChange(this.listener)
    },
    offNetworkStatusChange() {
        ma.offNetworkStatusChange(this.listener)
    },
});
```
