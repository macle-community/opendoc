## 数据预拉取

> 小程序冷启动时提前发起请求，**并缓存请求内容**，在真实请求时使用缓存数据，减少网络请求的时间。

### 简介

通常来说，小程序获取网络数据是在首页 page 加载后使用 ma.request 来实现的。在运行时，小程序开发者可以对用户可能触发的下一步流程去进行数据的提前获取。小程序数据预取的主要功能是在启动前，提前按照小程序配置好的规则发起网络请求并缓存，在小程序启动后直接使用缓存数据，来避免因为等待网络数据返回而展示的 loading 或页面展示不全的情况

### 使用流程

### 配置预取规则

在小程序项目根目录创建 preload.fetch，填写预加载配置。

![示例图](STORAGE_PRELOAD)

### preload.fetch 配置

**注意：** 实际的配置文件不支持注释，下面文件中的注释部分只是为了更好说明每个字段的作用，请在拷贝的时候从配置文件中删除。

| 属性        | 类型     | 必填 | 说明                | 默认值 |
|-----------|--------|----|:------------------|-----|
| fetchType | String | 否  | 缓存数据类型，固定值为 `pre` | pre |
| params    | Object | 是  | 解析配置的请求           |     |

```json
// preload.fetch
[
  {
    "fetchType": "pre", // 数据预拉取，固定为pre
    "params": {
      "url": "https:*****", // 请求的 URL 地址
      "method": "POST", // http method，支持 GET/POST。
      "data": { "foo": "bar" },
      "timeout": 60000,
      "header": {
        // 可选。额外的 header 信息
        "content-type": "application/x-www-form-urlencoded"
      }
    }
  }
]
```

（目前 preload.fetch 限定只取<font color="red">**前 10 条**</font> 数据）

### params 配置说明

| 属性      | 类型     | 必填 | 说明                                                                               |
|---------|--------|----|:---------------------------------------------------------------------------------|
| url     | String | 是  | 开发者服务器接口地址，支持变量 ${token}，通过 storage 获取 token                                     |
| header  | Object | 否  | 设置请求的 header，header 中不能设置 **Referer**。content-type 默认为 **application/json**，支持变量 |
| timeout | Number | 否  | 超时时间，单位为毫秒                                                                       |
| method  | String | 否  | HTTP 请求方法，支持 Get 和 Post                                                          |
| data    | Object | 否  | 请求的参数，支持变量                                                                       |

### 获取预取数据

#### ma.request 获取预取数据

当 preload.fetch 中 `fetchType` 参数值为 `pre` 时，调用 ma.request 返回预取数据

ma.request 新增 `preload` 回调，返回预取数据

如果正常请求到来时，对应预取请求还没有执行完，`preload` 返回上一次预取数据

(首次启动小程序，如果预取未完成，返回为空)

##### preload 返回值

| 属性         | 类型     | 说明           |
|------------|--------|--------------|
| data       | String | 开发者服务器返回的数据  |
| statusCode | Number | 预取数据状态码      |
| errMsg     | String | 预取成功或失败的详细信息 |

### 示例代码

```js
// 当 preload.fetch 中 fetchType 参数值为 pre 时获取预取数据
ma.request({
"method":"GET",
 "url":"https:*****",
 "header":{
   "content-type":"application/json"
 },
 "data":{
   "token":"xxxxxxx",
   },
 timeout:"60000"，
 success(res){},
 fail(res){},
 preload(res){ // 返回预取数据
	console.log(res.data)
 }
})
```

#### ma.getBackgroundFetchData 获取预取数据

调用 [ma.getBackgroundFetchData](GET_BACKGROUND_FETCH_DATA)  可获取数据预拉取缓存的所有数据

### Bug & Tip

- 每次小程序启动时会重新进行预取更新缓存
- 在小程序每次更新时会清空缓存避免缓存过大
- 每条缓存数据最大为 1M
