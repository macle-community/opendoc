## ma.compressImage(Object object)

> Compress image API, with optional compression quality

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                                                 |
|:---------|:---------|:----|:---|:---------------------------------------------------|
| src      | String   |     | Yes  | Image path. The path of the image; supports local paths and code package paths (the simulator only supports code package paths; note that code package paths are case-sensitive) |
| quality  | Number   | 80  | No  | Compression quality, range 0 to 100. The smaller the value, the lower the quality and the higher the compression rate (only effective for jpg).        |
| success  | Function |     | No  | Callback function for a successful API call                                        |
| fail     | Function |     | No  | Callback function for a failed API call                                        |
| complete | Function |     | No  | Callback function for the end of the API call (executed on both success and failure)                           |

##### object.success Callback Function

###### Parameters

###### Object res

| Attribute       | Type     | Description                  |
|:-------------|:-------|:--------------------|
| errMsg       | String | compressImage: ok   |
| tempFilePath | String | Temporary file path of the compressed image (local path) |

### Sample Code

```js
ma.compressImage({
  src: '', // Image path
  quality: 80 // Compression quality
});
```
