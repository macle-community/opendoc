## AudioContext

> AudioContext instance, can be obtained via `ma.createAudioContext()`.
> AudioContext is bound to an audio component via `id` and operates the corresponding audio component.

### Methods

#### AudioContext.setSrc(string src)

Set the audio address

#### AudioContext.play()

Play the audio.

#### AudioContext.pause()

Pause the audio.

#### AudioContext.seek(number position)

Jump to the position, in seconds (s).

### Sample Code

```html
<audio  src="{{src}}" id="myAudio" ></audio>

<button type="primary" bindtap="audioPlay">Play</button>
<button type="primary" bindtap="audioPause">Pause</button>
<button type="primary" bindtap="audio15">Set current playback time to 15 seconds</button>
<button type="primary" bindtap="audioStart">Back to the beginning</button>
```

```js
Page({
  onReady(e) {
    // Use ma.createAudioContext to get the audio context context
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
