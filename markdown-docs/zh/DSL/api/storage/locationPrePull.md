## 地理位置预拉取

> 小程序首次获取地理位置（[ma.getLocation](GET_LOCATION)）通常比较耗时，小程序框架提供预拉取（预调用）机制将这一过程提前，帮助改进用户体验。

### 使用流程

### 配置预取规则

在小程序项目根目录创建 preload.fetch，填写预加载配置。

![示例图](STORAGE_PRELOAD)

### preload.fetch 配置

**注意：** 实际的配置文件不支持注释，下面文件中的注释部分只是为了更好说明每个字段的作用，请在拷贝的时候从配置文件中删除。

| 属性        | 类型     | 必填 | 说明                              | 默认值 |
|-----------|--------|----|:--------------------------------|-----|
| fetchType | String | 否  | 缓存数据类型，固定值为 **``getLocation``** | pre |

```json
// preload.fetch
[
  {
    "fetchType": "getLocation", // 地理位置预拉取，固定值为 getLocation
  }
]
```

（目前 preload.fetch 限定只取<font color="red">**前 10 条**</font> 数据）



### 获取预取数据

ma.getLocation 新增 **`useFetchData`** 参数区分数据是否为预取

配置 **`useFetchData:true`** 如果有预取数据，`success` 返回预取数据，如果没有则进行正常的地理位置请求

### 示例代码

```js
// 当 preload.fetch 中 fetchType 参数值为 getLocation 时获取预取数据
ma.getLocation({
  useFetchData: true,
  success(res) {
    console.log(res);
  }
});
```
