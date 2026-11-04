## RecorderManager.offStart(function listener)

> 移除录音开始事件监听函数（最低版本：23.9.0）

### 参数

#### function listener

指定要移除的监听函数，若不指定则移除已注册的所有监听函数

### 示例代码

```javascript
Page({
    clearListener() {
        recorderManager.offStart();
    }
})
```