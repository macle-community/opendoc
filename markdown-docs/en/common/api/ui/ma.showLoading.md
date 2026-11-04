# ma.showLoading

Displays a loading indicator. You must actively call ma.hideLoading to close it.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| title | String | - | No | Loading prompt text |
| mask | Boolean | false | No | Whether to show a transparent mask to prevent touch penetration |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.showLoading({
  title: 'Loading'
});

setTimeout(function () {
  ma.hideLoading();
}, 2000);
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- You must actively call ma.hideLoading to close it
