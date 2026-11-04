## 授权

> 部分接口需要经过用户授权同意才能调用。我们把这些接口按使用范围分成多个 `scope` ，用户选择对 `scope` 来进行授权，当授权给一个 `scope` 之后，其对应的所有接口都可以直接使用。

此类接口调用时：

- 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；
- 如果用户已授权，可以直接调用接口；
- 如果用户已拒绝授权，则不会出现弹窗，而是直接进入接口 fail 回调。**请开发者兼容用户拒绝授权的场景。**

## 获取用户授权设置

开发者可以使用 [ma.getSetting](GET_SETTING) 获取用户当前的授权状态。

## 打开设置界面

用户可以在小程序设置界面（「右上角菜单」 - 「设置」）中控制对该小程序的授权状态。

开发者可以调用 [ma.openSetting](OPEN_SETTING) 打开设置界面，引导用户开启授权。

## 提前发起授权请求

开发者可以使用 [ma.authorize](AUTHORIZE) 在调用需授权 API 之前，提前向用户发起授权请求。

## scope 列表

| scope              | 对应接口                                                                                              | 描述     |
|:-------------------|:--------------------------------------------------------------------------------------------------|:-------|
| scope.location     | [ma.getLocation](GET_LOCATION)                                                                    | 精确地理位置 |
| scope.camera       | [camera](CAMERA) 组件, [ma.scanCode](SCAN_CODE), [ma.chooseImage](CHOOSE_IMAGE)                     | 摄像头    |
| scope.photosAlbums | [ma.saveImageToPhotosAlbum](SAVE_IMAGE), [ma.scanCode](SCAN_CODE), [ma.chooseImage](CHOOSE_IMAGE) | 读写相册   |

## AuthSetting

### 属性

### boolean scope.location

是否授权地理位置，涉及接口 [ma.getLocation](GET_LOCATION)

### boolean scope.camera

是否授权摄像头，涉及组件 [camera](CAMERA)，接口 [ma.scanCode](SCAN_CODE)、[ma.chooseImage](CHOOSE_IMAGE)

### boolean scope.photosAlbums

是否授权读写相册，涉及接口 [ma.saveImageToPhotosAlbum](SAVE_IMAGE)、[ma.scanCode](SCAN_CODE)、[ma.chooseImage](CHOOSE_IMAGE)
