## button

> 按钮用于触发一个操作

| 属性                     | 类型      | 默认值          | 必填 | 说明                                          |
|:-----------------------|:--------|:-------------|:---|:--------------------------------------------|
| size                   | String  | default      | 否  | 按钮的大小                                       |
| type                   | String  | default      | 否  | 按钮的样式类型                                     |
| plain                  | Boolean | false        | 否  | 按钮是否镂空，背景色透明                                |
| disabled               | Boolean | false        | 否  | 是否禁用                                        |
| loading                | Boolean | false        | 否  | 名称前是否带 loading 图标                           |
| form-type              | String  |              | 否  | 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 |
| hover-class            | String  | button-hover | 否  | 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果  |
| hover-stop-propagation | Boolean | false        | 否  | 指定是否阻止本节点的祖先节点出现点击态                         |
| hover-start-time       | Number  | 20           | 否  | 按住后多久出现点击态，单位毫秒                             |
| hover-stay-time        | Number  | 70           | 否  | 手指松开后点击态保留时间，单位毫秒                           |

### size 的合法值

| 值       | 说明   |
|:--------|:-----|
| default | 默认大小 |
| mini    | 小尺寸  |

### type 的合法值

| 值       | 说明 |
|:--------|:---|
| primary | 绿色 |
| default | 白色 |
| warn    | 红色 |

### form-type 的合法值

| 值      | 说明   |
|:-------|:-----|
| submit | 提交表单 |
| reset  | 重置表单 |

### 示例代码

#### 1. 默认按钮（普通与禁用）

```html
<view class="btn-group">
  <button type="default" hover-start-time="200" hover-stay-time="500">Normal Default</button>
  <button type="default" disabled="true">Default Disabled</button>
</view>
```

```js
Page({ data: {} });
```

```css
.btn-group { display: flex; flex-direction: column; gap: 10px; }
```

#### 2. 警告按钮（普通与禁用）

```html
<view class="btn-group">
  <button type="warn">Warn Action</button>
  <button type="warn" disabled="true">Warn Disabled</button>
</view>
```

```js
Page({ data: {} });
```

```css
.btn-group { display: flex; flex-direction: column; gap: 10px; }
```

#### 3. 主要按钮与表单操作

```html
<view class="btn-group">
  <button type="primary" bindtap="handlePrimaryTap">Primary Button</button>
  <button type="primary" size="mini" style="align-self: flex-start;">Mini Primary</button>
</view>
```

```js
Page({
  handlePrimaryTap() { ma.showToast({ title: 'Tapped Primary', icon: 'success' }); }
});
```

```css
.btn-group { display: flex; flex-direction: column; gap: 10px; }
```


### Bug & Tip

1. button-hover 默认为{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}
2. 目前设置了 `form-type` 的 `button` 只会对当前组件中的 `form` 有效。因而，将 `button`封装在自定义组件中，而 `form`
   在自定义组件外，将会使这个 `button` 的 `form-type` 失效。
