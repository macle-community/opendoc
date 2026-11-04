## ma.hideTabBarRedDot(Object object)

> Hides the red dot in the top-right corner of a tabBar item

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| index    | Number   |     | Yes  | Specifies the index of the target item in the tabBar, counting from the left    |
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

### Sample code
```js
ma.hideTabBarRedDot({
  index: 1,
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```