# ma.clearStorage

清空本地缓存中所有数据。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.clearStorage({
  success(res) {
    console.log('清空成功', res);
  },
  fail(err) {
    console.log('清空失败', err);
  }
});
```
