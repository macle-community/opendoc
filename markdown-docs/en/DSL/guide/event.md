## Events

#### What is an event

- An event is a way of communication from the view layer to the logic layer.
- Events can feed back user behavior to the logic layer for processing.
- Events can be bound to components. When the trigger condition is met, the corresponding event handler function in the logic layer will be executed.
- Event objects can carry additional information, such as id, dataset, touches.

#### How to use events

- Bind an event handler function to a component.
  For example, bindtap. When the user clicks the component, the corresponding event handler function will be found in the Page corresponding to that page.

  ```
  <view id="tapTest" data-hi="Macle" bindtap="tapName"> Click me! </view>
  ```

- Write the corresponding event handler function in the corresponding Page definition. The parameter is event.

  ```
  Page({
    tapName: function(e) {
      console.log(e)
    }
  })
  ```

- You can see the logged information is roughly as follows:

```json
{
  "type": "tap",
  "timeStamp": 895,
  "target": {
    "id": "tapTest",
    "dataset": {
      "hi": "macle"
    }
  },
  "currentTarget": {
    "id": "tapTest",
    "dataset": {
      "hi": "macle"
    }
  },
  "detail": {
    "x": 53,
    "y": 14
  },
  "touches": [
    {
      "identifier": 0,
      "pageX": 53,
      "pageY": 14,
      "clientX": 53,
      "clientY": 14
    }
  ],
  "changedTouches": [
    {
      "identifier": 0,
      "pageX": 53,
      "pageY": 14,
      "clientX": 53,
      "clientY": 14
    }
  ]
}
```

### Event details

#### Event classification

Events are divided into bubbling events and non-bubbling events:

1. Bubbling event: When an event on a component is triggered, the event will be passed to the parent node.
2. Non-bubbling event: When an event on a component is triggered, the event will not be passed to the parent node.

MAML bubbling event list:

| Type          | Trigger condition                                    |
|:------------|:----------------------------------------|
| touchstart  | Finger touch action starts                                |
| touchmove   | Finger moves after touching                                 |
| touchcancel | Finger touch action is interrupted, e.g. incoming call reminder, popup                      |
| touchend    | Finger touch action ends                                |
| tap         | Finger leaves immediately after touching                               |
| longtap     | Finger leaves after more than 350ms of touching (recommended to use the longpress event instead) |

**Note: Other custom events of components outside the table above are non-bubbling events unless otherwise specified, such as the `submit` event of form, the `input` event of input, the `scroll` event of scroll-view (see individual components for details))**

#### Normal event binding

The way to write event binding is similar to component properties, for example:

```maml
<view bindtap="handleTap"> Click here! </view>
```

If the user clicks this view, the page's `handleTap` will be called.

The event binding function can be a data binding, for example:

```maml
<view bindtap="{{ handlerName }}"> Click here! </view>
```

At this point, the page's `this.data.handlerName` must be a string specifying the event handler function name; if it is an empty string, this binding will be invalid (you can use this feature to temporarily disable some events).

In most components and custom components, a colon can follow `bind`, with the same meaning, such as `bind:tap` .

#### Binding and preventing event bubbling

In addition to `bind`, you can also use `catch` to bind events. Unlike `bind`, `catch` will prevent the event from bubbling up.

For example, in the following example, clicking the inner view will call `handleTap3` and `handleTap2` in sequence (because the tap event will bubble to the middle view, and the middle view prevents the tap event from bubbling and no longer passes it to the parent node). Clicking the middle view will trigger `handleTap2`, and clicking the outer view will trigger `handleTap1`.

```maml
<view id="outer" bindtap="handleTap1">
  outer view
  <view id="middle" catchtap="handleTap2">
    middle view
    <view id="inner" bindtap="handleTap3"> inner view </view>
  </view>
</view>
```

#### Event object

Unless otherwise specified, when a component triggers an event, the handler function bound to the event in the logic layer will receive an event object.

**BaseEvent basic event object property list:**

| Property        | Type      |
|:--------------|:--------|
| type          | String  |
| timeStamp     | Integer |
| target        | Object  |
| currentTarget | Object  |

**TouchEvent touch event object property list (inherits BaseEvent):**

| Property       | Type    | Description                     |
|:---------------|:------|:-----------------------|
| touches        | Array | Touch event. Array of touch point information currently staying on the screen |
| changedTouches | Array | Touch event. Array of changed touch point information     |


#### type

Represents the type of the event.

#### timeStamp

The number of milliseconds elapsed from the page opening to the triggering of the event.

#### target

The source component that triggered the event.

| Property  | Type     | Description                          |
|:--------|:-------|:----------------------------|
| id      | String | The id of the event source component                   |
| dataset | Object | A collection of custom properties starting with `data-` on the event source component |

#### currentTarget

The current component to which the event is bound.

| Property  | Type     | Description                         |
|:--------|:-------|:---------------------------|
| id      | String | The id of the current component                   |
| dataset | Object | A collection of custom properties starting with `data-` on the current component |

**Note: For target and currentTarget, refer to the example above. When clicking the inner view, both the target and currentTarget of the event object received by `handleTap3` are inner, while the target of the event object received by `handleTap2` is inner, and the currentTarget is middle.**

#### dataset

Some custom data can be attached to component nodes. This way, the custom node data can be obtained in the event for the logical processing of the event.

In MAML, these custom data start with `data-`, and multiple words are connected by a hyphen `-`. In this way of writing, the hyphen notation will be converted to camelCase, and uppercase characters will be automatically converted to lowercase. For example:

- `data-element-type` will eventually be presented as `event.currentTarget.dataset.elementType` ;
- `data-elementType` will eventually be presented as `event.currentTarget.dataset.elementtype` .

**Example:**

```maml
<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view> 

Page({
  bindViewTap:function(event){
    event.currentTarget.dataset.alphaBeta === 1 // - will be converted to camelCase
    event.currentTarget.dataset.alphabeta === 2 // uppercase will be converted to lowercase
  }
})
```

#### touches

touches is an array, each element is a Touch object (the touches carried in the canvas touch event is a CanvasTouch array). It represents the touch points currently staying on the screen.

#### Touch object

| Property           | Type     | Description                                      |
|:-----------------|:-------|:----------------------------------------|
| identifier       | Number | The identifier of the touch point                                 |
| pageX, pageY     | Number | The distance from the upper-left corner of the document. The upper-left corner of the document is the origin, the horizontal direction is the X axis, and the vertical direction is the Y axis   |
| clientX, clientY | Number | The distance from the upper-left corner of the page displayable area (screen excluding the navigation bar). The horizontal direction is the X axis, and the vertical direction is the Y axis |

#### changedTouches

The data format of changedTouches is the same as touches. It represents the touch points that have changed, such as from none to some (touchstart), position change (touchmove), from some to none (touchend, touchcancel).

#### detail

The data carried by custom events. For example, the submit event of the form component will carry the user's input, and the error event of the media will carry the error message. See the definition of each event in the component definition for details.

The x, y of the `detail` of the click event are the same as pageX, pageY, representing the distance from the upper-left corner of the document.

#### [SJS response events](SJS_EVENT)
