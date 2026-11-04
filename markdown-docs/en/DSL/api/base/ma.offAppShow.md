## ma.offAppShow(function callback)

> Unlistens from the mini program switch-to-foreground event

### Parameters

**function callback**

Callback function for the mini program switch-to-foreground event

### Sample Code

```js
let _this;
let test1 = function () {
    console.log('aaa')
    _this.setData({
        detail: _this.data.detail + '\r\n' + 'offAppShow:ok',
    })
};

Page({
    offAppShow () {
        _this.setData({
            detail: _this.data.detail + '\r\n' + 'offAppShow',
        })
        ma.offAppShow(test1)
    }
})
```
