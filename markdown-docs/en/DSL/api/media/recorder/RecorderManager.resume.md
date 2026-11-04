## RecorderManager.resume()

> Resume recording, continuing the recording from before the last pause. The user must grant the current mini program microphone permission before this can be called (minimum version: 23.9.0)

### Tips

1. The resume API can only be called when the recorder is in the paused state. It cannot be resumed while recording or in the idle state
2. resume is an operation on the recorder manager; the operation result is still obtained through the recorder manager, which is different from the callback approach of a typical API. When the recorder resumes recording normally, it can be listened to via RecorderManager.onResume (listener); when an error occurs, it can be listened to via RecorderManager.onError(listener)
3. Resuming recording will inherit the previous recording duration. For example, if the duration specified at start was 10s, and the recording was paused after 4s, the remaining duration when resuming is 6s, and recording will automatically stop 6s after resuming

### Sample Code

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
