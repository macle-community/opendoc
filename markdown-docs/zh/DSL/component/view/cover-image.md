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

```html

<cover-image class='cover-image' src='https://example.jpg'></cover-image>
```
