# ma.onKeyboardHeightChange

监听键盘高度变化事件。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| listener | Function | - | 是 | 键盘高度变化事件的监听函数 |

### listener 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| height | number | 键盘高度 |

## 使用示例

```javascript
ma.onKeyboardHeightChange(res => {
  console.log('键盘高度:', res.height);
});

// 取消全部监听
ma.offKeyboardHeightChange();

// 需传入与监听时同一个的函数对象
const listener = function (res) {
  console.log(res);
};
ma.onKeyboardHeightChange(listener);
ma.offKeyboardHeightChange(listener);
```

## 使用限制

- 最低支持版本：24.12.0
