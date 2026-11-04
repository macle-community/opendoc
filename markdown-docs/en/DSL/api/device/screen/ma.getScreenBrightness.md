## ma.getScreenBrightness(Object object)

> Gets the screen brightness

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

##### object.success Callback Function

##### Parameters

###### Object object

| Attribute | Type   | Description                       |
|:-------|:-------|:-------------------------|
| errMsg | String | getScreenBrightness: ok  |
| value  | Number | Screen brightness value, range 0 ~ 1, 0 is darkest, 1 is brightest |

### Sample Code
```js
ma.getScreenBrightness({
  success: (res) => {
    console.log(res);
  },
  fail (err) {
    console.error(err);
  },
  complete () {
    console.log('getScreenBrightness:complete');
  }
});
```
