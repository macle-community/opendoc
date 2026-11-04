## [NodesRef](NODES_REF) SelectorQuery.exec(function callback)

> Executes all requests. The request results form an array in request order, returned in the first parameter of callback.

### Parameters

#### function callback

Callback function

### Return Value

#### [NodesRef](NODES_REF)

### Sample Code
```js
Page({
  onCreateSelectorQuery() {
    ma.createSelectorQuery()
      .select('test1').boundingClientRect()
      .select('test2').boundingClientRect()
      .selectAll('.all').boundingClientRect()
      .exec((res) => {
          console.log(res);
      });
  }
});
```
