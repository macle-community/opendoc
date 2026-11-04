# ma.getSystemSetting

Retrieves the device's system setting information.

## Minimum Version

24.12.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| bluetoothEnabled | Boolean | Bluetooth system switch state |
| locationEnabled | Boolean | Geographic location system switch state |
| wifiEnabled | Boolean | Wi-Fi system switch state |
| deviceOrientation | String | Device orientation, possible values are landscape or portrait |

## Usage Example

```javascript
ma.getSystemSetting({
  success(res) {
    console.log('Bluetooth:', res.bluetoothEnabled);
    console.log('Location:', res.locationEnabled);
    console.log('Wi-Fi:', res.wifiEnabled);
    console.log('Orientation:', res.deviceOrientation);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.12.0
