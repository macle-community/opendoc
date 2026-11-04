## ma.onMemoryWarning(function callback)

> Listens for the memory warning event.

Triggered when iOS/Android sends a memory warning to the mini program process. Triggering this event does not mean the mini program will be killed; in most cases it is only a warning. After receiving the notification, developers can reclaim some unnecessary resources to avoid further aggravating memory strain.

### Parameters

#### function callback

Callback function for the memory warning event

### Sample Code
```js
ma.onMemoryWarning(function (res) {
  console.log('Memory low!');
})
```
