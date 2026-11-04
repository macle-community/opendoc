## ma.onError(function callback)

> Listens for the mini program error event.

### Parameters

#### function callback

Callback function for the mini program error event

#### Parameters

**string error**

Error message, including the stack trace

### Sample Code

```js
let _this;
let test1 = function () {
    console.log('aaa')
    _this.setData({
        detail: _this.data.detail + '\r\n' + 'onError:ok',
    })
};

Page({
    onError () {
        _this.setData({
            detail: _this.data.detail + '\r\n' + 'onError',
        })
        ma.onError(test1)
    }
})
```
