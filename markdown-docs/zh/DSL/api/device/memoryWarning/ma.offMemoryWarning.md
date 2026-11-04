## ma.offMemoryWarning(function callback)

> 取消监听内存不足告警事件。

### 参数

#### function callback

内存不足告警事件的回调函数

### 示例代码
```js
const listener = (res) => {
  console.log('内存不足!');
}
ma.onMemoryWarning(listener);
ma.offMemoryWarning(listener);
```
