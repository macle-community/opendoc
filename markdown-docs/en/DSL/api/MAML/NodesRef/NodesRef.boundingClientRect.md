## [SelectorQuery](SELECTED_QUERY) NodesRef.boundingClientRect(function callback)

> Adds a query request for the node's layout position. Relative to the display area, in pixels. Its functionality is similar to the DOM's `getBoundingClientRect`. Returns the `SelectorQuery` corresponding to the `NodesRef`.

### Parameters

#### function callback

Callback function. After executing the `SelectorQuery.exec` method, the node information will be returned in `callback`.

##### Parameters

##### Object res

| Attribute | Type   | Description                |
|:--------|:-------|:--------------------------|
| id      | String | The node's ID              |
| dataset | Object | The node's dataset         |
| left    | Number | The node's left boundary coordinate  |
| right   | Number | The node's right boundary coordinate |
| top     | Number | The node's top boundary coordinate   |
| bottom  | Number | The node's bottom boundary coordinate|
| width   | Number | The node's width           |
| height  | Number | The node's height          |

### Return Value

#### [SelectorQuery](SELECTED_QUERY)

### Sample Code

```js
Page({
  getRect () {
    ma.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // The node's ID
      rect.dataset // The node's dataset
      rect.left    // The node's left boundary coordinate
      rect.right   // The node's right boundary coordinate
      rect.top     // The node's top boundary coordinate
      rect.bottom  // The node's bottom boundary coordinate
      rect.width   // The node's width
      rect.height  // The node's height
    }).exec()
  },
  getAllRects () {
    ma.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // The node's ID
        rect.dataset // The node's dataset
        rect.left    // The node's left boundary coordinate
        rect.right   // The node's right boundary coordinate
        rect.top     // The node's top boundary coordinate
        rect.bottom  // The node's bottom boundary coordinate
        rect.width   // The node's width
        rect.height  // The node's height
      })
    }).exec()
  }
})
```
