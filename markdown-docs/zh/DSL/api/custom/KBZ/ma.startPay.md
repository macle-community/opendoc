## ma.startPay(Object object)

> 发起支付

### 参数

#### Object object

| 属性        | 类型       | 默认值 | 必填 | 说明          |
|:----------|:---------|:----|:---|:------------|
| prepayId  | String   |     | 是  | 发起支付 ID     |
| orderInfo | String   |     | 是  | 订单详情信息      |
| sign      | String   |     | 是  | 令牌          |
| amount    | Number   |     | 是  | 支付金额        |
| success   | Function |     | 否  | 接口调用成功的回调函数 |
| fail      | Function |     | 否  | 接口调用失败的回调函数 |

### 示例代码
```js
ma.startPay({
  prepayId: 'prepayId',
  orderInfo: 'orderInfo',
  sign: 'sign',
  amount: 'amount',
  success: () => {}
});
```
