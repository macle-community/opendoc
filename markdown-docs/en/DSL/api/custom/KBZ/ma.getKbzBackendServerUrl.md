## ma.getKbzBackendServerUrl(Object object)

> Gets the KBZ mini program service address

### Parameters

#### Object object

| Attribute | Type     | Default | Required | Description                              |
|:--------|:---------|:-------|:---|:----------------------------------------|
| success | Function |        | No  | Callback function for a successful API call |
| fail    | Function |        | No  | Callback function for a failed API call     |

#### object.success Callback Function

##### Parameters

##### Object res

| Attribute | Type   | Description                 |
|:----|:-------|:---------------------------|
| url | String | KBZ mini program service address |

### Sample Code
```js
ma.getKbzBackendServerUrl({
  success: (res) => {
    console.log(res);
  }
});
```
