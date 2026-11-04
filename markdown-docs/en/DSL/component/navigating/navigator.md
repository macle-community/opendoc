## navigator

> Page link

| Property               | Type      | Default Value     | Required | Description                                       |
|:-----------------------|:--------|:----------------|:---|:-----------------------------------------|
| url                    | String  |                 | No  | Jump link within the current mini program                              |
| open-type              | String  | navigate        | No  | Jump method                                     |
| delta                  | Number  | 1               | No  | Effective when open-type is 'navigateBack'. Indicates the number of layers to go back |
| hover-class            | String  | navigator-hover | No  | Specifies the style class on click. When hover-class="none", there is no pressed state effect  |
| hover-stop-propagation | Boolean | false           | No  | Specifies whether to prevent the ancestor nodes of this node from showing the pressed state                      |
| hover-start-time       | Number  | 50              | No  | How long after pressing the pressed state appears, in milliseconds                          |
| hover-stay-time        | Number  | 600             | No  | How long the pressed state remains after the finger is released, in milliseconds                        |

### Valid values of open-type

| Value        | Description                                              |
|:-------------|:------------------------------------------------|
| navigate     | Corresponds to the function of ma.navigateTo or ma.navigateToMiniProgram |
| redirect     | Corresponds to the function of ma.redirectTo                            |
| switchTab    | Corresponds to the function of ma.switchTab                             |
| reLaunch     | Corresponds to the function of ma.reLaunch                              |
| navigateBack | Corresponds to the function of ma.navigateBack                          |

### Sample Code

```html

<view>
  <view>
    <navigator url='exampleUrl1' class='navigator'>
      <button type='default'>navigateTo page 1</button>
    </navigator>
    <navigator url='exampleUrl2' class='navigator' open-type='redirect' hover-class='other-navigator-hover'>
      <button type='default'>redirectTo page 2</button>
    </navigator>
    <navigator url='/page/tabbar/component/index' class='navigator' open-type='switchTab'
               hover-class='custom-navigator-hover'>
      <button type='default'>switchTab</button>
    </navigator>
    <navigator url='exampleUrl3' open-type='reLaunch' class='navigator'>
      <button type='default'>reLaunch to page 3</button>
    </navigator>
    <navigator open-type='navigateBack' class='navigator' delta='1'>
      <button type='default'>Back</button>
    </navigator>
  </view>
</view>
```

```css
.navigator-hover button {
    background-color: #DEDEDE;
}

.other-navigator-hover button {
    background-color: #DEDEDE;
}

.navigator {
    padding: 10px
}

.custom-navigator-hover {
    background-color: pink;
}

.other-navigator-hover {
    background-color: rgb(228, 206, 7);
}
```

### Bug & Tip

1.`navigator-hover` defaults to `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, the background color of `navigator`'s child nodes should be transparent
