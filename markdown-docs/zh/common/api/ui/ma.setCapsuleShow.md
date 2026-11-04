# ma.setCapsuleShow

设置是否隐藏胶囊按钮。

## 最低版本

25.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| isShow | Boolean | true | 否 | 是否显示胶囊（false 不显示，true 显示） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.setCapsuleShow({
  isShow: false,  // 隐藏胶囊
  success(res) {
    console.log('设置成功', res);
  },
  fail(res) {
    console.log('设置失败', res);
  }
});
```

## 使用限制

- 最低支持版本：25.3.0
- isShow 为必填参数（false 不显示，true 显示）
