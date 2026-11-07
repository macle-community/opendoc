## picker

> A scrolling selector that pops up from the bottom.

| Property       | Type          | Default Value | Required | Description                       |
|:-------------|:------------|:---------|:---|:-------------------------|
| header-text  | String      |          | No  | The title of the selector. Only available on Android             |
| cancel-text  | String      |          | No  | The text of the selector's cancel button (minimum version: 24.12.0) |
| confirm-text | String      |          | No  | The text of the selector's confirm button (minimum version: 24.12.0) |
| mode         | String      | selector | No  | Selector type                    |
| disabled     | Boolean     | false    | No  | Whether to disable                     |
| bindcancel   | Eventhandle |          | No  | Triggered when selection is cancelled                  |

### Valid values of mode

| Value         | Description     |
|:--------------|:-------|
| selector      | Normal selector  |
| multiSelector | Multi-column selector  |
| time          | Time selector  |
| date          | Date selector  |
| region        | Province/city/district selector |

In addition to the common properties above, `picker` has different properties for different modes.

### Normal selector: mode = selector

| Property Name  | Type                 | Default Value | Description                                                                   |
|:-----------|:-------------------|:----|:---------------------------------------------------------------------|
| range      | Array/object array | []  | When mode is selector or multiSelector, range is valid                           |
| range-key  | String             |     | When range is an Object Array, use range-key to specify the value of the key in the Object as the content displayed by the selector |
| value      | Number             | 0   | Indicates which item in range is selected (index starts from 0)                                          |
| bindchange | Eventhandle        |     | Triggered with a change event when value changes. event.detail = {value}                         |

### Multi-column selector: mode = multiSelector

| Property Name        | Type                 | Default Value | Description                                                                   |
|:-----------------|:-------------------|:----|:---------------------------------------------------------------------|
| range            | Array/object array | []  | When mode is selector or multiSelector, range is valid                           |
| range-key        | String             |     | When range is an Object Array, use range-key to specify the value of the key in the Object as the content displayed by the selector |
| value            | Array              | []  | Indicates which item in range is selected (index starts from 0)                                          |
| bindchange       | Eventhandle        |     | Triggered with a change event when value changes. event.detail = {value}                         |
| bindcolumnchange | Eventhandle        |     | Triggered when a column changes                                                               |

### Time selector: mode = time

| Property Name  | Type          | Default Value | Description                                           |
|:-----------|:------------|:----|:---------------------------------------------|
| value      | String      |     | Indicates the selected time, in the format "hh:mm"                           |
| start      | String      |     | Indicates the start of the valid time range, in the string format "hh:mm"                    |
| end        | String      |     | Indicates the end of the valid time range, in the string format "hh:mm"                    |
| bindchange | Eventhandle |     | Triggered with a change event when value changes. event.detail = {value} |

### Date selector: mode = date

| Property Name  | Type          | Default Value                       | Description                                           |
|:-----------|:------------|:---------------------------|:---------------------------------------------|
| value      | String      | Displays the current day if it is within the valid range; otherwise displays the end date of the valid range | Indicates the selected date, in the format "YYYY-MM-DD"                      |
| start      | String      |                            | Indicates the start of the valid date range, in the string format "YYYY-MM-DD"               |
| end        | String      |                            | Indicates the end of the valid date range, in the string format "YYYY-MM-DD"               |
| fields     | String      | day                        | Valid values: year, month, day. Indicates the granularity of the selector                  |
| bindchange | Eventhandle |                            | Triggered with a change event when value changes. event.detail = {value} |

#### Valid values of fields

| Value | Description       |
|:------|:---------|
| year  | Selector granularity is year  |
| month | Selector granularity is month |
| day   | Selector granularity is day  |

### Province/city/district selector: mode = region

| Property Name   | Type          | Default Value | Description                                                                    |
|:------------|:------------|:----|:----------------------------------------------------------------------|
| value       | Array       | []  | Indicates the selected province/city/district. The first value of each column is selected by default                                                 |
| custom-item | String      |     | Adds a custom item to the top of each column                                                     |
| bindchange  | Eventhandle |     | Triggered with a change event when value changes. event.detail = {value, code}, where the field code is the statistical division code |

### Sample Code

#### 1. Normal Selector (Single Column)

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

#### 2. Multi-Column Selector

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

#### 3. Time & Date Selector

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

