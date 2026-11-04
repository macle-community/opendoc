## radio-group

> 单项选择器，内部由多个 radio 组成。

| 属性         | 类型          | 默认值 | 必填 | 说明                                                                                                       |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------------------------------|
| bindchange | EventHandle |     | 否  | [radio-group](MACLE_COMPONENT_RADIO_GROUP)中选中项发生改变时触发 change 事件，detail = {value:[选中的 radio 的 value 的数组]} |

### 示例代码

```html

<view>
  <view>
    <radio-group bindchange='radioChange'>
      <label ma:for='{{items}}' ma:key='{{item.value}}'>
        <view>
          <radio value='{{item.value}}' checked='{{item.checked}}' color='pink' />
        </view>
        <view>{{item.name}}</view>
      </label>
    </radio-group>
  </view>
</view>
```

```js
Page({
  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: 'true' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' }
    ]
  },
  radioChange: function(e) {
    console.log(e.detail.value);

    var items = this.data.items;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value;
    }

    this.setData({
      items: items
    });
  }
});
```
