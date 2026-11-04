## CameraContext.startRecord(Object object)

> Start recording (minimum version: 23.9.0)

### Parameters

#### Object object

| Attribute        | Type     | Default | Required | Description                                |
| :-------------- | :------- | :----- | :--- |:----------------------------------|
| timeoutCallback | Function |        | No   | Triggered when the recording duration limit is exceeded; recording will end and this callback will be invoked.             |
| timeout         | Number   | 30     | No   | Recording duration limit, in seconds. Currently supports positive integers between 1 and 180 |
| success         | Function |        | No   | Callback function for a successful API call                       |
| fail            | Function |        | No   | Callback function for a failed API call                       |
| complete        | Function |        | No   | Callback function for the end of the API call (executed on both success and failure)          |

#### object.timeoutCallback Callback Function

##### Parameters

###### Object res

| Attribute        | Type     | Description                 |
|:--------------|:-------|:-------------------|
| errMsg        | String | startRecord: ok    |
| tempThumbPath | String | Temporary path of the cover image file (local path) |
| tempVideoPath | String | Temporary path of the video file (local path)  |

### Sample Code

```javascript
function startRecord(){
    const ctx = ma.createCameraContext();
    ctx.startRecord({
      timeoutCallback:(res)=>{
        this.setData({
          src: res.tempImagePath
        })
        this.setData({
          videoSrc: res.tempVideoPath
        })
      },
      success:(res)=>{
        console.log('startRecord');
      }
    })
  }
```
