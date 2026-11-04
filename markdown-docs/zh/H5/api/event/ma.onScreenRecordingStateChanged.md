# ma.onScreenRecordingStateChanged

监听用户录屏状态变化。

## 最低版本

24.9.0

## 参数说明

| 参数名      | 类型       | 必填  | 说明     |
|----------|----------|-----|--------|
| listener | Function | 是   | 监听回调函数 |

## 回调参数

| 参数名   | 类型     | 说明   |
|-------|--------|------|
| state | string | 录制状态 |

## 使用示例

```javascript
ma.onScreenRecordingStateChanged(function(res) {
  console.log('录屏状态:', res.state);
});
```

## 使用限制

- 最低支持版本：24.9.0
- 支持范围：仅iOS