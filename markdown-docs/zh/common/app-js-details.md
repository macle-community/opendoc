# app.js详情

## 概述

`app.js`是DSL小程序的应用逻辑入口文件，用于定义小程序的整体逻辑和生命周期。该文件位于项目根目录，是DSL小程序必需的文件之一。

## 作用

1. **应用初始化**: 定义小程序启动时的初始化逻辑
2. **生命周期管理**: 监听小程序的启动、显示、隐藏等生命周期事件
3. **全局状态管理**: 定义全局数据和方法，供所有页面共享
4. **全局错误处理**: 捕获和处理小程序的异常错误

## 基本语法

```javascript
// app.js
App({
  // 生命周期函数
  onLaunch(options) {
    // 小程序初始化时执行
  },

  onShow(options) {
    // 小程序显示时执行
  },

  onHide() {
    // 小程序隐藏时执行
  },

  // 全局数据
  globalData: {
    userInfo: null,
    apiBaseUrl: 'https://api.example.com'
  },

  // 全局方法
  getUserInfo() {
    return this.globalData.userInfo;
  }
});
```

## 生命周期函数

### onLaunch(options)

小程序初始化时触发，只触发一次。

**参数options包含**:

| 参数 | 类型 | 说明 |
|------|------|------|
| path | string | 启动小程序的页面路径 |
| query | object | 启动小程序的页面参数 |
| scene | number | 启动小程序的场景值 |
| shareTicket | string | 转发票据 |
| referrerInfo | object | 来源信息 |

**示例**:
```javascript
onLaunch(options) {
  console.log('小程序启动', options);
  // 检查登录状态
  this.checkLogin();
  // 获取系统信息
  this.getSystemInfo();
},

checkLogin() {
  // 检查用户是否已登录
  const token = wx.getStorageSync('token');
  if (token) {
    this.globalData.hasLogin = true;
  }
},

getSystemInfo() {
  const systemInfo = wx.getSystemInfoSync();
  this.globalData.systemInfo = systemInfo;
  this.globalData.statusBarHeight = systemInfo.statusBarHeight;
}
```

### onShow(options)

小程序显示时触发，每次显示都会触发。

**参数options包含**:

| 参数 | 类型 | 说明 |
|------|------|------|
| path | string | 当前小程序的页面路径 |
| query | object | 当前小程序的页面参数 |
| scene | number | 启动小程序的场景值 |
| shareTicket | string | 转发票据 |
| referrerInfo | object | 来源信息 |

**示例**:
```javascript
onShow(options) {
  console.log('小程序显示', options);
  // 刷新用户状态
  this.refreshUserStatus();
  // 更新小程序
  this.checkUpdate();
},

refreshUserStatus() {
  // 从服务器刷新用户状态
},

checkUpdate() {
  const updateManager = wx.getUpdateManager();
  updateManager.onCheckForUpdate((res) => {
    console.log('是否有新版本:', res.hasUpdate);
  });
  updateManager.onUpdateReady(() => {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: (res) => {
        if (res.confirm) {
          updateManager.applyUpdate();
        }
      }
    });
  });
}
```

### onHide()

小程序隐藏时触发。

**示例**:
```javascript
onHide() {
  console.log('小程序隐藏');
  // 保存当前状态
  this.saveCurrentState();
  // 停止位置更新
  this.stopLocationUpdate();
},

saveCurrentState() {
  // 保存用户操作状态
  wx.setStorageSync('lastVisitTime', Date.now());
},

stopLocationUpdate() {
  // 停止位置更新
}
```

## 全局数据globalData

通过`globalData`对象可以定义全局共享的数据。

**示例**:
```javascript
App({
  globalData: {
    userInfo: null,
    token: '',
    apiBaseUrl: 'https://api.example.com',
    version: '1.0.0',
    systemInfo: null,
    statusBarHeight: 0,
    hasLogin: false
  }
});
```

**在页面中访问全局数据**:
```javascript
// 获取应用实例
const app = getApp();

Page({
  onLoad() {
    // 访问全局数据
    const userInfo = app.globalData.userInfo;
    const apiBaseUrl = app.globalData.apiBaseUrl;

    // 修改全局数据（需要通过应用实例）
    app.globalData.hasLogin = true;
  }
});
```

## 全局方法

可以在App实例上定义全局方法，供所有页面调用。

**示例**:
```javascript
App({
  globalData: {
    userInfo: null
  },

  // 登录方法
  login(code) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${this.globalData.apiBaseUrl}/login`,
        method: 'POST',
        data: { code },
        success: (res) => {
          this.globalData.userInfo = res.data.userInfo;
          this.globalData.token = res.data.token;
          wx.setStorageSync('token', res.data.token);
          resolve(res.data);
        },
        fail: reject
      });
    });
  },

  // 检查登录状态
  checkLogin() {
    const token = wx.getStorageSync('token');
    return !!token;
  },

  // 退出登录
  logout() {
    this.globalData.userInfo = null;
    this.globalData.token = '';
    wx.removeStorageSync('token');
  },

  // 发起请求的封装方法
  request(options) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${this.globalData.apiBaseUrl}${options.url}`,
        method: options.method || 'GET',
        data: options.data || {},
        header: {
          'Authorization': `Bearer ${this.globalData.token}`,
          ...options.header
        },
        success: (res) => {
          if (res.data.code === 0) {
            resolve(res.data);
          } else {
            wx.showToast({
              title: res.data.message || '请求失败',
              icon: 'none'
            });
            reject(res.data);
          }
        },
        fail: (err) => {
          wx.showToast({
            title: '网络请求失败',
            icon: 'none'
          });
          reject(err);
        }
      });
    });
  }
});
```

**在页面中调用全局方法**:
```javascript
const app = getApp();

Page({
  async onLoad() {
    // 调用全局登录方法
    try {
      await app.login(code);
      console.log('登录成功');
    } catch (error) {
      console.log('登录失败', error);
    }

    // 使用全局请求方法
    const result = await app.request({
      url: '/user/info',
      method: 'GET'
    });
  }
});
```

## 注意事项

1. **文件位置**: 必须放在项目根目录，命名为`app.js`
2. **App()**: 必须调用`App()`函数来注册小程序
3. **生命周期**: 建议在生命周期函数中进行初始化操作，避免影响启动速度
4. **globalData**: 谨慎使用全局数据，避免内存泄漏
5. **页面引用**: 使用`getApp()`获取应用实例

## 相关文档

- [DSL小程序开发指导](../DSL/DSL-Minicprogram-Development-Guide.md)
- [project.config.json详情](./project-config-json-details.md)
- [app.json详情](./app-json-details.md)
- [DSL和H5小程序差异对比](./dsl-h5-difference.md)