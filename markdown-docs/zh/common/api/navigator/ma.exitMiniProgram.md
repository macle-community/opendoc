# ma.exitMiniProgram

退出当前小程序。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| clearCache | Boolean | false | 否 | 是否清除缓存 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | exitMiniProgram: ok |

## 使用示例

```javascript
ma.exitMiniProgram({
  clearCache: false,
  success: (res) => {
    console.log('退出成功', res);
  },
  fail: (err) => {
    console.log('退出失败', err);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
