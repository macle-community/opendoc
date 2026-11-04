## 变量

### 概念

- sjs 中的变量均为值的引用。
- 没有声明的变量直接赋值使用，会被定义为全局变量。
- 如果只声明变量而不赋值，则默认值为 undefined。
- var 表现与 javascript 一致，会有变量提升

```
var foo = 1;
var bar = "hello world";
var i; // i === undefined
```

### 变量名

变量命名必须符合下面两个规则：

- 首字符必须是：字母（a-zA-Z），下划线（\_）
- 剩余字符可以是：字母（a-zA-Z），下划线（\_）， 数字（0-9）

### 保留标识符

与 Javascript 语法规则一致，以下标识符不能作为变量名：

```
delete
void
typeof

null
undefined
NaN
Infinity
var

if
else

true
false

require

this
function
arguments
return

for
while
do
break
continue
switch
case
default
```
