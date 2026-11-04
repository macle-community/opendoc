## ma.removeSavedFile(Object object)

> Deletes a local cached file

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:-------------------------|
| filePath | String   |        | Yes  | The file path to delete (local path)         |
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call              |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
ma.getSavedFileList({
  success(res) {
    if (res.fileList.length > 0) {
      ma.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete(res) {
          console.log(res);
        }
      });
    }
  }
});
```

### Tips

1. Supports being called via `FileSystemManager`
