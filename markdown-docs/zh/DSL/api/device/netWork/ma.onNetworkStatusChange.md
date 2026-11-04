## ma.onNetworkStatusChange(function callback)

> 监听网络状态变化事件

### 参数

#### function callback

网络状态变化事件的回调函数

#### 参数

##### Object res

| 属性          | 类型      | 说明        |
|:------------|:--------|:----------|
| isConnected | Boolean | 当前是否有网络连接 |
| networkType | String  | 网络类型      |

### 示例代码

```js
ma.onNetworkStatusChange(function (res) {
  console.log(res.isConnected);
  console.log(res.networkType);
});
```
