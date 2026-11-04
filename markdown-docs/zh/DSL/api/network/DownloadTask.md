## DownloadTask

> 一个可以监听下载进度变化事件，以及取消下载任务的对象（最低版本：23.6.0）

### 方法

#### [DownloadTask.abort()](DOWNLOAD_ABORT)

中断下载任务

#### [DownloadTask.onProgressUpdate(function listener)](DOWNLOAD_ON_PROGRESS_UPDATE)

监听下载进度变化事件

#### [DownloadTask.offProgressUpdate(function listener)](DOWNLOAD_OFF_PROGRESS_UPDATE)

移除下载进度变化事件的监听函数

### 示例代码

```js
const downloadTask = ma.downloadFile({
  url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
  success (res) {
    ma.playVoice({
      filePath: res.tempFilePath
    })
  }
})

downloadTask.onProgressUpdate((res) => {
  console.log('下载进度', res.progress)
  console.log('已经下载的数据长度', res.totalBytesWritten)
  console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
})

downloadTask.abort() // 取消下载任务
```

