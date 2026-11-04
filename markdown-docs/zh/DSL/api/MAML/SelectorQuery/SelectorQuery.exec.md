## [NodesRef](NODES_REF) SelectorQuery.exec(function callback)

> 执行所有的请求。请求结果按请求次序构成数组，在 callback 的第一个参数中返回。

### 参数

#### function callback

回调函数

### 返回值

#### [NodesRef](NODES_REF)

### 示例代码
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
