# ma.submitReport

开发者直接触发日志上报。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.submitReport({
  success() {
    console.log('提交成功');
  },
  fail(err) {
    console.log('提交失败:', err);
  },
  complete(res) {
    console.log('完成:', res);
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- 使用此接口需要对接小程序 saas 平台
