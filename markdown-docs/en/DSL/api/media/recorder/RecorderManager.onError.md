## RecorderManager.onError(function listener)

> Listen for recording error events. Any state abnormality, operation abnormality, or system abnormality occurring at any stage of the recorder manager operation will trigger the error listener (minimum version: 23.9.0)

### Parameters

#### function listener

Listener function for the recording error event

##### Parameters

##### Object res

| Attribute | Type   | Description   |
|:-------|:-------|:-----|
| errMsg | String | Error message |

### Sample Code

```javascript
Page({
    onload() {
        recorderManager.onError(() => {
            ma.showToast({
                title: 'Recording error',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```
