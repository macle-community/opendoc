## 数据类型

SJS 目前支持如下数据类型：

- string：字符串
- boolean：布尔值
- number：数值
- object：对象
- function：函数
- array：数组
- date：日期
- regexp：正则表达式

### 判断数据类型

SJS 提供了 constructor 与 typeof 两种方式判断数据类型。

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

#### 语法

number 包括两种数值：整数，小数。

```js
var a = 10;
var PI = 3.141592653589793;
```

#### 属性

- constructor：返回字符串 "Number"。

#### 方法

- toString
- toLocaleString
- valueOf
- toFixed
- toExponential
- toPrecision

> 以上方法的具体使用请参考 ES5 标准。

### string

#### 语法

```js
'hello world';
'hello world';
```

#### 属性

- constructor：返回字符串 "String"。
- length

#### 方法

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

> 以上方法的具体使用请参考 ES5 标准。

### boolean

#### 语法

布尔值只有两个特定的值：true 和 false。

#### 属性

- constructor：返回字符串 "Boolean"。

#### 方法

- toString
- valueOf

### object

#### 语法

object 是一种无序的键值对。使用方法如下所示：

```js
var o = {}; //生成一个新的空对象

//生成一个新的非空对象
o = {
  string: 1, //object 的 key 可以是字符串
  const_var: 2, //object 的 key 也可以是符合变量定义规则的标识符
  func: {} //object 的 value 可以是任何类型
};

//对象属性的读操作
console.log(1 === o['string']);
console.log(2 === o.const_var);

//对象属性的写操作
o['string']++;
o['string'] += 10;
o.const_var++;
o.const_var += 10;

//对象属性的读操作
console.log(12 === o['string']);
console.log(13 === o.const_var);
```

#### 属性

- constructor：返回字符串 "Object"。

#### 方法

- toString：返回字符串 "[object Object]"。

### function

#### 语法

function 支持以下的定义方式：

```js
//方法 1
function a(x) {
  return x;
}

//方法 2
var b = function (x) {
  return x;
};
```

function 同时也支持以下的语法（匿名函数，闭包等）：

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

function 里面可以使用 arguments 关键词。该关键词目前只支持以下的属性：

- length: 传递给函数的参数个数。
- [index]: 通过 index 下标可以遍历传递给函数的每个参数。

示例：

```js
var a = function () {
  console.log(3 === arguments.length);
  console.log(100 === arguments[0]);
  console.log(200 === arguments[1]);
  console.log(300 === arguments[2]);
};
a(100, 200, 300);
```

#### 属性

- constructor：返回字符串 "Function"。
- length：返回函数的形参个数。

#### 方法

- toString：返回字符串 "[function Function]"。

示例：

```js
var func = function (a, b, c) {};

console.log('Function' === func.constructor);
console.log(3 === func.length);
console.log('[function Function]' === func.toString());
```

### array

#### 语法

array 支持以下的定义方式：

```js
var a = []; //生成一个新的空数组

a = [1, '2', {}, function () {}]; //生成一个新的非空数组，数组元素可以是任何类型
```

#### 属性

- constructor：返回字符串 "Array"。
- length

#### 方法

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

> 以上属性的具体使用请参考 ES5 标准

### date

#### 语法

生成 date 对象需要使用 getDate 函数, 返回一个当前时间的对象。

```js
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
```

参数：

- milliseconds: 从 1970 年 1 月 1 日 00:00:00 UTC 开始计算的毫秒数
- datestring: 日期字符串，其格式为："month day, year hours:minutes:seconds"

示例：

```js
var date = getDate(); //返回当前时间对象

date = getDate(1500000000000);
// Fri Jul 14 2017 10:40:00 GMT+0800 (中国标准时间)
date = getDate('2017-7-14');
// Fri Jul 14 2017 00:00:00 GMT+0800 (中国标准时间)
date = getDate(2017, 6, 14, 10, 40, 0, 0);
// Fri Jul 14 2017 10:40:00 GMT+0800 (中国标准时间)
```

#### 属性

- constructor：返回字符串 "Date"。

#### 方法

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

> 以上方法的具体使用请参考 ES5 标准。

### regexp

#### 语法

生成 regexp 对象需要使用 getRegExp 函数。

```js
getRegExp(pattern[, flags])
```

参数：

- pattern: 正则表达式的内容。
- flags：修饰符。该字段只能包含以下字符:
  - g: global
  - i: ignoreCase
  - m: multiline。

示例：

```js
var a = getRegExp('x', 'img');
console.log('x' === a.source);
console.log(true === a.global);
console.log(true === a.ignoreCase);
console.log(true === a.multiline);
```

#### 属性

- constructor：返回字符串 "RegExp"。
- source
- global
- ignoreCase
- multiline
- lastIndex

> 除 constructor 外属性的具体含义请参考 ES5 标准。

#### 方法

- exec
- test
- toString

> 以上方法的具体使用请参考 ES5 标准。
