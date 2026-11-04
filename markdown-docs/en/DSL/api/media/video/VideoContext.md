## VideoContext

> VideoContext instance, can be obtained via `ma.createVideoContext()`.
> VideoContext is bound to a video component via `id` and operates the corresponding video component.

### Methods

#### VideoContext.play()

Play the video

#### VideoContext.pause()

Pause the video

#### VideoContext.seek(number position)

Jump to the position, in seconds (s)

#### VideoContext.stop()

Stop playing the video


### Sample Code

```html
<view class="section tc">
  <video id="myVideo" src="http://example/pkg/example.mp4"></video>
  <view class="btn-area">
    <input bindblur="bindInputBlur"/>
  </view>
</view>
```

```js
Page({
  onReady(res) {
    this.videoContext = ma.createVideoContext('myVideo');
  },
  inputValue: '',
  bindInputBlur(e) {
    this.inputValue = e.detail.value;
  }
});
```
