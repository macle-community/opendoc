## SelectorQuery

> 查询节点信息的对象

## 方法

### SelectorQuery [SelectorQuery.in(Component component)](SELECTOR_QUERY_IN)

将选择器的选取范围更改为自定义组件 `component` 内。

### [NodesRef](NODES_REF) [SelectorQuery.select(string selector)](SELECTED_QUERY_SELECT)

在当前页面下选择第一个匹配选择器 `selector` 的节点。返回一个 `NodesRef` 对象实例，可以用于获取节点信息。

### **[NodesRef](NODES_REF)** [SelectorQuery.selectAll(string selector)](SELECTED_QUERY_SELECT_ALL)

在当前页面下选择匹配选择器 selector 的所有节点。

### [NodesRef](NODES_REF) [SelectorQuery.selectViewport()](SELECTED_QUERY_SELECT_VIEW_REPORT)

选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。

### [NodesRef](NODES_REF) [SelectorQuery.exec(function callback)](SELECTED_QUERY_SELECT_EXEC)

执行所有的请求。请求结果按请求次序构成数组，在 callback 的第一个参数中返回。
