## FileSystemManager.moveFile(Object object)

> 移动文件（**不支持移动文件夹**,**目标路径为目录**,**若目标路径目录中已经存在同名的文件，则无法移动**）（最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                                    |
|:---------|:---------|:----|:---|:----------------------------------------------------------------------|
| srcPath  | String   |     | 是  | 源文件路径 (本地路径，只允许在usr目录下，可以是相对目录，但最终的真实路径不能在usr之外；**不允许移动临时路径和缓存路径文件**) |
| destPath | String   |     | 是  | 目标目录路径 (本地路径，只允许在usr目录下，可以是相对目录，但最终的真实路径不能在usr之外；**不允许是临时路径和缓存路径**)   |
| success  | Function |     | 否  | 接口调用成功的回调函数                                                           |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                                           |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                              |

### 示例代码
```js
let fs = ma.getFileSystemManager();

fs.moveFile({
  srcPath: `resourcePath`,
  destPath: `targetPath`,
  success(res) {
    console.log(res);
  },
  fail(err){
    console.log(err);
  }
});
```

### Tips

1. 如果目标路径已经存在同名文件，文件将无法移动
