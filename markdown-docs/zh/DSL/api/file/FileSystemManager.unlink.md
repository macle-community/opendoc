## FileSystemManager.unlink(Object object)

> 删除文件（**不支持删除文件夹**）（最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                                       |
|:---------|:---------|:----|:---|:-------------------------------------------------------------------------|
| filePath | String   |     | 是  | 要删除的文件路径 (本地路径，只允许在usr目录下，可以是相对目录，但最终的真实路径不能在usr之外；**不允许删除临时路径和缓存路径文件**) |
| success  | Function |     | 否  | 接口调用成功的回调函数                                                              |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                                              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                                 |


### 示例代码
```js
const fs = ma.getFileSystemManager();
fs.unlink({
  filePath: `${ma.env.USER_DATA_PATH}/testFile.txt`,
  success(res) {
    console.log(res);
  },
  fail(res) {
    console.error(res);
  },
});
```

### Tips

1. filePath的值需满足 路径中每个层级均为文件夹，否则接口将返回异常信息 ：**no such file or directory ${filePath}**
