## EventChannel.on(string eventName,function fn)

> Continuously listens to an event

### Parameters

#### string eventName

Event name

### function fn

Event listener function

#### Parameters

##### any args

Triggered event parameters

### Sample code

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