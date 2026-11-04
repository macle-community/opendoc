## ma.getScreenBrightness(Object object)

> 获取屏幕亮度

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### object.success 回调函数

##### 参数

###### Object object

| 属性     | 类型     | 说明                       |
|:-------|:-------|:-------------------------|
| errMsg | String | getScreenBrightness: ok  |
| value  | Number | 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 |

### 示例代码
```js
ma.getScreenBrightness({
  success: (res) => {
    console.log(res);
  },
  fail (err) {
    console.error(err);
  },
  complete () {
    console.log('getScreenBrightness:complete');
  }
});
```
