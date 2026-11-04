## ma.showTabBar(Object object)

> Shows the tabBar

### Parameters

#### Object object

| Property   | Type     | Default | Required | Description                       |
|:----------|:---------|:------|:---|:-------------------------|
| animation | Boolean  | false | No  | Whether an animation effect is needed                 |
| success   | Function |       | No  | Callback function for successful interface call              |
| fail      | Function |       | No  | Callback function for failed interface call              |
| complete  | Function |       | No  | Callback function for the end of the interface call (executed on both success and failure) |

### Sample code

```js
ma.showTabBar({
  animation: true,
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```