# ma.downloadImage

Downloads an image to the local device.

## Parameter Description

This API is a simplified version of downloadFile that downloads images directly.

## Usage Example

```javascript
ma.downloadImage({
  url: 'https://example.com/image.jpg',
  success: function(res) {
    console.log('Download succeeded');
  }
});
```