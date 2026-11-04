## ma.authorize(Object object)

> Initiates an authorization request to the user in advance. When called, it immediately pops up to ask the user whether to authorize the mini program to use a certain feature or obtain certain data from the user, but it does not actually call the corresponding interface. If the user has already agreed to authorize, no popup will appear and it returns success directly. For more usage details, see [User Authorization](AUTHORITY).

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                                     |
|:---------|:---------|:----|:---|:---------------------------------------|
| scope    | String   |     | Yes  | The scope for which permission is needed, see [scope list](AUTHORITY) |
| success  | Function |     | No  | Callback function for successful interface call                            |
| fail     | Function |     | No  | Callback function for failed interface call                            |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)               |

### Sample code

```js
// You can first use ma.getSetting to check whether the user has authorized the "scope.location" scope
ma.getSetting({
  success(res) {
    if (!res.authSetting['scope.location']) {
      ma.authorize({
        scope: 'scope.location',
        success () {
          // The user has agreed to let the mini program use location information, subsequent calls to ma.getLocation will not pop up to ask
          ma.getLocation()
        }
      })
    }
  }
})
```
