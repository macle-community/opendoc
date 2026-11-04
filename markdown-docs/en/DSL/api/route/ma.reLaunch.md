## ma.reLaunch(Object object)

> Closes all pages and opens a page within the application

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                                                                                             |
|:---------|:---------|:----|:---|:-----------------------------------------------------------------------------------------------|
| url      | String   |     | Yes  | The path of the page within the application to jump to (code package path). Parameters can be appended after the path. Parameters and the path are separated by ?, parameter keys and values are connected by =, and different parameters are separated by &; e.g. 'path?key=value&key2=value2' |
| success  | Function |     | No  | Callback function for successful interface call                                                                                    |
| fail     | Function |     | No  | Callback function for failed interface call                                                                                    |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)                                                                       |

### Sample code

```js
ma.reLaunch({
  url: 'test?id=1'
});
// test
Page({
  onLoad(option) {
    console.log(option.query);
  }
});
```