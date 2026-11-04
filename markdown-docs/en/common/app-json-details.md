# app.json Details

## Overview

`app.json` is the global configuration file of a DSL mini-program, used to configure the mini-program's page list, window styles, bottom tab bar, network timeout, and other global configurations. This file is located in the project root directory and is the most important of the required configuration files for a DSL mini-program.

## Purpose

1. **Page Routing**: Defines all page paths of the mini-program
2. **Window Configuration**: Configures navigation bar, background color, pull-down refresh, and other window styles
3. **Navigation Configuration**: Configures the bottom tab bar (TabBar)
4. **Network Configuration**: Configures network request timeout
5. **Debug Configuration**: Configures the debug mode switch

## Configuration Parameters

### pages Array (required)

An array type used to specify all page paths of the mini-program. Each item corresponds to a page path (relative to the project root directory), without the file extension.

**Example**:
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

### window Object

Window configuration object, used to configure the mini-program's top navigation bar and pull-down refresh styles.

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| navigationBarBackgroundColor | string | No | #000000 | Navigation bar background color |
| navigationBarTitleText | string | No | - | Navigation bar title text |
| navigationBarTextStyle | string | No | white | Navigation bar title color (black/white) |
| navigationStyle | string | No | default | Navigation bar style (default/custom/left/center) |
| backgroundColor | string | No | #ffffff | Window background color |
| backgroundTextStyle | string | No | dark | Pull-down loading style (dark/light) |
| backgroundColorTop | string | No | #ffffff | Top window background color |
| backgroundColorBottom | string | No | #ffffff | Bottom window background color |
| enablePullDownRefresh | boolean | No | false | Whether to enable pull-down refresh |
| onReachBottomDistance | number | No | 50 | Distance from the bottom when the pull-up reach-bottom event is triggered (in px) |
| disableScreenRecord | boolean | No | false | Whether to disable screen recording |
| allowsInlineMediaPlayback | boolean | No | false | Whether to allow inline media playback |
| pageOrientation | string | No | portrait | Screen orientation (auto/portrait/landscape) |
| restartStrategy | string | No | homePage | Restart strategy (homePage/homePageAndLatestPage) |
| capsuleTheme | string | No | light | Capsule button theme (dark/light) |
| capsuleShow | boolean | No | true | Whether to show the capsule button |
| showHomeButton | boolean | No | true | Whether to show the Home button |
| hideStatusBar | boolean | No | false | Whether to hide the status bar |
| transparentTitle | string | No | none | Navigation bar transparency setting (none/always/auto) |
| allowGestueNavigate | boolean | No | true | Whether to allow gesture navigation |
| exitMode | string | No | exitMiniProgram | Exit mode |

**Example**:
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

### tabBar Object

Bottom tab bar configuration object, used to configure the mini-program's bottom navigation bar.

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| color | string | Yes | - | Text color (Hex color) |
| selectedColor | string | Yes | - | Text color when selected |
| backgroundColor | string | No | #ffffff | Background color |
| borderStyle | string | No | black | Border color (black/white) |
| position | string | No | bottom | Tab bar position (bottom/top) |
| list | array | Yes | - | Tab bar list |

**tabBar.list array item configuration**:

| Parameter Name | Type | Required | Description |
|--------|------|------|------|
| pagePath | string | Yes | Page path (must be defined in pages) |
| text | string | Yes | Tab text |
| iconPath | string | No | Icon path (recommended size 81px x 81px) |
| selectedIconPath | string | No | Icon path when selected |

**Example**:
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
        "text": "Home",
        "iconPath": "image/home.png",
        "selectedIconPath": "image/home-active.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "Category",
        "iconPath": "image/category.png",
        "selectedIconPath": "image/category-active.png"
      }
    ]
  }
}
```

### networkTimeout Object

Network request timeout configuration.

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| request | number | No | 60000 | wx.request timeout (ms) |
| connectSocket | number | No | 60000 | wx.connectSocket timeout |
| uploadFile | number | No | 60000 | wx.uploadFile timeout |
| downloadFile | number | No | 60000 | wx.downloadFile timeout |

**Example**:
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

Whether to enable debug mode. When enabled, page lifecycle and API call information will be output to the console.

**Example**:
```json
{
  "debug": true
}
```

### style string

Specifies the style version used by the mini-program.

**Example**:
```json
{
  "style": "v2"
}
```

### sitemapLocation string

Specifies the location of the sitemap.json file.

**Example**:
```json
{
  "sitemapLocation": "sitemap.json"
}
```

### skeleton Object

Skeleton screen configuration (optional).

| Parameter Name | Type | Description |
|--------|------|------|
| config | object | Skeleton screen configuration |
| page | object | Page skeleton screen mapping |

**Example**:
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

Whether to auto-play videos (default true).

## Complete Configuration Example

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
    "navigationBarTitleText": "Shopping Mall",
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
        "text": "Home",
        "iconPath": "image/12.png",
        "selectedIconPath": "image/11.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "Category",
        "iconPath": "image/22.png",
        "selectedIconPath": "image/21.png"
      },
      {
        "pagePath": "pages/cart/cart",
        "text": "Cart",
        "iconPath": "image/32.png",
        "selectedIconPath": "image/31.png"
      },
      {
        "pagePath": "pages/user/user",
        "text": "Mine",
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

## Notes

1. **pages array**: The first page is the home page displayed when the mini-program launches
2. **tabBar configuration**: Requires at least 2 and at most 5 tabs
3. **Color format**: Color values must use Hex format (e.g. #ffffff)
4. **Icon requirements**: tabBar icons are recommended to be 81px x 81px PNG images
5. **Path accuracy**: All page paths must actually exist

## Related Documentation

- [DSL Mini-Program Development Guide](../DSL/DSL-Minicprogram-Development-Guide.md)
- [project.config.json Details](./project-config-json-details.md)
- [sitemap.json Details](./sitemap-json-details.md)
- [DSL and H5 Mini-Program Differences Comparison](./dsl-h5-difference.md)
