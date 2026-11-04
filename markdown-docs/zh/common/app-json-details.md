# app.json详情

## 概述

`app.json`是DSL小程序的全局配置文件，用于配置小程序的页面列表、窗口样式、底部标签栏、网络超时等全局配置。该文件位于项目根目录，是DSL小程序必需的配置文件中最重要的一个。

## 作用

1. **页面路由**: 定义小程序的所有页面路径
2. **窗口配置**: 配置导航栏、背景色、下拉刷新等窗口样式
3. **导航配置**: 配置底部标签栏（TabBar）
4. **网络配置**: 配置网络请求超时时间
5. **调试配置**: 配置调试模式开关

## 配置参数

### pages数组（必需）

数组类型，用于指定小程序的所有页面路径。每一项对应一个页面的路径（相对于项目根目录），不需要文件后缀。

**示例**:
```json
{
  "pages": [
    "pages/index/index",
    "pages/category/category",
    "pages/cart/cart",
    "pages/user/user"
  ]
}
```

### window对象

窗口配置对象，用于配置小程序顶部导航栏和下拉刷新等样式。

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| navigationBarBackgroundColor | string | 否 | #000000 | 导航栏背景颜色 |
| navigationBarTitleText | string | 否 | - | 导航栏标题文字 |
| navigationBarTextStyle | string | 否 | white | 导航栏标题颜色（black/white） |
| navigationStyle | string | 否 | default | 导航栏样式（default/custom/left/center） |
| backgroundColor | string | 否 | #ffffff | 窗口背景颜色 |
| backgroundTextStyle | string | 否 | dark | 下拉 loading 的样式（dark/light） |
| backgroundColorTop | string | 否 | #ffffff | 顶部窗口背景颜色 |
| backgroundColorBottom | string | 否 | #ffffff | 底部窗口背景颜色 |
| enablePullDownRefresh | boolean | 否 | false | 是否开启下拉刷新 |
| onReachBottomDistance | number | 否 | 50 | 页面上拉触底事件触发时距底部距离（单位px） |
| disableScreenRecord | boolean | 否 | false | 是否禁止屏幕录制 |
| allowsInlineMediaPlayback | boolean | 否 | false | 是否允许内联播放媒体 |
| pageOrientation | string | 否 | portrait | 屏幕方向（auto/portrait/landscape） |
| restartStrategy | string | 否 | homePage | 重启策略（homePage/homePageAndLatestPage） |
| capsuleTheme | string | 否 | light | 胶囊按钮主题（dark/light） |
| capsuleShow | boolean | 否 | true | 是否显示胶囊按钮 |
| showHomeButton | boolean | 否 | true | 是否显示Home按钮 |
| hideStatusBar | boolean | 否 | false | 是否隐藏状态栏 |
| transparentTitle | string | 否 | none | 导航栏透明设置（none/always/auto） |
| allowGestueNavigate | boolean | 否 | true | 是否允许手势导航 |
| exitMode | string | 否 | exitMiniProgram | 退出模式 |

**示例**:
```json
{
  "window": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTitleText": "My App",
    "navigationBarTextStyle": "black",
    "backgroundColor": "#f5f5f5",
    "enablePullDownRefresh": true,
    "onReachBottomDistance": 100
  }
}
```

### tabBar对象

底部标签栏配置对象，用于配置小程序底部的导航栏。

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| color | string | 是 | - | 文字颜色（Hex颜色） |
| selectedColor | string | 是 | - | 选中时的文字颜色 |
| backgroundColor | string | 否 | #ffffff | 背景颜色 |
| borderStyle | string | 否 | black | 边框颜色（black/white） |
| position | string | 否 | bottom | 标签栏位置（bottom/top） |
| list | array | 是 | - | 标签栏列表 |

**tabBar.list数组项配置**:

| 参数名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| pagePath | string | 是 | 页面路径（必须在pages中定义） |
| text | string | 是 | 标签文字 |
| iconPath | string | 否 | 图标路径（建议尺寸81px x 81px） |
| selectedIconPath | string | 否 | 选中时的图标路径 |

