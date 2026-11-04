## radio

> Single-choice item.

| Property   | Type      | Default Value | Required | Description                                                                                                                                                                    |
|:---------|:--------|:--------|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value    | String  |         | No  | The [radio](MACLE_COMPONENT_RADIO) identifier. When this [radio](MACLE_COMPONENT_RADIO) is selected, the change event of [radio-group](MACLE_COMPONENT_RADIO_GROUP) will carry the value of [radio](MACLE_COMPONENT_RADIO) |
| checked  | Boolean | false   | No  | Whether currently selected                                                                                                                                                                |
| disabled | Boolean | false   | No  | Whether to disable                                                                                                                                                                  |
| color    | String  | #09BB07 | No  | The color of the radio, same as the CSS color                                                                                                                                               |

### Sample Code

```html

<view class='page-section page-section-gap'>
  <view class='page-section-title'>Default style</view>
  <label class='radio'>
    <radio class='radio1' value='r1' checked='true' />
    Selected
  </label>
  <label class='radio'>
    <radio class='radio2' value='r2' />
    Not selected
  </label>
  <label class='radio'>
    <radio class='radio3' value='r3' disabled />
    Disabled
  </label>
  <label class='radio'>
    <radio class='radio4' value='r4' disabled='123' checked='456' color='red123' />
    Invalid attribute
  </label>
</view>
```
