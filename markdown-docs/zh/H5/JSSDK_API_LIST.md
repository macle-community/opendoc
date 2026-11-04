# JSSDK 接口列表

> 本文件汇总了所有JSSDK API接口的简要说明

## 接口清单

| 接口名称 | 接口简述 | 接口类型 | 使用限制 | 接口详情路径 |
|----------|----------|----------|----------|--------------|
| ma.arrayBufferToBase64 | 将 ArrayBuffer 转换为 Base64 字符串。 | base | - 最低支持版本：24.12.0 | common/api/base/ma.arrayBufferToBase64.md |
| ma.base64ToArrayBuffer | 将 Base64 字符串转换为 ArrayBuffer。 | base | - 最低支持版本：24.12.0<br>- base64String 必须为有效的 Base64 字符串 | common/api/base/ma.base64ToArrayBuffer.md |
| ma.cancelAuthorize | 取消用户的特定授权。 | auth | - 最低支持版本：24.9.0<br>- scopes 为必填参数 | common/api/auth/ma.cancelAuthorize.md |
| ma.capsuleStyle | 设置小程序顶部胶囊按钮的样式。 | ui | - 最低支持版本：24.3.0<br>- style 为必填参数，可选值：0（light）、1（dark） | common/api/ui/ma.capsuleStyle.md |
| ma.chooseContact | 调起联系人选择界面。 | scan | - 最低支持版本：24.3.0<br>- 需要应用授权联系人权限 | common/api/scan/ma.chooseContact.md |
| ma.chooseImage | 从相册选择图片或拍照获取图片。 | media | - sizeType 可选值：original、compressed<br>- sourceType 可选值：album、camera | common/api/media/ma.chooseImage.md |
| ma.chooseVideo | 从相册选择视频或拍摄视频。 | media | - 最低支持版本：24.9.0<br>- sourceType 可选值：album、camera<br>- camera 可选值：back、front | common/api/media/ma.chooseVideo.md |
| ma.clearStorage | 清空本地缓存中所有数据。 | storage | - | common/api/storage/ma.clearStorage.md |
| ma.closeBLEConnection | 断开与蓝牙低功耗设备的连接。 | bluetooth | - 最低支持版本：24.6.0<br>- deviceId 为必填参数 | common/api/bluetooth/ma.closeBLEConnection.md |
| ma.closeBluetoothAdapter | 关闭蓝牙模块。 | bluetooth | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.closeBluetoothAdapter.md |
| ma.createBLEConnection | 连接蓝牙低功耗设备。 | bluetooth | - 最低支持版本：24.6.0<br>- deviceId 为必填参数 | common/api/bluetooth/ma.createBLEConnection.md |
| ma.deauthorize | 取消用户授权。 | auth | - 最低支持版本：24.9.0 | common/api/auth/ma.deauthorize.md |
| ma.downloadFile | 下载文件资源到本地。 | network | - 最低支持版本：23.12.0<br>- url 为必填参数，必须为有效的 HTTPS URL | common/api/network/ma.downloadFile.md |
| ma.downloadImage | 下载图片到本地。 | upload-download | - | H5/api/upload-download/ma.downloadImage.md |
| ma.exitMiniProgram | 退出当前小程序。 | navigator | - 最低支持版本：24.6.0 | common/api/navigator/ma.exitMiniProgram.md |
| ma.getAuthCode | 获取用户授权码。 | auth | - 最低支持版本：24.3.0<br>- scopes 为必填参数，必须为非空数组 | common/api/auth/ma.getAuthCode.md |
| ma.getBLEDeviceCharacteristics | 获取蓝牙低功耗设备某个服务中的所有特征。 | bluetooth | - 最低支持版本：24.6.0<br>- deviceId 和 serviceId 为必填参数 | common/api/bluetooth/ma.getBLEDeviceCharacteristics.md |
| ma.getBLEDeviceServices | 获取蓝牙低功耗设备的所有服务。 | bluetooth | - 最低支持版本：24.6.0<br>- deviceId 为必填参数 | common/api/bluetooth/ma.getBLEDeviceServices.md |
| ma.getBackgroundFetchData | 获取数据预拉取缓存的所有数据。 | system | - 最低支持版本：23.12.0<br>- fetchType 为必填参数 | H5/api/system/ma.getBackgroundFetchData.md |
| ma.getClipboardData | 获取系统剪贴板的内容。 | clipboard | - 最低支持版本：24.12.0 | common/api/clipboard/ma.getClipboardData.md |
| ma.getLaunchOptionsSync | 同步获取小程序的启动参数。 | base | - 最低支持版本：23.12.0 | common/api/base/ma.getLaunchOptionsSync.md |
| ma.getLocalImgData(尚未实现) | 获取本地图片的 Base64 数据。 | file | - path 为必填参数 | H5/api/file/ma.getLocalImgData.md |
| ma.getLocation | 获取当前的地理位置信息。 | navigator | - 需要应用授权位置权限 | common/api/navigator/ma.getLocation.md |
| ma.getNetworkType | 获取当前设备连接的网络类型。 | network | - | common/api/network/ma.getNetworkType.md |
| ma.getOpenUserInfo | 获取用户公开信息。 | auth | - 最低支持版本：24.3.0 | common/api/auth/ma.getOpenUserInfo.md |
| ma.getStatusBarHeight | 获取系统状态栏的高度。 | base | - 最低支持版本：24.3.0<br>- 请注意与对应DSL接口出参差异 | common/api/base/ma.getStatusBarHeight.md |
| ma.getStorage | 从本地缓存中异步获取指定键名的数据。 | storage | - key 为必填参数 | common/api/storage/ma.getStorage.md |
| ma.getStorageInfo | 获取本地缓存的相关信息（注：当前版本未实现）。 | storage | - 当前版本未实现 | common/api/storage/ma.getStorageInfo.md |
| ma.getStorageSync | 同步从本地缓存中获取指定键名的数据。 | storage | - 最低支持版本：24.9.0<br>- key 必须为字符串类型 | common/api/storage/ma.getStorageSync.md |
| ma.getSystemInfoSync | 同步获取系统信息。 | base | - | common/api/base/ma.getSystemInfoSync.md |
| ma.getSystemSetting | 获取设备的系统设置信息。 | base | - 最低支持版本：24.12.0 | common/api/base/ma.getSystemSetting.md |
| ma.gotoBrowser | 跳转到第三方浏览器或应用。 | navigator | - 最低支持版本：24.3.0<br>- openUrl 为必填参数，必须为字符串 | common/api/navigator/ma.gotoBrowser.md |
| ma.hideLoading | 隐藏正在显示的加载提示框。 | ui | - 最低支持版本：24.3.0 | common/api/ui/ma.hideLoading.md |
| ma.isOnline | 判断当前设备是否联网。 | network | - 最低支持版本：23.12.0 | common/api/network/ma.isOnline.md |
| ma.miniProgram.close | 关闭当前小程序。 | mini-control | - | H5/api/mini-control/ma.miniProgram.close.md |
| ma.miniProgram.getEnv | 判断当前运行环境是否为小程序。 | mini-control | - | H5/api/mini-control/ma.miniProgram.getEnv.md |
| ma.miniProgram.postMessage | 向小程序发送消息，会在小程序后退、组件销毁时触发 message 事件。 | mini-message | - 最低支持版本：25.12.0<br>- data 为必填参数 | H5/api/mini-message/ma.miniProgram.postMessage.md |
| ma.navigateToMiniProgram | 小程序内跳转到其他小程序。 | navigator | - 最低支持版本：23.12.0<br>- appId 为必填参数<br>- 如果传入params，则必须传入path | common/api/navigator/ma.navigateToMiniProgram.md |
| ma.offBluetoothDeviceFound | 取消监听搜索到新蓝牙设备的事件。 | bluetooth | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.offBluetoothDeviceFound.md |
| ma.offKeyboardHeightChange | 移除键盘高度变化事件的监听函数。 | device | - 最低支持版本：24.12.0 | common/api/device/ma.offKeyboardHeightChange.md |
| ma.offScreenRecordingStateChanged | 取消监听用户录屏状态变化。 | event | - 最低支持版本：24.9.0<br>- 支持范围：仅iOS | H5/api/event/ma.offScreenRecordingStateChanged.md |
| ma.onBluetoothDeviceFound | 监听搜索到新蓝牙设备的事件。 | bluetooth | - 最低支持版本：24.6.0<br>- 多次调用此方法只会追加监听函数，不会覆盖 | common/api/bluetooth/ma.onBluetoothDeviceFound.md |
| ma.onKeyboardHeightChange | 监听键盘高度变化事件。 | device | - 最低支持版本：24.12.0 | common/api/device/ma.onKeyboardHeightChange.md |
| ma.onMessage | H5 小程序监听来自父页面的消息。 | message | - 最低支持版本：25.12.0 | H5/api/message/ma.onMessage.md |
| ma.onScreenRecordingStateChanged | 监听用户录屏状态变化。 | event | - 最低支持版本：24.9.0<br>- 支持范围：仅iOS | H5/api/event/ma.onScreenRecordingStateChanged.md |
| ma.openBluetoothAdapter | 初始化蓝牙模块。 | bluetooth | - 最低支持版本：24.6.0<br>- 需要设备支持蓝牙功能<br>- 需要应用授权蓝牙权限 | common/api/bluetooth/ma.openBluetoothAdapter.md |
| ma.openDocument | 打开并预览各类文档文件。 | file | - filePath 为必填参数<br>- fileType 可选值：doc、docx、xls、xlsx、ppt、pptx、pdf | common/api/file/ma.openDocument.md |
| ma.playAudio | 播放音频文件。 | audio | - 最低支持版本：23.12.0<br>- url 为必填参数，必须为有效的 URL（在线音频网址） | H5/api/audio/ma.playAudio.md |
| ma.postMessage | 内嵌 H5 发送消息给 webview。 | message | - 最低支持版本：25.12.0<br>- message 为必填参数 | H5/api/message/ma.postMessage.md |
| ma.previewImage | 在图片预览界面查看图片。 | media | - urls 为必填参数，必须是非空数组 | common/api/media/ma.previewImage.md |
| ma.readBLECharacteristicValue | 读取蓝牙低功耗设备特征值的二进制数据。 | bluetooth | - 最低支持版本：24.6.0<br>- deviceId、serviceId、characteristicId 为必填参数<br>- 设备的特征必须支持 read 操作 | H5/api/bluetooth/ma.readBLECharacteristicValue.md |
| ma.removeCustomEvent | 移除已设置的小程序自定义事件。 | message | - 最低支持版本：25.12.0<br>- eventName 为必填参数，不能为空 | common/api/message/ma.removeCustomEvent.md |
| ma.removeStorage | 从本地缓存中移除指定键名的数据。 | storage | - key 为必填参数 | common/api/storage/ma.removeStorage.md |
| ma.reportEvent | 事件上报。 | report | - 最低支持版本：24.6.0<br>- eventId 为必填参数<br>- eventData 的值只能为字符串或数字类型 | common/api/report/ma.reportEvent.md |
| ma.reportLog | 开发者自定义日志上报接口。 | report | - 最低支持版本：23.12.0<br>- log 为必填参数<br>- level 可选值：debug、info、error | common/api/report/ma.reportLog.md |
| ma.reportPerformance | 开发者自定义指标上报接口。 | report | - 最低支持版本：23.12.0<br>- reportEvent 和 reportParams 为必填参数<br>- reportEvent 必须为字符串<br>- reportParams 必须为对象 | common/api/report/ma.reportPerformance.md |
| ma.request | 发起 HTTPS 网络请求。 | network | - 最低支持版本：23.12.0<br>- url 必须为有效的 HTTPS URL<br>- data 不能为 Function 类型<br>- 默认 Content-Type 为 application/json | common/api/network/ma.request.md |
| ma.saveBase64Image | 将 Base64 格式的图片数据保存到系统相册。 | file | - 最低支持版本：24.3.0<br>- base64 为必填参数，必须是有效的 Base64 字符串 | H5/api/file/ma.saveBase64Image.md |
| ma.saveFileToPhone | 将文件保存到手机存储。 | file | - 最低支持版本：24.3.0<br>- content 和 fileName 为必填参数<br>- 如果是图片通过这个接口调用，为了方便客户最好配置openSharePanel（该配置低版本为 25.9.0）直接存相册 | H5/api/file/ma.saveFileToPhone.md |
| ma.saveImage | 将图片保存到系统相册。 | media | - 最低支持版本：24.3.0<br>- content / filePath 为必填参数 | common/api/media/ma.saveImage.md |
| ma.scanCode | 调起扫码界面，扫描二维码或条形码。 | scan | - scanType 可选值：barCode、qrCode、datamatrix、pdf417 | common/api/scan/ma.scanCode.md |
| ma.setCapsuleShow | 设置是否隐藏胶囊。 | ui | - 最低支持版本：25.3.0<br>- isShow 为必填参数（false不显示，true显示） | common/api/ui/ma.setCapsuleShow.md |
| ma.setClipboardData | 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s | clipboard | - 最低支持版本：24.12.0<br>- data 为必填参数<br>- 调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s | common/api/clipboard/ma.setClipboardData.md |
| ma.setCustomEvent | 设置小程序自定义事件监听。 | message | - 最低支持版本：25.12.0<br>- eventName 和 callback 为必填参数 | common/api/message/ma.setCustomEvent.md |
| ma.setStorage | 将数据异步存储在本地缓存中。 | storage | - key 和 data 为必填参数 | common/api/storage/ma.setStorage.md |
| ma.setStorageSync | 同步将数据存储在本地缓存中。 | storage | - 最低支持版本：24.9.0<br>- key 必须为字符串类型 | common/api/storage/ma.setStorageSync.md |
| ma.setSwipeBack | 设置小程序是否支持手势滑动返回（仅 iOS 系统有效）。 | ui | - 最低支持版本：26.3.0（仅iOS侧生效）<br>- 仅iOS侧生效<br>- enableSwipeBack 为必填参数<br>- H5小程序调用此API控制全局是否支持滑动<br>- DSL小程序调用此API控制当前页面是否支持滑动 | common/api/ui/ma.setSwipeBack.md |
| ma.showLoading | 显示loading提示框，需要主动调用ma.hideLoading才能关闭。 | ui | - 最低支持版本：24.3.0<br>- 需要主动调用ma.hideLoading才能关闭 | common/api/ui/ma.showLoading.md |
| ma.showToast | 显示消息提示框。 | ui | - 最低支持版本：24.3.0<br>- title 和 icon 为推荐参数<br>- icon 可选值：success、error、loading、none | common/api/ui/ma.showToast.md |
| ma.startBluetoothDevicesDiscovery | 开始搜寻附近的蓝牙外围设备。 | bluetooth | - 最低支持版本：24.6.0<br>- 需要在蓝牙模块初始化后使用<br>- 搜索过程会消耗电量，建议在需要时开启，搜索完成后及时停止 | common/api/bluetooth/ma.startBluetoothDevicesDiscovery.md |
| ma.stopAudio | 结束播放音频。 | audio | - 最低支持版本：23.12.0 | H5/api/audio/ma.stopAudio.md |
| ma.stopBluetoothDevicesDiscovery | 停止搜寻附近的蓝牙外围设备。 | bluetooth | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.stopBluetoothDevicesDiscovery.md |
| ma.submitReport | 开发者直接触发日志上报。 | report | - 最低支持版本：23.12.0 | common/api/report/ma.submitReport.md |
| ma.uploadFile | 上传接口。 | network | - 最低支持版本：23.12.0<br>- url 为必填参数<br>- filePath 和 files 必须填写其中之一<br>- 如果使用 filePath，则 name 为必填 | common/api/network/ma.uploadFile.md |
| ma.uploadImage | 上传图片到服务器。 | upload-download | - | H5/api/upload-download/ma.uploadImage.md |
| ma.writeBLECharacteristicValue | 向蓝牙低功耗设备特征值中写入二进制数据。 | bluetooth | - 最低支持版本：24.6.0<br>- deviceId、serviceId、characteristicId、value 为必填参数<br>- writeType 可选值：write、writeNoResponse、signedWrite<br>- 设备的特征必须支持 write 操作 | common/api/bluetooth/ma.writeBLECharacteristicValue.md |

---

*本文件由程序自动生成*
