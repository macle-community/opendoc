## 数据绑定

MAML 中的动态数据均来自对应 Page 的 data。

### 简单绑定

数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于：

#### 内容

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

#### 组件属性(需要在双引号之内)

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

#### 条件属性(需要在双引号之内)

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

#### 关键字(需要在双引号之内)

true：boolean 类型的 true，代表真值。
false： boolean 类型的 false，代表假值。

```js
<checkbox checked="{{false}}"> </checkbox>
```

> 注意：不要直接写 checked="false"，其计算结果是一个字符串。

### 运算

可以在 {{}} 内进行简单的运算，支持的有如下几种方式：

#### 三元运算

```js
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

#### 算数运算

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

输出结果 3 + 3 + d

#### 逻辑判断

```js
<view ma:if="{{length > 5}}"> </view>
```

#### 字符串运算

```js
<view>{{"hello" + name}}</view>
```

#### 数据路径运算

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

### 组合

也可以在 Mustache 内直接进行组合，构成新的对象或者数组。

#### 数组

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

最终组合成数组[0, 1, 2, 3, 4]

> 注意：花括号和引号之间如果有空格，将最终被解析成为字符串

```js
<view ma:for="{{[1,2,3]}} ">
  {{item}}
</view>
```

等价于

```js
<view ma:for="{{[1,2,3] + ' '}}">
  {{item}}
</view>
```

#### 对象

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

最终组合成的对象是 {for: 1, bar: 2}

### 常见问题

#### maml页面对标签绑定方法，如何绑定对应方法的参数，对事件进行传值？

**A**：事件传值通用语法为在标签内添加 data-参数名称 = 想绑定的参数值，例如:

```js
<view bindtap="testTap" data-test-value = "1"> </view>
```

相应的，在js文件中，可以通过如下写法取得入参中的值：

```js
testTap(e){
	console.log(e.currentTarget.dataset.testValue)
}
```

这种传值使用的连词符写法最终会被转换成驼峰写法，具体内容可以参见 [事件](FRAMEWORK_EVENT)。