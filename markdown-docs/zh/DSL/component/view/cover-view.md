## cover-view

> 覆盖在原生组件之上的文本视图。

若原生组件均已支持同层渲染，建议使用 [view](MACLE_COMPONENT_VIEW)
替代。可覆盖的原生组件包括[video](MACLE_COMPONENT_VIDEO)、[camera](MACLE_COMPONENT_CAMERA)。

只支持嵌套 cover-view。

### 示例代码

```html

<camera device-position='back' flash='off' style='width: 100%; height: 360px;'>
  <cover-view class='cover-view'>
    <cover-view class='c-cover-view red'>red</cover-view>
    <cover-view class='c-cover-view green'>green</cover-view>
    <cover-view class='c-cover-view yellow'>yellow</cover-view>
  </cover-view>
</camera>
```

### Bug & Tip

1. 事件模型遵循冒泡模型，但不会冒泡到原生组件。
2. 文本建议都套上 cover-view 标签，避免排版错误。
3. 只支持基本的定位、布局、文本样式。不支持设置`单边的border`、`background-image`、`shadow`、`overflow: visible`等。
4. 建议子节点不要溢出父节点`。
5. 默认设置的样式有：`white-space: nowrap;line-height: 1.2;display: block`。
