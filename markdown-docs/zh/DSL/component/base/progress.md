## progress

> 进度条

| 属性              | 类型            | 默认值       | 必填 | 说明                                    |
|:----------------|:--------------|:----------|:---|:--------------------------------------|
| percent         | Number        |           | 否  | 百分比 0~100                             |
| show-info       | Boolean       | false     | 否  | 在进度条右侧显示百分比                           |
| border-radius   | Number/String | 0         | 否  | 圆角大小                                  |
| font-size       | Number/String | 16        | 否  | 右侧百分比字体大小                             |
| stroke-width    | Number/String | 6         | 否  | 进度条线的宽度                               |
| activeColor     | String        | #09BB07   | 否  | 已选择的进度条的颜色                            |
| backgroundColor | String        | #EBEBEB   | 否  | 未选择的进度条的颜色                            |
| active          | Boolean       | false     | 否  | 进度条从左往右的动画                            |
| active-mode     | String        | backwards | 否  | backwards: 动画从头播；forwards：动画从上次结束点接着播 |
| duration        | Number        | 30        | 否  | 进度增加 1%所需毫秒数                          |
| bindactiveend   | Eventhandle   |           | 否  | 动画完成事件                                |

### 示例代码

```html

<view>
  <progress fontSize="20" percent="20" show-info strokeWidth="2" />
</view>
```
