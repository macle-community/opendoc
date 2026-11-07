## Map

> The map component provides functions such as map display and interaction. Related api:  [ma.createMapContext](CREATE_MAP_CONTEXT)

## Map basic properties

### Property description

| Property       | Type             | Default Value | Required | Description                                                   |
| -------------- | ---------------- | ------ | ---- | ------------------------------------------------------ |
| longitude      | Number           | 116.46 | No   | Central longitude                                               |
| latitude       | Number           | 39.92  | No   | Central latitude                                               |
| scale          | Number           | 16     | No   | Zoom level. Value range 3-20                                 |
| markers        | Array  |        | No   | Marker points                                                 |
| polyline       | Array |        | No   | Routes                                                   |
| circles        | Array  |        | No   | Circles                                                     |
| include-points | Array    |        | No   | Scale the view to include all the given coordinate points                         |
| show-location  | Boolean          | false  | No   | Display the current location point with a direction (the location point obtained by the simulator does not have a direction) |
| bindtap        | Eventhandle      |        | No   | Triggered when the map is clicked. e.detail={longitude,latitude}          |
| bindmarkertap  | Eventhandle      |        | No   | Triggered when a map marker point is clicked. e.detail={markerId}                |

#### marker

Marker points are used to display the marked positions on the map

| Property    | Description                 | Type     | Required | Remarks                                                        |
|-----------|--------------------|--------|----|-----------------------------------------------------------|
| id        | Marker point id              | Number | No  | The marker click event will return this id                                          |
| latitude  | Latitude                 | Number | Yes  | Floating point number, range -90~90                                              |
| longitude | Longitude                 | Number | Yes  | Floating point number, range -180~180                                            |
| title     | Marker point name               | String | No  | Displayed when clicked                                                     |
| iconPath  | Displayed icon              | String | No  | The image path under the project directory. Only local paths are supported                                        |
| width     | Marker icon width             | Number | No  | Defaults to the actual width of the image                                                 |
| height    | Marker icon height             | Number | No  | Defaults to the actual height of the image                                                 |
| anchor    | The anchor point of the latitude/longitude on the marker icon. Defaults to the midpoint of the bottom edge | Object | No  | {x,y}, where x represents horizontal (0-1) and y represents vertical (0-1). {x:0.5,y:1} represents the midpoint of the bottom edge (the simulator does not support this property) |

#### polyline

Specifies a series of coordinate points, connecting a line from the first item of the array to the last item. When drawing a rainbow line, you need to specify the colors of different segments. For example, if points contains 5 points, colorList should pass in
4 color values; if the length of colorList is less than points.length - 1, the colors of the remaining segments will be the same as the last item.

| Property    | Description    | Type     | Required | Remarks                                                                                      |
|-----------|-------|--------|----|-----------------------------------------------------------------------------------------|
| points    | Array of latitude/longitude | Array  | Yes  | [{latitude:0,longitude:0}]                                                              |
| color     | Line color  | String | No  | Hexadecimal, e.g. #FFFFFF. Default value is '#000000'                                                            |
| colorList | Rainbow line   | Array  | No  | **When present, color is ignored**, e.g. ['#FF0000', '#00FF00', '#0000FF', '#112233', '#223344']. Default value is ['#000000'] |
| width     | Line width  | Number | No  |                                                                                         |

#### circle

Display circles on the map

| Property    | Description    | Type     | Required | Remarks                 |
|-----------|-------|--------|----|--------------------|
| latitude  | Latitude    | Number | Yes  | Floating point number, range -90~90       |
| longitude | Longitude    | Number | Yes  | Floating point number, range -180~180     |
| color     | Stroke color | String | No  | Hexadecimal. Default value is '#000000' |
| fillColor | Fill color  | String | No  | Hexadecimal               |
| radius    | Radius    | Number | Yes  |                    |

Sample code

```html
// index.maml

<map id="myMap" show-location="{{showLocation}}" scale="{{scale}}" markers="{{markers}}" polyline="{{polyline}}" longitude="{{longitude}}" latitude="{{latitude}}" include-points="{{includePoints}}" circles="{{circles}}" bindmarkertap="markerTap" bindtap="mapTap"></map>
 
```
```js
// index.js 
Page({
  data: {
    markers: [],
    latitude: 31.97934,
    longitude: 118.7673113,
    circles: [
      {
        latitude: 31.9782417,
        longitude: 118.7661415,
        radius: 20,
        color: '#87CEEB',
      },
    ],
    includePoints: [
      {
        latitude: 31.9751427,
        longitude: 118.7672672,
      },
      {
        latitude: 31.9782417,
        longitude: 118.7661415,
      },
      {
        latitude: 31.97934,
        longitude: 118.7673113,
      },
    ],
    polyline: [
      {
        points: [
          {
            latitude: 31.9751427,
            longitude: 118.7672672,
          },
          {
            latitude: 31.9782417,
            longitude: 118.7661415,
          }
        ],
        color: '#FFFFFF'
      }
    ],
    showLocation: false,
    scale: 18,
  },
   markerTap(e) {
    ma.showModal({
      content: `markerTap${e}`,
    });
  },
  mapTap(e) {
    ma.showModal({
      content: `mapTap${e}`,
    });
  },
  })
  
```

#### Tips

1. color/fillColor/colorList in the map must be represented using 6-digit hexadecimal, e.g.: #87CEEB
2. If the latitude/longitude of the map component is not filled in, it defaults to the latitude/longitude of Beijing
3. The simulator needs to import Google's APIkey by itself. The developer must apply for the APIKey themselves, as shown in the figure below:
   ![image](GOOGLEMAP_APIKEY) 


### Sample Code

#### 1. Interactive Map with Markers & Coordinates

```html
<map latitude="{{latitude}}" longitude="{{longitude}}" markers="{{markers}}" scale="14" style="width: 100%; height: 220px; border-radius: 8px; overflow: hidden;" />
```

```js
Page({
  data: {
    latitude: 31.2304,
    longitude: 121.4737,
    markers: [{
      id: 1,
      latitude: 31.2304,
      longitude: 121.4737,
      name: 'Macle Headquarters'
    }]
  }
});
```

```css
map { width: 100%; border-radius: 8px; }
```

