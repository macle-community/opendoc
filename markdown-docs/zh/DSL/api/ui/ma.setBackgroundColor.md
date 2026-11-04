## ma.setBackgroundColor(Object object)

> 动态设置窗口的背景色

### 参数

#### Object object

| 属性                    | 类型       | 默认值 | 必填 | 说明                           |
|:----------------------|:---------|:----|:---|:-----------------------------|
| backgroundColor       | String   |     | 否  | 窗口的背景色，必须为十六进制颜色值            |
| backgroundColorTop    | String   |     | 否  | 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 |
| backgroundColorBottom | String   |     | 否  | 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 |
| success               | Function |     | 否  | 接口调用成功的回调函数                  |
| fail                  | Function |     | 否  | 接口调用失败的回调函数                  |
| complete              | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）     |

### 示例代码

```js
    ma.setBackgroundColor({
      backgroundColor: '#ffffff', // 窗口的背景色为白色
    })

    ma.setBackgroundColor({
      backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
      backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
    })
```
