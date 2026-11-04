## ma.getBackgroundFetchData

> Gets all data cached by data pre-pull. This API waits for all pre-fetch requests to complete (without using the previous data), stores all pre-fetched data in a JsonArray, and returns it to the user (Minimum version: 23.12.0)

### Parameters

| Property   | Type     | Default | Required | Description                       |
|-----------|----------|-----|:---|--------------------------|
| fetchType | String   |     | Yes  | Cache data type, fixed value `pre`        |
| success   | Function |     | No  | Callback function for successful interface call              |
| fail      | Function |     | No  | Callback function for failed interface call              |
| complete  | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |



#### success callback function

##### Return value

##### object

| Property | Type    | Description     |
|------|-------|--------|
| data | Array | Cached data collection |

##### data

| Property     | Type    | Description            |
|-------------|--------|---------------|
| fetchedData | String | Cached data          |
| timeStamp   | Number | Timestamp when the client obtained the cached data |
| path        | String | Page path          |
| query       | String | Query parameter          |



### Sample code

```js
// ma.getBackgroundFetchData api
ma.getBackgroundFetchData({
  fetchType: 'pre',
  success(res) {
    console.log(res.data[i].fetchedData); // Cached data
    console.log(res.data[i].timeStamp); // Timestamp when the client obtained the cached data
    console.log(res.data[i].path); // Page path
    console.log(res.data[i].query); // query parameter
  }
});
```


