## MapContext.moveToLocation(Object object)

> If called without passing in longitude and latitude, it will apply to get the user's current location and, after the user authorizes it, move to the user's current location; if no longitude and latitude are passed in and there is no user location authorization, the position will not change and the failure callback will be triggered

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                                          |
|-----------|----------|-----|----------|----------------------------------------------|
| longitude | Number   |     | No       | Longitude                       |
| latitude  | Number   |     | No       | Latitude                       |
| success   | Function |     | No       | Callback function for a successful API call              |
| fail      | Function |     | No       | Callback function for a failed API call              |
| complete  | Function |     | No       | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
//maml
<button bindtap="moveToLocation">moveToLocation</button>

//js
Page({
  data: {
    markers: [
      {
        id: 0,
        title: 'marker0',
        latitude: 31.984686,
        longitude: 118.574979,
        width: 10,
        height: 15,
        anchor: { x: 0.5, y: 0.5 },
      },
    ],
    latitude: 31.97934,
    longitude: 118.7673113,
    markersIndex: 1,
  },

  moveToSpecialLocation() {
    this.mapContext.moveToLocation({
      longitude: 118.79205,
      latitude: 32.03237,
      success(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
      fail(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
    });
  },
  moveToLocation() {
    this.mapContext.moveToLocation({
      success(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
      fail(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
    });
  },
});
```
