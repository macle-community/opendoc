## SJS 语法参考

SJS（safe/subset javascript）是小程序一套自定义脚本语言，可以在 MAML 中使用其构建页面结构。  
SJS 是 JavaScript 语言的子集，与 JavaScript 是不同的语言，其语法并不与 JavaScript 一致，请勿将其等同于 JavaScript。  
SJS 函数支持响应基础组件的事件，无需数据更新，可直接驱动视图元素的样式、类名等的变更，也可查询元素的布局信息等。

### 模块

每一个 .sjs 文件和 \<sjs> 标签都是一个单独的模块。

每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。

一个模块要想对外暴露其内部的私有变量与函数，只能通过 module.exports 实现。

### .sjs 文件

示例：

```sjs
// /pages/comm.sjs

var foo = "'hello macle sjs' from comm.sjs";
var bar = function (d) {
  return d;
};
module.exports = {
  foo: foo,
  bar: bar
};
module.exports.msg = 'some msg';
```

上述例子在 /pages/comm.sjs 的文件里面编写了 SJS 代码。该 .sjs 文件可以被其他的 .sjs 文件 或 MAML 中的 <sjs> 标签引用。

### module 对象

每个 sjs 模块均有一个内置的 module 对象，通过 exports 属性，可以对外共享本模块的私有变量与函数。
示例：

```js
// /pages/tools.sjs

var foo = "'hello world' from tools.sjs";
var bar = function (d) {
  return d;
};
module.exports = {
  FOO: foo,
  bar: bar
};
module.exports.msg = 'some msg';
```

```maml
<!-- page/index/index.maml -->

<sjs src="./../tools.sjs" module="tools" />
<view> {{tools.msg}} </view>
<view> {{tools.bar(tools.FOO)}} </view>
```

### require 函数

在 .sjs 模块中引用其他 sjs 文件模块，可以使用 require 函数，约束如下：

- 只能引用 .sjs 文件模块，且必须使用相对路径；
- sjs 模块均为单例，sjs 模块在第一次被引用时，会自动初始化为单例对象。同个页面多个地方，多次引用，使用的都是同一个 sjs 模块对象；
- 如果一个 sjs 模块在定义之后，一直没有被引用，则该模块不会被解析与运行；

示例：

```js
// /pages/tools.sjs

var foo = "'hello world' from tools.sjs";
var bar = function (d) {
  return d;
};
module.exports = {
  FOO: foo,
  bar: bar
};
module.exports.msg = 'some msg';
```

```js
// /pages/logic.sjs

var tools = require('./tools.sjs');

console.log(tools.FOO);
console.log(tools.bar('logic.sjs'));
console.log(tools.msg);
```

```maml
<!-- /page/index/index.maml -->
<sjs src="./../logic.sjs" module="logic" />
```

控制台输出：

```
'hello world' from tools.sjs
logic.sjs
some msg
```

### \<sjs> 标签

| 属性名 | 类型   | 说明                                                                  |
| :----- | :----- | :-------------------------------------------------------------------- |
| module | String | sjs 模块名                                                            |
| src    | String | 引用.sjs 文件的相对路径，仅当本标签为单闭合标签或标签的内容为空时有效 |

> **注意**：
>
> - module 属性：
>   - 在单个 maml 文件内，建议其值唯一，有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同文件之间的 sjs 模块名不会相互覆盖。；
>   - 命名必须符合下面两个规则：a、首字符必须是：字母（a-zA-Z），下划线（\_）；b、剩余字符可以是：字母（a-zA-Z），下划线（\_）， 数字（0-9）；
> - src 属性：
>   - 只能引用 .sjs 文件模块，且必须使用相对路径；

### 注意事项\*

- SJS 的运行环境和其他 JavaScript 代码是隔离的， sjs 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。
- SJS 函数不能作为组件事件回调。
- \<sjs> 模块只能在定义模块的 MAML 文件中被访问到。使用 \<include> 或 \<import> 时，\<sjs> 模块不会被引入到对应的 MAML 文件中。
- \<template> 标签中，只能使用定义该 \<template> 的 MAML 文件中定义的 \<sjs> 模块。
