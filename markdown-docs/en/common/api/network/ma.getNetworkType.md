# ma.getNetworkType

Gets the network type of the current device connection.

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | getNetworkType:ok |
| networkType | String | Network type |
| isConnectVPN | Boolean | Whether connected to VPN (minimum version 25.9.0) |
| signalStrength | Number | Signal strength, unit dbm (Android only) |

### Valid values for networkType

| Valid Value | Description |
|--------|------|
| wifi | Wi-Fi network |
| 2g | 2G network |
| 3g | 3G network |
| 4g | 4G network |
| 5g | 5G network |
| unknown | Uncommon network type on Android |
| none | The device currently has no network connection |

## Usage Example

```javascript
ma.getNetworkType({
  success(res) {
    const networkType = res.networkType;
    console.log('Network type:', networkType);
    if (res.isConnectVPN) {
      console.log('The current device is using a VPN');
    }
  },
  fail(err) {
    console.log('Failed to get:', err);
  }
});
```

## Tips

1. When connected to a VPN and also connected to Wi-Fi, or when all networks are turned off, a network reachability verification is required; it is recommended to use a loading indicator when obtaining.
