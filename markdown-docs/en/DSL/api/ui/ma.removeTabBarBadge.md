## ma.removeTabBarBadge(Object object)

> Removes the text in the top-right corner of a tabBar item (Minimum version: 24.12.0)

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| index    | Number   |     | Yes  | Which item of the tabBar, counting from the left, starting from 0   |
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

### Sample code
```js
ma.removeTabBarBadge({
  index: 0
})
```

### object.success callback function

#### Parameters

#### Object res

| Property | Type    | Description               |
|:-------|:-------|:-----------------|
| errMsg | String | removeTabBarBadge: ok |

#### object.fail callback function

##### Parameters

##### Object res

| Property | Type        | Description |
|:-------|:-----------|:---|
| errMsg | String     | Error message |
| errno  | Integer    | Error code |

#### Error code list

| Error scenario      | Error code | Android support | iOS support | Simulator support | Development suggestion                                                                                      |
|-----------|-----|--------|---------|---------|-------------------------------------------------------------------------------------------|
| Invalid request parameter type | 1   | Yes      | Yes       | Yes       | Based on errorMsg, check whether the index type in the interface call parameters is valid                                                            |
| Invalid request parameter value | 2   | Yes      | Yes       | Yes       | Based on errorMsg, check whether the parameter values in the interface call parameters are valid, and verify whether the value of index is within the reasonable range of the tabbar index configured by the current mini program. The reasonable range is 0 to the number of configured tabbars minus 1 |
| Missing required request parameter  | 3   | Yes      | Yes       | Yes       | Based on errorMsg, check whether the interface call parameters contain the index parameter                                                            |