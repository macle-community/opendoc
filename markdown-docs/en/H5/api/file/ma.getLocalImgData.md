# ma.getLocalImgData

Gets the Base64 data of a local image.

## Parameter Description

| Parameter Name      | Type     | Required | Description   |
|----------|----------|-----|------|
| path     | string   | Yes   | Image path |
| success  | Function | No   | Success callback |
| fail     | Function | No   | Failure callback |
| complete | Function | No   | Completion callback |

## Usage Example

```javascript
ma.getLocalImgData({
  path: '/sdcard/Pictures/xxx.jpg',
  success: function(res) {
    console.log('Image data:', res.data);
  }
});
```

## Usage Restrictions

- path is a required parameter