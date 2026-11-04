## ma.setKeepScreenOn(Object object)

> Sets whether to keep the screen always on. Only takes effect for the current mini program; the setting becomes invalid after leaving the mini program.

### Parameters

#### Object object

| Attribute    | Type     | Default | Required | Description                                              |
|:-------------|:---------|:-------|:---|:--------------------------------------------------------|
| keepScreenOn | Boolean  |        | Yes  | Whether to keep the screen always on                 |
| success      | Function |        | No  | Callback function for a successful API call              |
| fail         | Function |        | No  | Callback function for a failed API call                  |
| complete     | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
ma.setKeepScreenOn({
  keepScreenOn: true
});
```
