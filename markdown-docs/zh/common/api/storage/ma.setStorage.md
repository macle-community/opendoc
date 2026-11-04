# ma.setStorage

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。

> 单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| key | String | - | 是 | 本地缓存中指定的 key |
| data | Any | - | 是 | 需要存储的内容。只支持原生类型、Date、及能够通过 JSON.stringify 序列化的对象 |
| encrypt | Boolean | false | 否 | 是否开启加密存储（23.12.0 版本新增参数） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.setStorage({
  key: 'userInfo',
  data: { name: '张三', age: 25 },
  encrypt: false,
  success: function() {
    console.log('存储成功');
  }
});
```

## 使用限制

- key 和 data 为必填参数

## Tips

1. 若未开启加密存储，涉及个人敏感数据请勿使用明文存储
2. 当前仅支持异步接口 setStorage 开启加密存储。开启后，将会对 data 使用 AES256 加密，接口回调耗时将会增加
3. 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true。由于加密后的数据会比原始数据膨胀 1.4 倍，因此开启 encrypt 的情况下，单个 key 允许存储的最大数据长度为 0.7MB，所有数据存储上限为 7.1MB
4. 支付宝小程序不支持 encrypt 参数
