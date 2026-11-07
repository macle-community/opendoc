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

#### 1. Audio Player with Playback Controls

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

