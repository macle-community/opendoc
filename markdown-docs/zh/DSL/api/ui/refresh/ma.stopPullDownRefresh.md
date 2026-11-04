## ma.stopPullDownRefresh(Object object)

> 停止当前页面下拉刷新。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
Page({
  onPullDownRefresh() {
    ma.stopPullDownRefresh({
      success: function(res) {
        console.log(res);
      },
      fail: function(err) {
        console.log(err);
      }
    });
  }
});
```
