## ma.redirectTo(Object object)

> Closes the current page and jumps to a page within the application. But jumping to a tabbar page is not allowed.

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                                                                                                                     |
|:---------|:---------|:----|:---|:-----------------------------------------------------------------------------------------------------------------------|
| url      | String   |     | Yes  | The path (code package path) of the non-tabBar page within the application to jump to. Parameters can be appended after the path. Parameters and the path are separated by `?`, parameter keys and values are connected by `=`, and different parameters are separated by `&`; e.g. 'path?key=value&key2=value2' |
| success  | Function |     | No  | Callback function for successful interface call                                                                                                            |
| fail     | Function |     | No  | Callback function for failed interface call                                                                                                            |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)                                                                                               |

### Sample code

```js
ma.redirectTo({
  url: 'test?id=1'
});
```