# ma.reportLog

Developer custom log reporting interface.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| level | String | info | No | Log type, supports debug / info / error |
| log | Object / String | - | Yes | Log content; if log is an object, it needs to be JSON-serialized |

## Usage Example

```javascript
ma.reportLog({
  level: 'info',
  log: 'errMsg'
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- log is a required parameter
- level optional values: debug, info, error
- Using this interface requires integration with the mini program SaaS platform
