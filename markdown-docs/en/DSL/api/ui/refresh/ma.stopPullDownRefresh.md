## ma.stopPullDownRefresh(Object object)

> Stops the pull-down refresh of the current page.

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

### Sample code

```js
Page({
  onPullDownRefresh() {
    ma.stopPullDownRefresh({
      success: function(res) {
        console.log(res);
      },
      fail: function(err) {
        console.log(err);
      }
    });
  }
});
```