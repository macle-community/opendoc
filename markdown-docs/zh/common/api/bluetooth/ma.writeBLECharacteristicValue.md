# ma.writeBLECharacteristicValue

向蓝牙低功耗设备特征值中写入二进制数据。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| deviceId | String | - | 是 | 蓝牙设备 id |
| serviceId | String | - | 是 | 蓝牙特征对应服务的 UUID |
| characteristicId | String | - | 是 | 蓝牙特征的 UUID |
| value | ArrayBuffer | - | 是 | 蓝牙设备特征对应的二进制值 |
| writeType | String | write(iOS) / writeNoResponse(Android) | 否 | 蓝牙特征值的写模式设置 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### writeType 有效值

| 值 | 说明 |
|----|------|
| write | 强制回复写，不支持时报错 |
| writeNoResponse | 强制无回复写，不支持时报错 |
| signedWrite | 强制有签名写 |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | writeBLECharacteristicValue: ok |

## 使用示例

```javascript
let buffer = new ArrayBuffer(1);
let dataView = new DataView(buffer);
dataView.setUint8(0, 0);

ma.writeBLECharacteristicValue({
  deviceId: 'device_id_here',
  serviceId: 'service_uuid_here',
  characteristicId: 'characteristic_uuid_here',
  value: buffer,
  writeType: 'write',
  success(res) {
    console.log('写入成功', res.errMsg);
  },
  fail(res) {
    console.error('写入失败', res);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- deviceId、serviceId、characteristicId、value 为必填参数
- 设备的特征必须支持 write 操作

## Tips

1. 必须设备的特征支持 write 才可以成功调用
2. 针对 iOS 机型，根据当前 BLE 协议，单次传输数据量建议不超过 20 字节，传输的数据较大时建议做分片处理
