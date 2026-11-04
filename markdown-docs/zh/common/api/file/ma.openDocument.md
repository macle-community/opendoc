# ma.openDocument

打开并预览各类文档文件。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| filePath | String | - | 是 | 文件路径（本地路径），可通过 downloadFile 获得 |
| fileType | String | - | 否 | 文件类型，指定文件类型打开文件 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### fileType 合法值

| 合法值 | 说明 |
|--------|------|
| doc | doc 格式 |
| docx | docx 格式 |
| xls | xls 格式 |
| xlsx | xlsx 格式 |
| ppt | ppt 格式 |
| pptx | pptx 格式 |
| pdf | pdf 格式 |

## 使用示例

```javascript
// 结合 downloadFile 使用
ma.downloadFile({
  url: 'http://example.com/somefile.pdf',
  success: function (res) {
    const filePath = res.tempFilePath;
    ma.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('打开文档成功');
      },
      fail: function (err) {
        console.log('打开失败:', err);
      }
    });
  }
});
```

## 使用限制

- filePath 为必填参数
