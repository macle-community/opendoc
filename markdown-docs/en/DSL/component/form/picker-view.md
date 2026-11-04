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

```html

<view>
    <view>Scrolling selector embedded in the page</view>
    <view>
        <view>
            <picker-view style="height: 500px;width: 100%;text-align:center;">
                <picker-view-column>
                    <view>2013</view>
                    <view>2014</view>
                    <view>2015</view>
                    <view>2016</view>
                    <view>2017</view>
                    <view>2018</view>
                    <view>2019</view>
                    <view>2020</view>
                </picker-view-column>
                <picker-view-column>
                    <view>Q1</view>
                    <view>Q2</view>
                    <view>Q3</view>
                    <view>Q4</view>
                </picker-view-column>
            </picker-view>
        </view>
    </view>
</view>

```

```js

Page({
  data: {},
  onChange(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value,
    });
  },
});

```
