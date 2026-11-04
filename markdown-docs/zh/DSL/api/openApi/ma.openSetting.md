## ma.openSetting(Object object)

> 调起客户端小程序设置界面，并返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的权限**。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### object.success 回调函数

##### 参数

###### Object res

| 属性          | 类型                       | 说明     |
|:------------|:-------------------------|:-------|
| authSetting | [AuthSetting](AUTHORITY) | 用户授权结果 |

### 示例代码

```js
ma.openSetting({
  success (res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```
