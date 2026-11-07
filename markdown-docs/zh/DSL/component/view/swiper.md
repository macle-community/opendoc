## swiper

> 滑块视图容器。其中只可放置 swiper-item 组件，否则会导致未定义的行为。

| 属性                     | 类型          | 默认值               | 必填 | 说明                                                |
|:-----------------------|:------------|:------------------|:---|:--------------------------------------------------|
| indicator-dots         | Boolean     | false             | 否  | 是否显示面板指示点                                         |
| indicator-color        | String      | rgba(0, 0, 0, .3) | 否  | 指示点颜色                                             |
| indicator-active-color | String      | #000000           | 否  | 当前选中的指示点颜色                                        |
| autoplay               | Boolean     | false             | 否  | 是否自动切换                                            |
| current                | Number      | 0                 | 否  | 当前所在滑块的 index                                     |
| interval               | Number      | 5000              | 否  | 自动切换时间间隔                                          |
| duration               | Number      | 500               | 否  | 滑动动画时长                                            |
| circular               | Boolean     | false             | 否  | 是否采用衔接滑动                                          |
| vertical               | Boolean     | false             | 否  | 滑动方向是否为纵向                                         |
| easing-function        | String      | "default"         | 否  | 指定 swiper 切换缓动动画类型                                |
| bindchange             | Eventhandle |                   | 否  | current 改变时会触发 change 事件，event.detail = {current} |

### easing-function 的合法值

| 值              | 说明     |
|:---------------|:-------|
| default        | 默认缓动函数 |
| linear         | 线性动画   |
| easeInCubic    | 缓入动画   |
| easeOutCubic   | 缓出动画   |
| easeInOutCubic | 缓入缓出动画 |

### 示例代码

#### 1. 自动轮播与面板指示点

```html
<swiper indicator-dots="true" autoplay="true" interval="2500" duration="500" circular="true" style="height: 160px; border-radius: 10px; overflow: hidden;">
  <swiper-item>
    <view class="swiper-slide slide-blue"><text class="slide-text">Slide A - Macle</text></view>
  </swiper-item>
  <swiper-item>
    <view class="swiper-slide slide-green"><text class="slide-text">Slide B - Simulator</text></view>
  </swiper-item>
  <swiper-item>
    <view class="swiper-slide slide-orange"><text class="slide-text">Slide C - OpenDoc</text></view>
  </swiper-item>
</swiper>
```

```js
Page({ data: {} });
```

```css
.swiper-slide { height: 100%; display: flex; align-items: center; justify-content: center; }
.slide-text { color: #fff; font-size: 18px; font-weight: bold; }
.slide-blue { background: #2563eb; } .slide-green { background: #16a34a; } .slide-orange { background: #ea580c; }
```

#### 2. 循环衔接与纵向滑动

```html
<swiper vertical="true" indicator-dots="true" autoplay="false" style="height: 120px; border-radius: 10px; overflow: hidden;">
  <swiper-item><view class="swiper-slide slide-purple"><text class="slide-text">Vertical Panel 1</text></view></swiper-item>
  <swiper-item><view class="swiper-slide slide-teal"><text class="slide-text">Vertical Panel 2</text></view></swiper-item>
</swiper>
```

```js
Page({ data: {} });
```

```css
.slide-purple { background: #7c3aed; } .slide-teal { background: #0d9488; }
```


### Bug & Tip

1. 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用。
