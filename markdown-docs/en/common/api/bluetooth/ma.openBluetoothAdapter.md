# ma.openBluetoothAdapter

Initializes the Bluetooth module.

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
| errMsg | String | openBluetoothAdapter: ok |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | Error message |
| state | Number | Bluetooth status code (iOS only) |

#### state Status Code Description

| Status Code | Description |
|--------|------|
| 0 | Bluetooth status unknown |
| 1 | Bluetooth status resetting |
| 2 | Bluetooth status unsupported |
| 3 | Bluetooth status unauthorized |
| 4 | Bluetooth status powered off |

## Usage Example

```javascript
ma.openBluetoothAdapter({
  success: (res) => {
    console.log('Bluetooth initialized successfully', res);
  },
  fail: (res) => {
    console.log('Bluetooth initialization failed:', res.errMsg);
    if (res.state !== undefined) {
      console.log('Bluetooth status code:', res.state);
    }
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- Requires the device to support Bluetooth functionality
- Requires the app to be authorized for Bluetooth permissions
