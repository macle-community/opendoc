# ma.closeBluetoothAdapter

Closes the Bluetooth module.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | closeBluetoothAdapter: ok |

## Usage Example

```javascript
ma.closeBluetoothAdapter({
  success: (res) => {
    console.log('Bluetooth module closed', res);
  },
  fail: (res) => {
    console.error('Bluetooth module close failed', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
