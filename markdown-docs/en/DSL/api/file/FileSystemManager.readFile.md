## FileSystemManager.readFile(Object object)

> Reads a file (minimum version: 23.6.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                                                                    |
|:---------|:---------|:-------|:---|:------------------------------------------------------------------------------------------------------|
| filePath | String   |        | Yes  | The file path to read (local path; relative directories are allowed under the usr directory, but the final real path must not be outside usr; **reading temporary and cache path files is allowed**)                                 |
| encoding | String   |        | No  | Specifies the character encoding for reading the file. If encoding is not passed, the file's binary content is read in ArrayBuffer format                                                 |
| position | Number   |        | No  | Starts reading from the specified file position. If not specified, reading starts from the beginning of the file. The read range should be a left-closed, right-open interval [position, position+length). Valid range: [0, fileLength - 1]. Unit: byte |
| length   | Number   |        | No  | Specifies the length of the file. If not specified, reads to the end of the file. Valid range: [1, fileLength]. Unit: byte                                                    |
| success  | Function |        | No  | Callback function for a successful API call                                                                                           |
| fail     | Function |        | No  | Callback function for a failed API call                                                                                           |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure)                                                                              |

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

##### success Callback Function

##### Object res

| Attribute | Type                 | Description                              |
|:-----|:-------------------|:--------------------------------|
| data | String/ArrayBuffer | File content (returns ArrayBuffer if encoding is not passed) |


### Sample Code
```js
let fs = ma.getFileSystemManager();

fs.readFile({
  filePath:  `${ma.env.USER_DATA_PATH}/testFile.txt`,
  encoding: 'utf8',
  success: res => {
    console.log(res);
  },
  fail(err) {
    console.log(err);
  }
});
```


### Tips

1. The size limit for reading a file is 10 MB
