## ma.saveFile(Object object)

> Saves a file to local. Note: **saveFile moves the temporary file, so the passed-in tempFilePath will no longer be available after a successful call**

### Parameters

#### Object object

| Attribute    | Type     | Default | Required | Description                                              |
|:-------------|:---------|:-------|:---|:-------------------------|
| tempFilePath | String   |        | Yes  | The temporary path of the file to save (local path)      |
| success      | Function |        | No  | Callback function for a successful API call              |
| fail         | Function |        | No  | Callback function for a failed API call              |
| complete     | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

##### object.success Callback Function

##### Parameters

##### Object res

| Attribute      | Type   | Description              |
|:--------------|:-------|:----------------|
| errMsg        | String | saveFile: ok    |
| savedFilePath | String | The stored file path (local path) |

### Sample Code

```js
ma.chooseImage({
  success: function (res) {
    const tempFilePaths = res.tempFilePaths;
    ma.saveFile({
      tempFilePath: tempFilePaths[0],
      success(res) {
        const savedFilePath = res.savedFilePath;
      }
    });
  }
});
```

### Tips

1. Supports being called via `FileSystemManager`
