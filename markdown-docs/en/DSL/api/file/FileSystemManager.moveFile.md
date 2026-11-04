## FileSystemManager.moveFile(Object object)

> Moves a file (**does not support moving folders**, **the destination path is a directory**, **if a file with the same name already exists in the destination directory, it cannot be moved**) (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                                    |
|:---------|:---------|:-------|:---|:----------------------------------------------------------------------|
| srcPath  | String   |        | Yes  | Source file path (local path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **moving temporary and cache path files is not allowed**) |
| destPath | String   |        | Yes  | Destination directory path (local path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **temporary and cache paths are not allowed**)   |
| success  | Function |        | No  | Callback function for a successful API call                                                           |
| fail     | Function |        | No  | Callback function for a failed API call                                                           |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                                              |

### Sample Code
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

1. If a file with the same name already exists at the destination path, the file cannot be moved
