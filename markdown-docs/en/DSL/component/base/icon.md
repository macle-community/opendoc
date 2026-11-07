## icon

> Icon. The length unit for component properties defaults to px

| Property | Type          | Default Value | Required | Description                                                                                                        |
|:------|:--------------|:----|:---|:----------------------------------------------------------------------------------------------------------|
| type  | String        |     | Yes  | The type of icon. Valid values: success, success_no_circle, info, info_circle,warn, waiting, cancel, download, search,circle |
| size  | Number/String | 23  | No  | The size of the icon. The unit defaults to px.                                                                                        |
| color | String        |     | No  | The color of the icon, same as the CSS color                                                                                    |

### Sample Code

#### 1. Standard System Icons

```html
<view class="icon-grid">
  <view class="icon-item"><icon type="success" size="32" /><text>success</text></view>
  <view class="icon-item"><icon type="info" size="32" /><text>info</text></view>
  <view class="icon-item"><icon type="warn" size="32" /><text>warn</text></view>
  <view class="icon-item"><icon type="waiting" size="32" /><text>waiting</text></view>
  <view class="icon-item"><icon type="cancel" size="32" /><text>cancel</text></view>
  <view class="icon-item"><icon type="search" size="32" /><text>search</text></view>
</view>
```

```js
Page({ data: {} });
```

```css
.icon-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.icon-item { width: 70px; display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 11px; color: #64748b; }
```

#### 2. Custom Icon Sizes and Colors

```html
<view class="demo-row" style="display: flex; align-items: center; gap: 16px;">
  <icon type="success" size="24" color="#10b981" />
  <icon type="success" size="36" color="#3b82f6" />
  <icon type="success" size="48" color="#f59e0b" />
  <icon type="success" size="60" color="#ef4444" />
</view>
```

```js
Page({ data: {} });
```

```css
.demo-row { margin-top: 8px; }
```

