# ma.getClipboardData

获取系统剪贴板的内容。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| data | String | 剪贴板的内容 |

## 使用示例

```javascript
ma.getClipboardData({
  success(res) {
    console.log('剪贴板内容:', res.data);
  }
});
```

## 使用限制

- 最低支持版本：24.12.0
