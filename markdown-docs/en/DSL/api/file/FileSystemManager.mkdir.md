## FileSystemManager.mkdir(Object object)

> Creates a directory (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute  | Type     | Default | Required | Description                                                                                                                                       |
|:----------|:---------|:------|:---|:-----------------------------------------------------------------------------------------------------------------------------------------|
| dirPath   | String   |       | Yes  | The path to check (local path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **temporary and cache paths are not allowed**)                                                                       |
| recursive | Boolean  | false | No  | Whether to recursively create the parent directories of the directory before creating the directory. If the corresponding parent directory already exists, that parent directory is not created. For example, if dirPath is a/b/c/d and recursive is true, it will create directory a, then create directory b under a, and so on until creating directory d under a/b/c. |
| success   | Function |       | No  | Callback function for a successful API call                                                                                                                              |
| fail      | Function |       | No  | Callback function for a failed API call                                                                                                                              |
| complete  | Function |       | No  | Callback function for the end of the API call (executed on both success and failure)                                                                                                                 |

### Sample Code
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

1. The maximum length of a directory name is 255; an excessively long directory name will cause the API call to fail
2. When creating a directory, ensure that all parent directories exist
3. An existing file or directory with the same name will also cause the creation to fail
