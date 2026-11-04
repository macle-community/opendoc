# ma.chooseContact

Opens the phone contacts to select a contact.

## Minimum Version

24.3.0

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| phoneNumber | String | Phone number |
| displayName | String | Contact name |

## Usage Example

```javascript
ma.chooseContact({
  success(res) {
    console.log('Contact name:', res.displayName);
    console.log('Phone number:', res.phoneNumber);
  },
  fail(err) {
    console.log('Selection failed:', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- Requires the app to be authorized for contacts permission
