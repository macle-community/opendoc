## ma.onAppShow(function callback)

> 小程序切前台事件。该事件与 App.onShow 的回调参数一致。

### 参数

#### function callback

小程序切前台事件的回调函数

### 示例代码

```js
let _this;
let test1 = function () {
    console.log('aaa')
    _this.setData({
        detail: _this.data.detail + '\r\n' + 'onAppShow:ok',
    })
};

Page({
    onAppShow () {
        _this.setData({
            detail: _this.data.detail + '\r\n' + 'onAppShow',
        })
        ma.onAppShow(test1)
    }
})
```
