# ma.startBluetoothDevicesDiscovery

开始搜寻附近的蓝牙外围设备。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| services | Array | - | 否 | 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID），用于过滤设备 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | startBluetoothDevicesDiscovery: ok |

## 使用示例

```javascript
ma.startBluetoothDevicesDiscovery({
  services: ['180D'],  // 过滤心率服务的设备
  success: (res) => {
    console.log('开始搜索', res);
  },
  fail: (res) => {
    console.log('搜索失败', res);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- 需要在蓝牙模块初始化后使用
- 搜索过程会消耗电量，建议在需要时开启，搜索完成后及时停止

## F&Qs

**Q:** 安卓机器上搜寻附近的蓝牙外围设备搜索不到设备，如何排查？

**A:** 如果使用安卓手机长时间无法搜索到附近的蓝牙设备，您可以排查手机的定位服务是否开启，并在确认开启后尝试重新搜索设备。
