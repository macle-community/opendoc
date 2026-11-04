## ma.getUpdateManager()

> 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。


### 返回值

#### UpdateManager

UpdateManager 更新管理器对象，用来管理更新，可通过 ma.getUpdateManager 接口获取实例。

### 方法

### UpdateManager.applyUpdate()

强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。

### UpdateManager.onCheckForUpdate(function callback)

监听 macle 后台请求检查更新结果事件。macle 在小程序冷启动时自动检查更新，不需由开发者主动触发。

#### 参数

#### function callback

向 macle 后台请求检查更新结果事件的回调函数

##### 参数

##### Object res

| 属性        | 类型      | 说明     |
|:----------|:--------|:-------|
| hasUpdate | Boolean | 是否有新版本 |

### UpdateManager.onUpdateFailed(function callback)

监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调

#### 参数

#### function callback

小程序更新失败事件的回调函数

### UpdateManager.onUpdateReady(function callback)

监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调

#### 参数

#### function callback

小程序有版本更新事件的回调函数

### 示例代码

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