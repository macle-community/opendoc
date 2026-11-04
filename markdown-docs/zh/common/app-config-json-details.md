# app-config.json详情

## 概述

`app-config.json`是H5小程序的核心配置文件，用于标识项目为H5小程序类型，并包含应用的基本配置信息。该文件位于项目根目录，是Macle开发工具识别H5小程序项目类型的关键文件。

## 作用

1. **项目标识**: 标识该项目为H5小程序（type字段为legacy）
2. **应用信息**: 定义应用名称、版本、描述等基本信息
3. **工具识别**: 是Macle开发工具识别H5小程序的核心依据
4. **应用配置**: 包含应用运行所需的基本配置

## 配置参数

| 属性                | 类型      | 当前支持小程序类型 | 必填 | 默认值                    | 描述                                                 |
|:------------------|:--------|:----------|:---|:-----------------------|:---------------------------------------------------|
| type              | String  | H5    | 是  | 如果不填会导致模拟器编译小程序失败 | H5小程序配置为"legacy"
| entryPagePath     | String  | H5    | 是  | 如果不填，将默认为 pages 列表的第一项 | 小程序默认启动首页，**在H5小程序中为必填项**                          |
| embeddingType     | String  | H5    | 否  |                        | 小程序嵌入类型，DSL小程序套壳值是DSLEmbed，H5是H5Embed（最低版本24.12.0） |
| videoAutoPlay     | Boolean | H5        | 否  | false                  | 是否自动播放，默认值为`false`（当前仅支持H5，最低版本24.9.0）             |
| pages             | Array   | H5    | 是  |                        | 页面路径列表                                             |
| page            | Object   | H5    | 是  |                        | 页面                                             |
| window            | Object  | H5    | 否  | 具体见下方描述                | 全局的默认窗口表现                                          |
| restartStrategy   | String  | H5    | 否  | homePage               | 重新启动策略                                             |
| ignoreSafeArea    | Boolean | H5    | 否  | false                  | 是否忽略小程序的安全区域，默认值为`false`（当前仅支持IOS）                 |
| capsuleShow       | Boolean | H5    | 否  | true                   | 是否显示胶囊，默认值为`true`（最低版本24.12.0）                     |
| exitMode          | String  | H5    | 否  | exitMiniProgram        | 小程序退出配置策略，默认值是`exitMiniProgram`（最低版本24.12.0）       |
| hideStatusBar     | Boolean | H5    | 否  | false                  | 全屏时是否隐藏顶部状态栏，默认值为`false`（最低版本25.6.0）               |
| enablePerformance | Boolean | H5    | 否  | false                  | 是否显示性能面板，默认值为`false`（最低版本25.6.0）                   |


### type string（必需）

应用类型标识。对于H5小程序，该值必须为`legacy`。

| 值 | 说明 |
|----|------|
| legacy | H5小程序（传统Web小程序） |

**示例**:
```json
{
  "type": "legacy"
}
```

### entryPagePath string（必需）

小程序默认启动首页
**示例**:
```json
{
  "entryPagePath": "index.html",
}
```

### window（必需）

用于设置小程序的状态栏、导航条、标题背景色。在"global"字段内。

