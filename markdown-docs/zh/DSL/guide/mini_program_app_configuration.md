## 全局配置

> 小程序根目录下的 app.json 文件用来对小程序进行全局配置。文件内容为一个 JSON 对象，有以下属性：

### 配置项

| 属性                | 类型      | 当前支持小程序类型 | 必填 | 默认值                    | 描述                                                 |
|:------------------|:--------|:----------|:---|:-----------------------|:---------------------------------------------------|
| entryPagePath     | String  | DSL/H5    | 否  | 如果不填，将默认为 pages 列表的第一项 | 小程序默认启动首页，**在H5小程序中为必填项**                          |
| embeddingType     | String  | DSL/H5    | 否  |                        | 小程序嵌入类型，DSL小程序套壳值是DSLEmbed，H5是H5Embed（最低版本24.12.0） |
| videoAutoPlay     | Boolean | H5        | 否  | false                  | 是否自动播放，默认值为`false`（当前仅支持H5，最低版本24.9.0）             |
| pages             | Array   | DSL/H5    | 是  |                        | 页面路径列表                                             |
| window            | Object  | DSL/H5    | 否  | 具体见下方描述                | 全局的默认窗口表现                                          |
| tabBar            | Object  | DSL       | 否  | 具体见下方描述                | 底部 tab 栏的表现                                        |
| subPackages       | Array   | DSL       | 否  | 具体见下方描述                | 分包结构配置                                             |
| usingComponents   | Object  | DSL       | 否  | 具体见下方描述                | 全局自定义组件配置，如有分包，引用的内容需要在主包内                         |
| restartStrategy   | String  | DSL/H5    | 否  | homePage               | 重新启动策略                                             |
| ignoreSafeArea    | Boolean | DSL/H5    | 否  | false                  | 是否忽略小程序的安全区域，默认值为`false`（当前仅支持IOS）                 |
| capsuleShow       | Boolean | DSL/H5    | 否  | true                   | 是否显示胶囊，默认值为`true`（最低版本24.12.0）                     |
| exitMode          | String  | DSL/H5    | 否  | exitMiniProgram        | 小程序退出配置策略，默认值是`exitMiniProgram`（最低版本24.12.0）       |
| hideStatusBar     | Boolean | DSL/H5    | 否  | false                  | 全屏时是否隐藏顶部状态栏，默认值为`false`（最低版本25.6.0）               |
| enablePerformance | Boolean | DSL/H5    | 否  | false                  | 是否显示性能面板，默认值为`false`（最低版本25.6.0）                   |

#### enablePerformance（最低版本： 25.6.0）
小程序级别开关配置，"enablePerformance"配置为true时显示性能面板。

```json
{
   "enablePerformance": true 
}
```

#### hideStatusBar（最低版本： 25.6.0）
小程序级别开关配置，小程序全屏且"hideStatusBar"配置为true时隐藏顶部状态栏。

> 注：
1. 导航栏设置为custom时, 状态栏隐藏配置才生效
2. IOS刘海屏或者home键展示需由小程序开发者适配
3. 状态栏隐藏仅针对小程序页面，由SDK提供的胶囊菜单项，如设置页面、小程序详情页面不隐藏状态栏

```json
{
   "hideStatusBar": true 
}
```

#### exitMode

小程序退出配置策略，有效值范围`backGroundRunningMiniProgram`和`exitMiniProgram`

#### entryPagePath

指定小程序的默认启动路径（首页），在DSL小程序中，如果不填，将默认为 pages 列表的第一项。在H5小程序中为必填项

> 注：不支持带页面路径参数。

```json
   "pages":[
        "index.html"
   ],
   "entryPagePath": "index.html",
   "videoAutoPlay": true,
   "page":{},
```

#### pages

用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的
.json, .js, .maml, .mass 四个文件进行处理。  
**小程序中新增/减少页面，都需要对 pages 数组进行修改。**  
如开发目录为：

```
├── app.js
├── app.json
├── app.mass
├── pages
│   │── index
│   │   ├── index.maml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.mass
│   └── logs
│       ├── logs.maml
│       └── logs.js
└── utils
```

