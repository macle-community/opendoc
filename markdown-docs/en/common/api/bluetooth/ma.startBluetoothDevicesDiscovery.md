# ma.startBluetoothDevicesDiscovery

Starts searching for nearby Bluetooth peripheral devices.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| services | Array | - | No | UUID list of primary services of Bluetooth devices to search for (supports 16/32/128-bit UUIDs), used for filtering devices |
| success | Function | - | No | Callback function for a successful API call |
| fail | Function | - | No | Callback function for a failed API call |
| complete | Function | - | No | Callback function for the end of an API call (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | startBluetoothDevicesDiscovery: ok |

## Usage Example

```javascript
ma.startBluetoothDevicesDiscovery({
  services: ['180D'],  // Filter devices with heart rate service
  success: (res) => {
    console.log('Search started', res);
  },
  fail: (res) => {
    console.log('Search failed', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- Must be used after the Bluetooth module is initialized
- The search process consumes battery power; it is recommended to start it only when needed and stop promptly after the search is complete

## F&Qs

**Q:** On Android devices, no devices are found when searching for nearby Bluetooth peripheral devices. How to troubleshoot?

**A:** If you are using an Android phone and cannot find nearby Bluetooth devices for a long time, you can check whether the phone's location service is enabled, and after confirming it is enabled, try searching for devices again.
