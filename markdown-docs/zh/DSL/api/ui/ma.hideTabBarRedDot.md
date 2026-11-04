## ma.hideTabBarRedDot(Object object)

> 隐藏 tabBar 某一项的右上角的红点

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| index    | Number   |     | 是  | 指定tabBar中的目标项索引，从左边算起    |
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码
```js
ma.hideTabBarRedDot({
  index: 1,
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```
