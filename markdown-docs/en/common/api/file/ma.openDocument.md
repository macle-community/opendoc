# ma.openDocument

Opens and previews various types of document files.

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| filePath | String | - | Yes | File path (local path), can be obtained via downloadFile |
| fileType | String | - | No | File type, specifies the file type to open the file |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### fileType Valid Values

| Valid Value | Description |
|--------|------|
| doc | doc format |
| docx | docx format |
| xls | xls format |
| xlsx | xlsx format |
| ppt | ppt format |
| pptx | pptx format |
| pdf | pdf format |

## Usage Example

```javascript
// Used with downloadFile
ma.downloadFile({
  url: 'http://example.com/somefile.pdf',
  success: function (res) {
    const filePath = res.tempFilePath;
    ma.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('Document opened successfully');
      },
      fail: function (err) {
        console.log('Failed to open:', err);
      }
    });
  }
});
```

## Usage Restrictions

- filePath is a required parameter
