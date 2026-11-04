## RecorderManager.stop()

> 停止录音，必须要用户授予当前小程序麦克风权限才可调用（最低版本：23.9.0）

### Tips

1. stop 接口仅支持录音机 正在录音\录音暂停 时调用，录音空闲时无法调用 stop 接口
2. stop 是对录音管理器的操作，操作结果还是通过录音管理器来获取，不同于通常接口的回调方式；录音机停止了录音，可以通过 RecorderManager.onStop (listener) 监听到（各种异常导致的停止也会被 onStop 监听到），发生错误可以通过 RecorderManager.onError(listener) 监听到

### 示例代码

```maml
<button bindtap="recorderStop" type="primary">recorderStop</button>
```

```javascript
Page({
    recorderStop() {
        recorderManager.stop();
    }
})
```