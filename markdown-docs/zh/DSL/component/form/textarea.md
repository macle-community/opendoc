## textarea

> 多行输入框。该组件是原生组件，使用时请注意相关限制。 注：目前为 web 实现，非原生，因此部分属性暂不支持。

| 属性                | 类型          | 默认值                  | 必填 | 说明                                                                                       |
|:------------------|:------------|:---------------------|:---|:-----------------------------------------------------------------------------------------|
| value             | String      |                      | 否  | 输入框的内容                                                                                   |
| placeholder       | String      |                      | 否  | 输入框为空时占位符                                                                                |
| placeholder-style | String      |                      | 否  | 指定 placeholder 的样式，目前仅支持 color,font-size 和 font-weight                                   |
| placeholder-class | String      | textarea-placeholder | 否  | 指定 placeholder 的样式类                                                                      |
| disabled          | Boolean     | false                | 否  | 是否禁用                                                                                     |
| maxlength         | Number      | 140                  | 否  | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                 |
| focus             | Boolean     | false                | 否  | 获取焦点                                                                                     |
| auto-height       | Boolean     | false                | 否  | 是否自动增高，设置 auto-height 时，style.height 不生效                                                 |
| cursor            | Number      | -1                   | 是  | 指定 focus 时的光标位置，默认为行尾                                                                    |
| selection-start   | Number      | -1                   | 否  | 光标起始位置，自动聚集时有效，需与`selection-end`搭配使用                                                     |
| selection-end     | Number      | -1                   | 否  | 光标结束位置，自动聚集时有效，需与`selection-start`搭配使用                                                   |
| adjust-position   | Boolean     | true                 | 否  | 键盘弹起时，是否自动上推页面                                                                           |
| bindfocus         | Eventhandle |                      | 否  | 输入框聚焦时触发，event.detail = { value}。                                                        |
| bindblur          | Eventhandle |                      | 否  | 输入框失去焦点时触发，event.detail = {value}                                                        |
| bindlinechange    | Eventhandle |                      | 否  | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}                        |
| bindinput         | Eventhandle |                      | 否  | 当键盘输入时，触发 input 事件，event.detail = {value, cursor, }。bindinput 处理函数的返回值并不会反映到 textarea 上。 |

### 示例代码

```html

<view class='textarea-wrp'>
  <textarea focus id='textarea2' selection-start='1' selection-end='3' style='height: 3em' value='自动聚焦' maxlength='10' auto-height />
</view>
```

### Bug & Tip

1. `textarea` 的 `blur` 事件会晚于页面上的 `tap` 事件，如果需要在 `button` 的点击事件获取 `textarea`，可以使用 `form`
   的 `bindsubmit`。
2. 不建议在多行文本上对用户的输入进行修改，所以 `textarea` 的 `bindinput` 处理函数并不会将返回值反映到 `textarea` 上。
3. cursor 和 selection-start 、selection-end 的属性共存时，selection-start 及 selection-end 优先级更高。
