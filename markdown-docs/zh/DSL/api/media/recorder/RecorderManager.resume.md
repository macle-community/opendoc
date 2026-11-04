## RecorderManager.resume()

> 继续录音，继续上次暂停前的录音，必须要用户授予当前小程序麦克风权限才可调用（最低版本：23.9.0）

### Tips

1. resume 接口只能在录音机录音暂停时调用，正在录音、录音空闲都无法 resume
2. resume 是对录音管理器的操作，操作结果还是通过录音管理器来获取，不同于通常接口的回调方式；录音机正常继续录音，可以通过 RecorderManager.onResume (listener) 监听到，发生错误可以通过 RecorderManager.onError(listener) 监听到
3. 继续录音会继承之前的录音时长，比如之前 start 时指定的 duration 为 10s，录制 4s 后暂停了录音，此时继续录音剩余的时长为 6s，会在继续录音后 6s 自动停止录音

### 示例代码

```maml
<button bindtap="recorderResume" type="primary">recorderResume</button>
```

```javascript
Page({
    recorderResume() {
        recorderManager.resume();
    }
})
```