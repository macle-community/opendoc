## Data binding

All dynamic data in MAML comes from the data of the corresponding Page.

### Simple binding

Data binding uses Mustache syntax (double curly braces) to wrap variables, and can be applied to:

#### Content

```js
<view> {{ message }} </view>
```

```js
Page({
  data: {
    message: 'Hello Macle!'
  }
})
```

#### Component properties (must be within double quotes)

```js
<view id="m-{{id}}"> </view>
```

```js
Page({
  data: {
    id: 1
  }
})
```

#### Conditional properties (must be within double quotes)

```js
<view ma:if="{{condition}}"> </view>
```

```js
Page({
  data: {
    condition: true
  }
})
```

#### Keywords (must be within double quotes)

true: the boolean type true, representing a truthy value.
false: the boolean type false, representing a falsy value.

```js
<checkbox checked="{{false}}"> </checkbox>
```

> Note: Do not write checked="false" directly. Its evaluation result is a string.

### Operations

You can perform simple operations inside {{}}. The supported ways are as follows:

#### Ternary operation

```js
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

#### Arithmetic operations

```js
<view> {{a + b}} + {{c}} + d </view>
```

```js
Page({
  data: {
    a: 1,
    b: 2,
    c: 3
  }
})
```

Output result 3 + 3 + d

#### Logical operations

```js
<view ma:if="{{length > 5}}"> </view>
```

#### String operations

```js
<view>{{"hello" + name}}</view>
```

#### Data path operations

```js
<view>{{object.key}} {{array[0]}}</view>
```

```js
Page({
  data: {
    object: {
      key: 'Hello '
    },
    array: ['Macle']
  }
})
```

### Composition

You can also directly compose within Mustache to form new objects or arrays.

#### Array

```js
<view ma:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
```

```js
Page({
  data: {
    zero: 0
  }
})
```

Finally composed into the array [0, 1, 2, 3, 4]

> Note: If there are spaces between the curly braces and quotes, they will eventually be parsed as a string

```js
<view ma:for="{{[1,2,3]}} ">
  {{item}}
</view>
```

Is equivalent to

```js
<view ma:for="{{[1,2,3] + ' '}}">
  {{item}}
</view>
```

#### Object

```js
<template is="objectCombine" data="{{for: a, bar: b}}"></template>
```

```js
Page({
  data: {
    a: 1,
    b: 2
  }
})
```

The final composed object is {for: 1, bar: 2}

### FAQ

#### How to bind methods to tags in maml pages, how to bind the parameters of the corresponding method, and pass values to events?

**A**: The general syntax for passing values to events is to add data-parameter name = the parameter value you want to bind within the tag, for example:

```js
<view bindtap="testTap" data-test-value = "1"> </view>
```

Correspondingly, in the js file, you can get the value of the input parameter through the following writing:

```js
testTap(e){
	console.log(e.currentTarget.dataset.testValue)
}
```

The hyphen notation used in this value passing will eventually be converted to camelCase. For details, see [Events](FRAMEWORK_EVENT).
