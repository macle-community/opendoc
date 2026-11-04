## SJS response events

### Background

Effects with frequent user interaction are relatively laggy on mini programs. For example, a page has 2 elements A and B. The user performs a touchmove gesture on A, and B is required to follow and move. The response process of one touchmove event is:

a. The touchmove event is thrown from the view layer (view) to the logic layer (service)

b. The logic layer (service) processes the touchmove event, and then changes the position of B through setData

The response of one touchmove requires 2 communications between the logic layer and the rendering layer and one rendering. The communication cost is relatively large. In addition, setData rendering will also block the execution of other scripts, resulting in a delay in the entire user interaction animation process.  
Therefore, to support such rich interaction scenarios, the number of communications must be reduced, allowing events to be responded to directly on the view side. SJS functions support responding to events of basic components. Without data updates, they can directly drive changes to the styles, class names, etc. of view elements, and can also query the layout information of elements, etc.

### Usage

#### Event callback

**Input parameters**

| Parameter     | Description                                                                                                                          |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| event         | [Event object](FRAMEWORK_EVENT)                                                                                                   |
| ownerInstance | Represents the ComponentDescriptor instance of the component where the event-triggering component is located. If the event-triggering component is within a page, ownerInstance represents the page instance. |

**ownerInstance is defined as follows**

| Method                        | Parameters                     | Description                                                                                               |
| :---------------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------- |
| selectComponent               | selector object                | Returns the ComponentDescriptor instance of the component.                                                              |
| selectAllComponents           | selector object array          | Returns an array of ComponentDescriptor instances of the components.                                                          |
| setStyle                      | Object/string                  | Sets the component style. Supports rpx. The priority of the set style is higher than the style defined in the component maml. The style of the top-level page cannot be set.   |
| addClass/removeClass/hasClass | String                         | Sets the class of the component. The priority of the set class is higher than the class defined in the component maml. The class of the top-level page cannot be set. |
| getDataset                    | None                             | Returns the dataset object of the current component/page                                                                   |
| callMethod                    | (funcName:string, args:object) | Calls the function defined in the logic layer (service) of the current component/page. funcName indicates the function name, and args indicates the function parameters.       |

> SJS runs in the view layer (view). The logic that can be done in it is relatively limited. A mechanism is needed to communicate with the developer's code in the logic layer (service). The above **callMethod** is the method in SJS to call the developer's code in the logic layer (service).

### Usage restrictions

- Only events of built-in components can be responded to. Events of custom components and native components are not supported.

### Example

```js
// common.sjs
/**
 * Slider calculates position
 */
var starLeft = 0;
var starTop = 0;
var starX = 0;
var starY = 0;
function liveTouchmove(event, ownerInstance) {
  var left = 0,
    top = 0;
  var diffX = 0,
    diffY = 0;
  if (event.type === 'touchstart') {
    starLeft = event.currentTarget.offsetLeft;
    starTop = event.currentTarget.offsetTop;
    starX = event.changedTouches[0].clientX;
    starY = event.changedTouches[0].clientY;
    left = starLeft;
    top = starTop;
  } else {
    diffX = event.changedTouches[0].clientX - starX;
    diffY = event.changedTouches[0].clientY - starY;
    left = starLeft + diffX;
    top = starTop + diffY;
  }
  left = left + 'px';
  var instance = ownerInstance.selectComponent('.liveMove'); // returns the instance of the component
  instance.callMethod('callMe', { top: { top: { top: top, aa: '1' }, bb: '222' }, call: [1, 2, 3] });
  instance.setStyle({
    left: left,
    top: top + 'px'
  });
}

/**
 * Click live entry
 * @param
 */
function clickLive(event, ownerInstance) {
  ownerInstance.callMethod('bindEnter');
}
module.exports = {
  liveTouchmove: liveTouchmove,
  clickLive: clickLive
};
```

```maml
<sjs module="comm" src="../../../util/common.sjs"></sjs>
<view
  class="enterLive liveMove"
  style="top:202px;left:100px"
  bind:touchstart="{{comm.liveTouchmove}}"
  bind:touchmove="{{comm.liveTouchmove}}"
  bind:touchend="{{comm.liveTouchmove}}"
>
  <view class="live-block" bind:tap="{{comm.clickLive}}">
    <image
      class="liveEnter-img"
      mode="aspectFit"
      src="https://img0.baidu.com/it/u=401284325,23907343&fm=26&fmt=auto&gp=0.jpg"
    />
  </view>
</view>
```
