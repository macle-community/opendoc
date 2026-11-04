## ma.startGyroscope(Object object)

> Starts listening for gyroscope data.

### Parameters

#### Object object

| Attribute | Type     | Default  | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| interval | String   | normal | No  | Execution frequency of the gyroscope data callback function   |
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

##### object interval

| Valid Value | Description                                        |
|:-------|:--------------------------------------------------|
| game   | Callback frequency suitable for updating games, around 20ms/time   |
| ui     | Callback frequency suitable for updating UI, around 60ms/time       |
| normal | Normal callback frequency, around 200ms/time                        |

### Sample Code
```js
ma.startGyroscope({
  interval: 'ui',
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```
