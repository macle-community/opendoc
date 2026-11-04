## [SelectorQuery](SELECTED_QUERY) NodesRef.scrollOffset(function callback)

> 添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `NodesRef` 对应的 `SelectorQuery`。

### 参数

#### function callback

回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。

#### 参数

##### Object res

| 属性         | 类型     | 说明          |
|:-----------|:-------|:------------|
| id         | String | 节点的 ID      |
| dataset    | Object | 节点的 dataset |
| scrollLeft | Number | 节点的水平滚动位置   |
| scrollTop  | Number | 节点的竖直滚动位置   |

### 返回值

#### [SelectorQuery](SELECTED_QUERY)

### 示例代码

```js
Page({
  getScrollOffset () {
    ma.createSelectorQuery().selectViewport().scrollOffset(function(res){
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
    }).exec()
  }
})
```
