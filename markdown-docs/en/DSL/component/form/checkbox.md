## checkbox

> Multiple-choice item.

| Property   | Type      | Default Value | Required | Description                                                                |
|:---------|:--------|:--------|:---|:------------------------------------------------------------------|
| value    | String  |         | No  | The checkbox identifier. When selected, it triggers the change event of the checkbox-group and carries the checkbox's value |
| disabled | Boolean | false   | No  | Whether to disable                                                              |
| checked  | Boolean | false   | No  | Whether currently selected. Can be used to set the default selection                                                  |
| color    | String  | #09BB07 | No  | The color of the checkbox, same as the CSS color                                        |

### Sample Code

#### 1. Single Checkbox with Checked State & Color

```html
<view class="checkbox-demo">
  <label class="cb-row">
    <checkbox value="agree" checked="{{isAgree}}" bindchange="onAgreeChange" color="#2563eb" />
    <text class="cb-label">I agree to the Terms of Service</text>
  </label>
</view>
```

```js
Page({
  data: { isAgree: true },
  onAgreeChange(e) {
    this.setData({ isAgree: !this.data.isAgree });
  }
});
```

```css
.cb-row { display: flex; align-items: center; gap: 8px; font-size: 14px; }
```

