## ma.authorize(Object object)

> 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](AUTHORITY)。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                     |
|:---------|:---------|:----|:---|:---------------------------------------|
| scope    | String   |     | 是  | 需要获取权限的 scope，详见 [scope 列表](AUTHORITY) |
| success  | Function |     | 否  | 接口调用成功的回调函数                            |
| fail     | Function |     | 否  | 接口调用失败的回调函数                            |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）               |

### 示例代码

```js
// 可以通过 ma.getSetting 先查询一下用户是否授权了 "scope.location" 这个 scope
ma.getSetting({
  success(res) {
    if (!res.authSetting['scope.location']) {
      ma.authorize({
        scope: 'scope.location',
        success () {
          // 用户已经同意小程序使用位置信息，后续调用 ma.getLocation 接口不会弹窗询问
          ma.getLocation()
        }
      })
    }
  }
})
```
