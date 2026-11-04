## ma.startPay(Object object)

> Initiates payment

### Parameters

#### Object object

| Attribute  | Type     | Default | Required | Description                              |
|:----------|:---------|:-------|:---|:----------------------------------------|
| prepayId  | String   |        | Yes  | Payment ID                              |
| orderInfo | String   |        | Yes  | Order detail information                |
| sign      | String   |        | Yes  | Token                                   |
| amount    | Number   |        | Yes  | Payment amount                          |
| success   | Function |        | No  | Callback function for a successful API call |
| fail      | Function |        | No  | Callback function for a failed API call     |

### Sample Code
```js
ma.startPay({
  prepayId: 'prepayId',
  orderInfo: 'orderInfo',
  sign: 'sign',
  amount: 'amount',
  success: () => {}
});
```
