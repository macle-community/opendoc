## ma.setScreenBrightness(Object object)

> 设置屏幕亮度

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| value    | Number   |     | 是  | 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 |
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码
```html
<view class="page-body">
  <view class="page-body-info">
    <view class="page-body-title">当前屏幕亮度</view>
    <text class="page-body-text-screen-brightness">{{screenBrightness}}</text>
  </view>
  <view class="page-section page-section-gap">
    <view class="page-section-title">设置屏幕亮度</view>
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
