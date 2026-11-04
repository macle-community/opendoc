## RecorderManager.onResume(function listener)

> Listen for the recording resume event. At this point the recorder enters the recording state again, which can only be triggered by RecorderManager.resume() (minimum version: 23.9.0)

### Parameters

#### function listener

Listener function for the recording resume event

### Sample Code

```javascript
Page({
    onload() {
        recorderManager.onResume(() => {
            ma.showToast({
                title: 'Recording resumed',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```
