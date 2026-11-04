## [SelectorQuery](SELECTED_QUERY) SelectorQuery.in(Component component)

> 将选择器的选取范围更改为自定义组件 `component` 内。

### 参数

#### Component component

自定义组件实例

### 返回值

#### [SelectorQuery](SELECTED_QUERY)

### 示例代码

```js
Component({
  queryMultipleNodes (){
    const query = ma.createSelectorQuery().in(this)
    query.select('#the-id').boundingClientRect(function(res){
      res.top // 这个组件内 #the-id 节点的上边界坐标
    }).exec()
  }
})
```
