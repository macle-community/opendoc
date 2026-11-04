## swiper-item

> 仅可放置在 swiper 组件中，宽高自动设置为 100%。

### 示例代码

```html

<swiper class="swiper-container">
    <swiper-item>
        <view class="item">页面A</view>
    </swiper-item>
    <swiper-item>
        <view class="item">页面B</view>
    </swiper-item>
    <swiper-item>
        <view class="item">页面C</view>
    </swiper-item>
</swiper>

```

```css

.swiper-container{
    height: 160px;
}

.item{
    height: 100%;
    line-height: 180px;
    text-align: center;
}

swiper-item:nth-child(1) .item{
    background-color: rgb(81, 170, 81);
}
swiper-item:nth-child(2) .item{
    background-color: rgb(112, 183, 228);
}
swiper-item:nth-child(3) .item{
    background-color: rgb(230, 174, 182);
}

```

