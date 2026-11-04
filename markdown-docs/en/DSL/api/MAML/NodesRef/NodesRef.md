## NodesRef

> Object used to get MAML node information

## Methods

### [SelectorQuery](SELECTED_QUERY) [NodesRef.fields(Object fields, NodesRef.FieldsCallback callback)](NODES_REF_FIELDS)

Gets the relevant information of the node. The fields to retrieve are specified in fields. The return value is the `selectorQuery` corresponding to `nodesRef`

### [SelectorQuery](SELECTED_QUERY) [NodesRef.boundingClientRect(NodesRef.boundingClientRectCallback callback)](NODES_REF_BOUNDING)

Adds a query request for the node's layout position. Relative to the display area, in pixels. Its functionality is similar to the DOM's `getBoundingClientRect`. Returns the `SelectorQuery` corresponding to `NodesRef`.

### [SelectorQuery](SELECTED_QUERY) [NodesRef.scrollOffset(NodesRef.scrollOffsetCallback callback)](NODES_REF_SCROLL)

Adds a query request for the node's scroll position. In pixels. The node must be a `scroll-view` or `viewport`; returns the `SelectorQuery` corresponding to `NodesRef`
