## [NodesRef](NODES_REF) SelectorQuery.selectAll(string selector)

> Selects all nodes matching the selector selector under the current page.

### Parameters

#### string selector

Selector

### Return Value

#### [NodesRef](NODES_REF)

### selector Syntax

selector is similar to a CSS selector, but only supports the following syntax.

- ID selector: #the-id
- class selector (multiple can be specified consecutively): .a-class.another-class
- Child element selector: .the-parent > .the-child
- Descendant selector: .the-ancestor .the-descendant
- Union of multiple selectors: #a-node, .some-other-nodes

### Sample Code
```js
const selectorQuery = ma.createSelectorQuery()

selectorQuery.selectAll(".one")
  .boundingClientRect()
  .exec((res) => {
    console.log(res);
  });
```
