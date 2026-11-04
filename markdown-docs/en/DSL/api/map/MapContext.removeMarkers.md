## MapContext.removeMarkers(Object object)

> Remove marker

### Parameters

#### Object object

| Attribute | Type      | Default | Required | Description                                          |
|-----------|----------|-----|----------|----------------------------------------------|
| markerIds | Array    |     | Yes      | The id collection of markers              |
| success   | Function |     | No       | Callback function for a successful API call              |
| fail      | Function |     | No       | Callback function for a failed API call              |
| complete  | Function |     | No       | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
//maml
<button bindtap="removeMarkers">removeMarkers</button>

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

  removeMarkers() {
    this.mapContext.removeMarkers({
      markerIds: [0],
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
