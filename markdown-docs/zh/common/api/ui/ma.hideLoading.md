# ma.hideLoading

隐藏正在显示的加载提示框。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
// 直接调用
ma.hideLoading();

// 带回调
ma.hideLoading({
  success: function(res) {
    console.log('隐藏成功', res);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
