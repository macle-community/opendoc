# ma.clearStorage

Clears all data in the local cache.

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.clearStorage({
  success(res) {
    console.log('Cleared successfully', res);
  },
  fail(err) {
    console.log('Clear failed', err);
  }
});
```
