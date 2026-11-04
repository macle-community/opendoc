## checkbox

> Multiple-choice item.

| Property   | Type      | Default Value | Required | Description                                                                |
|:---------|:--------|:--------|:---|:------------------------------------------------------------------|
| value    | String  |         | No  | The checkbox identifier. When selected, it triggers the change event of the checkbox-group and carries the checkbox's value |
| disabled | Boolean | false   | No  | Whether to disable                                                              |
| checked  | Boolean | false   | No  | Whether currently selected. Can be used to set the default selection                                                  |
| color    | String  | #09BB07 | No  | The color of the checkbox, same as the CSS color                                        |

### Sample Code

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
