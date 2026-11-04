# ma.getNetworkType

获取当前设备连接的网络类型。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | getNetworkType:ok |
| networkType | String | 网络类型 |
| isConnectVPN | Boolean | 是否连接 VPN（最低版本 25.9.0） |
| signalStrength | Number | 信号强弱，单位 dbm（仅 Android） |

### networkType 合法值

| 合法值 | 说明 |
|--------|------|
| wifi | Wi-Fi 网络 |
| 2g | 2G 网络 |
| 3g | 3G 网络 |
| 4g | 4G 网络 |
| 5g | 5G 网络 |
| unknown | Android 下不常见的网络类型 |
| none | 设备当前没有网络连接 |

## 使用示例

```javascript
ma.getNetworkType({
  success(res) {
    const networkType = res.networkType;
    console.log('网络类型:', networkType);
    if (res.isConnectVPN) {
      console.log('当前设备正在使用 VPN');
    }
  },
  fail(err) {
    console.log('获取失败:', err);
  }
});
```

## Tips

1. 在连接 VPN 并连接 wifi 或者关闭所有网络情况下需要做网络通达性验证，推荐使用的时候加 loading 获取。
