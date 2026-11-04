# ma.saveFileToPhone

将文件保存到手机存储。

> 用于将 Base64 编码的文件数据保存到移动设备本地存储。
> Android，文件默认保存在设备的公共下载目录（Downloads/）下；
> iOS，文件保存在应用沙箱目录内，用户无法通过文件应用直接访问，必须配合 openDocument接口实现文件预览功能。

## 最低版本

24.3.0

## 参数说明

| 参数名             | 类型       | 必填  | 说明                                       |
|----------------|----------|-----|------------------------------------------|
| content        | string   | 是   | base64编码                                 |
| fileName       | string   | 是   | 文件名                                      |
| openSharePanel | boolean  | 否   | 默认为false，配置为true则在保存完文件后拉起系统分享面板（仅ios支持） |
| success        | Function | 否   | 成功回调                                    |
| fail           | Function | 否   | 失败回调                                    |
| complete       | Function | 否   | 完成回调                                    |

## 回调参数

| 参数名       | 类型     | 说明                                 |
|----------|--------|------------------------------------|
| result   | string | 保存的结果                              |
| filePath | string | 保存的文件路径                            |
| path     | string | 保存的文件路径（调用ma.openDocument打开时使用该路径） |

## 使用示例

```javascript
// 支持 Promise
ma.saveFileToPhone({ content: 'xxxx', fileName: 'xxxx', openSharePanel: true }).then(res => {
  console.log(res.filePath);
  console.log(res.path);
});

// 回调方式
ma.saveFileToPhone({
  content: 'file content here',
  fileName: 'test.txt',
  openSharePanel: true,
  success: function(res) {
    console.log('保存成功, 文件路径:', res.filePath);
  },
  fail: function(err) {
    console.log('保存失败:', err);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- content 和 fileName 为必填参数
- 如果是图片通过这个接口调用，为了方便客户最好配置openSharePanel（该配置低版本为 25.9.0）直接存相册