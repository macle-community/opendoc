## audio

> Audio.

| Property         | Type          | Default Value | Required | Description                                                        |
|:---------------|:------------|:------|:---|:----------------------------------------------------------|
| id             | String      |       | No  | The unique identifier of the audio component                                            |
| src            | String      |       | No  | The resource address of the audio to play. Supports network paths and local paths (ensure the path does not exceed the project root directory)                      |
| loop           | Boolean     | false | No  | Whether to play in a loop                                                    |
| controls       | Boolean     | false | No  | Whether to show the default controls                                                  |
| poster         | String      |       | No  | The image resource address of the audio cover on the default controls. If the controls property value is false, setting poster is invalid    |
| name           | String      |       | No  | The audio name on the default controls. If the controls property value is false, setting name is invalid             |
| author         | String      |       | No  | The author name on the default controls. If the controls property value is false, setting author is invalid           |
| binderror      | Eventhandle |       | No  | Triggered with an error event when an error occurs. detail = {errMsg}                       |
| bindplay       | Eventhandle |       | No  | Triggered with a play event when playback starts/resumes                                       |
| bindpause      | Eventhandle |       | No  | Triggered with a pause event when playback is paused                                         |
| bindtimeupdate | Eventhandle |       | No  | Triggered with a timeupdate event when playback progress changes. detail = {currentTime, duration} |
| bindended      | Eventhandle |       | No  | Triggered with an ended event when playback reaches the end                                        |

### Supported formats

| Format  | iOS | Android |
|:----|:----|:--------|
| mp3 | √   | √       |
| ogg | x   | √       |
| wav | √   | √       |

### Sample Code

```html

<view>
  <view style='text-align: center;'>
    <audio style='text-align: left'
           id='myAudio'
           src='{{src}}'
           loop='{{loop}}'
           poster='{{poster}}'
           name='{{name}}'
           author='{{author}}'
           controls='{{controls}}'
           bindplay='bindplay'
           bindpause='bindpause'
           bindtimeupdate='bindtimeupdate'
           bindended='bindended'
           binderror='binderror'></audio>
  </view>
</view>
```

```js
Page({
  onReady: function(res) {
    this.audioContext = ma.createAudioContext('myAudio');
    this.audioContext.setSrc('http://example.mp3');
  },
  onUnload: function() {
    this.audioContext.pause();
  },
  data: {
    src: '',
    poster: 'http://example.jpg',
    name: 'example',
    author: 'example',
    loop: false,
    controls: true,
    time: 30
  },
  playAudio: function() {
    this.audioContext.play();
  },
  pauseAudio: function() {
    this.audioContext.pause();
  },
  seekAudio: function() {
    this.audioContext.seek(this.data.time);
  },
  binderror: function(e) {
    console.log('audio error:' + e.detail.errMsg);
  },
  bindplay: function() {
    console.log('audio is played');
  },
  bindpause: function() {
    console.log('audio is paused');
  },
  bindtimeupdate: function(e) {
    this.duration = e.detail.duration;
    console.log('audio currentTime:' + e.detail.currentTime);
  },
  bindended: function() {
    console.log('audio is ended');
  },
  binderror: function(e) {
    console.log('audio error:' + e.detail.errMsg);
  }
})

```
