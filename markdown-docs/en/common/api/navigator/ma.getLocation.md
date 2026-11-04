# ma.getLocation

Gets the current geographic location information.

> Requires scope.location authorization.

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| useFetchData | Boolean | false | No | Whether to use prefetched data |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | getLocation: ok |
| latitude | Number | Latitude, range is -90~90, negative values indicate south latitude |
| longitude | Number | Longitude, range is -180~180, negative values indicate west longitude |
| speed | Number | Speed, unit m/s |
| accuracy | Number | Location accuracy |
| altitude | Number | Altitude, unit m |
| verticalAccuracy | Number | Vertical accuracy, unit m (cannot be obtained on Android, returns 0) |
| horizontalAccuracy | Number | Horizontal accuracy, unit m |
| locationEndTime | String | Location end time, format YYYY-MM-DD HH:mm:ss |
| locationOrigin | String | Location information source, returns `prefetch` for pre-fetch, otherwise returns `location` |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | Error message |
| errno | Integer | Error code |

## Usage Example

```javascript
ma.getLocation({
  useFetchData: false,
  success: function(res) {
    console.log('Longitude:', res.longitude);
    console.log('Latitude:', res.latitude);
    console.log('Speed:', res.speed);
  },
  fail: function(res) {
    if (res.errno === 701003) {
      console.log('Please enable system location permission');
    } else if (res.errno === 701000 || res.errno === 701001) {
      console.log('Please enable location permission in mini program settings');
    }
  }
});
```

## Usage Restrictions

- Requires the app to be authorized for location permission

## Tips

1. When mini program developers fail to obtain mini program permissions (the user denied location authorization), they can call the openSetting API to open settings
