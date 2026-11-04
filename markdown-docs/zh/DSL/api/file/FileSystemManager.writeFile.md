## FileSystemManager.writeFile(Object object)

> 写文件，如果路径中有目录不存在则写文件失败；如果文件存在则会覆盖内容；如果文件不存在，会新建文件再写入内容（最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型                 | 默认值  | 必填 | 说明                                                                       |
|:---------|:-------------------|:-----|:---|:-------------------------------------------------------------------------|
| filePath | String             |      | 是  | 要写入的文件路径 (本地用户路径，只允许在usr目录下，可以是相对目录，但最终的真实路径不能在usr之外，也**不允许是临时路径和缓存路径**) |
| data     | String/ArrayBuffer |      | 是  | 要写入的文本或二进制数据，可以为空                                                        |
| success  | Function           |      | 否  | 接口调用成功的回调函数                                                              |
| fail     | Function           |      | 否  | 接口调用失败的回调函数                                                              |
| complete | Function           |      | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                                 |
| encoding | String             | utf8 | 否  | 指定写入文件的字符编码                                                              |

##### encoding

| 合法值      | 说明                                                                                                                                       |
|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| ascii    |                                                                                                                                          |
| base64   | 注意，选择 base64 编码，data 只需要传 base64 内容本身，不要传 Data URI 前缀，否则会报 fail base64 encode error 错误。例如，传 aGVsbG8= 而不是传 data:image/png;base64,aGVsbG8= |
| ucs2     | 以小端序读取                                                                                                                                   |
| ucs-2    | 以小端序读取                                                                                                                                   |
| utf16le  | 以小端序读取                                                                                                                                   |
| utf-16le | 以小端序读取                                                                                                                                   |
| utf-8    |                                                                                                                                          |
| utf8     | 默认值                                                                                                                                      |
| latin1   |                                                                                                                                          |


### 示例代码
```js
let fs = ma.getFileSystemManager();
fs.writeFile({
  filePath: `${ma.env.USER_DATA_PATH}/test.txt`,
  data: 'data',
  success(res) {
    console.log(res);
  },
  fail(err) {
    console.log(err);
  }
});
```

### Tips

1. 写入的文件名最大长度为255，过长的文件名称会导致API调用失败
2. 文件大小的上限为10MB
