# JSSDK Interface List

> This file summarizes brief descriptions of all JSSDK API interfaces

## Interface Inventory

| Interface Name | Interface Summary | Interface Type | Usage Restrictions | Interface Detail Path |
|----------|----------|----------|----------|--------------|
| ma.arrayBufferToBase64 | Converts an ArrayBuffer to a Base64 string. | base | - Minimum supported version: 24.12.0 | common/api/base/ma.arrayBufferToBase64.md |
| ma.base64ToArrayBuffer | Converts a Base64 string to an ArrayBuffer. | base | - Minimum supported version: 24.12.0<br>- base64String must be a valid Base64 string | common/api/base/ma.base64ToArrayBuffer.md |
| ma.cancelAuthorize | Cancels a specific user authorization. | auth | - Minimum supported version: 24.9.0<br>- scopes is a required parameter | common/api/auth/ma.cancelAuthorize.md |
| ma.capsuleStyle | Sets the style of the capsule button at the top of the mini program. | ui | - Minimum supported version: 24.3.0<br>- style is a required parameter; optional values: 0 (light), 1 (dark) | common/api/ui/ma.capsuleStyle.md |
| ma.chooseContact | Invokes the contact selection interface. | scan | - Minimum supported version: 24.3.0<br>- Requires the app to be authorized for contact permission | common/api/scan/ma.chooseContact.md |
| ma.chooseImage | Selects an image from the album or captures a photo. | media | - sizeType optional values: original, compressed<br>- sourceType optional values: album, camera | common/api/media/ma.chooseImage.md |
| ma.chooseVideo | Selects a video from the album or captures a video. | media | - Minimum supported version: 24.9.0<br>- sourceType optional values: album, camera<br>- camera optional values: back, front | common/api/media/ma.chooseVideo.md |
| ma.clearStorage | Clears all data in the local cache. | storage | - | common/api/storage/ma.clearStorage.md |
| ma.closeBLEConnection | Disconnects from a Bluetooth Low Energy device. | bluetooth | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter | common/api/bluetooth/ma.closeBLEConnection.md |
| ma.closeBluetoothAdapter | Closes the Bluetooth module. | bluetooth | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.closeBluetoothAdapter.md |
| ma.createBLEConnection | Connects to a Bluetooth Low Energy device. | bluetooth | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter | common/api/bluetooth/ma.createBLEConnection.md |
| ma.deauthorize | Cancels user authorization. | auth | - Minimum supported version: 24.9.0 | common/api/auth/ma.deauthorize.md |
| ma.downloadFile | Downloads a file resource to the local device. | network | - Minimum supported version: 23.12.0<br>- url is a required parameter and must be a valid HTTPS URL | common/api/network/ma.downloadFile.md |
| ma.downloadImage | Downloads an image to the local device. | upload-download | - | H5/api/upload-download/ma.downloadImage.md |
| ma.exitMiniProgram | Exits the current mini program. | navigator | - Minimum supported version: 24.6.0 | common/api/navigator/ma.exitMiniProgram.md |
| ma.getAuthCode | Gets the user authorization code. | auth | - Minimum supported version: 24.3.0<br>- scopes is a required parameter and must be a non-empty array | common/api/auth/ma.getAuthCode.md |
| ma.getBLEDeviceCharacteristics | Gets all characteristics of a service on a Bluetooth Low Energy device. | bluetooth | - Minimum supported version: 24.6.0<br>- deviceId and serviceId are required parameters | common/api/bluetooth/ma.getBLEDeviceCharacteristics.md |
| ma.getBLEDeviceServices | Gets all services of a Bluetooth Low Energy device. | bluetooth | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter | common/api/bluetooth/ma.getBLEDeviceServices.md |
| ma.getBackgroundFetchData | Gets all data cached by data pre-fetch. | system | - Minimum supported version: 23.12.0<br>- fetchType is a required parameter | H5/api/system/ma.getBackgroundFetchData.md |
| ma.getClipboardData | Gets the content of the system clipboard. | clipboard | - Minimum supported version: 24.12.0 | common/api/clipboard/ma.getClipboardData.md |
| ma.getLaunchOptionsSync | Synchronously gets the launch parameters of the mini program. | base | - Minimum supported version: 23.12.0 | common/api/base/ma.getLaunchOptionsSync.md |
| ma.getLocalImgData(not yet implemented) | Gets the Base64 data of a local image. | file | - path is a required parameter | H5/api/file/ma.getLocalImgData.md |
| ma.getLocation | Gets the current geographic location information. | navigator | - Requires the app to be authorized for location permission | common/api/navigator/ma.getLocation.md |
| ma.getNetworkType | Gets the network type of the current device connection. | network | - | common/api/network/ma.getNetworkType.md |
| ma.getOpenUserInfo | Gets the user's public information. | auth | - Minimum supported version: 24.3.0 | common/api/auth/ma.getOpenUserInfo.md |
| ma.getStatusBarHeight | Gets the height of the system status bar. | base | - Minimum supported version: 24.3.0<br>- Note the difference from the corresponding DSL interface output parameters | common/api/base/ma.getStatusBarHeight.md |
| ma.getStorage | Asynchronously gets the data for a specified key name from the local cache. | storage | - key is a required parameter | common/api/storage/ma.getStorage.md |
| ma.getStorageInfo | Gets information related to the local cache (note: not implemented in the current version). | storage | - Not implemented in the current version | common/api/storage/ma.getStorageInfo.md |
| ma.getStorageSync | Synchronously gets the data for a specified key name from the local cache. | storage | - Minimum supported version: 24.9.0<br>- key must be of string type | common/api/storage/ma.getStorageSync.md |
| ma.getSystemInfoSync | Synchronously gets system information. | base | - | common/api/base/ma.getSystemInfoSync.md |
| ma.getSystemSetting | Gets the system settings of the device. | base | - Minimum supported version: 24.12.0 | common/api/base/ma.getSystemSetting.md |
| ma.gotoBrowser | Navigates to a third-party browser or application. | navigator | - Minimum supported version: 24.3.0<br>- openUrl is a required parameter and must be a string | common/api/navigator/ma.gotoBrowser.md |
| ma.hideLoading | Hides the loading indicator currently displayed. | ui | - Minimum supported version: 24.3.0 | common/api/ui/ma.hideLoading.md |
| ma.isOnline | Determines whether the current device is connected to the network. | network | - Minimum supported version: 23.12.0 | common/api/network/ma.isOnline.md |
| ma.miniProgram.close | Closes the current mini program. | mini-control | - | H5/api/mini-control/ma.miniProgram.close.md |
| ma.miniProgram.getEnv | Determines whether the current runtime environment is a mini program. | mini-control | - | H5/api/mini-control/ma.miniProgram.getEnv.md |
| ma.miniProgram.postMessage | Sends a message to the mini program; the message event is triggered when the mini program navigates back or the component is destroyed. | mini-message | - Minimum supported version: 25.12.0<br>- data is a required parameter | H5/api/mini-message/ma.miniProgram.postMessage.md |
| ma.navigateToMiniProgram | Navigates from within a mini program to another mini program. | navigator | - Minimum supported version: 23.12.0<br>- appId is a required parameter<br>- If params is passed, path must also be passed | common/api/navigator/ma.navigateToMiniProgram.md |
| ma.offBluetoothDeviceFound | Unlistens from the event of discovering a new Bluetooth device. | bluetooth | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.offBluetoothDeviceFound.md |
| ma.offKeyboardHeightChange | Removes the listener function for keyboard height change events. | device | - Minimum supported version: 24.12.0 | common/api/device/ma.offKeyboardHeightChange.md |
| ma.offScreenRecordingStateChanged | Unlistens from user screen recording state changes. | event | - Minimum supported version: 24.9.0<br>- Supported scope: iOS only | H5/api/event/ma.offScreenRecordingStateChanged.md |
| ma.onBluetoothDeviceFound | Listens for the event of discovering a new Bluetooth device. | bluetooth | - Minimum supported version: 24.6.0<br>- Multiple calls to this method only append listener functions; they do not overwrite | common/api/bluetooth/ma.onBluetoothDeviceFound.md |
| ma.onKeyboardHeightChange | Listens for keyboard height change events. | device | - Minimum supported version: 24.12.0 | common/api/device/ma.onKeyboardHeightChange.md |
| ma.onMessage | The H5 mini program listens for messages from the parent page. | message | - Minimum supported version: 25.12.0 | H5/api/message/ma.onMessage.md |
| ma.onScreenRecordingStateChanged | Listens for user screen recording state changes. | event | - Minimum supported version: 24.9.0<br>- Supported scope: iOS only | H5/api/event/ma.onScreenRecordingStateChanged.md |
| ma.openBluetoothAdapter | Initializes the Bluetooth module. | bluetooth | - Minimum supported version: 24.6.0<br>- Requires the device to support Bluetooth functionality<br>- Requires the app to be authorized for Bluetooth permission | common/api/bluetooth/ma.openBluetoothAdapter.md |
| ma.openDocument | Opens and previews various types of document files. | file | - filePath is a required parameter<br>- fileType optional values: doc, docx, xls, xlsx, ppt, pptx, pdf | common/api/file/ma.openDocument.md |
| ma.playAudio | Plays an audio file. | audio | - Minimum supported version: 23.12.0<br>- url is a required parameter and must be a valid URL (online audio URL) | H5/api/audio/ma.playAudio.md |
| ma.postMessage | An embedded H5 sends a message to the webview. | message | - Minimum supported version: 25.12.0<br>- message is a required parameter | H5/api/message/ma.postMessage.md |
| ma.previewImage | Views images in the image preview interface. | media | - urls is a required parameter and must be a non-empty array | common/api/media/ma.previewImage.md |
| ma.readBLECharacteristicValue | Reads the binary data of a Bluetooth Low Energy device characteristic value. | bluetooth | - Minimum supported version: 24.6.0<br>- deviceId, serviceId, characteristicId are required parameters<br>- The device characteristic must support read operations | H5/api/bluetooth/ma.readBLECharacteristicValue.md |
| ma.removeCustomEvent | Removes a previously set mini program custom event. | message | - Minimum supported version: 25.12.0<br>- eventName is a required parameter and cannot be empty | common/api/message/ma.removeCustomEvent.md |
| ma.removeStorage | Removes the data for a specified key name from the local cache. | storage | - key is a required parameter | common/api/storage/ma.removeStorage.md |
| ma.reportEvent | Event reporting. | report | - Minimum supported version: 24.6.0<br>- eventId is a required parameter<br>- eventData values can only be of string or number type | common/api/report/ma.reportEvent.md |
| ma.reportLog | Developer-defined log reporting interface. | report | - Minimum supported version: 23.12.0<br>- log is a required parameter<br>- level optional values: debug, info, error | common/api/report/ma.reportLog.md |
| ma.reportPerformance | Developer-defined metric reporting interface. | report | - Minimum supported version: 23.12.0<br>- reportEvent and reportParams are required parameters<br>- reportEvent must be a string<br>- reportParams must be an object | common/api/report/ma.reportPerformance.md |
| ma.request | Initiates an HTTPS network request. | network | - Minimum supported version: 23.12.0<br>- url must be a valid HTTPS URL<br>- data cannot be of Function type<br>- Default Content-Type is application/json | common/api/network/ma.request.md |
| ma.saveBase64Image | Saves Base64-encoded image data to the system album. | file | - Minimum supported version: 24.3.0<br>- base64 is a required parameter and must be a valid Base64 string | H5/api/file/ma.saveBase64Image.md |
| ma.saveFileToPhone | Saves a file to phone storage. | file | - Minimum supported version: 24.3.0<br>- content and fileName are required parameters<br>- If an image is saved via this interface, it is recommended to configure openSharePanel (supported from version 25.9.0) to save directly to the album for user convenience | H5/api/file/ma.saveFileToPhone.md |
| ma.saveImage | Saves an image to the system album. | media | - Minimum supported version: 24.3.0<br>- content / filePath are required parameters | common/api/media/ma.saveImage.md |
| ma.scanCode | Invokes the scan interface to scan a QR code or barcode. | scan | - scanType optional values: barCode, qrCode, datamatrix, pdf417 | common/api/scan/ma.scanCode.md |
| ma.setCapsuleShow | Sets whether to hide the capsule. | ui | - Minimum supported version: 25.3.0<br>- isShow is a required parameter (false = not displayed, true = displayed) | common/api/ui/ma.setCapsuleShow.md |
| ma.setClipboardData | Sets the content of the system clipboard. After a successful call, a toast prompt "Content copied" appears for 1.5s | clipboard | - Minimum supported version: 24.12.0<br>- data is a required parameter<br>- After a successful call, a toast prompt "Content copied" appears for 1.5s | common/api/clipboard/ma.setClipboardData.md |
| ma.setCustomEvent | Sets a mini program custom event listener. | message | - Minimum supported version: 25.12.0<br>- eventName and callback are required parameters | common/api/message/ma.setCustomEvent.md |
| ma.setStorage | Asynchronously stores data in the local cache. | storage | - key and data are required parameters | common/api/storage/ma.setStorage.md |
| ma.setStorageSync | Synchronously stores data in the local cache. | storage | - Minimum supported version: 24.9.0<br>- key must be of string type | common/api/storage/ma.setStorageSync.md |
| ma.setSwipeBack | Sets whether the mini program supports gesture swipe-back (only effective on iOS systems). | ui | - Minimum supported version: 26.3.0 (only effective on iOS)<br>- Only effective on iOS<br>- enableSwipeBack is a required parameter<br>- When an H5 mini program calls this API, it controls whether swipe is globally supported<br>- When a DSL mini program calls this API, it controls whether swipe is supported on the current page | common/api/ui/ma.setSwipeBack.md |
| ma.showLoading | Shows a loading indicator; you must actively call ma.hideLoading to close it. | ui | - Minimum supported version: 24.3.0<br>- You must actively call ma.hideLoading to close it | common/api/ui/ma.showLoading.md |
| ma.showToast | Shows a message prompt box. | ui | - Minimum supported version: 24.3.0<br>- title and icon are recommended parameters<br>- icon optional values: success, error, loading, none | common/api/ui/ma.showToast.md |
| ma.startBluetoothDevicesDiscovery | Starts searching for nearby Bluetooth peripheral devices. | bluetooth | - Minimum supported version: 24.6.0<br>- Must be used after the Bluetooth module is initialized<br>- The search process consumes power; it is recommended to enable it when needed and stop it promptly after the search is complete | common/api/bluetooth/ma.startBluetoothDevicesDiscovery.md |
| ma.stopAudio | Stops audio playback. | audio | - Minimum supported version: 23.12.0 | H5/api/audio/ma.stopAudio.md |
| ma.stopBluetoothDevicesDiscovery | Stops searching for nearby Bluetooth peripheral devices. | bluetooth | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.stopBluetoothDevicesDiscovery.md |
| ma.submitReport | Developer directly triggers log reporting. | report | - Minimum supported version: 23.12.0 | common/api/report/ma.submitReport.md |
| ma.uploadFile | Upload interface. | network | - Minimum supported version: 23.12.0<br>- url is a required parameter<br>- Either filePath or files must be filled in<br>- If filePath is used, name is required | common/api/network/ma.uploadFile.md |
| ma.uploadImage | Uploads an image to the server. | upload-download | - | H5/api/upload-download/ma.uploadImage.md |
| ma.writeBLECharacteristicValue | Writes binary data to a Bluetooth Low Energy device characteristic value. | bluetooth | - Minimum supported version: 24.6.0<br>- deviceId, serviceId, characteristicId, value are required parameters<br>- writeType optional values: write, writeNoResponse, signedWrite<br>- The device characteristic must support write operations | common/api/bluetooth/ma.writeBLECharacteristicValue.md |

---

*This file is automatically generated by a program*