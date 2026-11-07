## navigator

> 页面链接

| 属性                     | 类型      | 默认值             | 必填 | 说明                                       |
|:-----------------------|:--------|:----------------|:---|:-----------------------------------------|
| url                    | String  |                 | 否  | 当前小程序内的跳转链接                              |
| open-type              | String  | navigate        | 否  | 跳转方式                                     |
| delta                  | Number  | 1               | 否  | 当 open-type 为 'navigateBack' 时有效，表示回退的层数 |
| hover-class            | String  | navigator-hover | 否  | 指定点击时的样式类，当 hover-class="none"时，没有点击态效果  |
| hover-stop-propagation | Boolean | false           | 否  | 指定是否阻止本节点的祖先节点出现点击态                      |
| hover-start-time       | Number  | 50              | 否  | 按住后多久出现点击态，单位毫秒                          |
| hover-stay-time        | Number  | 600             | 否  | 手指松开后点击态保留时间，单位毫秒                        |

### open-type 的合法值

| 值            | 说明                                              |
|:-------------|:------------------------------------------------|
| navigate     | 对应 ma.navigateTo 或 ma.navigateToMiniProgram 的功能 |
| redirect     | 对应 ma.redirectTo 的功能                            |
| switchTab    | 对应 ma.switchTab 的功能                             |
| reLaunch     | 对应 ma.reLaunch 的功能                              |
| navigateBack | 对应 ma.navigateBack 的功能                          |

### 示例代码

#### 1. 保留当前页面跳转

```html
<view class="nav-container">
  <navigator url="/pages/button/index" open-type="navigate" hover-class="nav-hover" class="nav-btn">
    👉 Navigate to Button Component Page
  </navigator>
  <navigator url="/pages/input/index" open-type="navigate" hover-class="nav-hover" class="nav-btn">
    👉 Navigate to Input Component Page
  </navigator>
</view>
```

```js
Page({ data: {} });
```

```css
.nav-container { display: flex; flex-direction: column; gap: 10px; }
.nav-btn { background: #fff; border: 1px solid #cbd5e1; padding: 12px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #2563eb; }
.nav-hover { background: #f1f5f9; }
```

#### 2. 关闭当前页面跳转

```html
<navigator url="/pages/view/index" open-type="redirect" class="nav-btn">
  🔄 Redirect to View Page (Close Current)
</navigator>
```

```js
Page({ data: {} });
```

```css
.nav-btn { background: #fff; border: 1px solid #cbd5e1; padding: 12px 14px; border-radius: 8px; font-size: 14px; color: #2563eb; }
```


### Bug & Tip

1.`navigator-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, `navigator` 的子节点背景色应为透明色
