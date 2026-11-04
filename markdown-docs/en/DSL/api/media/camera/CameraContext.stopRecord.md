## CameraContext.stopRecord(Object object)

> Stop recording (minimum version: 23.9.0)

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | No  | Callback function for a successful API call              |
| fail     | Function |     | No  | Callback function for a failed API call              |
| complete | Function |     | No  | Callback function for the end of the API call (executed on both success and failure) |

#### object.success Callback Function

##### Parameters

###### Object res

| Attribute        | Type     | Description                 |
|:--------------|:-------|:-------------------|
| tempThumbPath | String | Temporary path of the cover image file (local path) |
| tempVideoPath | String | Temporary path of the video file (local path)  |

### Sample Code

```javascript
function stopRecord(){
    const ctx = ma.createCameraContext();
    ctx.stopRecord({
      success:(res)=>{
        console.log('stopRecord',res);
        this.setData({
          src: res.tempImagePath
        })
        this.setData({
          videoSrc: res.tempVideoPath
        })
      }
    })
  }
```

