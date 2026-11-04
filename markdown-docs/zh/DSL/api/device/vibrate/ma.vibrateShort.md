## ma.vibrateShort(Object object)

> 使手机发生较短时间的振动（15 ms）。

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                             |
|:---------|:---------|:----|:---|:-----------------------------------------------|
| type     | String   |     | 是  | 震动强度类型，有效值为：`heavy`、`medium`、`light`(仅 ios 支持) |
| success  | Function |     | 否  | 接口调用成功的回调函数                                    |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                    |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                       |

### 示例代码
```js
ma.vibrateShort({
  type: 'medium',
  success: function(res) {
    console.log(res);
  },
  fail: function(err) {
    console.log(err);
  }
});
```
