## EventChannel.once(string eventName,function fn)

> Listens to an event once, and becomes invalid after being triggered

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
    eventChannel.once('MacleA', data => {
      console.log(data);
    });
  }
});
```