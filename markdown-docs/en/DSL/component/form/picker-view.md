## picker-view

> A scrolling selector embedded in the page. Only picker-view-column components can be placed inside it; other nodes will not be displayed.

| Property        | Type               | Default Value | Required | Description                                                                                                          |
|:----------------|:-----------------|:----|:---|:------------------------------------------------------------------------------------------------------------|
| value           | Array.\<number\> |     | No  | The numbers in the array indicate, in order, which item is selected in the picker-view-column inside the picker-view (index starts from 0). When the number is greater than the length of selectable items in the picker-view-column, the last item is selected.        |
| indicator-style | String           |     | No  | Sets the style of the selection box in the middle of the selector                                                                                               |
| indicator-class | String           |     | No  | Sets the class name of the selection box in the middle of the selector                                                                                               |
| mask-style      | String           |     | No  | Sets the style of the mask layer                                                                                                     |
| mask-class      | String           |     | No  | Sets the class name of the mask layer                                                                                                     |
| bindchange      | Eventhandle      |     | No  | Triggered with a change event when scrolling selection occurs. event.detail = {value}; value is an array indicating which item is currently selected in the picker-view-column inside the picker-view (index starts from 0) |
| bindpickstart   | Eventhandle      |     | No  | Triggered when scrolling selection starts                                                                                               |
| bindpickend     | Eventhandle      |     | No  | Triggered when scrolling selection ends                                                                                               |

### Sample Code

#### 1. Embedded Multi-Column Picker View

```html
<view>
  <view class="preview-date">{{year}}年 {{month}}月 {{day}}日</view>
  <picker-view indicator-style="height: 50px;" style="width: 100%; height: 200px; background: #fff; border-radius: 8px;" value="{{val}}" bindchange="onPickerViewChange">
    <picker-view-column>
      <view ma:for="{{years}}" ma:key="{{item}}" style="line-height: 50px; text-align: center;">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view ma:for="{{months}}" ma:key="{{item}}" style="line-height: 50px; text-align: center;">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view ma:for="{{days}}" ma:key="{{item}}" style="line-height: 50px; text-align: center;">{{item}}日</view>
    </picker-view-column>
  </picker-view>
</view>
```

```js
Page({
  data: {
    years: [2024, 2025, 2026, 2027],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30],
    val: [2, 10, 6],
    year: 2026, month: 11, day: 7
  },
  onPickerViewChange(e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    });
  }
});
```

```css
.preview-date { text-align: center; font-size: 16px; font-weight: bold; color: #2563eb; margin-bottom: 12px; }
```

