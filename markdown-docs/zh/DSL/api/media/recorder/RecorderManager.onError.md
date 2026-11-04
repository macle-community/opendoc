## RecorderManager.onError(function listener)

> 监听录音错误事件，在录音管理器操作的任意环节出现了状态异常、操作异常、系统异常等都会监听到错误（最低版本：23.9.0）

### 参数

#### function listener

录音错误事件的监听函数

##### 参数

##### Object res

| 属性     | 类型     | 说明   |
|:-------|:-------|:-----|
| errMsg | String | 错误信息 |

### 示例代码

```javascript
Page({
    onload() {
        recorderManager.onError(() => {
            ma.showToast({
                title: '录音错误',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```