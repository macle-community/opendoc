# ma.getSystemInfoSync

同步获取系统信息。

## 返回值

Object - 包含系统信息的对象

| 属性 | 类型 | 说明 |
|------|------|------|
| brand | String | 设备品牌 |
| model | String | 设备型号。新机型刚推出一段时间会显示 unknown，会尽快进行适配 |
| id | String | 设备 id（24.3.0 新增） |
| pixelRatio | Number | 设备像素比 |
| screenWidth | Number | 屏幕宽度，单位 px |
| screenHeight | Number | 屏幕高度，单位 px |
| windowWidth | Number | 可使用窗口宽度，单位 px |
| windowHeight | Number | 可使用窗口高度，单位 px |
| statusBarHeight | Number | 状态栏的高度，单位 px |
| language | String | 系统语言 |
| system | String | 操作系统及版本 |

## 使用示例

```javascript
try {
  const res = ma.getSystemInfoSync();
  console.log('设备品牌:', res.brand);
  console.log('设备型号:', res.model);
  console.log('系统版本:', res.system);
  console.log('屏幕宽度:', res.screenWidth);
  console.log('屏幕高度:', res.screenHeight);
  console.log('像素比:', res.pixelRatio);
} catch (e) {
  // 错误处理
}
```

## Tips

1. 若无法查询到设备 id，则返回体中不会有 `id` 字段
