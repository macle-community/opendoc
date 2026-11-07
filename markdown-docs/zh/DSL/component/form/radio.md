## radio

> 单选项目。

| 属性       | 类型      | 默认值     | 必填 | 说明                                                                                                                                                                    |
|:---------|:--------|:--------|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value    | String  |         | 否  | [radio](MACLE_COMPONENT_RADIO) 标识。当该[radio](MACLE_COMPONENT_RADIO) 选中时，[radio-group](MACLE_COMPONENT_RADIO_GROUP) 的 change 事件会携带[radio](MACLE_COMPONENT_RADIO)的 value |
| checked  | Boolean | false   | 否  | 当前是否选中                                                                                                                                                                |
| disabled | Boolean | false   | 否  | 是否禁用                                                                                                                                                                  |
| color    | String  | #09BB07 | 否  | radio 的颜色，同 css 的 color                                                                                                                                               |

### 示例代码

#### 1. 单选框按钮

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

