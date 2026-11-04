## checkbox-group

> Multi-item selector, internally composed of multiple checkboxes.

| Property     | Type          | Default Value | Required | Description                                                                               |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------|
| bindchange | EventHandle |     | No  | Triggered with a change event when the selected item in the checkbox-group changes. detail = {value:[array of the selected checkbox's values]} |

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
