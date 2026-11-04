## FileSystemManager.mkdir(Object object)

> 创建目录（最低版本：23.6.0）

### 参数

#### Object object

| 属性        | 类型       | 默认值   | 必填 | 说明                                                                                                                                       |
|:----------|:---------|:------|:---|:-----------------------------------------------------------------------------------------------------------------------------------------|
| dirPath   | String   |       | 是  | 要判断的路径 (本地路径，只允许在usr目录下，可以是相对目录，但最终的真实路径不能在usr之外；**不允许临时路径和缓存路径**)                                                                       |
| recursive | Boolean  | false | 否  | 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。 |
| success   | Function |       | 否  | 接口调用成功的回调函数                                                                                                                              |
| fail      | Function |       | 否  | 接口调用失败的回调函数                                                                                                                              |
| complete  | Function |       | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                                 |

### 示例代码
```js
let fs = ma.getFileSystemManager();

fs.mkdir({
  dirPath: `${ma.env.USER_DATA_PATH}/newDir`,
  success: function (res) {
    console.log(res);
  },
  fail: function (err) {
    console.log(err);
  }
});
```

### Tips

1. 目录名最大长度为255，过长的目录名称会导致API调用失败
2. 创建目录时需要保证上级目录均存在
3. 已有同名文件或者目录也将导致创建失败
