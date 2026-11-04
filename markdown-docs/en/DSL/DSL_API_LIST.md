# DSL Mini Program API Interface List

> This file summarizes brief descriptions of all DSL mini program API interfaces for quick retrieval. For detailed parameters, return values, and examples, please refer to the detail file of each interface.

## Interface list

| Interface Name | Interface Brief Description | Interface Type | Usage Restrictions | Interface Detail Path |
|:--|:--|:--|:--|:--|
| AudioContext | AudioContext instance, can be obtained via ma.createAudioContext(), bound to an audio component via id, to operate the corresponding audio component | media | -  | DSL/api/media/audio/AudioContext.md |
| authority | Some interfaces require user authorization consent before they can be called. They are divided by scope. After authorization, the corresponding interfaces can be used directly | openApi | -  | DSL/api/openApi/authority.md |
| backgroundFetchData | Gets all the data cached by data pre-fetching. This API waits until all pre-fetch requests are completed (without using the previous data) and then returns all the pre-fetched data to the user in a JsonArray | storage | - Minimum supported version: 23.12.0<br>- fetchType is a required parameter | DSL/api/storage/backgroundFetchData.md |
| CameraContext.setZoom | Set zoom level | media | - Minimum supported version: 23.9.0<br>- zoom is a required parameter | DSL/api/media/camera/CameraContext.setZoom.md |
| CameraContext.startRecord | Start recording | media | - Minimum supported version: 23.9.0 | DSL/api/media/camera/CameraContext.startRecord.md |
| CameraContext.stopRecord | Stop recording | media | - Minimum supported version: 23.9.0 | DSL/api/media/camera/CameraContext.stopRecord.md |
| CameraContext.takePhoto | Take a photo | media | -  | DSL/api/media/camera/CameraContext.takePhoto.md |
| dataPrePull | Initiates a request ahead of time when the mini program cold starts and caches the request content. When the real request is made, the cached data is used to reduce the network request time | storage | -  | DSL/api/storage/dataPrePull.md |
| DownloadTask | An object that can listen to download progress change events and cancel download tasks | network | - Minimum supported version: 23.6.0 | DSL/api/network/DownloadTask.md |
| DownloadTask.abort | Abort a download task | network | - Minimum supported version: 23.6.0 | DSL/api/network/DownloadTask.abort.md |
| DownloadTask.offProgressUpdate | Remove the listener function for download progress change events | network | - Minimum supported version: 23.6.0 | DSL/api/network/DownloadTask.offProgressUpdate.md |
| DownloadTask.onProgressUpdate | Listen to download progress change events | network | - Minimum supported version: 23.6.0 | DSL/api/network/DownloadTask.onProgressUpdate.md |
| EventChannel.emit | Trigger an event | route | -  | DSL/api/route/EventChannel.emit.md |
| EventChannel.off | Cancel listening to an event. When the second parameter is given, only the given listener function is cancelled; otherwise, all listener functions are cancelled | route | -  | DSL/api/route/EventChannel.off.md |
| EventChannel.on | Continuously listen to an event | route | -  | DSL/api/route/EventChannel.on.md |
| EventChannel.once | Listen to an event once, and becomes invalid after being triggered | route | -  | DSL/api/route/EventChannel.once.md |
| FileSystemManager | File manager | file | - Minimum supported version: 23.6.0 | DSL/api/file/FileSystemManager.md |
| FileSystemManager.copyFile | Copy a file (does not support copying folders. The target path is a file. If the target file already exists, the copy will overwrite the existing target file) | file | - Minimum supported version: 23.6.0<br>- srcPath is a required parameter<br>- destPath is a required parameter | DSL/api/file/FileSystemManager.copyFile.md |
| FileSystemManager.exists | Determine whether a file or folder exists | file | - Minimum supported version: 23.6.0<br>- path is a required parameter | DSL/api/file/FileSystemManager.exists.md |
| FileSystemManager.mkdir | Create a directory | file | - Minimum supported version: 23.6.0<br>- dirPath is a required parameter | DSL/api/file/FileSystemManager.mkdir.md |
| FileSystemManager.moveFile | Move a file (does not support moving folders. The target path is a directory. If a file with the same name already exists in the target directory, the file cannot be moved) | file | - Minimum supported version: 23.6.0<br>- srcPath is a required parameter<br>- destPath is a required parameter | DSL/api/file/FileSystemManager.moveFile.md |
| FileSystemManager.readdir | Read the list of files in a directory (including folders) | file | - Minimum supported version: 23.6.0<br>- dirPath is a required parameter | DSL/api/file/FileSystemManager.readdir.md |
| FileSystemManager.readFile | Read a file | file | - Minimum supported version: 23.6.0<br>- filePath is a required parameter | DSL/api/file/FileSystemManager.readFile.md |
| FileSystemManager.unlink | Delete a file (does not support deleting folders) | file | - Minimum supported version: 23.6.0<br>- filePath is a required parameter | DSL/api/file/FileSystemManager.unlink.md |
| FileSystemManager.writeFile | Write a file. If a directory in the path does not exist, the file write will fail; if the file exists, the content will be overwritten; if the file does not exist, a new file will be created and the content will be written | file | - Minimum supported version: 23.6.0<br>- filePath is a required parameter<br>- data is a required parameter | DSL/api/file/FileSystemManager.writeFile.md |
| locationPrePull | Obtaining the geographical location (ma.getLocation) for the first time in a mini program is usually time-consuming. The mini program framework provides a pre-fetch (pre-call) mechanism to advance this process and help improve the user experience | storage | -  | DSL/api/storage/locationPrePull.md |
| ma.arrayBufferToBase64 | Convert an ArrayBuffer object to a Base64 string | base | - Minimum supported version: 24.12.0<br>- arrayBuffer is a required parameter | common/api/base/ma.arrayBufferToBase64.md |
| ma.authorize | Initiate an authorization request to the user in advance, asking the user whether to authorize a certain function or data via a popup | openApi | - scope is a required parameter | DSL/api/openApi/ma.authorize.md |
| ma.base64ToArrayBuffer | Convert a Base64 string to an ArrayBuffer object | base | - Minimum supported version: 24.12.0<br>- base64 is a required parameter | common/api/base/ma.base64ToArrayBuffer.md |
| ma.cancelAuthorize | Cancel part of the authorization information of the current mini program | openApi | - Minimum supported version: 24.9.0<br>- scopes is a required parameter | common/api/auth/ma.cancelAuthorize.md |
| ma.cancelTimer | Cancel the timer created by the current mini program, and notify the developer via the success callback | openApi | - Minimum supported version: 25.9.0<br>- Only supports iOS | DSL/api/openApi/ma.cancelTimer.md |
| ma.canIUse | Determine whether the mini program's APIs, callbacks, parameters, components, etc. are available in the current version | base | - schema is a required parameter | DSL/api/base/ma.canIUse.md |
| ma.capsuleStyle | Set the capsule style | ui | - Minimum supported version: 24.3.0<br>- style is a required parameter | common/api/ui/ma.capsuleStyle.md |
| ma.chooseContact | Open the phone contacts to select a contact | device | -  | common/api/scan/ma.chooseContact.md |
| ma.chooseImage | Select an image from the local album or take a photo using the camera | media | -  | common/api/media/ma.chooseImage.md |
| ma.chooseVideo | Select a video from the local album or shoot using the camera | media | -  | common/api/media/ma.chooseVideo.md |
| ma.clearStorage | Clear the local data cache | storage | -  | common/api/storage/ma.clearStorage.md |
| ma.closeBLEConnection | Disconnect from a Bluetooth Low Energy device | device | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter | common/api/bluetooth/ma.closeBLEConnection.md |
| ma.closeBluetoothAdapter | Close the Bluetooth module | device | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.closeBluetoothAdapter.md |
| ma.closeSocket | Close a WebSocket connection | network | -  | DSL/api/network/ma.closeSocket.md |
| ma.compressImage | Image compression interface, with optional compression quality | media | - src is a required parameter | DSL/api/media/img/ma.compressImage.md |
| ma.connectSocket | Create a WebSocket connection | network | - url is a required parameter | DSL/api/network/ma.connectSocket.md |
| ma.createAudioContext | Create an audio context AudioContext object | media | -  | DSL/api/media/audio/ma.createAudioContext.md |
| ma.createBLEConnection | Connect to a Bluetooth Low Energy device | device | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter | common/api/bluetooth/ma.createBLEConnection.md |
| ma.createCameraContext | Create a camera context CameraContext object | media | -  | DSL/api/media/camera/ma.createCameraContext.md |
| ma.createMapContext | Create a map context MapContext object | map | - mapId is a required parameter | DSL/api/map/ma.createMapContext.md |
| ma.createSelectorQuery | Return a SelectorQuery object instance | MAML | -  | DSL/api/MAML/ma.createSelectorQuery.md |
| ma.createTimer | Execute a countdown according to the input parameter duration, and notify the developer via the success callback when completed | openApi | - Minimum supported version: 25.9.0<br>- Only supports iOS<br>- duration is a required parameter | DSL/api/openApi/ma.createTimer.md |
| ma.createVideoContext | Create a video context VideoContext object | media | -  | DSL/api/media/video/ma.createVideoContext.md |
| ma.createWebviewContext | Create a WebviewContext object for sending messages to the web-view component | web-view | - Minimum supported version: 25.12.0 | DSL/api/web-view/ma.createWebviewContext.md |
| ma.deauthorize | Cancel all authorization information of the current mini program | openApi | - Minimum supported version: 24.9.0 | common/api/auth/ma.deauthorize.md |
| ma.downloadFile | Download a file resource to the local. The client directly initiates an HTTPS GET request and returns the local temporary path of the file | network | - url is a required parameter | common/api/network/ma.downloadFile.md |
| ma.env.USER_DATA_PATH | A constant string representing the directory path that the user can operate on | file | - Minimum supported version: 23.6.0 | DSL/api/file/ma.env.USER_DATA_PATH.md |
| ma.exitMiniProgram | Exit the current mini program | route | - Minimum supported version: 24.6.0 | common/api/navigator/ma.exitMiniProgram.md |
| ma.getAuthCode | Call the interface to obtain the login credential, and obtain the user login status information through the credential | openApi | - Minimum supported version: 24.3.0<br>- scopes is a required parameter<br>- Need to connect to the mini program SaaS platform and the host application needs to implement the password-free login function | common/api/auth/ma.getAuthCode.md |
| ma.getBatteryInfo | Get the device battery level | device | -  | DSL/api/device/ma.getBatteryInfo.md |
| ma.getBLEDeviceCharacteristics | Get all characteristics of a certain service of a Bluetooth Low Energy device | device | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter<br>- serviceId is a required parameter | common/api/bluetooth/ma.getBLEDeviceCharacteristics.md |
| ma.getBLEDeviceServices | Get all services of a Bluetooth Low Energy device | device | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter | common/api/bluetooth/ma.getBLEDeviceServices.md |
| ma.getClipboardData | Get the content of the system clipboard | device | - Minimum supported version: 24.12.0 | common/api/clipboard/ma.getClipboardData.md |
| ma.getFileInfo | Get file information | file | - filePath is a required parameter | DSL/api/file/ma.getFileInfo.md |
| ma.getFileSystemManager | Get the globally unique file manager | file | - Minimum supported version: 23.6.0 | DSL/api/file/ma.getFileSystemManager.md |
| ma.getImageInfo | Get image information. For network images, the download domain must be configured first to take effect | media | - src is a required parameter | DSL/api/media/img/ma.getImageInfo.md |
| ma.getKbzBackendServerUrl | Get the KBZ mini program service address | custom | -  | DSL/api/custom/KBZ/ma.getKbzBackendServerUrl.md |
| ma.getLaunchOptionsSync | Get the startup parameters of the mini program at launch | base | - Minimum supported version: 23.12.0 | common/api/base/ma.getLaunchOptionsSync.md |
| ma.getLocation | Get the current geographical location and speed. After the user leaves the mini program, this interface cannot be called. Enabling high-precision positioning will increase the interface time consumption. You can specify highAccuracyExpireTime as the timeout. Frequent calls will lead to power consumption | location | - User authorization: requires scope.location | common/api/navigator/ma.getLocation.md |
| ma.getMenuButtonBoundingClientRect | Get the layout position information of the menu button (the capsule button in the upper right corner). The coordinate information takes the upper-left corner of the screen as the origin | ui | -  | DSL/api/ui/getMenuButtonBoundingClientRect.md |
| ma.getNetworkType | Get the network type | device | -  | common/api/network/ma.getNetworkType.md |
| ma.getOpenUserInfo | Call the interface to get the user's public information | openApi | - Minimum supported version: 24.3.0<br>- Need to connect to the mini program SaaS platform and the host application needs to implement the function of obtaining the user's public information | common/api/auth/ma.getOpenUserInfo.md |
| ma.getRecorderManager | Get the globally unique recording manager RecorderManager | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/ma.getRecorderManager.md |
| ma.getSavedFileInfo | Get the file information of a local file. This interface can only be used to get files already saved locally. If you need to get temporary file information, please use the ma.getFileInfo() interface | file | - filePath is a required parameter | DSL/api/file/ma.getSavedFileInfo.md |
| ma.getSavedFileList | Get the list of locally cached files saved under this mini program | file | -  | DSL/api/file/ma.getSavedFileList.md |
| ma.getScreenBrightness | Get the screen brightness | device | -  | DSL/api/device/screen/ma.getScreenBrightness.md |
| ma.getSetting | Get the user's current settings. The return value will only include permissions that the mini program has already requested from the user | openApi | -  | DSL/api/openApi/ma.getSetting.md |
| ma.getsmallappinfo | Query the basic information of the mini program | base | - Minimum supported version: 23.12.0 | DSL/api/base/ma.getsmallappinfo.md |
| ma.getStatusBarHeight | Get the status bar height | base | - Minimum supported version: 24.3.0 | common/api/base/ma.getStatusBarHeight.md |
| ma.getStorage | Asynchronously get the content of the specified key from the local cache | storage | - key is a required parameter | common/api/storage/ma.getStorage.md |
| ma.getStorageInfo | Asynchronously get the relevant information of the current storage | storage | -  | common/api/storage/ma.getStorageInfo.md |
| ma.getStorageSync | Synchronously get the content of the specified key from the local cache | storage | -  | common/api/storage/ma.getStorageSync.md |
| ma.getSystemInfo | Get system information | base | -  | DSL/api/base/ma.getSystemInfo.md |
| ma.getSystemInfoSync | Synchronously get system information | base | -  | common/api/base/ma.getSystemInfoSync.md |
| ma.getSystemSetting | Get device settings | base | - Minimum supported version: 24.12.0 | common/api/base/ma.getSystemSetting.md |
| ma.getUpdateManager | Get the globally unique version update manager for managing mini program updates | base | -  | DSL/api/base/ma.getUpdateManager.md |
| ma.gotoBrowser | Jump to a third-party APP | thirdPart | - Minimum supported version: 24.3.0<br>- openUrl is a required parameter | common/api/navigator/ma.gotoBrowser.md |
| ma.hideKeyboard | After the keyboard is brought up by focusing on input, textarea, etc., manually call this interface to collapse the keyboard | device | -  | DSL/api/device/ma.hideKeyboard.md |
| ma.hideLoading | Hide the loading prompt box | ui | -  | common/api/ui/ma.hideLoading.md |
| ma.hideTabBar | Hide the tabBar | ui | -  | DSL/api/ui/ma.hideTabBar.md |
| ma.hideTabBarRedDot | Hide the red dot in the upper right corner of a certain tabBar item | ui | - index is a required parameter | DSL/api/ui/ma.hideTabBarRedDot.md |
| ma.hideToast | Hide the message prompt box | ui | -  | DSL/api/ui/ma.hideToast.md |
| ma.isOnline | Determine the current network connection status | network | - Minimum supported version: 23.12.0 | common/api/network/ma.isOnline.md |
| ma.loadFontFace | Dynamically load a network font. The file address must be of the download type | ui | - Minimum supported version: 23.6.0<br>- family is a required parameter<br>- source is a required parameter | DSL/api/ui/ma.loadFontFace.md |
| ma.makePhoneCall | Make a phone call | device | - phoneNumber is a required parameter | DSL/api/device/ma.makePhoneCall.md |
| ma.navigateBack | Close the current page and return to the previous page or multiple levels of pages. You can get the current page stack via getCurrentPages to determine how many levels to go back | route | -  | DSL/api/route/ma.navigateBack.md |
| ma.navigateTo | Keep the current page and jump to a certain page within the application, but cannot jump to a tabbar page. You can return to the original page using ma.navigateBack. The page stack of a mini program is up to ten levels | route | - url is a required parameter | DSL/api/route/ma.navigateTo.md |
| ma.navigateToMiniProgram | Jump from within the mini program to other mini programs | route | - Minimum supported version: 23.12.0<br>- appId is a required parameter | common/api/navigator/ma.navigateToMiniProgram.md |
| ma.nextTick | Delay a portion of operations to the next time slice for execution, similar to setTimeout | ui | -  | DSL/api/ui/ma.nextTick(function callback).md |
| ma.offAppHide | Cancel listening to the mini program switch-to-background event | base | -  | DSL/api/base/ma.offAppHide.md |
| ma.offAppShow | Cancel listening to the mini program switch-to-foreground event | base | -  | DSL/api/base/ma.offAppShow.md |
| ma.offBluetoothDeviceFound | Remove the global listener function for the event of finding a new device | device | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.offBluetoothDeviceFound.md |
| ma.offError | Cancel listening to the mini program error event | base | -  | DSL/api/base/ma.offError.md |
| ma.offGyroscopeChange | Cancel listening to the gyroscope data change event | device | -  | DSL/api/device/gyroscope/ma.offGyroscopeChange.md |
| ma.offKeyboardHeightChange | Remove the listener function for the keyboard height change event | device | - Minimum supported version: 24.12.0 | common/api/device/ma.offKeyboardHeightChange.md |
| ma.offMemoryWarning | Cancel listening to the memory warning event | device | -  | DSL/api/device/memoryWarning/ma.offMemoryWarning.md |
| ma.offNetworkStatusChange | Cancel listening to the network status change event. If the parameter is empty, all event listeners are cancelled | device | -  | DSL/api/device/netWork/ma.offNetworkStatusChange.md |
| ma.onAppHide | Listen to the mini program switch-to-background event. The timing of this event callback is consistent with App.onHide | base | -  | DSL/api/base/ma.onAppHide.md |
| ma.onAppShow | Listen to the mini program switch-to-foreground event. The callback parameters of this event are consistent with App.onShow | base | -  | DSL/api/base/ma.onAppShow.md |
| ma.onBluetoothDeviceFound | Listen to the event of finding a new device | device | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.onBluetoothDeviceFound.md |
| ma.onError | Listen to the mini program error event | base | -  | DSL/api/base/ma.onError.md |
| ma.onGyroscopeChange | Listen to the gyroscope data change event | device | -  | DSL/api/device/gyroscope/ma.onGyroscopeChange.md |
| ma.onKeyboardHeightChange | Listen to the keyboard height change event | device | - Minimum supported version: 24.12.0 | common/api/device/ma.onKeyboardHeightChange.md |
| ma.onMemoryWarning | Listen to the memory warning event | device | -  | DSL/api/device/memoryWarning/ma.onMemoryWarning.md |
| ma.onNetworkStatusChange | Listen to the network status change event | device | -  | DSL/api/device/netWork/ma.onNetworkStatusChange.md |
| ma.onSocketClose | Listen to the WebSocket connection close event | network | -  | DSL/api/network/ma.onSocketClose.md |
| ma.onSocketError | Listen to the WebSocket error event | network | -  | DSL/api/network/ma.onSocketError.md |
| ma.onSocketMessage | Listen to the WebSocket event of receiving a message from the server | network | -  | DSL/api/network/ma.onSocketMessage.md |
| ma.onSocketOpen | Listen to the WebSocket connection open event | network | -  | DSL/api/network/ma.onSocketOpen.md |
| ma.openBluetoothAdapter | Initialize the Bluetooth module | device | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.openBluetoothAdapter.md |
| ma.openDocument | Open a document in a new page | file | - filePath is a required parameter | common/api/file/ma.openDocument.md |
| ma.openSetting | Bring up the mini program settings interface of the client and return the operation result of the user settings | openApi | -  | DSL/api/openApi/ma.openSetting.md |
| ma.pageScrollTo | Scroll the page to the target position, supporting scroll distance positioning | scroll | -  | DSL/api/scroll/ma.pageScrollTo.md |
| ma.playVoice | Start playing audio. Only one voice file is allowed to be playing at the same time. If the previous voice file has not finished playing, the previous voice playback will be interrupted | media | - Minimum supported version: 23.9.0<br>- filePath is a required parameter<br>- url is a required parameter | DSL/api/media/recorder/ma.playVoice.md |
| ma.previewImage | Full-screen preview of images in a new page | media | - urls is a required parameter | common/api/media/ma.previewImage.md |
| ma.redirectTo | Close the current page and jump to a certain page within the application, but jumping to a tabbar page is not allowed | route | - url is a required parameter | DSL/api/route/ma.redirectTo.md |
| ma.reLaunch | Close all pages and open a certain page within the application | route | - url is a required parameter | DSL/api/route/ma.reLaunch.md |
| ma.removeCustomEvent | Remove the mini program custom event listener | openApi | - Minimum supported version: 25.12.0<br>- eventName is a required parameter (cannot be an empty string) | common/api/message/ma.removeCustomEvent.md |
| ma.removeSavedFile | Delete a local cached file | file | - filePath is a required parameter | DSL/api/file/ma.removeSavedFile.md |
| ma.removeStorage | Remove the specified key from the local cache | storage | - key is a required parameter | common/api/storage/ma.removeStorage.md |
| ma.removeTabBarBadge | Remove the text in the upper right corner of a certain tabBar item | ui | - Minimum supported version: 24.12.0<br>- index is a required parameter | DSL/api/ui/ma.removeTabBarBadge.md |
| ma.reportEvent | Event reporting | custom | - Minimum supported version: 24.6.0<br>- eventId is a required parameter | common/api/report/ma.reportEvent.md |
| ma.reportLog | Developer custom log reporting interface | custom | - Minimum supported version: 23.12.0<br>- log is a required parameter | common/api/report/ma.reportLog.md |
| ma.reportPerformance | Developer custom metric reporting interface | custom | - Minimum supported version: 23.12.0<br>- reportEvent is a required parameter<br>- reportParams is a required parameter | common/api/report/ma.reportPerformance.md |
| ma.request | Initiate an HTTPS network request | network | - url is a required parameter | common/api/network/ma.request.md |
| ma.saveFile | Save a file locally. Note: saveFile will move the temporary file, so the tempFilePath passed in will be unavailable after a successful call | file | - tempFilePath is a required parameter | DSL/api/file/ma.saveFile.md |
| ma.saveImageToPhotosAlbum | Save an image to the system album | media | - filePath is a required parameter | common/api/media/ma.saveImage.md |
| ma.scanCode | The whole process of invoking the scan function will execute the onHide and onShow lifecycle functions of app and page in sequence. That is (invoke) app.onHide > page.onHide > (return) app.onShow > page.onShow. (The simulator is only a simulated implementation) | device | -  | common/api/scan/ma.scanCode.md |
| ma.sendSocketMessage | Send data through a WebSocket connection. You must first call ma.connectSocket and after the ma.onSocketOpen callback before sending | network | - data is a required parameter | DSL/api/network/ma.sendSocketMessage.md |
| ma.setBackgroundColor | Dynamically set the background color of the window | ui | -  | DSL/api/ui/ma.setBackgroundColor.md |
| ma.setBackgroundTextStyle | Dynamically set the style of the pull-down background font and loading icon | ui | - textStyle is a required parameter | DSL/api/ui/ma.setBackgroundTextStyle.md |
| ma.setCapsuleShow | Set whether to hide the capsule | ui | - Minimum supported version: 25.3.0 | common/api/ui/ma.setCapsuleShow.md |
| ma.setClipboardData | Set the content of the system clipboard. After a successful call, a toast "Content copied" will pop up, lasting 1.5s | device | - Minimum supported version: 24.12.0<br>- data is a required parameter | common/api/clipboard/ma.setClipboardData.md |
| ma.setCustomEvent | Register a mini program custom event, triggering the callback in specified scenarios | openApi | - Minimum supported version: 25.12.0<br>- eventName is a required parameter (cannot be an empty string)<br>- callback is a required parameter | common/api/message/ma.setCustomEvent.md |
| ma.setKeepScreenOn | Set whether to keep the screen always on. Only effective in the current mini program. The setting becomes invalid after leaving the mini program | device | - keepScreenOn is a required parameter | DSL/api/device/screen/ma.setKeepScreenOn.md |
| ma.setNavigationBarColor | Set the color of the page navigation bar | ui | - frontColor is a required parameter<br>- backgroundColor is a required parameter | DSL/api/ui/ma.setNavigationBarColor.md |
| ma.setNavigationBarTitle | Dynamically set the title of the current page | ui | - title is a required parameter | DSL/api/ui/ma.setNavigationBarTitle.md |
| ma.setScreenBrightness | Set the screen brightness | device | - value is a required parameter | DSL/api/device/screen/ma.setScreenBrightness.md |
| ma.setStorage | Store data in the local cache under the specified key, which will overwrite the original content corresponding to that key. Unless the user actively deletes it or it is cleaned up by the system due to storage space reasons, the data is always available. The maximum data length allowed to be stored for a single key is 1MB, and the total data storage limit is 10MB | storage | - key is a required parameter<br>- data is a required parameter | common/api/storage/ma.setStorage.md |
| ma.setStorageSync | Store data in the local cache under the specified key, which will overwrite the original content corresponding to that key. Unless the user actively deletes it or it is cleaned up by the system due to storage space reasons, the data is always available. The maximum data length allowed to be stored for a single key is 10KB on Android and 1MB on iOS. The total data storage limit is 10MB | storage | -  | common/api/storage/ma.setStorageSync.md |
| ma.setSwipeBack | Set whether to disable the iOS gesture swipe control | ui | - Minimum supported version: 26.3.0<br>- Only effective on iOS<br>- enableSwipeBack is a required parameter | common/api/ui/ma.setSwipeBack.md |
| ma.setTabBarBadge | Add text to the upper right corner of a certain tabBar item | ui | - Minimum supported version: 24.12.0<br>- index is a required parameter<br>- text is a required parameter | DSL/api/ui/ma.setTabBarBadge.md |
| ma.setTabBarItem | Dynamically set the content of a certain tabBar item | ui | - index is a required parameter | DSL/api/ui/ma.setTabBarItem.md |
| ma.setTabBarStyle | Dynamically set the overall style of the tabBar | ui | -  | DSL/api/ui/ma.setTabBarStyle.md |
| ma.showActionSheet | Show the action menu | ui | - itemList is a required parameter | DSL/api/ui/ma.showActionSheet.md |
| ma.showLoading | Show the loading prompt box. You must actively call ma.hideLoading to close the prompt box | ui | - title is a required parameter | common/api/ui/ma.showLoading.md |
| ma.showModal | Show a modal dialog | ui | -  | DSL/api/ui/ma.showModal.md |
| ma.showTabBar | Show the tabBar | ui | -  | DSL/api/ui/ma.showTabBar.md |
| ma.showTabBarRedDot | Show the red dot in the upper right corner of a certain tabBar item | ui | - index is a required parameter | DSL/api/ui/ma.showTabBarRedDot.md |
| ma.showToast | Show the message prompt box | ui | -  | common/api/ui/ma.showToast.md |
| ma.startBluetoothDevicesDiscovery | Start searching for nearby Bluetooth peripheral devices | device | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.startBluetoothDevicesDiscovery.md |
| ma.startGyroscope | Start listening to gyroscope data | device | -  | DSL/api/device/gyroscope/ma.startGyroscope.md |
| ma.startPay | Initiate a payment | custom | - prepayId is a required parameter<br>- orderInfo is a required parameter<br>- sign is a required parameter<br>- amount is a required parameter | DSL/api/custom/KBZ/ma.startPay.md |
| ma.startPullDownRefresh | Start pull-to-refresh. After being called, it triggers the pull-to-refresh animation, with the same effect as the user's manual pull-to-refresh | ui | -  | DSL/api/ui/refresh/ma.startPullDownRefresh.md |
| ma.stopBluetoothDevicesDiscovery | Stop searching for nearby Bluetooth peripheral devices | device | - Minimum supported version: 24.6.0 | common/api/bluetooth/ma.stopBluetoothDevicesDiscovery.md |
| ma.stopGyroscope | Stop listening to gyroscope data | device | -  | DSL/api/device/gyroscope/ma.stopGyroscope.md |
| ma.stopPullDownRefresh | Stop the pull-to-refresh of the current page | ui | -  | DSL/api/ui/refresh/ma.stopPullDownRefresh.md |
| ma.stopVoice | Stop playing audio | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/ma.stopVoice.md |
| ma.submitReport | The developer directly triggers log reporting | custom | - Minimum supported version: 23.12.0 | common/api/report/ma.submitReport.md |
| ma.switchTab | Jump to a tabBar page and close all other non-tabBar pages | route | - url is a required parameter | DSL/api/route/ma.switchTab.md |
| ma.uploadFile | Upload a local resource to the server. The client initiates an HTTPS POST request with content-type multipart/form-data | network | - url is a required parameter<br>- filePath is a required parameter (choose one of filePath and files)<br>- files is a required parameter (choose one of filePath and files)<br>- name is a required parameter | common/api/network/ma.uploadFile.md |
| ma.vibrateLong | Make the phone vibrate for a longer period of time (400 ms) | device | -  | DSL/api/device/vibrate/ma.vibrateLong.md |
| ma.vibrateShort | Make the phone vibrate for a shorter period of time (15 ms) | device | - type is a required parameter | DSL/api/device/vibrate/ma.vibrateShort.md |
| ma.writeBLECharacteristicValue | Write binary data to the characteristic value of a Bluetooth Low Energy device | device | - Minimum supported version: 24.6.0<br>- deviceId is a required parameter<br>- serviceId is a required parameter<br>- characteristicId is a required parameter<br>- value is a required parameter | common/api/bluetooth/ma.writeBLECharacteristicValue.md |
| MapContext.addMarkers | Add markers | map | - markers is a required parameter | DSL/api/map/MapContext.addMarkers.md |
| MapContext.moveToLocation | When called without passing in latitude and longitude, it will apply to obtain the user's current location, and move to the user's current location after the user authorizes; if no latitude and longitude are passed in and there is no user location authorization, the position will not change and a failure callback will be triggered | map | -  | DSL/api/map/MapContext.moveToLocation.md |
| MapContext.removeMarkers | Remove markers | map | - markerIds is a required parameter | DSL/api/map/MapContext.removeMarkers.md |
| NodesRef | An object used to obtain MAML node information | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.md |
| NodesRef.boundingClientRect | Add a query request for the layout position of a node, relative to the display area, in pixels. Its function is similar to the DOM's getBoundingClientRect, and returns the SelectorQuery corresponding to the NodesRef | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.boundingClientRect.md |
| NodesRef.fields | Get the relevant information of the node. The fields to be obtained are specified in fields, and the return value is the selectorQuery corresponding to the nodesRef | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.fields.md |
| NodesRef.scrollOffset | Add a query request for the scroll position of a node, in pixels. The node must be a scroll-view or viewport, and returns the SelectorQuery corresponding to the NodesRef | MAML | -  | DSL/api/MAML/NodesRef/NodesRef.scrollOffset.md |
| RecorderManager.offError | Remove the listener function for recording error events | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.offError.md |
| RecorderManager.offPause | Remove the listener for recording pause events | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.offPause.md |
| RecorderManager.offResume | Remove the listener for recording resume events | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.offResume.md |
| RecorderManager.offStart | Remove the listener function for recording start events | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.offStart.md |
| RecorderManager.offStop | Remove the listener function for recording stop events | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.offStop.md |
| RecorderManager.onError | Listen to recording error events. Errors will be listened to whenever there is a status exception, operation exception, system exception, etc. during any stage of the recording manager's operations | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.onError.md |
| RecorderManager.onPause | Listen to recording pause events. At this time, the recorder enters the recording paused state, and can only be triggered by RecorderManager.pause() | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.onPause.md |
| RecorderManager.onResume | Listen to recording resume events. At this time, the recorder enters the recording state again, and can only be triggered by RecorderManager.resume() | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.onResume.md |
| RecorderManager.onStart | Listen to recording start events. At this time, the recorder enters the recording state, and can only be triggered by RecorderManager.start() | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.onStart.md |
| RecorderManager.onStop | Listen to recording stop events. At this time, the recorder enters the recording idle state again. It can be actively triggered by RecorderManager.stop(), and will also be automatically triggered when an exception such as an interruption occurs during recording | media | - Minimum supported version: 23.9.0 | DSL/api/media/recorder/RecorderManager.onStop.md |
| RecorderManager.pause | Pause recording. The user must grant the current mini program microphone permission before it can be called | media | - Minimum supported version: 23.9.0<br>- Requires microphone permission | DSL/api/media/recorder/RecorderManager.pause.md |
| RecorderManager.resume | Resume recording, continuing the recording from before the last pause. The user must grant the current mini program microphone permission before it can be called | media | - Minimum supported version: 23.9.0<br>- Requires microphone permission | DSL/api/media/recorder/RecorderManager.resume.md |
| RecorderManager.start | Start recording. The user must grant the current mini program microphone permission, and the host APP must be allowed to use the system microphone before it can be called | media | - Minimum supported version: 23.9.0<br>- Requires microphone permission | DSL/api/media/recorder/RecorderManager.start.md |
| RecorderManager.stop | Stop recording. The user must grant the current mini program microphone permission before it can be called | media | - Minimum supported version: 23.9.0<br>- Requires microphone permission | DSL/api/media/recorder/RecorderManager.stop.md |
| SelectorQuery | An object for querying node information | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.md |
| SelectorQuery.exec | Execute all requests. The request results form an array in the order of the requests, returned in the first parameter of the callback | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.exec.md |
| SelectorQuery.in | Change the selection scope of the selector to within the custom component component | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.in.md |
| SelectorQuery.select | Select the first node matching the selector selector on the current page, and return a NodesRef object instance, which can be used to get node information | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.select.md |
| SelectorQuery.selectAll | Select all nodes matching the selector selector on the current page | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.selectAll.md |
| SelectorQuery.selectViewport | Select the display area, which can be used to get information such as the size and scroll position of the display area | MAML | -  | DSL/api/MAML/SelectorQuery/SelectorQuery.selectViewport.md |
| VideoContext | VideoContext instance, can be obtained via ma.createVideoContext(), bound to a video component via id, to operate the corresponding video component | media | -  | DSL/api/media/video/VideoContext.md |

---

*This file is compiled based on the interface documents under the `api/` directory, totaling 199 interfaces.*
