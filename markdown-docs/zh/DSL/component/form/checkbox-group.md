## checkbox-group

> 多项选择器，内部由多个 checkbox 组成。

| 属性         | 类型          | 默认值 | 必填 | 说明                                                                               |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------|
| bindchange | EventHandle |     | 否  | checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:[选中的 checkbox 的 value 的数组]} |

### 示例代码

```html

<checkbox-group bindchange='checkboxChange'>
  <label ma:for='{{items}}' ma:key='{{item.value}}'>
    <view>
      <checkbox value='{{item.value}}' checked='{{item.checked}}' color='pink' />
    </view>
    <view>{{item.name}}</view>
  </label>
</checkbox-group>
```

```js
Page({
  data: {
    items: [
      { value: 'USA', name: 'USA' },
      { value: 'CHN', name: 'China', checked: 'true' },
      { value: 'BRA', name: 'Brazil' },
      { value: 'JPN', name: 'Japan' },
      { value: 'ENG', name: 'England' },
      { value: 'FRA', name: 'France' }
    ]
  },
  checkboxChange: function(e) {
    console.log(e.detail.value)
    var items = this.data.items,
      values = e.detail.value
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items: items
    })
  }
})

```
