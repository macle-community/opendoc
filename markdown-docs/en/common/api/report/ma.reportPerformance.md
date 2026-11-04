# ma.reportPerformance

Developer-defined metric reporting interface.

## Minimum Version

23.12.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| reportEvent | String | - | Yes | The value of the performance metric event, including both preset and custom values |
| reportParams | Object | - | Yes | Developer-defined performance metrics |

## Usage Example

```javascript
ma.reportPerformance({
  reportEvent: 'testEvent',
  reportParams: {
    customPerformance: 'error'
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- reportEvent and reportParams are required parameters
- reportEvent must be a string
- reportParams must be an object
- Using this interface requires integration with the mini-program SaaS platform

## Predefined Performance Metrics

### Ma9073001 — Mini-program Startup Duration

```json
{
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "startupTime": 100,
  "eventTime": "2024-01-01 00:00:00"
}
```

### Ma9073002 — Mini-program Network Request

```json
{
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "requestDuration": 200,
  "requestTime": "2024-01-01 00:00:00",
  "eventTime": "2024-01-01 00:00:00",
  "requestType": "request",
  "requestPage": "pages/index/index",
  "requestUrl": "https://example.com/api",
  "requestResultCode": 200,
  "requestResultDesc": "success"
}
```

### Ma9073003 — Page Loading Duration

```json
{
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "loadingEndTime": "2024-01-01 00:00:00",
  "eventTime": "2024-01-01 00:00:00",
  "requestPage": "pages/index/index",
  "pageLoadingTime": 300
}
```

### Ma9073004 — JS Error Log

```json
{
  "logType": "jsErrorMsg",
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "logs": [
    "1999.03.07 10:00:00|errMsg1",
    "1999.03.07 10:00:01|errMsg2"
  ]
}
```

### Ma9073005 — Developer-Defined Log

```json
{
  "logType": "developerLog",
  "miniAppId": "xxx",
  "miniAppversion": "xxx",
  "logs": [
    "1999.03.07 10:00:00|errMsg1"
  ]
}
```
