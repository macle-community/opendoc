## slider

> 滑动选择器。

| 属性              | 类型          | 默认值     | 必填 | 说明                                  |
|:----------------|:------------|:--------|:---|:------------------------------------|
| min             | Number      | 0       | 否  | 最小值                                 |
| max             | Number      | 100     | 否  | 最大值                                 |
| step            | Number      | 1       | 否  | 步长，取值必须大于 0，并且可被(max - min)整除       |
| disabled        | Boolean     | false   | 否  | 是否禁用                                |
| value           | Number      | 0       | 否  | 当前取值                                |
| activeColor     | String      | #1aad19 | 否  | 已选择的颜色                              |
| backgroundColor | String      | #e9e9e9 | 否  | 背景条的颜色                              |
| block-size      | Number      | 28      | 否  | 滑块的大小，取值范围为 12 - 28                 |
| block-color     | String      | #ffffff | 否  | 滑块的颜色                               |
| show-value      | Boolean     | false   | 否  | 是否显示当前 value                        |
| bindchange      | Eventhandle |         | 否  | 完成一次拖动后触发的事件，event.detail = {value} |
| bindchanging    | Eventhandle |         | 否  | 拖动过程中触发的事件，event.detail = {value}   |

### 示例代码

#### 1. 滑块选择器与数值显示

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

#### 2. 步长滑块与自定义主题色

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

