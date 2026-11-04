## ma.offError(function callback)

> Unlistens from the mini program error event.

### Parameters

**function callback**

Callback function for the mini program error event

### Sample Code

```js
let _this;
let test1 = function () {
    console.log('aaa')
    _this.setData({
        detail: _this.data.detail + '\r\n' + 'offError:ok',
    })
};

Page({
    offError () {
        _this.setData({
            detail: _this.data.detail + '\r\n' + 'offError',
        })
        ma.offError(test1)
    }
})
```
