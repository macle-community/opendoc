## ma.getBatteryInfo(Object object)

> Gets the device battery level

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

#### object.success Callback Function

##### Parameters

##### Object res

| Attribute  | Type    | Description                |
|:-----------|:--------|:------------------|
| errMsg     | String  | getBatteryInfo:ok |
| level      | Number  | Device battery level, range 1 - 100   |
| isCharging | Boolean | Whether it is currently charging           |

### Sample Code
```js
ma.getBatteryInfo({
  success: (res) => {
    console.log(res.level);
    console.log(res.isCharging);
  }
});
```
