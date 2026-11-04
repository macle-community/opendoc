## EventChannel.once(string eventName,function fn)

> 监听一个事件一次，触发后失效

### 参数

#### string eventName

事件名称

### function fn

事件监听函数

#### 参数

##### any args

触发事件参数

### 示例代码

```js
Page({
  onLoad() {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.once('MacleA', data => {
      console.log(data);
    });
  }
});
```