## ma.createTimer(number duration)

> Performs a countdown based on the input parameter duration, and notifies the developer via the success callback when the countdown completes **(Minimum version: 25.9.0)**

> Only supported on iOS

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| duration | Number   |     | Yes  | Unit: seconds, the initial countdown time of the timer          |
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

##### object.success

| Property | Type    | Description              |
|--------|--------|-----------------|
| errMsg | String | createTimer: ok |

##### object.fail

| Property | Type    | Description   |
|--------|--------|------|
| errMsg | String | Error message |

### Sample code

```js
ma.createTimer({
    duration: 10,
    success: (res) => {
        ma.showModal({
            title: 'createTimer success',
            content: JSON.stringify(res),
            showCancel: false
        })
    },
    fail: (res) => {
        ma.showModal({
            title: 'createTimer fail',
            content: JSON.stringify(res),
            showCancel: false
        })
    }
})
```

### Tips
1. On iOS 18 and above systems, the timer may fail due to automatic thread reclamation. If `setTimeout` or `setInterval` is used in the code, please replace it with `ma.createTimer` to ensure the timing effect
