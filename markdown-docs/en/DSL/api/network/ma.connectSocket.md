## ma.connectSocket(Object object)

> Create a WebSocket connection.

### Parameters

#### Object object

| Attribute          | Type      | Default | Required | Description                               |
|:------------------|:---------|:------|:---|:---------------------------------|
| url               | String   |       | Yes      | Developer server wss/ws interface address               |
| header            | Object   |       | No       | HTTP Header; Referer cannot be set in the Header |
| protocols         | Array    |       | No       | Sub-protocol array                            |
| tcpNoDelay        | Boolean  | false | No       | TCP_NODELAY setting when establishing the TCP connection     |
| perMessageDeflate | Boolean  | false | No       | Whether to enable the compression extension                         |
| timeout           | Number   |       | No       | Timeout period, in milliseconds                       |
| success           | Function |       | No       | Callback function for a successful API call                      |
| fail              | Function |       | No       | Callback function for a failed API call                      |
| complete          | Function |       | No       | Callback function for the end of the API call (executed on both success and failure)         |

### Sample Code

```js
    ma.connectSocket({
      url: 'wss://example.com',
      header:{
         'content-type': 'application/json'
      },
      protocols: ['protocol1']
    })
```

### Bug & Tip

1. tip: Currently, no security domain verification is performed; using wss is recommended
2. tip: Currently wss has no certificate verification; the certificate verification capability needs to be provided in the `MacleEventHandler` interface implementation

