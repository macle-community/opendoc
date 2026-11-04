## scroll-view

> Scrollable view area. When using vertical scrolling, you need to give the scroll-view a fixed height, set via MASS. The length unit for component properties defaults to px.

| Property              | Type            | Default Value | Required | Description                                                                                        |
|:----------------------|:--------------|:------|:---|:------------------------------------------------------------------------------------------|
| scroll-x              | Boolean       | false | No  | Allow horizontal scrolling                                                                                    |
| scroll-y              | Boolean       | false | No  | Allow vertical scrolling                                                                                    |
| upper-threshold       | Number/String | 50    | No  | How far from the top/left to trigger the scrolltoupper event                                                             |
| lower-threshold       | Number/String | 50    | No  | How far from the bottom/right to trigger the scrolltolower event                                                             |
| scroll-top            | Number/String |       | No  | Set the vertical scrollbar position                                                                                 |
| scroll-left           | Number/String |       | No  | Set the horizontal scrollbar position                                                                                 |
| scroll-into-view      | String        |       | No  | The value should be the id of a child element (the id cannot start with a number). Sets which direction is scrollable, then scrolls to that element in that direction                                             |
| scroll-with-animation | Boolean       | false | No  | Use an animation transition when setting the scrollbar position                                                                           |
| enhanced              | Boolean       | false | No  | Enable scroll-view enhanced features                                                                       |
| show-scrollbar        | Boolean       | true  | No  | Scrollbar visibility control (takes effect when the enhanced property is enabled at the same time)                                                             |
| bindscrolltoupper     | Eventhandle   |       | No  | Triggered when scrolled to the top/left                                                                               |
| bindscrolltolower     | Eventhandle   |       | No  | Triggered when scrolled to the bottom/right                                                                               |
| bindscroll            | Eventhandle   |       | No  | Triggered when scrolling. event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY } |
| binddragstart         | Eventhandle   |       | No  | Drag start event (takes effect when the enhanced property is enabled at the same time) detail { scrollTop, scrollLef }                              |
| binddragging          | Eventhandle   |       | No  | Dragging event (takes effect when the enhanced property is enabled at the same time) detail { scrollTop, scrollLeft }                               |
| binddragend           | Eventhandle   |       | No  | Drag end event (takes effect when the enhanced property is enabled at the same time) detail { scrollTop, scrollLeft }                             |

### Sample Code

```html

<view>
  <scroll-view scroll-y='true' style='height: 200px;'>
    <view style='background-color: red; height: 200px'></view>
    <view style='background-color: blue; height: 200px'></view>
    <view style='background-color: green; height: 200px'></view>
    <view style='background-color: yellow; height: 200px'></view>
  </scroll-view>
</view>


```

### Bug & Tip

1. scroll-into-view takes precedence over scroll-top, and is only effective in the initial state.

2. Scrolling the scroll-view prevents page bounce-back, so scrolling inside the scroll-view cannot trigger onPullDownRefresh

3. If you want to use pull-to-refresh, please use page scrolling instead of scroll-view. This also allows returning to the top of the page by tapping the top status bar
