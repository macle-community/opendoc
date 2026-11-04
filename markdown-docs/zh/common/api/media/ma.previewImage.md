# ma.previewImage

在新页面中全屏预览图片。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| urls | Array | - | 是 | 需要预览的图片链接列表 |
| current | String | urls 的第一张 | 否 | 当前显示图片的链接 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

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
    console.log('预览成功');
  },
  fail: function(err) {
    console.log('预览失败:', err);
  }
});
```

## 使用限制

- urls 为必填参数，必须是非空数组
