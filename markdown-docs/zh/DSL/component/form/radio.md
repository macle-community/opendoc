## radio

> 单选项目。

| 属性       | 类型      | 默认值     | 必填 | 说明                                                                                                                                                                    |
|:---------|:--------|:--------|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value    | String  |         | 否  | [radio](MACLE_COMPONENT_RADIO) 标识。当该[radio](MACLE_COMPONENT_RADIO) 选中时，[radio-group](MACLE_COMPONENT_RADIO_GROUP) 的 change 事件会携带[radio](MACLE_COMPONENT_RADIO)的 value |
| checked  | Boolean | false   | 否  | 当前是否选中                                                                                                                                                                |
| disabled | Boolean | false   | 否  | 是否禁用                                                                                                                                                                  |
| color    | String  | #09BB07 | 否  | radio 的颜色，同 css 的 color                                                                                                                                               |

### 示例代码

```html

<view class='page-section page-section-gap'>
  <view class='page-section-title'>默认样式</view>
  <label class='radio'>
    <radio class='radio1' value='r1' checked='true' />
    选中
  </label>
  <label class='radio'>
    <radio class='radio2' value='r2' />
    未选中
  </label>
  <label class='radio'>
    <radio class='radio3' value='r3' disabled />
    被禁用
  </label>
  <label class='radio'>
    <radio class='radio4' value='r4' disabled='123' checked='456' color='red123' />
    非法属性
  </label>
</view>
```
