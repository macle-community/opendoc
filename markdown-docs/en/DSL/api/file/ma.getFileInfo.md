## ma.getFileInfo(Object object)

> Gets file information

### Parameters

#### Object object

| Attribute        | Type     | Default  | Required | Description                                              |
|:----------------|:---------|:---------|:---|:-------------------------|
| filePath        | String   |          | Yes  | Local file path (local path)            |
| digestAlgorithm | String   | 'sha256' | No  | Algorithm for computing the file digest                |
| success         | Function |          | No  | Callback function for a successful API call              |
| fail            | Function |          | No  | Callback function for a failed API call              |
| complete        | Function |          | No  | Callback function for the end of the API call (executed on both success and failure) |

##### object.digestAlgorithm

| Valid Value | Description                          |
|--------|-----------------------------|
| sha256 | sha256 algorithm (default)              |
| md5    | md5 algorithm; this encryption algorithm is insecure, sha256 is recommended  |
| sha1   | sha1 algorithm; this encryption algorithm is insecure, sha256 is recommended |

##### object.success Callback Function

##### Parameters

##### Object res

| Attribute | Type   | Description                               |
|:-------|:-------|:---------------------------------|
| errMsg | String | getFileInfo: ok                  |
| size   | Number | File size, in bytes                      |
| digest | String | The file digest computed according to the passed-in digestAlgorithm |

### Sample Code

```js
ma.getFileInfo({
  filePath: 'filePath',
  success(res) {
    console.log(res.size);
    console.log(res.digest);
  }
});
```

### Tips

1. Supports being called via `FileSystemManager`
