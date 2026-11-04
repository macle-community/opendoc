## [SelectorQuery](SELECTED_QUERY) NodesRef.scrollOffset(function callback)

> Adds a query request for the node's scroll position. In pixels. The node must be a `scroll-view` or `viewport`; returns the `SelectorQuery` corresponding to `NodesRef`.

### Parameters

#### function callback

Callback function. After executing the `SelectorQuery.exec` method, the node information will be returned in `callback`.

#### Parameters

##### Object res

| Attribute  | Type   | Description                       |
|:-----------|:-------|:-------------------------------|
| id         | String | The node's ID                    |
| dataset    | Object | The node's dataset               |
| scrollLeft | Number | The node's horizontal scroll position |
| scrollTop  | Number | The node's vertical scroll position   |

### Return Value

#### [SelectorQuery](SELECTED_QUERY)

### Sample Code

```js
Page({
  getScrollOffset () {
    ma.createSelectorQuery().selectViewport().scrollOffset(function(res){
      res.id      // The node's ID
      res.dataset // The node's dataset
      res.scrollLeft // The node's horizontal scroll position
      res.scrollTop  // The node's vertical scroll position
    }).exec()
  }
})
```
