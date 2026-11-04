## video

> 视频（暂不支持同层渲染）。相关 api：[ma.createVideoContext](MACLE_API_CREATE_VIDEO_CONTEXT)

| 属性             | 类型          | 默认值     | 必填 | 说明                                                              |
|:---------------|:------------|:--------|:---|:----------------------------------------------------------------|
| src            | String      |         | 是  | 要播放视频的资源地址，支持网络路径、本地临时路径（确保路径不超过项目根目录）                          |
| controls       | Boolean     | true    | 否  | 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）                                     |
| autoplay       | Boolean     | false   | 否  | 是否自动播放                                                          |
| loop           | Boolean     | false   | 否  | 是否循环播放                                                          |
| muted          | Boolean     | false   | 否  | 是否静音播放                                                          |
| direction      | Number      |         | 否  | 设置全屏时视频的方向，不指定则根据宽高比自动判断                                        |
| Object-fit     | String      | contain | 否  | 当视频大小与 video 容器大小不一致时，视频的表现形式                                   |
| poster         | String      |         | 否  | 视频封面的图片网络资源地址。若 controls 属性值为 false 则设置 poster 无效               |
| bindplay       | Eventhandle |         | 否  | 当开始/继续播放时触发 play 事件                                             |
| bindpause      | Eventhandle |         | 否  | 当暂停播放时触发 pause 事件                                               |
| bindended      | Eventhandle |         | 否  | 当播放到末尾时触发 ended 事件                                              |
| bindtimeupdate | Eventhandle |         | 否  | 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次 |
| binderror      | Eventhandle |         | 否  | 视频播放出错时触发                                                       |

### direction 的合法值

| 值   | 说明         | 备注           |
|:----|:-----------|--------------|
| 0   | 正常竖向       |              |
| 90  | 屏幕逆时针 90 度 | Android 暂不支持 |
| -90 | 屏幕顺时针 90 度 |              |

### object-fit 的合法值

| 值       | 说明 | 备注           |
|:--------|:---|--------------|
| contain | 包含 |              |
| fill    | 填充 | Android 暂不支持 |
| cover   | 覆盖 | Android 暂不支持 |

### 支持的格式

| 格式   | iOS | Android |
|:-----|:----|:--------|
| mp4  | √   | √       |
| mov  | √   | x       |
| m4v  | √   | x       |
| 3gp  | √   | √       |
| avi  | √   | x       |
| m3u8 | √   | √       |
| webm | x   | √       |

### 支持的编码格式

| 格式     | iOS | Android |
|:-------|:----|:--------|
| H.264  | √   | √       |
| HEVC   | √   | √       |
| MPEG-4 | √   | √       |
| VP9    | x   | √       |

### 示例代码

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
        <view>跳转位置</view>
      </view>
      <view>
        <input bindinput='bindInput' value='{{position}}' type='text'
               placeholder='在此处输入指定位置'
               adjustPosition='false' />
      </view>
    </view>
  </view>
  <view class='btn-area'>
    <button bindtap='play' type='primary'>播放</button>
    <button bindtap='pause' type='primary'>暂停</button>
    <button bindtap='seek' type='primary'>跳转到指定位置(单位：秒)</button>
    <button bindtap="stop" class="page-body-button stop" type="primary">停止</button>      
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
    console.log('video 视频错误信息:')
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

1. video 默认宽度 300px、高度 225px，可通过 mass 设置宽高。
