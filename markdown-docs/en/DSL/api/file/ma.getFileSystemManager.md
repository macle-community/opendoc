## ma.getFileSystemManager()

> Gets the globally unique file manager (minimum version: 23.6.0)


### Return Value

 [FileSystemManager](FILE_MANAGER)

File manager

### Sample Code
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
