# ma.setStorageSync

Synchronously stores data in the local cache under the specified key. It overwrites the original content corresponding to that key. Unless the user actively deletes it or it is cleaned up by the system due to storage space reasons, the data remains available.

> The maximum data length allowed for a single key is 10KB on Android and 1MB on iOS, and the total data storage limit is 10MB.

## Minimum Version

24.9.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| key | String | - | Yes | The specified key in the local cache |
| data | Any | - | Yes | The content to store. Only supports native types, Date, and objects that can be serialized via JSON.stringify |

## Usage Example

```javascript
try {
  ma.setStorageSync('userInfo', { name: 'Zhang San', age: 25 });
} catch (e) {
  // Error handling
}
```

## Usage Restrictions

- Minimum supported version: 24.9.0
- key must be a string type

## Tips

1. Storage is not encrypted. Do not store sensitive personal data in plaintext
