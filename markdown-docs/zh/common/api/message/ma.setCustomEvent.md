# ma.setCustomEvent

注册小程序自定义事件监听，在指定场景下触发回调。

## 最低版本

25.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| eventName | String | - | 是 | 自定义事件名称（事件名称不能为空字符串） |
| callback | Function | - | 是 | 自定义事件回调函数，满足回调场景可多次触发 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | setCustomEvent: ok |

## 使用示例

```javascript
ma.setCustomEvent({
  eventName: 'lockScreen',
  callback: (data) => {
    console.log('收到自定义事件:', data);
  },
  success: (res) => {
    console.log('注册成功', res);
  },
  fail: (err) => {
    console.log('注册失败', err);
  }
});
```

## 使用限制

- 最低支持版本：25.12.0
- eventName 和 callback 为必填参数
- 自定义事件需要宿主侧配合设计事件场景、事件名称
- 同一个事件名称只能注册一个回调函数，多次重复回调以最后一次注册时传入的 `callback` 为准

## Tips

1. 请注意，过量的设置监听事件会增加额外的内存资源消耗，请合理设置监听事件数量
2. 自定义事件无法覆盖小程序已有的基础事件，例如 `onAppShow`
