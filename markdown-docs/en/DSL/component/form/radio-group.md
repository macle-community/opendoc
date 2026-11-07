## radio-group

> Single-item selector, internally composed of multiple radios.

| Property     | Type          | Default Value | Required | Description                                                                                                       |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------------------------------|
| bindchange | EventHandle |     | No  | Triggered with a change event when the selected item in [radio-group](MACLE_COMPONENT_RADIO_GROUP) changes. detail = {value:[array of the selected radio's values]} |

### Sample Code

#### 1. Radio Group with Exclusive Selection

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

