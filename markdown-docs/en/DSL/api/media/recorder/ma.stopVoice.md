## ma.stopVoice(Object object)

> Stop playing audio (minimum version: 23.9.0)

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                       |
|----------|----------|-----|----------|--------------------------|
| success  | Function |     | No       | Callback function for a successful API call              |
| fail     | Function |     | No       | Callback function for a failed API call              |
| complete | Function |     | No       | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```javascript
page({
    stopVoice() {
        ma.stopVoice({
            success: (res) => {
                console.log({res});
                this.setData({
                    info: format(res)
                });
            },
            fail: (err) => {
                console.log({err});
                this.setData({
                    info: format(err)
                });
            }
        });
    }
})
```

