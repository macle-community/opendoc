# ma.onBluetoothDeviceFound

Listens for the event of finding new Bluetooth devices.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| listener | Function | - | Yes | Listener function for the event of finding new devices |

### listener Callback Parameters

| Property | Type | Description |
|------|------|------|
| devices | Array | List of newly found devices |

#### devices Array Item

| Property | Type | Description |
|------|------|------|
| RSSI | Number | Signal strength of the current Bluetooth device, in dBm |
| advertisServiceUUIDs | Array | ServiceUUIDs data segment in the advertising data of the current Bluetooth device |
| connectable | Boolean | Whether the current Bluetooth device is connectable (Not supported on Android versions below 8.0) |
| deviceId | String | Bluetooth device id |
| localName | String | LocalName data segment in the advertising data of the current Bluetooth device |
| name | String | Bluetooth device name, some devices may not have one |

## Usage Example

```javascript
ma.onBluetoothDeviceFound((res) => {
  console.log('Found new device:', res.devices);
  res.devices.forEach(device => {
    console.log('Device name:', device.name);
    console.log('Signal strength:', device.RSSI);
  });
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- Multiple calls to this method only append listener functions and do not override existing ones
