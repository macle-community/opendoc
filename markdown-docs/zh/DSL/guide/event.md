## 事件

#### 什么是事件

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
- 事件对象可以携带额外信息，如 id, dataset, touches。

#### 事件的使用方式

- 在组件中绑定一个事件处理函数。
  如 bindtap，当用户点击该组件的时候会在该页面对应的 Page 中找到相应的事件处理函数。

  ```
  <view id="tapTest" data-hi="Macle" bindtap="tapName"> Click me! </view>
  ```

- 在相应的 Page 定义中写上相应的事件处理函数，参数是 event。

  ```
  Page({
    tapName: function(e) {
      console.log(e)
    }
  })
  ```

- 可以看到 log 出来的信息大致如下：

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

### 事件详解

#### 事件分类

事件分为冒泡事件和非冒泡事件：

1. 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
2. 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

MAML 的冒泡事件列表：

| 类型          | 触发条件                                    |
|:------------|:----------------------------------------|
| touchstart  | 手指触摸动作开始                                |
| touchmove   | 手指触摸后移动                                 |
| touchcancel | 手指触摸动作被打断，如来电提醒，弹窗                      |
| touchend    | 手指触摸动作结束                                |
| tap         | 手指触摸后马上离开                               |
| longtap     | 手指触摸后，超过 350ms 再离开（推荐使用 longpress 事件代替） |

**注：除上表之外的其他组件自定义事件如无特殊声明都是非冒泡事件，如 form 的`submit`事件，input 的`input`事件，scroll-view 的`scroll`事件，(详见各个组件))**

#### 普通事件绑定

事件绑定的写法类似于组件的属性，如：

```maml
<view bindtap="handleTap"> Click here! </view>
```

如果用户点击这个 view ，则页面的 `handleTap` 会被调用。

事件绑定函数可以是一个数据绑定，如：

```maml
<view bindtap="{{ handlerName }}"> Click here! </view>
```

此时，页面的 `this.data.handlerName` 必须是一个字符串，指定事件处理函数名；如果它是个空字符串，则这个绑定会失效（可以利用这个特性来暂时禁用一些事件）。

在大多数组件和自定义组件中， `bind` 后可以紧跟一个冒号，其含义不变，如 `bind:tap` 。

#### 绑定并阻止事件冒泡

除 `bind` 外，也可以用 `catch` 来绑定事件。与 `bind` 不同， `catch` 会阻止事件向上冒泡。

例如在下边这个例子中，点击 inner view 会先后调用`handleTap3`和`handleTap2`(因为 tap 事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发`handleTap2`，点击 outer view 会触发`handleTap1`。

```maml
<view id="outer" bindtap="handleTap1">
  outer view
  <view id="middle" catchtap="handleTap2">
    middle view
    <view id="inner" bindtap="handleTap3"> inner view </view>
  </view>
</view>
```

#### 事件对象

如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

**BaseEvent 基础事件对象属性列表：**

| 属性            | 类型      |
|:--------------|:--------|
| type          | String  |
| timeStamp     | Integer |
| target        | Object  |
| currentTarget | Object  |

**TouchEvent 触摸事件对象属性列表（继承 BaseEvent）：**

| 属性             | 类型    | 说明                     |
|:---------------|:------|:-----------------------|
| touches        | Array | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array | 触摸事件，当前变化的触摸点信息的数组     |


#### type

代表事件的类型。

#### timeStamp

页面打开到触发事件所经过的毫秒数。

#### target

触发事件的源组件。

| 属性      | 类型     | 说明                          |
|:--------|:-------|:----------------------------|
| id      | String | 事件源组件的 id                   |
| dataset | Object | 事件源组件上由`data-`开头的自定义属性组成的集合 |

#### currentTarget

事件绑定的当前组件。

| 属性      | 类型     | 说明                         |
|:--------|:-------|:---------------------------|
| id      | String | 当前组件的 id                   |
| dataset | Object | 当前组件上由`data-`开头的自定义属性组成的集合 |

**说明： target 和 currentTarget 可以参考上例中，点击 inner view 时，`handleTap3` 收到的事件对象 target 和 currentTarget 都是 inner，而 `handleTap2` 收到的事件对象 target 就是 inner，currentTarget 就是 middle。**

#### dataset

在组件节点中可以附加一些自定义数据。这样，在事件中可以获取这些自定义的节点数据，用于事件的逻辑处理。

在 MAML 中，这些自定义数据以 `data-` 开头，多个单词由连字符 `-` 连接。这种写法中，连字符写法会转换成驼峰写法，而大写字符会自动转成小写字符。如：

- `data-element-type` ，最终会呈现为 `event.currentTarget.dataset.elementType` ；
- `data-elementType` ，最终会呈现为 `event.currentTarget.dataset.elementtype` 。

**示例：**

```maml
<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view> 

Page({
  bindViewTap:function(event){
    event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
    event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
  }
})
```

#### touches

touches 是一个数组，每个元素为一个 Touch 对象（canvas 触摸事件中携带的 touches 是 CanvasTouch 数组）。 表示当前停留在屏幕上的触摸点。

#### Touch 对象

| 属性               | 类型     | 说明                                      |
|:-----------------|:-------|:----------------------------------------|
| identifier       | Number | 触摸点的标识符                                 |
| pageX, pageY     | Number | 距离文档左上角的距离，文档的左上角为原点 ，横向为 X 轴，纵向为 Y 轴   |
| clientX, clientY | Number | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴 |

#### changedTouches

changedTouches 数据格式同 touches。 表示有变化的触摸点，如从无变有（touchstart），位置变化（touchmove），从有变无（touchend、touchcancel）。

#### detail

自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入，媒体的错误事件会携带错误信息，详见组件定义中各个事件的定义。

点击事件的`detail` 带有的 x, y 同 pageX, pageY 代表距离文档左上角的距离。

#### [SJS 响应事件](SJS_EVENT)
