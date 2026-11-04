## DownloadTask

> An object that can listen to download progress change events and cancel download tasks (minimum version: 23.6.0)

### Methods

#### [DownloadTask.abort()](DOWNLOAD_ABORT)

Abort the download task

#### [DownloadTask.onProgressUpdate(function listener)](DOWNLOAD_ON_PROGRESS_UPDATE)

Listen for download progress change events

#### [DownloadTask.offProgressUpdate(function listener)](DOWNLOAD_OFF_PROGRESS_UPDATE)

Remove the listener function for download progress change events

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

downloadTask.abort() // Cancel the download task
```

