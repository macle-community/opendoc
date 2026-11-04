## ma.getsmallappinfo(Object object)

> Queries the basic information of the mini program (minimum version: 23.12.0)

### Parameters

**Object object**

| Attribute | Type     | Default | Required | Description                                              |
|:---------|:---------|:-------|:---|:--------------------------------------------------------|
| success  | Function |        | No  | Callback function for a successful API call              |
| fail     | Function |        | No  | Callback function for a failed API call                  |
| complete | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### object.success Callback Function

**Parameters**

**Object res**

| Attribute | Type   | Required | Description       |
|:---------|:-------|:---|----------------|
| appId    | String | Yes  | Mini program id   |
| name     | String | Yes  | Mini program name |
| appIcon  | String | Yes  | Mini program icon |

### Sample Code

```js
ma.getsmallappinfo({
  success(res) {
    console.log(res.appId);
    console.log(res.name);
    console.log(res.appIcon);
  }
});
```
