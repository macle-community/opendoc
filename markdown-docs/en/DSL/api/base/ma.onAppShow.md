## ma.onAppShow(function callback)

> Mini program switch-to-foreground event. The callback parameters of this event are the same as those of App.onShow.

### Parameters

#### function callback

Callback function for the mini program switch-to-foreground event

### Sample Code

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
