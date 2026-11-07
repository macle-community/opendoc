## checkbox-group

> 多项选择器，内部由多个 checkbox 组成。

| 属性         | 类型          | 默认值 | 必填 | 说明                                                                               |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------|
| bindchange | EventHandle |     | 否  | checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:[选中的 checkbox 的 value 的数组]} |

### 示例代码

#### 1. 多选框组合并处理选择事件

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

