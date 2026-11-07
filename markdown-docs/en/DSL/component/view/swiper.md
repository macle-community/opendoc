## swiper

> Slider view container. Only swiper-item components can be placed inside, otherwise it will lead to undefined behavior.

| Property               | Type          | Default Value        | Required | Description                                                |
|:-----------------------|:------------|:------------------|:---|:--------------------------------------------------|
| indicator-dots         | Boolean     | false             | No  | Whether to show panel indicator dots                                         |
| indicator-color        | String      | rgba(0, 0, 0, .3) | No  | Indicator dot color                                             |
| indicator-active-color | String      | #000000           | No  | Color of the currently selected indicator dot                                        |
| autoplay               | Boolean     | false             | No  | Whether to auto-switch                                            |
| current                | Number      | 0                 | No  | The index of the current slider                                     |
| interval               | Number      | 5000              | No  | Auto-switch time interval                                          |
| duration               | Number      | 500               | No  | Slide animation duration                                            |
| circular               | Boolean     | false             | No  | Whether to use continuous sliding                                          |
| vertical               | Boolean     | false             | No  | Whether the sliding direction is vertical                                         |
| easing-function        | String      | "default"         | No  | Specifies the swiper switching easing animation type                                |
| bindchange             | Eventhandle |                   | No  | Triggered with a change event when current changes. event.detail = {current} |

### Valid values of easing-function

| Value         | Description     |
|:---------------|:-------|
| default        | Default easing function |
| linear         | Linear animation   |
| easeInCubic    | Ease-in animation   |
| easeOutCubic   | Ease-out animation   |
| easeInOutCubic | Ease-in ease-out animation |

### Sample Code

#### 1. Interactive Swiper with Indicators & Autoplay

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

#### 2. Circular & Vertical Swiping

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

1. If you use setData to change the current value in the event callback function of bindchange, it may cause setData to be called continuously.
