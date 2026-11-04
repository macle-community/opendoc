## ma.onError(function callback)

> 监听小程序错误事件。

### 参数

#### function callback

小程序错误事件的回调函数

#### 参数

**string error**

错误信息，包含堆栈

### 示例代码

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
