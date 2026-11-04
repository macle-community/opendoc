## References

MAML provides two file reference methods: import and include. Both support relative paths or absolute paths.

### import

import allows you to use the template defined in the target file in this file. For example:
A template named item is defined in item.maml:

```
<!-- item.maml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

In index.maml, item.maml is imported, so the item template can be used:

```
<import src="item.maml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

### Scope of import

import has the concept of scope, that is, it will only import the templates defined in the target file, and will not import the templates that the target file imports.

> For example: C imports B, B imports A. In C, the templates defined in B can be used. In B, the templates defined in A can be used. But C cannot use the templates defined in A.

### include

include can import the entire code of the target file except `<template>`, which is equivalent to copying it to the include location. For example:

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
