## SJS syntax reference

SJS (safe/subset javascript) is a set of custom scripting languages for mini programs. It can be used in MAML to build page structures.  
SJS is a subset of the JavaScript language. It is a different language from JavaScript, and its syntax is not consistent with JavaScript. Do not treat it as equivalent to JavaScript.  
SJS functions support responding to events of basic components. Without data updates, they can directly drive changes to the styles, class names, etc. of view elements, and can also query the layout information of elements, etc.

### Modules

Each .sjs file and \<sjs> tag is a separate module.

Each module has its own independent scope. That is, variables and functions defined in a module are private by default and invisible to other modules.

A module can only expose its internal private variables and functions to the outside through module.exports.

### .sjs file

Example:

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

The above example writes SJS code in the /pages/comm.sjs file. This .sjs file can be referenced by other .sjs files or <sjs> tags in MAML.

### module object

Each sjs module has a built-in module object. Through the exports property, the private variables and functions of this module can be shared with the outside.
Example:

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

### require function

To reference other sjs file modules in a .sjs module, you can use the require function. The constraints are as follows:

- Only .sjs file modules can be referenced, and relative paths must be used;
- sjs modules are all singletons. An sjs module is automatically initialized as a singleton object when it is referenced for the first time. When the same page references the same sjs module multiple times in multiple places, the same sjs module object is used;
- If an sjs module is never referenced after being defined, the module will not be parsed and executed;

Example:

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

Console output:

```
'hello world' from tools.sjs
logic.sjs
some msg
```

### \<sjs> tag

| Property Name | Type   | Description                                                                  |
| :----- | :----- | :-------------------------------------------------------------------- |
| module | String | sjs module name                                                            |
| src    | String | The relative path of the referenced .sjs file. Only effective when this tag is a self-closing tag or the content of the tag is empty |

> **Note**:
>
> - module property:
>   - In a single maml file, it is recommended that its value be unique. If there are duplicate module names, they will be overwritten according to their order (the latter overwrites the former). sjs module names between different files will not overwrite each other.;
>   - The naming must conform to the following two rules: a. The first character must be: a letter (a-zA-Z), an underscore (\_); b. The remaining characters can be: letters (a-zA-Z), underscores (\_), digits (0-9);
> - src property:
>   - Only .sjs file modules can be referenced, and relative paths must be used;

### Notes\*

- The runtime environment of SJS is isolated from other JavaScript code. Functions defined in other JavaScript files cannot be called in sjs, nor can the APIs provided by the mini program be called.
- SJS functions cannot be used as component event callbacks.
- \<sjs> modules can only be accessed within the MAML file that defines the module. When using \<include> or \<import>, the \<sjs> module will not be imported into the corresponding MAML file.
- In the \<template> tag, only the \<sjs> modules defined in the MAML file that defines the \<template> can be used.
