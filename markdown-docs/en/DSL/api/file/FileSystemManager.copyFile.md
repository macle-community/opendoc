## FileSystemManager.copyFile(Object object)

> Copies a file (**does not support copying folders**, **the destination path is a file**, **if the destination file already exists, the copy will overwrite the existing destination file**) (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                                 |
|:---------|:---------|:-------|:---|:-------------------------------------------------------------------|
| srcPath  | String   |        | Yes  | Source file path (local path; relative directories are allowed under the usr directory, but the final real path must not be outside usr; **copying temporary and cache path files is allowed**) |
| destPath | String   |        | Yes  | Destination path (local path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **temporary and cache paths are not allowed**)  |
| success  | Function |        | No  | Callback function for a successful API call                                                        |
| fail     | Function |        | No  | Callback function for a failed API call                                                        |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                                           |

### Sample Code
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

1. The maximum length of the new copied file name is 255; an excessively long file name will cause the API call to fail
2. The upper limit of file size is 10MB
