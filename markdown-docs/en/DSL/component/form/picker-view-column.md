## picker-view-column

> A child item of the scrolling selector. It can only be placed inside a picker-view. The height of its child nodes will be automatically set to match the height of the picker-view's selection box

### Sample Code

```html

<view class='page'>
  <view>Scrolling selector embedded in the page</view>
  <view>
    <view>
      <picker-view value='{{value}}' onChange='onChange'>
        <picker-view-column>
          <view>2011</view>
          <view>2012</view>
          <view>2013</view>
          <view>2014</view>
          <view>2015</view>
          <view>2016</view>
          <view>2017</view>
          <view>2018</view>
        </picker-view-column>
        <picker-view-column>
          <view>Spring</view>
          <view>Summer</view>
          <view>Autumn</view>
          <view>Winter</view>
        </picker-view-column>
      </picker-view>
    </view>
  </view>
</view>
```

```js
Page({
  data: {},
  onChange(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value,
    });
  },
});

```
