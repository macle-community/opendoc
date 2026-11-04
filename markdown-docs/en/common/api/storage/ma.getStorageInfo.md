# ma.getStorageInfo

Asynchronously retrieves information about the current storage.

> **Note:** H5 does not implement this feature in the current version.

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | getStorageInfo: ok |
| keys | Array | All keys in the current storage |
| currentSize | Number | Currently occupied space size, in KB |
| limitSize | Number | Space size limit, in KB |

## Usage Example

```javascript
ma.getStorageInfo({
  success(res) {
    console.log('All keys:', res.keys);
    console.log('Current size:', res.currentSize, 'KB');
    console.log('Space limit:', res.limitSize, 'KB');
  }
});
```
