## FileSystemManager.copyFile(Object object)

> 复制文件（**不支持复制文件夹**,**目标路径为文件**,**若目标文件已经存在，则复制会覆盖已有目标文件**）（最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                                 |
|:---------|:---------|:----|:---|:-------------------------------------------------------------------|
| srcPath  | String   |     | 是  | 源文件路径 (本地路径，允许在usr目录下可以是相对目录，但最终的真实路径不能在usr之外；**允许复制临时路径和缓存路径文件**) |
| destPath | String   |     | 是  | 目标路径 (本地路径，只允许在usr目录下，可以是相对目录，但最终的真实路径不能在usr之外；**不允许是临时路径和缓存路径**)  |
| success  | Function |     | 否  | 接口调用成功的回调函数                                                        |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                                        |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                           |

### 示例代码
```js
let fs = ma.getFileSystemManager();

fs.copyFile({
  srcPath: `${ma.env.USER_DATA_PATH}/resourceFile.txt`,
  destPath: `${ma.env.USER_DATA_PATH}/targetFile.txt`,
  success: (res) => {
    console.log(res);
  },
  fail: (err) => {
    console.log(err);
  }
});
```

### Tips

1. 复制的新文件名最大长度为255，过长的文件名称会导致API调用失败
2. 文件大小的上限为10MB
