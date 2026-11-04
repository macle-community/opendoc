# ma.setCustomEvent

Registers a mini program custom event listener that triggers a callback in specified scenarios.

## Minimum Version

25.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| eventName | String | - | Yes | Custom event name (the event name cannot be an empty string) |
| callback | Function | - | Yes | Custom event callback function, can be triggered multiple times when the callback scenario is met |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | setCustomEvent: ok |

## Usage Example

```javascript
ma.setCustomEvent({
  eventName: 'lockScreen',
  callback: (data) => {
    console.log('Received custom event:', data);
  },
  success: (res) => {
    console.log('Registered successfully', res);
  },
  fail: (err) => {
    console.log('Registration failed', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 25.12.0
- eventName and callback are required parameters
- Custom events require the host side to cooperate in designing event scenarios and event names
- Only one callback function can be registered for the same event name; for multiple repeated callbacks, the `callback` passed in the last registration prevails

## Tips

1. Please note that setting an excessive number of listener events will increase additional memory resource consumption; please set a reasonable number of listener events
2. Custom events cannot override the existing base events of the mini program, such as `onAppShow`
