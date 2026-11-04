# ma.getStorage

从本地缓存中异步获取指定 key 的内容。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| key | String | - | 是 | 本地缓存中指定的 key |
| encrypt | Boolean | false | 否 | 是否开启加密存储（23.12.0 版本新增参数） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | getStorage: ok |
| data | Any | key 对应的内容 |

## 使用示例

```javascript
ma.getStorage({
  key: 'userInfo',
  encrypt: false,
  success: function(res) {
    console.log('获取到的数据:', res.data);
  }
});
```

## 使用限制

- key 为必填参数

## Tips

1. 当前仅支持异步接口 getStorage 开启加密存储。开启后，将会对 data 使用 AES256 解密，接口回调耗时将会增加
2. 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
