# ma.offBluetoothDeviceFound

取消监听搜索到新蓝牙设备的事件。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| listener | Function | - | 否 | 指定要移除的监听函数，若不指定则移除已注册的所有监听函数 |

## 使用示例

```javascript
// 移除所有监听
ma.offBluetoothDeviceFound();

// 移除指定监听
function clearListener() {
  ma.offBluetoothDeviceFound();
}
```

## 使用限制

- 最低支持版本：24.6.0
