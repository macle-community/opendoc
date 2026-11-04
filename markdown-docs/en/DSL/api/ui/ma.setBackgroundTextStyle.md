## ma.setBackgroundTextStyle(Object object)

> Dynamically sets the style of the pull-down background font and loading image

### Parameters

#### Object object

| Property   | Type     | Default | Required | Description                       |
|:----------|:---------|:----|:---|:-------------------------|
| textStyle | String   |     | Yes  | Style of the pull-down background font and loading image.     |
| success   | Function |     | No  | Callback function for successful interface call              |
| fail      | Function |     | No  | Callback function for failed interface call              |
| complete  | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

#### Valid values of object.textStyle

| Value | Description       |
|:------|:---------|
| dark  | dark style  |
| light | light style |

### Sample code

```js
    ma.setBackgroundTextStyle({
      textStyle: 'dark' // The style of the pull-down background font and loading image is dark
    })
```