# ma.offKeyboardHeightChange

Removes the listener function for keyboard height change events.

## Minimum Version

24.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| listener | Function | - | No | The listener function passed to onKeyboardHeightChange. If this parameter is not provided, all listener functions are removed |

## Usage Example

```javascript
const listener = function (res) {
  console.log(res);
};

ma.onKeyboardHeightChange(listener);
// Must pass the same function object as when listening
ma.offKeyboardHeightChange(listener);

// Remove all listeners
ma.offKeyboardHeightChange();
```

## Usage Restrictions

- Minimum supported version: 24.12.0
