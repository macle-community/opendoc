## ma.playVoice(Object object)

> Starts playing audio. Only one voice file is allowed to play at a time. If the previous voice file has not finished playing, the previous voice playback will be interrupted (minimum version: 23.9.0)

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                                           |
|----------|----------|-----|----------|----------------------------------------------|
| filePath | String   |     | Yes      | The file path of the voice file to play (local path)                         |
| url      | String   |     | Yes      | Online audio URL (new attribute, minimum version: 23.12.0)                    |
| duration | Number   | 60  | No       | Specifies the playback duration. Playback will automatically stop after reaching the specified duration, in seconds (only effective when playing local audio files) |
| success  | Function |     | No       | Callback function for a successful API call                                  |
| fail     | Function |     | No       | Callback function for a failed API call                                  |
| complete | Function |     | No       | Callback function for the end of the API call (executed on both success and failure)                     |

### Sample Code

```javascript
page({
    playVoice() {
        const {filePath, playDuration: duration} = this.data;
        console.log({playParams: {filePath, duration}});
        ma.playVoice({
            filePath,
            duration,
            success: (res) => {
                console.log({res});
                this.setData({
                    info: format(res)
                });
            },
            fail: (err) => {
                console.log({err});
                this.setData({
                    info: format(err)
                });
            }
        });
    }
})
```



### Tips

1. When calling this API, you must pass in at least one of the local audio path `filePath` or the online audio URL `url`
2. When both the local audio path `filePath` and the online audio URL `url` are passed in, `filePath` has higher priority
