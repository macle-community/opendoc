# ma.capsuleStyle

Sets the style of the mini-program top capsule button.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| style | Number | - | Yes | Style, valid values 0 (host app light mode), 1 (host app dark mode) |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
// Promise supported
ma.capsuleStyle({ style: 0 }).then(res => {
  console.log(res);
});

// Callback style
ma.capsuleStyle({
  style: 1,
  success(res) {
    console.log('Set successfully', res);
  },
  fail(err) {
    console.log('Set failed', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- style is a required parameter, optional values: 0 (light mode), 1 (dark mode)
