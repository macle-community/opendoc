## Operators

### Arithmetic operators

```js
var a = 10,
  b = 20;
// Addition
console.log(30 === a + b); //true
// Subtraction
console.log(-10 === a - b); //true
// Multiplication
console.log(200 === a * b); //true
// Division
console.log(0.5 === a / b); //true
// Modulo
console.log(10 === a % b); //true
```

The addition + operator can be used for string concatenation.

```js
var a = 'hello',
  b = ' macle';
// String concatenation
console.log('hello macle' === a + b); //true
```

### Comparison operators

```js
var a = 10,
  b = 20;
// Less than
console.log(true === a < b); //true
// Greater than
console.log(false === a > b); //true
// Less than or equal to
console.log(true === a <= b); //true
// Greater than or equal to
console.log(false === a >= b); //true
// Equal
console.log(false === (a == b)); //true
// Not equal
console.log(true === (a != b)); //true
// Strictly equal
console.log(false === (a === b)); //true
// Strictly not equal
console.log(true === (a !== b)); //true
```

### Binary logical operators

```js
var a = 10,
  b = 20;
// Logical AND
console.log(20 === (a && b)); //true
// Logical OR
console.log(10 === (a || b)); //true
// Logical NOT, negation
console.log(false === !a); //true
```

### Bitwise operators

```js
var a = 10,
  b = 20;
// Left shift
console.log(80 === a << 3); //true
// Signed right shift
console.log(2 === a >> 2); //true
// Unsigned right shift
console.log(2 === a >>> 2); //true
// AND
console.log(2 === (a & 3)); //true
// XOR
console.log(9 === (a ^ 3)); //true
// OR
console.log(11 === (a | 3)); //true
```

### Assignment operators

```js
var a = 10;
a = 10;
a *= 10;
console.log(100 === a); //true
a = 10;
a /= 5;
console.log(2 === a); //true
a = 10;
a %= 7;
console.log(3 === a); //true
a = 10;
a += 5;
console.log(15 === a); //true
a = 10;
a -= 11;
console.log(-1 === a); //true
a = 10;
a <<= 10;
console.log(10240 === a); //true
a = 10;
a >>= 2;
console.log(2 === a); //true
a = 10;
a >>>= 2;
console.log(2 === a); //true
a = 10;
a &= 3;
```

### Unary operators

```js
var a = 10,
  b = 20;
// Increment
console.log(10 === a++); //true
console.log(12 === ++a); //true
// Decrement
console.log(12 === a--); //true
console.log(10 === --a); //true
// Positive
console.log(10 === +a); //true
// Negative
console.log(0 - 10 === -a); //true
// NOT
console.log(-11 === ~a); //true
// Negation
console.log(false === !a); //true
// delete
console.log(true === delete a.fake); //true
// void
```

### Ternary operator

```js
var a = 10,
  b = 20;
// Conditional operator
console.log(20 === (a >= 10 ? a + 10 : b + 10)); //true
```

### Comma operator

```js
var a = 10,
  b = 20;
// Comma operator
console.log(20 === (a, b)); //true
```

### Operator precedence

The precedence of SJS operators is consistent with Javascript.
