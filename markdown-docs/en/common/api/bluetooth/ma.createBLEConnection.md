# ma.createBLEConnection

Connects to a Bluetooth Low Energy device.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| deviceId | String | - | Yes | Bluetooth device id |
| timeout | Number | 30000 | No | Connection timeout, in ms. If not specified, the default timeout is 30 seconds |
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | createBLEConnection: ok |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | Error message |

## Usage Example

```javascript
ma.createBLEConnection({
  deviceId: 'deviceId',
  timeout: 30000,
  success: (res) => {
    console.log('Connected successfully', res);
  },
  fail: (res) => {
    console.error('Connection failed', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- deviceId is a required parameter

## Tips

If the mini program has previously searched for a Bluetooth device and successfully established a connection, you can directly pass the deviceId obtained from the previous search to attempt to connect to the device, without performing the search operation again. On iOS devices, if the Bluetooth module is closed, you must call `ma.startBluetoothDevicesDiscovery` again to search for Bluetooth devices before calling the connect to Bluetooth Low Energy device interface.
