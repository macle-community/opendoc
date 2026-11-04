## ma.getSavedFileList(Object object)

> 获取该小程序下已保存的本地缓存文件列表

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### object.success 回调函数

##### 参数

##### Object res

| 属性       | 类型     | 说明                   |
|:---------|:-------|:---------------------|
| errMsg   | String | getSavedFileList: ok |
| fileList | Array  | 文件数组，每一项是一个 fileItem |

##### fileItem

| 结构属性       | 类型     | 说明                                       |
|------------|--------|------------------------------------------|
| filePath   | String | 文件路径 (本地路径)                              |
| size       | Number | 本地文件大小，以字节为单位                            |
| createTime | Number | 文件保存时的时间戳，从 1970/01/01 08:00:00 到当前时间的秒数 |

### 示例代码

```js
ma.getSavedFileList({
  success(res) {
    console.log(res.fileList);
  }
});
```

### Tips

1. 支持通过 `FileSystemManager` 调用
