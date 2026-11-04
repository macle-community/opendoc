## [SelectorQuery](SELECTED_QUERY) NodesRef.fields(Object fields, function callback)

> Gets the relevant information of the node. The fields to retrieve are specified in fields. The return value is the `selectorQuery` corresponding to `nodesRef`

### Parameters

#### Object fields

| Attribute     | Type    | Default | Required | Description                                                                                          |
|:-------------|:--------|:------|:---|:----------------------------------------------------------------------------------------------------|
| id           | Boolean | false | No  | Whether to return the node id                                                                       |
| dataset      | Boolean | false | No  | Whether to return the node dataset                                                                  |
| rect         | Boolean | false | No  | Whether to return the node layout position (`left` `right` `top` `bottom`)                           |
| size         | Boolean | false | No  | Whether to return the node size (`width` `height`)                                                  |
| scrollOffset | Boolean | false | No  | No. Whether to return the node's `scrollLeft` `scrollTop`; the node must be a `scroll-view` or `viewport`    |
| properties   | Array   | []    | No  | Specifies a list of attribute names and returns the current attribute values of the corresponding attributes of the node (only the regular attribute values marked in the component documentation can be obtained; id, class, style, and event-bound attribute values cannot be obtained) |

#### function callback

Callback function

#### Parameters

##### Object res

The relevant information of the node

### Return Value

### [SelectorQuery](SELECTED_QUERY)


### Sample Code

```js
Page({
  getFields () {
    ma.createSelectorQuery().select('#the-id').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY']
    }, function (res) {
      res.dataset    // The node's dataset
      res.width      // The node's width
      res.height     // The node's height
      res.scrollLeft // The node's horizontal scroll position
      res.scrollTop  // The node's vertical scroll position
      res.scrollX    // The current value of the node's scroll-x attribute
      res.scrollY    // The current value of the node's scroll-y attribute
    }).exec()
  }
})
```
