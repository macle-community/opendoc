## picker-view-column

> 滚动选择器子项。仅可放置于 picker-view 中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致

### 示例代码

```html

<view class='page'>
  <view>嵌入页面的滚动选择器</view>
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
          <view>春</view>
          <view>夏</view>
          <view>秋</view>
          <view>冬</view>
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
