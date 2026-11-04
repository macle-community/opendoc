## ma.hideKeyboard(Object object)

> After an input, textarea, etc. gains focus and brings up the keyboard, manually call this API to dismiss the keyboard

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
ma.hideKeyboard({
  success: () => {
    ma.showToast({
      title: 'Keyboard hidden successfully',
      icon: 'success',
      duration: 2000
    })
  }
});
```
