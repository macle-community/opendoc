# ma.getBLEDeviceServices

Gets all services of a Bluetooth Low Energy device.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| deviceId | String | - | Yes | Bluetooth device id. A connection must already be established via ma.createBLEConnection |
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | getBLEDeviceServices: ok |
| services | Array | Device services list |

#### services Array Item

| Property | Type | Description |
|------|------|------|
| uuid | String | UUID of the Bluetooth device service |
| isPrimary | Boolean | Whether this service is a primary service |

## Usage Example

```javascript
ma.getBLEDeviceServices({
  deviceId: 'device_id_here',
  success: (res) => {
    console.log('Services list:', res.services);
    for (const service of res.services) {
      if (service.isPrimary) {
        console.log('Primary service:', service.uuid);
      }
    }
  },
  fail: (res) => {
    console.error('Failed to get services', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- deviceId is a required parameter
