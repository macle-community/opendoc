## RecorderManager.onStop(function listener)

> Listen for the recording stop event. At this point the recorder enters the idle state again. It can be actively triggered by RecorderManager.stop(), and will also be automatically triggered when the recording is interrupted or encounters an abnormality (minimum version: 23.9.0)

### Parameters

#### function listener

Listener function for the recording stop event

##### Object res

| Attribute     | Type   | Description                          |
| :----------- | :----- | :---------------------------- |
| tempFilePath | String | Temporary path of the recording file (local path) |
| duration     | Number | Total recording duration, in ms          |
| fileSize     | Number | Recording file size, in Byte      |

#### Detailed Parameter Description

1. The recording file format is fixed as AAC, and it is named after the time the recording started, saved in the local temporary directory. Therefore, the tempFilePath format should be mafile://tmp_yyyyMMddHHmmss.aac
2. The duration may have a millisecond-level discrepancy from the duration specified when recording started

### Description of Scenarios that Cause Recording to Automatically Stop

1. The current page undergoes a route change, such as calling navigateTo, navigateBack, redirectTo, reLaunch, etc.
2. The current mini program is not running in the foreground of the host APP, such as the mini program being minimized, closed, etc.
3. The current mini program performs a menu operation
4. The host APP is not running in the foreground of the device
5. The device screen is turned off
6. Another application occupies the speaker or microphone
7. While recording, the microphone in use changes, e.g. recording via the headset microphone and then disconnecting the headset from the phone
8. Other system abnormalities

### Sample Code

```javascript
Page({
    onload() {
        recorderManager.onStop(() => {
            ma.showToast({
                title: 'Recording paused',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```
