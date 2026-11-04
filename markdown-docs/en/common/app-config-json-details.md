# app-config.json Details

## Overview

`app-config.json` is the core configuration file of an H5 mini-program, used to identify the project as an H5 mini-program type and to contain the application's basic configuration information. This file is located in the project root directory and is the key file for the Macle development tool to recognize an H5 mini-program project type.

## Purpose

1. **Project Identification**: Identifies the project as an H5 mini-program (the type field is legacy)
2. **Application Information**: Defines basic information such as application name, version, and description
3. **Tool Recognition**: The core basis for the Macle development tool to recognize H5 mini-programs
4. **Application Configuration**: Contains the basic configuration required for the application to run

## Configuration Parameters

| Property                | Type      | Currently Supported Mini-Program Type | Required | Default Value                    | Description                                                 |
|:------------------|:--------|:----------|:---|:-----------------------|:---------------------------------------------------|
| type              | String  | H5    | Yes  | If left empty, the simulator will fail to compile the mini-program | H5 mini-programs are configured as "legacy"
| entryPagePath     | String  | H5    | Yes  | If left empty, it defaults to the first item in the pages list | The default launch home page of the mini-program, **required in H5 mini-programs**                          |
| embeddingType     | String  | H5    | No  |                        | Mini-program embedding type; the DSL mini-program shell value is DSLEmbed, H5 is H5Embed (minimum version 24.12.0) |
| videoAutoPlay     | Boolean | H5        | No  | false                  | Whether to auto-play, default value is `false` (currently only supports H5, minimum version 24.9.0)             |
| pages             | Array   | H5    | Yes  |                        | List of page paths                                             |
| page            | Object   | H5    | Yes  |                        | Page                                             |
| window            | Object  | H5    | No  | See description below                | Global default window behavior                                          |
| restartStrategy   | String  | H5    | No  | homePage               | Restart strategy                                             |
| ignoreSafeArea    | Boolean | H5    | No  | false                  | Whether to ignore the safe area of the mini-program, default value is `false` (currently only supported on IOS)                 |
| capsuleShow       | Boolean | H5    | No  | true                   | Whether to show the capsule, default value is `true` (minimum version 24.12.0)                     |
| exitMode          | String  | H5    | No  | exitMiniProgram        | Mini-program exit configuration strategy, default value is `exitMiniProgram` (minimum version 24.12.0)       |
| hideStatusBar     | Boolean | H5    | No  | false                  | Whether to hide the top status bar in full-screen mode, default value is `false` (minimum version 25.6.0)               |
| enablePerformance | Boolean | H5    | No  | false                  | Whether to show the performance panel, default value is `false` (minimum version 25.6.0)                   |


### type string (required)

Application type identifier. For H5 mini-programs, this value must be `legacy`.

| Value | Description |
|----|------|
| legacy | H5 mini-program (traditional Web mini-program) |

**Example**:
```json
{
  "type": "legacy"
}
```

### entryPagePath string (required)

The default launch home page of the mini-program
**Example**:
```json
{
  "entryPagePath": "index.html",
}
```

### window (required)

Used to set the mini-program's status bar, navigation bar, and title background color. Inside the "global" field.

