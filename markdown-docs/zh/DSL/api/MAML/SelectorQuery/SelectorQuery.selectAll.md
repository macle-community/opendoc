## [NodesRef](NODES_REF) SelectorQuery.selectAll(string selector)

> 在当前页面下选择匹配选择器 selector 的所有节点。

### 参数

#### string selector

选择器

### 返回值

#### [NodesRef](NODES_REF)

### selector 语法

selector类似于 CSS 的选择器，但仅支持下列语法。

- ID选择器：#the-id
- class选择器（可以连续指定多个）：.a-class.another-class
- 子元素选择器：.the-parent > .the-child
- 后代选择器：.the-ancestor .the-descendant
- 多选择器的并集：#a-node, .some-other-nodes

### 示例代码
```js
const selectorQuery = ma.createSelectorQuery()

selectorQuery.selectAll(".one")
  .boundingClientRect()
  .exec((res) => {
    console.log(res);
  });
```
