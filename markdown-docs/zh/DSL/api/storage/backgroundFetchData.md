## ma.getBackgroundFetchData

> 获取数据预拉取缓存的所有数据，该 Api 会等待所有的预取请求完成之后（不使用上次数据），将所有的预取数据存放在一个 JsonArray 中返回给用户（最低版本：23.12.0）

### 参数

| 属性        | 类型       | 默认值 | 必填 | 说明                       |
|-----------|----------|-----|:---|--------------------------|
| fetchType | String   |     | 是  | 缓存数据类型，固定值为 `pre`        |
| success   | Function |     | 否  | 接口调用成功的回调函数              |
| fail      | Function |     | 否  | 接口调用失败的回调函数              |
| complete  | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |



#### success回调函数

##### 返回值

##### object

| 属性   | 类型    | 说明     |
|------|-------|--------|
| data | Array | 缓存数据集合 |

##### data

| 属性          | 类型     | 说明            |
|-------------|--------|---------------|
| fetchedData | String | 缓存数据          |
| timeStamp   | Number | 客户端拿到缓存数据的时间戳 |
| path        | String | 页面路径          |
| query       | String | 查询参数          |



### 示例代码

```js
// ma.getBackgroundFetchData api
ma.getBackgroundFetchData({
  fetchType: 'pre',
  success(res) {
    console.log(res.data[i].fetchedData); // 缓存数据
    console.log(res.data[i].timeStamp); // 客户端拿到缓存数据的时间戳
    console.log(res.data[i].path); // 页面路径
    console.log(res.data[i].query); // query 参数
  }
});
```



