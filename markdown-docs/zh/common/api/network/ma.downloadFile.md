# ma.downloadFile

下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。

> 注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| url | String | - | 是 | 下载资源的 url |
| header | Object | - | 否 | HTTP 请求的 Header，Header 中不能设置 Referer |
| timeout | Number | 60000 | 否 | 超时时间，单位为毫秒 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | downloadFile: ok |
| tempFilePath | String | 临时文件路径（本地路径） |
| statusCode | Number | 开发者服务器返回的 HTTP 状态码（只有成功下载才会进入 success 回调，状态码为 2XX） |

## 使用示例

```javascript
ma.downloadFile({
  url: 'https://example.com/audio/123',
  success(res) {
    if (res.statusCode === 200) {
      console.log('下载成功，文件路径:', res.tempFilePath);
      ma.playVoice({
        filePath: res.tempFilePath
      });
    }
  },
  fail(err) {
    console.log('下载失败:', err);
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- url 为必填参数，必须为有效的 HTTPS URL

## Tips

1. 目前不会进行安全域的校验，建议优先使用 https。
