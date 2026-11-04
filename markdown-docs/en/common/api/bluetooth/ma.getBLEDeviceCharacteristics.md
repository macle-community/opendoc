# ma.getBLEDeviceCharacteristics

Gets all characteristics of a service on a Bluetooth Low Energy device.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| deviceId | String | - | Yes | Bluetooth device id |
| serviceId | String | - | Yes | Bluetooth service UUID, must be obtained by calling ma.getBLEDeviceServices first |
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | getBLEDeviceCharacteristics: ok |
| characteristics | Array | Device characteristics list |

#### characteristics Array Item

| Property | Type | Description |
|------|------|------|
| uuid | String | UUID of the Bluetooth device characteristic |
| properties | Object | Operation types supported by this characteristic |

##### properties Object

| Property | Type | Description |
|------|------|------|
| broadcast | Boolean | Whether broadcast operation is supported |
| read | Boolean | Whether read operation is supported |
| write | Boolean | Whether write operation is supported |
| notify | Boolean | Whether notify operation is supported |
| indicate | Boolean | Whether indicate operation is supported |
| writeNoResponse | Boolean | Whether write without response is supported |
| signedWrite | Boolean | Whether signed write is supported |
| extendedProperties | Boolean | Whether extended properties are supported |
| notifyEncryption | Boolean | Whether encrypted notify operation is supported (iOS only) |
| indicateEncryption | Boolean | Whether encrypted indicate operation is supported (iOS only) |

## Usage Example

```javascript
ma.getBLEDeviceCharacteristics({
  deviceId: 'device_id_here',
  serviceId: 'service_uuid_here',
  success: (res) => {
    console.log('Characteristics list:', res.characteristics);
    // Iterate over characteristics
    for (const item of res.characteristics) {
      if (item.properties.read) {
        console.log('Supports read:', item.uuid);
      }
      if (item.properties.write) {
        console.log('Supports write:', item.uuid);
      }
    }
  },
  fail(res) {
    console.error('Failed to get characteristics', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- deviceId and serviceId are required parameters