| Property                           | Type       | Default Value       | Description                                                                                                                                                                                                           |
|:-----------------------------|:---------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| navigationBarBackgroundColor | HexColor | #000000   | Navigation bar background color, e.g. #000000                                                                                                                                                                                            |
| navigationBarTextStyle       | String   | white     | Navigation bar title color, only supports black / white                                                                                                                                                                                    |
| navigationBarTitleText       | String   |           | Navigation bar title text content                                                                                                                                                                                                    |
| navigationStyle              | String   | default   | Navigation bar style, supports the following values: `default`, `left`, `center`, `custom`; custom is a custom navigation bar, keeping only the capsule button in the top right corner. When configured as left, the mini-program displays the title bar with the title aligned left; when configured as center, the mini-program displays the title bar with the title centered; with the default option, iOS displays the title bar with the title centered, and Android displays the title bar with the title aligned left (**25.12.0 change, added `left`, `center`**) |
| showHomeButton               | Boolean  | true      | Whether to show the Home icon                                                                                                                                                                                                 |
| enablePullDownRefresh        | Boolean  | false     | Whether to enable global pull-down refresh.                                                                                                                                                                                                 |
| onReachBottomDistance        | Number   | 50        | Distance from the bottom of the page when the pull-up reach-bottom event is triggered, in px.                                                                                                                                                                                    |
| backgroundTextStyle          | String   | light     | Pull-down background font style, valid values are `light`, `dark` (currently only supported on IOS)                                                                                                                                                                        |
| capsuleTheme                 | String   | light     | Capsule style, valid values are `light`, `dark`                                                                                                                                                                                      |
| disableScreenRecord          | Boolean  | false     | Whether to disable screen recording (only effective for H5 mini-programs); on Android it can also disable screenshots                                                                                                                                                                                   |
| allowsInlineMediaPlayback    | Boolean  | true      | Full-screen playback field on iOS; defaults to non-full-screen, set to false to automatically play in full-screen; only effective for H5 (**25.9.0 change, default value changed from false to true**)                                                                                                                                         |
| pageOrientation              | String   | landscape | Supports shell-wrapped landscape mini-games, default value is `landscape`; by default it is portrait, and only when configured as landscape will it display in landscape (minimum version 25.3.0)                                                                                                                                         |
| safeAreaBackgroundColor      | HexColor | #ffffff   | Bottom safe area background color, e.g. #ffffff (minimum version 26.3.0, only supported on iOS)                                                                                                                                                                       |
| allowGestueNavigate          | Boolean  | true      | Whether the mini-program allows navigating to the previous or next page via left/right swipe gestures; allowed by default, can be set to false to disallow globally (minimum version 26.3.0, only supported on iOS)                                                                                                                                                                                           |

> Note 1: HexColor (hexadecimal color value), e.g. "#ff00ff"

**Note:**

 1.When navigationStyle is set to custom, the set title navigationBarTitleText and showHomeButton do not take effect.
 2.When navigationStyle is set to default, navigationBarTitleText takes effect, and showHomeButton also takes effect: when set to true, the house icon is displayed; when set to false, a back arrow (←) is displayed.
 3.Default behavior: The back button / home icon controlled by showHomeButton is not displayed on the initial page; it only appears in the navigation bar after a page navigation occurs (entering a secondary page).

**Example**:
```json
{
  "global": {
    "window": {
      "navigationBarBackgroundColor": "#4e9023",
      "navigationBarTitleText": "JSSDK Official Demo",
      "backgroundTextStyle": "light",
      "navigationBarTextStyle": "white",
      "capsuleTheme": "light"
    }
  }
}
```

### name string

Application name.

**Example**:
```json
{
  "name": "Hotel Booking Mini-Program"
}
```

### version string

Application version number, following semantic versioning.

**Example**:
```json
{
  "version": "1.0.0"
}
```

### description string

Application description.

**Example**:
```json
{
  "description": "A mini-program template for online hotel booking"
}
```

### Other Custom Parameters

In addition to the required parameters above, H5 mini-programs can also add other custom configuration parameters in this configuration file, such as:

| Parameter Name | Type | Description |
|--------|------|------|
| author | string | Application author |
| homepage | string | Homepage URL |
| license | string | License |
| theme | object | Theme configuration |
| api | object | API configuration |
| env | object | Environment configuration |

## Notes

1. **type field**: Must be set to `legacy` to be recognized as an H5 mini-program
2. **File location**: Must be placed in the project root directory
3. **JSON format**: Must be a valid JSON format file
4. **Encoding format**: UTF-8 encoding is recommended

## Comparison with DSL Mini-Program Configuration

| Comparison Item | H5 Mini-Program | DSL Mini-Program |
|--------|----------|-----------|
| Configuration file | project.config.json + app-config.json | project.config.json + app.json |
| Type identifier | type: legacy | app-config.json does not exist |
| Configuration complexity | Lower | Higher |
| Configuration format | Custom JSON | Standard JSON Schema |

## Configuration Example

### Basic Configuration

```json
{
  "type": "legacy",
  "entryPagePath": "index.html",
  "pages": ["index.html"],
  "page": {},
  "global": {
    "window": {
      "navigationBarBackgroundColor": "#4e9023",
      "navigationBarTitleText": "JSSDK Official Demo",
      "backgroundTextStyle": "light",
      "navigationBarTextStyle": "white",
      "capsuleTheme": "light"
    }
  }
}
```

## Related Documentation

- [H5 Mini-Program File Structure](./h5-miniprogram-structure.md)
- [DSL Mini-Program Development Guide](../DSL/DSL-Minicprogram-Development-Guide.md)
- [DSL and H5 Mini-Program Differences Comparison](./dsl-h5-difference.md)
