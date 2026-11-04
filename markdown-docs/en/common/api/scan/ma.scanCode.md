# ma.scanCode

Opens the scanning interface to scan a QR code or barcode.

## Parameters

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| onlyFromCamera | Boolean | false | No | Whether to only scan from the camera, disallowing selecting images from the album |
| scanType | Array | ['barCode', 'qrCode'] | No | Scan type |
| success | Function | - | No | Callback function for successful interface call |
| fail | Function | - | No | Callback function for failed interface call |
| complete | Function | - | No | Callback function for interface call completion (executed on both success and failure) |

### scanType Valid Values

| Value | Description |
|----|------|
| barCode | One-dimensional code |
| qrCode | Two-dimensional code |
| datamatrix | Data Matrix code |
| pdf417 | PDF417 barcode |

### success Callback Parameters

| Attribute | Type | Description |
|------|------|------|
| errMsg | String | Scan success message |
| result | String | The content of the scanned code |
| scanType | String | The type of the scanned code |

## Usage Example

```javascript
// Allow scanning from camera and album
ma.scanCode({
  success(res) {
    console.log('Scan result:', res.result);
    console.log('Scan type:', res.scanType);
  }
});

// Only allow scanning from camera
ma.scanCode({
  onlyFromCamera: true,
  success(res) {
    console.log('Scan result:', res.result);
  }
});
```

## Usage Restrictions

- scanType optional values: barCode, qrCode, datamatrix, pdf417
