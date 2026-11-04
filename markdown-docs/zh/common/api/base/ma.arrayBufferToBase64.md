# ma.arrayBufferToBase64

将 ArrayBuffer 转换为 Base64 字符串。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| buffer | ArrayBuffer | - | 是 | ArrayBuffer 对象 |

## 返回值

string - Base64 字符串

## 使用示例

```javascript
const arrayBuffer = new Uint8Array([11, 22, 33]);
const base64 = ma.arrayBufferToBase64(arrayBuffer);
console.log('Base64 字符串:', base64);
```

## 使用限制

- 最低支持版本：24.12.0
