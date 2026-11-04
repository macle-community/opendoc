# ma.writeBLECharacteristicValue

Writes binary data to a Bluetooth Low Energy device characteristic value.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| deviceId | String | - | Yes | Bluetooth device id |
| serviceId | String | - | Yes | UUID of the service corresponding to the Bluetooth characteristic |
| characteristicId | String | - | Yes | UUID of the Bluetooth characteristic |
| value | ArrayBuffer | - | Yes | Binary value corresponding to the Bluetooth device characteristic |
| writeType | String | write(iOS) / writeNoResponse(Android) | No | Write mode setting for the Bluetooth characteristic value |
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### writeType Valid Values

| Value | Description |
|----|------|
| write | Forced write with response; reports an error when not supported |
| writeNoResponse | Forced write without response; reports an error when not supported |
| signedWrite | Forced signed write |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | writeBLECharacteristicValue: ok |

## Usage Example

```javascript
let buffer = new ArrayBuffer(1);
let dataView = new DataView(buffer);
dataView.setUint8(0, 0);

ma.writeBLECharacteristicValue({
  deviceId: 'device_id_here',
  serviceId: 'service_uuid_here',
  characteristicId: 'characteristic_uuid_here',
  value: buffer,
  writeType: 'write',
  success(res) {
    console.log('Write succeeded', res.errMsg);
  },
  fail(res) {
    console.error('Write failed', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- deviceId, serviceId, characteristicId, and value are required parameters
- The device characteristic must support write operation

## Tips

1. The device characteristic must support write for a successful call
2. For iOS devices, according to the current BLE protocol, it is recommended that the data volume transmitted at a time does not exceed 20 bytes. When transmitting larger data, chunking is recommended
