## FileSystemManager.readFile(Object object)

> 读文件（最低版本：23.6.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                                                                    |
|:---------|:---------|:----|:---|:------------------------------------------------------------------------------------------------------|
| filePath | String   |     | 是  | 要读取的文件路径 (本地路径，允许在usr目录下可以是相对目录，但最终的真实路径不能在usr之外，**允许读取临时路径和缓存路径文件**)                                 |
| encoding | String   |     | 否  | 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容                                                 |
| position | Number   |     | 否  | 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte |
| length   | Number   |     | 否  | 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte                                                    |
| success  | Function |     | 否  | 接口调用成功的回调函数                                                                                           |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                                                                           |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                              |

##### encoding

| 合法值      | 说明                                                                                                                                       |
|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| ascii    |                                                                                                                                          |
| base64   | 注意，选择 base64 编码，data 只需要传 base64 内容本身，不要传 Data URl 前缀，否则会报 fail base64 encode error 错误。例如，传 aGVsbG8= 而不是传 data:image/png;base64,aGVsbG8= |
| ucs2     | 以小端序读取                                                                                                                                   |
| ucs-2    | 以小端序读取                                                                                                                                   |
| utf16le  | 以小端序读取                                                                                                                                   |
| utf-16le | 以小端序读取                                                                                                                                   |
| utf-8    |                                                                                                                                          |
| utf8     | 默认值                                                                                                                                      |
| latin1   |                                                                                                                                          |

##### success 回调函数

##### Object res

| 属性   | 类型                 | 说明                              |
|:-----|:-------------------|:--------------------------------|
| data | String/ArrayBuffer | 文件内容（如果没传encoding返回ArrayBuffer） |


### 示例代码
```js
let fs = ma.getFileSystemManager();

fs.readFile({
  filePath:  `${ma.env.USER_DATA_PATH}/testFile.txt`,
  encoding: 'utf8',
  success: res => {
    console.log(res);
  },
  fail(err) {
    console.log(err);
  }
});
```


### Tips

1. 读取文件的大小限制为 10 MB
