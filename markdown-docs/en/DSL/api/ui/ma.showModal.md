## ma.showModal(Object object)

> Shows a modal dialog

> The popup style follows the system default popup style, and the style may differ across system versions

### Parameters

**Object object**

| Property     | Type     | Default | Required | Description                          |
|:-------------|:---------|:--------|:---|:----------------------------|
| title        | String   |         | No  | Title of the prompt                       |
| content      | String   |         | No  | Content of the prompt                       |
| showCancel   | Boolean  | true    | No  | Whether to show the cancel button                    |
| cancelText   | String   | Cancel      | No  | Text of the cancel button, max 4 characters            |
| cancelColor  | String   | #000000 | No  | Text color of the cancel button, must be a hexadecimal color string |
| confirmText  | String   | OK      | No  | Text of the confirm button, max 4 characters            |
| confirmColor | String   | #576B95 | No  | Text color of the confirm button, must be a hexadecimal color string |
| editable     | Boolean  | false   | No  | Whether to show an input box                     |
| success      | Function |         | No  | Callback function for successful interface call                 |
| fail         | Function |         | No  | Callback function for failed interface call                 |
| complete     | Function |         | No  | Callback function for the end of the interface call (executed on both success and failure)    |

### object.success callback function

**Parameters**

**Object res**

| Property | Type    | Description                        |
|:--------|:--------|:--------------------------|
| errMsg  | String  | showModal:ok              |
| content | String  | The text entered by the user when editable is true |
| confirm | Boolean | When true, indicates the user clicked the confirm button      |
| cancel  | Boolean | When true, indicates the user clicked cancel        |

### Sample code

```js
    ma.showModal({
      title: 'Prompt',
      content: 'This is a modal popup',
      success (res) {
        if (res.confirm) {
          console.log('User clicked confirm')
        } else if (res.cancel) {
          console.log('User clicked cancel')
        }
      }
    })
```