## List rendering

### ma:for

Use the ma:for control attribute on a component to bind an array, and you can use the data of each item in the array to repeatedly render the component.
By default, the index variable name of the current item of the array defaults to index, and the variable name of the current item of the array defaults to item

```js
<view ma:for="{{array}}" ma:key="{{item.id}}">
    {{index}}: {{item.message}}
</view>
```

```js
Page({
  data: {
    array: [
      {
        message: 'foo',
        id: 1,
      },
      {
        message: 'bar',
        id: 2,
      },
    ],
  }
})
```

Use ma:for-item to specify the variable name of the current element of the array,
and use ma:for-index to specify the variable name of the current index of the array:

```js
<view ma:for="{{['a', 'b', 'c', 'd']}}" ma:for-index="idx" ma:for-item="itemName" ma:key="{{item.id}}">
  {{idx+1}}: {{itemName}}
</view>
```

### block ma:for

Similar to block ma:if, you can also use ma:for on the <block/> tag to render a structural block containing multiple nodes. For example:

```js
<block ma:for="{{[1, 2, 3]}}" ma:key="{{item}}">
    <view> {{index}}: </view>
    <view> {{item}} </view>
</block>
```

### ma:key

If the position of items in the list will change dynamically or new items will be added to the list, and you want the items in the list to maintain their own features and state (such as the input content in input, the selected state of switch), you need to use ma:key to specify the unique identifier of the item in the list.

The value of ma:key is provided in two forms:

- 1. A string representing a certain property of the item in the array of the for loop. The value of this property needs to be a unique string or number in the list, and cannot change dynamically.
- 2. The reserved keyword \*this represents the item itself in the for loop. This representation requires that the item itself is a unique string or number.

When a data change triggers the rendering layer to re-render, the components with keys will be corrected. The framework will ensure that they are re-sorted rather than re-created, to ensure that the components maintain their own state, and to improve the efficiency of list rendering.

> If ma:key is not provided, a warning will be reported. If you know clearly that the list is static, or you do not need to care about its order, you can choose to ignore it.

### Note

When the value of ma:for is a string, the string will be parsed into a string array

```js
<view ma:for="macle" ma:key="{{item}}">
  {{item}}
</view>
```

Is equivalent to

```js
<view ma:for="{{['m','a','c','l','e']}}" ma:key="{{item}}">
  {{item}}
</view>
```



### F&Qs

**Q:** List rendering warning: should provide attr 'ma:key' for a 'ma:for' to improve performance. How to handle it?



**A**: maml supports the [list loop](FRAMEWORK_LIST) syntax, which can efficiently and concisely batch render the same structured component. However, during use, the warning **should provide attr 'ma:key' for a 'ma:for' to improve performance** may appear. This is because if the position of items in the list changes dynamically or new items are added to the list, and you want the items in the list to maintain their own features and state (such as the input content in input, the selected state of switch), you need to use ma:key to specify the unique identifier of the item in the list. When the compiler reports the above warning, you only need to add a ma:key within the tag syntax.



For example:

```js
<!--index.maml-->
<view ma:for="{{array}}" ma:for-item="item">
    {{index}}: {{item.message}}
</view>
```

Can be modified to:

```js
<!--index.maml-->
<view ma:for="{{array}}" ma:key="{{item.id}}" ma:for-item="item">
    {{index}}: {{item.message}}
</view>
```

**Q:** Can `ma:if` and `ma:for` be placed on the same tag?

**A:** Performing if judgment and list rendering at the same time is a writing style that can easily cause performance waste and logical errors. It is recommended that, according to the actual needs during development, you place `ma:if` and `ma:for` on tags at different levels to achieve better development results
