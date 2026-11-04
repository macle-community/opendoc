## FileSystemManager.unlink(Object object)

> Deletes a file (**does not support deleting folders**) (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                                       |
|:---------|:---------|:-------|:---|:-------------------------------------------------------------------------|
| filePath | String   |        | Yes  | The file path to delete (local path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **deleting temporary and cache path files is not allowed**) |
| success  | Function |        | No  | Callback function for a successful API call                                                              |
| fail     | Function |        | No  | Callback function for a failed API call                                                              |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                                                 |


### Sample Code
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

1. The value of filePath must satisfy that every level in the path is a folder; otherwise the API will return an error message: **no such file or directory ${filePath}**
