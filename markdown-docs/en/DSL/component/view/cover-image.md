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

```html

<cover-image class='cover-image' src='https://example.jpg'></cover-image>
```
