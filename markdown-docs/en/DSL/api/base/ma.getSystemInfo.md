## ma.getSystemInfo(Object object)

> Gets system information

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### object.success Callback Function

#### Parameters

#### Object res

| Attribute        | Type   | Description                                          |
|:----------------|:-------|:----------------------------------------------------|
| brand           | String | Device brand                                         |
| model           | String | Device model. New models may show unknown for a period after release and will be adapted as soon as possible. |
| id              | String | Device id (added in 24.3.0)                          |
| pixelRatio      | Number | Device pixel ratio                                   |
| screenWidth     | Number | Screen width, in px                                  |
| screenHeight    | Number | Screen height, in px                                 |
| windowWidth     | Number | Usable window width, in px                           |
| windowHeight    | Number | Usable window height, in px                          |
| statusBarHeight | Number | Status bar height, in px                             |
| language        | String | System language                                      |
| system          | String | Operating system and version                         |

### Sample Code

```js
ma.getSystemInfo({
  success(res) {
    console.log(res.model);
    console.log(res.pixelRatio);
    console.log(res.id);
    console.log(res.windowWidth);
    console.log(res.windowHeight);
    console.log(res.language);
  }
});
```
### Tips

1. If the device id cannot be queried, the `id` field will not be present in the response body
