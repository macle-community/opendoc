## ma.setKeepScreenOn(Object object)

> 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。

### 参数

#### Object object

| 属性           | 类型       | 默认值 | 必填 | 说明                       |
|:-------------|:---------|:----|:---|:-------------------------|
| keepScreenOn | Boolean  |     | 是  | 是否保持屏幕常亮                 |
| success      | Function |     | 否  | 接口调用成功的回调函数              |
| fail         | Function |     | 否  | 接口调用失败的回调函数              |
| complete     | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
ma.setKeepScreenOn({
  keepScreenOn: true
});
```
