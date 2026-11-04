## SJS 响应事件

### 背景

有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 touchmove 手势，要求 B 也跟随移动，一次 touchmove 事件的响应过程为：

a、touchmove 事件从视图层（view）抛到逻辑层（service）

b、逻辑层（service）处理 touchmove 事件，再通过 setData 来改变 B 的位置

一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。  
因此，要支持此种富交互场景，必须减少通信次数，允许在 view 侧直接响应事件。SJS 函数支持响应基础组件的事件，无需数据更新，可直接驱动视图元素的样式、类名等的变更，也可查询元素的布局信息等。

### 使用方法

#### 事件回调

**入参**

| 参数          | 说明                                                                                                                          |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| event         | [事件对象](FRAMEWORK_EVENT)                                                                                                   |
| ownerInstance | 表示的是触发事件的组件所在的组件的 ComponentDescriptor 实例，如果触发事件的组件是在页面内的，ownerInstance 表示的是页面实例。 |

**ownerInstance 定义如下**

| 方法                          | 参数                           | 描述                                                                                               |
| :---------------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------- |
| selectComponent               | selector 对象                  | 返回组件的 ComponentDescriptor 实例。                                                              |
| selectAllComponents           | selector 对象数组              | 返回组件的 ComponentDescriptor 实例数组。                                                          |
| setStyle                      | Object/string                  | 设置组件样式，支持 rpx。设置的样式优先级比组件 maml 里面定义的样式高。不能设置最顶层页面的样式。   |
| addClass/removeClass/hasClass | String                         | 设置组件的 class。设置的 class 优先级比组件 maml 里面定义的 class 高。不能设置最顶层页面的 class。 |
| getDataset                    | 无                             | 返回当前组件/页面的 dataset 对象                                                                   |
| callMethod                    | (funcName:string, args:object) | 调用当前组件/页面在逻辑层（service）定义的函数。funcName 表示函数名称，args 表示函数的参数。       |

> SJS 运行在视图层（view），里面的逻辑毕竟能做的事件比较少，需要有一个机制和逻辑层（service）开发者的代码通信，上面的 **callMethod** 是 SJS 里面调用逻辑层（service）开发者的代码的方法。

### 使用限制

- 只能响应内置组件的事件，不支持自定义组件和原生组件的事件。

### 示例

```js
// common.sjs
/**
 * 滑块计算位置
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
  var instance = ownerInstance.selectComponent('.liveMove'); // 返回组件的实例
  instance.callMethod('callMe', { top: { top: { top: top, aa: '1' }, bb: '222' }, call: [1, 2, 3] });
  instance.setStyle({
    left: left,
    top: top + 'px'
  });
}

/**
 * 点击直播入口
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
