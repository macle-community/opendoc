# ma.stopAudio

Stops audio playback.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name      | Type     | Required | Description                       |
|----------|----------|----|--------------------------|
| success  | Function | No  | Callback function for a successful API call              |
| fail     | Function | No  | Callback function for a failed API call              |
| complete | Function | No  | Callback function for the end of the API call (executed on both success and failure) |

## Usage Example

```javascript
ma.stopAudio({
  success(res) {
    console.log('Stopped successfully');
  },
  fail(err) {
    console.log('Stop failed:', err);
  },
  complete(res) {
    console.log('Completed:', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0