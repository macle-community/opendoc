## 页面配置

> 每一个小程序页面也可以使用 .json 文件来对本页面的窗口表现进行配置。页面中配置项在当前页面会覆盖 app.json 的 window 中相同的配置项。文件内容为一个 JSON 对象，有以下属性：

### 配置项

| 属性                           | 类型        | 默认值     | 描述                                                                                                                                                                                                           |
|:-----------------------------|:----------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| navigationBarBackgroundColor | HexColor  | #000000 | 导航栏背景颜色，如 #000000                                                                                                                                                                                            |
| navigationBarTextStyle       | String    | white   | 导航栏标题颜色，仅支持 black / white                                                                                                                                                                                    |
| navigationBarTitleText       | String    |         | 导航栏标题文字内容                                                                                                                                                                                                    |
| navigationStyle              | String    | default | 导航栏样式，支持以下值：`default`、`left`、`center`、`custom`；custom 自定义导航栏，只保留右上角胶囊按钮。配置left时，小程序显示标题栏，且标题居左显示；配置center时，小程序显示标题栏，且标题居中显示，default选项，ios上显示标题栏，标题居中显示，android上显示标题栏，标题居左显示（**25.12.0变更，新增`left`、`center`**） |
| showHomeButton               | Boolean   | true    | 是否展示 Home 图标                                                                                                                                                                                                 |
| enablePullDownRefresh        | Boolean   | false   | 是否开启当前页面下拉刷新                                                                                                                                                                                                 |
| usingComponents              | Object    | 否       | 页面自定义组件配置                                                                                                                                                                                                    |
| onReachBottomDistance        | Number    | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px。                                                                                                                                                                                    |
| safeAreaBackgroundColor      | HexColor  | #ffffff | 底部安全区域背景颜色，如 #ffffff（最低版本26.3.0，仅支持ios）                                                                                                                                                                      |
| allowGestueNavigate          | Boolean   | true    | 小程序是否允许通过手势左右滑动进入上一个页面或者下一个页面, 默认允许，可以配置为false，全局不允许（最低版本26.3.0，仅支持ios）                                                                                                                                                                                            |

> 页面配置中只能设置 app.json 中 window 对应的配置项，以决定本页面的窗口表现，所以无需写 window 这个属性。



### Tips：

1. 全局配置项作用于小程序的所有页面，页面配置仅作用于页面配置对应的页面，页面配置项的优先级高于全局配置
2. `showHomeButton` 为非必填项，当小程序未配置时，以宿主APP配置为准，若宿主APP未配置则默认 `showHomeButton` 为true
3. 若当前页面配置了`showHomeButton`，且以当前页面作为指定页面打开时，左上角是否显示HomeIcon将受 `showHomeButton`配置项影响
4. 针对ios机型，当navigationStyle的值为 `custom`时，可在对应页面的mass文件中添加如下样式以保证页面正常铺满 
   ```css
   :root {
      min-height: 100vh;
   }
   ```



### 配置示例

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "演示页面",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```
