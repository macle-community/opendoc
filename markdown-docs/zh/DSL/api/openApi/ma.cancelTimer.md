## ma.cancelTimer()

> 取消当前小程序创建的定时器，通过success回调通知开发者 **（最低版本：25.9.0）**

> 仅支持IOS

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### object.success

| 属性     | 类型     | 说明              |
|--------|--------|-----------------|
| errMsg | String | cancelTimer: ok |

##### object.fail

| 属性     | 类型     | 说明   |
|--------|--------|------|
| errMsg | String | 错误信息 |

### 示例代码

```js
ma.cancelTimer({
    success: (res) => {
        ma.showModal({
            title: 'cancelTimer success',
            content: JSON.stringify(res),
            showCancel: false
        })
    },
    fail: (res) => {
        ma.showModal({
            title: 'cancelTimer fail',
            content: JSON.stringify(res),
            showCancel: false
        })
    }
})
```
