# ma.miniProgram.postMessage

向小程序发送消息，会在小程序后退、组件销毁时触发 message 事件。

## 最低版本

25.12.0

## 参数说明

| 参数名      | 类型              | 必填  | 说明     |
|----------|-----------------|-----|--------|
| data     | string / Object | 是   | 要发送的数据 |
| success  | Function        | 否   | 成功回调   |
| fail     | Function        | 否   | 失败回调   |
| complete | Function        | 否   | 完成回调   |

## 使用示例

```javascript
ma.miniProgram.postMessage({
  data: { action: 'refresh', id: 123 },
  success: function() {
    console.log('消息发送成功');
  }
});
```

## 使用限制

- 最低支持版本：25.12.0
- data 为必填参数