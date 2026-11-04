## AudioContext

> AudioContext 实例，可通过 `ma.createAudioContext()` 获取。
> AudioContext 通过 `id` 跟一个 audio 组件绑定，操作对应的 audio 组件。

### 方法

#### AudioContext.setSrc(string src)

设置音频地址

#### AudioContext.play()

播放音频。

#### AudioContext.pause()

暂停音频。

#### AudioContext.seek(number position)

跳转到的位置，单位 s。

### 示例代码

```html
<audio  src="{{src}}" id="myAudio" ></audio>

<button type="primary" bindtap="audioPlay">播放</button>
<button type="primary" bindtap="audioPause">暂停</button>
<button type="primary" bindtap="audio15">设置当前播放时间为15秒</button>
<button type="primary" bindtap="audioStart">回到开头</button>
```

```js
Page({
  onReady(e) {
    // 使用 ma.createAudioContext 获取 audio 上下文 context
    this.audioCtx = ma.createAudioContext('myAudio');
    this.audioCtx.setSrc(
      'http://example/pkg/example.mp3'
    );
    this.audioCtx.play();
  },
  data: {
    src: ''
  },
  audioPlay() {
    this.audioCtx.play();
  },
  audioPause() {
    this.audioCtx.pause();
  },
  audio15() {
    this.audioCtx.seek(15);
  },
  audioStart() {
    this.audioCtx.seek(0);
  }
});
```
