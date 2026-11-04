# ma.reportPerformance

开发者自定义指标上报接口。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| reportEvent | String | - | 是 | 性能指标事件的值，预置的值和自定义的值 |
| reportParams | Object | - | 是 | 开发者自定义性能指标 |

## 使用示例

```javascript
ma.reportPerformance({
  reportEvent: 'testEvent',
  reportParams: {
    customPerformance: 'error'
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- reportEvent 和 reportParams 为必填参数
- reportEvent 必须为字符串
- reportParams 必须为对象
- 使用此接口需要对接小程序 saas 平台

## 预定义的性能指标

### Ma9073001 — 小程序启动耗时

```json
{
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "startupTime": 100,
  "eventTime": "2024-01-01 00:00:00"
}
```

### Ma9073002 — 小程序网络请求

```json
{
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "requestDuration": 200,
  "requestTime": "2024-01-01 00:00:00",
  "eventTime": "2024-01-01 00:00:00",
  "requestType": "request",
  "requestPage": "pages/index/index",
  "requestUrl": "https://example.com/api",
  "requestResultCode": 200,
  "requestResultDesc": "success"
}
```

### Ma9073003 — 页面加载耗时

```json
{
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "loadingEndTime": "2024-01-01 00:00:00",
  "eventTime": "2024-01-01 00:00:00",
  "requestPage": "pages/index/index",
  "pageLoadingTime": 300
}
```

### Ma9073004 — JS 错误日志

```json
{
  "logType": "jsErrorMsg",
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "logs": [
    "1999.03.07 10:00:00|errMsg1",
    "1999.03.07 10:00:01|errMsg2"
  ]
}
```

### Ma9073005 — 开发者自定义日志

```json
{
  "logType": "developerLog",
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "logs": [
    "1999.03.07 10:00:00|errMsg1"
  ]
}
```
