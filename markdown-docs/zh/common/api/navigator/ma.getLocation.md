# ma.getLocation

获取当前的地理位置信息。

> 需要 scope.location 授权。

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| useFetchData | Boolean | false | 否 | 是否使用预取数据 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | getLocation: ok |
| latitude | Number | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | Number | 经度，范围为 -180~180，负数表示西经 |
| speed | Number | 速度，单位 m/s |
| accuracy | Number | 位置的精确度 |
| altitude | Number | 高度，单位 m |
| verticalAccuracy | Number | 垂直精度，单位 m（Android 无法获取，返回 0） |
| horizontalAccuracy | Number | 水平精度，单位 m |
| locationEndTime | String | 定位结束时间，格式 YYYY-MM-DD HH:mm:ss |
| locationOrigin | String | 定位信息来源，预拉取返回 `prefetch`，否则返回 `location` |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | 错误信息 |
| errno | Integer | 错误码 |

## 使用示例

```javascript
ma.getLocation({
  useFetchData: false,
  success: function(res) {
    console.log('经度:', res.longitude);
    console.log('纬度:', res.latitude);
    console.log('速度:', res.speed);
  },
  fail: function(res) {
    if (res.errno === 701003) {
      console.log('请打开系统位置权限');
    } else if (res.errno === 701000 || res.errno === 701001) {
      console.log('请在小程序设置中打开位置权限');
    }
  }
});
```

## 使用限制

- 需要应用授权位置权限

## Tips

1. 小程序开发者在获取小程序权限失败的场景下（用户拒绝了授权定位权限），可调用 openSetting API 打开设置
