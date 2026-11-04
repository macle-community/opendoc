# ma.navigateToMiniProgram

小程序内跳转到其他小程序。

## 最低版本

23.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| appId | String | - | 是 | 要打开的小程序 appId |
| path | String | - | 否 | 打开的页面路径，如果为空则打开首页 |
| params | String | - | 否 | 跳转其他小程序时携带的参数，以 paramA=xxx&paramB=xxx 形式传参（仅支持 H5 小程序，最低版本 25.12.0） |
| capsuleShow | Boolean | true | 否 | 是否显示小程序胶囊按钮 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | 错误信息 |
| errno | String | 错误码 |

## 使用示例

```javascript
ma.navigateToMiniProgram({
  appId: 'targetAppId',
  capsuleShow: false,
  path: 'page/index/index',
  params: 'key=value',
  success: (res) => {
    console.log('跳转成功');
  },
  fail: (res) => {
    console.log('跳转失败:', res);
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- appId 为必填参数
- 如果传入 params，则必须传入 path
- 使用此接口需要对接小程序 saas 平台
- params 仅支持 H5 小程序，不支持 DSL 小程序

## Tips

1. 请注意，由于此 API 需要调用服务端接口查询和下载小程序，因此需要在调用 API 期间屏蔽用户操作，避免未知问题
2. 在小程序内部通过 navigateToMiniProgram 跳转的场景中，默认会查询最新版本小程序，不会存在升级体验的场景
