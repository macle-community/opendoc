# ma.setStorage

Stores data in the local cache under the specified key. It overwrites the original content corresponding to that key. Unless the user actively deletes it or it is cleaned up by the system due to storage space reasons, the data remains available.

> The maximum data length allowed for a single key is 1MB, and the total data storage limit is 10MB.

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| key | String | - | Yes | The specified key in the local cache |
| data | Any | - | Yes | The content to store. Only supports native types, Date, and objects that can be serialized via JSON.stringify |
| encrypt | Boolean | false | No | Whether to enable encrypted storage (parameter added in version 23.12.0) |
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.setStorage({
  key: 'userInfo',
  data: { name: 'Zhang San', age: 25 },
  encrypt: false,
  success: function() {
    console.log('Stored successfully');
  }
});
```

## Usage Restrictions

- key and data are required parameters

## Tips

1. If encrypted storage is not enabled, do not store sensitive personal data in plaintext
2. Currently, only the asynchronous interface setStorage supports enabling encrypted storage. Once enabled, data will be encrypted using AES256, and the interface callback duration will increase
3. If encrypted storage is enabled, both setStorage and getStorage must declare encrypt as true simultaneously. Since encrypted data expands to 1.4 times the original data size, when encrypt is enabled, the maximum data length allowed for a single key is 0.7MB, and the total data storage limit is 7.1MB
4. Alipay mini-programs do not support the encrypt parameter
