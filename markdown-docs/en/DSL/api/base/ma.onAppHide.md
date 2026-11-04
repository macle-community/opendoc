## ma.onAppHide(function callback)

> Listens for the mini program switch-to-background event. The timing of this event's callback is the same as that of App.onHide.

### Parameters

#### function callback

Callback function for the mini program switch-to-background event

### Sample Code

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
