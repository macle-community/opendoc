# ma.setSwipeBack

设置小程序是否支持手势滑动返回（仅 iOS 系统有效）。

> **注意：** H5 小程序调用此 API 控制全局是否支持滑动，DSL 小程序调用此 API 控制当前页面是否支持滑动。

## 最低版本

26.3.0（仅 iOS 侧生效）

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| enableSwipeBack | Boolean | - | 是 | 是否禁止滑动，false 不禁止，true 禁止 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
// iOS 配置是否禁用左右滑动
ma.setSwipeBack({
  enableSwipeBack: true,
  success: () => {
    console.log('setSwipeBack success');
  },
  fail: (err) => {
    console.error('setSwipeBack fail', err);
  }
});
```

## 使用限制

- 最低支持版本：26.3.0
- 仅 iOS 侧生效
- enableSwipeBack 为必填参数
- H5 小程序调用此 API 控制全局是否支持滑动
- DSL 小程序调用此 API 控制当前页面是否支持滑动
