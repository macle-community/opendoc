# ma.createBLEConnection

连接蓝牙低功耗设备。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| deviceId | String | - | 是 | 蓝牙设备 id |
| timeout | Number | 30000 | 否 | 连接超时时间，单位 ms，不填表示默认30秒超时 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | createBLEConnection: ok |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | 错误信息 |

## 使用示例

```javascript
ma.createBLEConnection({
  deviceId: 'deviceId',
  timeout: 30000,
  success: (res) => {
    console.log('连接成功', res);
  },
  fail: (res) => {
    console.error('连接失败', res);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- deviceId 为必填参数

## Tips

若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需再次进行搜索操作。如果在iOS设备上，关闭了蓝牙模块，则必须再次调用 `ma.startBluetoothDevicesDiscovery` 接口搜索到蓝牙设备以后，再调用连接蓝牙低功耗设备接口。
