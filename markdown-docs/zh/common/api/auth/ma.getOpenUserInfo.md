# ma.getOpenUserInfo

获取用户公开信息。

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
| errMsg | String | getOpenUserInfo: ok |
| userInfo | Object | 用户公开信息对象 |

#### UserInfo 结构

| 属性 | 类型 | 说明 |
|------|------|------|
| nickName | String | 用户昵称 |
| avatarUrl | String | 用户头像图片URL |
| country | String | 用户国籍 |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | 错误信息 |
| errno | String | 错误码 |

## 使用示例

```javascript
ma.getOpenUserInfo({
  success(res) {
    console.log('用户昵称:', res.userInfo.nickName);
    console.log('头像:', res.userInfo.avatarUrl);
    console.log('国籍:', res.userInfo.country);
  },
  fail(err) {
    console.log('获取失败:', err.errMsg);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- 使用此接口需要对接小程序 saas 平台
- 使用此接口需要宿主应用实现并注入获取用户公开信息等相关功能
