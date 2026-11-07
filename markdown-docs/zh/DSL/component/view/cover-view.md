## cover-view

> 覆盖在原生组件之上的文本视图。

若原生组件均已支持同层渲染，建议使用 [view](MACLE_COMPONENT_VIEW)
替代。可覆盖的原生组件包括[video](MACLE_COMPONENT_VIDEO)、[camera](MACLE_COMPONENT_CAMERA)。

只支持嵌套 cover-view。

### 示例代码

#### 1. 原生组件上的文本视图覆盖

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

1. 事件模型遵循冒泡模型，但不会冒泡到原生组件。
2. 文本建议都套上 cover-view 标签，避免排版错误。
3. 只支持基本的定位、布局、文本样式。不支持设置`单边的border`、`background-image`、`shadow`、`overflow: visible`等。
4. 建议子节点不要溢出父节点`。
5. 默认设置的样式有：`white-space: nowrap;line-height: 1.2;display: block`。
