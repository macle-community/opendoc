## 简易双向绑定

#### 双向绑定语法

在 MAML 中，普通的属性的绑定是单向的。例如：

```maml
<input value="{{value}}" />
```

如果使用 `this.setData({ value: 'leaf' })` 来更新 `value` ，`this.data.value` 和输入框的中显示的值都会被更新为 `leaf` ；但如果用户修改了输入框里的值，却不会同时改变 `this.data.value` 。

如果需要在用户输入的同时改变 `this.data.value` ，需要借助简易双向绑定机制。此时，可以在对应项目之前加入 `model:` 前缀：

```maml
<input model:value="{{value}}" />
```

这样，如果输入框的值被改变了， `this.data.value` 也会同时改变。同时， MAML 中所有绑定了 `value` 的位置也会被一同更新， 数据监听器也会被正常触发。

用于双向绑定的表达式有如下限制：

1. 只能是一个单一字段的绑定，如

```js
<input model:value="值为 {{value}}" />
<input model:value="{{ a + b }}" />
```

都是非法的；

1. 目前，尚不能 data 路径，如

```js
<input model:value="{{ a.b }}" />
```

这样的表达式目前暂不支持。
