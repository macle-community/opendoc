## slider

> Sliding selector.

| Property          | Type          | Default Value | Required | Description                                  |
|:----------------|:------------|:--------|:---|:------------------------------------|
| min             | Number      | 0       | No  | Minimum value                                 |
| max             | Number      | 100     | No  | Maximum value                                 |
| step            | Number      | 1       | No  | Step size. Must be greater than 0 and divisible by (max - min)       |
| disabled        | Boolean     | false   | No  | Whether to disable                                |
| value           | Number      | 0       | No  | Current value                                |
| activeColor     | String      | #1aad19 | No  | Color of the selected part                              |
| backgroundColor | String      | #e9e9e9 | No  | Color of the background bar                              |
| block-size      | Number      | 28      | No  | Size of the slider block. Value range is 12 - 28                 |
| block-color     | String      | #ffffff | No  | Color of the slider block                               |
| show-value      | Boolean     | false   | No  | Whether to display the current value                        |
| bindchange      | Eventhandle |         | No  | Event triggered after a drag is completed. event.detail = {value} |
| bindchanging    | Eventhandle |         | No  | Event triggered during dragging. event.detail = {value}   |

### Sample Code

#### 1. Slider with Min, Max & Show-Value

```html
<view class="slider-box">
  <slider min="0" max="100" value="{{volume}}" show-value="true" bindchange="onSliderChange" active-color="#2563eb" />
  <text class="slider-text">Volume: {{volume}}%</text>
</view>
```

```js
Page({
  data: { volume: 50 },
  onSliderChange(e) { this.setData({ volume: e.detail.value }); }
});
```

```css
.slider-box { background: #fff; padding: 12px; border-radius: 8px; }
.slider-text { font-size: 12px; color: #64748b; margin-top: 4px; display: block; }
```

#### 2. Step Slider with Custom Colors

```html
<view class="slider-box">
  <slider step="10" value="30" show-value="true" active-color="#10b981" block-color="#059669" block-size="20" />
</view>
```

```js
Page({ data: {} });
```

```css
.slider-box { background: #fff; padding: 12px; border-radius: 8px; }
```

