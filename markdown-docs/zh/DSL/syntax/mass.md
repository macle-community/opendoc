## MASS

**MASS (Macle Style Sheets)是一套样式语言，用于描述 MAML 的组件样式。**  
为了适应广大的前端开发者，MASS 具有 CSS 大部分特性。同时为了更适合开发小程序，MASS 对 CSS 进行了扩充以及修改。
与 CSS 相比，MASS 扩展的特性有：

- 尺寸单位
- 样式导入

### 尺寸单位

- rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750
  个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

| 设备           | rpx 换算 px (屏幕宽度/750) | px 换算 rpx (750/屏幕宽度) |
|:-------------|:---------------------|:---------------------|
| iPhone5      | 1rpx = 0.42px        | 1px = 2.34rpx        |
| iPhone6      | 1rpx = 0.5px         | 1px = 2rpx           |
| iPhone6 Plus | 1rpx = 0.552px       | 1px = 1.81rpx        |

> 建议： 开发小程序时设计师可以用 iPhone6 作为视觉稿的标准。

### 样式导入

使用@import 语句可以导入外联样式表，@import 后跟需要导入的外联样式表的相对路径或绝对路径，用;表示语句结束。

```
/** common.mass **/
.small-p {
  padding:5px;
}
```

```
/** app.mass **/
@import "common.mass";
.middle-p {
  padding:15px;
}
```

### 内联样式

框架组件上支持使用 style、class 属性来控制组件的样式。

- style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。
  ```
  <view style="color:{{color}};" />
  ```
- class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上.，样式类名之间用空格分隔。
  ```
  <view class="normal_view" />
  ```

### 全局样式与局部样式

定义在 app.mass 中的样式为全局样式，作用于每一个页面。在 page 的 mass 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖
app.mass 中相同的选择器。

### 本地资源图片支持

在 `25.3.0` 之后的版本中，Macle支持开发者在mass文件中使用本地资源图片(在之前的版本中仅支持使用在线地址或base64编码)，如下是一个简单示例

```css
.yourClass {
  background-image: url('./yourLocalUrl.png');
}
```
