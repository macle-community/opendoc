## ma.saveFile(Object object)

> 保存文件到本地。注意：**saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**

### 参数

#### Object object

| 属性           | 类型       | 默认值 | 必填 | 说明                       |
|:-------------|:---------|:----|:---|:-------------------------|
| tempFilePath | String   |     | 是  | 需要保存的文件的临时路径 (本地路径)      |
| success      | Function |     | 否  | 接口调用成功的回调函数              |
| fail         | Function |     | 否  | 接口调用失败的回调函数              |
| complete     | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### object.success 回调函数

##### 参数

##### Object res

| 属性            | 类型     | 说明              |
|:--------------|:-------|:----------------|
| errMsg        | String | saveFile: ok    |
| savedFilePath | String | 存储后的文件路径 (本地路径) |

### 示例代码

```js
ma.chooseImage({
  success: function (res) {
    const tempFilePaths = res.tempFilePaths;
    ma.saveFile({
      tempFilePath: tempFilePaths[0],
      success(res) {
        const savedFilePath = res.savedFilePath;
      }
    });
  }
});
```

### Tips

1. 支持通过 `FileSystemManager` 调用
