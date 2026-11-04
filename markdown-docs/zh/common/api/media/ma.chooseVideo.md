# ma.chooseVideo

从本地相册选择视频或使用相机拍摄。

## 最低版本

24.9.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| sourceType | Array | ['album', 'camera'] | 否 | 选择视频的来源 |
| camera | String | 'back' | 否 | 默认拉起的是前置或者后置摄像头。Android 暂不支持 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### sourceType 取值范围

| 值 | 说明 | 备注 |
|----|------|------|
| album | 从相册选视频 | 只配置它，直接调起相册选视频 |
| camera | 使用相机拍摄视频 | 只配置它，直接调起相机拍视频 |

### camera 取值范围

| 值 | 说明 |
|----|------|
| back | 默认拉起后置摄像头 |
| front | 默认拉起前置摄像头 |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | chooseVideo:ok |
| tempFilePath | String | 选定视频的临时文件路径（本地路径） |
| duration | Number | 选定视频的时间长度（精确到两位小数的秒） |
| size | Number | 选定视频的数据量大小 |
| height | Number | 返回选定视频的高度 |
| width | Number | 返回选定视频的宽度 |

## 使用示例

```javascript
ma.chooseVideo({
  sourceType: ['album', 'camera'],
  camera: 'back',
  success(res) {
    console.log('选择的视频路径:', res.tempFilePath);
    console.log('视频时长:', res.duration);
    console.log('文件大小:', res.size);
    console.log('视频尺寸:', res.width, 'x', res.height);
  }
});
```

## 使用限制

- 最低支持版本：24.9.0
- sourceType 可选值：album、camera
- camera 可选值：back、front

## Tips

1. 建议录制视频或者选择视频时长均不超过5分钟，如果超过5分钟可能会导致小程序卡顿
