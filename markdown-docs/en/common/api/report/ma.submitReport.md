# ma.submitReport

Developer directly triggers log reporting.

## Minimum Version

23.12.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

## Usage Example

```javascript
ma.submitReport({
  success() {
    console.log('Submission succeeded');
  },
  fail(err) {
    console.log('Submission failed:', err);
  },
  complete(res) {
    console.log('Completed:', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- Using this interface requires integration with the mini-program SaaS platform
