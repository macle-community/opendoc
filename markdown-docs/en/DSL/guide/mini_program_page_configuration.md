## Page configuration

> Each mini program page can also use a .json file to configure the window performance of that page. The configuration items in the page will override the same configuration items in the window of app.json for the current page. The file content is a JSON object with the following properties:

### Configuration items

| Property                         | Type        | Default Value     | Description                                                                                                                                                                                                           |
|:-----------------------------|:----------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| navigationBarBackgroundColor | HexColor  | #000000 | Navigation bar background color, e.g. #000000                                                                                                                                                                                            |
| navigationBarTextStyle       | String    | white   | Navigation bar title color. Only supports black / white                                                                                                                                                                                    |
| navigationBarTitleText       | String    |         | Navigation bar title text content                                                                                                                                                                                                    |
| navigationStyle              | String    | default | Navigation bar style. Supports the following values: `default`, `left`, `center`, `custom`; custom is a custom navigation bar that only keeps the capsule button in the upper right corner. When configured as left, the mini program displays the title bar with the title aligned to the left; when configured as center, the mini program displays the title bar with the title centered; the default option displays the title bar on ios with the title centered, and on android displays the title bar with the title aligned to the left (**Changed in 25.12.0, `left` and `center` added**) |
| showHomeButton               | Boolean   | true    | Whether to show the Home icon                                                                                                                                                                                                 |
| enablePullDownRefresh        | Boolean   | false   | Whether to enable pull-to-refresh for the current page                                                                                                                                                                                                 |
| usingComponents              | Object    | No       | Page custom component configuration                                                                                                                                                                                                    |
| onReachBottomDistance        | Number    | 50      | The distance from the bottom of the page when the page pull-up reach-bottom event is triggered, in px.                                                                                                                                                                                    |
| safeAreaBackgroundColor      | HexColor  | #ffffff | Bottom safe area background color, e.g. #ffffff (minimum version 26.3.0, only supports ios)                                                                                                                                                                      |
| allowGestueNavigate          | Boolean   | true    | Whether the mini program allows swiping left/right to enter the previous or next page via gestures. Defaults to allowed. Can be configured as false to disallow globally (minimum version 26.3.0, only supports ios)                                                                                                                                                                                           |

> The page configuration can only set the configuration items corresponding to window in app.json to determine the window performance of this page, so there is no need to write the window property.



### Tips:

1. Global configuration items apply to all pages of the mini program. Page configuration only applies to the page corresponding to the page configuration. The priority of page configuration items is higher than that of global configuration
2. `showHomeButton` is not a required item. When the mini program is not configured, the host APP configuration prevails. If the host APP is not configured, `showHomeButton` defaults to true
3. If the current page has configured `showHomeButton`, and the current page is opened as the specified page, whether the HomeIcon is displayed in the upper left corner will be affected by the `showHomeButton` configuration item
4. For ios devices, when the value of navigationStyle is `custom`, you can add the following style to the mass file of the corresponding page to ensure the page fills normally 
   ```css
   :root {
      min-height: 100vh;
   }
   ```



### Configuration example

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "Demo page",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```
