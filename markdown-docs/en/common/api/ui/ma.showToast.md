# ma.showToast

Displays a message toast.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| title | String | - | No | Content of the prompt |
| icon | String | success | No | Icon type |
| duration | Number | 1500 | No | Duration of the prompt (maximum valid value is 10000; values exceeding 10000 are treated as 10000) |
| mask | Boolean | false | No | Whether to show a transparent mask to prevent touch penetration |
| image | String | - | No | Local path of a custom icon; image takes priority over icon |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### Valid icon Values

| Value | Description |
|----|------|
| success | Shows the success icon; in this case the title text can display up to 7 Chinese characters in length |
| error | Shows the error icon; in this case the title text can display up to 7 Chinese characters in length |
| loading | Shows the loading icon; in this case the title text can display up to 7 Chinese characters in length |
| none | Does not show an icon; in this case the title text can display up to two lines |

## Usage Example

```javascript
// Promise supported
ma.showToast({
  title: 'success'
}).then(res => {
  console.log(res);
});

// Callback style
ma.showToast({
  title: 'Success',
  icon: 'success',
  duration: 2000,
  success(res) {
    console.log('Displayed successfully', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- title and icon are recommended parameters
- icon optional values: success, error, loading, none
