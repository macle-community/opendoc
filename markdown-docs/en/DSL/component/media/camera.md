## camera

> System camera. QR code scanning function. Related api: [ma.createCameraContext](MACLE_API_CREATE_CAMERA_CONTEXT)

| Property          | Type          | Default Value | Required | Description                                | Remarks           |
|:----------------|:------------|:-------|:---|:----------------------------------|--------------|
| device-position | String      | back   | No  | Camera facing direction                             |              |
| resolution      | String      | medium | No  | Resolution. Dynamic modification is not supported                       | Android not supported yet |
| flash           | String      | auto   | No  | Flashlight. Values are auto, on, off              |              |
| bindstop        | Eventhandle |        | No  | Triggered when the camera terminates abnormally, e.g. when exiting to the background, etc.             |              |
| binderror       | Eventhandle |        | No  | Triggered when the user does not allow the use of the camera                     |              |
| bindinitdone    | Eventhandle |        | No  | Triggered when camera initialization is complete. e.detail = { maxZoom } |              |
| bindrecorderror | Eventhandle |        | No  | Triggered when recording exits abnormally, returning the error message and the storage path of the stopped recording     |              |

### resolution

| Valid values of resolution | Description | Remarks           |
|:---------------|:---|--------------|
| low            | Low  | Android not supported yet |
| medium         | Medium  | Android not supported yet |
| high           | High  | Android not supported yet |

### Valid values of device-position

| Valid Value   | Description |
|:------|:---|
| front | Front |
| back  | Back |

### Valid values of flash

| Valid Value   | Description | Remarks           |
|:------|:---|--------------|
| auto  | Auto |              |
| on    | On |              |
| off   | Off |              |
| torch | Always on | Android not supported yet |

### bindrecorderror callback function

#### Parameters

#### Object res

| Property        | Type     | Description            |
|:--------------|:-------|---------------|
| errMsg        | String | Error message for abnormal recording stop   |
| tempVideoPath | String | Storage path of the abnormally stopped recording video |
| tempThumbPath | String | Storage path of the abnormally stopped recording cover |

### Sample Code

```html

<camera device-position='{{position}}' flash='{{flash}}' style='width: 100%; height: 300px;' binderror='error'
        bindstop='stop' bindinitdone='initdone' bindrecorderror='recorderror'></camera>
<slider id='slider2' value='1' bindchange='slider2change' max='{{sliderMax}}' show-value step='1'
        style='margin-top:50px ;' />

<view class='button-group'>
  <button class='takephoto' type='primary' bindtap='takePhoto'>Take photo</button>
  <button class='takephoto' type='primary' bindtap='startRecord'>Record</button>
  <button class='takephoto' type='primary' bindtap='stopRecord'>Stop recording</button>
</view>

<view class='button-group'>
  <button class='takephoto' type='primary' bindtap='takePosition'>Switch camera</button>
  <button class='takephoto' type='primary' bindtap='takeFlash'>Turn on flash</button>
</view>
```

```js
const format = (res) => JSON.stringify(res, null, 4);
Page({
  data: {
    src: '',
    showText: '',
    position: 'back',
    flash: 'off',
    videoSrc: '',
    sliderMax: 100,
    info: ''
  },
  slider2change(res) {
    const ctx = ma.createCameraContext();
    let zoom = parseInt(res.detail.value);
    ctx.setZoom({
      zoom: zoom,
      success: (res) => {
        console.log('Set zoom', res.zoom);
        this.setData({
          info: format(res)
        });
        ma.showToast({
          title: 'Set zoom succeeded',
          icon: 'success'
        });
      },
      fail: (res) => {
        console.log('Set zoom fail');
        this.setData({
          info: format(res)
        });
        ma.showToast({
          title: 'Set zoom failed',
          icon: 'error'
        });
      },
      complete: (res) => {
        console.log('Set zoom completed');
      }
    });
  },
  initdone(res) {
    this.setData({
      sliderMax: res.detail.maxZoom
    });
  },
  takePhoto() {
    const ctx = ma.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
          info: format(res)
        });
      },
      fail: (res) => {
        this.setData({
          info: format(res)
        });
      }
    });
  },
  takePosition() {
    if (this.data.position === 'front') {
      this.setData({
        position: 'back'
      });
    } else {
      this.setData({
        position: 'front'
      });
    }
  },
  startRecord() {
    const ctx = ma.createCameraContext();
    ctx.startRecord({
      timeoutCallback: (res) => {
        ma.showToast({
          title: 'Recording timer ended',
          icon: 'success'
        });
        this.setData({
          src: res.tempThumbPath,
          info: format(res)
        });
        this.setData({
          videoSrc: res.tempVideoPath
        });
      },
      success: (res) => {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('Recording started successfully');
        ma.showToast({
          title: 'Recording started successfully',
          icon: 'success'
        });
      },
      fail(res) {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('Recording failed to start');
        ma.showToast({
          title: 'Recording failed to start',
          icon: 'error'
        });
      },
      complete(res) {
        console.log('Recording start completed');
        console.log(res);
      }
    });
  },
  stopRecord() {
    const ctx = ma.createCameraContext();
    ctx.stopRecord({
      success: (res) => {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('Recording stopped successfully');
        ma.showToast({
          title: res.tempVideoPath,
          icon: 'success'
        }),
          this.setData({
            src: res.tempThumbPath,
            info: format(res)
          });
        this.setData({
          videoSrc: res.tempVideoPath
        });
      },
      fail(res) {
        console.log(res);
        this.setData({
          info: format(res)
        });
        console.log('Recording failed to stop');
        ma.showToast({
          title: 'Recording failed to stop',
          icon: 'error'
        });
      },
      complete(res) {
        console.log(res);
        console.log('Recording stop completed');
      }
    });
  },
  takeFlash() {
    this.setData({
      flash: 'on'
    });
  },
  error: function(e) {
    console.log(e.detail.errMsg);
    this.setData({
      info: format(e)
    });
  },
  stop: function(e) {
    console.log('camera stop:stopstop');
    this.setData({
      info: format(res)
    });
    console.log(e.detail.errMsg);
  },
  recorderror: function(e) {
    ma.showToast({
      title: 'camera recorderror',
      icon: 'error'
    });
    console.log(e.detail.errMsg);
    console.log(e.detail.tempThumbPath);
    console.log(e.detail.tempVideoPath);
    this.setData({
      src: e.detail.tempThumbPath
    });
    this.setData({
      videoSrc: e.detail.tempVideoPath
    });
    this.setData({
      info: format(e.detail)
    });
  }
});

```

### Bug & Tip

1. Only one `camera` component can be inserted on the same page
2. Please note the usage restrictions of native components
