## DownloadTask.offProgressUpdate(function listener)

> 移除下载进度变化事件的监听函数（最低版本：23.6.0）



## 参数

### function listener

onProgressUpdate 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码

```js
const listener = function (res) { console.log(res) }

DownloadTask.onProgressUpdate(listener)
DownloadTask.offProgressUpdate(listener) // 需传入与监听时同一个的函数对象
```