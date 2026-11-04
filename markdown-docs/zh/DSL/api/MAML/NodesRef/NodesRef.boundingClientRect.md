## [SelectorQuery](SELECTED_QUERY) NodesRef.boundingClientRect(function callback)

> 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。

### 参数

#### function callback

回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。

##### 参数

##### Object res

| 属性      | 类型     | 说明          |
|:--------|:-------|:------------|
| id      | String | 节点的 ID      |
| dataset | Object | 节点的 dataset |
| left    | Number | 节点的左边界坐标    |
| right   | Number | 节点的右边界坐标    |
| top     | Number | 节点的上边界坐标    |
| bottom  | Number | 节点的下边界坐标    |
| width   | Number | 节点的宽度       |
| height  | Number | 节点的高度       |

### 返回值

#### [SelectorQuery](SELECTED_QUERY)

### 示例代码

```js
Page({
  getRect () {
    ma.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
    }).exec()
  },
  getAllRects () {
    ma.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度
      })
    }).exec()
  }
})
```
