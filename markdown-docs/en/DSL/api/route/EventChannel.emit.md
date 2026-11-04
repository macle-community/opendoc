## EventChannel.emit(string eventName,any args)

> Triggers an event

### Parameters

#### string eventName

Event name

#### any args

Event parameters

### Sample code

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