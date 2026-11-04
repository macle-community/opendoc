## ma.getSavedFileInfo(Object object)

> Gets the file information of a local file. This API can only be used to get files already saved locally; if you need to get temporary file information, please use the ma.getFileInfo() API.

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:-------------------------|
| filePath | String   |        | Yes  | File path (local path)              |
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call              |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

##### object.success Callback Function

##### Parameters

##### Object res

| Attribute   | Type   | Description                                      |
|:-----------|:-------|:----------------------------------------|
| errMsg     | String | getSavedFileInfo: ok                    |
| size       | Number | File size, in Bytes                            |
| createTime | Number | The timestamp when the file was saved, the number of seconds from 1970/01/01 08:00:00 to that moment |

### Sample Code

```js
ma.getSavedFileInfo({
  filePath: 'filePath',
  success(res) {
    console.log(res.size);
    console.log(res.createTime);
  }
});
```

### Tips

1. Supports being called via `FileSystemManager`
