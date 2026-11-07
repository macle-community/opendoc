## page-meta

> 页面属性配置节点，用于指定页面的一些属性、监听页面事件。

> 通过这个节点可以获得类似于调用 [`ma.setBackgroundTextStyle`](SET_BACKGROUND_TEXT) [`ma.setBackgroundColor`](SET_BACKGROUND_COLOR)
等接口调用的效果。

### 属性说明

| 属性             | 默认值 | 类型     | 必填 | 说明                                                       |
|----------------|-----|--------|----|----------------------------------------------------------|
| root-font-size | ""  | String | 否  | 页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 `1rem` 等于这个字体大小。 |

### 示例代码

#### 1. 动态页面属性配置

```html
<page-meta background-color="#f8fafc" page-style="padding: 12px;" />
<view class="meta-content">
  <text class="meta-title">Page Meta Defined</text>
  <text class="meta-desc">Configures root page styling dynamically.</text>
</view>
```

```js
Page({ data: {} });
```

```css
.meta-content { background: #fff; padding: 16px; border-radius: 8px; }
.meta-title { font-weight: bold; font-size: 15px; color: #1e293b; }
.meta-desc { font-size: 13px; color: #64748b; margin-top: 4px; display: block; }
```

