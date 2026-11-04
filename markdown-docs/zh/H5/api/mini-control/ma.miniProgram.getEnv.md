# ma.miniProgram.getEnv

判断当前运行环境是否为小程序。

## 参数说明

| 参数名      | 类型       | 必填  | 说明   |
|----------|----------|-----|------|
| callback | Function | 是   | 回调函数 |

## 回调参数

| 参数名         | 类型      | 说明       |
|-------------|---------|----------|
| miniprogram | boolean | 是否在小程序环境 |

## 使用示例

```javascript
ma.miniProgram.getEnv(function(res) {
  console.log('是否小程序环境:', res.miniprogram);
});
```