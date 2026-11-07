## checkbox

> 多选项目。

| 属性       | 类型      | 默认值     | 必填 | 说明                                                                |
|:---------|:--------|:--------|:---|:------------------------------------------------------------------|
| value    | String  |         | 否  | checkbox 标识，选中时触发 checkbox-group 的 change 事件，并携带 checkbox 的 value |
| disabled | Boolean | false   | 否  | 是否禁用                                                              |
| checked  | Boolean | false   | 否  | 当前是否选中，可用来设置默认选中                                                  |
| color    | String  | #09BB07 | 否  | checkbox 的颜色，同 css 的 color                                        |

### 示例代码

#### 1. 单个多选框与自定义颜色

```html
<view class="checkbox-demo">
  <label class="cb-row">
    <checkbox value="agree" checked="{{isAgree}}" bindchange="onAgreeChange" color="#2563eb" />
    <text class="cb-label">I agree to the Terms of Service</text>
  </label>
</view>
```

```js
Page({
  data: { isAgree: true },
  onAgreeChange(e) {
    this.setData({ isAgree: !this.data.isAgree });
  }
});
```

```css
.cb-row { display: flex; align-items: center; gap: 8px; font-size: 14px; }
```

