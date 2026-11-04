## VideoContext

> VideoContext 实例，可通过 `ma.createVideoContext()` 获取。
> VideoContext 通过 `id` 跟一个 video 组件绑定，操作对应的 video 组件。

### 方法

#### VideoContext.play()

播放视频

#### VideoContext.pause()

暂停视频

#### VideoContext.seek(number position)

跳转到的位置，单位 s

#### VideoContext.stop()

停止播放视频


### 示例代码

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
