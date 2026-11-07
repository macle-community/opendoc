## picker

> 从底部弹起的滚动选择器。

| 属性           | 类型          | 默认值      | 必填 | 说明                       |
|:-------------|:------------|:---------|:---|:-------------------------|
| header-text  | String      |          | 否  | 选择器的标题，仅安卓可用             |
| cancel-text  | String      |          | 否  | 选择器的取消按钮文字（最低版本： 24.12.0） |
| confirm-text | String      |          | 否  | 选择器的确认按钮文字（最低版本： 24.12.0） |
| mode         | String      | selector | 否  | 选择器类型                    |
| disabled     | Boolean     | false    | 否  | 是否禁用                     |
| bindcancel   | Eventhandle |          | 否  | 取消选择时触发                  |

### mode 的合法值

| 值             | 说明     |
|:--------------|:-------|
| selector      | 普通选择器  |
| multiSelector | 多列选择器  |
| time          | 时间选择器  |
| date          | 日期选择器  |
| region        | 省市区选择器 |

除了上述通用的属性，对于不同的 mode，`picker`拥有不同的属性。

### 普通选择器：mode = selector

| 属性名        | 类型                 | 默认值 | 说明                                                                   |
|:-----------|:-------------------|:----|:---------------------------------------------------------------------|
| range      | Array/object array | []  | mode 为 selector 或 multiSelector 时，range 有效                           |
| range-key  | String             |     | 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 |
| value      | Number             | 0   | 表示选择了 range 中的第几个（下标从 0 开始）                                          |
| bindchange | Eventhandle        |     | value 改变时触发 change 事件，event.detail = {value}                         |

### 多列选择器：mode = multiSelector

| 属性名              | 类型                 | 默认值 | 说明                                                                   |
|:-----------------|:-------------------|:----|:---------------------------------------------------------------------|
| range            | Array/object array | []  | mode 为 selector 或 multiSelector 时，range 有效                           |
| range-key        | String             |     | 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 |
| value            | Array              | []  | 表示选择了 range 中的第几个（下标从 0 开始）                                          |
| bindchange       | Eventhandle        |     | value 改变时触发 change 事件，event.detail = {value}                         |
| bindcolumnchange | Eventhandle        |     | 列改变时触发                                                               |

### 时间选择器：mode = time

| 属性名        | 类型          | 默认值 | 说明                                           |
|:-----------|:------------|:----|:---------------------------------------------|
| value      | String      |     | 表示选中的时间，格式为"hh:mm"                           |
| start      | String      |     | 表示有效时间范围的开始，字符串格式为"hh:mm"                    |
| end        | String      |     | 表示有效时间范围的结束，字符串格式为"hh:mm"                    |
| bindchange | Eventhandle |     | value 改变时触发 change 事件，event.detail = {value} |

### 日期选择器：mode = date

| 属性名        | 类型          | 默认值                        | 说明                                           |
|:-----------|:------------|:---------------------------|:---------------------------------------------|
| value      | String      | 当天在有效范围内显示当天，否则显示为有效范围结束日期 | 表示选中的日期，格式为"YYYY-MM-DD"                      |
| start      | String      |                            | 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"               |
| end        | String      |                            | 表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"               |
| fields     | String      | day                        | 有效值 year,month,day，表示选择器的粒度                  |
| bindchange | Eventhandle |                            | value 改变时触发 change 事件，event.detail = {value} |

#### fields 有效值

| 值     | 说明       |
|:------|:---------|
| year  | 选择器粒度为年  |
| month | 选择器粒度为月份 |
| day   | 选择器粒度为天  |

### 省市区选择器：mode = region

| 属性名         | 类型          | 默认值 | 说明                                                                    |
|:------------|:------------|:----|:----------------------------------------------------------------------|
| value       | Array       | []  | 表示选中的省市区，默认选中每一列的第一个值                                                 |
| custom-item | String      |     | 可为每一列的顶部添加一个自定义的项                                                     |
| bindchange  | Eventhandle |     | value 改变时触发 change 事件，event.detail = {value, code}，其中字段 code 是统计用区划代码 |

### 示例代码

#### 1. 普通单列选择器

```html
<picker mode="selector" range="{{fruits}}" value="{{fruitIdx}}" bindchange="onFruitChange">
  <view class="picker-display">Selected Fruit: <text class="highlight">{{fruits[fruitIdx]}}</text></view>
</picker>
```

```js
Page({
  data: { fruits: ['Apple', 'Banana', 'Orange', 'Strawberry'], fruitIdx: 0 },
  onFruitChange(e) { this.setData({ fruitIdx: e.detail.value }); }
});
```

```css
.picker-display { background: #fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 14px; }
.highlight { color: #2563eb; font-weight: bold; margin-left: 6px; }
```

#### 2. 多列选择器

```html
<picker mode="multiSelector" range="{{multiRange}}" value="{{multiIdx}}" bindchange="onMultiChange">
  <view class="picker-display">Region: <text class="highlight">{{multiRange[0][multiIdx[0]]}} - {{multiRange[1][multiIdx[1]]}}</text></view>
</picker>
```

```js
Page({
  data: {
    multiRange: [['Asia', 'Europe', 'Americas'], ['China', 'Japan', 'Korea']],
    multiIdx: [0, 0]
  },
  onMultiChange(e) { this.setData({ multiIdx: e.detail.value }); }
});
```

```css
.picker-display { background: #fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 14px; }
.highlight { color: #2563eb; font-weight: bold; }
```

#### 3. 时间与日期选择器

```html
<picker mode="date" value="{{selectedDate}}" start="2020-01-01" end="2030-12-31" bindchange="onDateChange">
  <view class="picker-display">Date: <text class="highlight">{{selectedDate}}</text></view>
</picker>
```

```js
Page({
  data: { selectedDate: '2026-11-07' },
  onDateChange(e) { this.setData({ selectedDate: e.detail.value }); }
});
```

```css
.picker-display { background: #fff; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 14px; }
.highlight { color: #2563eb; font-weight: bold; }
```

