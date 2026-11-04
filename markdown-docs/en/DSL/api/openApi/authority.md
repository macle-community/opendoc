## Authorization

> Some interfaces require user authorization before they can be called. We group these interfaces into multiple `scope`s by usage scope. Users choose to authorize a `scope`. Once a `scope` is authorized, all its corresponding interfaces can be used directly.

When calling such interfaces:

- If the user has neither accepted nor rejected this permission, a popup will ask the user. The interface can only be called after the user agrees;
- If the user has already authorized, the interface can be called directly;
- If the user has already rejected authorization, no popup will appear, and it will directly enter the interface's fail callback. **Developers should handle the scenario where the user rejects authorization.**

## Get user authorization settings

Developers can use [ma.getSetting](GET_SETTING) to get the user's current authorization status.

## Open the settings interface

Users can control the authorization status for the mini program in the mini program settings interface ("Top-right menu" - "Settings").

Developers can call [ma.openSetting](OPEN_SETTING) to open the settings interface and guide the user to enable authorization.

## Initiate an authorization request in advance

Developers can use [ma.authorize](AUTHORIZE) to initiate an authorization request to the user before calling an API that requires authorization.

## scope list

| scope              | Corresponding interface                                                                              | Description     |
|:-------------------|:--------------------------------------------------------------------------------------------------|:-------|
| scope.location     | [ma.getLocation](GET_LOCATION)                                                                    | Precise geographic location |
| scope.camera       | [camera](CAMERA) component, [ma.scanCode](SCAN_CODE), [ma.chooseImage](CHOOSE_IMAGE)                     | Camera    |
| scope.photosAlbums | [ma.saveImageToPhotosAlbum](SAVE_IMAGE), [ma.scanCode](SCAN_CODE), [ma.chooseImage](CHOOSE_IMAGE) | Read and write album   |

## AuthSetting

### Properties

### boolean scope.location

Whether to authorize geographic location, involving interface [ma.getLocation](GET_LOCATION)

### boolean scope.camera

Whether to authorize the camera, involving component [camera](CAMERA), interfaces [ma.scanCode](SCAN_CODE)、[ma.chooseImage](CHOOSE_IMAGE)

### boolean scope.photosAlbums

Whether to authorize reading and writing the album, involving interfaces [ma.saveImageToPhotosAlbum](SAVE_IMAGE)、[ma.scanCode](SCAN_CODE)、[ma.chooseImage](CHOOSE_IMAGE)
