## RecorderManager.start(Object object)

> Start recording. The user must grant the current mini program microphone permission, and the host APP must be allowed to use the system microphone before this can be called (minimum version: 23.9.0)

### Parameters

#### Object object

| Attribute         | Type    | Default | Required | Description                                                           |
|:-----------------|:-------|:-------|:---|:-------------------------------------------------------------|
| duration         | Number | 60000  | No  | Recording duration, in ms. Maximum value 180000 (3 minutes). If the user does not actively stop the recording after the specified duration, the recording will automatically stop |
| numberOfChannels | Number | 2      | No  | Number of recording channels (restricted valid values). The more channels, the higher the recording quality and the larger the file size                             |
| sampleRate       | Number | 8000   | No  | Sampling rate, in Hz (restricted valid values). The higher the sampling rate, the higher the recording quality and the larger the file size. The simulator does not support setting the sampling rate for now            |
| encodeBitRate    | Number | 480000 | No  | Encoding bit rate, in bps (restricted valid values). The higher the encoding bit rate, the higher the recording quality and the larger the file size. The simulator does not support the encoding bit rate for now          |

#### numberOfChannels Legal Values

| Legal Value | Description    |
|:----|:------|
| 1   | 1 channel |
| 2   | 2 channels |

### Sampling Rate and Encoding Bit Rate Restrictions

Each sampling rate has a corresponding valid range of encoding bit rates. Setting an invalid sampling rate or encoding bit rate will cause recording to fail. The specific correspondence is shown in the table below.

#### sampleRate & encodeBitRate Legal Values

| Sampling Rate Legal Value | Legal Values of the Corresponding Encoding Bit Rate     |
|--------|----------------|
| 8000   | 16000 ~ 48000  |
| 11025  | 16000 ~ 48000  |
| 12000  | 24000 ~ 64000  |
| 16000  | 24000 ~ 96000  |
| 22050  | 32000 ~ 128000 |
| 24000  | 32000 ~ 128000 |
| 32000  | 48000 ~ 192000 |
| 44100  | 64000 ~ 320000 |
| 48000  | 64000 ~ 320000 |

### Tips

1. The recording file format is fixed as AAC, named after the time the recording started (yyyyMMddHHmmss.aac), and saved in the local temporary directory
2. The start API can only be called when the recorder is idle. The start API cannot be called while recording or in the paused state
3. start is an operation on the recorder manager; the operation result is still obtained through the recorder manager, which is different from the callback approach of a typical API. When the recorder starts recording normally, it can be listened to via RecorderManager.onStart(listener); when an error occurs, it can be listened to via RecorderManager.onError(listener)

### Sample Code

```html
<button bindtap="recorderStart" type="primary">recorderStart</button>
```

```javascript
Page({
    recorderStart() {
        const { duration, numberOfChannels, sampleRate, encodeBitRate } = this.data;
        const params = { duration, numberOfChannels, sampleRate, encodeBitRate };
        console.log({ startParams: params });
        recorderManager.start(params);
    }
})
```

