## ma.getSavedFileList(Object object)

> Gets the list of locally cached files saved under this mini program

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:-------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call              |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

##### object.success Callback Function

##### Parameters

##### Object res

| Attribute | Type   | Description                   |
|:---------|:-------|:---------------------|
| errMsg   | String | getSavedFileList: ok |
| fileList | Array  | File array, each item is a fileItem |

##### fileItem

| Structure Attribute | Type   | Description                                       |
|------------|--------|------------------------------------------|
| filePath   | String | File path (local path)                              |
| size       | Number | Local file size, in bytes                            |
| createTime | Number | The timestamp when the file was saved, the number of seconds from 1970/01/01 08:00:00 to the current time |

### Sample Code

```js
ma.getSavedFileList({
  success(res) {
    console.log(res.fileList);
  }
});
```

### Tips

1. Supports being called via `FileSystemManager`
