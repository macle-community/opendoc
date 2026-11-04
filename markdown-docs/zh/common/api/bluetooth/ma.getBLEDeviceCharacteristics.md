# ma.getBLEDeviceCharacteristics

获取蓝牙低功耗设备某个服务中的所有特征。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| deviceId | String | - | 是 | 蓝牙设备 id |
| serviceId | String | - | 是 | 蓝牙服务 UUID，需要先调用 ma.getBLEDeviceServices 获取 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | getBLEDeviceCharacteristics: ok |
| characteristics | Array | 设备特征列表 |

#### characteristics 数组项

| 属性 | 类型 | 说明 |
|------|------|------|
| uuid | String | 蓝牙设备特征的 UUID |
| properties | Object | 该特征支持的操作类型 |

##### properties 对象

| 属性 | 类型 | 说明 |
|------|------|------|
| broadcast | Boolean | 是否支持广播操作 |
| read | Boolean | 是否支持 read 操作 |
| write | Boolean | 是否支持 write 操作 |
| notify | Boolean | 是否支持 notify 操作 |
| indicate | Boolean | 是否支持 indicate 操作 |
| writeNoResponse | Boolean | 是否支持无回复写操作 |
| signedWrite | Boolean | 是否支持有签名写操作 |
| extendedProperties | Boolean | 是否支持扩展属性 |
| notifyEncryption | Boolean | 是否支持加密 notify 操作（仅 iOS） |
| indicateEncryption | Boolean | 是否支持加密 indicate 操作（仅 iOS） |

## 使用示例

```javascript
ma.getBLEDeviceCharacteristics({
  deviceId: 'device_id_here',
  serviceId: 'service_uuid_here',
  success: (res) => {
    console.log('特征列表:', res.characteristics);
    // 遍历特征
    for (const item of res.characteristics) {
      if (item.properties.read) {
        console.log('支持读取:', item.uuid);
      }
      if (item.properties.write) {
        console.log('支持写入:', item.uuid);
      }
    }
  },
  fail(res) {
    console.error('获取特征失败', res);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- deviceId 和 serviceId 为必填参数
