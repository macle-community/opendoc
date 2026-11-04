# ma.tradePay

Initiates a payment request.

## Minimum Version

24.6.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| tradeNO | String | - | Yes | Order ID, obtained by calling the order placement interface |
| orderStr | String | - | Yes | Order details, a string concatenated from order information |
| sign | String | - | Yes | Order details signature |
| extendParam | String | - | No | Extension parameters |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### success Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | tradePay: ok |
| resultCode | String | Return code |
| tradeNO | String | Order ID |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | tradePay: fail, + error reason |
| resultCode | String | Return code |

## Usage Example

```javascript
ma.tradePay({
  tradeNO: 'tradeNO',
  orderStr: 'orderStr',
  sign: 'sign',
  success(res) {
    console.log('Payment result code:', res.resultCode);
    console.log('Transaction order number:', res.tradeNO);
  },
  fail(err) {
    console.log('Payment failed:', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.6.0
- tradeNO, orderStr, and sign are required parameters
- Using this interface requires integration with the mini program SaaS platform
- Using this interface requires the host app to implement and inject the method for obtaining the host app's payment
