## progress

> Progress bar

| Property        | Type          | Default Value | Required | Description                                    |
|:----------------|:--------------|:----------|:---|:--------------------------------------|
| percent         | Number        |           | No  | Percentage 0~100                             |
| show-info       | Boolean       | false     | No  | Display the percentage on the right side of the progress bar                           |
| border-radius   | Number/String | 0         | No  | Corner radius size                                  |
| font-size       | Number/String | 16        | No  | Font size of the percentage on the right side                             |
| stroke-width    | Number/String | 6         | No  | Width of the progress bar line                               |
| activeColor     | String        | #09BB07   | No  | Color of the selected progress bar                            |
| backgroundColor | String        | #EBEBEB   | No  | Color of the unselected progress bar                            |
| active          | Boolean       | false     | No  | Progress bar animation from left to right                            |
| active-mode     | String        | backwards | No  | backwards: animation plays from the beginning; forwards: animation continues from the last ending point |
| duration        | Number        | 30        | No  | Milliseconds required for the progress to increase by 1%                          |
| bindactiveend   | Eventhandle   |           | No  | Animation completion event                                |

### Sample Code

#### 1. Basic Progress Bar with Percentage

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

#### 2. Animated & Custom Stroke/Color Progress

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

