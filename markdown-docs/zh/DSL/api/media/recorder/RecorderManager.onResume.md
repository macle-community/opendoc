## RecorderManager.onResume(function listener)

> 监听录音继续事件，此时录音机再次进入到正在录音状态，只能由 RecorderManager.resume() 触发（最低版本：23.9.0）

### 参数

#### function listener

录音继续事件的监听函数

### 示例代码

```javascript
Page({
    onload() {
        recorderManager.onResume(() => {
            ma.showToast({
                title: '录音继续',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```