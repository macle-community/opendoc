# ma.saveBase64Image

将 Base64 格式的图片数据保存到系统相册。

## 最低版本

24.3.0

## 参数说明

| 参数名      | 类型       | 必填  | 说明             |
|----------|----------|-----|----------------|
| base64   | string   | 是   | Base64 编码的图片数据 |
| success  | Function | 否   | 成功回调           |
| fail     | Function | 否   | 失败回调           |
| complete | Function | 否   | 完成回调           |

## 回调参数

| 参数名     | 类型     | 说明     |
|---------|--------|---------|
| errMsg  | string | 提示信息  |

## 使用示例

```javascript
// 支持 Promise
ma.saveBase64Image({ base64: 'xxxx' }).then(res => {
  console.log(res);
});

// 回调方式
ma.saveBase64Image({
  base64: 'data:image/png;base64,iVBORw0KGgo...',
  success: function(res) {
    console.log('保存成功:', res.errMsg);
  },
  fail: function(err) {
    console.log('保存失败:', err);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- base64 为必填参数，必须是有效的 Base64 字符串