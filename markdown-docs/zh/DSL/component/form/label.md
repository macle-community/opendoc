## label

> 用来改进表单组件的可用性。 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for
> 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch。

| 属性  | 类型     | 默认值 | 必填 | 说明       |
|:----|:-------|:----|:---|:---------|
| for | String |     | 否  | 绑定控件的 id |

### 示例代码

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
