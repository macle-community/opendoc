## ma.offMemoryWarning(function callback)

> Unlistens from the memory warning event.

### Parameters

#### function callback

Callback function for the memory warning event

### Sample Code
```js
const listener = (res) => {
  console.log('Memory low!');
}
ma.onMemoryWarning(listener);
ma.offMemoryWarning(listener);
```
