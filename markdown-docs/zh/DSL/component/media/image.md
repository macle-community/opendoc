## image

> 图片。支持 JPG、PNG、SVG、GIF 等格式

| 属性        | 类型          | 默认值         | 必填 | 说明                                        |
|:----------|:------------|:------------|:---|:------------------------------------------|
| src       | String      |             | 否  | 图片资源地址，支持网络路径、本地路径（确保路径不超过项目根目录）          |
| mode      | String      | scaleToFill | 否  | 图片裁剪、缩放的模式                                |
| binderror | Eventhandle |             | 否  | 当错误发生时触发，event.detail = {errMsg}          |
| bindload  | Eventhandle |             | 否  | 当图片载入完毕时触发，event.detail = {height, width} |

### mode 的合法值

| 值            | 说明                                                                 |
|:-------------|:-------------------------------------------------------------------|
| scaleToFill  | 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素                             |
| aspectFit    | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。                    |
| aspectFill   | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFix     | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变                                         |
| heightFix    | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变                                         |
| top          | 裁剪模式，不缩放图片，只显示图片的顶部区域                                              |
| bottom       | 裁剪模式，不缩放图片，只显示图片的底部区域                                              |
| center       | 裁剪模式，不缩放图片，只显示图片的中间区域                                              |
| left         | 裁剪模式，不缩放图片，只显示图片的左边区域                                              |
| right        | 裁剪模式，不缩放图片，只显示图片的右边区域                                              |
| top left     | 裁剪模式，不缩放图片，只显示图片的左上边区域                                             |
| top right    | 裁剪模式，不缩放图片，只显示图片的右上边区域                                             |
| bottom left  | 裁剪模式，不缩放图片，只显示图片的左下边区域                                             |
| bottom right | 裁剪模式，不缩放图片，只显示图片的右下边区域                                             |

### 示例代码

#### 1. 常用图片缩放模式

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

#### 2. 本地与网络图片资源加载

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

1. image 组件默认宽度 320px、高度 240px
