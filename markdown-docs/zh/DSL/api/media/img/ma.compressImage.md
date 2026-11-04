## ma.compressImage(Object object)

> 压缩图片接口，可选压缩质量

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                 |
|:---------|:---------|:----|:---|:---------------------------------------------------|
| src      | String   |     | 是  | 图片路径，图片的路径，支持本地路径、代码包路径 (模拟器仅支持代码包路径，代码包路径注意区分大小写) |
| quality  | Number   | 80  | 否  | 压缩质量，范围 0 ～ 100，数值越小，质量越低，压缩率越高（仅对 jpg 有效）。        |
| success  | Function |     | 否  | 接口调用成功的回调函数                                        |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                        |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                           |

##### object.success 回调函数

###### 参数

###### Object res

| 属性           | 类型     | 说明                  |
|:-------------|:-------|:--------------------|
| errMsg       | String | compressImage: ok   |
| tempFilePath | String | 压缩后图片的临时文件路径 (本地路径) |

### 示例代码

```js
ma.compressImage({
  src: '', // 图片路径
  quality: 80 // 压缩质量
});
```
