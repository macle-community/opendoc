## Geographic location pre-pull

> The first time a mini program obtains the geographic location ([ma.getLocation](GET_LOCATION)) is usually time-consuming. The mini program framework provides a pre-pull (pre-call) mechanism to advance this process, helping to improve the user experience.

### Usage flow

### Configure pre-fetch rules

Create preload.fetch in the root directory of the mini program project and fill in the preloading configuration.

![Sample diagram](STORAGE_PRELOAD)

### preload.fetch configuration

**Note:** The actual configuration file does not support comments. The comments in the file below are only to better explain the purpose of each field. Please remove them from the configuration file when copying.

| Property   | Type     | Required | Description                              | Default |
|-----------|--------|----|:--------------------------------|-----|
| fetchType | String | No  | Cache data type, fixed value **``getLocation``** | pre |

```json
// preload.fetch
[
  {
    "fetchType": "getLocation", // Geographic location pre-pull, fixed value getLocation
  }
]
```

(Currently preload.fetch only takes the <font color="red">**first 10 entries**</font> of data)



### Get pre-fetched data

ma.getLocation adds a **`useFetchData`** parameter to distinguish whether the data is pre-fetched

Configure **`useFetchData:true`**. If there is pre-fetched data, `success` returns the pre-fetched data; if not, a normal geographic location request is made

### Sample code

```js
// Get pre-fetched data when the fetchType parameter value in preload.fetch is getLocation
ma.getLocation({
  useFetchData: true,
  success(res) {
    console.log(res);
  }
});
```