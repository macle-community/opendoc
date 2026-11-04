## Global configuration

> The app.json file in the root directory of the mini program is used for the global configuration of the mini program. The file content is a JSON object with the following properties:

### Configuration items

| Property            | Type      | Currently supported mini program type | Required | Default Value            | Description                                                 |
|:------------------|:--------|:----------|:---|:-----------------------|:---------------------------------------------------|
| entryPagePath     | String  | DSL/H5    | No  | If not filled, it defaults to the first item in the pages list | The default startup home page of the mini program, **required in H5 mini programs**                          |
| embeddingType     | String  | DSL/H5    | No  |                        | The embedding type of the mini program. The shell value for DSL mini programs is DSLEmbed, and for H5 it is H5Embed (minimum version 24.12.0) |
| videoAutoPlay     | Boolean | H5        | No  | false                  | Whether to autoplay. Default value is `false` (currently only supports H5, minimum version 24.9.0)             |
| pages             | Array   | DSL/H5    | Yes  |                        | Page path list                                             |
| window            | Object  | DSL/H5    | No  | See description below                | Global default window performance                                          |
| tabBar            | Object  | DSL       | No  | See description below                | The performance of the bottom tab bar                                        |
| subPackages       | Array   | DSL       | No  | See description below                | Subpackage structure configuration                                             |
| usingComponents   | Object  | DSL       | No  | See description below                | Global custom component configuration. If there are subpackages, the referenced content must be within the main package                         |
| restartStrategy   | String  | DSL/H5    | No  | homePage               | Restart strategy                                             |
| ignoreSafeArea    | Boolean | DSL/H5    | No  | false                  | Whether to ignore the safe area of the mini program. Default value is `false` (currently only supports IOS)                 |
| capsuleShow       | Boolean | DSL/H5    | No  | true                   | Whether to show the capsule. Default value is `true` (minimum version 24.12.0)                     |
| exitMode          | String  | DSL/H5    | No  | exitMiniProgram        | Mini program exit configuration strategy. Default value is `exitMiniProgram` (minimum version 24.12.0)       |
| hideStatusBar     | Boolean | DSL/H5    | No  | false                  | Whether to hide the top status bar in full screen. Default value is `false` (minimum version 25.6.0)               |
| enablePerformance | Boolean | DSL/H5    | No  | false                  | Whether to show the performance panel. Default value is `false` (minimum version 25.6.0)                   |

#### enablePerformance (minimum version: 25.6.0)
Mini program level switch configuration. When "enablePerformance" is configured as true, the performance panel is displayed.

```json
{
   "enablePerformance": true 
}
```

#### hideStatusBar (minimum version: 25.6.0)
Mini program level switch configuration. When the mini program is in full screen and "hideStatusBar" is configured as true, the top status bar is hidden.

> Note:
1. The status bar hiding configuration only takes effect when the navigation bar is set to custom
2. The IOS notch screen or home button display needs to be adapted by the mini program developer
3. Status bar hiding only applies to mini program pages. The capsule menu items provided by the SDK, such as the settings page and mini program details page, do not hide the status bar

```json
{
   "hideStatusBar": true 
}
```

#### exitMode

Mini program exit configuration strategy. Valid values are `backGroundRunningMiniProgram` and `exitMiniProgram`

#### entryPagePath

Specifies the default startup path (home page) of the mini program. In DSL mini programs, if not filled, it defaults to the first item in the pages list. In H5 mini programs, it is required

> Note: Page path parameters are not supported.

```json
   "pages":[
        "index.html"
   ],
   "entryPagePath": "index.html",
   "videoAutoPlay": true,
   "page":{},
```

#### pages

Used to specify which pages the mini program consists of. Each item corresponds to the path (including file name) of a page. The file name does not need to include the file extension; the framework will automatically look for the corresponding
.json, .js, .maml, .mass files for processing.  
**Adding/removing pages in the mini program requires modifying the pages array.**  
For example, if the development directory is:

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

