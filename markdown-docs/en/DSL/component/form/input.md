## input

> Input box. This component is a native component. Please note the relevant restrictions when using it

| Property            | Type          | Default Value         | Required | Description                                                                      |
|:------------------|:------------|:------------------|:---|:------------------------------------------------------------------------|
| value             | String      |                   | Yes  | The initial content of the input box                                                                |
| type              | String      | text              | No  | The type of input                                                               |
| password          | Boolean     | false             | No  | Whether it is a password type                                                                 |
| placeholder       | String      |                   | Yes  | Placeholder when the input box is empty                                                               |
| placeholder-style | String      |                   | Yes  | Specifies the style of the placeholder. Currently only supports color, font-size and font-weight                  |
| placeholder-class | String      | input-placeholder | No  | Specifies the style class of the placeholder. Currently only supports color, font-size and font-weight                 |
| disabled          | Boolean     | false             | No  | Whether to disable                                                                    |
| maxlength         | Number      | 140               | No  | Maximum input length. When set to -1, the maximum length is not limited                                                |
| focus             | Boolean     | false             | No  | Get focus                                                                    |
| confirm-type      | String      | done              | No  | Sets the text of the button at the bottom-right corner of the keyboard. Only effective when type='text'                                          |
| confirm-hold      | Boolean     | false             | No  | Whether to keep the keyboard from collapsing when the button at the bottom-right corner of the keyboard is clicked                                                     |
| cursor            | Number      | -1                | Yes  | Specifies the cursor position when focused. Defaults to the end of the line                                                   |
| selection-start   | Number      | -1                | No  | Cursor start position. Effective when auto-focused. Must be used together with selection-end                                    |
| selection-end     | Number      | -1                | No  | Cursor end position. Effective when auto-focused. Must be used together with selection-start                                  |
| adjust-position   | Boolean     | true              | No  | Whether to automatically push the page up when the keyboard pops up                                                          |
| bindinput         | Eventhandle |                   | Yes  | Triggered on keyboard input. event.detail = {value, cursor}. The handler can directly return a string, which will replace the content of the input box. |
| bindfocus         | Eventhandle |                   | Yes  | Triggered when the input box gains focus. event.detail = { value}                                        |
| bindblur          | Eventhandle |                   | Yes  | Triggered when the input box loses focus. event.detail = { value}                                      |
| bindconfirm       | Eventhandle |                   | Yes  | Triggered when the done button is clicked. event.detail = { value }                                      |

### Valid values of type

| Value   | Description        |
|:-------|:----------|
| text   | Text input keyboard    |
| number | Number input keyboard    |
| digit  | Number keyboard with a decimal point |

### Valid values of confirm-type

| Value   | Description          |
|:-------|:------------|
| send   | Bottom-right button is "Send"  |
| search | Bottom-right button is "Search"  |
| next   | Bottom-right button is "Next" |
| go     | Bottom-right button is "Go"  |
| done   | Bottom-right button is "Done"  |

### Sample Code

```html

<view>
  <input value='Hello World' />
</view>
```

### Bug & Tip

1. The final behavior of confirm-type depends on the implementation of the mobile input method itself. Some Android system input methods and third-party input methods may not support it or may only partially support it
2. The input component is a native component and uses the system font, so font-family cannot be set
3. Avoid using CSS animations while the input is focused
4. When the input is wrapped in a custom component and the form is outside the custom component, the form will not be able to obtain the value of the input in this custom component.
5. When the cursor, selection-start, and selection-end attributes coexist, selection-start and selection-end take higher priority.
6. An input with the focus attribute should not exceed the visible range of the screen, and there should not be two or more inputs with the focus attribute on the same page.
7. The height of the input component will affect the placeholder-class font style settings. These two must be considered together to ensure the relevant experience of the mini program user.



