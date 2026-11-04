# ma.getStatusBarHeight

获取系统状态栏的高度。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| statusBarHeight / xm_string_callback_key | number | 状态栏高度（H5 返回 `xm_string_callback_key`，DSL 返回 `statusBarHeight`） |

## 使用示例

```javascript
// Promise 方式
ma.getStatusBarHeight().then(res => {
  console.log(res.statusBarHeight || res.xm_string_callback_key);
});

// 回调方式
ma.getStatusBarHeight({
  success(res) {
    console.log(res.statusBarHeight || res.xm_string_callback_key);
  },
  fail(err) {
    console.log('获取失败:', err);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- 请注意 H5 与 DSL 接口的出参差异（H5 返回 `xm_string_callback_key`，DSL 返回 `statusBarHeight`）
