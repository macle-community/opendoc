## navigator

> Page link

| Property               | Type      | Default Value     | Required | Description                                       |
|:-----------------------|:--------|:----------------|:---|:-----------------------------------------|
| url                    | String  |                 | No  | Jump link within the current mini program                              |
| open-type              | String  | navigate        | No  | Jump method                                     |
| delta                  | Number  | 1               | No  | Effective when open-type is 'navigateBack'. Indicates the number of layers to go back |
| hover-class            | String  | navigator-hover | No  | Specifies the style class on click. When hover-class="none", there is no pressed state effect  |
| hover-stop-propagation | Boolean | false           | No  | Specifies whether to prevent the ancestor nodes of this node from showing the pressed state                      |
| hover-start-time       | Number  | 50              | No  | How long after pressing the pressed state appears, in milliseconds                          |
| hover-stay-time        | Number  | 600             | No  | How long the pressed state remains after the finger is released, in milliseconds                        |

### Valid values of open-type

| Value        | Description                                              |
|:-------------|:------------------------------------------------|
| navigate     | Corresponds to the function of ma.navigateTo or ma.navigateToMiniProgram |
| redirect     | Corresponds to the function of ma.redirectTo                            |
| switchTab    | Corresponds to the function of ma.switchTab                             |
| reLaunch     | Corresponds to the function of ma.reLaunch                              |
| navigateBack | Corresponds to the function of ma.navigateBack                          |

### Sample Code

#### 1. Page Navigation (open-type="navigate")

```html
<view class="nav-container">
  <navigator url="/pages/button/index" open-type="navigate" hover-class="nav-hover" class="nav-btn">
    👉 Navigate to Button Component Page
  </navigator>
  <navigator url="/pages/input/index" open-type="navigate" hover-class="nav-hover" class="nav-btn">
    👉 Navigate to Input Component Page
  </navigator>
</view>
```

```js
Page({ data: {} });
```

```css
.nav-container { display: flex; flex-direction: column; gap: 10px; }
.nav-btn { background: #fff; border: 1px solid #cbd5e1; padding: 12px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #2563eb; }
.nav-hover { background: #f1f5f9; }
```

#### 2. Page Redirect (open-type="redirect")

```html
<navigator url="/pages/view/index" open-type="redirect" class="nav-btn">
  🔄 Redirect to View Page (Close Current)
</navigator>
```

```js
Page({ data: {} });
```

```css
.nav-btn { background: #fff; border: 1px solid #cbd5e1; padding: 12px 14px; border-radius: 8px; font-size: 14px; color: #2563eb; }
```


### Bug & Tip

1.`navigator-hover` defaults to `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, the background color of `navigator`'s child nodes should be transparent
