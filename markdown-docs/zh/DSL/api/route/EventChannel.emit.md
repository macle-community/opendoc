## EventChannel.emit(string eventName,any args)

> 触发一个事件

### 参数

#### string eventName

事件名称

#### any args

事件参数

### 示例代码

```js
ma.navigateTo({
  url: 'testUrl',
  success(res) {
    res.eventChannel.emit('MacleA', {
      data: 'hello Macle'
    });
  }
});

Page({
  onLoad() {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('MacleA', data => {
      console.log(data);
    });
  }
});
```