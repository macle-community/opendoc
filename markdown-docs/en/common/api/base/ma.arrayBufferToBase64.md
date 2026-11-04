# ma.arrayBufferToBase64

Converts an ArrayBuffer to a Base64 string.

## Minimum Version

24.12.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| buffer | ArrayBuffer | - | Yes | ArrayBuffer object |

## Return Value

string - Base64 string

## Usage Example

```javascript
const arrayBuffer = new Uint8Array([11, 22, 33]);
const base64 = ma.arrayBufferToBase64(arrayBuffer);
console.log('Base64 string:', base64);
```

## Usage Restrictions

- Minimum supported version: 24.12.0
