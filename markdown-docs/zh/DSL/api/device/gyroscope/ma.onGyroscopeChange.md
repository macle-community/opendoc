## ma.onGyroscopeChange(function callback)

> 监听陀螺仪数据变化事件。

### 参数

#### function callback

陀螺仪数据变化事件的回调函数

### 示例代码
```html
<view>
    <button size="default" type="primary" bindtap="start">开始监听</button>
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
