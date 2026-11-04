## FileSystemManager.writeFile(Object object)

> Writes a file. If any directory in the path does not exist, the write fails; if the file exists, its content will be overwritten; if the file does not exist, a new file will be created and then the content written (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type                 | Default | Required | Description                                                                       |
|:---------|:-------------------|:-----|:---|:-------------------------------------------------------------------------|
| filePath | String             |      | Yes  | The file path to write (local user path; only allowed under the usr directory, can be a relative directory, but the final real path must not be outside usr; **temporary and cache paths are not allowed**) |
| data     | String/ArrayBuffer |      | Yes  | The text or binary data to write, can be empty                                                        |
| success  | Function           |      | No  | Callback function for a successful API call                                                              |
| fail     | Function           |      | No  | Callback function for a failed API call                                                              |
| complete | Function           |      | No  | Callback function for the end of the API call (executed on both success and failure)                                                 |
| encoding | String             | utf8 | No  | Specifies the character encoding for writing the file                                                              |

##### encoding

| Valid Value | Description                                                                                                                                       |
|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| ascii    |                                                                                                                                          |
| base64   | Note: when choosing base64 encoding, data only needs to pass the base64 content itself; do not pass the Data URI prefix, otherwise a fail base64 encode error will be reported. For example, pass aGVsbG8= instead of data:image/png;base64,aGVsbG8= |
| ucs2     | Read in little-endian order                                                                                                                                   |
| ucs-2    | Read in little-endian order                                                                                                                                   |
| utf16le  | Read in little-endian order                                                                                                                                   |
| utf-16le | Read in little-endian order                                                                                                                                   |
| utf-8    |                                                                                                                                          |
| utf8     | Default value                                                                                                                                      |
| latin1   |                                                                                                                                          |


### Sample Code
```js
let fs = ma.getFileSystemManager();
fs.writeFile({
  filePath: `${ma.env.USER_DATA_PATH}/test.txt`,
  data: 'data',
  success(res) {
    console.log(res);
  },
  fail(err) {
    console.log(err);
  }
});
```

### Tips

1. The maximum length of the written file name is 255; an excessively long file name will cause the API call to fail
2. The upper limit of file size is 10MB
