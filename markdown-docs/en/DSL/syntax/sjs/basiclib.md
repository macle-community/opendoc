## Base library

### console

The console.log method is used to output information in the console window. It can accept multiple parameters and concatenate their results for output.

### Math

#### Properties

- E
- LN10
- LN2
- LOG2E
- LOG10E
- PI
- SQRT1_2
- SQRT2

> For the specific usage of the above properties, please refer to the ES5 standard

#### Methods

- abs
- acos
- asin
- atan
- atan2
- ceil
- cos
- exp
- floor
- log
- max
- min
- pow
- random
- round
- sin
- sqrt
- tan

> For the specific usage of the above methods, please refer to the ES5 standard.

### JSON

#### Methods

- stringify(object): Converts the object into a JSON string and returns the string.
- parse(string): Converts the JSON string into an object and returns the object

Example:

```js
console.log(undefined === JSON.stringify());
console.log(undefined === JSON.stringify(undefined));
console.log('null' === JSON.stringify(null));

console.log('111' === JSON.stringify(111));
console.log('"111"' === JSON.stringify('111'));
console.log('true' === JSON.stringify(true));
console.log(undefined === JSON.stringify(function () {}));

console.log(undefined === JSON.parse(JSON.stringify()));
console.log(undefined === JSON.parse(JSON.stringify(undefined)));
console.log(null === JSON.parse(JSON.stringify(null)));

console.log(111 === JSON.parse(JSON.stringify(111)));
console.log('111' === JSON.parse(JSON.stringify('111')));
console.log(true === JSON.parse(JSON.stringify(true)));

console.log(undefined === JSON.parse(JSON.stringify(function () {})));
```

### Number

#### Properties

- MAX_VALUE
- MIN_VALUE
- NEGATIVE_INFINITY
- POSITIVE_INFINITY

> For the specific usage of the above properties, please refer to the ES5 standard.

### Date

#### Properties

- parse
- UTC
- now

> For the specific usage of the above properties, please refer to the ES5 standard.

### Global

#### Properties

- NaN
- Infinity
- undefined

> For the specific usage of the above properties, please refer to the ES5 standard.

#### Methods

- parseInt
- parseFloat
- isNaN
- isFinite
- decodeURI
- decodeURIComponent
- encodeURI
- encodeURIComponent

> For the specific usage of the above methods, please refer to the ES5 standard.
