# ma.getSystemSetting

获取设备的系统设置信息。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| bluetoothEnabled | Boolean | 蓝牙系统的开关状态 |
| locationEnabled | Boolean | 地理位置的系统开关状态 |
| wifiEnabled | Boolean | Wi-Fi 的系统开关状态 |
| deviceOrientation | String | 设备方向，可能的值为 landscape 或 portrait |

## 使用示例

```javascript
ma.getSystemSetting({
  success(res) {
    console.log('蓝牙:', res.bluetoothEnabled);
    console.log('定位:', res.locationEnabled);
    console.log('Wi-Fi:', res.wifiEnabled);
    console.log('方向:', res.deviceOrientation);
  }
});
```

## 使用限制

- 最低支持版本：24.12.0
