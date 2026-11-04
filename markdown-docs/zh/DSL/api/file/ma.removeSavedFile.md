## ma.removeSavedFile(Object object)

> 删除本地缓存文件

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| filePath | String   |     | 是  | 需要删除的文件路径 (本地路径)         |
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
ma.getSavedFileList({
  success(res) {
    if (res.fileList.length > 0) {
      ma.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete(res) {
          console.log(res);
        }
      });
    }
  }
});
```

### Tips

1. 支持通过 `FileSystemManager` 调用
