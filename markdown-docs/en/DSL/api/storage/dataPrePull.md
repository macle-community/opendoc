## Data pre-pull

> Initiates requests in advance during mini program cold start, **and caches the request content**, using the cached data for real requests to reduce network request time.

### Introduction

Generally, a mini program obtains network data via ma.request after the home page loads. At runtime, mini program developers can pre-fetch data for the next step that the user might trigger. The main function of mini program data pre-fetch is to initiate network requests in advance according to the rules configured by the mini program and cache them before startup, and directly use the cached data after the mini program starts, to avoid showing loading or incomplete page display due to waiting for network data to return

### Usage flow

### Configure pre-fetch rules

Create preload.fetch in the root directory of the mini program project and fill in the preloading configuration.

![Sample diagram](STORAGE_PRELOAD)

### preload.fetch configuration

**Note:** The actual configuration file does not support comments. The comments in the file below are only to better explain the purpose of each field. Please remove them from the configuration file when copying.

| Property   | Type     | Required | Description                | Default |
|-----------|--------|----|:------------------|-----|
| fetchType | String | No  | Cache data type, fixed value `pre` | pre |
| params    | Object | Yes  | Request for parsing the configuration           |     |

```json
// preload.fetch
[
  {
    "fetchType": "pre", // Data pre-pull, fixed as pre
    "params": {
      "url": "https:*****", // The requested URL address
      "method": "POST", // http method, supports GET/POST.
      "data": { "foo": "bar" },
      "timeout": 60000,
      "header": {
        // Optional. Additional header information
        "content-type": "application/x-www-form-urlencoded"
      }
    }
  }
]
```

(Currently preload.fetch only takes the <font color="red">**first 10 entries**</font> of data)

### params configuration description

| Property  | Type     | Required | Description                                                                               |
|---------|--------|----|:---------------------------------------------------------------------------------|
| url     | String | Yes  | Developer server interface address, supports variable ${token}, obtains token via storage                                     |
| header  | Object | No  | Sets the request header. **Referer** cannot be set in the header. content-type defaults to **application/json**, supports variables |
| timeout | Number | No  | Timeout duration, in milliseconds                                                                       |
| method  | String | No  | HTTP request method, supports Get and Post                                                          |
| data    | Object | No  | Request parameters, supports variables                                                                       |

### Get pre-fetched data

#### ma.request gets pre-fetched data

When the `fetchType` parameter value in preload.fetch is `pre`, calling ma.request returns pre-fetched data

ma.request adds a `preload` callback to return pre-fetched data

If the corresponding pre-fetch request has not finished when the normal request arrives, `preload` returns the previous pre-fetched data

(On first launch of the mini program, if pre-fetch is not complete, the return is empty)

##### preload return value

| Property    | Type     | Description           |
|------------|--------|--------------|
| data       | String | Data returned by the developer server  |
| statusCode | Number | Pre-fetched data status code      |
| errMsg     | String | Detailed info of pre-fetch success or failure |

### Sample code

```js
// Get pre-fetched data when the fetchType parameter value in preload.fetch is pre
ma.request({
"method":"GET",
 "url":"https:*****",
 "header":{
   "content-type":"application/json"
 },
 "data":{
   "token":"xxxxxxx",
   },
 timeout:"60000"，
 success(res){},
 fail(res){},
 preload(res){ // Returns pre-fetched data
	console.log(res.data)
 }
})
```

#### ma.getBackgroundFetchData gets pre-fetched data

Call [ma.getBackgroundFetchData](GET_BACKGROUND_FETCH_DATA) to get all data cached by data pre-pull

### Bug & Tip

- Pre-fetch updates the cache each time the mini program starts
- The cache is cleared each time the mini program is updated to avoid an oversized cache
- Each cache entry is at most 1M
