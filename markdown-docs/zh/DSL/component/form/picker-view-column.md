## picker-view-column

> 滚动选择器子项。仅可放置于 picker-view 中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致

### 示例代码

#### 1. 滚动选择器列结构

```html
<picker-view indicator-style="height: 40px;" style="height: 120px; background: #fff;">
  <picker-view-column>
    <view style="line-height: 40px; text-align: center;">Option 1</view>
    <view style="line-height: 40px; text-align: center;">Option 2</view>
    <view style="line-height: 40px; text-align: center;">Option 3</view>
  </picker-view-column>
</picker-view>
```

```js
Page({ data: {} });
```

```css
picker-view { border-radius: 8px; }
```

