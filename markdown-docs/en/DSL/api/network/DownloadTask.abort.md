## DownloadTask.abort()

> Abort the download task (minimum version: 23.6.0)



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

downloadTask.abort() // Cancel the download task
```

