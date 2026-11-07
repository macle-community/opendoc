## picker-view

> 嵌入页面的滚动选择器。其中只可放置 picker-view-column 组件，其它节点不会显示。

| 属性              | 类型               | 默认值 | 必填 | 说明                                                                                                          |
|:----------------|:-----------------|:----|:---|:------------------------------------------------------------------------------------------------------------|
| value           | Array.\<number\> |     | 否  | 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。        |
| indicator-style | String           |     | 否  | 设置选择器中间选中框的样式                                                                                               |
| indicator-class | String           |     | 否  | 设置选择器中间选中框的类名                                                                                               |
| mask-style      | String           |     | 否  | 设置蒙层的样式                                                                                                     |
| mask-class      | String           |     | 否  | 设置蒙层的类名                                                                                                     |
| bindchange      | Eventhandle      |     | 否  | 滚动选择时触发 change 事件，event.detail = {value}；value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） |
| bindpickstart   | Eventhandle      |     | 否  | 当滚动选择开始时候触发事件                                                                                               |
| bindpickend     | Eventhandle      |     | 否  | 当滚动选择结束时候触发事件                                                                                               |

### 示例代码

#### 1. 嵌入页面的多列滚动选择视图

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

