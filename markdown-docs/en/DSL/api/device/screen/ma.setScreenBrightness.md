## ma.setScreenBrightness(Object object)

> Sets the screen brightness

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| value    | Number   |        | Yes  | Screen brightness value, range 0 ~ 1. 0 is darkest, 1 is brightest |
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code
```html
<view class="page-body">
  <view class="page-body-info">
    <view class="page-body-title">Current screen brightness</view>
    <text class="page-body-text-screen-brightness">{{screenBrightness}}</text>
  </view>
  <view class="page-section page-section-gap">
    <view class="page-section-title">Set screen brightness</view>
    <view class="body-view">
      <slider class="brightness" bindchange="changeBrightness" value="{{screenBrightness}}" min="0" max="1" step="0.1"/>
    </view>
  </view>
</view>
```

```js
Page({

  data: {
    screenBrightness: 0
  },

  changeBrightness (e) {
    const value = Number.parseFloat(
      (e.detail.value).toFixed(1)
    )
    this.setData({
      screenBrightness: Number.parseFloat(
        e.detail.value.toFixed(1)
      )
    })
    ma.setScreenBrightness({
      value,
      success (res) {
        console.log(res);
      }
      ,
      fail (err) {
        console.log(err);
      },
      complete () {
        console.log('setScreenBrightness:complete');
      }
    })
  }
})

```
