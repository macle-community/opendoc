# ma.deauthorize

Cancels user authorization.

## Minimum Version

24.9.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | deauthorize: ok |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | deauthorize: fail, + error reason (empty if none returned) |

## Usage Example

```javascript
ma.deauthorize({
  success: () => {
    console.log('All authorizations canceled successfully');
  },
  fail: (err) => {
    console.error('Failed to cancel all authorizations');
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.9.0
