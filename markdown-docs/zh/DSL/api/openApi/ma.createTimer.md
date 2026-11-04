## ma.createTimer(number duration)

> 按输入参数duration执行倒计时功能，并在倒计时完成时，通过success回调通知开发者 **（最低版本：25.9.0）**

> 仅支持IOS

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| duration | Number   |     | 是  | 单位：秒，计时器倒计时初始时间          |
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### object.success

| 属性     | 类型     | 说明              |
|--------|--------|-----------------|
| errMsg | String | createTimer: ok |

##### object.fail

| 属性     | 类型     | 说明   |
|--------|--------|------|
| errMsg | String | 错误信息 |

### 示例代码

```js
ma.createTimer({
    duration: 10,
    success: (res) => {
        ma.showModal({
            title: 'createTimer success',
            content: JSON.stringify(res),
            showCancel: false
        })
    },
    fail: (res) => {
        ma.showModal({
            title: 'createTimer fail',
            content: JSON.stringify(res),
            showCancel: false
        })
    }
})
```

### Tips
1. 在IOS 18 及以上的系统中， 可能因线程自动回收导致定时器失效，若 代码中使用了 `setTimeout` 或 `setInterval` , 请替换 `ma.createTimer` 实现保证定时效果
