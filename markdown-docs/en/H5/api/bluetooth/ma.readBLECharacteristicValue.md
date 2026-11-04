# ma.readBLECharacteristicValue

Reads the binary data of a Bluetooth Low Energy device characteristic value.

## Minimum Version

24.6.0

## Parameter Description

| Parameter Name              | Type     | Required | Description      |
|------------------|----------|-----|---------|
| deviceId         | string   | Yes   | Bluetooth device ID |
| serviceId        | string   | Yes   | Service UUID |
| characteristicId | string   | Yes   | Characteristic UUID |
| success          | Function | No   | Success callback    |
| fail             | Function | No   | Failure callback    |
| complete         | Function | No   | Completion callback    |

## Usage Example

```javascript
ma.readBLECharacteristicValue({
  deviceId: 'device_id_here',
  serviceId: 'service_uuid_here',
  characteristicId: 'characteristic_uuid_here',
  success: function(res) {
    console.log('Characteristic value:', res.value);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- deviceId, serviceId, characteristicId are required parameters
- The device characteristic must support read operations