## video

> Video (same-layer rendering is not supported yet). Related api: [ma.createVideoContext](MACLE_API_CREATE_VIDEO_CONTEXT)

| Property         | Type          | Default Value | Required | Description                                                              |
|:---------------|:------------|:--------|:---|:----------------------------------------------------------------|
| src            | String      |         | Yes  | The resource address of the video to play. Supports network paths and local temporary paths (ensure the path does not exceed the project root directory)                          |
| controls       | Boolean     | true    | No  | Whether to show the default playback controls (play/pause button, playback progress, time)                                     |
| autoplay       | Boolean     | false   | No  | Whether to autoplay                                                          |
| loop           | Boolean     | false   | No  | Whether to play in a loop                                                          |
| muted          | Boolean     | false   | No  | Whether to play muted                                                          |
| direction      | Number      |         | No  | Sets the video direction in full screen. If not specified, it is automatically determined based on the aspect ratio                                        |
| Object-fit     | String      | contain | No  | The presentation form of the video when the video size does not match the video container size                                   |
| poster         | String      |         | No  | The image network resource address of the video cover. If the controls property value is false, setting poster is invalid               |
| bindplay       | Eventhandle |         | No  | Triggered with a play event when playback starts/resumes                                             |
| bindpause      | Eventhandle |         | No  | Triggered with a pause event when playback is paused                                               |
| bindended      | Eventhandle |         | No  | Triggered with an ended event when playback reaches the end                                              |
| bindtimeupdate | Eventhandle |         | No  | Triggered when playback progress changes. event.detail = {currentTime, duration}. Triggered once every 250ms |
| binderror      | Eventhandle |         | No  | Triggered when a video playback error occurs                                                       |

### Valid values of direction

| Value   | Description         | Remarks           |
|:----|:-----------|--------------|
| 0   | Normal vertical       |              |
| 90  | Screen rotated 90 degrees counterclockwise | Android not supported yet |
| -90 | Screen rotated 90 degrees clockwise |              |

### Valid values of object-fit

| Value       | Description | Remarks           |
|:--------|:---|--------------|
| contain | Contain |              |
| fill    | Fill | Android not supported yet |
| cover   | Cover | Android not supported yet |

### Supported formats

| Format   | iOS | Android |
|:-----|:----|:--------|
| mp4  | √   | √       |
| mov  | √   | x       |
| m4v  | √   | x       |
| 3gp  | √   | √       |
| avi  | √   | x       |
| m3u8 | √   | √       |
| webm | x   | √       |

### Supported encoding formats

| Format     | iOS | Android |
|:-------|:----|:--------|
| H.264  | √   | √       |
| HEVC   | √   | √       |
| MPEG-4 | √   | √       |
| VP9    | x   | √       |

### Sample Code

```html

<view>
  <video id='myVideo'
         src='{{src}}'
         autoplay='{{autoplay}}'
         loop='{{loop}}'
         hidden='{{hidden}}'
         controls='{{controls}}'
         objectFit='{{objectFit}}'
         poster='{{poster}}'
         muted='{{muted}}'
         binderror='binderror'
         bindtimeupdate='bindtimeupdate'
         bindplay='bindplay'
         bindpause='bindpause'
         bindended='bindended'></video>


  <view>
    <view>
      <view>
        <view>Jump position</view>
      </view>
      <view>
        <input bindinput='bindInput' value='{{position}}' type='text'
               placeholder='Enter the specified position here'
               adjustPosition='false' />
      </view>
    </view>
  </view>
  <view class='btn-area'>
    <button bindtap='play' type='primary'>Play</button>
    <button bindtap='pause' type='primary'>Pause</button>
    <button bindtap='seek' type='primary'>Jump to specified position (unit: seconds)</button>
    <button bindtap="stop" class="page-body-button stop" type="primary">Stop</button>      
  </view>
</view>
```

```js

Page({
  onReady: function(res) {
    this.videoContext = ma.createVideoContext('myVideo')
  },
  data: {
    src: 'http://example.mp4',
    autoplay: false,
    position: '',
    inputValue: '',
    controls: true,
    hidden: false,
    objectFit: 'contain',
    muted: false,
    loop: false,
    poster: 'http://example.png',
    showFullscreenBtn: true
  },
  bindInput: function(e) {
    this.setData({
      position: e.detail.value
    })
  },
  play: function() {
    this.videoContext.play()
  },
  pause: function() {
    this.videoContext.pause()
  },
  seek: function() {
    this.videoContext.seek(this.data.position)
  },
  stop: function () {
    this.videoContext.stop()
  },

  binderror: function(e) {
    console.log('video error message:')
    console.log(e.detail.errMsg)
  },
  bindplay: function() {
    console.log('video start')
  },
  bindpause: function() {
    console.log('video pause')
  },
  bindended: function() {
    console.log('video end')
  },
  bindtimeupdate: function(e) {
    console.log(e.detail.currentTime)
  }
})

```

### Bug & Tip

1. The video defaults to a width of 300px and a height of 225px. The width and height can be set via mass.
