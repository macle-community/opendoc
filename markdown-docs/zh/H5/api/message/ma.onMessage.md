# ma.onMessage

H5 小程序监听来自父页面的消息。

## 最低版本

25.12.0

## 参数说明

| 参数名      | 类型       | 必填  | 说明     |
|----------|----------|-----|--------|
| callback | Function | 是   | 消息回调函数 |

## 使用示例

```javascript
ma.onMessage(function(data) {
  console.log('收到消息:', data);
});
```

## 使用限制

- 最低支持版本：25.12.0