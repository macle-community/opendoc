## Variables

### Concept

- Variables in sjs are all references to values.
- Variables that are directly assigned a value without declaration will be defined as global variables.
- If a variable is only declared but not assigned a value, the default value is undefined.
- var behaves consistently with javascript, with variable hoisting

```
var foo = 1;
var bar = "hello world";
var i; // i === undefined
```

### Variable names

Variable naming must conform to the following two rules:

- The first character must be: a letter (a-zA-Z), an underscore (\_)
- The remaining characters can be: letters (a-zA-Z), underscores (\_), digits (0-9)

### Reserved identifiers

Consistent with Javascript syntax rules, the following identifiers cannot be used as variable names:

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
