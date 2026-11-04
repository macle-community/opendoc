# ma.postMessage

An embedded H5 sends a message to the webview.

## Minimum Version

25.12.0

## Parameter Description

| Parameter Name     | Type  | Required | Description       |
|---------|-----|-----|----------|
| message | any | Yes   | Message content to send |

## Usage Example

```javascript
ma.postMessage({ action: 'refresh' });
```

## Usage Restrictions

- Minimum supported version: 25.12.0
- message is a required parameter