## ma.onGyroscopeChange(function callback)

> Listens for the gyroscope data change event.

### Parameters

#### function callback

Callback function for the gyroscope data change event

### Sample Code
```html
<view>
    <button size="default" type="primary" bindtap="start">Start listening</button>
</view>
```

```js
Page({
  listener(res) {
    console.log(res);
  },
  start() {
    ma.startGyroscope({
      success: () => {
        ma.onGyroscopeChange(this.listener);
      }
    });
  }
});
```
