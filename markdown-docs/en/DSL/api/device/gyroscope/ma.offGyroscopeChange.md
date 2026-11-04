## ma.offGyroscopeChange(function callback)

> Unlistens from the gyroscope data change event.

### Parameters

#### function callback

Callback function for the gyroscope data change event

### Sample Code
```js
function listener(res) {
  console.log(res);
};

ma.offGyroscopeChange(listener);
```