Then you need to write in app.json

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```

#### window

Used to set the status bar, navigation bar, and title background color of the mini program.

| Property                         | Type       | Default Value | Description                                                                                                                                                                                                           |
|:-----------------------------|:---------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| navigationBarBackgroundColor | HexColor | #000000   | Navigation bar background color, e.g. #000000                                                                                                                                                                                            |
| navigationBarTextStyle       | String   | white     | Navigation bar title color. Only supports black / white                                                                                                                                                                                    |
| navigationBarTitleText       | String   |           | Navigation bar title text content                                                                                                                                                                                                    |
| navigationStyle              | String   | default   | Navigation bar style. Supports the following values: `default`, `left`, `center`, `custom`; custom is a custom navigation bar that only keeps the capsule button in the upper right corner. When configured as left, the mini program displays the title bar with the title aligned to the left; when configured as center, the mini program displays the title bar with the title centered; the default option displays the title bar on ios with the title centered, and on android displays the title bar with the title aligned to the left (**Changed in 25.12.0, `left` and `center` added**) |
| showHomeButton               | Boolean  | true      | Whether to show the Home icon                                                                                                                                                                                                 |
| enablePullDownRefresh        | Boolean  | false     | Whether to enable global pull-to-refresh.                                                                                                                                                                                                 |
| onReachBottomDistance        | Number   | 50        | The distance from the bottom of the page when the page pull-up reach-bottom event is triggered, in px.                                                                                                                                                                                    |
| backgroundTextStyle          | String   | light     | Pull-down background font style. Valid values are `light` and `dark` (currently only supports IOS)                                                                                                                                                                        |
| capsuleTheme                 | String   | light     | Capsule style. Valid values are `light` and `dark`                                                                                                                                                                                      |
| disableScreenRecord          | Boolean  | false     | Whether to disable screen recording (only effective for H5 mini programs). Android can disable screenshots                                                                                                                                                                                   |
| allowsInlineMediaPlayback    | Boolean  | true      | Full-screen playback field on IOS. Defaults to non-full-screen. When configured as false, it autoplays in full screen. Only effective for H5 (**Changed in 25.9.0, default value changed from false to true**)                                                                                                                                         |
| pageOrientation              | String   | landscape | Supports landscape mode for shell mini games. Default value is `landscape`. By default it is portrait. Only when configured as landscape, it displays in landscape (minimum version 25.3.0)                                                                                                                                         |
| safeAreaBackgroundColor      | HexColor | #ffffff   | Bottom safe area background color, e.g. #ffffff (minimum version 26.3.0, only supports ios)                                                                                                                                                                       |
| allowGestueNavigate          | Boolean  | true      | Whether the mini program allows swiping left/right to enter the previous or next page via gestures. Defaults to allowed. Can be configured as false to disallow globally (minimum version 26.3.0, only supports ios)                                                                                                                                                                                           |

> Note 1: HexColor (hexadecimal color value), e.g. "#ff00ff"

**Note:**

 1. When navigationStyle is set to custom, the set title navigationBarTitleText and showHomeButton do not take effect.
 2. When navigationStyle is set to default, navigationBarTitleText takes effect, and showHomeButton also takes effect: when set to true, the house icon is displayed; when set to false, the back arrow (←) is displayed.
 3. Default behavior: The back button/home icon controlled by showHomeButton will not be displayed on the initial page. It will only be displayed in the navigation bar after a page jump (entering a secondary page) occurs.


##### pageOrientation (minimum version: 25.3.0)

Enables screen rotation support on phones. Only effective for shell mini programs. Global configuration addition:
`"pageOrientation": landscape`. If configured as `landscape`, the mini program is in landscape; otherwise it is still displayed in portrait. If there is a `pageOrientation` configuration, landscape mode is forced.

###### Sample code
```json
{
  "pages": ["pages/index/index"],
  "window": {
    "pageOrientation": "landscape"
  }
}
```

#### tabBar

If the mini program is a multi-tab application (the client window has a tab bar at the bottom or top to switch pages), you can use the tabBar configuration item to specify the appearance of the tab bar and
the corresponding pages displayed when tabs are switched.

| Property      | Type       | Required | Default Value | Description                                     |
|:--------------|:---------|:---|:----|:---------------------------------------|
| color         | HexColor | Yes  |     | The default color of text on tabs. Only supports hexadecimal colors                 |
| selectedColor | HexColor | Yes  |     | The color of text on tabs when selected. Only supports hexadecimal colors               |
| list          | Array    | Yes  |     | The list of tabs. See the list property description for details. Minimum 2, maximum 5 tabs |

Where list accepts an array. Only a minimum of 2 and a maximum of 5 tabs can be configured. Tabs are sorted by the order of the array. Each item is an object with property values as follows:

| Property           | Type     | Required | Description                                                   |
|:-----------------|:-------|:---|:-----------------------------------------------------|
| pagePath         | String | Yes  | Page path. Must be defined in pages first                                  |
| text             | String | Yes  | Button text on the tab                                            |
| iconPath         | String | No  | Image path. The icon size is limited to 40kb, recommended size is 81px \* 81px. Network images are not supported.     |
| selectedIconPath | String | No  | Image path when selected. The icon size is limited to 40kb, recommended size is 81px \* 81px. Network images are not supported. |

#### subpackages

Declares the project subpackage structure when [subpackage loading](MACLE_SUB_PACKAGES) is enabled.

#### usingComponents

Custom components declared in app.json are treated as global custom components. They can be used directly in pages or custom components within the mini program without re-declaration.

**Note: Globally declared custom components are treated as being depended on by all pages. They will be initialized when all pages start, and will occupy the main package size. Custom components only referenced by individual pages or subpackages should be declared in the page configuration as much as possible.
**

#### Mini program cold start page (minimum version: 24.9.0)

When the mini program cold starts, the page opened has the following situations:

(Type A scenario) If the startup scene does not carry a path

(Type B scenario) If the startup scene carries a path, it starts and enters the page corresponding to the path

##### Restart strategy

When the mini program cold starts, if the startup does not carry a path (Type A scenario), it will enter the home page of the mini program by default. In the json file corresponding to the page (or globally configured in
the window section of app.json), specifying the `restartStrategy` configuration item can change this default behavior, so that after exiting from a certain page, the next cold start of a Type A
scenario can return to that page.

###### Sample code

```json
{
   "restartStrategy": "homePage"
}
```

| Optional values of restartStrategy | Meaning                                                |
|-----------------------|---------------------------------------------------|
| homePage              | (Default value) If you exit the mini program from this page, the next cold start will start from the home page                       |
| homePageAndLatestPage | If you exit the mini program from this page, the next cold start will immediately load this page, and the page parameters remain unchanged (cannot be used for tab pages) |

Note: Even if not configured as `homePage`, if the mini program has been exited for too long (currently defaults to one day), the next cold start will no longer follow the `restartStrategy`
configuration, but will cold start directly from the home page.

In any case, the state in the page will not be preserved. For example, the text content in the input box and the checked state of checkboxes will not be restored.

#### ignoreSafeArea (minimum version: 24.3.0)

In the original mini program scenario, the webview component of the mini program will not occupy the bottom safe area. At this time, the background of the bottom bar of the page is the system color.

After enabling this configuration item, the webview of the mini program will ignore the bottom safe area restriction, and the bottom bar will become a transparent background

##### Tips

1. The current configuration item only takes effect on IOS devices. It is not a required item, and the default value is `false`

2. This configuration item follows the principle of `the smaller the granularity, the higher the priority`. The lowest supported granularity is `mini program global configuration`, with the priority of

   Mini program global configuration > Host APP configuration

### FAQ

1. **Q:** Interactive components with `position: fixed`, when rendered outside the safe area on iPhone X and later models, can easily trigger the `Home Indicator` by mistake, causing misoperation. How to solve this?

   **A:** For such scenarios, you can try setting the distance between the safe area and the boundary in mass to prevent misoperation. See the following sample code for details

```
padding-bottom: constant(safe-area-inset-bottom); /* IOS < 11.2 */
padding-bottom: env(safe-area-inset-bottom);      /* IOS >= 11.2 */
```
