## DownloadTask.offProgressUpdate(function listener)

> Remove the listener function for download progress change events (minimum version: 23.6.0)



## Parameters

### function listener

The listener function passed to onProgressUpdate. If this parameter is not provided, all listener functions will be removed.

## Sample Code

```js
const listener = function (res) { console.log(res) }

DownloadTask.onProgressUpdate(listener)
DownloadTask.offProgressUpdate(listener) // Must pass in the same function object used when listening
```
