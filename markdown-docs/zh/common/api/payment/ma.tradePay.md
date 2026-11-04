# ma.tradePay

发起支付请求。

## 最低版本

24.6.0

## 参数说明

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|--------|------|--------|------|------|
| tradeNO | String | - | 是 | 订单 ID，调用下单接口得到 |
| orderStr | String | - | 是 | 订单详情，订单信息拼接成的字符串 |
| sign | String | - | 是 | 订单详情签名 |
| extendParam | String | - | 否 | 扩展参数 |
| success | Function | - | 否 | 接口调用成功的回调函数 |
| fail | Function | - | 否 | 接口调用失败的回调函数 |
| complete | Function | - | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### success 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | tradePay: ok |
| resultCode | String | 返回码 |
| tradeNO | String | 订单 ID |

### fail 回调参数

| 属性 | 类型 | 说明 |
|------|------|------|
| errMsg | String | tradePay: fail, + 错误原因 |
| resultCode | String | 返回码 |

## 使用示例

```javascript
ma.tradePay({
  tradeNO: 'tradeNO',
  orderStr: 'orderStr',
  sign: 'sign',
  success(res) {
    console.log('支付结果码:', res.resultCode);
    console.log('交易单号:', res.tradeNO);
  },
  fail(err) {
    console.log('支付失败:', err);
  }
});
```

## 使用限制

- 最低支持版本：24.6.0
- tradeNO、orderStr、sign 为必填参数
- 使用此接口需要对接小程序 saas 平台
- 使用此接口需要宿主应用实现并注入获取宿主应用支付方法
