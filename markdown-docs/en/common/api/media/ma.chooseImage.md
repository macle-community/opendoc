# ma.chooseImage

Selects images from the local album or takes photos using the camera.

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| count | Number | 9 | No | Maximum number of images that can be selected |
| sizeType | Array | ['original', 'compressed'] | No | Size of the selected images (iOS only) |
| sourceType | Array | ['album', 'camera'] | No | Source of the selected images |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### sourceType Valid Values

| Value | Description | Remarks |
|----|------|------|
| album | Select image from album | Configure only this value to directly launch album image selection |
| camera | Use camera | Configure only this value to directly launch camera to take a photo |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | chooseImage:ok |
| tempFilePaths | Array | List of local temporary file paths of the images (local paths) |
| tempFiles | Array | List of local temporary files of the images |

#### tempFiles Structure

| Attribute | Type | Description |
|------|------|------|
| path | String | Local temporary file path (local path) |
| size | Number | Local temporary file size, in Bytes |

## Usage Example

```javascript
ma.chooseImage({
  count: 9,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success(res) {
    const tempFilePaths = res.tempFilePaths;
    console.log('Selected image paths:', tempFilePaths);
    // tempFilePath can be used as the src attribute of an img tag to display the image
  }
});
```

## Usage Restrictions

- sizeType optional values: original, compressed
- sourceType optional values: album, camera
