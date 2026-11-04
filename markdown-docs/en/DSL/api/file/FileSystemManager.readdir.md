## FileSystemManager.readdir(Object object)

> Reads the list of files (including folders) within a directory (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                                    |
|:---------|:---------|:-------|:---|:----------------------------------------------------------------------|
| dirPath  | String   |        | Yes  | The directory path to read (local path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **temporary and cache paths cannot be read**) |
| success  | Function |        | No  | Callback function for a successful API call                                                           |
| fail     | Function |        | No  | Callback function for a failed API call                                                           |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                                              |


##### success Callback Function

##### Object res

| Attribute | Type    | Description                    |
|:------|:------|:----------------------|
| files | Array | Array of file names (including files and folders) under the specified directory |

### Sample Code
```js
let fs = ma.getFileSystemManager();

fs.readdir({
  dirPath: `${ma.env.USER_DATA_PATH}/testDir`,
  success(res) {
      console.log(res);
  },
  fail(err){
      console.log(err);
  }
});
```

### Tips

1. The value of dirPath must satisfy that every level in the path is a folder; otherwise the API will return an error message: **no such file or directory ${dirPath}**
