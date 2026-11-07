## textarea

> Multi-line input box. This component is a native component. Please note the relevant restrictions when using it. Note: Currently it is a web implementation, not native, so some properties are not yet supported.

| Property            | Type          | Default Value               | Required | Description                                                                                       |
|:------------------|:------------|:---------------------|:---|:-----------------------------------------------------------------------------------------|
| value             | String      |                      | No  | The content of the input box                                                                                   |
| placeholder       | String      |                      | No  | Placeholder when the input box is empty                                                                                |
| placeholder-style | String      |                      | No  | Specifies the style of the placeholder. Currently only supports color, font-size and font-weight                                   |
| placeholder-class | String      | textarea-placeholder | No  | Specifies the style class of the placeholder                                                                      |
| disabled          | Boolean     | false                | No  | Whether to disable                                                                                     |
| maxlength         | Number      | 140                  | No  | Maximum input length. When set to -1, the maximum length is not limited                                                                 |
| focus             | Boolean     | false                | No  | Get focus                                                                                     |
| auto-height       | Boolean     | false                | No  | Whether to auto-increase height. When auto-height is set, style.height does not take effect                                                 |
| cursor            | Number      | -1                   | Yes  | Specifies the cursor position when focused. Defaults to the end of the line                                                                    |
| selection-start   | Number      | -1                   | No  | Cursor start position. Effective when auto-focused. Must be used together with `selection-end`                                                     |
| selection-end     | Number      | -1                   | No  | Cursor end position. Effective when auto-focused. Must be used together with `selection-start`                                                   |
| adjust-position   | Boolean     | true                 | No  | Whether to automatically push the page up when the keyboard pops up                                                                           |
| bindfocus         | Eventhandle |                      | No  | Triggered when the input box gains focus. event.detail = { value}.                                                        |
| bindblur          | Eventhandle |                      | No  | Triggered when the input box loses focus. event.detail = {value}                                                        |
| bindlinechange    | Eventhandle |                      | No  | Called when the number of lines in the input box changes. event.detail = {height: 0, heightRpx: 0, lineCount: 0}                        |
| bindinput         | Eventhandle |                      | No  | Triggered with an input event on keyboard input. event.detail = {value, cursor, }. The return value of the bindinput handler will not be reflected on the textarea. |

### Sample Code

#### 1. Multi-Line Textarea with Placeholder

```html
<view class="textarea-wrp">
  <textarea class="std-textarea" placeholder="Enter comments or description..." bindinput="onTextareaInput" maxlength="200" />
  <view class="char-count">{{charLen}} / 200</view>
</view>
```

```js
Page({
  data: { charLen: 0 },
  onTextareaInput(e) { this.setData({ charLen: (e.detail.value || '').length }); }
});
```

```css
.textarea-wrp { background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; }
.std-textarea { width: 100%; height: 90px; font-size: 14px; }
.char-count { text-align: right; font-size: 11px; color: #94a3b8; margin-top: 4px; }
```

#### 2. Auto-Height Textarea with Maxlength

```html
<view class="textarea-wrp">
  <textarea auto-height="true" placeholder="Auto-height textarea expanding with lines" class="std-textarea" />
</view>
```

```js
Page({ data: {} });
```

```css
.textarea-wrp { background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; }
.std-textarea { width: 100%; min-height: 40px; font-size: 14px; }
```


### Bug & Tip

1. The `blur` event of `textarea` will occur later than the `tap` event on the page. If you need to obtain the `textarea` in the click event of a `button`, you can use the `bindsubmit`
   of `form`.
2. Modifying user input on multi-line text is not recommended, so the return value of the `bindinput` handler of `textarea` will not be reflected on the `textarea`.
3. When the cursor, selection-start, and selection-end attributes coexist, selection-start and selection-end take higher priority.
