## [NodesRef](NODES_REF) SelectorQuery.selectViewport()

> 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。

### 返回值

#### [NodesRef](NODES_REF)

### 示例代码
```js
const SelectorQuery = ma.createSelectorQuery()

SelectorQuery.selectViewport()
  .boundingClientRect()
  .exec((res) => {
    console.log(res);
  });
```
