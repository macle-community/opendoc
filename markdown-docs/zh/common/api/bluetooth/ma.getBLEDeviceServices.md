# ma.getBLEDeviceServices

获取蓝牙低功耗设备的所有服务。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| deviceId | String | - | 是 | 蓝牙设备 id。需要已经通过 ma.createBLEConnection 建立连接 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | getBLEDeviceServices: ok |
| services | Array | 设备服务列表 |

#### services 数组项

| 属性 | 类型 | 说明 |
|------|------|------|
| uuid | String | 蓝牙设备服务的 UUID |
| isPrimary | Boolean | 该服务是否为主服务 |

## 使用示例

```javascript
ma.getBLEDeviceServices({
  deviceId: 'device_id_here',
  success: (res) => {
    console.log('服务列表:', res.services);
    for (const service of res.services) {
      if (service.isPrimary) {
        console.log('主服务:', service.uuid);
      }
    }
  },
  fail: (res) => {
    console.error('获取服务失败', res);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- deviceId 为必填参数
