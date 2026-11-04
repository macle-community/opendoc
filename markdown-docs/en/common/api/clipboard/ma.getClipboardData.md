# ma.getClipboardData

Gets the contents of the system clipboard.

## Minimum Version

24.12.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| data | String | Contents of the clipboard |

## Usage Example

```javascript
ma.getClipboardData({
  success(res) {
    console.log('Clipboard contents:', res.data);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.12.0
