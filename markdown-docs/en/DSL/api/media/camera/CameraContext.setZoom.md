## CameraContext.setZoom(Object object)

> Set the zoom level (minimum version: 23.9.0)

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                                                            |
| :------- | :------- | :----- | :--- |:--------------------------------------------------------------|
| zoom     | Number   |        | Yes   | Zoom level, range [1, maxZoom]. zoom takes a positive integer. maxZoom can be obtained from the bindinitdone return value. |
| success  | Function |        | No   | Callback function for a successful API call                                                   |
| fail     | Function |        | No   | Callback function for a failed API call                                                   |
| complete | Function |        | No   | Callback function for the end of the API call (executed on both success and failure)                                      |

### object.success Callback Function

#### Parameters

#### Object res

| Attribute | Type   | Description                                                         |
| :--- | :----- | :----------------------------------------------------------- |
| zoom | Number | The actually set zoom level. If the set zoom value exceeds the maximum value supported by the current system, the settable value closest to the target value will be selected within [1, maxZoom] |

### Sample Code

```javascript
function  stopRecord(){
    const ctx = ma.createCameraContext();
    ctx.setZoom({
      zoom:zoom,
      success:(res)=>{
        console.log('success',res.zoom);
      },
      fail:(res)=>{
        console.log('fail');
      }
    })
  }
```

