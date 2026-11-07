## radio

> Single-choice item.

| Property   | Type      | Default Value | Required | Description                                                                                                                                                                    |
|:---------|:--------|:--------|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value    | String  |         | No  | The [radio](MACLE_COMPONENT_RADIO) identifier. When this [radio](MACLE_COMPONENT_RADIO) is selected, the change event of [radio-group](MACLE_COMPONENT_RADIO_GROUP) will carry the value of [radio](MACLE_COMPONENT_RADIO) |
| checked  | Boolean | false   | No  | Whether currently selected                                                                                                                                                                |
| disabled | Boolean | false   | No  | Whether to disable                                                                                                                                                                  |
| color    | String  | #09BB07 | No  | The color of the radio, same as the CSS color                                                                                                                                               |

### Sample Code

#### 1. Single Radio Button

```html
<view class="radio-row">
  <radio value="single" checked="true" color="#2563eb" />
  <text style="margin-left: 8px; font-size: 14px;">Standalone Checked Radio</text>
</view>
```

```js
Page({ data: {} });
```

```css
.radio-row { display: flex; align-items: center; font-size: 14px; }
```

