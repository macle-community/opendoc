# ma.setClipboardData

设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s。

## 最低版本

24.12.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| data | String | - | 是 | 剪贴板的内容 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

## 使用示例

```javascript
ma.setClipboardData({
  data: 'data',
  success(res) {
    ma.getClipboardData({
      success(res) {
        console.log(res.data);
      }
    });
  }
});
```

## 使用限制

- 最低支持版本：24.12.0
- data 为必填参数
- 调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s

## Tips

由于此 API 会将复制内容设置到系统剪切板，请小程序开发者务必保证复制内容的合理合法性。若出现此 API 复制内容为敏感信息导致的信息泄露等风险，由小程序开发者独立承担。
