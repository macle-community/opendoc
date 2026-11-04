## switch

> 开关选择器。

| 属性         | 类型          | 默认值     | 必填 | 说明                                            |
|:-----------|:------------|:--------|:---|:----------------------------------------------|
| checked    | Boolean     | false   | 否  | 是否选中                                          |
| disabled   | Boolean     | false   | 否  | 是否禁用                                          |
| type       | String      | switch  | 否  | 样式，有效值：switch, checkbox                       |
| color      | String      | #04BE02 | 否  | switch 的颜色，同 css 的 color                      |
| bindchange | Eventhandle |         | 否  | checked 改变时触发 change 事件，event.detail={ value} |

### 示例代码

```html

<view>
  <switch bindchange='switchChange' />
</view>
```

```js
Page({
  switchChange: function(e) {
    console.log(e.detail.value)
  }
})

```
