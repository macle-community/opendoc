# ma.onMessage

The H5 mini program listens for messages from the parent page.

## Minimum Version

25.12.0

## Parameter Description

| Parameter Name      | Type     | Required | Description     |
|----------|----------|-----|--------|
| callback | Function | Yes   | Message callback function |

## Usage Example

```javascript
ma.onMessage(function(data) {
  console.log('Message received:', data);
});
```

## Usage Restrictions

- Minimum supported version: 25.12.0