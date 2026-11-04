# ma.postMessage

内嵌 H5 发送消息给 webview。

## 最低版本

25.12.0

## 参数说明

| 参数名     | 类型  | 必填  | 说明       |
|---------|-----|-----|----------|
| message | any | 是   | 要发送的消息内容 |

## 使用示例

```javascript
ma.postMessage({ action: 'refresh' });
```

## 使用限制

- 最低支持版本：25.12.0
- message 为必填参数