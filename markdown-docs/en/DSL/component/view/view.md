## view

> View container

| Property               | Type      | Default Value | Required | Description                                       |
|:-----------------------|:--------|:------|:---|:-----------------------------------------|
| hover-class            | String  | none  | No  | Specifies the style class on press. When hover-class="none", there is no pressed state effect |
| hover-stop-propagation | Boolean | false | No  | Specifies whether to prevent the ancestor nodes of this node from showing the pressed state                      |
| hover-start-time       | Number  | 50    | No  | How long after pressing the pressed state appears, in milliseconds                          |
| hover-stay-time        | Number  | 400   | No  | How long the pressed state remains after the finger is released, in milliseconds                        |

### Sample Code

#### 1. Flex Direction (Row & Column Layout)

```html
<view class="page-section">
  <view class="page-section-title">flex-direction: row</view>
  <view class="flex-row">
    <view class="flex-item demo-bg-red">A</view>
    <view class="flex-item demo-bg-green">B</view>
    <view class="flex-item demo-bg-blue">C</view>
  </view>

  <view class="page-section-title" style="margin-top: 16px;">flex-direction: column</view>
  <view class="flex-col">
    <view class="flex-item demo-bg-red">Row 1</view>
    <view class="flex-item demo-bg-green">Row 2</view>
    <view class="flex-item demo-bg-blue">Row 3</view>
  </view>
</view>
```

```js
Page({
  data: {}
});
```

```css
.flex-row { display: flex; flex-direction: row; gap: 10px; }
.flex-col { display: flex; flex-direction: column; gap: 10px; }
.flex-item { height: 50px; flex: 1; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; border-radius: 6px; }
.demo-bg-red { background-color: #ef4444; }
.demo-bg-green { background-color: #10b981; }
.demo-bg-blue { background-color: #3b82f6; }
```

#### 2. Stream Post Feed with Hover State

```html
<view class="stream">
  <view class="post" hover-class="post-hover" hover-start-time="50" hover-stay-time="400">
    <view class="post-user">
      <view class="post-avatar">Z</view>
      <text class="post-name">Zoe</text>
    </view>
    <view class="post-body">
      <view class="post-content">Welcome to Macle Mini Program development!</view>
      <view class="post-date">June 12</view>
    </view>
  </view>
  <view class="post" hover-class="post-hover">
    <view class="post-user">
      <view class="post-avatar">J</view>
      <text class="post-name">Jim</text>
    </view>
    <view class="post-body">
      <view class="post-content">Great! How can I preview on the Web Simulator?</view>
      <view class="post-date">June 13</view>
    </view>
  </view>
</view>
```

```js
Page({
  data: {}
});
```

```css
.stream { display: flex; flex-direction: column; gap: 12px; }
.post { display: flex; background: #fff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
.post-hover { background-color: #f1f5f9; }
.post-user { display: flex; flex-direction: column; align-items: center; width: 60px; margin-right: 12px; }
.post-avatar { width: 36px; height: 36px; border-radius: 18px; background: #0284c7; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.post-name { font-size: 12px; color: #64748b; margin-top: 4px; }
.post-body { flex: 1; }
.post-content { font-size: 14px; color: #1e293b; line-height: 1.5; }
.post-date { font-size: 11px; color: #94a3b8; margin-top: 6px; }
```


### Bug & Tip

1. If you need to use a scrollable view, please use scroll-view
