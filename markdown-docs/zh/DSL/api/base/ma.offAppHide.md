## ma.offAppHide(function callback)

> 取消监听小程序切后台事件

### 参数

**function callback**

小程序切后台事件的回调函数

### 示例代码

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