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

#### 1. 基础进度条与百分比显示

```html
<view class="progress-col">
  <progress percent="30" show-info="true" stroke-width="4" />
  <progress percent="65" show-info="true" stroke-width="6" active-color="#3b82f6" />
  <progress percent="90" show-info="true" stroke-width="8" active-color="#10b981" />
</view>
```

```js
Page({ data: {} });
```

```css
.progress-col { display: flex; flex-direction: column; gap: 16px; }
```

#### 2. 动画效果与自定义颜色尺寸

```html
<view class="progress-col">
  <progress percent="{{animPercent}}" show-info="true" active="true" active-mode="forwards" stroke-width="8" border-radius="4" active-color="#8b5cf6" />
  <button size="mini" type="default" bindtap="increaseProgress" style="align-self: flex-start; margin-top: 8px;">+20% Progress</button>
</view>
```

```js
Page({
  data: { animPercent: 40 },
  increaseProgress() {
    let next = this.data.animPercent + 20;
    if (next > 100) next = 20;
    this.setData({ animPercent: next });
  }
});
```

```css
.progress-col { display: flex; flex-direction: column; gap: 10px; }
```

