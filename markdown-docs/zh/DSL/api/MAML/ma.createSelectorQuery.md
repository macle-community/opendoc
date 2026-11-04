## ma.createSelectorQuery()

> 返回一个 SelectorQuery 对象实例。

### 返回值

#### [SelectorQuery](SELECTED_QUERY)

### 示例代码

```js
const query = ma.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
  res[0].top       // #the-id节点的上边界坐标
  res[1].scrollTop // 显示区域的竖直滚动位置
})
```
