# ma.saveBase64Image

Saves Base64-encoded image data to the system album.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name      | Type     | Required | Description             |
|----------|----------|-----|----------------|
| base64   | string   | Yes   | Base64-encoded image data |
| success  | Function | No   | Success callback           |
| fail     | Function | No   | Failure callback           |
| complete | Function | No   | Completion callback           |

## Callback Parameters

| Parameter Name     | Type     | Description     |
|---------|--------|---------|
| errMsg  | string | Prompt message  |

## Usage Example

```javascript
// Promise supported
ma.saveBase64Image({ base64: 'xxxx' }).then(res => {
  console.log(res);
});

// Callback style
ma.saveBase64Image({
  base64: 'data:image/png;base64,iVBORw0KGgo...',
  success: function(res) {
    console.log('Saved successfully:', res.errMsg);
  },
  fail: function(err) {
    console.log('Save failed:', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- base64 is a required parameter and must be a valid Base64 string