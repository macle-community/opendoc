## MapContext.addMarkers(Object object)

> Add marker

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                                          |
|----------|----------|-------|----------|----------------------------------------------|
| markers  | Array    |       | Yes      | Same as the marker attribute passed to the map component        |
| clear    | Boolean  | false | No       | Whether to clear all markers on the map first        |
| success  | Function |       | No       | Callback function for a successful API call              |
| fail     | Function |       | No       | Callback function for a failed API call              |
| complete | Function |       | No       | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
//maml
<button bindtap="addMarkers">addMarkers</button>

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
    ]
  },

  addMarkers() {
    let markerArr = [
      {
        id: 2,
        title: `marker2`,
        latitude: 32.130366,
        longitude: 118.995885,
      }
    ];
    this.setData({
      markers: markerArr,
    });
    this.mapContext.addMarkers({
      markers: markerArr,
      clear: true,
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
