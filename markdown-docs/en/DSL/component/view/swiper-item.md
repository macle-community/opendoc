## swiper-item

> Can only be placed in the swiper component. Width and height are automatically set to 100%.

### Sample Code

```html

<swiper class="swiper-container">
    <swiper-item>
        <view class="item">Page A</view>
    </swiper-item>
    <swiper-item>
        <view class="item">Page B</view>
    </swiper-item>
    <swiper-item>
        <view class="item">Page C</view>
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

