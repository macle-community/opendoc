## ma.vibrateShort(Object object)

> Causes the phone to vibrate for a shorter duration (15 ms).

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                             |
|:---------|:---------|:-------|:---|:-----------------------------------------------|
| type     | String   |        | Yes  | Vibration intensity type; valid values: `heavy`, `medium`, `light` (only supported on iOS) |
| success  | Function |        | No  | Callback function for a successful API call                                    |
| fail     | Function |        | No  | Callback function for a failed API call                                    |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                       |

### Sample Code
```js
ma.vibrateShort({
  type: 'medium',
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```
