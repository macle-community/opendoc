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

```html

<view>
  <progress fontSize="20" percent="20" show-info strokeWidth="2" />
</view>
```
