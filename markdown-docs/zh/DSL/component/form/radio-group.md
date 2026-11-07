## radio-group

> 单项选择器，内部由多个 radio 组成。

| 属性         | 类型          | 默认值 | 必填 | 说明                                                                                                       |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------------------------------|
| bindchange | EventHandle |     | 否  | [radio-group](MACLE_COMPONENT_RADIO_GROUP)中选中项发生改变时触发 change 事件，detail = {value:[选中的 radio 的 value 的数组]} |

### 示例代码

#### 1. 单项选择器组与切换事件

```html
<radio-group bindchange="onRadioChange">
  <view class="radio-list">
    <label class="radio-item" ma:for="{{plans}}" ma:key="{{item.id}}">
      <radio value="{{item.id}}" checked="{{item.id === currentPlan}}" color="#2563eb" />
      <text class="radio-label">{{item.name}} ({{item.price}})</text>
    </label>
  </view>
</radio-group>
<view class="selected-plan">Selected: {{currentPlan}}</view>
```

```js
Page({
  data: {
    plans: [
      { id: 'free', name: 'Free Tier', price: '$0' },
      { id: 'pro', name: 'Pro Plan', price: '$19/mo' },
      { id: 'team', name: 'Team Enterprise', price: '$49/mo' }
    ],
    currentPlan: 'pro'
  },
  onRadioChange(e) { this.setData({ currentPlan: e.detail.value }); }
});
```

```css
.radio-list { display: flex; flex-direction: column; gap: 10px; }
.radio-item { display: flex; align-items: center; gap: 8px; font-size: 14px; background: #fff; padding: 10px; border-radius: 6px; }
.selected-plan { margin-top: 10px; font-size: 13px; color: #2563eb; font-weight: 600; }
```

