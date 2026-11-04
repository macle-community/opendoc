## 列表渲染

### ma:for

在组件上使用 ma:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。
默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item

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

使用 ma:for-item 可以指定数组当前元素的变量名，
使用 ma:for-index 可以指定数组当前下标的变量名:

```js
<view ma:for="{{['a', 'b', 'c', 'd']}}" ma:for-index="idx" ma:for-item="itemName" ma:key="{{item.id}}">
  {{idx+1}}: {{itemName}}
</view>
```

### block ma:for

类似 block ma:if，也可以将 ma:for 用在<block/>标签上，以渲染一个包含多节点的结构块。例如：

```js
<block ma:for="{{[1, 2, 3]}}" ma:key="{{item}}">
    <view> {{index}}: </view>
    <view> {{item}} </view>
</block>
```

### ma:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 input 中的输入内容，switch 的选中状态），需要使用 ma:key 来指定列表中项目的唯一的标识符。

ma:key 的值以两种形式提供：

- 1.字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
- 2.保留关键字 \*this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

> 如不提供 ma:key，会报一个 warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。

### 注意

当 ma:for 的值为字符串时，会将字符串解析成字符串数组

```js
<view ma:for="macle" ma:key="{{item}}">
  {{item}}
</view>
```

等价于

```js
<view ma:for="{{['m','a','c','l','e']}}" ma:key="{{item}}">
  {{item}}
</view>
```



### F&Qs

**Q:** 列表渲染警告：should provide attr 'ma:key' for a 'ma:for' to improve performance.如何处理



**A**：maml支持[列表循环](FRAMEWORK_LIST)语法，可以高效简洁的批量渲染同一结构化的组件。但在使用过程中可能会出现**should provide attr 'ma:key' for a 'ma:for' to improve performance**的警告，这是因为如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 input 中的输入内容，switch 的选中状态），需要使用 ma:key 来指定列表中项目的唯一的标识符。当编译器出现上述报警时，只需要在标签语内添加一个 ma：key即可。



例如：

```js
<!--index.maml-->
<view ma:for="{{array}}" ma:for-item="item">
    {{index}}: {{item.message}}
</view>
```

可以修改为：

```js
<!--index.maml-->
<view ma:for="{{array}}" ma:key="{{item.id}}" ma:for-item="item">
    {{index}}: {{item.message}}
</view>
```

**Q:** `ma:if` 和 `ma:for` 可以放到同一标签上使用吗?

**A:** if判断和列表渲染同时进行是一种很容易造成性能浪费和逻辑错误的写法，建议您根据开发过程中的实际需要，将 `ma:if` 和 `ma:for` 放置在不同层级的标签上以达到更好的开发效果
