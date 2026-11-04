## DownloadTask.onProgressUpdate(function listener)

> 监听下载进度变化事件（最低版本：23.6.0）

### 参数

#### function listener

下载进度变化事件的监听函数

##### 参数

##### Object res

| 属性                        | 类型     | 说明                    |
|:--------------------------|:-------|:----------------------|
| progress                  | Number | 下载进度百分比               |
| totalBytesWritten         | Number | 已经下载的数据长度，单位 Bytes    |
| totalBytesExpectedToWrite | Number | 预期需要下载的数据总长度，单位 Bytes |

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
```