| 属性                           | 类型       | 默认值       | 描述                                                                                                                                                                                                           |
|:-----------------------------|:---------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| navigationBarBackgroundColor | HexColor | #000000   | 导航栏背景颜色，如 #000000                                                                                                                                                                                            |
| navigationBarTextStyle       | String   | white     | 导航栏标题颜色，仅支持 black / white                                                                                                                                                                                    |
| navigationBarTitleText       | String   |           | 导航栏标题文字内容                                                                                                                                                                                                    |
| navigationStyle              | String   | default   | 导航栏样式，支持以下值：`default`、`left`、`center`、`custom`；custom 自定义导航栏，只保留右上角胶囊按钮。配置left时，小程序显示标题栏，且标题居左显示；配置center时，小程序显示标题栏，且标题居中显示，default选项，ios上显示标题栏，标题居中显示，android上显示标题栏，标题居左显示（**25.12.0变更，新增`left`、`center`**） |
| showHomeButton               | Boolean  | true      | 是否展示 Home 图标                                                                                                                                                                                                 |
| enablePullDownRefresh        | Boolean  | false     | 是否开启全局的下拉刷新。                                                                                                                                                                                                 |
| onReachBottomDistance        | Number   | 50        | 页面上拉触底事件触发时距页面底部距离，单位为px。                                                                                                                                                                                    |
| backgroundTextStyle          | String   | light     | 下拉背景字体样式,合法值有`light`、`dark`（当前仅支持IOS）                                                                                                                                                                        |
| capsuleTheme                 | String   | light     | 胶囊样式,合法值有`light`、`dark`                                                                                                                                                                                      |
| disableScreenRecord          | Boolean  | false     | 是否禁止录屏（仅对H5小程序生效），安卓可以禁止截屏                                                                                                                                                                                   |
| allowsInlineMediaPlayback    | Boolean  | true      | IOS上全屏播放字段，默认不全屏，配置为false自动全屏播放，仅H5生效（**25.9.0变更，默认值由false变更为true**）                                                                                                                                         |
| pageOrientation              | String   | landscape | 支持套壳横屏小游戏，默认值是`landscape`，默认都是竖屏，只有配置为landscape时，才会是横屏显示（最低版本25.3.0）                                                                                                                                         |
| safeAreaBackgroundColor      | HexColor | #ffffff   | 底部安全区域背景颜色，如#ffffff（最低版本26.3.0，仅支持ios）                                                                                                                                                                       |
| allowGestueNavigate          | Boolean  | true      | 小程序是否允许通过手势左右滑动进入上一个页面或者下一个页面, 默认允许，可以配置为false，全局不允许（最低版本26.3.0，仅支持ios）                                                                                                                                                                                           |

> 注 1：HexColor（十六进制颜色值），如"#ff00ff"

**注意：**

 1.navigationStyle设置成custom时，设置的标题navigationBarTitleText和showHomeButton都不生效。
 2.navigationStyle设置成default时，navigationBarTitleText生效，showHomeButton也生效：设置成true的时候显示小房子图标，设置成false的时候显示返回箭头（←）
 3.默认行为：showHomeButton控制的返回按钮/首页图标，不会在初始页面显示，只有发生页面跳转（进入二级页面）后才会在导航栏显示。

**示例**:
```json
{
  "global": {
    "window": {
      "navigationBarBackgroundColor": "#4e9023",
      "navigationBarTitleText": "JSSDK的官方Demo",
      "backgroundTextStyle": "light",
      "navigationBarTextStyle": "white",
      "capsuleTheme": "light"
    }
  }
}
```

### name string

应用名称。

**示例**:
```json
{
  "name": "酒店预定小程序"
}
```

### version string

应用版本号，遵循语义化版本规范。

**示例**:
```json
{
  "version": "1.0.0"
}
```

### description string

应用描述信息。

**示例**:
```json
{
  "description": "用于在线预订酒店的小程序模板"
}
```

### 其他自定义参数

除了上述必需参数外，H5小程序还可以在此配置文件中添加其他自定义配置参数，如：

| 参数名 | 类型 | 说明 |
|--------|------|------|
| author | string | 应用作者 |
| homepage | string | 主页URL |
| license | string | 许可证 |
| theme | object | 主题配置 |
| api | object | API配置 |
| env | object | 环境配置 |

## 注意事项

1. **type字段**: 必须设置为`legacy`才能被识别为H5小程序
2. **文件位置**: 必须放在项目根目录
3. **JSON格式**: 必须是有效的JSON格式文件
4. **编码格式**: 建议使用UTF-8编码

## 与DSL小程序配置对比

| 对比项 | H5小程序 | DSL小程序 |
|--------|----------|-----------|
| 配置文件 | project.config.json + app-config.json | project.config.json + app.json |
| 类型标识 | type: legacy | app-config.json不存在 |
| 配置复杂度 | 较低 | 较高 |
| 配置格式 | 自定义JSON | 标准JSON Schema |

## 配置示例

### 基础配置

```json
{
  "type": "legacy",
  "entryPagePath": "index.html",
  "pages": ["index.html"],
  "page": {},
  "global": {
    "window": {
      "navigationBarBackgroundColor": "#4e9023",
      "navigationBarTitleText": "JSSDK的官方Demo",
      "backgroundTextStyle": "light",
      "navigationBarTextStyle": "white",
      "capsuleTheme": "light"
    }
  }
}
```

## 相关文档

- [H5小程序文件结构](./h5-miniprogram-structure.md)
- [DSL小程序开发指导](../DSL/DSL-Minicprogram-Development-Guide.md)
- [DSL和H5小程序差异对比](./dsl-h5-difference.md)