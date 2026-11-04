# ma.uploadFile

将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| url | String | - | 是 | 开发者服务器地址 |
| filePath | String | - | 否 | 要上传文件资源的路径（本地路径），files/ filePath 二选一 |
| files | Array | - | 否 | 需要上传的文件列表，使用 files 时 filePath 和 name 不生效 |
| name | String | - | 是 | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 |
| header | Object | - | 否 | HTTP 请求 Header，Header 中不能设置 Referer |
| formData | Object | - | 否 | HTTP 请求中其他额外的 form data |
| timeout | Number | 60000 | 否 | 超时时间，单位为毫秒 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### files 参数说明

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | String | 否 | 表单的项目名，默认为 file |
| file | File | 否 | 要上传的文件对象 |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | uploadFile:ok |
| data | String | 开发者服务器返回的数据 |
| statusCode | Number | 开发者服务器返回的 HTTP 状态码 |

## 使用示例

```javascript
// 从相册选择图片后上传
ma.chooseImage({
  success(res) {
    const tempFilePaths = res.tempFilePaths;
    ma.uploadFile({
      url: 'https://example.test.com/upload',
      filePath: tempFilePaths[0],
      name: 'file',
      success(res) {
        console.log('上传成功:', res);
      },
      fail(err) {
        console.log('上传失败:', err);
      }
    });
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- url 为必填参数
- filePath 和 files 必须填写其中之一
- 如果使用 filePath，则 name 为必填

## Tips

1. 目前不会进行安全域的校验，建议优先使用 https
2. files 和 filePath 同时写的情况下，files 的优先级更高
3. 文件上传的大小和个数虽然没有限制，但是出于性能考虑不建议上传过多过大的文件
