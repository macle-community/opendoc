## cover-image

> 覆盖在原生组件之上的图片视图。 若原生组件均已支持同层渲染，建议使用 [image](MACLE_COMPONENT_IMAGE)替代。可覆盖的原生组件同[cover-view](MACLE_COMPONENT_COVER_VIEW)。

| 属性  | 类型     | 默认值 | 必填 | 说明                                  |
|:----|:-------|:----|:---|:------------------------------------|
| src | String |     | 否  | 图标路径，支持临时路径、网络地址、本地路径（确保路径不超过项目根目录） |

### 支持的格式

| 格式     | iOS | Android |
|:-------|:----|:--------|
| JPG    | √   | √       |
| PNG    | √   | √       |
| SVG    | x   | x       |
| WEBP   | √   | √       |
| GIF    | √   | √       |
| BASE64 | x   | x       |

### 示例代码

#### 1. 原生组件上的图片覆盖

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

