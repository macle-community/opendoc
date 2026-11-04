## RecorderManager.start(Object object)

> 开始录音，必须要用户授予当前小程序麦克风权限，同时宿主 APP 被允许使用系统麦克风才可调用（最低版本：23.9.0）

### 参数

#### Object object

| 属性               | 类型     | 默认值    | 必填 | 说明                                                           |
|:-----------------|:-------|:-------|:---|:-------------------------------------------------------------|
| duration         | Number | 60000  | 否  | 录音的时长，单位 ms，最大值 180000（3 分钟），若指定 duration 后用户未主动停止录音，录音将自动停止 |
| numberOfChannels | Number | 2      | 否  | 录音通道数（限制有效值），通道数越多，录音质量越高，文件大小越大                             |
| sampleRate       | Number | 8000   | 否  | 采样率，单位 Hz（限制有效值），采样率越高，录音质量越高，文件大小越大，模拟器暂不支持设置采样率            |
| encodeBitRate    | Number | 480000 | 否  | 编码码率，单位 bps（限制有效值），编码码率越高，录音质量越高，文件大小越大，模拟器暂不支持编码码率          |

#### numberOfChannels 合法值

| 合法值 | 说明    |
|:----|:------|
| 1   | 1 个通道 |
| 2   | 2 个通道 |

### 采样率与编码码率限制

每种采样率有对应的编码码率范围有效值，设置不合法的采样率或编码码率会导致录音失败，具体对应关系如下表。

#### sampleRate & encodeBitRate 合法值

| 采样率合法值 | 编码码率对应的合法值     |
|--------|----------------|
| 8000   | 16000 ~ 48000  |
| 11025  | 16000 ~ 48000  |
| 12000  | 24000 ~ 64000  |
| 16000  | 24000 ~ 96000  |
| 22050  | 32000 ~ 128000 |
| 24000  | 32000 ~ 128000 |
| 32000  | 48000 ~ 192000 |
| 44100  | 64000 ~ 320000 |
| 48000  | 64000 ~ 320000 |

### Tips

1. 录音文件格式固定为 AAC，以开始录音时刻的时间命名（yyyyMMddHHmmss.aac），保存在本地临时目录
2. start 接口仅支持在录音空闲时调用，正在录音\录音暂停状态都无法调用 start 接口
3. start 是对录音管理器的操作，操作结果还是通过录音管理器来获取，不同于通常接口的回调方式；录音机正常开始录音，可以通过 RecorderManager.onStart(listener) 监听到，发生错误可以通过 RecorderManager.onError(listener) 监听到

### 示例代码

```html
<button bindtap="recorderStart" type="primary">recorderStart</button>
```

```javascript
Page({
    recorderStart() {
        const { duration, numberOfChannels, sampleRate, encodeBitRate } = this.data;
        const params = { duration, numberOfChannels, sampleRate, encodeBitRate };
        console.log({ startParams: params });
        recorderManager.start(params);
    }
})
```

