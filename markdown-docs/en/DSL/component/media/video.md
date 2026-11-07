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

#### 1. Video Player with Controls & Poster

```html
<view class="video-container">
  <video id="myVideo" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80" controls="true" style="width: 100%; height: 200px; border-radius: 8px;" />
</view>
```

```js
Page({ data: {} });
```

```css
.video-container { width: 100%; border-radius: 8px; overflow: hidden; }
```


### Bug & Tip

1. The video defaults to a width of 300px and a height of 225px. The width and height can be set via mass.
