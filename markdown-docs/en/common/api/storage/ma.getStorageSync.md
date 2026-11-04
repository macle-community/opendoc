# ma.getStorageSync

Synchronously retrieves the data of the specified key from the local cache.

## Minimum Version

24.9.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| key | String | - | Yes | The specified key in the local cache |

## Return Value

The cached data content

## Usage Example

```javascript
try {
  const val = ma.getStorageSync('key');
  console.log('Retrieved result:', val);
} catch (e) {
  // Error handling
}
```

## Usage Restrictions

- Minimum supported version: 24.9.0
- key must be a string type

## Tips

1. On Android, the maximum data transfer size for `getStorageSync` is 10K. If it exceeds 10K, please use the asynchronous API `getStorage`
