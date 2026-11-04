## ma.setNavigationBarColor(Object object)

> Sets the color of the page navigation bar

### Parameters

#### Object object

| Property         | Type     | Default | Required | Description                                         |
|:----------------|:---------|:----|:---|:-------------------------------------------| 
| frontColor      | String   |     | Yes  | Foreground color value, including the color of buttons, title, and status bar. Only #ffffff and #000000 are supported |
| backgroundColor | String   |     | Yes  | Background color value, valid value is a hexadecimal color                           |
| animation       | Object   |     | No  | Animation effect                                       |     |
| success         | Function |     | No  | Callback function for successful interface call                                |     |
| fail            | Function |     | No  | Callback function for failed interface call                                |     |
| complete        | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)                   |

### Structure of object.animation

| Property   | Type    | Default   | Required | Description           |
|:-----------|:-------|:---------|:---|:-------------| 
| duration   | Number | 0        | No  | Animation duration, in ms |     |
| timingFunc | String | 'linear' | No  | Animation easing mode       |     |

#### Valid values of object.animation.timingFunc

| Value       | Description            |
|:------------|:--------------|
| 'linear'    | The animation runs at the same speed from start to end |
| 'easeIn'    | The animation starts at a low speed       |
| 'easeOut'   | The animation ends at a low speed       |
| 'easeInOut' | The animation starts and ends at a low speed    |

### Sample code

```js
    ma.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
```