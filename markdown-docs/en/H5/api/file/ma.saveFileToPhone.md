# ma.saveFileToPhone

Saves a file to phone storage.

> Used to save Base64-encoded file data to the local storage of a mobile device.
> On Android, files are saved by default in the device's public Downloads directory (Downloads/).
> On iOS, files are saved within the app sandbox directory, which users cannot directly access via the Files app; the openDocument interface must be used together to enable file preview functionality.

## Minimum Version

24.3.0

## Parameter Description

| Parameter Name             | Type     | Required | Description                                       |
|----------------|----------|-----|------------------------------------------|
| content        | string   | Yes   | Base64 encoding                                 |
| fileName       | string   | Yes   | File name                                      |
| openSharePanel | boolean  | No   | Defaults to false; when set to true, the system share panel is invoked after the file is saved (iOS only) |
| success        | Function | No   | Success callback                                    |
| fail           | Function | No   | Failure callback                                    |
| complete       | Function | No   | Completion callback                                    |

## Callback Parameters

| Parameter Name       | Type     | Description                                 |
|----------|--------|------------------------------------|
| result   | string | Save result                              |
| filePath | string | Saved file path                            |
| path     | string | Saved file path (use this path when calling ma.openDocument to open) |

## Usage Example

```javascript
// Promise supported
ma.saveFileToPhone({ content: 'xxxx', fileName: 'xxxx', openSharePanel: true }).then(res => {
  console.log(res.filePath);
  console.log(res.path);
});

// Callback style
ma.saveFileToPhone({
  content: 'file content here',
  fileName: 'test.txt',
  openSharePanel: true,
  success: function(res) {
    console.log('Saved successfully, file path:', res.filePath);
  },
  fail: function(err) {
    console.log('Save failed:', err);
  }
});
```

## Usage Restrictions

- Minimum supported version: 24.3.0
- content and fileName are required parameters
- If an image is saved via this interface, it is recommended to configure openSharePanel (supported from version 25.9.0) to save directly to the album for user convenience