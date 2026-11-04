# ma.saveImage | ma.saveImageToPhotosAlbum

将图片保存到系统相册。

> **注意：** H5 接口名为 `ma.saveImage`，DSL 接口名为 `ma.saveImageToPhotosAlbum`，功能相同。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| content / filePath | String | - | 是 | H5：图片路径或 Base64 数据；DSL：图片文件路径（本地路径） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| result | string | 保存的结果 |

## 使用示例

```javascript
// H5 方式
ma.saveImage({
  content: '/sdcard/Pictures/xxx.jpg',
  success: function(res) {
    console.log('保存成功:', res.result);
  },
  fail: function(err) {
    console.log('保存失败:', err);
  }
});

// DSL 方式
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

## 使用限制

- 最低支持版本：24.3.0
- content / filePath 为必填参数
