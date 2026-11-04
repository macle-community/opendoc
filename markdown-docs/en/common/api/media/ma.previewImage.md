# ma.previewImage

Previews images in full screen on a new page.

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| urls | Array | - | Yes | List of image links to preview |
| current | String | First image in urls | No | Link of the currently displayed image |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
const current = 'https://example/photo1.jpg';
const list = [
  'https://example/photo1.jpg',
  'https://example/photo2.jpg',
  'https://example/photo3.jpg'
];
ma.previewImage({
  current,
  urls: list,
  success: function(res) {
    console.log('Preview successful');
  },
  fail: function(err) {
    console.log('Preview failed:', err);
  }
});
```

## Usage Restrictions

- urls is a required parameter and must be a non-empty array
