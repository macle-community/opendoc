# ma.removeCustomEvent

移除已设置的小程序自定义事件监听。

## 最低版本

25.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| eventName | String | - | 是 | 自定义事件名称（事件名称不能为空字符串） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | removeCustomEvent: ok |

## 使用示例

```javascript
ma.removeCustomEvent({
  eventName: 'lockScreen',
  success: (res) => {
    console.log('移除成功', res);
  },
  fail: (err) => {
    console.log('移除失败', err);
  }
});
```

## 使用限制

- 最低支持版本：25.12.0
- eventName 为必填参数，不能为空

## Tips

1. 自定义事件 API 不会影响到小程序已有基础事件
