# ma.getAuthCode

Obtains the user authorization code (login credential). Retrieves user login state information via the credential.

## Minimum Version

24.3.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| scopes | Array | - | Yes | Permission list |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### scopes List

| Permission Name | Permission Description |
|----------|----------|
| AUTH_BASE | Authorize to obtain user ID |
| AUTH_USER | Authorize to obtain user ID and other user information |
| SEND_MESSAGE | Authorize to send notifications to users via SMS, PUSH, or INBOX |
| USER_NICKNAME | Authorize to obtain user nickname |
| USER_NAME | Authorize to obtain username |
| USER_LOGIN_ID | Authorize to obtain the user's login ID |
| PLAINTEXT_USER_LOGIN_ID | Authorize to obtain the user's plaintext login ID |
| HASH_LOGIN_ID | Authorize to obtain the hash of the user's login ID |
| USER_AVATAR | Authorize to obtain the user's avatar |
| USER_GENDER | Authorize to obtain the user's gender |
| USER_BIRTHDAY | Authorize to obtain the user's birthday |
| USER_NATIONALITY | Authorize to obtain the user's nationality |
| USER_CONTACTINFO | Authorize to obtain the user's contact information |
| USER_ADDRESS | Authorize to obtain the user's address |
| PLAINTEXT_MOBILE_PHONE | Authorize to obtain the user's plaintext phone number |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | getAuthCode: ok |
| authCode | String | User login credential |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | Error message |
| errno | String | Error code |

## Error Code List

| Error Scenario | Error Code | Android | iOS | Simulator | Development Suggestion |
|----------|--------|------|-----|--------|----------|
| Invalid request parameter type | 1 | Yes | Yes | Yes | Based on errorMsg, check whether the parameter types in the API call parameters are valid (scopes is an Array) |
| Invalid request parameter value | 2 | Yes | Yes | Yes | Based on errorMsg, check whether the parameter values in the API call parameters are valid (e.g., invalid permission) |
| Missing required request parameter | 3 | Yes | Yes | Yes | Based on errorMsg, check which required parameters in the API call parameters were not filled in |
| The requested permission is not available at the current site | 1201000 | Yes | Yes | No | Based on errorMsg, check whether the permission scopes in the API call parameters are available at the current site |
| User denied the silent login authorization | 1201001 | Yes | Yes | No | Developer should provide a friendly prompt informing the user that relevant permissions need to be authorized |
| User neither authorized nor denied the silent login authorization | 1201002 | Yes | Yes | No | Developer should provide a friendly prompt informing the user that relevant permissions need to be authorized |
| Failed to query the merchant ID and related credentials configured in the management console | 1201003 | Yes | Yes | No | Please contact operations staff to investigate |
| Developer has not configured the merchant ID and related credentials in the management console | 1201004 | Yes | Yes | No | The relevant merchant ID and related credentials need to be configured in the mini program management console |
| Host application has not implemented the relevant adaptation for mini program silent login | 1201005 | Yes | No | No | Contact the current site operations to obtain the corresponding testable host APP version |
| Host APP success callback returned empty information or did not return authCode | 1201006 | Yes | Yes | No | Contact the current site operations staff to coordinate investigation |
| Host APP silent login logic processing failure callback | 1201007 | Yes | Yes | No | Contact the current site operations staff to coordinate investigation |
| Mini program management console internal exception | 1201008 | Yes | Yes | No | Contact the current site operations staff to coordinate investigation |

## Usage Example

```javascript
ma.getAuthCode({
  scopes: ['AUTH_BASE'],
  success(res) {
    console.log('Auth code:', res.authCode);
  },
  fail(err) {
    console.log('Failed to get:', err.errMsg);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- scopes is a required parameter and must be a non-empty array
- Using this API requires integration with the mini program SaaS platform
- Using this API requires the host application to implement and inject relevant functions such as obtaining the authorization code
