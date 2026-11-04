## ma.getUpdateManager()

> Gets the **globally unique** version update manager, used to manage mini program updates. For the mini program update mechanism, see the runtime mechanism documentation.


### Return Value

#### UpdateManager

The UpdateManager object, used to manage updates. An instance can be obtained via the ma.getUpdateManager API.

### Methods

### UpdateManager.applyUpdate()

Forces the mini program to restart and use the new version. Called after the new version of the mini program has been downloaded (i.e., after receiving the `onUpdateReady` callback).

### UpdateManager.onCheckForUpdate(function callback)

Listens for the event of the macle backend requesting an update check result. macle automatically checks for updates when the mini program cold starts; it does not need to be actively triggered by the developer.

#### Parameters

#### function callback

Callback function for the event of the macle backend requesting an update check result

##### Parameters

##### Object res

| Attribute  | Type    | Description           |
|:----------|:-------|:---------------------|
| hasUpdate | Boolean | Whether there is a new version |

### UpdateManager.onUpdateFailed(function callback)

Listens for the mini program update failure event. Triggered when the mini program has a new version, the client actively triggers the download (no developer trigger needed), and the download fails (possibly due to network reasons, etc.)

#### Parameters

#### function callback

Callback function for the mini program update failure event

### UpdateManager.onUpdateReady(function callback)

Listens for the mini program version update event. The client actively triggers the download (no developer trigger needed), and the callback is fired after a successful download

#### Parameters

#### function callback

Callback function for the mini program version update event

### Sample Code

```js
const updateManager = ma.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  ma.showModal({
    title: 'Update Tips',
    content: 'content',
    success: function (res) {
      if (res.confirm) {
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
    console.log('updateFailed')
})
```