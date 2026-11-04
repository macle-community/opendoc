## FileSystemManager.exists(Object object)

> 判断文件或文件夹是否存在（最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                                |
|:---------|:---------|:----|:---|:------------------------------------------------------------------|
| path     | String   |     | 是  | 要判断的路径 (本地路径，允许在usr目录下是相对目录，但最终的真实路径不能在usr之外，**允许检查临时路径和缓存路径文件**) |
| success  | Function |     | 否  | 接口调用成功的回调函数                                                       |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                                       |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                          |

#### success 回调函数

##### Object res

| 属性    | 类型      | 说明                                    |
|:------|:--------|:--------------------------------------|
| exist | Boolean | 是否存在                                  |
| type  | String  | 是文件类型（**file**）还是文件夹类型（**directory**） |

### 示例代码
```js
let fs = ma.getFileSystemManager();

fs.readdir({
  path: `path`,
  success(res) {
    console.log(res.exists);
    console.log(res.type);
  },
  fail(err){
    console.log(err);
  }
});
```

