## ma.showTabBar(Object object)

> 显示 tabBar

### 参数

#### Object object

| 属性        | 类型       | 默认值   | 必填 | 说明                       |
|:----------|:---------|:------|:---|:-------------------------|
| animation | Boolean  | false | 否  | 是否需要动画效果                 |
| success   | Function |       | 否  | 接口调用成功的回调函数              |
| fail      | Function |       | 否  | 接口调用失败的回调函数              |
| complete  | Function |       | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
ma.showTabBar({
  animation: true,
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```
