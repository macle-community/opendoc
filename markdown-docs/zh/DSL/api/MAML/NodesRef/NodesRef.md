## NodesRef

> 用于获取 MAML 节点信息的对象

## 方法

### [SelectorQuery](SELECTED_QUERY) [NodesRef.fields(Object fields, NodesRef.FieldsCallback callback)](NODES_REF_FIELDS)

获取节点的相关信息。需要获取的字段在 fields 中指定。返回值是 `nodesRef` 对应的 `selectorQuery`

### [SelectorQuery](SELECTED_QUERY) [NodesRef.boundingClientRect(NodesRef.boundingClientRectCallback callback)](NODES_REF_BOUNDING)

添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。

### [SelectorQuery](SELECTED_QUERY) [NodesRef.scrollOffset(NodesRef.scrollOffsetCallback callback)](NODES_REF_SCROLL)

添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `NodesRef` 对应的 `SelectorQuery`
