## ma.playVoice(Object object)

> 开始播放音频。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放（最低版本：23.9.0）

### 参数

#### Object object

| 属性       | 类型       | 默认值 | 必填 | 说明                                           |
|----------|----------|-----|----|----------------------------------------------|
| filePath | String   |     | 是  | 需要播放的语音文件的文件路径（本地路径）                         |
| url      | String   |     | 是  | 在线音频网址（新增属性，最低版本：23.12.0）                    |
| duration | Number   | 60  | 否  | 指定播放时长，到达指定的播放时长后会自动停止播放，单位：秒 (仅播放本地音频文件时生效) |
| success  | Function |     | 否  | 接口调用成功的回调函数                                  |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                  |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                     |

### 示例代码

```javascript
page({
    playVoice() {
        const {filePath, playDuration: duration} = this.data;
        console.log({playParams: {filePath, duration}});
        ma.playVoice({
            filePath,
            duration,
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



### Tips

1. 调用此API时，至少要传入本地音频路径`filePath`或在线音频网址`url`中的一项
2. 本地音频路径`filePath`与在线音频网址`url`同时传入时，`filePath`优先级更高