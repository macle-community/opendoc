# ma.getStorageInfo

异步获取当前 storage 的相关信息。

> **注：** H5 当前版本未实现该功能。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | getStorageInfo: ok |
| keys | Array | 当前 storage 中的所有 key |
| currentSize | Number | 当前已占用空间大小，单位 KB |
| limitSize | Number | 空间大小上限，单位 KB |

## 使用示例

```javascript
ma.getStorageInfo({
  success(res) {
    console.log('所有 key:', res.keys);
    console.log('当前大小:', res.currentSize, 'KB');
    console.log('空间上限:', res.limitSize, 'KB');
  }
});
```
