# DSL 小程序 API 接口列表

> 本文件汇总了 DSL 小程序所有 API 接口的简要说明，便于快速检索。详细的参数、返回值、示例请查阅各接口的详情文件。

## 接口清单

| 接口名称 | 接口简述 | 接口类型 | 使用限制 | 接口详情路径 |
|:--|:--|:--|:--|:--|
| AudioContext | AudioContext 实例，可通过 ma.createAudioContext() 获取，通过 id 跟一个 audio 组件绑定，操作对应的 audio 组件 | media | -  | DSL/api/media/audio/AudioContext.md |
| authority | 部分接口需用户授权同意才能调用，按 scope 划分，授权后对应接口可直接使用 | openApi | -  | DSL/api/openApi/authority.md |
| backgroundFetchData | 获取数据预拉取缓存的所有数据，该 Api 会等待所有的预取请求完成之后（不使用上次数据），将所有的预取数据存放在一个 JsonArray 中返回给用户 | storage | - 最低支持版本：23.12.0<br>- fetchType 为必填参数 | DSL/api/storage/backgroundFetchData.md |
| CameraContext.setZoom | 设置缩放级别 | media | - 最低支持版本：23.9.0<br>- zoom 为必填参数 | DSL/api/media/camera/CameraContext.setZoom.md |
| CameraContext.startRecord | 开始录像 | media | - 最低支持版本：23.9.0 | DSL/api/media/camera/CameraContext.startRecord.md |
| CameraContext.stopRecord | 结束录像 | media | - 最低支持版本：23.9.0 | DSL/api/media/camera/CameraContext.stopRecord.md |
| CameraContext.takePhoto | 拍摄照片 | media | -  | DSL/api/media/camera/CameraContext.takePhoto.md |
| dataPrePull | 小程序冷启动时提前发起请求，并缓存请求内容，在真实请求时使用缓存数据，减少网络请求的时间 | storage | -  | DSL/api/storage/dataPrePull.md |
| DownloadTask | 一个可监听下载进度变化事件以及取消下载任务的对象 | network | - 最低支持版本：23.6.0 | DSL/api/network/DownloadTask.md |
| DownloadTask.abort | 中断下载任务 | network | - 最低支持版本：23.6.0 | DSL/api/network/DownloadTask.abort.md |
| DownloadTask.offProgressUpdate | 移除下载进度变化事件的监听函数 | network | - 最低支持版本：23.6.0 | DSL/api/network/DownloadTask.offProgressUpdate.md |
| DownloadTask.onProgressUpdate | 监听下载进度变化事件 | network | - 最低支持版本：23.6.0 | DSL/api/network/DownloadTask.onProgressUpdate.md |
| EventChannel.emit | 触发一个事件 | route | -  | DSL/api/route/EventChannel.emit.md |
| EventChannel.off | 取消监听一个事件，给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数 | route | -  | DSL/api/route/EventChannel.off.md |
| EventChannel.on | 持续监听一个事件 | route | -  | DSL/api/route/EventChannel.on.md |
| EventChannel.once | 监听一个事件一次，触发后失效 | route | -  | DSL/api/route/EventChannel.once.md |
| FileSystemManager | 文件管理器 | file | - 最低支持版本：23.6.0 | DSL/api/file/FileSystemManager.md |
| FileSystemManager.copyFile | 复制文件（不支持复制文件夹,目标路径为文件,若目标文件已经存在，则复制会覆盖已有目标文件） | file | - 最低支持版本：23.6.0<br>- srcPath 为必填参数<br>- destPath 为必填参数 | DSL/api/file/FileSystemManager.copyFile.md |
| FileSystemManager.exists | 判断文件或文件夹是否存在 | file | - 最低支持版本：23.6.0<br>- path 为必填参数 | DSL/api/file/FileSystemManager.exists.md |
| FileSystemManager.mkdir | 创建目录 | file | - 最低支持版本：23.6.0<br>- dirPath 为必填参数 | DSL/api/file/FileSystemManager.mkdir.md |
| FileSystemManager.moveFile | 移动文件（不支持移动文件夹,目标路径为目录,若目标路径目录中已经存在同名的文件，则无法移动） | file | - 最低支持版本：23.6.0<br>- srcPath 为必填参数<br>- destPath 为必填参数 | DSL/api/file/FileSystemManager.moveFile.md |
| FileSystemManager.readdir | 读取目录内文件列表（包括文件夹） | file | - 最低支持版本：23.6.0<br>- dirPath 为必填参数 | DSL/api/file/FileSystemManager.readdir.md |
| FileSystemManager.readFile | 读文件 | file | - 最低支持版本：23.6.0<br>- filePath 为必填参数 | DSL/api/file/FileSystemManager.readFile.md |
| FileSystemManager.unlink | 删除文件（不支持删除文件夹） | file | - 最低支持版本：23.6.0<br>- filePath 为必填参数 | DSL/api/file/FileSystemManager.unlink.md |
| FileSystemManager.writeFile | 写文件，如果路径中有目录不存在则写文件失败；如果文件存在则会覆盖内容；如果文件不存在，会新建文件再写入内容 | file | - 最低支持版本：23.6.0<br>- filePath 为必填参数<br>- data 为必填参数 | DSL/api/file/FileSystemManager.writeFile.md |
| locationPrePull | 小程序首次获取地理位置（ma.getLocation）通常比较耗时，小程序框架提供预拉取（预调用）机制将这一过程提前，帮助改进用户体验 | storage | -  | DSL/api/storage/locationPrePull.md |
| ma.arrayBufferToBase64 | 将 ArrayBuffer 对象转成 Base64 字符串 | base | - 最低支持版本：24.12.0<br>- arrayBuffer 为必填参数 | common/api/base/ma.arrayBufferToBase64.md |
| ma.authorize | 提前向用户发起授权请求，弹窗询问用户是否同意授权某项功能或数据 | openApi | - scope 为必填参数 | DSL/api/openApi/ma.authorize.md |
| ma.base64ToArrayBuffer | 将 Base64 字符串转成 ArrayBuffer 对象 | base | - 最低支持版本：24.12.0<br>- base64 为必填参数 | common/api/base/ma.base64ToArrayBuffer.md |
| ma.cancelAuthorize | 取消当前小程序部分授权信息 | openApi | - 最低支持版本：24.9.0<br>- scopes 为必填参数 | common/api/auth/ma.cancelAuthorize.md |
| ma.cancelTimer | 取消当前小程序创建的定时器，通过 success 回调通知开发者 | openApi | - 最低支持版本：25.9.0<br>- 仅支持 iOS | DSL/api/openApi/ma.cancelTimer.md |
| ma.canIUse | 判断小程序的 API，回调，参数，组件等是否在当前版本可用 | base | - schema 为必填参数 | DSL/api/base/ma.canIUse.md |
| ma.capsuleStyle | 设置胶囊样式 | ui | - 最低支持版本：24.3.0<br>- style 为必填参数 | common/api/ui/ma.capsuleStyle.md |
| ma.chooseContact | 拉起手机通讯录，选择联系人 | device | -  | common/api/scan/ma.chooseContact.md |
| ma.chooseImage | 从本地相册选择图片或使用相机拍照 | media | -  | common/api/media/ma.chooseImage.md |
| ma.chooseVideo | 从本地相册选择视频或使用相机拍摄 | media | -  | common/api/media/ma.chooseVideo.md |
| ma.clearStorage | 清理本地数据缓存 | storage | -  | common/api/storage/ma.clearStorage.md |
| ma.closeBLEConnection | 断开与蓝牙低功耗设备的连接 | device | - 最低支持版本：24.6.0<br>- deviceId 为必填参数 | common/api/bluetooth/ma.closeBLEConnection.md |
| ma.closeBluetoothAdapter | 关闭蓝牙模块 | device | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.closeBluetoothAdapter.md |
| ma.closeSocket | 关闭 WebSocket 连接 | network | -  | DSL/api/network/ma.closeSocket.md |
| ma.compressImage | 压缩图片接口，可选压缩质量 | media | - src 为必填参数 | DSL/api/media/img/ma.compressImage.md |
| ma.connectSocket | 创建一个 WebSocket 连接 | network | - url 为必填参数 | DSL/api/network/ma.connectSocket.md |
| ma.createAudioContext | 创建 audio 上下文 AudioContext 对象 | media | -  | DSL/api/media/audio/ma.createAudioContext.md |
| ma.createBLEConnection | 连接蓝牙低功耗设备 | device | - 最低支持版本：24.6.0<br>- deviceId 为必填参数 | common/api/bluetooth/ma.createBLEConnection.md |
| ma.createCameraContext | 创建 camera 上下文 CameraContext 对象 | media | -  | DSL/api/media/camera/ma.createCameraContext.md |
| ma.createMapContext | 创建 map 上下文 MapContext 对象 | map | - mapId 为必填参数 | DSL/api/map/ma.createMapContext.md |
| ma.createSelectorQuery | 返回一个 SelectorQuery 对象实例 | MAML | -  | DSL/api/MAML/ma.createSelectorQuery.md |
| ma.createTimer | 按输入参数 duration 执行倒计时，完成时通过 success 回调通知开发者 | openApi | - 最低支持版本：25.9.0<br>- 仅支持 iOS<br>- duration 为必填参数 | DSL/api/openApi/ma.createTimer.md |
| ma.createVideoContext | 创建 video 上下文 VideoContext 对象 | media | -  | DSL/api/media/video/ma.createVideoContext.md |
| ma.createWebviewContext | 创建一个WebviewContext 对象，用于向 web-view 组件发送消息 | web-view | - 最低支持版本：25.12.0 | DSL/api/web-view/ma.createWebviewContext.md |
| ma.deauthorize | 取消当前小程序全部授权信息 | openApi | - 最低支持版本：24.9.0 | common/api/auth/ma.deauthorize.md |
| ma.downloadFile | 下载文件资源到本地，客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 | network | - url 为必填参数 | common/api/network/ma.downloadFile.md |
| ma.env.USER_DATA_PATH | 一个常量字符串，表示用户可操作的目录路径 | file | - 最低支持版本：23.6.0 | DSL/api/file/ma.env.USER_DATA_PATH.md |
| ma.exitMiniProgram | 退出当前小程序 | route | - 最低支持版本：24.6.0 | common/api/navigator/ma.exitMiniProgram.md |
| ma.getAuthCode | 调用接口获取登录凭证，通过凭证获取用户登录态信息 | openApi | - 最低支持版本：24.3.0<br>- scopes 为必填参数<br>- 需对接小程序 SaaS 平台且宿主应用需实现免登功能 | common/api/auth/ma.getAuthCode.md |
| ma.getBatteryInfo | 获取设备电量 | device | -  | DSL/api/device/ma.getBatteryInfo.md |
| ma.getBLEDeviceCharacteristics | 获取蓝牙低功耗设备某个服务中所有特征 | device | - 最低支持版本：24.6.0<br>- deviceId 为必填参数<br>- serviceId 为必填参数 | common/api/bluetooth/ma.getBLEDeviceCharacteristics.md |
| ma.getBLEDeviceServices | 获取蓝牙低功耗设备所有服务 | device | - 最低支持版本：24.6.0<br>- deviceId 为必填参数 | common/api/bluetooth/ma.getBLEDeviceServices.md |
| ma.getClipboardData | 获取系统剪贴板的内容 | device | - 最低支持版本：24.12.0 | common/api/clipboard/ma.getClipboardData.md |
| ma.getFileInfo | 获取文件信息 | file | - filePath 为必填参数 | DSL/api/file/ma.getFileInfo.md |
| ma.getFileSystemManager | 获取全局唯一的文件管理器 | file | - 最低支持版本：23.6.0 | DSL/api/file/ma.getFileSystemManager.md |
| ma.getImageInfo | 获取图片信息，网络图片需先配置 download 域名才能生效 | media | - src 为必填参数 | DSL/api/media/img/ma.getImageInfo.md |
| ma.getKbzBackendServerUrl | 获取KBZ小程序服务地址 | custom | -  | DSL/api/custom/KBZ/ma.getKbzBackendServerUrl.md |
| ma.getLaunchOptionsSync | 获取小程序启动时的启动参数 | base | - 最低支持版本：23.12.0 | common/api/base/ma.getLaunchOptionsSync.md |
| ma.getLocation | 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。高频率调用会导致耗电 | location | - 用户授权：需要 scope.location | common/api/navigator/ma.getLocation.md |
| ma.getMenuButtonBoundingClientRect | 获取菜单按钮（右上角胶囊按钮）的布局位置信息，坐标信息以屏幕左上角为原点 | ui | -  | DSL/api/ui/getMenuButtonBoundingClientRect.md |
| ma.getNetworkType | 获取网络类型 | device | -  | common/api/network/ma.getNetworkType.md |
| ma.getOpenUserInfo | 调用接口获取用户公开信息 | openApi | - 最低支持版本：24.3.0<br>- 需对接小程序 SaaS 平台且宿主应用需实现获取用户公开信息功能 | common/api/auth/ma.getOpenUserInfo.md |
| ma.getRecorderManager | 获取全局唯一的录音管理器 RecorderManager | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/ma.getRecorderManager.md |
| ma.getSavedFileInfo | 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 ma.getFileInfo()接口 | file | - filePath 为必填参数 | DSL/api/file/ma.getSavedFileInfo.md |
| ma.getSavedFileList | 获取该小程序下已保存的本地缓存文件列表 | file | -  | DSL/api/file/ma.getSavedFileList.md |
| ma.getScreenBrightness | 获取屏幕亮度 | device | -  | DSL/api/device/screen/ma.getScreenBrightness.md |
| ma.getSetting | 获取用户的当前设置，返回值中只会出现小程序已经向用户请求过的权限 | openApi | -  | DSL/api/openApi/ma.getSetting.md |
| ma.getsmallappinfo | 查询小程序的基本信息 | base | - 最低支持版本：23.12.0 | DSL/api/base/ma.getsmallappinfo.md |
| ma.getStatusBarHeight | 获取状态栏高度 | base | - 最低支持版本：24.3.0 | common/api/base/ma.getStatusBarHeight.md |
| ma.getStorage | 从本地缓存中异步获取指定 key 的内容 | storage | - key 为必填参数 | common/api/storage/ma.getStorage.md |
| ma.getStorageInfo | 异步获取当前 storage 的相关信息 | storage | -  | common/api/storage/ma.getStorageInfo.md |
| ma.getStorageSync | 从本地缓存中同步获取指定 key 的内容 | storage | -  | common/api/storage/ma.getStorageSync.md |
| ma.getSystemInfo | 获取系统信息 | base | -  | DSL/api/base/ma.getSystemInfo.md |
| ma.getSystemInfoSync | 同步获取系统信息 | base | -  | common/api/base/ma.getSystemInfoSync.md |
| ma.getSystemSetting | 获取设备设置 | base | - 最低支持版本：24.12.0 | common/api/base/ma.getSystemSetting.md |
| ma.getUpdateManager | 获取全局唯一的版本更新管理器，用于管理小程序更新 | base | -  | DSL/api/base/ma.getUpdateManager.md |
| ma.gotoBrowser | 跳转第三方APP | thirdPart | - 最低支持版本：24.3.0<br>- openUrl 为必填参数 | common/api/navigator/ma.gotoBrowser.md |
| ma.hideKeyboard | 在 input、textarea 等 focus 拉起键盘之后，手动调用此接口收起键盘 | device | -  | DSL/api/device/ma.hideKeyboard.md |
| ma.hideLoading | 隐藏 loading 提示框 | ui | -  | common/api/ui/ma.hideLoading.md |
| ma.hideTabBar | 隐藏 tabBar | ui | -  | DSL/api/ui/ma.hideTabBar.md |
| ma.hideTabBarRedDot | 隐藏 tabBar 某一项的右上角的红点 | ui | - index 为必填参数 | DSL/api/ui/ma.hideTabBarRedDot.md |
| ma.hideToast | 隐藏消息提示框 | ui | -  | DSL/api/ui/ma.hideToast.md |
| ma.isOnline | 判断当前的联网状态 | network | - 最低支持版本：23.12.0 | common/api/network/ma.isOnline.md |
| ma.loadFontFace | 动态加载网络字体，文件地址需为下载类型 | ui | - 最低支持版本：23.6.0<br>- family 为必填参数<br>- source 为必填参数 | DSL/api/ui/ma.loadFontFace.md |
| ma.makePhoneCall | 拨打电话 | device | - phoneNumber 为必填参数 | DSL/api/device/ma.makePhoneCall.md |
| ma.navigateBack | 关闭当前页面，返回上一级页面或多级页面，可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层 | route | -  | DSL/api/route/ma.navigateBack.md |
| ma.navigateTo | 保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面，使用 ma.navigateBack 可以返回到原页面，小程序中页面栈最多十层 | route | - url 为必填参数 | DSL/api/route/ma.navigateTo.md |
| ma.navigateToMiniProgram | 小程序内跳转到其他小程序 | route | - 最低支持版本：23.12.0<br>- appId 为必填参数 | common/api/navigator/ma.navigateToMiniProgram.md |
| ma.nextTick | 延迟一部分操作到下一个时间片再执行，类似于 setTimeout | ui | -  | DSL/api/ui/ma.nextTick(function callback).md |
| ma.offAppHide | 取消监听小程序切后台事件 | base | -  | DSL/api/base/ma.offAppHide.md |
| ma.offAppShow | 取消监听小程序切前台事件 | base | -  | DSL/api/base/ma.offAppShow.md |
| ma.offBluetoothDeviceFound | 移除搜索到新设备的事件的全局监听函数 | device | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.offBluetoothDeviceFound.md |
| ma.offError | 取消监听小程序错误事件 | base | -  | DSL/api/base/ma.offError.md |
| ma.offGyroscopeChange | 取消监听陀螺仪数据变化事件 | device | -  | DSL/api/device/gyroscope/ma.offGyroscopeChange.md |
| ma.offKeyboardHeightChange | 移除键盘高度变化事件的监听函数 | device | - 最低支持版本：24.12.0 | common/api/device/ma.offKeyboardHeightChange.md |
| ma.offMemoryWarning | 取消监听内存不足告警事件 | device | -  | DSL/api/device/memoryWarning/ma.offMemoryWarning.md |
| ma.offNetworkStatusChange | 取消监听网络状态变化事件，参数为空，则取消所有的事件监听 | device | -  | DSL/api/device/netWork/ma.offNetworkStatusChange.md |
| ma.onAppHide | 监听小程序切后台事件，该事件与 App.onHide 的回调时机一致 | base | -  | DSL/api/base/ma.onAppHide.md |
| ma.onAppShow | 监听小程序切前台事件，该事件与 App.onShow 的回调参数一致 | base | -  | DSL/api/base/ma.onAppShow.md |
| ma.onBluetoothDeviceFound | 监听搜索到新设备的事件 | device | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.onBluetoothDeviceFound.md |
| ma.onError | 监听小程序错误事件 | base | -  | DSL/api/base/ma.onError.md |
| ma.onGyroscopeChange | 监听陀螺仪数据变化事件 | device | -  | DSL/api/device/gyroscope/ma.onGyroscopeChange.md |
| ma.onKeyboardHeightChange | 监听键盘高度变化事件 | device | - 最低支持版本：24.12.0 | common/api/device/ma.onKeyboardHeightChange.md |
| ma.onMemoryWarning | 监听内存不足告警事件 | device | -  | DSL/api/device/memoryWarning/ma.onMemoryWarning.md |
| ma.onNetworkStatusChange | 监听网络状态变化事件 | device | -  | DSL/api/device/netWork/ma.onNetworkStatusChange.md |
| ma.onSocketClose | 监听 WebSocket 连接关闭事件 | network | -  | DSL/api/network/ma.onSocketClose.md |
| ma.onSocketError | 监听 WebSocket 错误事件 | network | -  | DSL/api/network/ma.onSocketError.md |
| ma.onSocketMessage | 监听 WebSocket 接收到服务器的消息事件 | network | -  | DSL/api/network/ma.onSocketMessage.md |
| ma.onSocketOpen | 监听 WebSocket 连接打开事件 | network | -  | DSL/api/network/ma.onSocketOpen.md |
| ma.openBluetoothAdapter | 初始化蓝牙模块 | device | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.openBluetoothAdapter.md |
| ma.openDocument | 新开页面打开文档 | file | - filePath 为必填参数 | common/api/file/ma.openDocument.md |
| ma.openSetting | 调起客户端小程序设置界面，并返回用户设置的操作结果 | openApi | -  | DSL/api/openApi/ma.openSetting.md |
| ma.pageScrollTo | 将页面滚动到目标位置，支持滚动距离定位 | scroll | -  | DSL/api/scroll/ma.pageScrollTo.md |
| ma.playVoice | 开始播放音频，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放 | media | - 最低支持版本：23.9.0<br>- filePath 为必填参数<br>- url 为必填参数 | DSL/api/media/recorder/ma.playVoice.md |
| ma.previewImage | 在新页面中全屏预览图片 | media | - urls 为必填参数 | common/api/media/ma.previewImage.md |
| ma.redirectTo | 关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar 页面 | route | - url 为必填参数 | DSL/api/route/ma.redirectTo.md |
| ma.reLaunch | 关闭所有页面，打开到应用内的某个页面 | route | - url 为必填参数 | DSL/api/route/ma.reLaunch.md |
| ma.removeCustomEvent | 移除小程序自定义事件监听 | openApi | - 最低支持版本：25.12.0<br>- eventName 为必填参数（不能为空字符串） | common/api/message/ma.removeCustomEvent.md |
| ma.removeSavedFile | 删除本地缓存文件 | file | - filePath 为必填参数 | DSL/api/file/ma.removeSavedFile.md |
| ma.removeStorage | 从本地缓存中移除指定 key | storage | - key 为必填参数 | common/api/storage/ma.removeStorage.md |
| ma.removeTabBarBadge | 移除 tabBar 某一项右上角的文本 | ui | - 最低支持版本：24.12.0<br>- index 为必填参数 | DSL/api/ui/ma.removeTabBarBadge.md |
| ma.reportEvent | 事件上报 | custom | - 最低支持版本：24.6.0<br>- eventId 为必填参数 | common/api/report/ma.reportEvent.md |
| ma.reportLog | 开发者自定义日志上报接口 | custom | - 最低支持版本：23.12.0<br>- log 为必填参数 | common/api/report/ma.reportLog.md |
| ma.reportPerformance | 开发者自定义指标上报接口 | custom | - 最低支持版本：23.12.0<br>- reportEvent 为必填参数<br>- reportParams 为必填参数 | common/api/report/ma.reportPerformance.md |
| ma.request | 发起 HTTPS 网络请求 | network | - url 为必填参数 | common/api/network/ma.request.md |
| ma.saveFile | 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用 | file | - tempFilePath 为必填参数 | DSL/api/file/ma.saveFile.md |
| ma.saveImageToPhotosAlbum | 保存图片到系统相册 | media | - filePath 为必填参数 | common/api/media/ma.saveImage.md |
| ma.scanCode | 唤起扫一扫前后整个过程会先后执行 app 和 page 的 onHide 和 onShow 生命周期函数。即（唤起）app.onHide > page.onHide >（返回）app.onShow > page.onShow。（模拟器仅为模拟实现） | device | -  | common/api/scan/ma.scanCode.md |
| ma.sendSocketMessage | 通过 WebSocket 连接发送数据，需先 ma.connectSocket 并在 ma.onSocketOpen 回调之后才能发送 | network | - data 为必填参数 | DSL/api/network/ma.sendSocketMessage.md |
| ma.setBackgroundColor | 动态设置窗口的背景色 | ui | -  | DSL/api/ui/ma.setBackgroundColor.md |
| ma.setBackgroundTextStyle | 动态设置下拉背景字体、loading 图的样式 | ui | - textStyle 为必填参数 | DSL/api/ui/ma.setBackgroundTextStyle.md |
| ma.setCapsuleShow | 设置是否隐藏胶囊 | ui | - 最低支持版本：25.3.0 | common/api/ui/ma.setCapsuleShow.md |
| ma.setClipboardData | 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s | device | - 最低支持版本：24.12.0<br>- data 为必填参数 | common/api/clipboard/ma.setClipboardData.md |
| ma.setCustomEvent | 注册小程序自定义事件，指定场景下触发回调 | openApi | - 最低支持版本：25.12.0<br>- eventName 为必填参数（不能为空字符串）<br>- callback 为必填参数 | common/api/message/ma.setCustomEvent.md |
| ma.setKeepScreenOn | 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效 | device | - keepScreenOn 为必填参数 | DSL/api/device/screen/ma.setKeepScreenOn.md |
| ma.setNavigationBarColor | 设置页面导航条颜色 | ui | - frontColor 为必填参数<br>- backgroundColor 为必填参数 | DSL/api/ui/ma.setNavigationBarColor.md |
| ma.setNavigationBarTitle | 动态设置当前页面的标题 | ui | - title 为必填参数 | DSL/api/ui/ma.setNavigationBarTitle.md |
| ma.setScreenBrightness | 设置屏幕亮度 | device | - value 为必填参数 | DSL/api/device/screen/ma.setScreenBrightness.md |
| ma.setStorage | 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用，单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB | storage | - key 为必填参数<br>- data 为必填参数 | common/api/storage/ma.setStorage.md |
| ma.setStorageSync | 将数据存储在本地缓存中指定的 key 中，会覆盖原来该 key 对应的内容，除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用，单个 key 允许存储的最大数据长度安卓为 10KB，ios为1MB，所有数据存储上限为 10MB | storage | -  | common/api/storage/ma.setStorageSync.md |
| ma.setSwipeBack | 设置是否禁用 IOS 手势滑动控制 | ui | - 最低支持版本：26.3.0<br>- 仅IOS侧生效<br>- enableSwipeBack 为必填参数 | common/api/ui/ma.setSwipeBack.md |
| ma.setTabBarBadge | 为 tabBar 某一项的右上角添加文本 | ui | - 最低支持版本：24.12.0<br>- index 为必填参数<br>- text 为必填参数 | DSL/api/ui/ma.setTabBarBadge.md |
| ma.setTabBarItem | 动态设置 tabBar 某一项的内容 | ui | - index 为必填参数 | DSL/api/ui/ma.setTabBarItem.md |
| ma.setTabBarStyle | 动态设置 tabBar 的整体样式 | ui | -  | DSL/api/ui/ma.setTabBarStyle.md |
| ma.showActionSheet | 显示操作菜单 | ui | - itemList 为必填参数 | DSL/api/ui/ma.showActionSheet.md |
| ma.showLoading | 显示 loading 提示框，需主动调用 ma.hideLoading 才能关闭提示框 | ui | - title 为必填参数 | common/api/ui/ma.showLoading.md |
| ma.showModal | 显示模态对话框 | ui | -  | DSL/api/ui/ma.showModal.md |
| ma.showTabBar | 显示 tabBar | ui | -  | DSL/api/ui/ma.showTabBar.md |
| ma.showTabBarRedDot | 显示 tabBar 某一项的右上角的红点 | ui | - index 为必填参数 | DSL/api/ui/ma.showTabBarRedDot.md |
| ma.showToast | 显示消息提示框 | ui | -  | common/api/ui/ma.showToast.md |
| ma.startBluetoothDevicesDiscovery | 开始搜寻附近的蓝牙外围设备 | device | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.startBluetoothDevicesDiscovery.md |
| ma.startGyroscope | 开始监听陀螺仪数据 | device | -  | DSL/api/device/gyroscope/ma.startGyroscope.md |
| ma.startPay | 发起支付 | custom | - prepayId 为必填参数<br>- orderInfo 为必填参数<br>- sign 为必填参数<br>- amount 为必填参数 | DSL/api/custom/KBZ/ma.startPay.md |
| ma.startPullDownRefresh | 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致 | ui | -  | DSL/api/ui/refresh/ma.startPullDownRefresh.md |
| ma.stopBluetoothDevicesDiscovery | 停止搜寻附近的蓝牙外围设备 | device | - 最低支持版本：24.6.0 | common/api/bluetooth/ma.stopBluetoothDevicesDiscovery.md |
| ma.stopGyroscope | 停止监听陀螺仪数据 | device | -  | DSL/api/device/gyroscope/ma.stopGyroscope.md |
| ma.stopPullDownRefresh | 停止当前页面下拉刷新 | ui | -  | DSL/api/ui/refresh/ma.stopPullDownRefresh.md |
| ma.stopVoice | 结束播放音频 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/ma.stopVoice.md |
| ma.submitReport | 开发者直接触发日志上报 | custom | - 最低支持版本：23.12.0 | common/api/report/ma.submitReport.md |
| ma.switchTab | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 | route | - url 为必填参数 | DSL/api/route/ma.switchTab.md |
| ma.uploadFile | 将本地资源上传到服务器，客户端发起一个 HTTPS POST 请求，content-type 为 multipart/form-data | network | - url 为必填参数<br>- filePath 为必填参数（filePath 与 files 二选一）<br>- files 为必填参数（filePath 与 files 二选一）<br>- name 为必填参数 | common/api/network/ma.uploadFile.md |
| ma.vibrateLong | 使手机发生较长时间的振动（400 ms） | device | -  | DSL/api/device/vibrate/ma.vibrateLong.md |
| ma.vibrateShort | 使手机发生较短时间的振动（15 ms） | device | - type 为必填参数 | DSL/api/device/vibrate/ma.vibrateShort.md |
| ma.writeBLECharacteristicValue | 向蓝牙低功耗设备特征值中写入二进制数据 | device | - 最低支持版本：24.6.0<br>- deviceId 为必填参数<br>- serviceId 为必填参数<br>- characteristicId 为必填参数<br>- value 为必填参数 | common/api/bluetooth/ma.writeBLECharacteristicValue.md |
| MapContext.addMarkers | 添加 marker | map | - markers 为必填参数 | DSL/api/map/MapContext.addMarkers.md |
| MapContext.moveToLocation | 若未传入经纬度时调用，将申请获取用户当前位置，并在用户授权后移动到用户当前位置；若未传入经纬度且无用户授权定位，不会改变位置，并会触发失败回调 | map | -  | DSL/api/map/MapContext.moveToLocation.md |
| MapContext.removeMarkers | 移除 marker | map | - markerIds 为必填参数 | DSL/api/map/MapContext.removeMarkers.md |
| NodesRef | 用于获取 MAML 节点信息的对象 | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.md |
| NodesRef.boundingClientRect | 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位，其功能类似于 DOM 的 getBoundingClientRect，返回 NodesRef 对应的 SelectorQuery | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.boundingClientRect.md |
| NodesRef.fields | 获取节点的相关信息，需要获取的字段在 fields 中指定，返回值是 nodesRef 对应的 selectorQuery | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.fields.md |
| NodesRef.scrollOffset | 添加节点的滚动位置查询请求，以像素为单位，节点必须是 scroll-view 或者 viewport，返回 NodesRef 对应的 SelectorQuery | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.scrollOffset.md |
| RecorderManager.offError | 移除监听录音错误事件监听函数 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.offError.md |
| RecorderManager.offPause | 移除监听录音暂停事件 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.offPause.md |
| RecorderManager.offResume | 移除监听录音继续事件 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.offResume.md |
| RecorderManager.offStart | 移除录音开始事件监听函数 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.offStart.md |
| RecorderManager.offStop | 移除录音结束事件监听函数 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.offStop.md |
| RecorderManager.onError | 监听录音错误事件，在录音管理器操作的任意环节出现了状态异常、操作异常、系统异常等都会监听到错误 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.onError.md |
| RecorderManager.onPause | 监听录音暂停事件，此时录音机进入到录音暂停状态，只能由 RecorderManager.pause() 触发 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.onPause.md |
| RecorderManager.onResume | 监听录音继续事件，此时录音机再次进入到正在录音状态，只能由 RecorderManager.resume() 触发 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.onResume.md |
| RecorderManager.onStart | 监听录音开始事件，此时录音机进入到正在录音状态，只能由 RecorderManager.start() 触发 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.onStart.md |
| RecorderManager.onStop | 监听录音结束事件，此时录音机再次进入到录音空闲状态，可以由 RecorderManager.stop() 主动触发，也会在录音发生中断等异常时自动触发 | media | - 最低支持版本：23.9.0 | DSL/api/media/recorder/RecorderManager.onStop.md |
| RecorderManager.pause | 暂停录音，必须要用户授予当前小程序麦克风权限才可调用 | media | - 最低支持版本：23.9.0<br>- 需要麦克风权限 | DSL/api/media/recorder/RecorderManager.pause.md |
| RecorderManager.resume | 继续录音，继续上次暂停前的录音，必须要用户授予当前小程序麦克风权限才可调用 | media | - 最低支持版本：23.9.0<br>- 需要麦克风权限 | DSL/api/media/recorder/RecorderManager.resume.md |
| RecorderManager.start | 开始录音，必须要用户授予当前小程序麦克风权限，同时宿主 APP 被允许使用系统麦克风才可调用 | media | - 最低支持版本：23.9.0<br>- 需要麦克风权限 | DSL/api/media/recorder/RecorderManager.start.md |
| RecorderManager.stop | 停止录音，必须要用户授予当前小程序麦克风权限才可调用 | media | - 最低支持版本：23.9.0<br>- 需要麦克风权限 | DSL/api/media/recorder/RecorderManager.stop.md |
| SelectorQuery | 查询节点信息的对象 | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.md |
| SelectorQuery.exec | 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回 | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.exec.md |
| SelectorQuery.in | 将选择器的选取范围更改为自定义组件 component 内 | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.in.md |
| SelectorQuery.select | 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息 | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.select.md |
| SelectorQuery.selectAll | 在当前页面下选择匹配选择器 selector 的所有节点 | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.selectAll.md |
| SelectorQuery.selectViewport | 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息 | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.selectViewport.md |
| VideoContext | VideoContext 实例，可通过 ma.createVideoContext() 获取，通过 id 跟一个 video 组件绑定，操作对应的 video 组件 | media | -  | DSL/api/media/video/VideoContext.md |

---

*本文件基于 `api/` 目录下的接口文档汇总整理，共计 199 个接口。*
