## ma.createSelectorQuery()

> Returns a SelectorQuery object instance.

### Return Value

#### [SelectorQuery](SELECTED_QUERY)

### Sample Code

```js
const query = ma.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
  res[0].top       // The top boundary coordinate of the #the-id node
  res[1].scrollTop // The vertical scroll position of the visible area
})
```
