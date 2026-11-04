# ma.uploadImage

上传图片到服务器。

## 参数说明

该 API 为简化版 uploadFile，直接上传图片。

## 使用示例

```javascript
ma.uploadImage({
  url: 'https://api.example.com/upload',
  success: function(res) {
    console.log('上传成功');
  }
});
```