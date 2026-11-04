# ma.playAudio

播放音频文件。

## 最低版本

23.12.0

## 参数说明

| 参数名      | 类型       | 必填  | 说明       |
|----------|----------|-----|----------|
| url      | string   | 是   | 在线音频网址 |
| success  | Function | 否   | 成功回调     |
| fail     | Function | 否   | 失败回调     |
| complete | Function | 否   | 完成回调     |

## 使用示例

```javascript
ma.playAudio({
  url: 'https://example/test/audio',
  success(res) {
    console.log('播放成功');
  },
  fail(err) {
    console.log('播放失败:', err);
  },
  complete(res) {
    console.log('完成:', res);
  }
});
```

## 使用限制

- 最低支持版本：23.12.0
- url 为必填参数，必须为有效的 URL（在线音频网址）