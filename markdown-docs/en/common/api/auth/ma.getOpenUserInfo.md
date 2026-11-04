# ma.getOpenUserInfo

Obtains the user's public information.

## Minimum Version

24.3.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | getOpenUserInfo: ok |
| userInfo | Object | User public information object |

#### UserInfo Structure

| Property | Type | Description |
|------|------|------|
| nickName | String | User nickname |
| avatarUrl | String | User avatar image URL |
| country | String | User nationality |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | Error message |
| errno | String | Error code |

## Usage Example

```javascript
ma.getOpenUserInfo({
  success(res) {
    console.log('Nickname:', res.userInfo.nickName);
    console.log('Avatar:', res.userInfo.avatarUrl);
    console.log('Country:', res.userInfo.country);
  },
  fail(err) {
    console.log('Failed to get:', err.errMsg);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- Using this API requires integration with the mini program SaaS platform
- Using this API requires the host application to implement and inject relevant functions such as obtaining the user's public information
