## ma.setBackgroundColor(Object object)

> Dynamically sets the background color of the window

### Parameters

#### Object object

| Property               | Type     | Default | Required | Description                           |
|:----------------------|:---------|:----|:---|:-----------------------------|
| backgroundColor       | String   |     | No  | Background color of the window, must be a hexadecimal color value            |
| backgroundColorTop    | String   |     | No  | Background color of the top window, must be a hexadecimal color value, only supported on iOS |
| backgroundColorBottom | String   |     | No  | Background color of the bottom window, must be a hexadecimal color value, only supported on iOS |
| success               | Function |     | No  | Callback function for successful interface call                  |
| fail                  | Function |     | No  | Callback function for failed interface call                  |
| complete              | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)     |

### Sample code

```js
    ma.setBackgroundColor({
      backgroundColor: '#ffffff', // The background color of the window is white
    })

    ma.setBackgroundColor({
      backgroundColorTop: '#ffffff', // The background color of the top window is white
      backgroundColorBottom: '#ffffff', // The background color of the bottom window is white
    })
```