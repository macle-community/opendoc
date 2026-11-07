## label

> 用来改进表单组件的可用性。 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for
> 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch。

| 属性  | 类型     | 默认值 | 必填 | 说明       |
|:----|:-------|:----|:---|:---------|
| for | String |     | 否  | 绑定控件的 id |

### 示例代码

#### 1. 绑定组件 ID 的标签

```html
<view class="label-demo">
  <checkbox id="agree-cb" color="#2563eb" />
  <label for="agree-cb" class="bound-label">Tap this label text to toggle checkbox</label>
</view>
```

```js
Page({ data: {} });
```

```css
.label-demo { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.bound-label { color: #1e293b; cursor: pointer; }
```

#### 2. 包裹表单控件扩大点击区域

```html
<label class="enclosing-label">
  <radio value="r1" checked="true" color="#10b981" />
  <text style="margin-left: 8px; font-size: 14px;">Enclosed Radio inside Label</text>
</label>
```

```js
Page({ data: {} });
```

```css
.enclosing-label { display: flex; align-items: center; padding: 10px; background: #fff; border-radius: 6px; }
```

