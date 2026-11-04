# ma.showLoading

显示 loading 提示框，需要主动调用 ma.hideLoading 才能关闭。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| title | String | - | 否 | 加载提示文字 |
| mask | Boolean | false | 否 | 是否显示透明蒙层，防止触摸穿透 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.showLoading({
  title: '加载中'
});

setTimeout(function () {
  ma.hideLoading();
}, 2000);
```

## 使用限制

- 最低支持版本：24.3.0
- 需要主动调用 ma.hideLoading 才能关闭
