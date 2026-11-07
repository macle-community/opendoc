## scroll-view

> 可滚动视图区域。使用竖向滚动时，需要给 scroll-view 一个固定高度，通过 MASS 设置 height。组件属性的长度单位默认为 px。

| 属性                    | 类型            | 默认值   | 必填 | 说明                                                                                        |
|:----------------------|:--------------|:------|:---|:------------------------------------------------------------------------------------------|
| scroll-x              | Boolean       | false | 否  | 允许横向滚动                                                                                    |
| scroll-y              | Boolean       | false | 否  | 允许纵向滚动                                                                                    |
| upper-threshold       | Number/String | 50    | 否  | 距顶部/左边多远时，触发 scrolltoupper 事件                                                             |
| lower-threshold       | Number/String | 50    | 否  | 距底部/右边多远时，触发 scrolltolower 事件                                                             |
| scroll-top            | Number/String |       | 否  | 设置竖向滚动条位置                                                                                 |
| scroll-left           | Number/String |       | 否  | 设置横向滚动条位置                                                                                 |
| scroll-into-view      | String        |       | 否  | 值应为某子元素 id（id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素                                             |
| scroll-with-animation | Boolean       | false | 否  | 在设置滚动条位置时使用动画过渡                                                                           |
| enhanced              | Boolean       | false | 否  | 启用 scroll-view 增强特性                                                                       |
| show-scrollbar        | Boolean       | true  | 否  | 滚动条显隐控制 (同时开启 enhanced 属性后生效)                                                             |
| bindscrolltoupper     | Eventhandle   |       | 否  | 滚动到顶部/左边时触发                                                                               |
| bindscrolltolower     | Eventhandle   |       | 否  | 滚动到底部/右边时触发                                                                               |
| bindscroll            | Eventhandle   |       | 否  | 滚动时触发，event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY } |
| binddragstart         | Eventhandle   |       | 否  | 滑动开始事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLef }                              |
| binddragging          | Eventhandle   |       | 否  | 滑动事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }                               |
| binddragend           | Eventhandle   |       | 否  | 滑动结束事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }                             |

### 示例代码

#### 1. 垂直滚动视图

```html
<scroll-view scroll-y="true" style="height: 160px;" bindscrolltoupper="onScrollToUpper" bindscrolltolower="onScrollToLower">
  <view class="scroll-v-item bg-red">Scroll Item 1 (Top)</view>
  <view class="scroll-v-item bg-orange">Scroll Item 2</view>
  <view class="scroll-v-item bg-green">Scroll Item 3</view>
  <view class="scroll-v-item bg-blue">Scroll Item 4 (Bottom)</view>
</scroll-view>
```

```js
Page({
  onScrollToUpper() { ma.showToast({ title: 'Top Reached', icon: 'none' }); },
  onScrollToLower() { ma.showToast({ title: 'Bottom Reached', icon: 'none' }); }
});
```

```css
.scroll-v-item { height: 70px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 600; margin-bottom: 8px; border-radius: 8px; }
.bg-red { background: #ef4444; } .bg-orange { background: #f97316; } .bg-green { background: #10b981; } .bg-blue { background: #3b82f6; }
```

#### 2. 水平滚动视图

```html
<scroll-view scroll-x="true" style="white-space: nowrap; width: 100%;">
  <view class="scroll-h-item bg-blue">Card 1</view>
  <view class="scroll-h-item bg-green">Card 2</view>
  <view class="scroll-h-item bg-orange">Card 3</view>
  <view class="scroll-h-item bg-purple">Card 4</view>
  <view class="scroll-h-item bg-pink">Card 5</view>
</scroll-view>
```

```js
Page({ data: {} });
```

```css
.scroll-h-item { display: inline-block; width: 110px; height: 80px; margin-right: 10px; border-radius: 8px; text-align: center; line-height: 80px; color: #fff; font-weight: 600; }
.bg-purple { background: #8b5cf6; } .bg-pink { background: #ec4899; }
```


### Bug & Tip

1. scroll-into-view 的优先级高于 scroll-top，仅在初始状态有效。

2. 在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh

3. 若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view ，这样也能通过点击顶部状态栏回到页面顶部
