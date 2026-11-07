## icon

> 图标。组件属性的长度单位默认为 px

| 属性    | 类型            | 默认值 | 必填 | 说明                                                                                                        |
|:------|:--------------|:----|:---|:----------------------------------------------------------------------------------------------------------|
| type  | String        |     | 是  | icon 的类型，有效值：success, success_no_circle, info, info_circle,warn, waiting, cancel, download, search,circle |
| size  | Number/String | 23  | 否  | icon 的大小，单位默认为 px。                                                                                        |
| color | String        |     | 否  | icon 的颜色，同 css 的 color                                                                                    |

### 示例代码

#### 1. 常用系统图标

```html
<view class="icon-grid">
  <view class="icon-item"><icon type="success" size="32" /><text>success</text></view>
  <view class="icon-item"><icon type="info" size="32" /><text>info</text></view>
  <view class="icon-item"><icon type="warn" size="32" /><text>warn</text></view>
  <view class="icon-item"><icon type="waiting" size="32" /><text>waiting</text></view>
  <view class="icon-item"><icon type="cancel" size="32" /><text>cancel</text></view>
  <view class="icon-item"><icon type="search" size="32" /><text>search</text></view>
</view>
```

```js
Page({ data: {} });
```

```css
.icon-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.icon-item { width: 70px; display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 11px; color: #64748b; }
```

#### 2. 自定义图标大小与颜色

```html
<view class="demo-row" style="display: flex; align-items: center; gap: 16px;">
  <icon type="success" size="24" color="#10b981" />
  <icon type="success" size="36" color="#3b82f6" />
  <icon type="success" size="48" color="#f59e0b" />
  <icon type="success" size="60" color="#ef4444" />
</view>
```

```js
Page({ data: {} });
```

```css
.demo-row { margin-top: 8px; }
```

