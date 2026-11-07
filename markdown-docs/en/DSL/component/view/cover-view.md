## cover-view

> A text view covering native components.

If all native components already support same-layer rendering, it is recommended to use [view](MACLE_COMPONENT_VIEW)
instead. The native components that can be covered include [video](MACLE_COMPONENT_VIDEO) and [camera](MACLE_COMPONENT_CAMERA).

Only nesting of cover-view is supported.

### Sample Code

#### 1. Cover View Overlay on Native Components

```html
<view class="media-container" style="position: relative; height: 180px; background: #0f172a; border-radius: 10px; overflow: hidden;">
  <view class="simulated-media" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #94a3b8;">
    [Media Surface Area]
  </view>
  <cover-view class="cover-badge" style="position: absolute; top: 12px; left: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 12px;">
    ● Live Stream Overlay
  </cover-view>
  <cover-view class="cover-actions" style="position: absolute; bottom: 12px; right: 12px; background: #2563eb; color: #fff; padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 600;">
    Overlay Button
  </cover-view>
</view>
```

```js
Page({ data: {} });
```

```css
.media-container { width: 100%; box-sizing: border-box; }
```


### Bug & Tip

1. The event model follows the bubbling model, but does not bubble to native components.
2. It is recommended to wrap all text with cover-view tags to avoid layout errors.
3. Only basic positioning, layout, and text styles are supported. Setting `single-side border`, `background-image`, `shadow`, `overflow: visible`, etc. is not supported.
4. It is recommended that child nodes do not overflow the parent node`.
5. The default styles set are: `white-space: nowrap;line-height: 1.2;display: block`.
