# ma.deauthorize

取消用户授权。

## 最低版本

24.9.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | deauthorize: ok |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | deauthorize: fail, + 错误原因（无返回则为空） |

## 使用示例

```javascript
ma.deauthorize({
  success: () => {
    console.log('取消全部授权成功');
  },
  fail: (err) => {
    console.error('取消全部授权失败');
  }
});
```

## 使用限制

- 最低支持版本：24.9.0
