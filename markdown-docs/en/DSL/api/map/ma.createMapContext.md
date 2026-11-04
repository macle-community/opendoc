## ma.createMapContext(string mapId)

> Creates the map context MapContext object.

### Parameters

**string** **mapId**

The id of the map component

### Return Value

MapContext



### Sample Code

```js
//maml
<map id="myMap"></map>

//js
onReady() {
  this.mapContext = ma.createMapContext('myMap');
},
```

