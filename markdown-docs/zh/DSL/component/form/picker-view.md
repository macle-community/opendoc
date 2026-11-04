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

```html

<view>
    <view>嵌入页面的滚动选择器</view>
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
