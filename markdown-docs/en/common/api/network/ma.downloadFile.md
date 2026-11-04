# ma.downloadFile

Downloads a file resource to local storage. The client directly initiates an HTTPS GET request and returns the local temporary path of the file.

> Note: Please specify a reasonable `Content-Type` field in the response header from the server to ensure the client correctly handles the file type.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| url | String | - | Yes | URL of the resource to download |
| header | Object | - | No | HTTP request Header; Referer cannot be set in the header |
| timeout | Number | 60000 | No | Timeout duration, in milliseconds |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | downloadFile: ok |
| tempFilePath | String | Temporary file path (local path) |
| statusCode | Number | HTTP status code returned by the developer's server (only a successful download enters the success callback, with status code 2XX) |

## Usage Example

```javascript
ma.downloadFile({
  url: 'https://example.com/audio/123',
  success(res) {
    if (res.statusCode === 200) {
      console.log('Download succeeded, file path:', res.tempFilePath);
      ma.playVoice({
        filePath: res.tempFilePath
      });
    }
  },
  fail(err) {
    console.log('Download failed:', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- url is a required parameter and must be a valid HTTPS URL

## Tips

1. Currently, no security domain validation is performed; using https is recommended.
