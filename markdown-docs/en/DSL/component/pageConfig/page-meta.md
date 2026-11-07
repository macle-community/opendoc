## page-meta

> A page property configuration node, used to specify some properties of the page and listen to page events.

> Through this node, you can achieve effects similar to calling [`ma.setBackgroundTextStyle`](SET_BACKGROUND_TEXT) [`ma.setBackgroundColor`](SET_BACKGROUND_COLOR)
and other interfaces.

### Property description

| Property         | Default Value | Type     | Required | Description                                                       |
|----------------|-----|--------|----|----------------------------------------------------------|
| root-font-size | ""  | String | No  | The root font size of the page. All rem units in the page will use this font size as the reference value, i.e. `1rem` equals this font size. |

### Sample Code

#### 1. Dynamic Page Meta Configuration

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

