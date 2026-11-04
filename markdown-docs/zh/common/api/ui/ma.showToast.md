# ma.showToast

显示消息提示框。

## 最低版本

24.3.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| title | String | - | 否 | 提示的内容 |
| icon | String | success | 否 | 图标类型 |
| duration | Number | 1500 | 否 | 提示的持续时间（最大有效值为 10000，超过 10000 按 10000 处理） |
| mask | Boolean | false | 否 | 是否显示透明蒙层，防止触摸穿透 |
| image | String | - | 否 | 自定义图标的本地路径，image 的优先级高于 icon |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### icon 合法值

| 值 | 说明 |
|----|------|
| success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度 |
| error | 显示失败图标，此时 title 文本最多显示 7 个汉字长度 |
| loading | 显示加载图标，此时 title 文本最多显示 7 个汉字长度 |
| none | 不显示图标，此时 title 文本最多显示两行 |

## 使用示例

```javascript
// 支持 Promise
ma.showToast({
  title: 'success'
}).then(res => {
  console.log(res);
});

// 回调方式
ma.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000,
  success(res) {
    console.log('显示成功', res);
  }
});
```

## 使用限制

- 最低支持版本：24.3.0
- title 和 icon 为推荐参数
- icon 可选值：success、error、loading、none
