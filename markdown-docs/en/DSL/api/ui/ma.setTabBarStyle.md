## ma.setTabBarStyle(Object object)

> Dynamically sets the overall style of the tabBar

### Parameters

#### Object object

| Property         | Type     | Default | Required | Description                             |
|:----------------|:---------|:----|:---|:-------------------------------|
| color           | String   |     | No  | Default text color on the tab, HexColor          |
| selectedColor   | String   |     | No  | Text color on the tab when selected, HexColor        |
| backgroundColor | String   |     | No  | Background color of the tab, HexColor              |
| borderStyle     | String   |     | No  | Color of the top border of the tabBar, only supports black/white |
| success         | Function |     | No  | Callback function for successful interface call                    |
| fail            | Function |     | No  | Callback function for failed interface call                    |
| complete        | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)       |

### Sample code

```js
ma.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
});
```