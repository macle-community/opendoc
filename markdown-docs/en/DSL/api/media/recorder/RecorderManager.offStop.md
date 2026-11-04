## RecorderManager.offStop(function listener)

> Remove the listener function for the recording stop event (minimum version: 23.9.0)

### Parameters

#### function listener

Specify the listener function to remove; if not specified, all registered listener functions will be removed

### Sample Code

```javascript
Page({
    clearListener() {
        recorderManager.offStop();
    }
})
```
