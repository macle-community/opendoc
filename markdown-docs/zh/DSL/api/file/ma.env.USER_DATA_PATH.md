## ma.env.USER_DATA_PATH

> 一个常量字符串，表示用户可操作的目录路径。（最低版本：23.6.0）

ma.env.USER_DATA_PATH表示的路径并不是文件的在系统中保存的真实路径，而是SDK提供的**虚拟路径**，该路径在不同系统中转换成真实路径也是不同的。在模拟器中该虚拟路径常量应为 'h t t p ://usr'，在安卓和iOS端侧返回的常量值应为 **mafile://usr**。限制用户的文件操作只允许在该路径下操作。

### 示例代码

```js
Function showDataPath() {
  console.log(ma.env.USER_DATA_PATH);
}
```

