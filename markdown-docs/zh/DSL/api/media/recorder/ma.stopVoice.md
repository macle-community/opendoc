## ma.stopVoice(Object object)

> 结束播放音频（最低版本：23.9.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                       |
|----------|----------|-----|----|--------------------------|
| success  | Function |     | 否  | 接口调用成功的回调函数              |
| fail     | Function |     | 否  | 接口调用失败的回调函数              |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```javascript
page({
    stopVoice() {
        ma.stopVoice({
            success: (res) => {
                console.log({res});
                this.setData({
                    info: format(res)
                });
            },
            fail: (err) => {
                console.log({err});
                this.setData({
                    info: format(err)
                });
            }
        });
    }
})
```

