## ma.onMemoryWarning(function callback)

> 监听内存不足告警事件。

当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。

### 参数

#### function callback

内存不足告警事件的回调函数

### 示例代码
```js
ma.onMemoryWarning(function (res) {
  console.log('内存不足!');
})
```
