## [NodesRef](NODES_REF) SelectorQuery.selectViewport()

> Selects the display area. Can be used to get information such as the display area's size and scroll position.

### Return Value

#### [NodesRef](NODES_REF)

### Sample Code
```js
const SelectorQuery = ma.createSelectorQuery()

SelectorQuery.selectViewport()
  .boundingClientRect()
  .exec((res) => {
    console.log(res);
  });
```
