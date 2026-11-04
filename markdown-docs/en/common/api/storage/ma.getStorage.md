# ma.getStorage

Asynchronously retrieves the content of the specified key from the local cache.

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| key | String | - | Yes | The specified key in the local cache |
| encrypt | Boolean | false | No | Whether to enable encrypted storage (parameter added in version 23.12.0) |
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | getStorage: ok |
| data | Any | The content corresponding to the key |

## Usage Example

```javascript
ma.getStorage({
  key: 'userInfo',
  encrypt: false,
  success: function(res) {
    console.log('Retrieved data:', res.data);
  }
});
```

## Usage Restrictions

- key is a required parameter

## Tips

1. Currently, only the asynchronous interface getStorage supports enabling encrypted storage. Once enabled, data will be decrypted using AES256, and the interface callback duration will increase
2. If encrypted storage is enabled, both setStorage and getStorage must declare encrypt as true simultaneously
