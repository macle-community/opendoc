## RecorderManager.pause()

> 暂停录音，必须要用户授予当前小程序麦克风权限才可调用（最低版本：23.9.0）

### Tips

1. pause 接口仅支持录音机正在录音时调用，录音空闲\录音暂停状态都无法调用 pause 接口
2. pause 是对录音管理器的操作，操作结果还是通过录音管理器来获取，不同于通常接口的回调方式；录音机正常暂停，可以通过 RecorderManager.onPause (listener) 监听到，发生错误可以通过 RecorderManager.onError(listener) 监听到

### 示例代码

```maml
<button bindtap="recorderPause" type="primary">recorderPause</button>
```

```javascript
Page({
    recorderPause() {
        recorderManager.pause();
    }
})
```