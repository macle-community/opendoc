## switch

> 开关选择器。

| 属性         | 类型          | 默认值     | 必填 | 说明                                            |
|:-----------|:------------|:--------|:---|:----------------------------------------------|
| checked    | Boolean     | false   | 否  | 是否选中                                          |
| disabled   | Boolean     | false   | 否  | 是否禁用                                          |
| type       | String      | switch  | 否  | 样式，有效值：switch, checkbox                       |
| color      | String      | #04BE02 | 否  | switch 的颜色，同 css 的 color                      |
| bindchange | Eventhandle |         | 否  | checked 改变时触发 change 事件，event.detail={ value} |

### 示例代码

#### 1. 开关选择器与状态变化事件

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

#### 2. 方形样式开关与自定义颜色

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

