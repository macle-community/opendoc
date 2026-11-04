# ma.setClipboardData

Sets the content of the system clipboard. After a successful call, a toast prompting "Content copied" will appear for 1.5s.

## Minimum Version

24.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| data | String | - | Yes | Content of the clipboard |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.setClipboardData({
  data: 'data',
  success(res) {
    ma.getClipboardData({
      success(res) {
        console.log(res.data);
      }
    });
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.12.0
- data is a required parameter
- After a successful call, a toast prompting "Content copied" will appear for 1.5s

## Tips

Since this API sets the copied content to the system clipboard, mini program developers must ensure that the copied content is reasonable and lawful. If the content copied by this API is sensitive information and causes risks such as information leakage, the mini program developer shall bear the responsibility independently.
