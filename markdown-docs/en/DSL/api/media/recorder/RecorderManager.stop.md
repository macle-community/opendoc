## RecorderManager.stop()

> Stop recording. The user must grant the current mini program microphone permission before this can be called (minimum version: 23.9.0)

### Tips

1. The stop API can only be called when the recorder is recording or paused. The stop API cannot be called in the idle state
2. stop is an operation on the recorder manager; the operation result is still obtained through the recorder manager, which is different from the callback approach of a typical API. When the recorder stops recording, it can be listened to via RecorderManager.onStop (listener) (stops caused by various exceptions will also be listened to by onStop); when an error occurs, it can be listened to via RecorderManager.onError(listener)

### Sample Code

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
