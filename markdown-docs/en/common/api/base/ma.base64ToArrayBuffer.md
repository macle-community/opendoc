# ma.base64ToArrayBuffer

Converts a Base64 string to an ArrayBuffer.

## Minimum Version

24.12.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| base64String | string | - | Yes | Base64 string |

## Return Value

ArrayBuffer - ArrayBuffer object

## Usage Example

```javascript
const base64 = 'CxYh';
const arrayBuffer = ma.base64ToArrayBuffer(base64);
console.log('Converted buffer:', arrayBuffer);
```

## Usage Restrictions

- Minimum supported version: 24.12.0
- base64String must be a valid Base64 string
