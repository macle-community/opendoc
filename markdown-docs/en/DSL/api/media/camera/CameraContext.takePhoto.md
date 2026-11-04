## CameraContext.takePhoto(Object object)

> Take a photo

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                       |
|:---------|:---------|:-------|:---|:-------------------------|
| quality  | String   | normal | No  | Imaging quality                     |
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call              |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

#### quality Legal Values

| Legal Value | Description   |
|:-------|:-----|
| high   | High quality  |
| normal | Normal quality |
| low    | Low quality  |

#### object.success Callback Function

#### Parameters

##### Object res

| Attribute        | Type     | Description                                      |
|:--------------|:-------|:----------------------------------------|
| tempImagePath | String | Temporary path of the photo file (local path). On Android it is in jpg image format, on iOS it is png |


### Sample Code
```js
const ctx = ma.createCameraContext('camera');

ctx.takePhoto({
  quality: 'high',
  success (res) {
    console.log (res);
  },
  fail (err) {
    console.log (err);
  }
});
```
