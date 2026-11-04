## ma.cancelTimer()

> Cancels the timer created by the current mini program, and notifies the developer via the success callback **(Minimum version: 25.9.0)**

> Only supported on iOS

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

##### object.success

| Property | Type    | Description              |
|--------|--------|-----------------|
| errMsg | String | cancelTimer: ok |

##### object.fail

| Property | Type    | Description   |
|--------|--------|------|
| errMsg | String | Error message |

### Sample code

```js
ma.cancelTimer({
    success: (res) => {
        ma.showModal({
            title: 'cancelTimer success',
            content: JSON.stringify(res),
            showCancel: false
        })
    },
    fail: (res) => {
        ma.showModal({
            title: 'cancelTimer fail',
            content: JSON.stringify(res),
            showCancel: false
        })
    }
})
```
