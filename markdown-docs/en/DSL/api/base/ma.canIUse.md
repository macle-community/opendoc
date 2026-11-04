## ma.canIUse(string schema)

> Checks whether the mini program's API, callback, parameter, component, etc. is available in the current version.

### Parameters

**string schema**

Called using the ${API}.${method}.${param}.${option} or ${component}.${attribute}.${option} format

### Return Value

**boolean**

Whether it is available in the current version

**Parameter Description**

${API} represents the API name

${method} represents the calling method; valid values are return, success, object, callback

${param} represents the parameter or return value

${option} represents the optional value of the parameter or the property of the return value

${component} represents the component name

${attribute} represents the component attribute

${option} represents the optional value of the component attribute

### Sample Code

```js
// Property or method of an object
ma.canIUse('Image.src');

// ma interface parameter, callback, or return value
ma.canIUse('openBluetoothAdapter');
ma.canIUse('getSystemInfo.success.screenWidth');
ma.canIUse('showToast.object.image');
ma.canIUse('request.object.method.GET');

// Component attributes
ma.canIUse('scroll-view');
ma.canIUse('button.size');
ma.canIUse('button.type.default');
```
