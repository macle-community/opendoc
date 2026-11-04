# ma.chooseVideo

Selects a video from the local album or records using the camera.

## Minimum Version

24.9.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| sourceType | Array | ['album', 'camera'] | No | Source of the selected video |
| camera | String | 'back' | No | Whether the front or rear camera is launched by default. Android is not currently supported |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### sourceType Value Range

| Value | Description | Remarks |
|----|------|------|
| album | Select video from album | Configure only this value to directly launch album video selection |
| camera | Record video using camera | Configure only this value to directly launch camera to record video |

### camera Value Range

| Value | Description |
|----|------|
| back | Launch rear camera by default |
| front | Launch front camera by default |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | chooseVideo:ok |
| tempFilePath | String | Temporary file path of the selected video (local path) |
| duration | Number | Duration of the selected video (seconds, accurate to two decimal places) |
| size | Number | Data size of the selected video |
| height | Number | Returns the height of the selected video |
| width | Number | Returns the width of the selected video |

## Usage Example

```javascript
ma.chooseVideo({
  sourceType: ['album', 'camera'],
  camera: 'back',
  success(res) {
    console.log('Selected video path:', res.tempFilePath);
    console.log('Video duration:', res.duration);
    console.log('File size:', res.size);
    console.log('Video dimensions:', res.width, 'x', res.height);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.9.0
- sourceType optional values: album, camera
- camera optional values: back, front

## Tips

1. It is recommended that the recorded or selected video duration does not exceed 5 minutes. Exceeding 5 minutes may cause the mini program to lag
