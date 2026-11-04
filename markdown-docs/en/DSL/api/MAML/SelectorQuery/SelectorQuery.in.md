## [SelectorQuery](SELECTED_QUERY) SelectorQuery.in(Component component)

> Changes the selector's selection scope to within the custom component `component`.

### Parameters

#### Component component

Custom component instance

### Return Value

#### [SelectorQuery](SELECTED_QUERY)

### Sample Code

```js
Component({
  queryMultipleNodes (){
    const query = ma.createSelectorQuery().in(this)
    query.select('#the-id').boundingClientRect(function(res){
      res.top // The top boundary coordinate of the #the-id node within this component
    }).exec()
  }
})
```
