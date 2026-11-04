# ma.uploadImage

Uploads an image to the server.

## Parameter Description

This API is a simplified version of uploadFile that uploads images directly.

## Usage Example

```javascript
ma.uploadImage({
  url: 'https://api.example.com/upload',
  success: function(res) {
    console.log('Upload succeeded');
  }
});
```