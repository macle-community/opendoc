## ma.getSystemInfo(Object object)

> 获取系统信息

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### object.success 回调函数

#### 参数

#### Object res

| 属性              | 类型     | 说明                                  |
|:----------------|:-------|:------------------------------------|
| brand           | String | 设备品牌                                |
| model           | String | 设备型号。新机型刚推出一段时间会显示 unknown，会尽快进行适配。 |
| id              | String | 设备id(24.3.0新增)                      |
| pixelRatio      | Number | 设备像素比                               |
| screenWidth     | Number | 屏幕宽度，单位 px                          |
| screenHeight    | Number | 屏幕高度，单位 px                          |
| windowWidth     | Number | 可使用窗口宽度，单位 px                       |
| windowHeight    | Number | 可使用窗口高度，单位 px                       |
| statusBarHeight | Number | 状态栏的高度，单位 px                        |
| language        | String | 系统语言                                |
| system          | String | 操作系统及版本                             |

### 示例代码

```js
ma.getSystemInfo({
  success(res) {
    console.log(res.model);
    console.log(res.pixelRatio);
    console.log(res.id);
    console.log(res.windowWidth);
    console.log(res.windowHeight);
    console.log(res.language);
  }
});
```
### Tips

1. 若无法查询到设备id，则返回体中不会有`id`字段
