# ma.getLaunchOptionsSync

Synchronously retrieves the mini program's launch parameters.

## Minimum Version

23.12.0

## Return Value

Object - Object containing the launch parameters

### Return Parameters

| Property | Type | Description |
|------|------|------|
| path | string | Launch path |
| query | Object | Launch parameters |
| scene | number | Scene value |
| serviceConfig | Array\<Object\> | Launch parameters delivered by the server |

#### serviceConfig Array Item

| Property | Type | Description |
|------|------|------|
| configName | String | Configuration item name |
| configValue | String | Configuration item value |

## Usage Example

```javascript
const { serviceConfig } = ma.getLaunchOptionsSync();
console.log('Launch parameters:', serviceConfig);

// Iterate over the configuration
serviceConfig.forEach(item => {
  console.log(item.configName, item.configValue);
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- Using this API requires integration with the mini program SaaS platform
