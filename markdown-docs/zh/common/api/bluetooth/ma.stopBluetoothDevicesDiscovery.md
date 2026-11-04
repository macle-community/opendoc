# ma.stopBluetoothDevicesDiscovery

停止搜寻附近的蓝牙外围设备。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | stopBluetoothDevicesDiscovery: ok |

## 使用示例

```javascript
ma.stopBluetoothDevicesDiscovery({
  success: (res) => {
    console.log('停止搜索成功', res);
  },
  fail: (res) => {
    console.error('停止搜索失败', res);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
