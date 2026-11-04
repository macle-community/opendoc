# ma.uploadFile

Uploads a local resource to the server. The client initiates an HTTPS POST request where `content-type` is `multipart/form-data`.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| url | String | - | Yes | Developer server address |
| filePath | String | - | No | Path of the file resource to upload (local path); choose one of files/filePath |
| files | Array | - | No | List of files to upload; when files is used, filePath and name do not take effect |
| name | String | - | Yes | The key corresponding to the file; developers can obtain the binary content of the file via this key on the server side |
| header | Object | - | No | HTTP request Header; Referer cannot be set in the header |
| formData | Object | - | No | Other additional form data in the HTTP request |
| timeout | Number | 60000 | No | Timeout duration, in milliseconds |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### files Parameter Description

| Parameter | Type | Required | Description |
|------|------|------|------|
| name | String | No | Form item name, default is file |
| file | File | No | File object to upload |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | uploadFile:ok |
| data | String | Data returned by the developer's server |
| statusCode | Number | HTTP status code returned by the developer's server |

## Usage Example

```javascript
// Upload after selecting an image from the album
ma.chooseImage({
  success(res) {
    const tempFilePaths = res.tempFilePaths;
    ma.uploadFile({
      url: 'https://example.test.com/upload',
      filePath: tempFilePaths[0],
      name: 'file',
      success(res) {
        console.log('Upload succeeded:', res);
      },
      fail(err) {
        console.log('Upload failed:', err);
      }
    });
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- url is a required parameter
- Either filePath or files must be provided
- If filePath is used, name is required

## Tips

1. Currently, no security domain validation is performed; using https is recommended
2. When both files and filePath are specified, files takes higher priority
3. Although there is no limit on the size and number of files to upload, uploading too many or too large files is not recommended for performance reasons
