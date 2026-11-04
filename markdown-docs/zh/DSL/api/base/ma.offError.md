## ma.offError(function callback)

> 取消监听小程序错误事件。

### 参数

**function callback**

小程序错误事件的回调函数

### 示例代码

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