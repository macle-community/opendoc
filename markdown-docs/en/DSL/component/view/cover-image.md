## cover-image

> An image view covering native components. If all native components already support same-layer rendering, it is recommended to use [image](MACLE_COMPONENT_IMAGE) instead. The native components that can be covered are the same as [cover-view](MACLE_COMPONENT_COVER_VIEW).

| Property | Type     | Default Value | Required | Description                                  |
|:----|:-------|:----|:---|:------------------------------------|
| src | String |     | No  | Icon path. Supports temporary paths, network addresses, and local paths (ensure the path does not exceed the project root directory) |

### Supported formats

| Format     | iOS | Android |
|:-------|:----|:--------|
| JPG    | √   | √       |
| PNG    | √   | √       |
| SVG    | x   | x       |
| WEBP   | √   | √       |
| GIF    | √   | √       |
| BASE64 | x   | x       |

### Sample Code

#### 1. Cover Image Overlay on Media Component

```html
<view class="media-container" style="position: relative; height: 160px; background: #1e293b; border-radius: 10px;">
  <cover-image class="cover-logo" src="https://img.icons8.com/color/96/play--v1.png" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 48px; height: 48px;" />
</view>
```

```js
Page({ data: {} });
```

```css
.cover-logo { pointer-events: auto; }
```

