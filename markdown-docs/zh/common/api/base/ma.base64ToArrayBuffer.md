# ma.base64ToArrayBuffer

将 Base64 字符串转换为 ArrayBuffer。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| base64String | string | - | 是 | Base64 字符串 |

## 返回值

ArrayBuffer - ArrayBuffer 对象

## 使用示例

```javascript
const base64 = 'CxYh';
const arrayBuffer = ma.base64ToArrayBuffer(base64);
console.log('转换后的 buffer:', arrayBuffer);
```

## 使用限制

- 最低支持版本：24.12.0
- base64String 必须为有效的 Base64 字符串
