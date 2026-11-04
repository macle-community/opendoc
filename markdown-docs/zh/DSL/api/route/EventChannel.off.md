## EventChannel.off(string eventName,function fn)

> 取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数

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
    const sampleEvent = (data) => {
      console.log(data);
    }
    eventChannel.on('MacleA', sampleEvent);
    eventChannel.off('MacleA', sampleEvent);
  }
});
```