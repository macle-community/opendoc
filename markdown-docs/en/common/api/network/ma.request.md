# ma.request

Initiates an HTTPS network request.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| url | String | - | Yes | Developer server interface address |
| data | String / Object / ArrayBuffer | - | No | Request parameters |
| header | Object | - | No | Sets the request header; Referer cannot be set in the header. content-type defaults to application/json |
| timeout | Number | 60000 | No | Timeout duration, in milliseconds |
| method | String | GET | No | HTTP request method |
| dataType | String | JSON | No | Returned data format |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |
| preload | Function | - | No | Prefetched data callback function for the API call |

### Valid values for method

| Value | Description |
|----|------|
| GET | HTTP request GET |
| POST | HTTP request POST |
| PUT | HTTP request PUT (iOS only) |
| DELETE | HTTP request DELETE (iOS only) |

### Valid values for dataType

| Value | Description |
|----|------|
| JSON | The returned data is JSON; after returning, JSON.parse is performed once on the returned data |
| Others | JSON.parse is not performed on the returned content |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| data | String | Data returned by the developer's server |
| statusCode | Number | HTTP status code returned by the developer's server |
| header | Object | Response headers |

### preload Callback Parameters

| Property | Type | Description |
|------|------|------|
| data | String | Data returned by the developer's server |
| statusCode | Number | Prefetched data status code |
| errMsg | String | Detailed information about prefetch success or failure |

## Usage Example

```javascript
ma.request({
  url: 'http://example/testUrl',
  method: 'GET',
  data: {},
  header: {
    'content-type': 'application/json'
  },
  timeout: 5000,
  dataType: 'JSON',
  success: function(res) {
    console.log('Request succeeded:', res.data);
  },
  fail: function(res) {
    console.log('Request failed:', res.errMsg);
  },
  preload: function(res) {
    console.log('Prefetched data:', res.data);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- url must be a valid HTTPS URL
- data cannot be of Function type
- Default Content-Type is application/json

## Tips

1. Currently, no security domain validation is performed; using https is recommended
2. https does not perform certificate validation; you need to provide certificate validation capability in the MacleEventHandler interface implementation
