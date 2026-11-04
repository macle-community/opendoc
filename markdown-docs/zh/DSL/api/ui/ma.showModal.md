## ma.showModal(Object object)

> 显示模态对话框

> 弹窗样式跟随系统默认弹窗样式，在不同系统版本下样式可能存在不同

### 参数

**Object object**

| 属性           | 类型       | 默认值     | 必填 | 说明                          |
|:-------------|:---------|:--------|:---|:----------------------------|
| title        | String   |         | 否  | 提示的标题                       |
| content      | String   |         | 否  | 提示的内容                       |
| showCancel   | Boolean  | true    | 否  | 是否显示取消按钮                    |
| cancelText   | String   | 取消      | 否  | 取消按钮的文字，最多 4 个字符            |
| cancelColor  | String   | #000000 | 否  | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
| confirmText  | String   | 确定      | 否  | 确认按钮的文字，最多 4 个字符            |
| confirmColor | String   | #576B95 | 否  | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
| editable     | Boolean  | false   | 否  | 是否显示输入框                     |
| success      | Function |         | 否  | 接口调用成功的回调函数                 |
| fail         | Function |         | 否  | 接口调用失败的回调函数                 |
| complete     | Function |         | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）    |

### object.success 回调函数

**参数**

**Object res**

| 属性      | 类型      | 说明                        |
|:--------|:--------|:--------------------------|
| errMsg  | String  | showModal:ok              |
| content | String  | editable 为 true 时，用户输入的文本 |
| confirm | Boolean | 为 true 时，表示用户点击了确定按钮      |
| cancel  | Boolean | 为 true 时，表示用户点击了取消        |

### 示例代码

```js
    ma.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
```
