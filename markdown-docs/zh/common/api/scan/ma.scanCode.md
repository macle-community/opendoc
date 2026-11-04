# ma.scanCode

唤起扫码界面，扫描二维码或条形码。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| onlyFromCamera | Boolean | false | 否 | 是否只能从相机扫码，不允许从相册选择图片 |
| scanType | Array | ['barCode', 'qrCode'] | 否 | 扫码类型 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### scanType 合法值

| 值 | 说明 |
|----|------|
| barCode | 一维码 |
| qrCode | 二维码 |
| datamatrix | Data Matrix 码 |
| pdf417 | PDF417 条码 |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | 扫码成功信息 |
| result | String | 所扫码的内容 |
| scanType | String | 所扫码的类型 |

## 使用示例

```javascript
// 允许从相机和相册扫码
ma.scanCode({
  success(res) {
    console.log('扫描结果:', res.result);
    console.log('扫码类型:', res.scanType);
  }
});

// 只允许从相机扫码
ma.scanCode({
  onlyFromCamera: true,
  success(res) {
    console.log('扫描结果:', res.result);
  }
});
```

## 使用限制

- scanType 可选值：barCode、qrCode、datamatrix、pdf417
