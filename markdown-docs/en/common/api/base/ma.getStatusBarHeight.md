# ma.getStatusBarHeight

Gets the height of the system status bar.

## Minimum Version

24.3.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for the end of the API call (executed regardless of success or failure) |

### success Callback Parameters

| Parameter Name | Type | Description |
|--------|------|------|
| statusBarHeight / xm_string_callback_key | number | Status bar height (H5 returns `xm_string_callback_key`, DSL returns `statusBarHeight`) |

## Usage Example

```javascript
// Promise approach
ma.getStatusBarHeight().then(res => {
  console.log(res.statusBarHeight || res.xm_string_callback_key);
});

// Callback approach
ma.getStatusBarHeight({
  success(res) {
    console.log(res.statusBarHeight || res.xm_string_callback_key);
  },
  fail(err) {
    console.log('Failed to get:', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- Please note the difference in output parameters between H5 and DSL APIs (H5 returns `xm_string_callback_key`, DSL returns `statusBarHeight`)
