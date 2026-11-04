## RecorderManager.pause()

> Pause recording. The user must grant the current mini program microphone permission before this can be called (minimum version: 23.9.0)

### Tips

1. The pause API can only be called when the recorder is recording. The pause API cannot be called in the idle or paused state
2. pause is an operation on the recorder manager; the operation result is still obtained through the recorder manager, which is different from the callback approach of a typical API. When the recorder pauses normally, it can be listened to via RecorderManager.onPause (listener); when an error occurs, it can be listened to via RecorderManager.onError(listener)

### Sample Code

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