则需要在 app.json 中写

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```

#### window

用于设置小程序的状态栏、导航条、标题背景色。

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


##### pageOrientation（最低版本： 25.3.0）

在手机上启用屏幕旋转支持，仅针对套壳小程序生效全局配置新增：
`"pageOrientation"：landscape`如果配置为`landscape`小程序横屏，否则仍按竖屏展示。如果有`pageOrientation`配置则强制横屏。

###### 示例代码
```json
{
  "pages": ["pages/index/index"],
  "window": {
    "pageOrientation": "landscape"
  }
}
```

#### tabBar

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及
tab 切换时显示的对应页面。

| 属性            | 类型       | 必填 | 默认值 | 描述                                     |
|:--------------|:---------|:---|:----|:---------------------------------------|
| color         | HexColor | 是  |     | tab 上的文字默认颜色，仅支持十六进制颜色                 |
| selectedColor | HexColor | 是  |     | tab 上的文字选中时的颜色，仅支持十六进制颜色               |
| list          | Array    | 是  |     | tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab |

其中 list 接受一个数组，只能配置最少 2 个、最多 5 个 tab。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：

| 属性               | 类型     | 必填 | 描述                                                   |
|:-----------------|:-------|:---|:-----------------------------------------------------|
| pagePath         | String | 是  | 页面路径，必须在 pages 中先定义                                  |
| text             | String | 是  | tab 上按钮文字                                            |
| iconPath         | String | 否  | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持网络图片。     |
| selectedIconPath | String | 否  | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持网络图片。 |

#### subpackages

启用 [分包加载](MACLE_SUB_PACKAGES) 时，声明项目分包结构。

#### usingComponents

在 app.json 中声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。

**注意：全局声明的自定义组件会视为被所有页面依赖，会在所有页面启动时进行初始化，且会占用主包大小。只被个别页面或分包引用的自定义组件应尽量在页面配置中声明。
**

#### 小程序冷启动的页面（最低版本：24.9.0）

小程序冷启动时，打开的页面有以下情况：

（A 类场景）若启动的场景中不带 path

（B 类场景）若启动的场景中带有 path，则启动进入对应 path 的页面

##### 重新启动策略

小程序冷启动时，如果启动时不带 path（A 类场景），默认情况下将会进入小程序的首页。 在页面对应的 json 文件中（也可以全局配置在
app.json 的 window 段中），指定 `restartStrategy` 配置项可以改变这个默认的行为，使得从某个页面退出后，下次 A
类场景的冷启动可以回到这个页面。

###### 示例代码

```json
{
   "restartStrategy": "homePage"
}
```

| restartStrategy可选值    | 含义                                                |
|-----------------------|---------------------------------------------------|
| homePage              | （默认值）如果从这个页面退出小程序，下次将从首页冷启动                       |
| homePageAndLatestPage | 如果从这个页面退出小程序，下次冷启动后立刻加载这个页面，页面的参数保持不变（不可用于 tab 页） |

注意：即使不配置为 `homePage` ，小程序如果退出过久（当前默认一天时间），下次冷启动时也将不再遵循 `restartStrategy`
的配置，而是直接从首页冷启动。

无论如何，页面中的状态并不会被保留，如输入框中的文本内容、 checkbox 的勾选状态等都不会还原。

#### ignoreSafeArea（最低版本：24.3.0）

原始的小程序场景下，小程序的webview组件不会占用底部的安全区域，此时页面底部横条背景为系统颜色。

启用该配置项后，小程序的webview将忽略底部的安全区域限制，底部横条将变为透明背景

##### Tips

1. 当前配置项仅在IOS机型生效，非必填项，默认值为`false`

2. 该配置项遵循 `粒度越小，优先级越高`原则，最低支持到`小程序全局配置`粒度，优先级为

   小程序全局配置 > 宿主APP配置

### 常见问题

1. **Q:**`position: fixed`的可交互组件，在iphone X及之后的型号的安全区域外渲染时，容易误触 `Home Indicator`,导致误操作，如何解决？

   **A:** 针对此类场景，可以尝试在mass中设置安全区域与边界的距离防止误触，具体可参考下列示例代码

```
padding-bottom: constant(safe-area-inset-bottom); /* IOS < 11.2 */
padding-bottom: env(safe-area-inset-bottom);      /* IOS >= 11.2 */
```
