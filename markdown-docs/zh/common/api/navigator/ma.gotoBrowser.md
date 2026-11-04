# ma.gotoBrowser

跳转到第三方浏览器或应用。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| openUrl | String | - | 是 | 跳转第三方 Url（当前仅支持跳转已注册了 ACTION_VIEW 的 app） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
// 支持 Promise
ma.gotoBrowser({ openUrl: 'https://xxx.com' }).then(res => {
  console.log(res);
});

// 回调方式
ma.gotoBrowser({
  openUrl: 'https://xxx.com',
  success(res) {
    console.log('打开成功', res);
  },
  fail(err) {
    console.log('打开失败', err);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- openUrl 为必填参数，必须为字符串
