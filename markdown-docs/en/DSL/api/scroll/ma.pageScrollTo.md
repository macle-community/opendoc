## ma.pageScrollTo(Object object)

> Scrolls the page to the target position, supports scrolling by distance positioning

### Parameters

#### Object object

| Property   | Type     | Default | Required | Description                          |
|-----------|----------|-----|----|-----------------------------|
| scrollTop | Number   | 0   | No  | Target position to scroll the page to, in px            |
| duration  | Number   | 300 | No  | Duration of the scrolling animation, in ms. If set to 0, it automatically takes 300 |
| success   | Function |     | No  | Callback function for successful interface call                 |
| fail      | Function |     | No  | Callback function for failed interface call                 |
| complete  | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)    |

### Sample code

```js
ma.pageScrollTo({
  scrollTop: 0,
  duration: 300,
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
})
```