**示例**:
```json
{
  "tabBar": {
    "color": "#b7b7b7",
    "selectedColor": "#AB956D",
    "backgroundColor": "#f5f5f5",
    "borderStyle": "white",
    "position": "bottom",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "image/home.png",
        "selectedIconPath": "image/home-active.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "分类",
        "iconPath": "image/category.png",
        "selectedIconPath": "image/category-active.png"
      }
    ]
  }
}
```

### networkTimeout对象

网络请求超时配置。

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| request | number | 否 | 60000 | wx.request超时时间（毫秒） |
| connectSocket | number | 否 | 60000 | wx.connectSocket超时时间 |
| uploadFile | number | 否 | 60000 | wx.uploadFile超时时间 |
| downloadFile | number | 否 | 60000 | wx.downloadFile超时时间 |

**示例**:
```json
{
  "networkTimeout": {
    "request": 10000,
    "connectSocket": 10000,
    "uploadFile": 10000,
    "downloadFile": 10000
  }
}
```

### debug boolean

是否开启调试模式。开启后，会在控制台输出页面生命周期和API调用信息。

**示例**:
```json
{
  "debug": true
}
```

### style string

指定小程序使用的样式版本。

**示例**:
```json
{
  "style": "v2"
}
```

### sitemapLocation string

指定sitemap.json文件的位置。

**示例**:
```json
{
  "sitemapLocation": "sitemap.json"
}
```

### skeleton对象

骨架屏配置（可选）。

| 参数名 | 类型 | 说明 |
|--------|------|------|
| config | object | 骨架屏配置 |
| page | object | 页面骨架屏映射 |

**示例**:
```json
{
  "skeleton": {
    "config": {
      "timeout": 2000
    },
    "page": {
      "pages/index/index": "pages/index/index.sk"
    }
  }
}
```

### videoAutoPlay boolean

是否自动播放视频（默认true）。

## 完整配置示例

```json
{
  "pages": [
    "pages/index/index",
    "pages/category/category",
    "pages/cart/cart",
    "pages/user/user",
    "pages/detail/detail"
  ],
  "window": {
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "购物商城",
    "navigationBarBackgroundColor": "#AB956D",
    "backgroundColor": "#eeeeee",
    "enablePullDownRefresh": true,
    "onReachBottomDistance": 50
  },
  "tabBar": {
    "color": "#b7b7b7",
    "selectedColor": "#AB956D",
    "borderStyle": "white",
    "backgroundColor": "#f5f5f5",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "image/12.png",
        "selectedIconPath": "image/11.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "分类",
        "iconPath": "image/22.png",
        "selectedIconPath": "image/21.png"
      },
      {
        "pagePath": "pages/cart/cart",
        "text": "购物车",
        "iconPath": "image/32.png",
        "selectedIconPath": "image/31.png"
      },
      {
        "pagePath": "pages/user/user",
        "text": "我的",
        "iconPath": "image/42.png",
        "selectedIconPath": "image/41.png"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "connectSocket": 10000,
    "uploadFile": 10000,
    "downloadFile": 10000
  },
  "debug": false,
  "sitemapLocation": "sitemap.json",
  "style": "v2"
}
```

## 注意事项

1. **pages数组**: 第一个页面为小程序启动时显示的首页
2. **tabBar配置**: 至少需要2个最多5个tab
3. **颜色格式**: 颜色值必须使用Hex格式（如#ffffff）
4. **图标要求**: tabBar图标建议使用81px x 81px的PNG图片
5. **路径准确性**: 所有页面路径必须真实存在

## 相关文档

- [DSL小程序开发指导](../DSL/DSL-Minicprogram-Development-Guide.md)
- [project.config.json详情](./project-config-json-details.md)
- [sitemap.json详情](./sitemap-json-details.md)
- [DSL和H5小程序差异对比](./dsl-h5-difference.md)