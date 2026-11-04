# ma.onKeyboardHeightChange

Listens for keyboard height change events.

## Minimum Version

24.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| listener | Function | - | Yes | Listener function for keyboard height change events |

### listener Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| height | number | Keyboard height |

## Usage Example

```javascript
ma.onKeyboardHeightChange(res => {
  console.log('Keyboard height:', res.height);
});

// Remove all listeners
ma.offKeyboardHeightChange();

// Must pass the same function object as when listening
const listener = function (res) {
  console.log(res);
};
ma.onKeyboardHeightChange(listener);
ma.offKeyboardHeightChange(listener);
```

## Usage Restrictions

- Minimum supported version: 24.12.0
