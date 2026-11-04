## ma.showActionSheet(Object object)

> Shows the action menu

### Parameters

#### Object object

| Property   | Type     | Default | Required | Description                       |
|:----------|:---------|:--------|:---|:-------------------------|
| alertText | String   |         | No  | Alert text                     |
| itemList  | Array    |         | Yes  | Array of button texts, max array length is 6        |
| itemColor | String   | #000000 | No  | Button text color                  |
| success   | Function |         | No  | Callback function for successful interface call              |
| fail      | Function |         | No  | Callback function for failed interface call              |
| complete  | Function |         | No  | Callback function for the end of the interface call (executed on both success and failure) |

### object.success callback function

#### Parameters

#### Object res

| Property   | Type    | Description                       |
|:---------|:-------|:-------------------------|
| errMsg   | String | showActionSheet: ok      |
| tapIndex | Number | The index of the button the user tapped, in order from top to bottom, starting from 0 |

### Sample code

```js
ma.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success(res) {
    console.log(res.tapIndex);
  },
  fail(res) {
    console.log(res.errMsg);
  }
});
```