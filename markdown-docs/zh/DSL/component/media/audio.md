## audio

> 音频。

| 属性             | 类型          | 默认值   | 必填 | 说明                                                        |
|:---------------|:------------|:------|:---|:----------------------------------------------------------|
| id             | String      |       | 否  | audio 组件的唯一标识符                                            |
| src            | String      |       | 否  | 要播放音频的资源地址，支持网络路径、本地路径（确保路径不超过项目根目录）                      |
| loop           | Boolean     | false | 否  | 是否循环播放                                                    |
| controls       | Boolean     | false | 否  | 是否显示默认控件                                                  |
| poster         | String      |       | 否  | 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效    |
| name           | String      |       | 否  | 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效             |
| author         | String      |       | 否  | 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效           |
| binderror      | Eventhandle |       | 否  | 当发生错误时触发 error 事件，detail = {errMsg}                       |
| bindplay       | Eventhandle |       | 否  | 当开始/继续播放时触发 play 事件                                       |
| bindpause      | Eventhandle |       | 否  | 当暂停播放时触发 pause 事件                                         |
| bindtimeupdate | Eventhandle |       | 否  | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} |
| bindended      | Eventhandle |       | 否  | 当播放到末尾时触发 ended 事件                                        |

### 支持的格式

| 格式  | iOS | Android |
|:----|:----|:--------|
| mp3 | √   | √       |
| ogg | x   | √       |
| wav | √   | √       |

### 示例代码

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
