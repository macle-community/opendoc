## checkbox-group

> Multi-item selector, internally composed of multiple checkboxes.

| Property     | Type          | Default Value | Required | Description                                                                               |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------|
| bindchange | EventHandle |     | No  | Triggered with a change event when the selected item in the checkbox-group changes. detail = {value:[array of the selected checkbox's values]} |

### Sample Code

#### 1. Multi-Select Checkbox Group with Change Handler

```html
<checkbox-group bindchange="onCheckboxChange">
  <view class="cb-list">
    <label class="cb-item" ma:for="{{options}}" ma:key="{{item.value}}">
      <checkbox value="{{item.value}}" checked="{{item.checked}}" color="#0284c7" />
      <text>{{item.label}}</text>
    </label>
  </view>
</checkbox-group>
<view class="selected-text">Selected: {{selectedList}}</view>
```

```js
Page({
  data: {
    options: [
      { value: 'JS', label: 'JavaScript', checked: true },
      { value: 'TS', label: 'TypeScript', checked: true },
      { value: 'REACT', label: 'React / Taro' },
      { value: 'MAML', label: 'Native MAML' }
    ],
    selectedList: 'JS, TS'
  },
  onCheckboxChange(e) {
    this.setData({ selectedList: e.detail.value.join(', ') });
  }
});
```

```css
.cb-list { display: flex; flex-direction: column; gap: 10px; }
.cb-item { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.selected-text { margin-top: 12px; font-size: 13px; color: #0284c7; font-weight: 600; }
```

