## SelectorQuery

> Object for querying node information

## Methods

### SelectorQuery [SelectorQuery.in(Component component)](SELECTOR_QUERY_IN)

Changes the selector's selection scope to within the custom component `component`.

### [NodesRef](NODES_REF) [SelectorQuery.select(string selector)](SELECTED_QUERY_SELECT)

Selects the first node matching the selector `selector` under the current page. Returns a `NodesRef` object instance, which can be used to get node information.

### **[NodesRef](NODES_REF)** [SelectorQuery.selectAll(string selector)](SELECTED_QUERY_SELECT_ALL)

Selects all nodes matching the selector selector under the current page.

### [NodesRef](NODES_REF) [SelectorQuery.selectViewport()](SELECTED_QUERY_SELECT_VIEW_REPORT)

Selects the display area. Can be used to get information such as the display area's size and scroll position.

### [NodesRef](NODES_REF) [SelectorQuery.exec(function callback)](SELECTED_QUERY_SELECT_EXEC)

Executes all requests. The request results form an array in request order, returned in the first parameter of callback.
