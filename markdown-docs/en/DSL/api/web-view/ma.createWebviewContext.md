## ma.createWebviewContext()

> Creates a WebviewContext object, used to send messages to the web-view component (Minimum version: 25.12.0)

### Return value

#### WebviewContext

WebviewContext object, supports two-way communication with the H5 application inside the webview component

| Property    | Type     | Parameter | Description                                                                                        |
|:------------|:---------|----------|:------------------------------------------------------------------------------------------|
| postMessage | Function | Any      | The mini program sends a message to the H5 application inside the `web-view` component. Together with `ma.postMessage` provided by `js-sdk`, it enables two-way communication between the mini program and the `web-view` web page |
| onMessage   | Function | Function | The mini program listens for the event where the H5 application inside the component sends a message to the mini program. Only a function can be passed in; if an invalid value is passed, messages cannot be received                                       |

### Sample code

```js
const webviewContext = ma.createWebviewContext();

// The mini program sends a message to the H5 inside the container
webviewContext.postMessage({
  testMsg: '111',
});
// Listen for communication from the H5 inside the container to the mini program
webviewContext.onMessage((res) => {
  console.log(res, 'DSL Get Message');
  ma.showModal({
    content: JSON.stringify(res),
    title: 'DSL Get Message',
    success: (res) => {
    },
    fail: (res) => {
    },
    complete: (res) => {
    },
  });
});
```