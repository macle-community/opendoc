## RecorderManager.onStart(function listener)

> 监听录音开始事件，此时录音机进入到正在录音状态，只能由 RecorderManager.start() 触发（最低版本：23.9.0）

### 参数

#### function listener

录音开始事件的监听函数

### 示例代码

```javascript
Page({
    onload() {
        recorderManager.onStart(() => {
            ma.showToast({
                title: '录音开始',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```