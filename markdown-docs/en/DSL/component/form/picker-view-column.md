## picker-view-column

> A child item of the scrolling selector. It can only be placed inside a picker-view. The height of its child nodes will be automatically set to match the height of the picker-view's selection box

### Sample Code

#### 1. Picker View Column Layout

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

