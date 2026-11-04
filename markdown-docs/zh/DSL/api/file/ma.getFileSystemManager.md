## ma.getFileSystemManager()

> 获取全局唯一的文件管理器（最低版本：23.6.0）


### 返回值

 [FileSystemManager](FILE_MANAGER)

文件管理器

### 示例代码
```js
let fs = ma.getFileSystemManager();

fs.readFile({
  filePath: `${ma.env.USER_DATA_PATH}/testFile.txt`,
  encoding: "utf8",
  success: (res) => {
    console.log(res);
  }
});
```
