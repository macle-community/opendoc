# ma.getBackgroundFetchData

获取数据预拉取缓存的所有数据。

## 最低版本

23.12.0

## 参数说明

| 参数名       | 类型       | 必填  | 说明    |
|-----------|----------|-----|-------|
| fetchType | string   | 是   | 预拉取类型 |
| success   | Function | 否   | 成功回调  |
| fail      | Function | 否   | 失败回调  |
| complete  | Function | 否   | 完成回调  |

## 回调参数

| 参数名           | 类型     | 说明           |
|---------------|--------|--------------|
| data          | Array  | 预拉取数据列表   |
| fetchedData   | string | 预拉取的数据内容  |
| timeStamp     | number | 时间戳         |
| path          | string | 页面路径       |
| query         | Object | 页面参数       |

## 使用示例

```javascript
ma.getBackgroundFetchData({
  fetchType: 'pre',
  success(res) {
    console.log(res.data[i].fetchedData);
    console.log(res.data[i].timeStamp);
    console.log(res.data[i].path);
    console.log(res.data[i].query);
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- fetchType 为必填参数