## ma.navigateBack(Object object)

> 关闭当前页面，返回上一级页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。

### 参数

**Object object**

| 属性       | 类型       | 默认值 | 必填 | 说明                              |
|:---------|:---------|:----|:---|:--------------------------------|
| delta    | Number   | 1   | 否  | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |
| success  | Function |     | 否  | 接口调用成功的回调函数                     |
| fail     | Function |     | 否  | 接口调用失败的回调函数                     |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）        |

### 示例代码

```js
//注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码
ma.navigateTo({
  url: 'B?id=1'
});

// 此处是B页面
ma.navigateTo({
  url: 'C?id=1'
});

// 在C页面内 navigateBack，将返回A页面
ma.navigateBack({
  delta: 2
});
```
