## [NodesRef](NODES_REF) SelectorQuery.select(string selector)

> Selects the first node matching the selector `selector` under the current page. Returns a `NodesRef` object instance, which can be used to get node information.

### Parameters

#### string selector

Selector

### Return Value

#### NodesRef

### selector Syntax

selector is similar to a CSS selector, but only supports the following syntax.

- ID selector: #the-id
- class selector (multiple can be specified consecutively): .a-class.another-class
- Child element selector: .the-parent > .the-child
- Descendant selector: .the-ancestor .the-descendant
- Union of multiple selectors: #a-node, .some-other-nodes

### Sample Code
```js
Page({
  onCreateSelectorQuery() {
    ma.createSelectorQuery()
      .select('test1').boundingClientRect()
      .select('test2').boundingClientRect()
      .selectAll('.all').boundingClientRect();
  }
});
```
