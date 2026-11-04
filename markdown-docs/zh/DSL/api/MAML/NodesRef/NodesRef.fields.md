## [SelectorQuery](SELECTED_QUERY) NodesRef.fields(Object fields, function callback)

> 获取节点的相关信息。需要获取的字段在 fields 中指定。返回值是 `nodesRef` 对应的 `selectorQuery`

### 参数

#### Object fields

| 属性           | 类型      | 默认值   | 必填 | 说明                                                                      |
|:-------------|:--------|:------|:---|:------------------------------------------------------------------------|
| id           | Boolean | false | 否  | 是否返回节点 id                                                               |
| dataset      | Boolean | false | 否  | 是否返回节点 dataset                                                          |
| rect         | Boolean | false | 否  | 是否返回节点布局位置（`left` `right` `top` `bottom`）                               |
| size         | Boolean | false | 否  | 是否返回节点尺寸（`width` `height`）                                              |
| scrollOffset | Boolean | false | 否  | 否 是否返回节点的 `scrollLeft` `scrollTop`，节点必须是 `scroll-view` 或者 `viewport`    |
| properties   | Array   | []    | 否  | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取） |

#### function callback

回调函数

#### 参数

##### Object res

节点的相关信息

### 返回值

### [SelectorQuery](SELECTED_QUERY)


### 示例代码

```js
Page({
  getFields () {
    ma.createSelectorQuery().select('#the-id').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY']
    }, function (res) {
      res.dataset    // 节点的dataset
      res.width      // 节点的宽度
      res.height     // 节点的高度
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
      res.scrollX    // 节点 scroll-x 属性的当前值
      res.scrollY    // 节点 scroll-y 属性的当前值
    }).exec()
  }
})
```
