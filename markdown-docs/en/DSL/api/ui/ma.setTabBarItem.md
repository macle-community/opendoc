## ma.setTabBarItem(Object object)

> Dynamically sets the content of a tabBar item

### Parameters

#### Object object

| Property           | Type     | Default | Required | Description                                          |
|:-----------------|:---------|:----|:---|:--------------------------------------------|
| index            | Number   |     | Yes  | Which item of the tabBar, counting from the left, starting from 0                     |
| text             | String   |     | No  | Button text on the tab                                  |
| iconPath         | String   |     | No  | Image path. The icon size is limited to 40kb, recommended size is 81px \* 81px     |
| selectedIconPath | String   |     | No  | Image path when selected. The icon size is limited to 40kb, recommended size is 81px \* 81px |
| success          | Function |     | No  | Callback function for successful interface call                                 |
| fail             | Function |     | No  | Callback function for failed interface call                                 |
| complete         | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)                    |

### Sample code

```js
ma.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
});
```