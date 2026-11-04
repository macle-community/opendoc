# ma.miniProgram.postMessage

Sends a message to the mini program; the message event is triggered when the mini program navigates back or the component is destroyed.

## Minimum Version

25.12.0

## Parameter Description

| Parameter Name      | Type              | Required | Description     |
|----------|-----------------|-----|--------|
| data     | string / Object | Yes   | Data to send |
| success  | Function        | No   | Success callback   |
| fail     | Function        | No   | Failure callback   |
| complete | Function        | No   | Completion callback   |

## Usage Example

```javascript
ma.miniProgram.postMessage({
  data: { action: 'refresh', id: 123 },
  success: function() {
    console.log('Message sent successfully');
  }
});
```

## Usage Restrictions

- Minimum supported version: 25.12.0
- data is a required parameter