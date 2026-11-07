## switch

> Switch selector.

| Property     | Type          | Default Value | Required | Description                                            |
|:-----------|:------------|:--------|:---|:----------------------------------------------|
| checked    | Boolean     | false   | No  | Whether selected                                          |
| disabled   | Boolean     | false   | No  | Whether to disable                                          |
| type       | String      | switch  | No  | Style. Valid values: switch, checkbox                       |
| color      | String      | #04BE02 | No  | The color of the switch, same as the CSS color                      |
| bindchange | Eventhandle |         | No  | Triggered with a change event when checked changes. event.detail={ value} |

### Sample Code

#### 1. Switch Selector with Change Event

```html
<view class="switch-row">
  <text class="sw-title">Notification Enabled:</text>
  <switch checked="{{isEnabled}}" bindchange="onSwitchToggle" color="#2563eb" />
</view>
```

```js
Page({
  data: { isEnabled: true },
  onSwitchToggle(e) {
    this.setData({ isEnabled: e.detail.value });
    ma.showToast({ title: e.detail.value ? 'Enabled' : 'Disabled', icon: 'none' });
  }
});
```

```css
.switch-row { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 12px; border-radius: 8px; }
.sw-title { font-size: 14px; font-weight: 500; }
```

#### 2. Checkbox Style Switch & Custom Color

```html
<view class="switch-row">
  <text class="sw-title">Checkbox Style Switch:</text>
  <switch type="checkbox" checked="true" color="#10b981" />
</view>
```

```js
Page({ data: {} });
```

```css
.switch-row { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 12px; border-radius: 8px; }
```

