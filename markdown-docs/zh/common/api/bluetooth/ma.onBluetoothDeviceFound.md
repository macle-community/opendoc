# ma.onBluetoothDeviceFound

监听搜索到新蓝牙设备的事件。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| listener | Function | - | 是 | 搜索到新设备的事件的监听函数 |

### listener 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| devices | Array | 新搜索到的设备列表 |

#### devices 数组项

| 属性 | 类型 | 说明 |
|------|------|------|
| RSSI | Number | 当前蓝牙设备的信号强度，单位 dBm |
| advertisServiceUUIDs | Array | 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 |
| connectable | Boolean | 当前蓝牙设备是否可连接（Android 8.0 以下不支持返回该值） |
| deviceId | String | 蓝牙设备 id |
| localName | String | 当前蓝牙设备的广播数据段中的 LocalName 数据段 |
| name | String | 蓝牙设备名称，某些设备可能没有 |

## 使用示例

```javascript
ma.onBluetoothDeviceFound((res) => {
  console.log('发现新设备:', res.devices);
  res.devices.forEach(device => {
    console.log('设备名称:', device.name);
    console.log('信号强度:', device.RSSI);
  });
});
```

## 使用限制

- 最低支持版本：24.6.0
- 多次调用此方法只会追加监听函数，不会覆盖
