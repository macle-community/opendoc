## FileSystemManager.exists(Object object)

> Checks whether a file or folder exists (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                                |
|:---------|:---------|:-------|:---|:------------------------------------------------------------------|
| path     | String   |        | Yes  | The path to check (local path; relative directories are allowed under the usr directory, but the final real path must not be outside usr; **checking temporary and cache path files is allowed**) |
| success  | Function |        | No  | Callback function for a successful API call                                                       |
| fail     | Function |        | No  | Callback function for a failed API call                                                       |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                                          |

#### success Callback Function

##### Object res

| Attribute | Type    | Description                                    |
|:------|:--------|:--------------------------------------|
| exist | Boolean | Whether it exists                                  |
| type  | String  | Whether it is a file type (**file**) or a folder type (**directory**) |

### Sample Code
```js
let fs = ma.getFileSystemManager();

fs.readdir({
  path: `path`,
  success(res) {
    console.log(res.exists);
    console.log(res.type);
  },
  fail(err){
    console.log(err);
  }
});
```

