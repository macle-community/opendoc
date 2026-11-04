# ma.getLocalImgData

获取本地图片的 Base64 数据。

## 参数说明

| 参数名      | 类型       | 必填  | 说明   |
|----------|----------|-----|------|
| path     | string   | 是   | 图片路径 |
| success  | Function | 否   | 成功回调 |
| fail     | Function | 否   | 失败回调 |
| complete | Function | 否   | 完成回调 |

## 使用示例

```javascript
ma.getLocalImgData({
  path: '/sdcard/Pictures/xxx.jpg',
  success: function(res) {
    console.log('图片数据:', res.data);
  }
});
```

## 使用限制

- path 为必填参数