# ma.onScreenRecordingStateChanged

Listens for user screen recording state changes.

## Minimum Version

24.9.0

## Parameter Description

| Parameter Name      | Type     | Required | Description     |
|----------|----------|-----|--------|
| listener | Function | Yes   | Listener callback function |

## Callback Parameters

| Parameter Name   | Type     | Description   |
|-------|--------|------|
| state | string | Recording state |

## Usage Example

```javascript
ma.onScreenRecordingStateChanged(function(res) {
  console.log('Screen recording state:', res.state);
});
```

## Usage Restrictions

- Minimum supported version: 24.9.0
- Supported scope: iOS only