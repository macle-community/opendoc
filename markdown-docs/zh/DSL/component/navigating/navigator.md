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

```html

<view>
  <view>
    <navigator url='exampleUrl1' class='navigator'>
      <button type='default'>navigateTo页面1</button>
    </navigator>
    <navigator url='exampleUrl2' class='navigator' open-type='redirect' hover-class='other-navigator-hover'>
      <button type='default'>redirectTo到页面2</button>
    </navigator>
    <navigator url='/page/tabbar/component/index' class='navigator' open-type='switchTab'
               hover-class='custom-navigator-hover'>
      <button type='default'>switchTab</button>
    </navigator>
    <navigator url='exampleUrl3' open-type='reLaunch' class='navigator'>
      <button type='default'>reLaunch到页面3</button>
    </navigator>
    <navigator open-type='navigateBack' class='navigator' delta='1'>
      <button type='default'>返回</button>
    </navigator>
  </view>
</view>
```

```css
.navigator-hover button {
    background-color: #DEDEDE;
}

.other-navigator-hover button {
    background-color: #DEDEDE;
}

.navigator {
    padding: 10px
}

.custom-navigator-hover {
    background-color: pink;
}

.other-navigator-hover {
    background-color: rgb(228, 206, 7);
}
```

### Bug & Tip

1.`navigator-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, `navigator` 的子节点背景色应为透明色
