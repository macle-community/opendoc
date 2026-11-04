## RecorderManager.onStart(function listener)

> Listen for the recording start event. At this point the recorder enters the recording state, which can only be triggered by RecorderManager.start() (minimum version: 23.9.0)

### Parameters

#### function listener

Listener function for the recording start event

### Sample Code

```javascript
Page({
    onload() {
        recorderManager.onStart(() => {
            ma.showToast({
                title: 'Recording started',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```
