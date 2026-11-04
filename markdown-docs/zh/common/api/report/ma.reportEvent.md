# ma.reportEvent

事件上报。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| eventId | String | - | 是 | 监控 ID，在小程序管理平台新建数据指标后获得 |
| eventData | Object | - | 否 | 可被 JSON.stringify 的对象，将一起上报至系统（24.9.0 支持） |

## 使用示例

```javascript
ma.reportEvent({
  eventId: 'button_click',
  eventData: {
    buttonId: 'submit',
    pageName: 'home'
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- eventId 为必填参数
- eventData 的值只能为字符串或数字类型
- 使用此接口需要对接小程序 saas 平台
