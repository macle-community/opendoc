## ma.createVideoContext(string id)

> Creates the video context VideoContext object.

### Parameters

#### string id

The id of the video component

### Return Value

#### VideoContext

VideoContext object.

### Sample Code
```html

<video
  id='myVideo'
  src='https://example.test.com/video'
/>
```

```js
Page ({
  onLoad () {
    this.videoContext = ma.createVideoContext ('myVideo');
  },
});
```
