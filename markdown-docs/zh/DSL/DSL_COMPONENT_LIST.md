# DSL 小程序基础组件列表

> 本文件汇总了 DSL 小程序所有可用的基础组件，便于快速检索。详细的属性、事件、默认值、示例请查阅各组件的详情文件。组件按用途分类组织，在 MAML 模板中使用对应的标签名即可。

## 视图容器（view）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| view | 视图容器，相当于 web 的 div | component/view/view.md |
| scroll-view | 可滚动视图区域。使用竖向滚动时需要给 scroll-view 一个固定高度（通过 MASS 设置 height）。组件属性的长度单位默认为 px | component/view/scroll-view.md |
| swiper | 滑块视图容器。其中只可放置 swiper-item 组件，否则会导致未定义的行为 | component/view/swiper.md |
| swiper-item | 仅可放置在 swiper 组件中，宽高自动设置为 100% | component/view/swiper-item.md |
| cover-view | 覆盖在原生组件之上的文本视图 | component/view/cover-view.md |
| cover-image | 覆盖在原生组件之上的图片视图。若原生组件均已支持同层渲染，建议使用 image 替代 | component/view/cover-image.md |

## 基础内容（base）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| text | 文本 | component/base/text.md |
| icon | 图标。组件属性的长度单位默认为 px | component/base/icon.md |
| progress | 进度条 | component/base/progress.md |
| rich-text | 富文本 | component/base/rich-text.md |

## 表单组件（form）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| button | 按钮，用于触发一个操作 | component/form/button.md |
| form | 表单，将组件内的用户输入的 switch、input、checkbox、slider、radio、picker 提交 | component/form/form.md |
| input | 输入框。该组件是原生组件，使用时请注意相关限制 | component/form/input.md |
| textarea | 多行输入框。该组件是原生组件，使用时请注意相关限制。注：目前为 web 实现，非原生，因此部分属性暂不支持 | component/form/textarea.md |
| label | 用来改进表单组件的可用性。使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时就会触发对应的控件 | component/form/label.md |
| picker | 从底部弹起的滚动选择器 | component/form/picker.md |
| picker-view | 嵌入页面的滚动选择器。其中只可放置 picker-view-column 组件，其它节点不会显示 | component/form/picker-view.md |
| picker-view-column | 滚动选择器子项。仅可放置于 picker-view 中，其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致 | component/form/picker-view-column.md |
| radio | 单选项目 | component/form/radio.md |
| radio-group | 单项选择器，内部由多个 radio 组成 | component/form/radio-group.md |
| checkbox | 多选项目 | component/form/checkbox.md |
| checkbox-group | 多项选择器，内部由多个 checkbox 组成 | component/form/checkbox-group.md |
| switch | 开关选择器 | component/form/switch.md |
| slider | 滑动选择器 | component/form/slider.md |

## 媒体组件（media）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| image | 图片，支持 JPG、PNG、SVG、GIF 等格式 | component/media/image.md |
| audio | 音频 | component/media/audio.md |
| video | 视频（暂不支持同层渲染）。相关 api：ma.createVideoContext | component/media/video.md |
| camera | 系统相机，扫码二维码功能。相关 api：ma.createCameraContext | component/media/camera.md |

## 地图（map）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| map | 地图组件，提供了地图展示、交互等功能。相关 api：ma.createMapContext | component/map/map.md |

## 导航（navigating）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| navigator | 页面链接 | component/navigating/navigator.md |

## 开放能力（openCapability）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| web-view | 承载网页的容器，会自动铺满整个小程序页面 | component/openCapability/web-view.md |

## 页面配置（pageConfig）

| 组件名称 | 组件简述 | 组件详情路径 |
|:--|:--|:--|
| page-meta | 页面属性配置节点，用于指定页面的一些属性、监听页面事件 | component/pageConfig/page-meta.md |

---

*本文件基于 `component/` 目录下的组件文档汇总整理，共计 32 个组件。*
