## RecorderManager.onPause(function listener)

> 监听录音暂停事件，此时录音机进入到录音暂停状态，只能由 RecorderManager.pause() 触发（最低版本：23.9.0）

### 参数

#### function listener

录音暂停事件的监听函数

### 示例代码

```javascript
Page({
    onload() {
        recorderManager.onPause(() => {
            ma.showToast({
                title: '录音暂停',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```