## page-meta

> 页面属性配置节点，用于指定页面的一些属性、监听页面事件。

> 通过这个节点可以获得类似于调用 [`ma.setBackgroundTextStyle`](SET_BACKGROUND_TEXT) [`ma.setBackgroundColor`](SET_BACKGROUND_COLOR)
等接口调用的效果。

### 属性说明

| 属性             | 默认值 | 类型     | 必填 | 说明                                                       |
|----------------|-----|--------|----|----------------------------------------------------------|
| root-font-size | ""  | String | 否  | 页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 `1rem` 等于这个字体大小。 |

### 示例代码

```html

<page-meta root-font-size='{{rootSize}}'>
  <view id='page-meta' style='font-size:2rem'>
    page-meta
  </view>
  <view class='fontStyle'>第二个节点</view>
</page-meta>
```
