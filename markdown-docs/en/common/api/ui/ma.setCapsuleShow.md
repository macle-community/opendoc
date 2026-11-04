# ma.setCapsuleShow

Sets whether to hide the capsule button.

## Minimum Version

25.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| isShow | Boolean | true | No | Whether to show the capsule (false to hide, true to show) |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.setCapsuleShow({
  isShow: false,  // Hide the capsule
  success(res) {
    console.log('Set successfully', res);
  },
  fail(res) {
    console.log('Set failed', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 25.3.0
- isShow is a required parameter (false to hide, true to show)
