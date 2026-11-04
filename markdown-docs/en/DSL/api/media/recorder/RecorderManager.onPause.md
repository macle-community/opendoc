## RecorderManager.onPause(function listener)

> Listen for the recording pause event. At this point the recorder enters the recording paused state, which can only be triggered by RecorderManager.pause() (minimum version: 23.9.0)

### Parameters

#### function listener

Listener function for the recording pause event

### Sample Code

```javascript
Page({
    onload() {
        recorderManager.onPause(() => {
            ma.showToast({
                title: 'Recording paused',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```
