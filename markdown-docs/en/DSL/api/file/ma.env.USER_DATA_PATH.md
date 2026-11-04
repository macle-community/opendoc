## ma.env.USER_DATA_PATH

> A constant string representing the user-operable directory path. (minimum version: 23.6.0)

The path represented by ma.env.USER_DATA_PATH is not the real path where the file is saved in the system, but a **virtual path** provided by the SDK. This path is converted to a real path differently across different systems. In the simulator, this virtual path constant should be 'h t t p ://usr', and on Android and iOS clients the returned constant value should be **mafile://usr**. Users' file operations are only allowed within this path.

### Sample Code

```js
Function showDataPath() {
  console.log(ma.env.USER_DATA_PATH);
}
```

