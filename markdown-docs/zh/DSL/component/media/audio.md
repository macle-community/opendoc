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

#### 1. 音频播放器与控制面板

```html
<view class="audio-container">
  <audio id="myAudio" name="Sample Audio Track" author="Macle OpenDoc" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls="true" style="width: 100%;" />
</view>
```

```js
Page({ data: {} });
```

```css
.audio-container { background: #fff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
```

