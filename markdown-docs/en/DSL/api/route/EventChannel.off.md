## EventChannel.off(string eventName,function fn)

> Cancels listening to an event. When the second parameter is given, only the given listener function is cancelled; otherwise all listener functions are cancelled

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