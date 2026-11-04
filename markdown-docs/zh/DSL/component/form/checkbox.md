## checkbox

> 多选项目。

| 属性       | 类型      | 默认值     | 必填 | 说明                                                                |
|:---------|:--------|:--------|:---|:------------------------------------------------------------------|
| value    | String  |         | 否  | checkbox 标识，选中时触发 checkbox-group 的 change 事件，并携带 checkbox 的 value |
| disabled | Boolean | false   | 否  | 是否禁用                                                              |
| checked  | Boolean | false   | 否  | 当前是否选中，可用来设置默认选中                                                  |
| color    | String  | #09BB07 | 否  | checkbox 的颜色，同 css 的 color                                        |

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
