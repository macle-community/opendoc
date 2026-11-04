## ma.getBatteryInfo(Object object)

> 获取设备电量

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### object.success 回调函数

##### 参数

##### Object res

| 属性         | 类型      | 说明                |
|:-----------|:--------|:------------------|
| errMsg     | String  | getBatteryInfo:ok |
| level      | Number  | 设备电量，范围 1 - 100   |
| isCharging | Boolean | 是否正在充电中           |

### 示例代码
```js
ma.getBatteryInfo({
  success: (res) => {
    console.log(res.level);
    console.log(res.isCharging);
  }
});
```
