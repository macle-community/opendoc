## Data types

SJS currently supports the following data types:

- string: string
- boolean: boolean
- number: number
- object: object
- function: function
- array: array
- date: date
- regexp: regular expression

### Determining data types

SJS provides two ways to determine data types: constructor and typeof.

- **constructor**
  ```js
  const number = 10;
  console.log(number.constructor); // "Number"
  const string = 'str';
  console.log(string.constructor); // "String"
  const boolean = true;
  console.log(boolean.constructor); // "Boolean"
  const object = {};
  console.log(object.constructor); // "Object"
  const func = function () {};
  console.log(func.constructor); // "Function"
  const array = [];
  console.log(array.constructor); // "Array"
  const date = getDate();
  console.log(date.constructor); // "Date"
  const regexp = getRegExp();
  console.log(regexp.constructor); // "RegExp"
  ```
- **typeof**
  ```js
  const num = 100;
  const bool = false;
  const obj = {};
  const func = function () {};
  const array = [];
  const date = getDate();
  const regexp = getRegExp();
  console.log(typeof num); // 'number'
  console.log(typeof bool); // 'boolean'
  console.log(typeof obj); // 'object'
  console.log(typeof func); // 'function'
  console.log(typeof array); // 'object'
  console.log(typeof date); // 'object'
  console.log(typeof regexp); // 'object'
  console.log(typeof undefined); // 'undefined'
  console.log(typeof null); // 'object
  ```

### number

#### Syntax

number includes two types of values: integers and decimals.

```js
var a = 10;
var PI = 3.141592653589793;
```

#### Properties

- constructor: returns the string "Number".

#### Methods

- toString
- toLocaleString
- valueOf
- toFixed
- toExponential
- toPrecision

> For the specific usage of the above methods, please refer to the ES5 standard.

### string

#### Syntax

```js
'hello world';
'hello world';
```

#### Properties

- constructor: returns the string "String".
- length

#### Methods

- toString
- valueOf
- charAt
- charCodeAt
- concat
- indexOf
- lastIndexOf
- localeCompare
- match
- replace
- search
- slice
- split
- substring
- toLowerCase
- toLocaleLowerCase
- toUpperCase
- toLocaleUpperCase
- trim

> For the specific usage of the above methods, please refer to the ES5 standard.

### boolean

#### Syntax

A boolean has only two specific values: true and false.

#### Properties

- constructor: returns the string "Boolean".

#### Methods

- toString
- valueOf

### object

#### Syntax

An object is an unordered set of key-value pairs. The usage is as follows:

```js
var o = {}; // generate a new empty object

// generate a new non-empty object
o = {
  string: 1, // the key of an object can be a string
  const_var: 2, // the key of an object can also be an identifier that conforms to variable definition rules
  func: {} // the value of an object can be of any type
};

// read operation of object properties
console.log(1 === o['string']);
console.log(2 === o.const_var);

// write operation of object properties
o['string']++;
o['string'] += 10;
o.const_var++;
o.const_var += 10;

// read operation of object properties
console.log(12 === o['string']);
console.log(13 === o.const_var);
```

#### Properties

- constructor: returns the string "Object".

#### Methods

- toString: returns the string "[object Object]".

### function

#### Syntax

function supports the following definition methods:

```js
// Method 1
function a(x) {
  return x;
}

// Method 2
var b = function (x) {
  return x;
};
```

function also supports the following syntax (anonymous functions, closures, etc.):

```js
var a = function (x) {
  return function () {
    return x;
  };
};

var b = a(100);
console.log(100 === b());
```

#### arguments

The arguments keyword can be used inside a function. This keyword currently only supports the following properties:

- length: the number of parameters passed to the function.
- [index]: you can iterate over each parameter passed to the function through the index.

Example:

```js
var a = function () {
  console.log(3 === arguments.length);
  console.log(100 === arguments[0]);
  console.log(200 === arguments[1]);
  console.log(300 === arguments[2]);
};
a(100, 200, 300);
```

#### Properties

- constructor: returns the string "Function".
- length: returns the number of formal parameters of the function.

#### Methods

- toString: returns the string "[function Function]".

Example:

```js
var func = function (a, b, c) {};

console.log('Function' === func.constructor);
console.log(3 === func.length);
console.log('[function Function]' === func.toString());
```

### array

#### Syntax

array supports the following definition methods:

```js
var a = []; // generate a new empty array

a = [1, '2', {}, function () {}]; // generate a new non-empty array. Array elements can be of any type
```

#### Properties

- constructor: returns the string "Array".
- length

#### Methods

- toString
- concat
- join
- pop
- push
- reverse
- shift
- slice
- sort
- splice
- unshift
- indexOf
- lastIndexOf
- every
- some
- forEach
- map
- filter
- reduce
- reduceRight

> For the specific usage of the above properties, please refer to the ES5 standard

### date

#### Syntax

Generating a date object requires using the getDate function, which returns an object of the current time.

```js
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
```

Parameters:

- milliseconds: the number of milliseconds calculated from 00:00:00 UTC on January 1, 1970
- datestring: a date string in the format: "month day, year hours:minutes:seconds"

Example:

```js
var date = getDate(); // returns the current time object

date = getDate(1500000000000);
// Fri Jul 14 2017 10:40:00 GMT+0800 (China Standard Time)
date = getDate('2017-7-14');
// Fri Jul 14 2017 00:00:00 GMT+0800 (China Standard Time)
date = getDate(2017, 6, 14, 10, 40, 0, 0);
// Fri Jul 14 2017 10:40:00 GMT+0800 (China Standard Time)
```

#### Properties

- constructor: returns the string "Date".

#### Methods

- toString
- toDateString
- toTimeString
- toLocaleString
- toLocaleDateString
- toLocaleTimeString
- valueOf
- getTime
- getFullYear
- getUTCFullYear
- getMonth
- getUTCMonth
- getDate
- getUTCDate
- getDay
- getUTCDay
- getHours
- getUTCHours
- getMinutes
- getUTCMinutes
- getSeconds
- getUTCSeconds
- getMilliseconds
- getUTCMilliseconds
- getTimezoneOffset
- setTime
- setMilliseconds
- setUTCMilliseconds
- setSeconds
- setUTCSeconds
- setMinutes
- setUTCMinutes
- setHours
- setUTCHours
- setDate
- setUTCDate
- setMonth
- setUTCMonth
- setFullYear
- setUTCFullYear
- toUTCString
- toISOString
- toJSON

> For the specific usage of the above methods, please refer to the ES5 standard.

### regexp

#### Syntax

Generating a regexp object requires using the getRegExp function.

```js
getRegExp(pattern[, flags])
```

Parameters:

- pattern: the content of the regular expression.
- flags: modifiers. This field can only contain the following characters:
  - g: global
  - i: ignoreCase
  - m: multiline.

Example:

```js
var a = getRegExp('x', 'img');
console.log('x' === a.source);
console.log(true === a.global);
console.log(true === a.ignoreCase);
console.log(true === a.multiline);
```

#### Properties

- constructor: returns the string "RegExp".
- source
- global
- ignoreCase
- multiline
- lastIndex

> For the specific meaning of the properties other than constructor, please refer to the ES5 standard.

#### Methods

- exec
- test
- toString

> For the specific usage of the above methods, please refer to the ES5 standard.
