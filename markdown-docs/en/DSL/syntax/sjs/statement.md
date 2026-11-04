## Statements

### if statement

In a .sjs file, you can use the following formats of if statements:

- if (expression) statement : When expression is truthy, execute statement.
- if (expression) statement1 else statement2 : When expression is truthy, execute statement1. Otherwise, execute statement2.
- if ... else if ... else statementN Through this pattern, you can select one of statement1 ~ statementN to execute.

Example:

```js
// if ...
if (expression) statement;
if (expression) statement;
if (expression) {
  code block;
}
// if ... else
if (expression) statement;
else statement;
if (expression) statement;
else statement;
if (expression) {
  code block;
} else {
  code block;
}
// if ... else if ... else ...
if (expression) {
  code block;
} else if (expression) {
  code block;
} else if (expression) {
  code block;
} else {
  code block;
}
```

### switch statement

Example:

```js
switch (expression) {
  case variable:
    statement;
  case number:
    statement;
    break;
  case string:
    statement;
  default:
    statement;
}
```

> - The default branch can be omitted.
> - After the case keyword, only: variables, numbers, strings can be used.

### for statement

Example:

```js
for (statement; statement; statement) statement;
for (statement; statement; statement) {
  code block;
}
```

> - The use of break and continue keywords is supported.

### while statement

Example:

```js
while (expression) statement;

while (expression) {
  code block;
}

do {
  code block;
} while (expression);
```

> - When the expression is true, the statement or code block is executed in a loop.
> - The use of break and continue keywords is supported.
