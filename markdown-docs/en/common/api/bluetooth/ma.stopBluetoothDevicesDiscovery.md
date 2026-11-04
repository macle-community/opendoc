# ma.stopBluetoothDevicesDiscovery

Stops searching for nearby Bluetooth peripheral devices.

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
| errMsg | String | stopBluetoothDevicesDiscovery: ok |

## Usage Example

```javascript
ma.stopBluetoothDevicesDiscovery({
  success: (res) => {
    console.log('Search stopped successfully', res);
  },
  fail: (res) => {
    console.error('Failed to stop search', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
