# ma.hideLoading

Hides the loading indicator that is currently displayed.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
// Direct call
ma.hideLoading();

// With callback
ma.hideLoading({
  success: function(res) {
    console.log('Hidden successfully', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
