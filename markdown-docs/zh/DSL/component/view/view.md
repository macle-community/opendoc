## view

> 视图容器

| 属性                     | 类型      | 默认值   | 必填 | 说明                                       |
|:-----------------------|:--------|:------|:---|:-----------------------------------------|
| hover-class            | String  | none  | 否  | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
| hover-stop-propagation | Boolean | false | 否  | 指定是否阻止本节点的祖先节点出现点击态                      |
| hover-start-time       | Number  | 50    | 否  | 按住后多久出现点击态，单位毫秒                          |
| hover-stay-time        | Number  | 400   | 否  | 手指松开后点击态保留时间，单位毫秒                        |

### 示例代码

```js

Page({
    data: {
        pageName: 'component/view',
    },
});

```

```html

<view class="page">
    <view class="page-description">视图容器相当于 web 的 div 或 react-native 的 View</view>
    <view class="page-section">
        <view class="page-section-demo">
            <view class="stream">
                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Zoe</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            欢迎来到Macle小程序！
                        </view>
                        <view class="postBodyDate">
                            June 12
                        </view>
                    </view>
                </view>

                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Jim</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            @Zog 如何开始？
                        </view>
                        <view class="postBodyDate">
                            June 13
                        </view>
                    </view>
                </view>

                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Zog</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            你可以看 Demo，有一个简单的了解；下载我们的 IDE 进行开发~
                        </view>
                        <view class="postBodyDate">
                            June 14
                        </view>
                    </view>
                </view>

                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Alice</view>
                    </view>
                    <!-- hover blue -->
                    <view class="postBody" hover-class="burlywood">
                        <view class="postBodyContent">
                            excellent!
                        </view>
                        <view class="postBodyDate" hidden>
                            June 15
                        </view>
                    </view>
                </view>

                <view class="post" hidden>
                    <view class="postUser">
                        <view class="postUserName">Alice</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            excellent +1
                        </view>
                        <view class="postBodyDate">
                            June 15
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</view>

```

```css

.burlywood {
    background: burlywood;
}

.stream {
    display: flex;
    flex-direction: column;
    padding: 15rpx;
}

.post + .post {
    margin-top: 15rpx;
}

.post {
    display: flex;
}

.postUser {
    flex: 0 1 auto;
    padding-bottom: 20rpx;
}

.postUserName {
    width: 180rpx;
    color: #7197a5;
    font-size: 24rpx;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-top: 60rpx;
}

.postBody {
    flex: 1 1 0%;
    position: relative;
    padding: 30rpx;
    border: 2rpx solid #b0b7b9;
    border-radius: 8rpx;
}

.postBody:after,
.postBody:before {
    right: 100%;
    top: 70rpx;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.postBody:after {
    border-color: transparent;
    border-right-color: #ffffff;
    border-width: 16rpx;
    margin-top: -16rpx;
}

.postBody:before {
    border-color: transparent;
    border-right-color: #deebf0;
    border-width: 18rpx;
    margin-top: -18rpx;
}

.postBodyContent {
    color: #769caa;
    font-size: 24rpx;
}

.postBodyDate {
    margin-top: 15rpx;
    color: #708188;
    font-size: 20rpx;
    text-transform: uppercase;
    letter-spacing: 2rpx;
}

.burlywood {
    color: burlywood;
}

```

### Bug & Tip

1. 如果需要使用滚动视图，请使用 scroll-view
