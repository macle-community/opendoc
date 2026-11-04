## ma.offGyroscopeChange(function callback)

> 取消监听陀螺仪数据变化事件。

### 参数

#### function callback

陀螺仪数据变化事件的回调函数

### 示例代码
```js
function listener(res) {
  console.log(res);
};

ma.offGyroscopeChange(listener);
```
