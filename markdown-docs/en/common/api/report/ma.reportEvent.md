# ma.reportEvent

Event reporting.

## Minimum Version

24.6.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| eventId | String | - | Yes | Monitoring ID, obtained after creating a data metric on the mini program management platform |
| eventData | Object | - | No | An object that can be JSON.stringify'd, which will be reported to the system together (supported since 24.9.0) |

## Usage Example

```javascript
ma.reportEvent({
  eventId: 'button_click',
  eventData: {
    buttonId: 'submit',
    pageName: 'home'
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- eventId is a required parameter
- The values of eventData can only be of string or number type
- Using this interface requires integration with the mini program SaaS platform
