# ma.downloadImage

下载图片到本地。

## 参数说明

该 API 为简化版 downloadFile，直接下载图片。

## 使用示例

```javascript
ma.downloadImage({
  url: 'https://example.com/image.jpg',
  success: function(res) {
    console.log('下载成功');
  }
});
```