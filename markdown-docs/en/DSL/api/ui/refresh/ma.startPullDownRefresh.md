## ma.startPullDownRefresh(Object object)

> Starts pull-down refresh. After being called, it triggers the pull-down refresh animation, with the same effect as the user manually pulling down to refresh.

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

### Sample code

```js
ma.startPullDownRefresh({
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```