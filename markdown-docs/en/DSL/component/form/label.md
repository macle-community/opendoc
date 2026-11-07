## label

> Used to improve the usability of form components. Use the for attribute to find the corresponding id, or place the control under this tag. When clicked, the corresponding control will be triggered. The
> for attribute takes precedence over internal controls. When there are multiple internal controls, the first control is triggered by default. The controls that can currently be bound are: button, checkbox, radio, switch.

| Property | Type     | Default Value | Required | Description       |
|:----|:-------|:----|:---|:---------|
| for | String |     | No  | The id of the bound control |

### Sample Code

#### 1. Label with for Attribute Binding

```html
<view class="label-demo">
  <checkbox id="agree-cb" color="#2563eb" />
  <label for="agree-cb" class="bound-label">Tap this label text to toggle checkbox</label>
</view>
```

```js
Page({ data: {} });
```

```css
.label-demo { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.bound-label { color: #1e293b; cursor: pointer; }
```

#### 2. Label Encapsulating Controls

```html
<label class="enclosing-label">
  <radio value="r1" checked="true" color="#10b981" />
  <text style="margin-left: 8px; font-size: 14px;">Enclosed Radio inside Label</text>
</label>
```

```js
Page({ data: {} });
```

```css
.enclosing-label { display: flex; align-items: center; padding: 10px; background: #fff; border-radius: 6px; }
```

