# ma.miniProgram.getEnv

Determines whether the current runtime environment is a mini program.

## Parameter Description

| Parameter Name      | Type     | Required | Description   |
|----------|----------|-----|------|
| callback | Function | Yes   | Callback function |

## Callback Parameters

| Parameter Name         | Type      | Description       |
|-------------|---------|----------|
| miniprogram | boolean | Whether in a mini program environment |

## Usage Example

```javascript
ma.miniProgram.getEnv(function(res) {
  console.log('Is mini program environment:', res.miniprogram);
});
```