## ma.offAppHide(function callback)

> Unlistens from the mini program switch-to-background event

### Parameters

**function callback**

Callback function for the mini program switch-to-background event

### Sample Code

```js
let _this;
let test1 = function () {
    console.log('aaa')
    _this.setData({
        detail: _this.data.detail + '\r\n' + 'offAppHide:ok',
    })
};

Page({
    offAppHide () {
        _this.setData({
            detail: _this.data.detail + '\r\n' + 'offAppHide',
        })
        ma.offAppHide(test1)
    }
})
```
