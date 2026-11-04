# ma.getBackgroundFetchData

Gets all data cached by data pre-fetch.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name       | Type     | Required | Description    |
|-----------|----------|-----|-------|
| fetchType | string   | Yes   | Pre-fetch type |
| success   | Function | No   | Success callback  |
| fail      | Function | No   | Failure callback  |
| complete  | Function | No   | Completion callback  |

## Callback Parameters

| Parameter Name           | Type     | Description           |
|---------------|--------|--------------|
| data          | Array  | Pre-fetched data list   |
| fetchedData   | string | Pre-fetched data content  |
| timeStamp     | number | Timestamp         |
| path          | string | Page path       |
| query         | Object | Page parameters       |

## Usage Example

```javascript
ma.getBackgroundFetchData({
  fetchType: 'pre',
  success(res) {
    console.log(res.data[i].fetchedData);
    console.log(res.data[i].timeStamp);
    console.log(res.data[i].path);
    console.log(res.data[i].query);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- fetchType is a required parameter