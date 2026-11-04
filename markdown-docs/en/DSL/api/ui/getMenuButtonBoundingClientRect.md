## ma.getMenuButtonBoundingClientRect(Object object)

> Gets the layout position information of the menu button (the capsule button in the top-right corner). The coordinate information uses the top-left corner of the screen as the origin.

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|----------|----------|-----|----|--------------------------|
| success  | Function |     | No  | Description of the callback function for successful interface call            |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

#### Return value

#### Object

Layout position information of the menu button

| Property | Type    | Description          |
|:-------|:-------|:------------|
| width  | Number | Width, in px    |
| height | Number | Height, in px    |
| top    | Number | Top boundary coordinate, in px |
| right  | Number | Right boundary coordinate, in px |
| bottom | Number | Bottom boundary coordinate, in px |
| left   | Number | Left boundary coordinate, in px |

### Sample code

```js
ma.getMenuButtonBoundingClientRect({
  success(res) {
    console.log(res.width);
    console.log(res.height);
    console.log(res.top);
    console.log(res.right);
    console.log(res.bottom);
    console.log(res.left);
  }
});
```