## ma.offNetworkStatusChange(function callback)

> 取消监听网络状态变化事件，参数为空，则取消所有的事件监听。

### 参数

#### function callback

网络状态变化事件的回调函数

### 示例代码
```html
<view>
  <button bindtap="onNetworkStatusChange">开始监听网络状态变化</button>
  <button bindtap="offNetworkStatusChange">取消监听网络状态变化</button>
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
