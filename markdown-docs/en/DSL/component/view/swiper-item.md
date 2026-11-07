## swiper-item

> Can only be placed in the swiper component. Width and height are automatically set to 100%.

### Sample Code

#### 1. Custom Swiper Item Card

```html
<swiper indicator-dots="true" style="height: 140px;">
  <swiper-item class="swiper-custom-item">
    <view class="card-content">
      <text class="card-title">Custom Item Container</text>
      <text class="card-sub">swiper-item wraps individual slides</text>
    </view>
  </swiper-item>
</swiper>
```

```js
Page({ data: {} });
```

```css
.swiper-custom-item { padding: 10px; box-sizing: border-box; }
.card-content { background: #f8fafc; border: 2px dashed #94a3b8; height: 100%; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.card-title { font-weight: bold; color: #1e293b; font-size: 15px; }
.card-sub { font-size: 12px; color: #64748b; margin-top: 4px; }
```

