## ma.navigateTo(Object object)

> Keeps the current page and jumps to a page within the application. But it cannot jump to a tabbar page. Use ma.navigateBack to return to the original page. The page stack in a mini program can have at most ten levels.

### Parameters

**Object object**

| Property  | Type     | Default | Required | Description                                                                                                               |
|:---------|:---------|:----|:---|:-----------------------------------------------------------------------------------------------------------------|
| url      | String   |     | Yes  | The path (code package path) of the non-tabBar page within the application to jump to. Parameters can be appended after the path. Parameters and the path are separated by ?, parameter keys and values are connected by =, and different parameters are separated by &; e.g. 'path?key=value&key2=value2' |
| event    | Object   |     | No  | Inter-page communication interface, used to listen to data sent from the opened page to the current page.                                                                                     |
| success  | Function |     | No  | Callback function for successful interface call                                                                                                      |
| fail     | Function |     | No  | Callback function for failed interface call                                                                                                      |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)                                                                                         |

### Sample code

```js
ma.navigateTo({
  url: 'example?id=1',
  events: {
    // Add a listener for the specified event to get data sent from the opened page to the current page
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    },
    ...
  },
  success: function(res) {
    // Send data to the opened page via eventChannel
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'example' })
  }
})
```

```javascript
//example.js
Page({
  onLoad: function (option) {
    console.log(option.query);
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('acceptDataFromOpenedPage', { data: 'example' });
    eventChannel.emit('someEvent', { data: 'example' });
    // Listen to the acceptDataFromOpenerPage event to get data sent from the previous page to the current page via eventChannel
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data);
    });
  }
});
```