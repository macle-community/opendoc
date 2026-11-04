# ma.capsuleStyle

设置小程序顶部胶囊按钮的样式。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| style | Number | - | 是 | 样式，有效值 0（宿主 app light 模式）、1（宿主 app dark 模式） |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
// 支持 Promise
ma.capsuleStyle({ style: 0 }).then(res => {
  console.log(res);
});

// 回调方式
ma.capsuleStyle({
  style: 1,
  success(res) {
    console.log('设置成功', res);
  },
  fail(err) {
    console.log('设置失败', err);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- style 为必填参数，可选值：0（light 模式）、1（dark 模式）
