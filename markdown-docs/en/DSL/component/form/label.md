## label

> Used to improve the usability of form components. Use the for attribute to find the corresponding id, or place the control under this tag. When clicked, the corresponding control will be triggered. The
> for attribute takes precedence over internal controls. When there are multiple internal controls, the first control is triggered by default. The controls that can currently be bound are: button, checkbox, radio, switch.

| Property | Type     | Default Value | Required | Description       |
|:----|:-------|:----|:---|:---------|
| for | String |     | No  | The id of the bound control |

### Sample Code

```html

<view>
  <view >label-for</view>
  <radio-group bindchange='radioChange' id='radioGroup'>
    <view ma:for='{{radioItems}}'>
      <radio id='{{item.name}}' value='{{item.name}}' checked='{{item.checked}}' color='pink'></radio>
      <label for='{{item.name}}'>
        <text id='{{item.value}}'>{{item.name}}</text>
      </label>
    </view>
  </radio-group>
</view>
```

```js
Page({
  data: {
    radioItems: [
      { name: 'USA', value: 'USA' },
      { name: 'CHN', value: 'China', checked: 'true' }
    ],
    hidden: false
  },
  radioChange: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  }
})

```
