# ma.offKeyboardHeightChange

移除键盘高度变化事件的监听函数。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| listener | Function | - | 否 | onKeyboardHeightChange 传入的监听函数。不传此参数则移除所有监听函数 |

## 使用示例

```javascript
const listener = function (res) {
  console.log(res);
};

ma.onKeyboardHeightChange(listener);
// 需传入与监听时同一个的函数对象
ma.offKeyboardHeightChange(listener);

// 取消全部监听
ma.offKeyboardHeightChange();
```

## 使用限制

- 最低支持版本：24.12.0
