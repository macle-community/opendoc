# ma.removeCustomEvent

Removes a previously set mini program custom event listener.

## Minimum Version

25.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| eventName | String | - | Yes | Custom event name (the event name cannot be an empty string) |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | removeCustomEvent: ok |

## Usage Example

```javascript
ma.removeCustomEvent({
  eventName: 'lockScreen',
  success: (res) => {
    console.log('Removed successfully', res);
  },
  fail: (err) => {
    console.log('Removal failed', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 25.12.0
- eventName is a required parameter and cannot be empty

## Tips

1. The custom event API does not affect the existing base events of the mini program
