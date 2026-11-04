# ma.offBluetoothDeviceFound

Removes the listener for the event of finding new Bluetooth devices.

## Minimum Version

24.6.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| listener | Function | - | No | The listener function to remove. If not specified, all registered listener functions are removed |

## Usage Example

```javascript
// Remove all listeners
ma.offBluetoothDeviceFound();

// Remove a specific listener
function clearListener() {
  ma.offBluetoothDeviceFound();
}
```

## Usage Restrictions

- Minimum supported version: 24.6.0
