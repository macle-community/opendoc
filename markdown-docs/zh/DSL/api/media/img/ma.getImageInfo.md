## ma.getImageInfo(Object object)

> 获取图片信息。网络图片需先配置 download 域名才能生效。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                                |
|:---------|:---------|:----|:---|:--------------------------------------------------|
| src      | String   |     | 是  | 图片的路径，支持网络路径、本地路径、代码包路径 (模拟器不支持本地路径，代码包路径注意区分大小写) |
| success  | Function |     | 否  | 接口调用成功的回调函数                                       |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                       |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                          |

#### object.success 回调函数

##### 参数

###### Object res

| 属性          | 类型     | 说明                  |
|:------------|:-------|:--------------------|
| width       | Number | 图片原始宽度，单位 px。不考虑旋转。 |
| height      | Number | 图片原始高度，单位 px。不考虑旋转。 |
| path        | String | 图片的本地路径             |
| orientation | String | 拍照时设备方向(模拟器不支持)     |
| type        | String | 图片格式                |

#### res.orientation 的合法值

| 值              | 说明                                           |
|----------------|----------------------------------------------|
| up             | 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。 |
| up-mirrored    | 同 up，但镜像翻转，对应 Exif 中的 2                      |
| down           | 旋转 180 度，对应 Exif 中的 3                        |
| down-mirrored  | 同 down，但镜像翻转，对应 Exif 中的 4                    |
| left-mirrored  | 同 left，但镜像翻转，对应 Exif 中的 5                    |
| right          | 顺时针旋转 90 度，对应 Exif 中的 6                      |
| right-mirrored | 同 right，但镜像翻转，对应 Exif 中的 7                   |
| left           | 逆时针旋转 90 度，对应 Exif 中的 8                      |

### 示例代码

```js
ma.getImageInfo({
  src: 'images/a.jpg',
  success(res) {
    console.log(res.width);
    console.log(res.height);
  }
});

ma.chooseImage({
  success(res) {
    ma.getImageInfo({
      src: res.tempFilePaths[0],
      success(res) {
        console.log(res.width);
        console.log(res.height);
      }
    });
  }
});
```
