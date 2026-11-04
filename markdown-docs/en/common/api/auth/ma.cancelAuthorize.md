# ma.cancelAuthorize

Cancels specific user authorizations.

## Minimum Version

24.9.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| scopes | Array | - | Yes | Array of authorization scopes to cancel |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | cancelAuthorize: ok |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | cancelAuthorize: fail, + error reason (empty if none returned) |

### Permission Set List Exposed by the Mini Program

| Name | Meaning |
|------|------|
| scope.location | Precise geographic location |
| scope.camera | Camera |
| scope.photosAlbums | Read and write photo album |
| scope.contacts | Contacts |
| scope.record | Audio recording |
| scope.gotoBrowser | Permission to open other applications |
| scope.bluetooth | Bluetooth permission |
| scope.payment | Payment permission |
| scope.video | Video recording permission |
| scope.storage | File permission |
| scope.AUTH_BASE | Silent authorization |
| scope.AUTH_USER | User information |
| scope.SEND_MESSAGE | Send messages |
| scope.USER_NICKNAME | User nickname |
| scope.USER_NAME | Username |
| scope.USER_LOGIN_ID | User login ID |
| scope.PLAINTEXT_USER_LOGIN_ID | Plaintext login ID |
| scope.HASH_LOGIN_ID | Hash login ID |
| scope.USER_AVATAR | User avatar |
| scope.USER_GENDER | User gender |
| scope.USER_BIRTHDAY | User birthday |
| scope.USER_NATIONALITY | User nationality |
| scope.USER_CONTACTINFO | User contact information |
| scope.USER_ADDRESS | User address |
| scope.PLAINTEXT_MOBILE_PHONE | User plaintext mobile phone number |

## Usage Example

```javascript
ma.cancelAuthorize({
  scopes: ['scope.location'],
  success: () => {
    console.log('Authorization canceled successfully');
  },
  fail: (err) => {
    console.error('Authorization cancellation failed');
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.9.0
- scopes is a required parameter
