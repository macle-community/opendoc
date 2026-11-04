# ma.gotoBrowser

Jumps to a third-party browser or app.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| openUrl | String | - | Yes | URL to jump to a third-party (currently only supports jumping to apps that have registered ACTION_VIEW) |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
// Supports Promise
ma.gotoBrowser({ openUrl: 'https://xxx.com' }).then(res => {
  console.log(res);
});

// Callback style
ma.gotoBrowser({
  openUrl: 'https://xxx.com',
  success(res) {
    console.log('Opened successfully', res);
  },
  fail(err) {
    console.log('Failed to open', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- openUrl is a required parameter and must be a string
