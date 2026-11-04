# ma.chooseContact

拉起手机通讯录，选择联系人。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| phoneNumber | String | 手机号 |
| displayName | String | 联系人姓名 |

## 使用示例

```javascript
ma.chooseContact({
  success(res) {
    console.log('联系人姓名:', res.displayName);
    console.log('手机号:', res.phoneNumber);
  },
  fail(err) {
    console.log('选择失败:', err);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- 需要应用授权联系人权限
