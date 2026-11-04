# ma.getStorageSync

同步从本地缓存中获取指定键名的数据。

## 最低版本

24.9.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| key | String | - | 是 | 本地缓存中指定的 key |

## 返回值

缓存的数据内容

## 使用示例

```javascript
try {
  const val = ma.getStorageSync('key');
  console.log('获取结果:', val);
} catch (e) {
  // 错误处理
}
```

## 使用限制

- 最低支持版本：24.9.0
- key 必须为字符串类型

## Tips

1. 安卓 `getStorageSync` 的传递数据最大 10K，如果超过 10K，请使用异步 API `getStorage`
