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

```html

<image mode='scaleToFill' src='{{src}}' bindload='bindload' binderror='binderror'></image>
```

```js
Page({
  data: {
    src: '/image/example.jpg'
  },
  bindload: function(e) {
    console.log('image load');
  },
  binderror: function(e) {
    console.log('image error:' + e.detail.errMsg);
  }
});

```

### Bug & Tip

1. The image component defaults to a width of 320px and a height of 240px
