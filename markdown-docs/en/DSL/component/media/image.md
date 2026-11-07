## image

> Image. Supports formats such as JPG, PNG, SVG, GIF

| Property    | Type          | Default Value  | Required | Description                                        |
|:----------|:------------|:------------|:---|:------------------------------------------|
| src       | String      |             | No  | Image resource address. Supports network paths and local paths (ensure the path does not exceed the project root directory)          |
| mode      | String      | scaleToFill | No  | Image cropping and scaling mode                                |
| binderror | Eventhandle |             | No  | Triggered when an error occurs. event.detail = {errMsg}          |
| bindload  | Eventhandle |             | No  | Triggered when the image finishes loading. event.detail = {height, width} |

### Valid values of mode

| Value        | Description                                                                 |
|:-------------|:-------------------------------------------------------------------|
| scaleToFill  | Scale mode. Scales the image without maintaining the aspect ratio so that the image's width and height are fully stretched to fill the image element                             |
| aspectFit    | Scale mode. Scales the image maintaining the aspect ratio so that the long side of the image can be fully displayed. That is, the image can be displayed completely.                    |
| aspectFill   | Scale mode. Scales the image maintaining the aspect ratio, ensuring only the short side of the image can be fully displayed. That is, the image is usually only complete in the horizontal or vertical direction, and the other direction will be cropped. |
| widthFix     | Scale mode. Width remains unchanged, height changes automatically, keeping the original image's aspect ratio unchanged                                         |
| heightFix    | Scale mode. Height remains unchanged, width changes automatically, keeping the original image's aspect ratio unchanged                                         |
| top          | Crop mode. Does not scale the image, only displays the top region of the image                                              |
| bottom       | Crop mode. Does not scale the image, only displays the bottom region of the image                                              |
| center       | Crop mode. Does not scale the image, only displays the middle region of the image                                              |
| left         | Crop mode. Does not scale the image, only displays the left region of the image                                              |
| right        | Crop mode. Does not scale the image, only displays the right region of the image                                              |
| top left     | Crop mode. Does not scale the image, only displays the top-left region of the image                                             |
| top right    | Crop mode. Does not scale the image, only displays the top-right region of the image                                             |
| bottom left  | Crop mode. Does not scale the image, only displays the bottom-left region of the image                                             |
| bottom right | Crop mode. Does not scale the image, only displays the bottom-right region of the image                                             |

### Sample Code

#### 1. Image Scaling Modes (scaleToFill, aspectFit, aspectFill)

```html
<view class="img-grid">
  <view class="img-card">
    <image class="demo-img" mode="aspectFit" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
    <text class="img-label">mode="aspectFit"</text>
  </view>
  <view class="img-card">
    <image class="demo-img" mode="aspectFill" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&q=80" />
    <text class="img-label">mode="aspectFill"</text>
  </view>
</view>
```

```js
Page({ data: {} });
```

```css
.img-grid { display: flex; gap: 12px; }
.img-card { flex: 1; background: #fff; padding: 8px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center; }
.demo-img { width: 100%; height: 110px; border-radius: 6px; background: #f8fafc; }
.img-label { font-size: 11px; color: #64748b; margin-top: 6px; display: block; }
```

#### 2. Local & Remote Image Source

```html
<view class="img-box">
  <image class="wide-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" mode="widthFix" />
</view>
```

```js
Page({ data: {} });
```

```css
.wide-img { width: 100%; border-radius: 8px; }
```


### Bug & Tip

1. The image component defaults to a width of 320px and a height of 240px
