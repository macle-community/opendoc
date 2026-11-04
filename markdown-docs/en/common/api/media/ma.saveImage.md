# ma.saveImage | ma.saveImageToPhotosAlbum

Saves images to the system album.

> **Note:** The H5 API name is `ma.saveImage`, and the DSL API name is `ma.saveImageToPhotosAlbum`; the functionality is the same.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| content / filePath | String | - | Yes | H5: image path or Base64 data; DSL: image file path (local path) |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| result | string | The result of the save operation |

## Usage Example

```javascript
// H5 method
ma.saveImage({
  content: '/sdcard/Pictures/xxx.jpg',
  success: function(res) {
    console.log('Saved successfully:', res.result);
  },
  fail: function(err) {
    console.log('Save failed:', err);
  }
});

// DSL method
ma.saveImageToPhotosAlbum({
  filePath: 'https://example/test.png',
  success(res) {
    console.log(res);
  },
  fail(err) {
    console.log(err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- content / filePath is a required parameter
