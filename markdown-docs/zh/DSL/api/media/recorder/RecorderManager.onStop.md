## RecorderManager.onStop(function listener)

> 监听录音结束事件，此时录音机再次进入到录音空闲状态，可以由 RecorderManager.stop() 主动触发，也会在录音发生中断等异常时自动触发（最低版本：23.9.0）

### 参数

#### function listener

录音结束事件的监听函数

##### Object res

| 属性         | 类型   | 说明                          |
| :----------- | :----- | :---------------------------- |
| tempFilePath | String | 录音文件的临时路径 (本地路径) |
| duration     | Number | 录音总时长，单位：ms          |
| fileSize     | Number | 录音文件大小，单位：Byte      |

#### 参数详细说明

1. 录音文件的格式固定为 AAC，并且是以开始录音时刻的时间命名的，保存在本地临时目录下，因此得到的 tempFilePath 格式应为 mafile://tmp_yyyyMMddHHmmss.aac
2. duration 时长可能和录音开始时指定的时长存在毫秒级别的误差

### 导致录音自动结束场景说明

1. 当前页面发生路由变化，如调用 navigateTo、navigateBack、redirectTo、reLaunch 等接口
2. 当前小程序不在宿主 APP 前台运行，如小程序最小化、关闭等
3. 当前小程序进行菜单操作
4. 宿主 APP 不在设备前台运行
5. 设备关闭屏幕
6. 其他应用占用了扬声器或麦克风
7. 正在录音时，使用的麦克风发生变化，如正在通过耳机麦克风录音，此时断开耳机与手机的连接
8. 其他系统异常

### 示例代码

```javascript
Page({
    onload() {
        recorderManager.onStop(() => {
            ma.showToast({
                title: '录音暂停',
                icon: 'success',
                duration: 500
            });
        });
    }
})
```