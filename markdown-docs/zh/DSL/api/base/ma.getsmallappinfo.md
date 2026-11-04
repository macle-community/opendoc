## ma.getsmallappinfo(Object object)

> 查询小程序的基本信息（最低版本：23.12.0）

### 参数

**Object object**

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### object.success 回调函数

**参数**

**Object res**

| 属性      | 类型     | 必填 | 说明     |
|:--------|:-------|:---|--------|
| appId   | String | 是  | 小程序 id |
| name    | String | 是  | 小程序名称  |
| appIcon | String | 是  | 小程序图标  |

### 示例代码

```js
ma.getsmallappinfo({
  success(res) {
    console.log(res.appId);
    console.log(res.name);
    console.log(res.appIcon);
  }
});
```
