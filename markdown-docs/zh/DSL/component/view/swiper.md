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

```js

Page({
    data: {
        background: [
            {color: 'pink', text: 'Macle'},
            {color: 'peru', text: '小程序'},
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
    <view class="page-description">滑块视图容器</view>
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
                是否显示面板展示点
                <view>
                    <switch bindchange="whetherDisplayPanelIndicator" checked="{{indicatorDots}}"/>
                </view>
            </view>
            <view>
                滑动方向是否为纵向
                <view>
                    <switch bindchange="adoptDirectionVertical" checked="{{vertical}}"/>
                </view>
            </view>
            <view>
                是否采用衔接滑动
                <view>
                    <switch bindchange="adoptCircular" checked="{{circular}}"/>
                </view>
            </view>
            <view>
                是否自动切换
                <view>
                    <switch bindchange="adoptAutoplayInterval" checked="{{autoplay}}"/>
                </view>
            </view>
            <view>
                <slider bindchange="intervalAdopt" value="{{interval}}" show-value min="500" max="30000"/>
                <view>自动切换时间间隔(ms)</view>
            </view>
            <view>
                <slider bindchange="durationAdopt" value="{{duration}}" show-value min="500" max="30000"/>
                <view>滑动动画时长(ms)</view>
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

1. 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用。
