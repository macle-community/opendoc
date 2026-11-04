# ma.request

发起 HTTPS 网络请求。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| url | String | - | 是 | 开发者服务器接口地址 |
| data | String / Object / ArrayBuffer | - | 否 | 请求的参数 |
| header | Object | - | 否 | 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json |
| timeout | Number | 60000 | 否 | 超时时间，单位为毫秒 |
| method | String | GET | 否 | HTTP 请求方法 |
| dataType | String | JSON | 否 | 返回的数据格式 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| preload | Function | - | 否 | 接口调用预取数据回调函数 |

### method 合法值

| 值 | 说明 |
|----|------|
| GET | HTTP 请求 GET |
| POST | HTTP 请求 POST |
| PUT | HTTP 请求 PUT（仅 iOS 支持） |
| DELETE | HTTP 请求 DELETE（仅 iOS 支持） |

### dataType 合法值

| 值 | 说明 |
|----|------|
| JSON | 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse |
| 其他 | 不对返回的内容进行 JSON.parse |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| data | String | 开发者服务器返回的数据 |
| statusCode | Number | 开发者服务器返回的 HTTP 状态码 |
| header | Object | 响应头 |

### preload 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| data | String | 开发者服务器返回的数据 |
| statusCode | Number | 预取数据状态码 |
| errMsg | String | 预取成功或失败的详细信息 |

## 使用示例

```javascript
ma.request({
  url: 'http://example/testUrl',
  method: 'GET',
  data: {},
  header: {
    'content-type': 'application/json'
  },
  timeout: 5000,
  dataType: 'JSON',
  success: function(res) {
    console.log('请求成功:', res.data);
  },
  fail: function(res) {
    console.log('请求失败:', res.errMsg);
  },
  preload: function(res) {
    console.log('预取数据:', res.data);
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- url 必须为有效的 HTTPS URL
- data 不能为 Function 类型
- 默认 Content-Type 为 application/json

## Tips

1. 目前不会进行安全域的校验，建议优先使用 https
2. https 没有做证书校验，需要在 MacleEventHandler 接口实现里提供证书校验能力
