## ma.makePhoneCall(Object object)

> Makes a phone call

### Parameters

#### Object object

| Attribute   | Type     | Default | Required | Description                                              |
|:------------|:---------|:-------|:---|:--------------------------------------------------------|
| phoneNumber | String   |        | Yes  | The phone number to dial                |
| success     | Function |        | No  | Callback function for a successful API call              |
| fail        | Function |        | No  | Callback function for a failed API call                  |
| complete    | Function |        | No  | Callback function for the end of the API call (executed on both success and failure) |

### Sample Code

```js
ma.makePhoneCall({
  phoneNumber: '1340000' // For example only, not a real phone number
});
```
