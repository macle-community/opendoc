## input

> 输入框。该组件是原生组件，使用时请注意相关限制

| 属性                | 类型          | 默认值               | 必填 | 说明                                                                      |
|:------------------|:------------|:------------------|:---|:------------------------------------------------------------------------|
| value             | String      |                   | 是  | 输入框的初始内容                                                                |
| type              | String      | text              | 否  | input 的类型                                                               |
| password          | Boolean     | false             | 否  | 是否是密码类型                                                                 |
| placeholder       | String      |                   | 是  | 输入框为空时占位符                                                               |
| placeholder-style | String      |                   | 是  | 指定 placeholder 的样式，目前仅支持 color,font-size 和 font-weight                  |
| placeholder-class | String      | input-placeholder | 否  | 指定 placeholder 的样式类，目前仅支持 color,font-size 和 font-weight                 |
| disabled          | Boolean     | false             | 否  | 是否禁用                                                                    |
| maxlength         | Number      | 140               | 否  | 最大输入长度，设置为 -1 的时候不限制最大长度                                                |
| focus             | Boolean     | false             | 否  | 获取焦点                                                                    |
| confirm-type      | String      | done              | 否  | 设置键盘右下角按钮的文字，仅在 type='text'时生效                                          |
| confirm-hold      | Boolean     | false             | 否  | 点击键盘右下角按钮时是否保持键盘不收起                                                     |
| cursor            | Number      | -1                | 是  | 指定 focus 时的光标位置，默认为行尾                                                   |
| selection-start   | Number      | -1                | 否  | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                                    |
| selection-end     | Number      | -1                | 否  | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用                                  |
| adjust-position   | Boolean     | true              | 否  | 键盘弹起时，是否自动上推页面                                                          |
| bindinput         | Eventhandle |                   | 是  | 键盘输入时触发，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。 |
| bindfocus         | Eventhandle |                   | 是  | 输入框聚焦时触发，event.detail = { value}                                        |
| bindblur          | Eventhandle |                   | 是  | 输入框失去焦点时触发，event.detail = { value}                                      |
| bindconfirm       | Eventhandle |                   | 是  | 点击完成按钮时触发，event.detail = { value }                                      |

### type 的合法值

| 值      | 说明        |
|:-------|:----------|
| text   | 文本输入键盘    |
| number | 数字输入键盘    |
| digit  | 带小数点的数字键盘 |

### confirm-type 的合法值

| 值      | 说明          |
|:-------|:------------|
| send   | 右下角按钮为“发送”  |
| search | 右下角按钮为“搜索”  |
| next   | 右下角按钮为“下一个” |
| go     | 右下角按钮为“前往”  |
| done   | 右下角按钮为“完成”  |

### 示例代码

```html

<view>
  <input value='Hello World' />
</view>
```

### Bug & Tip

1. confirm-type 的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持
2. input 组件是一个原生组件，字体是系统字体，所以无法设置 font-family
3. 在 input 聚焦期间，避免使用 css 动画
4. 对于将 input 封装在自定义组件中、而 form 在自定义组件外的情况， form 将不能获得这个自定义组件中 input 的值。
5. cursor 和 selection-start 、selection-end 的属性共存时，selection-start 及 selection-end 优先级更高。
6. 含 focus 属性的 input 不要超出屏幕可视范围，且同一页面不应出现两个及以上的含 focus 属性的 input。
7. input组件的高度会影响其中的placeholder-class字体样式设置，需联合考虑这两者以保证小程序用户的相关体验。



