## radio-group

> Single-item selector, internally composed of multiple radios.

| Property     | Type          | Default Value | Required | Description                                                                                                       |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------------------------------|
| bindchange | EventHandle |     | No  | Triggered with a change event when the selected item in [radio-group](MACLE_COMPONENT_RADIO_GROUP) changes. detail = {value:[array of the selected radio's values]} |

### Sample Code

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
      { value: 'USA', name: 'USA' },
      { value: 'CHN', name: 'China', checked: 'true' },
      { value: 'BRA', name: 'Brazil' },
      { value: 'JPN', name: 'Japan' },
      { value: 'ENG', name: 'England' },
      { value: 'FRA', name: 'France' }
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
