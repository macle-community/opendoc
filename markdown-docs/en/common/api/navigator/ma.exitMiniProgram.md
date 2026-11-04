# ma.exitMiniProgram

Exits the current mini program.

## Minimum Version

24.6.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| clearCache | Boolean | false | No | Whether to clear the cache |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | exitMiniProgram: ok |

## Usage Example

```javascript
ma.exitMiniProgram({
  clearCache: false,
  success: (res) => {
    console.log('Exited successfully', res);
  },
  fail: (err) => {
    console.log('Exit failed', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
