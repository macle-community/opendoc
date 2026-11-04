# ma.setSwipeBack

Sets whether the mini-program supports swipe-back gesture (effective only on iOS).

> **Note:** When an H5 mini-program calls this API, it controls whether swipe is supported globally; when a DSL mini-program calls this API, it controls whether swipe is supported on the current page.

## Minimum Version

26.3.0 (effective only on iOS)

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| enableSwipeBack | Boolean | - | Yes | Whether to disable swipe, false does not disable, true disables |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
// Configure whether to disable left/right swipe on iOS
ma.setSwipeBack({
  enableSwipeBack: true,
  success: () => {
    console.log('setSwipeBack success');
  },
  fail: (err) => {
    console.error('setSwipeBack fail', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 26.3.0
- Effective only on iOS
- enableSwipeBack is a required parameter
- When an H5 mini-program calls this API, it controls whether swipe is supported globally
- When a DSL mini-program calls this API, it controls whether swipe is supported on the current page
