# ma.closeBLEConnection

Disconnects from a Bluetooth Low Energy device.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| deviceId | String | - | Yes | Bluetooth device id |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | closeBLEConnection: ok |

## Usage Example

```javascript
ma.closeBLEConnection({
  deviceId: 'deviceId',
  success: (res) => {
    console.log('Disconnected', res);
  },
  fail: (res) => {
    console.error('Disconnection failed', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- deviceId is a required parameter
