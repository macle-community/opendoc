## DownloadTask.onProgressUpdate(function listener)

> Listen for download progress change events (minimum version: 23.6.0)

### Parameters

#### function listener

Listener function for download progress change events

##### Parameters

##### Object res

| Attribute                  | Type   | Description                    |
|:--------------------------|:-------|:----------------------|
| progress                  | Number | Download progress percentage               |
| totalBytesWritten         | Number | Length of data already downloaded, in Bytes    |
| totalBytesExpectedToWrite | Number | Expected total length of data to be downloaded, in Bytes |

### Sample Code

```js
const downloadTask = ma.downloadFile({
  url: 'http://example.com/audio/123', // For example only, not a real resource
  success (res) {
    ma.playVoice({
      filePath: res.tempFilePath
    })
  }
})

downloadTask.onProgressUpdate((res) => {
  console.log('Download progress', res.progress)
  console.log('Length of data already downloaded', res.totalBytesWritten)
  console.log('Expected total length of data to be downloaded', res.totalBytesExpectedToWrite)
})
```

