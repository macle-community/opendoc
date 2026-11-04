# ma.cancelAuthorize

取消用户的特定授权。

## 最低版本

24.9.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| scopes | Array | - | 是 | 要取消的授权范围数组 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | cancelAuthorize: ok |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | cancelAuthorize: fail, + 错误原因（无返回则为空） |

### 小程序对外提供权限集合列表

| 名称 | 含义 |
|------|------|
| scope.location | 精确地理位置 |
| scope.camera | 摄像头 |
| scope.photosAlbums | 读写相册 |
| scope.contacts | 联系人 |
| scope.record | 录音 |
| scope.gotoBrowser | 打开其他应用程序权限 |
| scope.bluetooth | 蓝牙权限 |
| scope.payment | 支付权限 |
| scope.video | 录像权限 |
| scope.storage | 文件权限 |
| scope.AUTH_BASE | 静默授权 |
| scope.AUTH_USER | 用户信息 |
| scope.SEND_MESSAGE | 发送信息 |
| scope.USER_NICKNAME | 用户昵称 |
| scope.USER_NAME | 用户名 |
| scope.USER_LOGIN_ID | 用户登录ID |
| scope.PLAINTEXT_USER_LOGIN_ID | 明文登录ID |
| scope.HASH_LOGIN_ID | 哈希登录ID |
| scope.USER_AVATAR | 用户头像 |
| scope.USER_GENDER | 用户性别 |
| scope.USER_BIRTHDAY | 用户生日 |
| scope.USER_NATIONALITY | 用户国籍 |
| scope.USER_CONTACTINFO | 用户联系人 |
| scope.USER_ADDRESS | 用户地址 |
| scope.PLAINTEXT_MOBILE_PHONE | 用户明文手机号码 |

## 使用示例

```javascript
ma.cancelAuthorize({
  scopes: ['scope.location'],
  success: () => {
    console.log('取消授权成功');
  },
  fail: (err) => {
    console.error('取消授权失败');
  }
});
```

## 使用限制

- 最低支持版本：24.9.0
- scopes 为必填参数
