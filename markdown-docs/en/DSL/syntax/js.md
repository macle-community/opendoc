## Logic layer

The logic layer of the mini program development framework uses a JavaScript engine to provide the mini program with the runtime environment for the developer's JavaScript code and the mini program's specific API.
All the code written by the developer will eventually be packaged into a single JavaScript file, which runs when the mini program starts and until the mini program is destroyed.

### JavaScript support

#### Runtime restrictions

For security reasons, dynamically executing JS code is not supported in mini programs, that is:

- Using eval to execute JS code is not supported
- Using new Function to create functions is not supported
  - Except for new Function('return this')

window, document, etc. are not supported.

### Standard ECMAScript support

The JS execution environment of the mini program differs across platforms. For environments that do not support ES6, such as IOS 9, you need to enable ES6 to ES5 conversion and introduce the relevant Polyfills yourself.

### APIs that cannot be Polyfilled

The following APIs cannot be used in some lower-version environments. Please try to avoid using them

- Proxy object
