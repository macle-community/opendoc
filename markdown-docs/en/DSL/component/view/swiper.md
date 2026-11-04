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

```js

Page({
    data: {
        background: [
            {color: 'pink', text: 'Macle'},
            {color: 'peru', text: 'Mini program'},
            {color: 'yellowgreen', text: 'Swiper'}
        ],
        indicatorDots: true,
        autoplay: true,
        vertical: false,
        interval: 2000,
        circular: false,
        duration: 1000,
    },
    onLoad() {
    },
    whetherDisplayPanelIndicator(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots,
        });
    },
    adoptDirectionVertical() {
        this.setData({
            vertical: !this.data.vertical,
        });
    },
    adoptCircular(e) {
        this.setData({
            circular: !this.data.circular,
        });
    },
    adoptAutoplayInterval(e) {
        this.setData({
            autoplay: !this.data.autoplay,
        });
    },
    intervalAdopt(e) {
        this.setData({
            interval: e.detail.value,
        });
    },
    durationAdopt(e) {
        console.log(e.detail.value);
        this.setData({
            duration: e.detail.value,
        });
    }
});

```

```html

<view class="container">
    <view class="page-description">Slider view container</view>
    <view class="page-section">
        <view class="page-section-demo">
            <swiper style="height:150px" class="demo-swiper" previousMargin="10px" nextMargin="10px"
                    indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" vertical="{{vertical}}"
                    interval="{{interval}}" circular="{{circular}}" duration="{{duration}}">
                <swiper-item ma:key="swiper-item-{{index}}" ma:for="{{background}}">
                    <view class="swiper-item ma_{{item.color}}">{{item.text}}</view>
                </swiper-item>
            </swiper>
        </view>
        <view class="pagination-section-control">
            <view>
                Whether to show panel indicator dots
                <view>
                    <switch bindchange="whetherDisplayPanelIndicator" checked="{{indicatorDots}}"/>
                </view>
            </view>
            <view>
                Whether the sliding direction is vertical
                <view>
                    <switch bindchange="adoptDirectionVertical" checked="{{vertical}}"/>
                </view>
            </view>
            <view>
                Whether to use continuous sliding
                <view>
                    <switch bindchange="adoptCircular" checked="{{circular}}"/>
                </view>
            </view>
            <view>
                Whether to auto-switch
                <view>
                    <switch bindchange="adoptAutoplayInterval" checked="{{autoplay}}"/>
                </view>
            </view>
            <view>
                <slider bindchange="intervalAdopt" value="{{interval}}" show-value min="500" max="30000"/>
                <view>Auto-switch time interval (ms)</view>
            </view>
            <view>
                <slider bindchange="durationAdopt" value="{{duration}}" show-value min="500" max="30000"/>
                <view>Slide animation duration (ms)</view>
            </view>
        </view>
    </view>
</view>

```

```css

.swiper-item {
    display: block;
    height: 150px;
    margin: 10px;
    color: #fff;
    text-align: center;
    line-height: 150px;
    font-size: 20px;
}

.pagination-section-control {
    padding: 12px;
}

.pagination-section-control view {
    margin-bottom: 12px;
}


.margin-t {
    margin-top: 24px;
}

.ma_pink {
    background-color: pink;
}

.ma_peru {
    background-color: peru;
}

.ma_yellowgreen {
    background-color: yellowgreen;
}

```

### Bug & Tip

1. If you use setData to change the current value in the event callback function of bindchange, it may cause setData to be called continuously.
