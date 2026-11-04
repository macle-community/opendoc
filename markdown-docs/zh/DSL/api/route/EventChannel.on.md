## EventChannel.on(string eventName,function fn)

> 持续监听一个事件

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
ma.navigateTo({ 
    url: 'testUrl',
    success(res) {
      res.eventChannel.emit('MacleA', {
        data: 'hello World'
      });
    }
});

Page({
    onLoad() {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on('MacleA', data => {
        console.log(data); // { "data": "hello World" }
      });
    }
});
```
