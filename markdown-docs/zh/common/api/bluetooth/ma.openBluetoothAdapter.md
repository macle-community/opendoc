# ma.openBluetoothAdapter

初始化蓝牙模块。

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
| errMsg | String | openBluetoothAdapter: ok |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | 错误信息 |
| state | Number | 蓝牙状态码（仅 iOS 生效） |

#### state 状态码说明

| 状态码 | 说明 |
|--------|------|
| 0 | 蓝牙状态未知 |
| 1 | 蓝牙状态重置中 |
| 2 | 蓝牙状态不支持 |
| 3 | 蓝牙状态未授权 |
| 4 | 蓝牙状态未开启 |

## 使用示例

```javascript
ma.openBluetoothAdapter({
  success: (res) => {
    console.log('蓝牙初始化成功', res);
  },
  fail: (res) => {
    console.log('蓝牙初始化失败:', res.errMsg);
    if (res.state !== undefined) {
      console.log('蓝牙状态码:', res.state);
    }
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- 需要设备支持蓝牙功能
- 需要应用授权蓝牙权限
