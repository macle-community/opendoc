## ma.getFileInfo(Object object)

> 获取文件信息

### 参数

#### Object object

| 属性              | 类型       | 默认值      | 必填 | 说明                       |
|:----------------|:---------|:---------|:---|:-------------------------|
| filePath        | String   |          | 是  | 本地文件路径 (本地路径)            |
| digestAlgorithm | String   | 'sha256' | 否  | 计算文件摘要的算法                |
| success         | Function |          | 否  | 接口调用成功的回调函数              |
| fail            | Function |          | 否  | 接口调用失败的回调函数              |
| complete        | Function |          | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### object.digestAlgorithm

| 合法值    | 说明                          |
|--------|-----------------------------|
| sha256 | sha256 算法 (默认)              |
| md5    | md5 算法，该加密算法不安全，建议使用sha256  |
| sha1   | sha1 算法，该加密算法不安全，建议使用sha256 |

##### object.success 回调函数

##### 参数

##### Object res

| 属性     | 类型     | 说明                               |
|:-------|:-------|:---------------------------------|
| errMsg | String | getFileInfo: ok                  |
| size   | Number | 文件大小，以字节为单位                      |
| digest | String | 按照传入的 digestAlgorithm 计算得出的的文件摘要 |

### 示例代码

```js
ma.getFileInfo({
  filePath: 'filePath',
  success(res) {
    console.log(res.size);
    console.log(res.digest);
  }
});
```

### Tips

1. 支持通过 `FileSystemManager` 调用
