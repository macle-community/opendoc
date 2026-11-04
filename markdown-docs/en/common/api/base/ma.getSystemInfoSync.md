# ma.getSystemInfoSync

Synchronously retrieves system information.

## Return Value

Object - Object containing system information

| Property | Type | Description |
|------|------|------|
| brand | String | Device brand |
| model | String | Device model. Newly released models may show unknown for a period of time and will be adapted as soon as possible |
| id | String | Device id (added in 24.3.0) |
| pixelRatio | Number | Device pixel ratio |
| screenWidth | Number | Screen width, in px |
| screenHeight | Number | Screen height, in px |
| windowWidth | Number | Usable window width, in px |
| windowHeight | Number | Usable window height, in px |
| statusBarHeight | Number | Status bar height, in px |
| language | String | System language |
| system | String | Operating system and version |

## Usage Example

```javascript
try {
  const res = ma.getSystemInfoSync();
  console.log('Device brand:', res.brand);
  console.log('Device model:', res.model);
  console.log('System version:', res.system);
  console.log('Screen width:', res.screenWidth);
  console.log('Screen height:', res.screenHeight);
  console.log('Pixel ratio:', res.pixelRatio);
} catch (e) {
  // Error handling
}
```

## Tips

1. If the device id cannot be queried, the `id` field will not be present in the response body
