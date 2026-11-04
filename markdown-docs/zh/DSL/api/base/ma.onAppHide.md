## ma.onAppHide(function callback)

> 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。

### 参数

#### function callback

小程序切后台事件的回调函数

### 示例代码

```js
let _this;
let test1 = function () {
    console.log('aaa')
    _this.setData({
        detail: _this.data.detail + '\r\n' + 'onAppHide:ok',
    })
};

Page({
    onAppHide () {
        _this.setData({
            detail: _this.data.detail + '\r\n' + 'onAppHide',
        })
        ma.onAppHide(test1)
    }
})
```
