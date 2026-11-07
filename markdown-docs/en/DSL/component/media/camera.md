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

#### 1. Camera Viewfinder with Device Position & Flash

```html
<view class="camera-wrapper">
  <camera device-position="back" flash="off" style="width: 100%; height: 220px; border-radius: 8px; overflow: hidden;">
    <cover-view style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.6); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px;">
      Device: Back | Flash: Off
    </cover-view>
  </camera>
</view>
```

```js
Page({ data: {} });
```

```css
.camera-wrapper { width: 100%; border-radius: 8px; overflow: hidden; }
```


### Bug & Tip

1. Only one `camera` component can be inserted on the same page
2. Please note the usage restrictions of native components
