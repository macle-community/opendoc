## button

> A button is used to trigger an action

| Property               | Type      | Default Value  | Required | Description                                          |
|:-----------------------|:--------|:-------------|:---|:--------------------------------------------|
| size                   | String  | default      | No  | The size of the button                                       |
| type                   | String  | default      | No  | The style type of the button                                     |
| plain                  | Boolean | false        | No  | Whether the button is hollow, with a transparent background color                                |
| disabled               | Boolean | false        | No  | Whether to disable                                        |
| loading                | Boolean | false        | No  | Whether to show a loading icon before the name                           |
| form-type              | String  |              | No  | Used for the form component. Clicking will trigger the submit/reset event of the form component respectively |
| hover-class            | String  | button-hover | No  | The style class applied when the button is pressed. When hover-class="none", there is no pressed state effect  |
| hover-stop-propagation | Boolean | false        | No  | Specifies whether to prevent the ancestor nodes of this node from showing the pressed state                         |
| hover-start-time       | Number  | 20           | No  | How long after pressing the pressed state appears, in milliseconds                             |
| hover-stay-time        | Number  | 70           | No  | How long the pressed state remains after the finger is released, in milliseconds                           |

### Valid values of size

| Value    | Description   |
|:--------|:-----|
| default | Default size |
| mini    | Small size  |

### Valid values of type

| Value    | Description |
|:--------|:---|
| primary | Green |
| default | White |
| warn    | Red |

### Valid values of form-type

| Value   | Description   |
|:-------|:-----|
| submit | Submit form |
| reset  | Reset form |

### Sample Code

#### 1. Default Button (Normal & Disabled)

```html
<view class="btn-group">
  <button type="default" hover-start-time="200" hover-stay-time="500">Normal Default</button>
  <button type="default" disabled="true">Default Disabled</button>
</view>
```

```js
Page({ data: {} });
```

```css
.btn-group { display: flex; flex-direction: column; gap: 10px; }
```

#### 2. Warn Button (Normal & Disabled)

```html
<view class="btn-group">
  <button type="warn">Warn Action</button>
  <button type="warn" disabled="true">Warn Disabled</button>
</view>
```

```js
Page({ data: {} });
```

```css
.btn-group { display: flex; flex-direction: column; gap: 10px; }
```

#### 3. Primary Button & Form Actions

```html
<view class="btn-group">
  <button type="primary" bindtap="handlePrimaryTap">Primary Button</button>
  <button type="primary" size="mini" style="align-self: flex-start;">Mini Primary</button>
</view>
```

```js
Page({
  handlePrimaryTap() { ma.showToast({ title: 'Tapped Primary', icon: 'success' }); }
});
```

```css
.btn-group { display: flex; flex-direction: column; gap: 10px; }
```


### Bug & Tip

1. button-hover defaults to {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}
2. Currently, a `button` with `form-type` set will only be effective for the `form` in the current component. Therefore, wrapping the `button` in a custom component while the `form`
   is outside the custom component will cause this `button`'s `form-type` to become invalid.
