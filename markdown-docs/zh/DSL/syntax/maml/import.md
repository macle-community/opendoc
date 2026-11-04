## 引用

MAML 提供两种文件引用方式 import 和 include，支持相对路径或绝对路径。

### import

import 可以在该文件中使用目标文件定义的 template，如：
在 item.maml 中定义了一个叫 item 的 template：

```
<!-- item.maml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 index.maml 中引用了 item.maml，就可以使用 item 模板：

```
<import src="item.maml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

### import 的作用域

import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。

> 如：C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 定义的 template。

### include

include 可以将目标文件除了 `<template>` 外的整个代码引入，相当于是拷贝到 include 位置，如：

```
<!-- index.maml -->
<include src="header.maml"/>
<view> body </view>
<include src="footer.maml"/>
```

```
<!-- header.maml -->
<view> header </view>
```

```
<!-- footer.maml -->
<view> footer </view>
```
