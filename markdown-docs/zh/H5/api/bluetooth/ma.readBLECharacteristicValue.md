# ma.readBLECharacteristicValue

读取蓝牙低功耗设备特征值的二进制数据。

## 最低版本

24.6.0

## 参数说明

| 参数名              | 类型       | 必填  | 说明      |
|------------------|----------|-----|---------|
| deviceId         | string   | 是   | 蓝牙设备 ID |
| serviceId        | string   | 是   | 服务 UUID |
| characteristicId | string   | 是   | 特征 UUID |
| success          | Function | 否   | 成功回调    |
| fail             | Function | 否   | 失败回调    |
| complete         | Function | 否   | 完成回调    |

## 使用示例

```javascript
ma.readBLECharacteristicValue({
  deviceId: 'device_id_here',
  serviceId: 'service_uuid_here',
  characteristicId: 'characteristic_uuid_here',
  success: function(res) {
    console.log('特征值:', res.value);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- deviceId、serviceId、characteristicId 为必填参数
- 设备的特征必须支持 read 操作