## ma.openSetting(Object object)

> Opens the client mini program settings interface, and returns the operation result of the user's settings. **The settings interface only shows permissions that the mini program has already requested from the user**.

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

#### object.success callback function

##### Parameters

###### Object res

| Property     | Type                       | Description     |
|:------------|:-------------------------|:-------|
| authSetting | [AuthSetting](AUTHORITY) | User authorization result |

### Sample code

```js
ma.openSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```
