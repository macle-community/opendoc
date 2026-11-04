## ma.hideKeyboard(Object object)

> 在 input、textarea 等 focus 拉起键盘之后，手动调用此接口收起键盘

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|:---------|:---------|:----|:---|:-------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
ma.hideKeyboard({
  success: () => {
    ma.showToast({
      title: '隐藏键盘成功',
      icon: 'success',
      duration: 2000
    })
  }
});
```
