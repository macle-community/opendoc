# ma.chooseImage

从本地相册选择图片或使用相机拍照。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| count | Number | 9 | 否 | 最多可以选择的图片张数 |
| sizeType | Array | ['original', 'compressed'] | 否 | 所选的图片的尺寸（仅 iOS 支持） |
| sourceType | Array | ['album', 'camera'] | 否 | 选择图片的来源 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### sourceType 合法值

| 值 | 说明 | 备注 |
|----|------|------|
| album | 从相册选图 | 只配置它，直接调起相册选图 |
| camera | 使用相机 | 只配置它，直接调起相机拍照 |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | chooseImage:ok |
| tempFilePaths | Array | 图片的本地临时文件路径列表（本地路径） |
| tempFiles | Array | 图片的本地临时文件列表 |

#### tempFiles 结构

| 属性 | 类型 | 说明 |
|------|------|------|
| path | String | 本地临时文件路径（本地路径） |
| size | Number | 本地临时文件大小，单位 Byte |

## 使用示例

```javascript
ma.chooseImage({
  count: 9,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success(res) {
    const tempFilePaths = res.tempFilePaths;
    console.log('选择的图片路径:', tempFilePaths);
    // tempFilePath 可以作为 img 标签的 src 属性显示图片
  }
});
```

## 使用限制

- sizeType 可选值：original、compressed
- sourceType 可选值：album、camera
