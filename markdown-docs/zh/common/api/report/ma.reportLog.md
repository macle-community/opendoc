# ma.reportLog

开发者自定义日志上报接口。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| level | String | info | 否 | 日志类型，支持 debug / info / error |
| log | Object / String | - | 是 | 日志内容，若 log 为 object，需 JSON 化 |

## 使用示例

```javascript
ma.reportLog({
  level: 'info',
  log: 'errMsg'
});
```

## 使用限制

- 最低支持版本：23.12.0
- log 为必填参数
- level 可选值：debug、info、error
- 使用此接口需要对接小程序 saas 平台
