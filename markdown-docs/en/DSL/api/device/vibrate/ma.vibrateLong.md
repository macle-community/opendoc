## ma.vibrateLong(Object object)

> Causes the phone to vibrate for a longer duration (400 ms)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code
```js
ma.vibrateLong({
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```
