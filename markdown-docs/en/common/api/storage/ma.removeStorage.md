# ma.removeStorage

Removes the specified key from the local cache.

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| key | String | - | Yes | The specified key in the local cache |
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.removeStorage({
  key: 'userInfo',
  success(res) {
    console.log('Removed successfully', res);
  }
});
```

## Usage Restrictions

- key is a required parameter
