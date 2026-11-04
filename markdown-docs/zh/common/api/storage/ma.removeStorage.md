# ma.removeStorage

从本地缓存中移除指定 key。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| key | String | - | 是 | 本地缓存中指定的 key |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.removeStorage({
  key: 'userInfo',
  success(res) {
    console.log('移除成功', res);
  }
});
```

## 使用限制

- key 为必填参数
