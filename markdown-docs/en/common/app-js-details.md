# app.js Details

## Overview

`app.js` is the application logic entry file of a DSL mini-program, used to define the overall logic and lifecycle of the mini-program. This file is located in the project root directory and is one of the required files for a DSL mini-program.

## Purpose

1. **Application Initialization**: Defines the initialization logic when the mini-program starts up
2. **Lifecycle Management**: Listens to lifecycle events such as the mini-program's launch, show, and hide
3. **Global State Management**: Defines global data and methods for sharing across all pages
4. **Global Error Handling**: Catches and handles exception errors of the mini-program

## Basic Syntax

```javascript
// app.js
App({
  // Lifecycle functions
  onLaunch(options) {
    // Executed when the mini-program initializes
  },

  onShow(options) {
    // Executed when the mini-program is shown
  },

  onHide() {
    // Executed when the mini-program is hidden
  },

  // Global data
  globalData: {
    userInfo: null,
    apiBaseUrl: 'https://api.example.com'
  },

  // Global methods
  getUserInfo() {
    return this.globalData.userInfo;
  }
});
```

## Lifecycle Functions

### onLaunch(options)

Triggered when the mini-program initializes; triggered only once.

**The options parameter contains**:

| Parameter | Type | Description |
|------|------|------|
| path | string | The page path that launches the mini-program |
| query | object | The page parameters that launch the mini-program |
| scene | number | The scene value that launches the mini-program |
| shareTicket | string | Share ticket |
| referrerInfo | object | Source information |

**Example**:
```javascript
onLaunch(options) {
  console.log('Mini-program launched', options);
  // Check login status
  this.checkLogin();
  // Get system info
  this.getSystemInfo();
},

checkLogin() {
  // Check whether the user is already logged in
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

Triggered when the mini-program is shown; triggered every time it is shown.

**The options parameter contains**:

| Parameter | Type | Description |
|------|------|------|
| path | string | The current page path of the mini-program |
| query | object | The current page parameters of the mini-program |
| scene | number | The scene value that launches the mini-program |
| shareTicket | string | Share ticket |
| referrerInfo | object | Source information |

**Example**:
```javascript
onShow(options) {
  console.log('Mini-program shown', options);
  // Refresh user status
  this.refreshUserStatus();
  // Update the mini-program
  this.checkUpdate();
},

refreshUserStatus() {
  // Refresh user status from the server
},

checkUpdate() {
  const updateManager = wx.getUpdateManager();
  updateManager.onCheckForUpdate((res) => {
    console.log('Is there a new version:', res.hasUpdate);
  });
  updateManager.onUpdateReady(() => {
    wx.showModal({
      title: 'Update Prompt',
      content: 'A new version is ready. Restart the app?',
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

Triggered when the mini-program is hidden.

**Example**:
```javascript
onHide() {
  console.log('Mini-program hidden');
  // Save current state
  this.saveCurrentState();
  // Stop location updates
  this.stopLocationUpdate();
},

saveCurrentState() {
  // Save user operation state
  wx.setStorageSync('lastVisitTime', Date.now());
},

stopLocationUpdate() {
  // Stop location updates
}
```

## Global Data globalData

You can define globally shared data through the `globalData` object.

**Example**:
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

**Accessing global data in a page**:
```javascript
// Get the app instance
const app = getApp();

Page({
  onLoad() {
    // Access global data
    const userInfo = app.globalData.userInfo;
    const apiBaseUrl = app.globalData.apiBaseUrl;

    // Modify global data (must go through the app instance)
    app.globalData.hasLogin = true;
  }
});
```

## Global Methods

You can define global methods on the App instance for all pages to call.

**Example**:
```javascript
App({
  globalData: {
    userInfo: null
  },

  // Login method
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

  // Check login status
  checkLogin() {
    const token = wx.getStorageSync('token');
    return !!token;
  },

  // Log out
  logout() {
    this.globalData.userInfo = null;
    this.globalData.token = '';
    wx.removeStorageSync('token');
  },

  // Wrapper method for making requests
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
              title: res.data.message || 'Request failed',
              icon: 'none'
            });
            reject(res.data);
          }
        },
        fail: (err) => {
          wx.showToast({
            title: 'Network request failed',
            icon: 'none'
          });
          reject(err);
        }
      });
    });
  }
});
```

**Calling global methods in a page**:
```javascript
const app = getApp();

Page({
  async onLoad() {
    // Call the global login method
    try {
      await app.login(code);
      console.log('Login successful');
    } catch (error) {
      console.log('Login failed', error);
    }

    // Use the global request method
    const result = await app.request({
      url: '/user/info',
      method: 'GET'
    });
  }
});
```

## Notes

1. **File location**: Must be placed in the project root directory, named `app.js`
2. **App()**: The `App()` function must be called to register the mini-program
3. **Lifecycle**: It is recommended to perform initialization operations in lifecycle functions to avoid affecting startup speed
4. **globalData**: Use global data with care to avoid memory leaks
5. **Page reference**: Use `getApp()` to get the app instance

## Related Documentation

- [DSL Mini-Program Development Guide](../DSL/DSL-Minicprogram-Development-Guide.md)
- [project.config.json Details](./project-config-json-details.md)
- [app.json Details](./app-json-details.md)
- [DSL and H5 Mini-Program Differences Comparison](./dsl-h5-difference.md)
