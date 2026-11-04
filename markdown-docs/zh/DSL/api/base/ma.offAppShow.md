## ma.offAppShow(function callback)

> 取消监听小程序切前台事件

### 参数

**function callback**

小程序切前台事件的回调函数

### 示例代码

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
