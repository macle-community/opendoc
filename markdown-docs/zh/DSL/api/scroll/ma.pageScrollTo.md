## ma.pageScrollTo(Object object)

> 将页面滚动到目标位置，支持滚动距离定位

### 参数

#### Object object

| 属性        | 类型       | 默认值 | 必填 | 说明                          |
|-----------|----------|-----|----|-----------------------------|
| scrollTop | Number   | 0   | 否  | 滚动到页面的目标位置，单位 px            |
| duration  | Number   | 300 | 否  | 滚动动画的时长，单位 ms，若设为0时，会自动取300 |
| success   | Function |     | 否  | 接口调用成功的回调函数                 |
| fail      | Function |     | 否  | 接口调用失败的回调函数                 |
| complete  | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）    |

### 示例代码

```js
ma.pageScrollTo({
  scrollTop: 0,
  duration: 300,
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
})
```
