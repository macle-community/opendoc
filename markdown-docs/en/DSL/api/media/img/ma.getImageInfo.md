## ma.getImageInfo(Object object)

> Get image information. For network images, the download domain must be configured first to take effect.

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                                                |
|:---------|:---------|:----|:---|:--------------------------------------------------|
| src      | String   |     | Yes  | The path of the image. Supports network paths, local paths, and code package paths (the simulator does not support local paths; note that code package paths are case-sensitive) |
| success  | Function |     | No  | Callback function for a successful API call                                       |
| fail     | Function |     | No  | Callback function for a failed API call                                       |
| complete | Function |     | No  | Callback function for the end of the API call (executed on both success and failure)                          |

#### object.success Callback Function

##### Parameters

###### Object res

| Attribute     | Type   | Description                  |
|:------------|:-------|:--------------------|
| width       | Number | The original width of the image, in px. Rotation is not considered. |
| height      | Number | The original height of the image, in px. Rotation is not considered. |
| path        | String | The local path of the image             |
| orientation | String | Device direction when the photo was taken (not supported by the simulator)     |
| type        | String | Image format                |

#### Legal Values of res.orientation

| Value          | Description                                           |
|----------------|----------------------------------------------|
| up             | Default direction (photo taken with phone held horizontally), corresponds to 1 in Exif. Or no orientation information. |
| up-mirrored    | Same as up, but mirror-flipped, corresponds to 2 in Exif                      |
| down           | Rotated 180 degrees, corresponds to 3 in Exif                        |
| down-mirrored  | Same as down, but mirror-flipped, corresponds to 4 in Exif                    |
| left-mirrored  | Same as left, but mirror-flipped, corresponds to 5 in Exif                    |
| right          | Rotated 90 degrees clockwise, corresponds to 6 in Exif                      |
| right-mirrored | Same as right, but mirror-flipped, corresponds to 7 in Exif                   |
| left           | Rotated 90 degrees counterclockwise, corresponds to 8 in Exif                      |

### Sample Code

```js
ma.getImageInfo({
  src: 'images/a.jpg',
  success(res) {
    console.log(res.width);
    console.log(res.height);
  }
});

ma.chooseImage({
  success(res) {
    ma.getImageInfo({
      src: res.tempFilePaths[0],
      success(res) {
        console.log(res.width);
        console.log(res.height);
      }
    });
  }
});
```
