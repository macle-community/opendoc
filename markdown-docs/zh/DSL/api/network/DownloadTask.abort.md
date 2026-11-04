## DownloadTask.abort()

> 中断下载任务（最低版本：23.6.0）



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

downloadTask.abort() // 取消下载任务
```

